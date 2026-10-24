#!/usr/bin/env python3
"""src/main.js(번들) + src/index.html + companies/<code>.json + data/<code>.json -> docs/<code>/index.html
usage: assemble.py [code ...]   (없으면 전부)"""
import json, os, pathlib, subprocess, sys
root = pathlib.Path(__file__).resolve().parent.parent
subprocess.run(['npx', 'esbuild', 'src/main.js', '--bundle', *([] if os.environ.get('NOMIN') else ['--minify']), '--format=iife',
                '--target=es2020', '--legal-comments=none', '--outfile=dist/bundle.js', '--log-level=warning'], cwd=root, check=True)
bundle = (root / 'dist/bundle.js').read_text()
import hashlib
PORTAL = bool(os.environ.get('PORTAL'))  # 게임 포털용: dist/portal/ 에, 로고·북한 시설 빼고, 영어 이름 넣음
OUT = root / ('dist/portal' if PORTAL else 'docs')
EN = json.loads((root / 'portal/en.json').read_text()) if PORTAL else {}
SHARED = PORTAL or not os.environ.get('INLINE')  # 기본: 엔진 파일 하나를 모든 회사가 같이 씀(브라우저 캐시)
eng = f"engine.{hashlib.sha1(bundle.encode()).hexdigest()[:10]}.js"
if SHARED:
    OUT.mkdir(parents=True, exist_ok=True)
    for old in OUT.glob('engine.*.js'):
        if old.name != eng: old.unlink()
    (OUT / eng).write_text(bundle)
tpl = (root / 'src/index.html').read_text()
BASE = os.environ.get('BASE_URL', 'https://lee-sihyeon.github.io/SMASH-OFFICE/')
safe = lambda s: s.replace('</', '<\\/')
codes = sys.argv[1:] or sorted(p.stem for p in (root / 'companies').glob('*.json'))
for code in codes:
    if not (root / f'data/{code}.json').exists(): continue  # 데이터 준비 전
    if PORTAL and code.startswith('nk-'): continue  # 정치 콘텐츠는 포털에서 제외
    cfg = json.loads((root / f'companies/{code}.json').read_text())
    import re as _r
    cfg.setdefault('sign', _r.sub(r'\s*(본관|본사|사옥|캠퍼스|R&D캠퍼스|HQ|Headquarters|Campus|本社|总部|大厦|园区|基地|Tower|빌딩|센터|뉴스퀘어|방송센터|디지털시티|사이언스파크)$', '', cfg['company']).strip() or cfg['company'])
    lang = cfg.setdefault('lang', 'ko'); region = cfg.get('region', 'kr')
    cfg['hub'] = '../' if region == 'kr' else f'../{region}/'
    cfg.setdefault('antipode', {'ko': '우루과이 앞바다(남대서양)', 'en': 'the other side of the planet', 'ja': '地球の裏側', 'zh': '地球另一端', 'vi': 'bên kia Trái Đất'}[lang])
    cfg.update(json.loads((root / 'site.json').read_text()))
    _lm = json.loads((root / 'logo_src' / 'index.json').read_text()) if (root / 'logo_src' / 'index.json').exists() else {}
    if PORTAL:
        cfg['portal'] = True
        if code in EN: cfg['en'] = dict(zip(['company', 'place', 'sign', 'tagline'], EN[code]), series='Office Smash')
    elif code in _lm: cfg['logo'] = f'../logo/{code}.png'; cfg['logoBg'] = _lm[code]
    url = f'{BASE}{code}/'
    html = tpl.replace('LG사이언스파크', cfg['company']).replace('https://lee-sihyeon.github.io/SMASH-LGSP/og.png', f'{url}og.png') \
              .replace('https://lee-sihyeon.github.io/SMASH-LGSP/', url).replace('마곡 LG', f"{cfg['place']} ") \
              .replace('정신나간 직장인의 회사 부수기 #1', cfg['series']).replace('월요일 아침, 회사를 부숴 버렸다', cfg['tagline'])
    if lang != 'ko':
        D = {'en': (f"Smash {cfg['company']} in 3D — an unofficial parody stress-relief game.", f"Smash {cfg['company']} — {cfg['series']}"),
             'ja': (f"{cfg['company']}を3Dでぶっ壊すストレス解消ゲーム(非公式パロディ)。", f"{cfg['company']}をぶっ壊せ — {cfg['series']}"),
             'zh': (f"3D拆掉{cfg['company']}的解压游戏(非官方恶搞)。", f"拆了{cfg['company']} — {cfg['series']}"),
             'vi': (f"Đập {cfg['company']} bằng 3D — game nhại giải tỏa căng thẳng, không chính thức.", f"Đập {cfg['company']} — {cfg['series']}")}[lang]
        import re as _re
        html = _re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{D[0]}">', html)
        html = _re.sub(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{D[1]}">', html)
        html = html.replace('<html lang="ko">', f'<html lang="{lang}">')
    html = html.replace('/*CONFIG*/', safe(json.dumps(cfg, ensure_ascii=False)))
    scene_txt = (root / f'data/{code}.json').read_text()
    if PORTAL and (root / f'raw/{code}.osm').exists():  # OSM name:en 을 건물에 붙임(ne)
        import xml.etree.ElementTree as ET
        ne = {}
        for el in ET.parse(root / f'raw/{code}.osm').getroot():
            if el.tag in ('way', 'relation'):
                t = {x.get('k'): x.get('v') for x in el.findall('tag')}
                if t.get('name:en'): ne[int(el.get('id'))] = t['name:en']
        sc = json.loads(scene_txt)
        for b in sc['buildings']:
            if abs(b.get('id', 0)) in ne: b['ne'] = ne[abs(b['id'])]
        scene_txt = json.dumps(sc, ensure_ascii=False, separators=(',', ':'))
    html = html.replace('/*SCENE*/', safe(scene_txt))
    if SHARED:  # 주소 끝에 / 가 없어도(lifehackailab.com/smash/xxx) 엔진 경로가 맞게 계산
        loader = "<script>(function(){var h=location.href.replace(/[?#].*$/,'');if(!/\\/$|\\.html$/.test(h))h+='/';document.write('<script src=\"'+new URL('../%s',h).href+'\"><\\/script>')})()</script>" % eng
        html = html.replace('<script>/*BUNDLE*/</script>', loader)
    else: html = html.replace('/*BUNDLE*/', safe(bundle))
    out = OUT / code / 'index.html'; out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html)
    print(code, out.stat().st_size // 1024, 'KB')
