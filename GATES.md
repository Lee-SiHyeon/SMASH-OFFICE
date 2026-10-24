# 배포 게이트

`git push` 전에 `node tools/gate.mjs --quick`이 자동으로 돌아요(pre-push 훅). 하나라도 ❌면 push가 막혀요.
큰 배포 전에는 `node tools/gate.mjs`로 128곳 전부를 확인해요. 결과는 `gate/REPORT.md`에 남아요.
급할 때만 `SKIP_GATE=1 git push`로 건너뛰어요.

| 게이트 | 통과 기준 | 근거 |
|---|---|---|
| G0 빌드 | 소스가 오류 없이 빌드되고, 배포 파일이 지금 소스로 만든 것과 같음 | 실제로 빌드 오류가 가려져 옛 엔진이 나갈 뻔한 일 |
| G1 데이터·빌드 | 모든 회사에 데이터·페이지·메인 목록 등록, 엔진 파일 존재 (공유 이미지 없음은 경고) | 출시 체크리스트의 빌드 무결성 |
| G2 용량·첫 로딩 | 페이지당 gzip 3MB 넘으면 실패, 1.5MB 넘으면 경고, 파일 1,500개 이하 | CrazyGames 모바일 초기 다운로드 20MB·파일 1,500개, Poki "10초 넘으면 이탈" |
| G3 보안·개인정보 | 공개 파일에 서버 비밀키·통계 관리자 키·개인 토큰 없음, 원본 IP 저장 안 함 | 일반 웹 보안, CrazyGames 개인정보 고지 |
| G4 다국어 | 한국어에 있는 문구가 영·일·중·베트남어에 모두 있음 | Poki 현지화 권장 |
| G5 서버·랭킹 | RPC 응답 3초 안, 조작 점수 거부, 통계는 키 없으면 잠김, 욕설 닉네임 거름, 표 직접 읽기 막힘 | Poki: 이름 입력이 있으면 욕설 필터 필수 |
| G6 안정성 | 회사 페이지 오류 0 (빠른 모드는 표본 8곳) | 크래시 없는 세션 99.5%+ 업계 기준 → 정적 페이지라 100% |
| G7 성능·물리 | 무거운 4곳에서 폭탄·지진·핵폭탄: JS 프레임 중앙값 6ms 이하(4ms 넘으면 경고 — 측정 서버가 소프트웨어 그래픽이라 실제 기기보다 느림), p95 12ms 이하, 잔해 바닥 높이 17m 이하(더미 상한 14m+여유), 공중에 뜬 조각 0, NaN 없음 | 60fps 예산 16.7ms 중 JS 약 4ms 배분, Poki 최소 30fps·목표 60fps |
| G8 게임 흐름 | 철거전이 끝나고 결과창·등록칸이 뜸, 60초전이 정확히 60초에 끝남 | 마일스톤 '기능 완성' 기준 |
| G9 모바일·접근성 | 가로 넘침 0, 패널 겹침 0, 터치 버튼 40px 이상, 길게 눌러도 글자 선택 안 됨, 시크릿 모드에서 동작, 터치하면 소리 켜짐 | Game Accessibility Guidelines(터치 버튼 크게), CrazyGames(user-select·iOS 오디오 resume), Poki(시크릿 모드) |
| G10 콘텐츠·표시 | 비공식 패러디 표시, 디버그 코드 없음, 로고 또는 이니셜 | Poki: 패러디는 법적 요청 시 내려갈 수 있음 → 비공식 표시 |

출처
- CrazyGames 기술 요구사항: https://docs.crazygames.com/requirements/technical
- Poki 요구사항·품질: https://developers.poki.com/guide/requirements-quality
- Poki 콘텐츠·안전: https://developers.poki.com/guide/content-player-safety
- Game Accessibility Guidelines: https://gameaccessibilityguidelines.com/
- 크래시 없는 세션 기준(업계 경험치): https://bugnet.io/blog/crash-free-rate-game-metric
