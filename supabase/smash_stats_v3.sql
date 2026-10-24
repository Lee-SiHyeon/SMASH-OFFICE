-- v3: 방문·플레이 기록과 통계 대시보드
drop function if exists public.smash_hdr();
create table if not exists public.smash_events (
  id bigint generated always as identity primary key,
  ts timestamptz not null default now(),
  kind text not null check (kind in ('hub', 'visit', 'play', 'finish')),
  company text, mode text, country text, lang text, mobile boolean, vid text
);
alter table public.smash_events enable row level security; -- 정책 없음 = 직접 읽기/쓰기 불가, RPC로만
create index if not exists smash_events_ts on public.smash_events (ts);
create index if not exists smash_events_vid on public.smash_events (vid, kind, ts);
create table if not exists public.smash_admin (k text primary key);
alter table public.smash_admin enable row level security;

create or replace function public.smash_log(p_kind text, p_company text default null, p_mode text default null, p_lang text default null, p_mobile boolean default null, p_cc text default null)
returns void language plpgsql security definer set search_path = public as $$
declare
  hd json := current_setting('request.headers', true)::json;
  ip text := coalesce(hd->>'cf-connecting-ip', split_part(hd->>'x-forwarded-for', ',', 1), '');
  v text := left(md5(ip || coalesce(hd->>'user-agent', '') || to_char(now() at time zone 'Asia/Seoul', 'YYYYMMDD') || 'smash-v'), 16);
  c text := upper(coalesce(nullif(hd->>'cf-ipcountry', ''), p_cc, ''));
begin
  if p_kind not in ('hub', 'visit', 'play', 'finish') then return; end if;
  if c in ('', 'XX', 'T1') or length(c) <> 2 then c := null; end if;
  -- 같은 사람·같은 회사·같은 종류는 5초에 한 번만
  if exists (select 1 from smash_events where vid = v and kind = p_kind and company is not distinct from p_company and ts > now() - interval '5 seconds') then return; end if;
  insert into smash_events(kind, company, mode, country, lang, mobile, vid)
  values (p_kind, left(p_company, 40), left(p_mode, 10), c, left(p_lang, 5), p_mobile, v);
end $$;

create or replace function public.smash_stats(p_key text, p_days int default 7)
returns json language plpgsql security definer set search_path = public stable as $$
declare d int := greatest(1, least(coalesce(p_days, 7), 365)); since timestamptz; r json;
begin
  if not exists (select 1 from smash_admin where k = p_key) then return json_build_object('ok', false); end if;
  since := date_trunc('day', now() at time zone 'Asia/Seoul') at time zone 'Asia/Seoul' - make_interval(days => d - 1);
  select json_build_object(
    'ok', true, 'days', d, 'since', since,
    'tot', (select json_build_object(
        'hub', count(*) filter (where kind = 'hub'), 'visit', count(*) filter (where kind = 'visit'),
        'play', count(*) filter (where kind = 'play'), 'finish', count(*) filter (where kind = 'finish'),
        'users', count(distinct vid), 'mobile', round(100.0 * count(*) filter (where mobile) / nullif(count(*) filter (where mobile is not null), 0))
      ) from smash_events where ts >= since),
    'scores', (select json_build_object('n', count(*), 'nicks', count(distinct nick)) from smash_scores where created_at >= since),
    'daily', (select coalesce(json_agg(x order by x.d), '[]') from (
        select to_char(ts at time zone 'Asia/Seoul', 'MM-DD') d, count(*) filter (where kind in ('hub', 'visit')) v,
               count(*) filter (where kind = 'play') p, count(distinct vid) u
        from smash_events where ts >= since group by 1) x),
    'companies', (select coalesce(json_agg(x order by x.p desc, x.v desc), '[]') from (
        select company c, count(*) filter (where kind = 'visit') v, count(*) filter (where kind = 'play') p,
               count(*) filter (where kind = 'finish') f, count(distinct vid) u
        from smash_events where ts >= since and company is not null group by 1 order by 3 desc, 2 desc limit 40) x),
    'countries', (select coalesce(json_agg(x order by x.u desc), '[]') from (
        select coalesce(country, '??') cc, count(*) n, count(distinct vid) u, count(*) filter (where kind = 'play') p
        from smash_events where ts >= since group by 1 order by 3 desc limit 30) x),
    'langs', (select coalesce(json_agg(x order by x.n desc), '[]') from (
        select coalesce(lang, '?') l, count(distinct vid) n from smash_events where ts >= since group by 1) x),
    'modes', (select coalesce(json_agg(x), '[]') from (
        select mode m, count(*) filter (where kind = 'play') p, count(*) filter (where kind = 'finish') f
        from smash_events where ts >= since and mode is not null group by 1) x),
    'hours', (select coalesce(json_agg(x order by x.h), '[]') from (
        select extract(hour from ts at time zone 'Asia/Seoul')::int h, count(*) n from smash_events where ts >= since group by 1) x)
  ) into r;
  return r;
end $$;

-- 전체 랭킹(회사 상관없이): 공개
create or replace function public.smash_global(p_mode text default 't60', p_limit int default 30)
returns table(nick text, company text, score bigint, time_ms int, rank_name text, at timestamptz)
language sql security definer set search_path = public stable as $$
  select nick, company, score, time_ms, rank_name, at from (
    select distinct on (nick, company) nick, company, score, time_ms, rank_name, created_at at from smash_scores
    where mode = p_mode order by nick, company, case when p_mode = 'demolish' then time_ms else -score end, created_at
  ) b order by case when p_mode = 'demolish' then time_ms else -score end limit least(p_limit, 100)
$$;
grant execute on function public.smash_log(text, text, text, text, boolean, text), public.smash_stats(text, int), public.smash_global(text, int) to anon, authenticated;
notify pgrst, 'reload schema';
