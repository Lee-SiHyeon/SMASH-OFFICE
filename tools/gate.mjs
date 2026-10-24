#!/usr/bin/env node
// 배포 게이트: node tools/gate.mjs [--quick]   (--quick = 브라우저 표본만, 전체 회사 로드 생략)
// 결과: gate/report.json, gate/REPORT.md. 하나라도 FAIL이면 종료 코드 1 → pre-push 훅이 push를 막음.
// 기준과 출처는 GATES.md 참고.
import fs from 'fs'; import path from 'path'; import zlib from 'zlib'; import { pathToFileURL } from 'url';
import { chromium } from 'playwright'; import { spawnSync } from 'child_process'; import crypto from 'crypto';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..'); process.chdir(ROOT);
const QUICK = process.argv.includes('--quick');
const SITE = JSON.parse(fs.readFileSync('site.json', 'utf8'));
const codes = fs.readdirSync('companies').filter((f) => f.endsWith('.json')).map((f) => f.slice(0, -5)).sort();
const HEAVY = ['samsung-pt', 'hyundai-ulsan', 'lgsp', 'pangyo'].filter((c) => codes.includes(c));
const results = []; const t0 = Date.now();
const rec = (id, name, status, detail, metrics = {}) => { results.push({ id, name, status, detail, metrics }); console.log(`${status === 'PASS' ? '✅' : status === 'WARN' ? '⚠️ ' : '❌'} ${id} ${name}: ${detail}`); };
const CHROME = process.env.HOME + '/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome';
const browser = await chromium.launch({ executablePath: fs.existsSync(CHROME) ? CHROME : undefined, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=user-gesture-required'] });
const url = (code, hash = '#bench') => pathToFileURL(path.join(ROOT, 'docs', code, 'index.html')).href + hash;
async function open(code, opt = {}) {
  const ctx = await browser.newContext(opt.mobile ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } : { viewport: { width: 1280, height: 720 } });
  if (opt.noStorage) await ctx.addInitScript(() => { Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('blocked', 'SecurityError'); } }); });
  const pg = await ctx.newPage(); const errs = []; pg.on('pageerror', (e) => errs.push(e.message));
  const loaded = await pg.goto(url(code, opt.hash ?? '#bench'), { waitUntil: 'domcontentloaded', timeout: 180000 }).then(() => true, (e) => { errs.push('로드 시간 초과'); return false; });
  const ok = loaded && await pg.waitForFunction(() => window.__smash && window.__smash.perfLog.length > 3, null, { timeout: opt.timeout || 150000 }).then(() => true, () => false);
  return { ctx, pg, errs, ok };
}
const simWait = (pg, s) => pg.evaluate((s) => new Promise((r) => { const S = window.__smash, t0 = S.simTime(); const f = () => (S.simTime() - t0 >= s ? r() : setTimeout(f, 10)); f(); }), s);
const pct = (a, p) => { const s = [...a].sort((x, y) => x - y); return s[Math.min(s.length - 1, Math.floor(s.length * p))] || 0; };

// ── G0 빌드: 소스가 빌드되고, 배포 파일(docs)이 지금 소스로 만든 것과 같아야 함 ──
{
  fs.mkdirSync('gate', { recursive: true });
  const r = spawnSync('npx', ['esbuild', 'src/main.js', '--bundle', '--minify', '--format=iife', '--target=es2020', '--legal-comments=none', '--outfile=gate/bundle.js', '--log-level=error'], { encoding: 'utf8' });
  if (r.status !== 0) rec('G0', '빌드', 'FAIL', '소스 빌드 실패: ' + (r.stderr || '').split('\n').slice(0, 3).join(' '));
  else {
    const want = 'engine.' + crypto.createHash('sha1').update(fs.readFileSync('gate/bundle.js', 'utf8')).digest('hex').slice(0, 10) + '.js';
    const used = new Set(codes.filter((c) => fs.existsSync(`docs/${c}/index.html`)).map((c) => (fs.readFileSync(`docs/${c}/index.html`, 'utf8').match(/engine\.[0-9a-f]+\.js/) || ['없음'])[0]));
    const stale = [...used].filter((e) => e !== want);
    rec('G0', '빌드', stale.length ? 'FAIL' : 'PASS', stale.length ? `배포 파일이 소스보다 오래됨(${[...used].join(',')} ≠ ${want}) → python3 tools/assemble.py 다시` : `빌드 성공, 모든 회사가 최신 엔진 ${want}`);
  }
}
// ── G1 데이터·빌드 무결성 (정적) ──
{
  const miss = [];
  const hubs = ['', 'us/', 'jp/', 'cn/', 'eu/', 'in/', 'vn/'].map((p) => `docs/${p}index.html`).filter((f) => fs.existsSync(f)).map((f) => fs.readFileSync(f, 'utf8')).join('');
  for (const c of codes) {
    const why = [];
    if (!fs.existsSync(`data/${c}.json`)) why.push('data'); if (!fs.existsSync(`docs/${c}/index.html`)) why.push('page');
    if (!fs.existsSync(`docs/${c}/og.png`)) why.push('og'); if (!hubs.includes(`"code": "${c}"`) && !hubs.includes(`"code":"${c}"`)) why.push('hub');
    if (why.length) miss.push(`${c}(${why.join(',')})`);
  }
  const eng = fs.readdirSync('docs').filter((f) => /^engine\.[0-9a-f]+\.js$/.test(f));
  const refd = new Set(codes.filter((c) => fs.existsSync(`docs/${c}/index.html`)).map((c) => (fs.readFileSync(`docs/${c}/index.html`, 'utf8').match(/engine\.[0-9a-f]+\.js/) || [])[0]));
  const stale = [...refd].filter((e) => e && !eng.includes(e));
  const hard = miss.filter((m) => /data|page|hub/.test(m));
  rec('G1', '데이터·빌드 무결성', hard.length || stale.length ? 'FAIL' : miss.length ? 'WARN' : 'PASS',
    hard.length || stale.length ? `빠진 것: ${[...hard, ...stale].slice(0, 8).join(' ')}` : miss.length ? `공유 이미지 없음 ${miss.length}곳: ${miss.slice(0, 6).join(' ')}` : `${codes.length}곳 모두 데이터·페이지·공유 이미지·메인 목록 있음`, { companies: codes.length, missing: miss });
}
// ── G2 용량·첫 로딩 (정적) ── CrazyGames 모바일 초기 20MB, Poki 10초 이탈 → 우리 기준: 페이지당 gzip 3MB 실패, 1.5MB 경고
{
  const gz = (f) => zlib.gzipSync(fs.readFileSync(f)).length;
  const engF = fs.readdirSync('docs').filter((f) => /^engine\.[0-9a-f]+\.js$/.test(f)).map((f) => `docs/${f}`);
  const engGz = Math.max(0, ...engF.map(gz));
  const rows = codes.filter((c) => fs.existsSync(`docs/${c}/index.html`)).map((c) => ({ c, b: gz(`docs/${c}/index.html`) + engGz + (fs.existsSync(`docs/logo/${c}.png`) ? fs.statSync(`docs/logo/${c}.png`).size : 0) })).sort((a, b) => b.b - a.b);
  const count = (d) => fs.readdirSync(d, { withFileTypes: true }).reduce((n, e) => n + (e.isDirectory() ? count(path.join(d, e.name)) : 1), 0);
  const files = count('docs'); const mb = (b) => (b / 1048576).toFixed(2) + 'MB';
  const worst = rows[0]; const st = worst.b > 3 * 1048576 || files > 1500 ? 'FAIL' : worst.b > 1.5 * 1048576 ? 'WARN' : 'PASS';
  rec('G2', '용량·첫 로딩', st, `가장 큰 페이지 ${worst.c} ${mb(worst.b)}(gzip, 엔진 ${mb(engGz)} 포함) · 중앙값 ${mb(rows[rows.length >> 1].b)} · 파일 ${files}개`, { worst, engineGz: engGz, files, top5: rows.slice(0, 5) });
}
// ── G3 보안·개인정보 (정적) ── 비밀키·관리자 키·원본 IP 저장 금지
{
  const bad = []; const adminKey = (() => { try { return fs.readFileSync(process.env.HOME + '/.nad-scratch/tmp/smash-admin.key', 'utf8').trim(); } catch (e) { return ''; } })();
  const scan = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) scan(p); else if (/\.(html|js|json|txt)$/.test(e.name)) { const s = fs.readFileSync(p, 'utf8'); if (/sb_secret_|service_role|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6[^"]*cm9sZSI6InNlcnZpY2Vfcm9sZ/.test(s)) bad.push(`${p}: 서버 비밀키`); if (adminKey && s.includes(adminKey)) bad.push(`${p}: 통계 관리자 키`); if (/sbp_[0-9a-f]{20,}/.test(s)) bad.push(`${p}: Supabase 개인 토큰`); } } };
  scan('docs'); for (const f of ['src', 'tools', 'supabase']) scan(f);
  const sql = fs.readdirSync('supabase').map((f) => fs.readFileSync(`supabase/${f}`, 'utf8')).join('\n');
  if (/insert into [^;]*\bip\b[^_]/i.test(sql)) bad.push('SQL: 원본 IP 저장');
  rec('G3', '보안·개인정보', bad.length ? 'FAIL' : 'PASS', bad.length ? bad.slice(0, 5).join(' / ') : '공개 파일에 비밀키·관리자 키·토큰 없음, IP는 해시로만 저장', { bad });
}
// ── G4 다국어 (정적) ── 한국어에 있는 문구가 다른 언어에 모두 있는지
{
  const { STR } = await import(pathToFileURL(path.join(ROOT, 'src/i18n.js')).href);
  const keys = (o, p = '') => Object.entries(o).flatMap(([k, v]) => (v && typeof v === 'object' && !Array.isArray(v) ? keys(v, p + k + '.') : [p + k]));
  const base = new Set(keys(STR.ko)); const miss = {};
  for (const l of Object.keys(STR)) { if (l === 'ko') continue; const have = new Set(keys(STR[l])); const m = [...base].filter((k) => !have.has(k)); if (m.length) miss[l] = m; }
  const n = Object.values(miss).reduce((a, b) => a + b.length, 0);
  rec('G4', '다국어', n ? 'FAIL' : 'PASS', n ? Object.entries(miss).map(([l, m]) => `${l} ${m.length}개 빠짐(${m.slice(0, 3).join(', ')})`).join(' / ') : `${Object.keys(STR).length}개 언어 × ${base.size}개 문구 모두 있음`, { missing: miss });
}
// ── G5 서버·랭킹 (네트워크) ──
{
  const rpc = async (fn, args) => { const s = Date.now(); const r = await fetch(`${SITE.supabaseUrl}/rest/v1/rpc/${fn}`, { method: 'POST', headers: { apikey: SITE.supabaseKey, 'Content-Type': 'application/json' }, body: JSON.stringify(args), signal: AbortSignal.timeout(10000) }); return { ms: Date.now() - s, status: r.status, body: await r.json().catch(() => null) }; };
  const bad = []; const ms = {};
  try {
    for (const [fn, a] of [['smash_top', { p_company: 'lgsp', p_limit: 5, p_mode: 't60' }], ['smash_companies', { p_mode: 't60' }], ['smash_global', { p_mode: 't60', p_limit: 5 }]]) { let r = await rpc(fn, a); if (r.ms > 3000) r = await rpc(fn, a); /* 첫 호출은 서버가 깨어나느라 느릴 수 있어 한 번 더 */ ms[fn] = r.ms; if (r.status !== 200) bad.push(`${fn} ${r.status}`); else if (r.ms > 3000) bad.push(`${fn} 느림 ${r.ms}ms`); }
    const cheat = await rpc('smash_submit', { p_company: 'lgsp', p_nick: 'gate', p_score: 999999999, p_collapsed: 1, p_rank: 'x', p_mode: 't60', p_time_ms: 60000 });
    if (!cheat.body || cheat.body.ok !== false) bad.push('말도 안 되는 점수가 등록됨');
    const lock = await rpc('smash_stats', { p_key: 'wrong-key', p_days: 1 }); if (!lock.body || lock.body.ok !== false) bad.push('통계가 키 없이 열림');
    const nick = await rpc('smash_clean_nick', { p: '씨 발' }); if (nick.body !== '익명') bad.push('욕설 닉네임 필터 안 됨');
    for (const t of ['smash_scores', 'smash_events', 'smash_admin']) { const r = await fetch(`${SITE.supabaseUrl}/rest/v1/${t}?select=*&limit=1`, { headers: { apikey: SITE.supabaseKey } }); const b = await r.json().catch(() => null); if (r.status === 200 && Array.isArray(b) && b.length) bad.push(`${t} 표를 누구나 직접 읽을 수 있음`); }
  } catch (e) { bad.push('서버 연결 실패 ' + e.message); }
  rec('G5', '서버·랭킹', bad.length ? 'FAIL' : 'PASS', bad.length ? bad.join(' / ') : `응답 ${Object.entries(ms).map(([k, v]) => `${k.replace('smash_', '')} ${v}ms`).join(', ')} · 조작 점수 거부 · 통계 잠김 · 욕설 닉 거름 · 표 직접 읽기 막힘`, { ms, bad });
}
// ── G6 안정성: 모든 회사 로드 (크래시 없는 세션 99.5%+ → 우리는 회사 페이지 100%) ──
{
  const list = QUICK ? [...new Set([...HEAVY, 'boramae', 'nk-ryugyong', 'apple', 'vn-landmark81'])].filter((c) => codes.includes(c)) : codes;
  const bad = [];
  for (let i = 0; i < list.length; i += 4) await Promise.all(list.slice(i, i + 4).map(async (c) => {
    const { ctx, errs, ok } = await open(c, { timeout: 180000 });
    if (!ok || errs.length) bad.push(`${c}${ok ? '' : '(안 뜸)'} ${errs[0] || ''}`.trim());
    await ctx.close();
  }));
  rec('G6', '안정성(페이지 오류 0)', bad.length ? 'FAIL' : 'PASS', bad.length ? `${bad.length}/${list.length}곳 오류: ${bad.slice(0, 4).join(' / ')}` : `${list.length}곳${QUICK ? '(표본)' : ' 전부'} 오류 없이 뜸`, { checked: list.length, bad });
}
// ── G7 성능·물리: 무거운 회사에서 폭탄·지진·핵폭탄 ── 60fps 예산 16.7ms 중 JS 4ms(중앙값), 순간 최대 p95 12ms
{
  const rows = [];
  for (const c of HEAVY) {
    const { ctx, pg, errs, ok } = await open(c);
    if (!ok) { rows.push({ c, fail: '안 뜸' }); await ctx.close(); continue; }
    await pg.evaluate(() => { window.__smash.perfLog.length = 0; });
    const st = await pg.evaluate(async () => {
      const S = window.__smash, wait = (s) => new Promise((r) => { const t0 = S.simTime(); const f = () => (S.simTime() - t0 >= s ? r() : setTimeout(f, 10)); f(); });
      const site = S.buildings.filter((b) => b.site);
      for (let k = 0; k < 6; k++) { const b = site[(k * 7) % site.length]; S.selectTool('bomb'); S.actV('bomb', [b.cx, b.h * 0.4, b.cz]); await wait(0.6); }
      S.selectTool('quake'); S.actV('quake', [site[0].cx, 5, site[0].cz]); await wait(4);
      S.selectTool('nuke'); S.actV('nuke', [0, 5, 0]); await wait(8);
      return { ...S.state(), rub: S.rubbleStats(), log: S.perfLog.slice() };
    });
    const nan = Object.values(st).some((v) => typeof v === 'number' && !Number.isFinite(v));
    rows.push({ c, med: +pct(st.log, 0.5).toFixed(2), p95: +pct(st.log, 0.95).toFixed(2), max: +Math.max(...st.log).toFixed(1), rubH: st.rub.maxH, over20: st.rub.over20, floating: st.rub.floating, col: st.collapsedSite, nan, errs: errs.length });
    await ctx.close();
  }
  const fail = rows.filter((r) => r.fail || r.med > 4 || r.p95 > 12 || r.rubH > 17 || r.over20 > 0 || r.floating > 0 || r.nan || r.errs);
  const warn = rows.filter((r) => !r.fail && (r.med > 2.5 || r.p95 > 8 || r.max > 150));
  rec('G7', '성능·물리', fail.length ? 'FAIL' : warn.length ? 'WARN' : 'PASS', rows.map((r) => (r.fail ? `${r.c} ${r.fail}` : `${r.c} 중앙 ${r.med}ms/p95 ${r.p95}ms/최대 ${r.max}ms/잔해 ${r.rubH}m/뜬 조각 ${r.floating}`)).join(' · '), { rows });
}
// ── G8 게임 흐름: 60초전 끝·결과창·등록칸, 철거전 끝 ──
{
  const bad = []; const info = [];
  {
    const { ctx, pg, ok } = await open('boramae', { mobile: true });
    if (ok) {
      await pg.tap('#demoBtn');
      const r = await pg.evaluate(async () => { const S = window.__smash, wait = (s) => new Promise((r) => { const t0 = S.simTime(); const f = () => (S.simTime() - t0 >= s ? r() : setTimeout(f, 10)); f(); }); const site = S.buildings.filter((b) => b.site); for (let k = 0; k < 200 && !S.mode().gameOver; k++) { const b = site[k % site.length]; const t = ['bomb', 'meteor', 'quake'][k % 3]; S.selectTool(t); S.actV(t, [b.cx, b.h * 0.3, b.cz]); await wait(t === 'meteor' ? 1.8 : 0.5); } await wait(1); return S.mode(); });
      const shown = await pg.waitForFunction(() => !document.getElementById('cardModal').hidden, null, { timeout: 30000 }).then(() => true, () => false);
      Object.assign(r, { card: shown, sub: await pg.evaluate(() => !document.getElementById('submitRow').hidden) });
      info.push(`철거전 ${(r.finishMs / 1000).toFixed(1)}초`); if (!r.gameOver) bad.push('철거전이 안 끝남'); if (!r.card) bad.push('철거전 결과창 안 뜸'); if (!r.sub) bad.push('철거전 등록칸 없음');
    } else bad.push('boramae 안 뜸');
    await ctx.close();
  }
  if (!QUICK) {
    const { ctx, pg, ok } = await open('lgsp', { mobile: true });
    if (ok) {
      await pg.tap('#startBtn'); await simWait(pg, 63);
      await pg.waitForFunction(() => !document.getElementById('cardModal').hidden, null, { timeout: 30000 }).catch(() => {});
      const r = await pg.evaluate(() => ({ ...window.__smash.mode(), timer: document.getElementById('timer').textContent, card: !document.getElementById('cardModal').hidden }));
      info.push(`60초전 타이머 ${r.timer}`); if (!r.gameOver || r.finishMs !== 60000) bad.push('60초전이 60초에 안 끝남'); if (!r.card) bad.push('60초전 결과창 안 뜸');
    } else bad.push('lgsp 안 뜸');
    await ctx.close();
  }
  rec('G8', '게임 흐름', bad.length ? 'FAIL' : 'PASS', bad.length ? bad.join(' / ') : info.join(' · ') + ' · 결과창·등록칸 정상', { bad, info });
}
// ── G9 모바일·접근성: 가로 넘침 0, 패널 겹침 0, 터치 버튼 40px+, 선택 막기, 시크릿 모드(저장소 막힘)에서도 동작, 소리 켜짐 ──
{
  const bad = []; const m = {};
  for (const c of ['lgsp', 'in-samsung-blr', 'vn-vinfast']) {
    const { ctx, pg, ok } = await open(c, { mobile: true });
    if (!ok) { bad.push(`${c} 안 뜸`); await ctx.close(); continue; }
    const r = await pg.evaluate(() => {
      const R = (id) => document.getElementById(id).getBoundingClientRect(); const a = R('brand'), b = R('right');
      const over = !(a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top);
      const tools = [...document.querySelectorAll('.tool')].map((t) => t.getBoundingClientRect()).filter((r) => r.width);
      const small = tools.filter((r) => r.width < 40 || r.height < 40).length;
      return { hscroll: document.documentElement.scrollWidth > innerWidth + 1, over, small, minTool: Math.round(Math.min(...tools.map((r) => Math.min(r.width, r.height)))), us: getComputedStyle(document.body).userSelect || getComputedStyle(document.body).webkitUserSelect, vp: !!document.querySelector('meta[name=viewport]') };
    });
    m[c] = r;
    if (r.hscroll) bad.push(`${c} 가로 넘침`); if (r.over) bad.push(`${c} 회사 패널과 점수 패널 겹침`); if (r.small) bad.push(`${c} 작은 터치 버튼 ${r.small}개(${r.minTool}px)`); if (r.us !== 'none') bad.push(`${c} 길게 누르면 글자 선택됨`); if (!r.vp) bad.push(`${c} viewport 없음`);
    if (c === 'lgsp') { await pg.tap('#freeBtn'); await pg.touchscreen.tap(200, 420); await pg.waitForTimeout(600); m.audio = await pg.evaluate(() => window.__smash.audio && window.__smash.audio()); if (m.audio !== 'running') bad.push(`터치 후 소리 상태 ${m.audio}`); }
    await ctx.close();
  }
  { const { ctx, errs, ok } = await open('lgsp', { mobile: true, noStorage: true }); if (!ok || errs.length) bad.push(`시크릿 모드(저장소 막힘)에서 오류: ${errs[0] || '안 뜸'}`); await ctx.close(); }
  rec('G9', '모바일·접근성', bad.length ? 'FAIL' : 'PASS', bad.length ? bad.join(' / ') : `가로 넘침·겹침 없음, 가장 작은 버튼 ${Math.min(...Object.values(m).filter((x) => x && x.minTool).map((x) => x.minTool))}px, 저장소 막혀도 동작, 터치하면 소리 켜짐`, m);
}
// ── G10 콘텐츠·표시: 비공식 패러디 표시, 로고/이니셜, 시끄러운 디버그 코드 없음 ──
{
  const bad = []; const html = fs.readFileSync('docs/lgsp/index.html', 'utf8'); const i18n = fs.readFileSync('src/i18n.js', 'utf8');
  if (!/비공식 패러디/.test(i18n) || !/unofficial parody/i.test(i18n)) bad.push('게임 안 비공식 패러디 표시 없음');
  for (const f of ['docs/index.html', 'docs/us/index.html']) if (fs.existsSync(f) && !/비공식|Unofficial/i.test(fs.readFileSync(f, 'utf8'))) bad.push(`${f} 비공식 표시 없음`);
  const eng = fs.readdirSync('docs').find((f) => /^engine\.[0-9a-f]+\.js$/.test(f) && html.includes(f));
  if (eng && /debugger;/.test(fs.readFileSync(`docs/${eng}`, 'utf8'))) bad.push('엔진에 debugger 남음');
  const lm = fs.existsSync('logo_src/index.json') ? Object.keys(JSON.parse(fs.readFileSync('logo_src/index.json', 'utf8'))).length : 0;
  rec('G10', '콘텐츠·표시', bad.length ? 'FAIL' : 'PASS', bad.length ? bad.join(' / ') : `비공식 패러디 표시 있음, 로고 ${lm}/${codes.length}곳(나머지는 이니셜), 닉네임 욕설 필터(G5)`, { logos: lm });
}
await browser.close();
const fails = results.filter((r) => r.status === 'FAIL').length, warns = results.filter((r) => r.status === 'WARN').length;
const sec = Math.round((Date.now() - t0) / 1000);
fs.mkdirSync('gate', { recursive: true });
fs.writeFileSync('gate/report.json', JSON.stringify({ at: new Date().toISOString(), quick: QUICK, fails, warns, sec, results }, null, 1));
fs.writeFileSync('gate/REPORT.md', `# 게이트 결과 ${new Date().toISOString().slice(0, 16)} (${QUICK ? '빠른' : '전체'}, ${sec}초)\n\n| | 게이트 | 결과 |\n|---|---|---|\n${results.map((r) => `| ${r.status === 'PASS' ? '✅' : r.status === 'WARN' ? '⚠️' : '❌'} | ${r.id} ${r.name} | ${r.detail.replace(/\|/g, '/')} |`).join('\n')}\n`);
console.log(`\n${fails ? '❌ FAIL' : '✅ PASS'} — 실패 ${fails}, 경고 ${warns}, ${sec}초. 자세히: gate/REPORT.md`);
process.exit(fails ? 1 : 0);
