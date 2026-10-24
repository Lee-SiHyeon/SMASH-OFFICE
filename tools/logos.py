#!/usr/bin/env python3
"""회사 도메인 -> 아이콘(구글 파비콘 서비스 256px) -> logo_src/<code>.png. 없으면 이니셜 배지로 대체(게임 쪽)."""
import json, pathlib, urllib.request, sys
root = pathlib.Path(__file__).resolve().parent.parent
D = {'adobe':'adobe.com','airbus':'airbus.com','alibaba':'alibaba.com','amazon':'amazon.com','anthropic':'anthropic.com','apple':'apple.com',
'asan-medical':'amc.seoul.kr','asml':'asml.com','audi-ingolstadt':'audi.com','bkl':'bkl.co.kr','bmw':'bmw.de','boeing':'boeing.com','boramae':'brmh.org',
'byd':'byd.com','bytedance':'douyin.com','cj-enm':'cjenm.com','coupang':'coupang.com','deepmind':'deepmind.google','deloitte-anjin':'deloitte.com',
'disney':'disney.com','eland':'eland.co.kr','ericsson':'ericsson.com','ey-hanyoung':'ey.com','ferrari-maranello':'ferrari.com','ford-dearborn':'ford.com',
'foxconn':'foxconn.com','geely-hq':'geely.com','gm-rencen':'gm.com','gm-warren':'gm.com','gmkorea-bupyeong':'gm-korea.co.kr','goldman':'goldmansachs.com',
'google':'google.com','honda-aoyama':'global.honda','honda-suzuka':'global.honda','huawei':'huawei.com','hynix-icheon':'skhynix.com',
'hyundai-namyang':'hyundai.com','hyundai-ulsan':'hyundai.com','hyundai-yangjae':'hyundai.com','in-infosys-mysuru':'infosys.com','in-maruti-manesar':'marutisuzuki.com',
'in-reliance':'ril.com','in-samsung-blr':'samsung.com','in-samsung-noida':'samsung.com','in-tata-pune':'tatamotors.com','in-wipro':'wipro.com','intel':'intel.com',
'jlr-whitley':'jaguarlandrover.com','jpmorgan':'jpmorganchase.com','jtbc':'jtbc.co.kr','kakao-jeju':'kakaocorp.com','kbs':'kbs.co.kr','kgm-pyeongtaek':'kgm.co.kr',
'kia-hwaseong':'kia.com','kpmg-samjong':'kpmg.com','kt-gwanghwamun':'kt.com','lf':'lfcorp.com','lg-twin':'lg.com','lgd-paju':'lgdisplay.com','lgsp':'lg.com',
'lguplus-yongsan':'lguplus.com','lvmh':'lvmh.com','mazda-ujina':'mazda.com','mbc':'imbc.com','mercedes':'mercedes-benz.com','meta':'meta.com','microsoft':'microsoft.com',
'naver':'naver.com','nestle':'nestle.com','netflix':'netflix.com','nintendo':'nintendo.co.jp','nio-hefei':'nio.com','nissan-hq':'nissan-global.com',
'novo':'novonordisk.com','nvidia':'nvidia.com','openai':'openai.com','panasonic':'panasonic.com','porsche-zuffenhausen':'porsche.com','renault-busan':'renault.com',
'renault-technocentre':'renaultgroup.com','rivian-normal':'rivian.com','salesforce':'salesforce.com','samil-pwc':'pwc.com','samsung-dc':'samsung.com',
'samsung-fashion':'ssfshop.com','samsung-giheung':'samsung.com','samsung-hwaseong':'samsung.com','samsung-medical':'samsunghospital.com','samsung-pt':'samsung.com',
'samsung-seocho':'samsung.com','sap':'sap.com','sbs':'sbs.co.kr','sejong-law':'shinkim.com','seoul-stmary':'cmcseoul.or.kr','severance':'severance.healthcare',
'siemens':'siemens.com','skt':'sktelecom.com','snuh':'snuh.org','softbank':'softbank.jp','sony':'sony.com','spacex':'spacex.com','spotify':'spotify.com',
'stellantis-auburn':'stellantis.com','stellantis-poissy':'stellantis.com','subaru-gunma':'subaru.co.jp','tencent':'tencent.com','tesla-fremont':'tesla.com',
'tesla-texas':'tesla.com','toss':'toss.im','toyota':'toyota.com','vn-fpt':'fpt.com','vn-intel':'intel.com','vn-lg-haiphong':'lg.com','vn-samsung-yenphong':'samsung.com',
'vn-vietcombank':'vietcombank.com.vn','vn-viettel':'viettel.vn','vn-vinfast':'vinfastauto.com','volkswagen':'volkswagen.com','volvo-torslanda':'volvocars.com',
'woowa':'woowahan.com','ytn':'ytn.co.kr','yulchon':'yulchon.com','kakao':'kakaocorp.com'}
out = root / 'logo_src'; out.mkdir(exist_ok=True)
codes = sys.argv[1:] or sorted(p.stem for p in (root / 'companies').glob('*.json'))
for c in codes:
    d = D.get(c)
    if not d: print(c, '- (도메인 없음)'); continue
    f = out / f'{c}.png'
    if f.exists(): continue
    try:
        req = urllib.request.Request(f'https://www.google.com/s2/favicons?domain={d}&sz=256', headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=20) as r: data = r.read(); code = r.status
        f.write_bytes(data); print(c, d, len(data))
    except Exception as e: print(c, d, 'ERR', e)
