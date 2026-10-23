#!/usr/bin/env python3
"""src/main.js(번들) + src/index.html + companies/<code>.json + data/<code>.json -> docs/<code>/index.html
usage: assemble.py [code ...]   (없으면 전부)"""
import json, os, pathlib, subprocess, sys
root = pathlib.Path(__file__).resolve().parent.parent
subprocess.run(['npx', 'esbuild', 'src/main.js', '--bundle', *([] if os.environ.get('NOMIN') else ['--minify']), '--format=iife',
                '--target=es2020', '--legal-comments=none', '--outfile=dist/bundle.js', '--log-level=warning'], cwd=root, check=True)
bundle = (root / 'dist/bundle.js').read_text()
import hashlib
SHARED = not os.environ.get('INLINE')  # 기본: 엔진 파일 하나를 모든 회사가 같이 씀(브라우저 캐시)
eng = f"engine.{hashlib.sha1(bundle.encode()).hexdigest()[:10]}.js"
if SHARED:
    (root / 'docs').mkdir(exist_ok=True)
    for old in (root / 'docs').glob('engine.*.js'):
        if old.name != eng: old.unlink()
    (root / 'docs' / eng).write_text(bundle)
tpl = (root / 'src/index.html').read_text()
BASE = os.environ.get('BASE_URL', 'https://lee-sihyeon.github.io/SMASH-OFFICE/')
safe = lambda s: s.replace('</', '<\\/')
codes = sys.argv[1:] or sorted(p.stem for p in (root / 'companies').glob('*.json'))
for code in codes:
    if not (root / f'data/{code}.json').exists(): continue  # 데이터 준비 전
    cfg = json.loads((root / f'companies/{code}.json').read_text())
    lang = cfg.setdefault('lang', 'ko'); region = cfg.get('region', 'kr')
    cfg['hub'] = '../' if region == 'kr' else f'../{region}/'
    cfg.setdefault('antipode', {'ko': '우루과이 앞바다(남대서양)', 'en': 'the other side of the planet', 'ja': '地球の裏側', 'zh': '地球另一端', 'vi': 'bên kia Trái Đất'}[lang])
    cfg.update(json.loads((root / 'site.json').read_text()))
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
    html = html.replace('/*SCENE*/', safe((root / f'data/{code}.json').read_text()))
    if SHARED: html = html.replace('<script>/*BUNDLE*/</script>', f'<script src="../{eng}"></script>')
    else: html = html.replace('/*BUNDLE*/', safe(bundle))
    out = root / 'docs' / code / 'index.html'; out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html)
    print(code, out.stat().st_size // 1024, 'KB')
