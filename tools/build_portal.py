#!/usr/bin/env python3
"""게임 포털(CrazyGames·Poki 등) 업로드용 묶음: dist/portal/ + dist/smash-portal.zip
- 회사 페이지(엔진 공유, 로고·북한 시설 없음, 영어 이름 포함)
- companies.json(회사 고르기 창), index.html(브라우저 언어로 첫 회사를 골라 바로 시작)
- 모든 경로는 상대경로, 파일 이름까지 적음(…/index.html)"""
import json, os, pathlib, shutil, subprocess, zipfile
root = pathlib.Path(__file__).resolve().parent.parent
out = root / 'dist/portal'
if out.exists(): shutil.rmtree(out)
subprocess.run(['python3', 'tools/assemble.py'], cwd=root, check=True, env={**os.environ, 'PORTAL': '1'}, stdout=subprocess.DEVNULL)

EN = json.loads((root / 'portal/en.json').read_text())
FLAG = {'kr': '🇰🇷', 'us': '🇺🇸', 'eu': '🇪🇺', 'jp': '🇯🇵', 'vn': '🇻🇳', 'cn': '🇨🇳', 'in': '🇮🇳'}
ORDER = ['us', 'eu', 'kr', 'jp', 'cn', 'in', 'vn']
items = []
for f in sorted((root / 'companies').glob('*.json')):
    c = json.loads(f.read_text()); code = c['code']
    if not (out / code / 'index.html').exists(): continue
    e = EN.get(code)
    items.append({'code': code, 'lang': c.get('lang', 'ko'), 'r': c.get('region', 'kr'), 'f': FLAG.get(c.get('region', 'kr'), '🏢'),
                  'n': c['company'], 'p': c['place'], 'en': e[0] if e else c['company'], 'pe': e[1] if e else c['place'], 'a': c.get('alias', '')})
items.sort(key=lambda x: (ORDER.index(x['r']) if x['r'] in ORDER else 99, x['en']))
(out / 'companies.json').write_text(json.dumps(items, ensure_ascii=False, separators=(',', ':')))

FIRST = {'en': 'google', 'ko': 'samsung-seocho', 'ja': 'nintendo', 'zh': 'tencent', 'vi': 'vn-landmark81'}
FIRST = {k: v for k, v in FIRST.items() if (out / v / 'index.html').exists()}
(out / 'index.html').write_text(f"""<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Office Smash</title><style>html,body{{margin:0;height:100%;background:#0b0f16}}</style></head><body>
<script>var F={json.dumps(FIRST)};var l=(navigator.language||'en').slice(0,2).toLowerCase();location.replace((F[l]||F.en)+'/index.html'+location.search);</script>
</body></html>""")

files = [p for p in out.rglob('*') if p.is_file()]
zp = root / 'dist/smash-portal.zip'
with zipfile.ZipFile(zp, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as z:
    for p in files: z.write(p, p.relative_to(out).as_posix())
print(f'회사 {len(items)}곳 · 파일 {len(files)}개 · 원본 {sum(p.stat().st_size for p in files) / 1e6:.1f}MB · zip {zp.stat().st_size / 1e6:.1f}MB')
