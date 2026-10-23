// 업종 테마: 기본 문구(i18n.js) 위에 덮어씀. meteor = 운석 모양, beam = 레이저 색 [속, 겉]
export const THEMES = {
  ko: {
    hospital: {
      ranks: ['인턴', '레지던트 1년차', '레지던트 4년차', '전임의', '조교수', '부교수', '교수', '병원장'],
      envelope: '사직서', board: ['주치의', '전공의', '교수', '과장'], reject: '보류',
      tools: { bomb: ['전공의 사직서', '사직서', '사직서를 던져 병동을 날립니다'], bat: ['차트 풀스윙', '차트', '두꺼운 의무기록 차트로 후려칩니다. 70 m 넘으면 홈런'], laser: ['수술 레이저', '레이저', '끌어서 절개선을 그으면 레이저가 따라 자릅니다'], meteor: ['진통제 운석', '알약', '하늘에서 거대한 알약이 떨어집니다'], quake: ['36시간 당직 지진', '당직', '누른 곳이 진원. 규모 7.5 이상이면 병동이 통째로 주저앉습니다'], nuke: ['집단 사직 핵폭탄', '집단사직', '반경 420 m를 통째로 날립니다'] },
      labels: { bomb: ['오늘부로 사직합니다', '오프 반납 거부', '콜 안 받습니다'], bat: ['오더 변경!', '차팅 다시 해', '회진 지연'], laser: ['절개!', '지혈 실패', '봉합은 내일'], meteor: ['수액 맞고 출근', '진통제 2알', '카페인 IV'], quake: ['응급실 콜', '코드 블루', '새벽 3시 콜'], nuke: ['병원 떠납니다', '수련 포기'] },
      meteor: 'pill', beam: ['#ffffff', '#38bdf8'],
    },
    law: {
      ranks: ['인턴', '어쏘 1년차', '어쏘 3년차', '시니어 어쏘', '주니어 파트너', '파트너', '시니어 파트너', '탈출'],
      envelope: '사직서', board: ['어쏘', '시니어', '파트너', '대표'], reject: '재작성',
      tools: { bomb: ['사직서 폭탄', '사직서', '빌러블 아워를 버리고 사직서를 던집니다'], bat: ['준비서면 풀스윙', '서면', '300쪽짜리 준비서면 뭉치로 후려칩니다'], laser: ['타임시트 레이저', '타임시트', '6분 단위로 정확히 잘라 냅니다'], meteor: ['소송비용 운석', '소송비용', '패소한 쪽 소송비용이 떨어집니다'], quake: ['판결 선고 지진', '선고', '누른 곳에서 판결이 선고됩니다'], nuke: ['집단소송 핵폭탄', '집단소송', '반경 420 m를 통째로 날립니다'] },
      labels: { bomb: ['빌러블 0시간', '퇴사합니다', '주말 반납 끝'], bat: ['각하!', '기각!', '보정명령'], laser: ['0.1시간', '0.3시간', '6분 청구'], meteor: ['착수금 반환', '성공보수 0원', '패소'], quake: ['주문: 원고 패소', '상고 기각', '변론 재개'], nuke: ['로펌 탈출', '인하우스 갑니다'] },
      meteor: 'coin', beam: ['#ffffff', '#facc15'],
    },
    accounting: {
      ranks: ['인턴', '스탭', '시니어', '매니저', '시니어 매니저', '디렉터', '파트너', '시즌 탈출'],
      envelope: '사직서', board: ['스탭', '시니어', '매니저', '파트너'], reject: '수정요망',
      tools: { bomb: ['시즌 사직서', '사직서', '감사 시즌 한가운데 사직서를 던집니다'], bat: ['감사조서 풀스윙', '조서', '두꺼운 감사조서로 후려칩니다'], laser: ['엑셀 레이저', '엑셀', 'VLOOKUP처럼 끝까지 훑습니다'], meteor: ['분식회계 운석', '분식', '숨겨 둔 부채가 떨어집니다'], quake: ['결산 지진', '결산', '12월 결산이 덮칩니다'], nuke: ['의견거절 핵폭탄', '의견거절', '반경 420 m에 의견거절을 냅니다'] },
      labels: { bomb: ['시즌 끝나고 나갑니다', '주 100시간 끝', '퇴사'], bat: ['조서 다시', '근거 붙여', '리뷰 코멘트 47개'], laser: ['#REF!', '#N/A', '차이 1원', '순환 참조!'], meteor: ['한정의견', '계속기업 불확실', '재무제표 재작성'], quake: ['12월 31일', '분기 검토', '연결 결산'], nuke: ['의견거절', '감사인 사임'] },
      meteor: 'coin', beam: ['#ffffff', '#21d07a'],
    },
    broadcast: {
      ranks: ['막내 작가', 'FD', 'AD', '조연출', 'PD', 'CP', '국장', '종영'],
      envelope: '사표', board: ['작가', 'AD', 'PD', 'CP'], reject: 'NG',
      tools: { bomb: ['사표 폭탄', '사표', '생방송 직전 사표를 던집니다'], bat: ['큐시트 풀스윙', '큐시트', '말아 쥔 큐시트로 후려칩니다'], laser: ['조명 레이저', '조명', '끌어서 선을 그으면 조명이 그 선을 태웁니다'], meteor: ['시청률 운석', '시청률', '0.1% 시청률이 떨어집니다'], quake: ['편성 개편 지진', '개편', '누른 곳에서 편성이 뒤집힙니다'], nuke: ['조기 종영 핵폭탄', '조기종영', '반경 420 m를 통째로 날립니다'] },
      labels: { bomb: ['방송사고!', '오늘 녹화 펑크', '사표 냅니다'], bat: ['NG!', '다시 갈게요', '컷!'], laser: ['조명 OFF', '역광!', '화이트 아웃'], meteor: ['시청률 0.1%', '동시간대 꼴찌', '광고 완판 실패'], quake: ['편성 삭제', '결방', '긴급 편성'], nuke: ['조기 종영', '시즌 2 없음'] },
      meteor: 'tv', beam: ['#ffffff', '#f472b6'],
    },
    telecom: {
      ranks: ['인턴', '매니저', '선임', '책임', '팀장', '담당', '본부장', '해지'],
      tools: { laser: ['5G 전파 레이저', '5G', '끌어서 선을 그으면 전파가 그 선을 태웁니다'], meteor: ['요금 폭탄 운석', '요금폭탄', '데이터 초과 요금이 떨어집니다'], quake: ['통신 장애 지진', '장애', '누른 곳에서 전국 장애가 납니다'], nuke: ['약정 해지 핵폭탄', '해지', '위약금 없이 반경 420 m 해지'] },
      labels: { laser: ['안테나 0칸', 'LTE 전환', '신호 없음'], meteor: ['데이터 초과', '로밍 폭탄', '부가서비스 가입됨'], quake: ['서비스 장애', '문자 안 감', '복구 중'], nuke: ['번호이동', '약정 끝'] },
      meteor: 'phone', beam: ['#ffffff', '#a78bfa'],
    },
    fashion: {
      ranks: ['인턴', 'MD 보조', 'MD', '디자이너', '수석 디자이너', '실장', '디렉터', '브랜드 철수'],
      tools: { bat: ['패턴자 풀스윙', '패턴자', '거대한 패턴자로 후려칩니다'], laser: ['재단 레이저', '재단', '끌어서 재단선을 그으면 레이저가 자릅니다'], meteor: ['재고 운석', '재고', '안 팔린 시즌 재고가 떨어집니다'], quake: ['시즌오프 지진', '시즌오프', '70% 세일이 덮칩니다'] },
      labels: { bat: ['핏이 안 나와', '샘플 다시', '컨펌 반려'], laser: ['재단 실수', '시접 0', '원단 로스'], meteor: ['재고 3만 장', '반품 폭탄', '아울렛행'], quake: ['70% 세일', '시즌오프', '균일가'] },
      meteor: 'rock', beam: ['#ffffff', '#fb7185'],
    },
    fab: {
      ranks: ['인턴', '사원', '선임', '책임', '수석', '그룹장', '상무', '퇴사'],
      tools: { laser: ['EUV 레이저', 'EUV', '끌어서 선을 그으면 노광합니다'], meteor: ['웨이퍼 운석', '웨이퍼', '300 mm 웨이퍼가 떨어집니다'], quake: ['클린룸 지진', '클린룸', '누른 곳에서 수율이 무너집니다'], nuke: ['수율 0% 핵폭탄', '수율0', '반경 420 m를 통째로 날립니다'] },
      labels: { laser: ['노광 불량', '패턴 붕괴', '파티클 검출'], meteor: ['수율 30%', '웨이퍼 폐기', '재작업'], quake: ['라인 정지', '파티클!', '방진복 찢어짐'], nuke: ['수율 0%', '라인 셧다운'] },
      meteor: 'wafer', beam: ['#ffffff', '#c084fc'],
    },
    auto: {
      ranks: ['인턴', '사원', '대리', '책임', '팀장', '실장', '상무', '퇴사'],
      tools: { meteor: ['리콜 운석', '리콜', '리콜 차량이 떨어집니다'], quake: ['충돌 테스트 지진', '충돌', '누른 곳에서 충돌 시험을 합니다'] },
      labels: { meteor: ['리콜 30만 대', '무상수리', '결함 인정'], quake: ['에어백 전개', '충돌 등급 0', '라인 정지'] },
      meteor: 'gear', beam: ['#ffffff', '#fb923c'],
    },
    it: {
      ranks: ['인턴', '주니어', '미드', '시니어', '테크리드', '스태프', '프린시펄', '퇴사'],
      tools: { bat: ['코드리뷰 풀스윙', '코드리뷰', '리뷰 코멘트 묶음으로 후려칩니다'], meteor: ['장애 운석', '장애', '새벽 3시 장애가 떨어집니다'], quake: ['배포 지진', '배포', '금요일 오후 6시 배포'], nuke: ['rm -rf 핵폭탄', 'rm -rf', '반경 420 m를 rm -rf'] },
      labels: { bat: ['Request changes', 'LGTM(아님)', 'nit:'], meteor: ['P0 장애', '롤백!', '온콜 호출'], quake: ['금요일 배포', '핫픽스', '서버 다운'], nuke: ['rm -rf /', 'git push --force'] },
      meteor: 'rock', beam: ['#ffffff', '#22d3ee'],
    },
    nk: {
      ranks: ['로동자', '작업반장', '직장장', '지배인', '당비서', '부상', '상', '탈북'],
      envelope: '자아비판서', board: ['작업반', '직장', '지배인', '당위원회'], reject: '비판',
      tools: { bomb: ['자아비판서 폭탄', '자아비판서', '자아비판서를 던져 넓게 날립니다'], bat: ['결의문 풀스윙', '결의문', '두꺼운 결의문으로 후려칩니다'], laser: ['선전 레이저', '선전', '끌어서 선을 그으면 선전 문구가 태웁니다'], meteor: ['계획 미달 운석', '계획미달', '5개년 계획 미달이 떨어집니다'], quake: ['총화 지진', '총화', '생활총화가 덮칩니다'], nuke: ['자력갱생 핵폭탄', '자력갱생', '반경 420 m를 통째로 날립니다'] },
      labels: { bomb: ['자아비판!', '반성합니다', '사상 점검'], bat: ['비판!', '결의 다시', '혁명적 각오'], laser: ['구호 낭독', '선전 강화', '200일 전투'], meteor: ['계획 미달', '정전', '배급 중단'], quake: ['생활총화', '사상 투쟁', '검열'], nuke: ['자력갱생', '탈출합니다'] },
      meteor: 'rock', beam: ['#ffffff', '#ef4444'],
    },
  },
  en: {
    ai: {
      ranks: ['Intern', 'MTS', 'Senior MTS', 'Staff', 'Research Lead', 'Principal', 'Chief Scientist', 'AGI ACHIEVED'],
      tools: { bomb: ['Prompt Bomb', 'Prompt', 'Drop a jailbreak prompt: wide blast and a crater'], bat: ['Eval Swing', 'Evals', 'Swing a stack of failed evals. Over 70 m is a home run'], laser: ['Token Laser', 'Tokens', 'Drag to draw a line; a stream of tokens burns it'], meteor: ['GPU Meteor', 'GPU', 'A whole H100 rack falls from the sky'], quake: ['Scaling-Law Quake', 'Scaling', 'Tap the epicenter. 7.5+ flattens whole buildings'], nuke: ['Context Window Nuke', 'Context', '1M tokens of context. Wipes out 420 m'] },
      labels: { bomb: ['Ignore previous instructions', 'As an AI…', 'Hallucinated!'], bat: ['Eval regression', 'Benchmark contaminated', 'Vibes only'], laser: ['<|endoftext|>', 'Rate limited', '429!'], meteor: ['OOM!', 'CUDA error', 'Loss = NaN'], quake: ['Loss spike', 'Grad explosion', 'Retraining…'], nuke: ['AGI?', 'Model deprecated'] },
      meteor: 'gpu', beam: ['#ffffff', '#c4b5fd'],
    },
    'big tech': {
      ranks: ['Intern', 'L3', 'L4', 'L5', 'L6 Staff', 'L7 Senior Staff', 'L8 Principal', 'LAID OFF'],
      tools: { bat: ['Code Review Swing', 'CR', 'Swing a pile of review comments'], meteor: ['Outage Meteor', 'Outage', 'A Sev-1 incident falls from the sky'], quake: ['Reorg Quake', 'Reorg', 'Tap the epicenter of the next reorg'], nuke: ['Layoff Nuke', 'Layoff', 'Wipes out 420 m. Effective immediately'] },
      labels: { bat: ['nit:', 'Request changes', 'LGTM (not)'], meteor: ['Sev-1!', 'Rollback!', 'Paged at 3 AM'], quake: ['New VP', 'Team merged', 'OKRs reset'], nuke: ['Role eliminated', 'Badge deactivated'] },
      meteor: 'rock', beam: ['#ffffff', '#38bdf8'],
    },
    finance: {
      ranks: ['Intern', 'Analyst', 'Associate', 'VP', 'Director', 'MD', 'Partner', 'BURNED OUT'],
      tools: { bat: ['Pitch Book Swing', 'Pitch book', 'Swing a 200-page pitch book'], laser: ['Excel Laser', 'Excel', 'Drag to draw a line; F9 recalculates it'], meteor: ['Margin Call Meteor', 'Margin call', 'A margin call falls from the sky'], quake: ['Market Crash Quake', 'Crash', 'Tap the epicenter of Black Monday'], nuke: ['Bank Run Nuke', 'Bank run', 'Wipes out 420 m'] },
      labels: { meteor: ['Margin call!', 'Limit down', 'Bonus clawback'], quake: ['-22% today', 'Circuit breaker', 'VIX 80'], nuke: ['Bank run', 'Chapter 11'] },
      meteor: 'coin', beam: ['#ffffff', '#21d07a'],
    },
    auto: { tools: { meteor: ['Recall Meteor', 'Recall', 'A recalled car falls from the sky'], quake: ['Crash Test Quake', 'Crash test', 'Tap to run a crash test'] }, labels: { meteor: ['Recall 300k units', 'Airbag defect', 'Line stopped'] }, meteor: 'gear', beam: ['#ffffff', '#fb923c'] },
    space: { tools: { meteor: ['Booster Meteor', 'Booster', 'A falling booster that missed the landing'], nuke: ['RUD Nuke', 'RUD', 'Rapid unscheduled disassembly, 420 m'] }, labels: { meteor: ['Missed the drone ship', 'Hard landing'], nuke: ['RUD!', 'Anomaly'] }, meteor: 'rock', beam: ['#ffffff', '#f97316'] },
    media: { tools: { laser: ['Spotlight Laser', 'Spotlight', 'Drag to draw a line; studio lights burn it'], meteor: ['Ratings Meteor', 'Ratings', 'Your ratings crash from the sky'], nuke: ['Cancellation Nuke', 'Cancelled', 'Season cancelled. 420 m gone'] }, labels: { meteor: ['0.1 rating', 'Cancelled', 'Writers strike'] }, meteor: 'tv', beam: ['#ffffff', '#f472b6'] },
    pharma: { tools: { meteor: ['Pill Meteor', 'Pill', 'A giant pill falls from the sky'], quake: ['FDA Quake', 'FDA', 'Tap the epicenter of a rejected filing'] }, labels: { meteor: ['Phase 3 failed', 'Side effects!'] }, meteor: 'pill', beam: ['#ffffff', '#38bdf8'] },
  },
};
// 회사 그룹 → 테마
export const GROUP_THEME = {
  '병원': 'hospital', '로펌': 'law', '회계·세무': 'accounting', '방송': 'broadcast', '통신': 'telecom', '패션': 'fashion',
  'SK': 'fab', '현대': 'auto', '자동차': 'auto', 'IT': 'it', '북한': 'nk',
  'AI': 'ai', 'Big Tech': 'big tech', 'Tech': 'big tech', 'Finance': 'finance', 'Auto': 'auto', 'Space': 'space', 'Aero': 'space', 'Media': 'media', 'Pharma': 'pharma',
};
