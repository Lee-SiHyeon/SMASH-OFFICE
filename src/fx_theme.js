// 업종별 연출: 파편 소품 그림(2×2 아틀라스), 결재판 그림, 효과음
const C = () => document.createElement('canvas');
const ICONS = {
  paper: (x) => { x.fillStyle = '#fbfbf7'; x.fillRect(22, 10, 84, 108); x.fillStyle = '#b8bcc4'; for (let i = 0; i < 7; i++) x.fillRect(32, 26 + i * 12, 64 - (i % 3) * 10, 4); },
  sticky: (x) => { x.fillStyle = '#fde047'; x.fillRect(18, 18, 92, 92); x.fillStyle = 'rgba(0,0,0,.25)'; x.font = 'bold 26px sans-serif'; x.fillText('TODO', 26, 64); },
  cross: (x) => { x.fillStyle = '#fff'; x.beginPath(); x.arc(64, 64, 52, 0, 7); x.fill(); x.fillStyle = '#e11d48'; x.fillRect(52, 22, 24, 84); x.fillRect(22, 52, 84, 24); },
  pill: (x) => { x.translate(64, 64); x.rotate(-0.6); x.fillStyle = '#ef4444'; x.beginPath(); x.arc(-22, 0, 22, Math.PI / 2, Math.PI * 1.5); x.fillRect(-22, -22, 22, 44); x.fill(); x.fillStyle = '#f8fafc'; x.fillRect(0, -22, 22, 44); x.beginPath(); x.arc(22, 0, 22, -Math.PI / 2, Math.PI / 2); x.fill(); },
  ecg: (x) => { x.fillStyle = '#fbfbf7'; x.fillRect(10, 30, 108, 68); x.strokeStyle = '#16a34a'; x.lineWidth = 5; x.beginPath(); x.moveTo(14, 70); x.lineTo(44, 70); x.lineTo(54, 40); x.lineTo(64, 92); x.lineTo(74, 58); x.lineTo(82, 70); x.lineTo(114, 70); x.stroke(); },
  scale: (x) => { x.fillStyle = '#fbfbf7'; x.fillRect(22, 10, 84, 108); x.fillStyle = '#1e293b'; x.font = 'bold 60px serif'; x.textAlign = 'center'; x.fillText('⚖', 64, 86); },
  stamp: (x) => { x.fillStyle = '#fbfbf7'; x.fillRect(22, 10, 84, 108); x.strokeStyle = '#dc2626'; x.lineWidth = 6; x.beginPath(); x.arc(64, 64, 30, 0, 7); x.stroke(); x.fillStyle = '#dc2626'; x.font = 'bold 22px sans-serif'; x.textAlign = 'center'; x.fillText('★', 64, 72); },
  cell: (x) => { x.fillStyle = '#fff'; x.fillRect(8, 24, 112, 80); x.strokeStyle = '#21a366'; x.lineWidth = 3; for (let i = 0; i <= 4; i++) { x.beginPath(); x.moveTo(8 + i * 28, 24); x.lineTo(8 + i * 28, 104); x.stroke(); } for (let j = 0; j <= 4; j++) { x.beginPath(); x.moveTo(8, 24 + j * 20); x.lineTo(120, 24 + j * 20); x.stroke(); } x.fillStyle = '#21a366'; x.fillRect(36, 44, 28, 20); },
  coin: (x) => { const g = x.createRadialGradient(54, 50, 6, 64, 64, 52); g.addColorStop(0, '#fff3b0'); g.addColorStop(1, '#d4a017'); x.fillStyle = g; x.beginPath(); x.arc(64, 64, 50, 0, 7); x.fill(); x.fillStyle = '#9a6b00'; x.font = 'bold 56px sans-serif'; x.textAlign = 'center'; x.fillText('$', 64, 84); },
  bill: (x) => { x.fillStyle = '#86efac'; x.fillRect(6, 34, 116, 60); x.strokeStyle = '#166534'; x.lineWidth = 4; x.strokeRect(12, 40, 104, 48); x.fillStyle = '#166534'; x.font = 'bold 34px sans-serif'; x.textAlign = 'center'; x.fillText('$', 64, 76); },
  static: (x) => { x.fillStyle = '#1f2937'; x.fillRect(8, 22, 112, 84); for (let i = 0; i < 260; i++) { const v = (Math.random() * 255) | 0; x.fillStyle = `rgb(${v},${v},${v})`; x.fillRect(14 + Math.random() * 100, 28 + Math.random() * 72, 4, 4); } },
  clapper: (x) => { x.fillStyle = '#111'; x.fillRect(14, 46, 100, 62); x.fillStyle = '#fff'; for (let i = 0; i < 5; i++) { x.save(); x.translate(14 + i * 22, 22); x.transform(1, 0, -0.5, 1, 0, 0); x.fillRect(0, 0, 11, 20); x.restore(); } x.fillStyle = '#111'; x.fillRect(14, 22, 100, 4); },
  signal: (x) => { x.fillStyle = '#7c3aed'; for (let i = 0; i < 4; i++) x.fillRect(22 + i * 24, 96 - i * 22, 16, 18 + i * 22); },
  phone: (x) => { x.fillStyle = '#111827'; x.fillRect(38, 10, 52, 108); x.fillStyle = '#a5b4fc'; x.fillRect(42, 18, 44, 88); },
  fabric: (x) => { const c = ['#f43f5e', '#a855f7', '#0ea5e9', '#f59e0b'][(Math.random() * 4) | 0]; x.fillStyle = c; x.beginPath(); x.moveTo(14, 20); x.lineTo(114, 30); x.lineTo(104, 112); x.lineTo(20, 100); x.fill(); x.setLineDash([6, 6]); x.strokeStyle = '#fff'; x.lineWidth = 3; x.strokeRect(28, 34, 70, 60); },
  wafer: (x) => { x.fillStyle = '#cbd5e1'; x.beginPath(); x.arc(64, 64, 52, 0, 7); x.fill(); x.strokeStyle = 'rgba(99,102,241,.6)'; x.lineWidth = 1.5; for (let i = 20; i < 110; i += 10) { x.beginPath(); x.moveTo(i, 16); x.lineTo(i, 112); x.stroke(); x.beginPath(); x.moveTo(16, i); x.lineTo(112, i); x.stroke(); } },
  chip: (x) => { x.fillStyle = '#334155'; x.fillRect(30, 30, 68, 68); x.fillStyle = '#cbd5e1'; for (let i = 0; i < 5; i++) { x.fillRect(36 + i * 12, 16, 6, 14); x.fillRect(36 + i * 12, 98, 6, 14); x.fillRect(16, 36 + i * 12, 14, 6); x.fillRect(98, 36 + i * 12, 14, 6); } },
  gear: (x) => { x.translate(64, 64); x.fillStyle = '#9ca3af'; for (let i = 0; i < 8; i++) { x.rotate(Math.PI / 4); x.fillRect(-9, -54, 18, 22); } x.beginPath(); x.arc(0, 0, 38, 0, 7); x.fill(); x.fillStyle = '#4b5563'; x.beginPath(); x.arc(0, 0, 14, 0, 7); x.fill(); },
  bolt: (x) => { x.fillStyle = '#9ca3af'; x.beginPath(); for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; x.lineTo(64 + Math.cos(a) * 30, 38 + Math.sin(a) * 30); } x.fill(); x.fillRect(54, 52, 20, 64); },
  code: (x) => { x.fillStyle = '#0f172a'; x.fillRect(8, 26, 112, 76); x.fillStyle = '#22d3ee'; x.font = 'bold 44px monospace'; x.textAlign = 'center'; x.fillText('</>', 64, 80); },
  bug: (x) => { x.fillStyle = '#16a34a'; x.beginPath(); x.ellipse(64, 70, 26, 34, 0, 0, 7); x.fill(); x.strokeStyle = '#16a34a'; x.lineWidth = 6; for (const s of [-1, 1]) for (let i = 0; i < 3; i++) { x.beginPath(); x.moveTo(64 + s * 22, 56 + i * 16); x.lineTo(64 + s * 46, 46 + i * 20); x.stroke(); } },
  token: (x) => { x.fillStyle = '#ede9fe'; x.fillRect(10, 40, 108, 48); x.fillStyle = '#6d28d9'; x.font = 'bold 32px monospace'; x.textAlign = 'center'; x.fillText('tok', 64, 76); },
  star: (x) => { x.fillStyle = '#dc2626'; x.translate(64, 66); x.beginPath(); for (let i = 0; i < 10; i++) { const r = i % 2 ? 22 : 54, a = i / 10 * Math.PI * 2 - Math.PI / 2; x.lineTo(Math.cos(a) * r, Math.sin(a) * r); } x.fill(); },
};
const SETS = {
  office: ['paper', 'sticky', 'paper', 'cell'], hospital: ['cross', 'pill', 'ecg', 'pill'], law: ['paper', 'scale', 'stamp', 'paper'],
  accounting: ['cell', 'coin', 'paper', 'cell'], broadcast: ['static', 'clapper', 'paper', 'static'], telecom: ['signal', 'phone', 'signal', 'paper'],
  fashion: ['fabric', 'fabric', 'fabric', 'paper'], fab: ['wafer', 'chip', 'wafer', 'chip'], auto: ['gear', 'bolt', 'gear', 'paper'],
  it: ['code', 'bug', 'code', 'sticky'], nk: ['star', 'paper', 'star', 'stamp'], ai: ['token', 'chip', 'token', 'code'],
  'big tech': ['code', 'sticky', 'bug', 'paper'], finance: ['coin', 'bill', 'coin', 'bill'], space: ['bolt', 'gear', 'chip', 'paper'],
  media: ['static', 'clapper', 'static', 'paper'], pharma: ['pill', 'cross', 'pill', 'ecg'],
};
export function confettiAtlas(theme) {
  const c = C(); c.width = c.height = 256; const x = c.getContext('2d');
  (SETS[theme] || SETS.office).forEach((name, i) => { x.save(); x.translate((i % 2) * 128, ((i / 2) | 0) * 128); ICONS[name](x); x.restore(); });
  return c;
}
// 결재판(바트) 그림
export function boardCanvas(theme, T) {
  const c = C(); c.width = 512; c.height = 160; const x = c.getContext('2d');
  const base = () => { x.fillStyle = '#2b2b2e'; x.fillRect(0, 0, 512, 160); x.fillStyle = '#9aa0a6'; x.fillRect(8, 50, 40, 60); };
  if (theme === 'hospital' || theme === 'pharma') {
    base(); x.fillStyle = '#eef6ff'; x.fillRect(40, 12, 460, 136); x.fillStyle = '#2563eb'; x.fillRect(40, 12, 460, 30);
    x.fillStyle = '#fff'; x.font = 'bold 22px sans-serif'; x.fillText(T('lang') === 'en' ? 'PATIENT CHART' : '진료기록', 56, 35);
    x.strokeStyle = '#16a34a'; x.lineWidth = 4; x.beginPath(); x.moveTo(56, 100); for (let i = 0; i < 9; i++) { const bx = 56 + i * 48; x.lineTo(bx + 20, 100); x.lineTo(bx + 26, 64); x.lineTo(bx + 32, 122); x.lineTo(bx + 38, 100); } x.stroke();
  } else if (theme === 'law') {
    base(); x.fillStyle = '#fef08a'; x.fillRect(40, 12, 460, 136); x.strokeStyle = '#60a5fa'; x.lineWidth = 2; for (let i = 0; i < 6; i++) { x.beginPath(); x.moveTo(40, 36 + i * 20); x.lineTo(500, 36 + i * 20); x.stroke(); }
    x.strokeStyle = '#ef4444'; x.beginPath(); x.moveTo(90, 12); x.lineTo(90, 148); x.stroke(); x.fillStyle = '#1e293b'; x.font = 'italic 26px serif'; x.fillText('Brief — draft v37', 110, 60);
  } else if (theme === 'broadcast' || theme === 'media') {
    base(); x.fillStyle = '#f8fafc'; x.fillRect(40, 12, 460, 136); x.fillStyle = '#111'; x.font = 'bold 22px sans-serif'; x.fillText('CUE SHEET', 56, 40);
    x.font = '18px monospace'; ['00:00 OPENING', '00:45 VCR #1', '02:10 LIVE', '03:30 CM'].forEach((l, i) => x.fillText(l, 56, 70 + i * 22));
    x.fillStyle = '#dc2626'; x.beginPath(); x.arc(450, 50, 14, 0, 7); x.fill(); x.font = 'bold 18px sans-serif'; x.fillText('ON AIR', 400, 90);
  } else if (theme === 'accounting' || theme === 'finance') {
    base(); x.fillStyle = '#fff'; x.fillRect(40, 12, 460, 136); x.strokeStyle = '#21a366'; x.lineWidth = 2;
    for (let i = 0; i <= 8; i++) { x.beginPath(); x.moveTo(40 + i * 57, 12); x.lineTo(40 + i * 57, 148); x.stroke(); } for (let j = 0; j <= 6; j++) { x.beginPath(); x.moveTo(40, 12 + j * 22.6); x.lineTo(500, 12 + j * 22.6); x.stroke(); }
    x.fillStyle = '#dc2626'; x.font = 'bold 24px monospace'; x.fillText('#REF!', 270, 90);
  } else {
    base(); x.fillStyle = '#f6f4ee'; x.fillRect(40, 12, 460, 136);
    x.strokeStyle = '#222'; x.lineWidth = 3; x.font = 'bold 24px sans-serif'; x.fillStyle = '#222';
    T('board').forEach((t, i) => { x.strokeRect(70 + i * 100, 24, 96, 112); x.fillText(t, 82 + i * 100, 56); });
    x.strokeStyle = '#d4202a'; x.lineWidth = 7; x.beginPath(); x.arc(380, 100, 42, 0, 7); x.stroke();
    x.fillStyle = '#d4202a'; x.font = 'bold 26px sans-serif'; x.textAlign = 'center'; x.fillText(T('reject'), 380, 110);
  }
  return c;
}
// 업종별 추가 효과음 (sfx 객체를 받아 그 위에서 소리를 만든다)
export function themeSfx(theme, sfx) {
  const S = {
    hospital: { quake: () => { for (let i = 0; i < 6; i++) { sfx.tone('sine', 960, 960, 0.45, 0.22, 0.02, i * 0.9); sfx.tone('sine', 770, 770, 0.45, 0.22, 0.02, i * 0.9 + 0.45); } }, nuke: () => { sfx.tone('sine', 1000, 1000, 0.12, 0.25, 0.005, 0); sfx.tone('sine', 1000, 1000, 0.12, 0.25, 0.005, 0.8); sfx.tone('sine', 1000, 1000, 3.5, 0.25, 0.01, 1.6); }, bomb: () => sfx.tone('sine', 1000, 1000, 0.08, 0.15, 0.005, 0) },
    law: { quake: () => { for (const d of [0, 0.35, 0.7]) { sfx.noise(0.08, 'bandpass', 900, 600, 0.9, 0.002, d); sfx.tone('triangle', 180, 120, 0.12, 0.6, 0.002, d); } }, bomb: () => sfx.noise(0.25, 'highpass', 2500, 1200, 0.3, 0.01, 0) },
    accounting: { bomb: () => { for (let i = 0; i < 4; i++) sfx.tone('square', 2100, 2100, 0.05, 0.12, 0.003, i * 0.09); }, quake: () => { for (let i = 0; i < 8; i++) sfx.tone('square', 1800 + i * 60, 1800 + i * 60, 0.05, 0.1, 0.003, i * 0.12); } },
    broadcast: { bomb: () => sfx.tone('sine', 1000, 1000, 0.6, 0.25, 0.005, 0), nuke: () => sfx.tone('sine', 1000, 1000, 2.5, 0.25, 0.01, 0.2), quake: () => sfx.noise(2.2, 'bandpass', 3000, 3000, 0.25, 0.05, 0) },
    media: { bomb: () => sfx.tone('sine', 1000, 1000, 0.6, 0.25, 0.005, 0) },
    finance: { bomb: () => { sfx.tone('square', 1300, 1300, 0.06, 0.2, 0.003, 0); sfx.noise(0.35, 'highpass', 6000, 3000, 0.35, 0.003, 0.06); }, meteor: () => { for (let i = 0; i < 6; i++) sfx.tone('triangle', 2400 + Math.random() * 600, 2000, 0.08, 0.15, 0.002, i * 0.07); } },
    accounting2: {},
    auto: { bomb: () => { sfx.tone('sawtooth', 415, 415, 0.5, 0.18, 0.01, 0); sfx.tone('sawtooth', 523, 523, 0.5, 0.14, 0.01, 0); }, quake: () => { sfx.noise(0.15, 'lowpass', 400, 200, 0.8, 0.002, 0); sfx.noise(0.8, 'highpass', 4000, 2000, 0.4, 0.002, 0.05); } },
    it: { bomb: () => { sfx.tone('sine', 880, 880, 0.12, 0.2, 0.003, 0); sfx.tone('sine', 660, 660, 0.25, 0.2, 0.003, 0.12); } },
    'big tech': { bomb: () => { sfx.tone('sine', 880, 880, 0.12, 0.2, 0.003, 0); sfx.tone('sine', 660, 660, 0.25, 0.2, 0.003, 0.12); } },
    ai: { bomb: () => { for (let i = 0; i < 5; i++) sfx.tone('square', 600 + Math.random() * 900, 400, 0.04, 0.1, 0.002, i * 0.05); } },
    fab: { quake: () => { for (let i = 0; i < 5; i++) sfx.tone('sawtooth', 700, 500, 0.4, 0.15, 0.01, i * 0.5); } },
    telecom: { bomb: () => { [1200, 2200, 1500, 2600, 1800].forEach((f, i) => sfx.tone('sine', f, f, 0.07, 0.12, 0.003, i * 0.06)); } },
    nk: { nuke: () => { [392, 392, 523, 523, 659].forEach((f, i) => sfx.tone('square', f, f, 0.25, 0.12, 0.01, i * 0.28)); } },
  }[theme] || {};
  return (ev) => { if (S[ev]) S[ev](); };
}
