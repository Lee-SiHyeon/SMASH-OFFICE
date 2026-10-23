#!/usr/bin/env python3
"""나라별 지도 메인 화면 -> docs/index.html(한국), docs/us/, docs/jp/, docs/cn/"""
import json, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
REG = {
  'kr': {'lang': 'ko', 'path': '', 'base': '', 'center': [36.4, 127.8], 'og': 'lgsp', 'label': '🇰🇷 한국'},
  'us': {'lang': 'en', 'path': 'us/', 'base': '../', 'center': [39, -98], 'og': 'google', 'label': '🇺🇸 USA'},
  'jp': {'lang': 'ja', 'path': 'jp/', 'base': '../', 'center': [36, 137.5], 'og': 'nintendo', 'label': '🇯🇵 日本'},
  'cn': {'lang': 'zh', 'path': 'cn/', 'base': '../', 'center': [31, 114], 'og': 'tencent', 'label': '🇨🇳 中国'},
}
HS = {
  'ko': dict(title='회사 부수기 — 지도에서 회사를 골라 부수세요', desc='정신나간 직장인의 회사 부수기. 실제 건물 배치로 사직서 폭탄부터 퇴사 핵폭탄까지.', series='정신나간 직장인의 회사 부수기', h1='어느 회사를 부술까?', sub='지도에서 회사를 고르세요. 실제 건물 배치(OpenStreetMap)를 3D로 부숩니다. 사직서 폭탄부터 퇴사 핵폭탄까지.', tabList='회사 고르기', tabRank='랭킹', today='오늘', total='전체', searchPh='회사·지역 검색 (예: 하이닉스, 판교, 삼성)', foot='회사·병원과 관계없는 비공식 패러디 게임입니다. 지도 © OpenStreetMap 기여자', request='우리 회사도 넣어 줘 →', all='전체', bldgs='{0}동', goLong='부수러 가기 →', go='부수기', none="맞는 곳이 없어요. 아래 '우리 회사도 넣어 줘'로 요청해 주세요.", rOff='랭킹 서버 준비 중이에요.', loading='불러오는 중…', plays='{0}판', challenge='도전하기 →', noRec='아직 기록 없음', rFail='랭킹을 불러오지 못했어요.'),
  'en': dict(title='Office Smash — pick a company on the map and wreck it', desc='Office Smash: wreck real company campuses in 3D, from the Resignation Bomb to the Quit Nuke.', series='Office Smash', h1='Which office will you wreck?', sub='Pick a company on the map. Real building layouts (OpenStreetMap) in 3D — from the Resignation Bomb to the Quit Nuke.', tabList='Companies', tabRank='Ranking', today='Today', total='All time', searchPh='Search company or city (e.g. Google, Seattle)', foot='Unofficial parody game, not affiliated with any company. Map © OpenStreetMap contributors', request='Request your company →', all='All', bldgs='{0} buildings', goLong='Smash it →', go='Smash', none='No match. Request it with the link below.', rOff='Ranking server coming soon.', loading='Loading…', plays='{0} plays', challenge='Take the challenge →', noRec='No records yet', rFail='Could not load the ranking.'),
  'ja': dict(title='会社ぶっ壊し — 地図から会社を選んで破壊', desc='社畜の会社ぶっ壊し。実際の建物配置を3Dで、退職届ボムから退職核爆弾まで。', series='社畜の会社ぶっ壊し', h1='どの会社を壊す?', sub='地図から会社を選んでください。実際の建物配置(OpenStreetMap)を3Dで壊します。退職届ボムから退職核爆弾まで。', tabList='会社を選ぶ', tabRank='ランキング', today='今日', total='累計', searchPh='会社・地域を検索(例: 任天堂、京都)', foot='企業とは無関係の非公式パロディゲームです。地図 © OpenStreetMap contributors', request='うちの会社も追加して →', all='すべて', bldgs='{0}棟', goLong='壊しに行く →', go='壊す', none='該当なし。下のリンクからリクエストしてください。', rOff='ランキングサーバー準備中です。', loading='読み込み中…', plays='{0}回', challenge='挑戦する →', noRec='まだ記録なし', rFail='ランキングを読み込めませんでした。'),
  'zh': dict(title='拆公司 — 在地图上选一家公司拆掉', desc='打工人拆公司：按真实建筑布局3D开拆，从辞职信炸弹到离职核弹。', series='打工人拆公司', h1='今天拆哪家?', sub='在地图上选择公司，按真实建筑布局(OpenStreetMap)3D开拆。从辞职信炸弹到离职核弹。', tabList='选择公司', tabRank='排行榜', today='今日', total='总计', searchPh='搜索公司或城市(例: 腾讯、深圳)', foot='与任何公司无关的非官方恶搞游戏。地图 © OpenStreetMap contributors', request='把我们公司也加进来 →', all='全部', bldgs='{0}栋', goLong='去拆 →', go='拆', none='没有匹配的公司，可通过下方链接申请。', rOff='排行榜服务器准备中。', loading='加载中…', plays='{0}局', challenge='去挑战 →', noRec='暂无记录', rFail='无法加载排行榜。'),
}
ORDER = ['LG', '삼성', 'SK', '현대', 'IT', '병원', '북한']
site = (root / 'site.json').read_text()
tpl = (root / 'src' / 'hub.html').read_text()
all_items = []
for p in sorted((root / 'companies').glob('*.json')):
    c = json.loads(p.read_text()); m = json.loads((root / 'raw' / f"{c['code']}.meta.json").read_text())
    d = json.loads((root / 'data' / f"{c['code']}.json").read_text())
    all_items.append({'code': c['code'], 'region': c.get('region', 'kr'), 'group': c['group'], 'name': c['company'], 'place': c['place'], 'tag': c['tagline'],
                      'lat': round(m['lat'], 5), 'lon': round(m['lon'], 5), 'n': sum(1 for b in d['buildings'] if b['s']), 'alias': c.get('alias', '')})
for rk, R in REG.items():
    items = [i for i in all_items if i['region'] == rk]
    items.sort(key=lambda x: (ORDER.index(x['group']) if x['group'] in ORDER else 50, x['group'], x['name']))
    H = dict(HS[R['lang']]); H['base'] = R['base']
    regions = [[k, v['label'], ('' if R['base'] == '' else '../') + v['path'] if v['path'] else ('./' if R['base'] == '' else '../')] for k, v in REG.items()]
    page = (tpl.replace('/*ITEMS*/', json.dumps(items, ensure_ascii=False).replace('</', '<\\/'))
               .replace('/*SITE*/', site).replace('/*HSTR*/', json.dumps(H, ensure_ascii=False))
               .replace('/*REGION*/', rk).replace('/*REGIONS*/', json.dumps(regions, ensure_ascii=False))
               .replace('/*CENTER*/', json.dumps(R['center'])).replace('/*LANG*/', R['lang'])
               .replace('/*TITLE*/', H['title']).replace('/*DESC*/', H['desc']).replace('/*PATH*/', R['path']).replace('/*OGIMG*/', R['og']))
    out = root / 'docs' / R['path'] / 'index.html'; out.parent.mkdir(parents=True, exist_ok=True); out.write_text(page)
    print(rk, len(items))
