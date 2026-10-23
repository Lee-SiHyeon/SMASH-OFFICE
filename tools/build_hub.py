#!/usr/bin/env python3
"""지도에서 회사를 고르는 메인 화면 -> docs/index.html"""
import json, pathlib, html
root = pathlib.Path(__file__).resolve().parent.parent
items = []
for p in sorted((root / 'companies').glob('*.json')):
    c = json.loads(p.read_text()); m = json.loads((root / 'raw' / f"{c['code']}.meta.json").read_text())
    d = json.loads((root / 'data' / f"{c['code']}.json").read_text())
    items.append({'code': c['code'], 'group': c['group'], 'name': c['company'], 'place': c['place'], 'tag': c['tagline'],
                  'lat': round(m['lat'], 5), 'lon': round(m['lon'], 5), 'n': sum(1 for b in d['buildings'] if b['s'])})
ORDER = ['LG', '삼성', 'SK', '현대', 'IT', '병원']
items.sort(key=lambda x: (ORDER.index(x['group']) if x['group'] in ORDER else 99, x['name']))
data = json.dumps(items, ensure_ascii=False)
site = (root / 'site.json').read_text()
page = (root / 'src' / 'hub.html').read_text().replace('/*ITEMS*/', data.replace('</', '<\\/')).replace('/*SITE*/', site)
(root / 'docs' / 'index.html').write_text(page)
print('hub', len(items))
