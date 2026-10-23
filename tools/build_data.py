#!/usr/bin/env python3
"""raw/<code>.osm + raw/<code>.meta.json + companies/<code>.json -> data/<code>.json
(좌표는 m 단위, 원점 = 부지 중심. 건물은 way와 multipolygon relation 둘 다 읽음)

usage: build_data.py companies/<code>.json
"""
import json, math, sys, pathlib, xml.etree.ElementTree as ET

ROOT = pathlib.Path(__file__).resolve().parent.parent
cfg = json.load(open(sys.argv[1])); code = cfg['code']
meta = json.load(open(ROOT / 'raw' / f'{code}.meta.json'))
root = ET.parse(ROOT / 'raw' / f'{code}.osm').getroot()
nodes, ways, rels = {}, {}, {}
for el in root:
    tags = {t.get('k'): t.get('v') for t in el.findall('tag')}
    if el.tag == 'node':
        nodes[el.get('id')] = (float(el.get('lat')), float(el.get('lon')))
    elif el.tag == 'way':
        ways[el.get('id')] = (tags, [n.get('ref') for n in el.findall('nd')])
    elif el.tag == 'relation':
        rels[el.get('id')] = (tags, [(m.get('type'), m.get('ref'), m.get('role')) for m in el.findall('member')])

lat0, lon0 = meta['lat'], meta['lon']
KX = math.cos(math.radians(lat0)) * 111320.0; KZ = 110540.0
R = meta['radius']

def xy(ref):
    la, lo = nodes[ref]
    return (round((lo - lon0) * KX, 1), round(-(la - lat0) * KZ, 1))

def ring(refs):
    r = [xy(n) for n in refs if n in nodes]
    if len(r) > 2 and r[0] == r[-1]: r = r[:-1]
    return r

def stitch(way_ids):
    """relation의 outer way들을 이어 닫힌 고리로"""
    segs = [list(ways[w][1]) for w in way_ids if w in ways]
    rings = []
    while segs:
        cur = segs.pop(0)
        changed = True
        while cur[0] != cur[-1] and changed:
            changed = False
            for i, s in enumerate(segs):
                if s[0] == cur[-1]: cur += s[1:]
                elif s[-1] == cur[-1]: cur += s[::-1][1:]
                elif s[-1] == cur[0]: cur = s[:-1] + cur
                elif s[0] == cur[0]: cur = s[::-1][:-1] + cur
                else: continue
                segs.pop(i); changed = True; break
        rings.append(cur)
    return [ring(r) for r in rings if len(r) >= 4]

def area(r):
    return sum(r[i][0] * r[(i + 1) % len(r)][1] - r[(i + 1) % len(r)][0] * r[i][1] for i in range(len(r))) / 2

def inside(p, r):
    x, y = p; c = False
    for i in range(len(r)):
        x1, y1 = r[i]; x2, y2 = r[i - 1]
        if (y1 > y) != (y2 > y) and x < (x2 - x1) * (y - y1) / (y2 - y1) + x1: c = not c
    return c

def cen(r): return (sum(q[0] for q in r) / len(r), sum(q[1] for q in r) / len(r))

# 부지 고리
site_rings, site_ids = [], set()
for s in cfg['site']:
    if s[0] == 'way':
        site_ids.add(('way', str(s[1]))); site_rings.append(ring(ways[str(s[1])][1]))
    elif s[0] == 'relation':
        site_ids.add(('relation', str(s[1])))
        t, mem = rels[str(s[1])]
        site_rings += stitch([m[1] for m in mem if m[0] == 'way' and m[2] in ('outer', '')])
    else:  # point: 원형 부지
        cx, cz = (s[2] - lon0) * KX, -(s[1] - lat0) * KZ
        site_rings.append([(round(cx + s[3] * math.cos(a / 24 * 2 * math.pi), 1), round(cz + s[3] * math.sin(a / 24 * 2 * math.pi), 1)) for a in range(24)])

# 건물 후보: way + relation(multipolygon/building)
cands = []
for wid, (t, refs) in ways.items():
    if 'building' in t:  # 부지 자체가 건물(단일 사옥)이면 그대로 건물로 씀
        r = ring(refs)
        if len(r) >= 3: cands.append((int(wid), t, r))
for rid, (t, mem) in rels.items():
    if 'building' in t and t.get('type') in ('multipolygon', 'building', None):
        outer = [m[1] for m in mem if m[0] == 'way' and m[2] in ('outer', '')]
        for k, r in enumerate(stitch(outer)):
            # 멤버 way 자체가 building 태그면 중복이므로 relation 쪽 이름만 물려줌
            cands.append((int(rid) * 10 + k + 10**12, t, r))
        for m in outer:
            if m in ways and 'building' not in ways[m][0]:
                pass

def num(v):
    try: return float(str(v).replace('m', '').strip())
    except (TypeError, ValueError): return None

buildings = []
seen_cent = {}
for bid, t, r in cands:
    cx, cz = cen(r)
    if math.hypot(cx, cz) > R: continue
    a = area(r)
    if abs(a) < 20: continue
    if a < 0: r = r[::-1]
    insite = any(inside((cx, cz), s) for s in site_rings) or ('way', str(bid)) in site_ids or ('relation', str((bid - 10**12) // 10)) in site_ids
    h = num(t.get('height')); lv = num(t.get('building:levels'))
    fh = 5.2 if insite else 3.4
    if t.get('building') in ('industrial', 'factory', 'warehouse'): fh = 7.0
    if h is None: h = (lv or (8 if insite else 5)) * fh
    if lv is None: lv = max(1, round(h / fh))
    ov = cfg.get('override', {}).get(t.get('name', ''))
    if ov: h, lv = ov
    lv = int(max(1, min(lv, 120)))
    k = (round(cx), round(cz))
    if k in seen_cent:  # 같은 자리 중복(way와 relation 양쪽에 있는 경우)
        continue
    seen_cent[k] = 1
    buildings.append({'id': bid, 'n': t.get('name', '') or t.get('name:ko', ''), 'h': round(h, 1), 'lv': lv, 's': 1 if insite else 0, 'p': r, 'a': abs(a)})

# 다른 건물 중심을 품은 외곽선(캠퍼스 윤곽) 제거
cs = [cen(b['p']) for b in buildings]
drop = set()
for i, o in enumerate(buildings):
    inner = sum(buildings[j]['a'] for j, c in enumerate(cs) if i != j and buildings[j]['a'] < o['a'] and inside(c, o['p']))
    if inner > o['a'] * 0.3: drop.add(i)  # 안에 든 건물이 면적 30% 넘게 차지하면 윤곽선으로 보고 뺌(애플 링 같은 안뜰 건물은 남김)
buildings = [b for i, b in enumerate(buildings) if i not in drop]
for b in buildings: b.pop('a')

MAXB = 1100
if len(buildings) > MAXB:
    site_b = [b for b in buildings if b['s']]
    rest = sorted([b for b in buildings if not b['s']], key=lambda b: math.hypot(*cen(b['p'])))
    buildings = site_b + rest[:MAXB - len(site_b)]
site_b = sorted([b for b in buildings if b['s']], key=lambda b: (round(cen(b['p'])[1] / 60), cen(b['p'])[0]))
k = 0
NAMES = {'ko': ('본관', '{}동'), 'en': ('Main Bldg', 'Bldg {}'), 'ja': ('本館', '{}号館'), 'zh': ('主楼', '{}号楼')}[cfg.get('lang', 'ko')]
if len(site_b) == 1 and not site_b[0]['n']: site_b[0]['n'] = NAMES[0]
for b in site_b:
    if not b['n']:
        k += 1; b['n'] = NAMES[1].format(k)

ROADW = {'motorway': 22, 'motorway_link': 9, 'trunk': 20, 'trunk_link': 9, 'primary': 18, 'primary_link': 9, 'secondary': 14,
         'secondary_link': 8, 'tertiary': 11, 'tertiary_link': 7, 'residential': 7, 'unclassified': 7, 'service': 5, 'busway': 7,
         'pedestrian': 6, 'footway': 2.5, 'cycleway': 2.5, 'path': 2, 'steps': 2}
roads, areas = [], []
for wid, (t, refs) in ways.items():
    r = ring(refs)
    if len(r) < 2: continue
    cx, cz = cen(r)
    if 'highway' in t and t['highway'] in ROADW:
        if min(math.hypot(x, z) for x, z in r) > R * 1.2: continue
        roads.append({'w': ROADW[t['highway']], 'p': r if refs[0] != refs[-1] else r + [r[0]]})
    elif 'building' not in t and len(r) >= 3 and math.hypot(cx, cz) < R * 1.4:
        kind = None
        if t.get('natural') == 'water' or 'water' in t or t.get('landuse') == 'reservoir': kind = 'water'
        elif t.get('leisure') in ('park', 'garden') or t.get('landuse') in ('grass', 'forest', 'meadow') or t.get('natural') in ('wood', 'scrub', 'grassland'): kind = 'green'
        elif t.get('leisure') == 'pitch': kind = 'pitch'
        if kind: areas.append({'k': kind, 'p': r})

out = ROOT / 'data' / f'{code}.json'
json.dump({'center': [lat0, lon0], 'radius': R, 'site': site_rings, 'buildings': buildings, 'roads': roads, 'areas': areas},
          open(out, 'w'), ensure_ascii=False, separators=(',', ':'))
site = [b for b in buildings if b['s']]
named = sum(1 for b in site if b['n'])
print(f"{code}: 건물 {len(buildings)} (부지 {len(site)}, 이름 {named}), 도로 {len(roads)}, 녹지·물 {len(areas)}, {out.stat().st_size // 1024} KB")
