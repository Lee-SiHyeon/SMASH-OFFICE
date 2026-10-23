-- 회사 부수기 랭킹 (기존 테이블과 섞이지 않게 smash_ 접두어)
create table if not exists public.smash_scores (
  id bigserial primary key,
  company text not null check (company ~ '^[a-z0-9-]{2,24}$'),
  nick text not null check (char_length(nick) between 1 and 12),
  score bigint not null check (score between 0 and 2000000000),
  collapsed int not null default 0 check (collapsed between 0 and 2000),
  rank_name text not null default '',
  ip_hash text not null default '',
  created_at timestamptz not null default now()
);
create index if not exists smash_scores_company_score on public.smash_scores (company, score desc);
create index if not exists smash_scores_created on public.smash_scores (created_at);
alter table public.smash_scores enable row level security;   -- 직접 읽기/쓰기 금지, 아래 함수로만

-- 점수 등록: 같은 IP는 20초에 한 번, 이름은 다듬어서 저장
create or replace function public.smash_submit(p_company text, p_nick text, p_score bigint, p_collapsed int, p_rank text)
returns json language plpgsql security definer set search_path = public as $$
declare
  ip text := coalesce(split_part(current_setting('request.headers', true)::json->>'x-forwarded-for', ',', 1), '');
  h text := md5(ip || to_char(now() at time zone 'Asia/Seoul', 'YYYYMMDD') || 'smash');
  n text := left(regexp_replace(coalesce(nullif(trim(p_nick), ''), '익명 직장인'), '[<>"''&]', '', 'g'), 12);
  pos int;
begin
  if exists (select 1 from smash_scores where ip_hash = h and created_at > now() - interval '20 seconds') then
    return json_build_object('ok', false, 'reason', 'too_fast');
  end if;
  insert into smash_scores(company, nick, score, collapsed, rank_name, ip_hash)
  values (p_company, n, greatest(0, least(p_score, 2000000000)), greatest(0, least(p_collapsed, 2000)), left(coalesce(p_rank, ''), 8), h);
  select count(*) + 1 into pos from smash_scores where company = p_company and score > p_score;
  return json_build_object('ok', true, 'position', pos);
end $$;

-- 회사 안 개인 순위 (닉네임별 최고점)
create or replace function public.smash_board(p_company text, p_limit int default 20)
returns table(nick text, score bigint, rank_name text, collapsed int, at timestamptz)
language sql security definer set search_path = public stable as $$
  select distinct on (nick) nick, score, rank_name, collapsed, created_at
  from smash_scores where company = p_company order by nick, score desc
$$;
create or replace function public.smash_top(p_company text, p_limit int default 20)
returns table(nick text, score bigint, rank_name text, collapsed int, at timestamptz)
language sql security definer set search_path = public stable as $$
  select * from public.smash_board(p_company) order by score desc limit least(p_limit, 50)
$$;

-- 회사끼리 순위 (오늘·전체 누적 점수, 판 수)
create or replace function public.smash_companies()
returns table(company text, today bigint, total bigint, plays bigint)
language sql security definer set search_path = public stable as $$
  select company,
         coalesce(sum(score) filter (where created_at >= date_trunc('day', now() at time zone 'Asia/Seoul') at time zone 'Asia/Seoul'), 0)::bigint,
         sum(score)::bigint, count(*)::bigint
  from smash_scores group by company
$$;
revoke all on public.smash_scores from anon, authenticated;
grant execute on function public.smash_submit(text, text, bigint, int, text), public.smash_top(text, int), public.smash_companies() to anon, authenticated;
revoke execute on function public.smash_board(text, int) from anon, authenticated;
