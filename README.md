# 회사 부수기 (SMASH OFFICE)

정신나간 직장인의 회사 부수기. 지도에서 회사를 골라 실제 건물 배치(OpenStreetMap)를 3D로 부수는 브라우저 게임입니다. 회사·병원과 관계없는 비공식 패러디입니다.

**바로 하기:** https://lee-sihyeon.github.io/SMASH-OFFICE/

| 그룹 | 장소 |
|---|---|
| LG | 사이언스파크(마곡), 트윈타워(여의도), 디스플레이 파주 |
| 삼성 | 디지털시티(수원), 기흥, 화성, 평택, 서초사옥 |
| SK | 하이닉스 이천 |
| 현대 | 남양연구소, 양재사옥, 울산공장 |
| IT | 판교테크노밸리, 네이버 사옥 |
| 병원 | 보라매병원 |

## 도구 (숫자 키 1~6)
사직서 폭탄 · 결재판 풀스윙(70 m 넘으면 홈런) · 엑셀 레이저(끌어서 선 긋기) · 성과급 운석 · 월요병 지진(규모 4~10) · 퇴사 핵폭탄.
점수에 따라 직급이 인턴 → 퇴사각으로 오르고, 도구를 바꿔 가며 부수면 배율이 붙습니다. L 이름표, N 밤 모드.

## 회사 추가하기
1. `companies/<code>.json` 작성 — `site`에 OSM 부지 `["way", id]`, `["relation", id]`, 또는 `["point", lat, lon, 반경m]`
2. `python3 tools/fetch_osm.py companies/<code>.json` — OSM API에서 주변 데이터 받기(`raw/`)
3. `python3 tools/build_data.py companies/<code>.json` — `data/<code>.json`
4. `npm i && python3 tools/assemble.py && python3 tools/build_hub.py` — `docs/`에 페이지와 지도 메인 화면

## 엔진
`src/main.js` (three.js r160, 처음부터 새로 쓴 코드). 건물은 맞는 순간에만 블록으로 쪼개고, 성한 건물은 250 m 구역마다 한 덩어리로 합쳐 드로우콜을 줄입니다. 화질 3단계(낮음·보통·높음)와 프레임 시간에 따른 해상도 자동 조절, 소프트웨어 렌더링 감지가 있습니다.

## 출처
지도·건물: © OpenStreetMap 기여자 (ODbL). `data/*.json`도 ODbL을 따릅니다. 메인 지도 타일 © CARTO.
