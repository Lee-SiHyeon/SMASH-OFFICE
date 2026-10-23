-- v2: 모드별 랭킹 (t60 = 60초 점수전, demolish = 완전 철거 시간, free = 자유)
alter table public.smash_scores add column if not exists mode text not null default 'free' check (mode in ('free', 't60', 'demolish'));
alter table public.smash_scores add column if not exists time_ms int not null default 0 check (time_ms between 0 and 3600000);
create index if not exists smash_scores_mode on public.smash_scores (company, mode, score desc);
create index if not exists smash_scores_mode_time on public.smash_scores (company, mode, time_ms);

drop function if exists public.smash_submit(text, text, bigint, int, text);
create or replace function public.smash_submit(p_company text, p_nick text, p_score bigint, p_collapsed int, p_rank text, p_mode text default 'free', p_time_ms int default 0)
returns json language plpgsql security definer set search_path = public as $$
declare
  ip text := coalesce(split_part(current_setting('request.headers', true)::json->>'x-forwarded-for', ',', 1), '');
  h text := md5(ip || to_char(now() at time zone 'Asia/Seoul', 'YYYYMMDD') || 'smash');
  n text := left(regexp_replace(coalesce(nullif(trim(p_nick), ''), '익명'), '[<>"''&]', '', 'g'), 12);
  pos int;
begin
  if p_mode not in ('free', 't60', 'demolish') then return json_build_object('ok', false, 'reason', 'bad'); end if;
  -- 이상한 기록 거르기: 60초전은 점수 상한, 철거전은 최소 시간
  if p_mode = 't60' and (p_score > 20000000 or p_time_ms < 55000) then return json_build_object('ok', false, 'reason', 'implausible'); end if;
  if p_mode = 'demolish' and (p_time_ms < 2500 or p_collapsed < 1) then return json_build_object('ok', false, 'reason', 'implausible'); end if;
  if exists (select 1 from smash_scores where ip_hash = h and created_at > now() - interval '15 seconds') then
    return json_build_object('ok', false, 'reason', 'too_fast');
  end if;
  insert into smash_scores(company, nick, score, collapsed, rank_name, ip_hash, mode, time_ms)
  values (p_company, n, greatest(0, least(p_score, 2000000000)), greatest(0, least(p_collapsed, 2000)), left(coalesce(p_rank, ''), 12), h, p_mode, greatest(0, least(p_time_ms, 3600000)));
  if p_mode = 'demolish' then
    select count(*) + 1 into pos from (select distinct on (nick) nick, time_ms from smash_scores where company = p_company and mode = 'demolish' order by nick, time_ms) t where t.time_ms < p_time_ms;
  else
    select count(*) + 1 into pos from (select distinct on (nick) nick, score from smash_scores where company = p_company and mode = p_mode order by nick, score desc) t where t.score > p_score;
  end if;
  return json_build_object('ok', true, 'position', pos);
end $$;

drop function if exists public.smash_top(text, int);
create or replace function public.smash_top(p_company text, p_limit int default 20, p_mode text default 't60')
returns table(nick text, score bigint, rank_name text, collapsed int, time_ms int, at timestamptz)
language sql security definer set search_path = public stable as $$
  select nick, score, rank_name, collapsed, time_ms, at from (
    select distinct on (nick) nick, score, rank_name, collapsed, time_ms, created_at as at from smash_scores
    where company = p_company and mode = p_mode
    order by nick, case when p_mode = 'demolish' then time_ms else -score end, created_at
  ) best order by case when p_mode = 'demolish' then time_ms else -score end limit least(p_limit, 50)
$$;

drop function if exists public.smash_companies();
create or replace function public.smash_companies(p_mode text default 't60')
returns table(company text, today bigint, total bigint, plays bigint, best_time int)
language sql security definer set search_path = public stable as $$
  select company,
         coalesce(sum(score) filter (where created_at >= date_trunc('day', now() at time zone 'Asia/Seoul') at time zone 'Asia/Seoul'), 0)::bigint,
         sum(score)::bigint, count(*)::bigint,
         min(time_ms) filter (where mode = 'demolish')
  from smash_scores where mode = p_mode or p_mode = 'all' group by company
$$;
grant execute on function public.smash_submit(text, text, bigint, int, text, text, int), public.smash_top(text, int, text), public.smash_companies(text) to anon, authenticated;
drop function if exists public.smash_board(text, int);
