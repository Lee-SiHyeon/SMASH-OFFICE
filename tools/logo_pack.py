#!/usr/bin/env python3
"""logo_src/*.png -> docs/logo/<code>.png (높이 96px 이하) + logo/index.json {code: 칩 배경색}"""
import json, pathlib
from PIL import Image
root = pathlib.Path(__file__).resolve().parent.parent
out = root / 'docs' / 'logo'; out.mkdir(parents=True, exist_ok=True); meta = {}
for f in sorted((root / 'logo_src').glob('*.png')):
    im = Image.open(f).convert('RGBA')
    bb = im.getchannel('A').point(lambda a: 255 if a > 16 else 0).getbbox()
    if bb: im = im.crop(bb)
    w, h = im.size; s = min(96 / h, 288 / w, 1 if min(w, h) >= 96 else 96 / max(h, 1))
    im = im.resize((max(1, round(w * s)), max(1, round(h * s))), Image.LANCZOS)
    px = [p for p in im.getdata() if p[3] > 128]
    lum = sum(0.3 * r + 0.59 * g + 0.11 * b for r, g, b, a in px) / max(1, len(px))
    opaque = len(px) / (im.size[0] * im.size[1])
    meta[f.stem] = '#1c2230' if lum > 225 and opaque < 0.9 else '#ffffff'  # 흰 글자 로고는 어두운 칩
    im.save(out / f'{f.stem}.png', optimize=True)
(root / 'logo_src' / 'index.json').write_text(json.dumps(meta))
print(len(meta), sum(p.stat().st_size for p in out.glob('*.png')) // 1024, 'KB', [k for k, v in meta.items() if v != '#ffffff'])
