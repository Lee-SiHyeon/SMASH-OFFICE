-- v4: 닉네임 욕설·혐오 필터(포털 요구사항: 이름 입력이 있으면 욕설 필터 필수)
create or replace function public.smash_clean_nick(p text) returns text language plpgsql immutable as $$
declare n text := left(regexp_replace(coalesce(nullif(trim(p), ''), '익명'), '[<>"''&]', '', 'g'), 12);
        z text := lower(regexp_replace(n, '[\s\.\-_*0-9]', '', 'g'));
begin
  if z ~ '(시발|씨발|ㅅㅂ|ㅆㅂ|씨빨|병신|ㅂㅅ|븅신|좆|존나|ㅈㄴ|개새|개색|새끼|섹스|보지|자지|애미|느금|니미|창녀|걸레|한남|김치녀|틀딱|짱깨|쪽바리|흑형|장애인새|fuck|shit|bitch|cunt|dick|pussy|nigg|fag|retard|whore|porn|rape|hitler|nazi|kkk|ちんこ|まんこ|死ね|操你|傻逼|妈的|鸡巴|địt|lồn|cặc)'
  then return '익명'; end if;
  return n;
end $$;
grant execute on function public.smash_clean_nick(text) to anon, authenticated;
-- smash_submit 안의 닉네임 정리를 필터로 교체
do $$ declare src text; begin
  select pg_get_functiondef('public.smash_submit(text,text,bigint,int,text,text,int)'::regprocedure) into src;
  src := replace(src, $q$n text := left(regexp_replace(coalesce(nullif(trim(p_nick), ''), '익명'), '[<>"''&]', '', 'g'), 12);$q$, 'n text := smash_clean_nick(p_nick);');
  execute src;
end $$;
-- 랭킹에 이미 들어간 나쁜 닉네임 정리
update public.smash_scores set nick = public.smash_clean_nick(nick) where nick <> public.smash_clean_nick(nick);
notify pgrst, 'reload schema';
