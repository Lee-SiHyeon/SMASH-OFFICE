#!/usr/bin/env python3
"""회사 설정(companies/x.json)의 부지 주변 OSM 데이터를 받아 raw/x.osm, raw/x.meta.json 으로 저장.
너무 크면(노드 5만 개 초과 → HTTP 400) 범위를 4등분해서 다시 받음."""
import json, math, sys, time, urllib.request, xml.etree.ElementTree as ET, pathlib

API = 'https://api.openstreetmap.org/api/0.6'
UA = {'User-Agent': 'smash-office/0.1 (github.com/Lee-SiHyeon)'}

def get(url):
    for k in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=180) as r:
                return r.status, r.read()
        except urllib.error.HTTPError as e:
            if e.code in (400, 509) and k == 0 and e.code == 400:
                return 400, b''
            if e.code in (429, 509, 504, 502):
                time.sleep(5 * (k + 1)); continue
            return e.code, b''
        except Exception:
            time.sleep(3 * (k + 1))
    return 0, b''

def site_points(site):
    pts = []
    for s in site:
        if s[0] == 'point':
            pts.append((s[1], s[2])); continue
        st, body = get(f'{API}/{s[0]}/{s[1]}/full')
        assert st == 200, (s, st)
        for el in ET.fromstring(body):
            if el.tag == 'node':
                pts.append((float(el.get('lat')), float(el.get('lon'))))
    return pts

def fetch_bbox(b, out, depth=0):
    w, s, e, n = b
    st, body = get(f'{API}/map?bbox={w:.6f},{s:.6f},{e:.6f},{n:.6f}')
    if st == 200:
        for el in ET.fromstring(body):
            if el.tag in ('node', 'way', 'relation'):
                out[(el.tag, el.get('id'))] = el
        print('  ' * depth + f'ok {b} ({len(out)})', flush=True)
        return
    assert depth < 5 and st == 400, (b, st)
    mx, my = (w + e) / 2, (s + n) / 2
    for bb in [(w, s, mx, my), (mx, s, e, my), (w, my, mx, n), (mx, my, e, n)]:
        fetch_bbox(bb, out, depth + 1)

def main(cfg_path):
    cfg = json.load(open(cfg_path)); code = cfg['code']
    raw = pathlib.Path(__file__).resolve().parent.parent / 'raw'; raw.mkdir(exist_ok=True)
    pts = site_points(cfg['site'])
    lat0 = sum(p[0] for p in pts) / len(pts); lon0 = sum(p[1] for p in pts) / len(pts)
    kx = math.cos(math.radians(lat0)) * 111320; kz = 110540
    ext = max(math.hypot((p[1] - lon0) * kx, (p[0] - lat0) * kz) for p in pts)
    for s in cfg['site']:
        if s[0] == 'point': ext = max(ext, s[3])
    R = max(450, min(1300, ext + 280))
    bbox = (lon0 - R / kx, lat0 - R / kz, lon0 + R / kx, lat0 + R / kz)
    out = {}
    fetch_bbox(bbox, out)
    root = ET.Element('osm', version='0.6')
    for t in ('node', 'way', 'relation'):
        for (tt, _), el in out.items():
            if tt == t: root.append(el)
    ET.ElementTree(root).write(raw / f'{code}.osm', encoding='utf-8')
    json.dump({'lat': lat0, 'lon': lon0, 'ext': ext, 'radius': R}, open(raw / f'{code}.meta.json', 'w'))
    print(code, f'ext {ext:.0f} m, radius {R:.0f} m, elements {len(out)}')

if __name__ == '__main__':
    for p in sys.argv[1:]:
        main(p)
