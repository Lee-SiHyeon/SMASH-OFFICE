// SMASH 회사 부수기 엔진 — 처음부터 새로 쓴 코드 (three.js r160)
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { makeT } from './i18n.js';
import { THEMES, GROUP_THEME } from './themes.js';
import { confettiAtlas, boardCanvas, themeSfx } from './fx_theme.js';

const SCENE = JSON.parse(document.getElementById('scene-data').textContent);
const CFG = JSON.parse(document.getElementById('config-data').textContent);
const PORTAL = !!CFG.portal; // 게임 포털(CrazyGames 등) 빌드: 브라우저 언어, 외부 링크·로고 없음
const LANG = PORTAL ? (() => { const l = (navigator.language || 'en').slice(0, 2).toLowerCase(); return ['ko', 'ja', 'zh', 'vi', 'en'].includes(l) ? l : 'en'; })() : (CFG.lang || 'ko');
if (PORTAL && LANG !== (CFG.lang || 'ko') && CFG.en) Object.assign(CFG, CFG.en);
// 포털에서 회사 언어와 화면 언어가 다르면: OSM 영어 이름 → 한글은 로마자 → 그 밖의 한자 등은 이름 숨김
const ROMA = [['g', 'kk', 'n', 'd', 'tt', 'r', 'm', 'b', 'pp', 's', 'ss', '', 'j', 'jj', 'ch', 'k', 't', 'p', 'h'],
  ['a', 'ae', 'ya', 'yae', 'eo', 'e', 'yeo', 'ye', 'o', 'wa', 'wae', 'oe', 'yo', 'u', 'wo', 'we', 'wi', 'yu', 'eu', 'ui', 'i'],
  ['', 'k', 'k', 'k', 'n', 'n', 'n', 't', 'l', 'k', 'm', 'l', 'l', 'l', 'p', 'l', 'm', 'p', 'p', 't', 't', 'ng', 't', 't', 'k', 't', 'p', 't']];
const romanize = (t) => t.replace(/[가-힣]+/g, (w) => { const r = [...w].map((ch) => { const c = ch.charCodeAt(0) - 0xac00; return ROMA[0][Math.floor(c / 588)] + ROMA[1][Math.floor((c % 588) / 28)] + ROMA[2][c % 28]; }).join(''); return r[0].toUpperCase() + r.slice(1); });
const FOREIGN = PORTAL && LANG !== (CFG.lang || 'ko');
const bName = (src) => { if (!FOREIGN || !src.n) return src.n; if (src.ne) return src.ne; if (/^[\x00-\u024f\s·・\-–—()&'.,0-9]+$/.test(src.n)) return src.n; if (/^[가-힣A-Za-z0-9\s·()\-&.]+$/.test(src.n)) return romanize(src.n); return ''; };
const THEME_KEY = CFG.theme || GROUP_THEME[CFG.group] || 'office';
const TH = (THEMES[LANG] || {})[THEME_KEY] || {};
const T = makeT(LANG, TH);
const NUM = (v, o) => Number(v).toLocaleString(LANG === 'zh' ? 'zh-CN' : LANG, o);
const BENCH = location.hash.includes('bench'); // 렌더 없이 계산만 재는 모드
const IS_MOBILE = matchMedia('(pointer:coarse)').matches || innerWidth < 760;

// ───────────────────────── 기본 세팅 ─────────────────────────
const canvas = document.getElementById('stage');
// GPU 이름으로 소프트웨어 렌더링(하드웨어 가속 꺼짐) 감지
const GPU_NAME = (() => { try { const g = document.createElement('canvas').getContext('webgl2') || document.createElement('canvas').getContext('webgl'); const e = g && g.getExtension('WEBGL_debug_renderer_info'); return e ? g.getParameter(e.UNMASKED_RENDERER_WEBGL) : ''; } catch (e) { return ''; } })();
const SOFTWARE_GL = /swiftshader|llvmpipe|softpipe|software|basic render/i.test(GPU_NAME);
const QUALITY = [ // 0 낮음 · 1 보통 · 2 높음  (휴대폰은 화면이 작아서 배율을 더 높게)
  { name: T('q')[0], shadow: 0, px: 0.9e6, dprMax: IS_MOBILE ? 1.0 : 0.8, fxk: 0.35 },
  { name: T('q')[1], shadow: 2048, px: IS_MOBILE ? 1.6e6 : 2.1e6, dprMax: IS_MOBILE ? 1.75 : 1.0, fxk: IS_MOBILE ? 0.75 : 0.6 },
  { name: T('q')[2], shadow: 4096, px: IS_MOBILE ? 2.6e6 : 4.2e6, dprMax: IS_MOBILE ? 2.5 : 1.5, fxk: 1 },
];
let qLevel = (() => { try { const v = localStorage.getItem('smash-q'); if (v !== null) return +v; } catch (e) {} return SOFTWARE_GL ? 0 : 1; })();
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !IS_MOBILE && !SOFTWARE_GL && devicePixelRatio < 1.5, powerPreference: 'high-performance' });
renderer.setPixelRatio(1);
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.shadowMap.autoUpdate = false;
renderer.shadowMap.needsUpdate = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
const world = new THREE.Group(); // 지진 때 통째로 흔들리는 무리
scene.add(world);
const camera = new THREE.PerspectiveCamera(48, innerWidth / innerHeight, 1, 6000);
const SITE_EXT = (() => { let m = 120; for (const r of SCENE.site) for (const [x, z] of r) m = Math.max(m, Math.hypot(x, z)); return Math.min(m, SCENE.radius); })();
{ const d = Math.max(430, (SITE_EXT * 1.55 + 160) * (IS_MOBILE && SITE_EXT > 300 ? 0.8 : 1)); camera.position.set(-0.22 * d, 0.66 * d, 0.95 * d); }
const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 0, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI * 0.47;
controls.minDistance = 25;
controls.maxDistance = Math.max(1700, SCENE.radius * 2.6);
controls.screenSpacePanning = false;
controls.update();

const SKY_DAY = { top: new THREE.Color('#5d8fd0'), hor: new THREE.Color('#dfe8ef'), fog: new THREE.Color('#d6e0e8') };
const SKY_NIGHT = { top: new THREE.Color('#050a18'), hor: new THREE.Color('#1b2540'), fog: new THREE.Color('#141c30') };
const skyU = { uTop: { value: SKY_DAY.top.clone() }, uHor: { value: SKY_DAY.hor.clone() }, uDark: { value: 0 } };
const sky = new THREE.Mesh(
  new THREE.SphereGeometry(5000, 32, 16),
  new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false, uniforms: skyU,
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: `uniform vec3 uTop; uniform vec3 uHor; uniform float uDark; varying vec3 vP;
      void main(){ float h = clamp(vP.y,0.,1.); vec3 c = mix(uHor,uTop,pow(h,0.55)); c = mix(c, c*0.25, uDark); gl_FragColor = vec4(c,1.); }`,
  }));
scene.add(sky);
scene.fog = new THREE.Fog(SKY_DAY.fog.clone(), Math.max(900, SCENE.radius * 1.3), Math.max(3200, SCENE.radius * 4.2));

const hemi = new THREE.HemisphereLight('#dfe9ff', '#7a7466', 1.1);
scene.add(hemi);
const sun = new THREE.DirectionalLight('#fff3e0', 2.6);
sun.castShadow = QUALITY[qLevel].shadow > 0;
sun.shadow.mapSize.set(QUALITY[qLevel].shadow || 1024, QUALITY[qLevel].shadow || 1024);
Object.assign(sun.shadow.camera, { left: -480, right: 480, top: 480, bottom: -480, near: 10, far: 2000 });
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.6;
scene.add(sun, sun.target);
const SUN_DIR = new THREE.Vector3(-0.45, 0.8, 0.35).normalize();

// 별 (밤)
const stars = (() => {
  const g = new THREE.BufferGeometry(); const n = 1400; const p = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const u = Math.random(), v = Math.random() * 0.9 + 0.08;
    const th = u * Math.PI * 2, ph = Math.acos(1 - v);
    p.set([Math.sin(ph) * Math.cos(th) * 4500, Math.cos(ph) * 4500, Math.sin(ph) * Math.sin(th) * 4500], i * 3);
  }
  g.setAttribute('position', new THREE.BufferAttribute(p, 3));
  const s = new THREE.Points(g, new THREE.PointsMaterial({ color: '#ffffff', size: 2, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.9 }));
  s.visible = false; scene.add(s); return s;
})();

// ───────────────────────── 텍스처 ─────────────────────────
function makeCanvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
const rnd = (a, b) => a + Math.random() * (b - a);

// 8×8 창문 아틀라스: 낮(색) / 밤(발광)
const ATLAS = 8; // 가로 8칸 × (외벽 5종 × 2줄) — 0 유리 · 1 콘크리트 · 2 아파트 · 3 벽돌 · 4 공장
const NSTY = 5, AROWS = NSTY * 2;
const [dayC, dayX] = makeCanvas(1024, 128 * AROWS);
const [nightC, nightX] = makeCanvas(1024, 128 * AROWS);
nightX.fillStyle = '#000'; nightX.fillRect(0, 0, 1024, 128 * AROWS);
const litWin = (x, y, w, h, p = 0.5) => { if (Math.random() < p) { const b = rnd(0.5, 1); nightX.fillStyle = Math.random() < 0.65 ? `rgba(255,${200 + rnd(0, 40) | 0},${130 + rnd(0, 60) | 0},${b})` : `rgba(200,225,255,${b})`; nightX.fillRect(x, y, w, h); } };
function drawBay(st, x, y) {
  const X = dayX, t = rnd(-10, 10);
  if (st === 0) { // 유리 커튼월
    X.fillStyle = '#e4e7ea'; X.fillRect(x, y, 128, 128); X.fillStyle = '#c9cdd1'; X.fillRect(x, y + 96, 128, 32);
    const g = X.createLinearGradient(x, y, x + 60, y + 96); g.addColorStop(0, `rgb(${110 + t},${140 + t},${168 + t})`); g.addColorStop(0.55, `rgb(${150 + t},${178 + t},${200 + t})`); g.addColorStop(1, `rgb(${95 + t},${122 + t},${150 + t})`);
    X.fillStyle = g; X.fillRect(x + 6, y + 6, 116, 86); X.fillStyle = '#d5d9dd'; X.fillRect(x + 62, y + 6, 4, 86);
    litWin(x + 6, y + 6, 116, 86, 0.55);
  } else if (st === 1) { // 콘크리트 사무동
    X.fillStyle = `rgb(${206 + t},${202 + t},${194 + t})`; X.fillRect(x, y, 128, 128);
    for (const wx of [14, 70]) { X.fillStyle = `rgb(${70 + t},${88 + t},${104 + t})`; X.fillRect(x + wx, y + 24, 44, 58); X.fillStyle = 'rgba(255,255,255,0.18)'; X.fillRect(x + wx, y + 24, 44, 10); X.fillStyle = '#b9b5ad'; X.fillRect(x + wx - 3, y + 82, 50, 5); litWin(x + wx, y + 24, 44, 58, 0.45); }
  } else if (st === 2) { // 아파트 (발코니)
    X.fillStyle = `rgb(${240 + t / 2},${238 + t / 2},${232 + t / 2})`; X.fillRect(x, y, 128, 128);
    X.fillStyle = `rgb(${92 + t},${112 + t},${130 + t})`; X.fillRect(x + 10, y + 18, 108, 62); X.fillStyle = '#e9e9e4'; X.fillRect(x + 62, y + 18, 4, 62);
    litWin(x + 10, y + 18, 108, 62, 0.6);
    X.fillStyle = '#d6d6d0'; X.fillRect(x + 4, y + 80, 120, 10); X.strokeStyle = '#8d949a'; X.lineWidth = 2; X.beginPath();
    for (let k = 0; k <= 12; k++) { X.moveTo(x + 8 + k * 9.3, y + 66); X.lineTo(x + 8 + k * 9.3, y + 80); } X.moveTo(x + 6, y + 66); X.lineTo(x + 122, y + 66); X.stroke();
    if (Math.random() < 0.35) { X.fillStyle = '#c3c6c8'; X.fillRect(x + 92, y + 92, 22, 16); }
  } else if (st === 3) { // 벽돌
    X.fillStyle = `rgb(${150 + t},${78 + t / 2},${58 + t / 2})`; X.fillRect(x, y, 128, 128);
    X.strokeStyle = 'rgba(230,210,190,0.35)'; X.lineWidth = 1.5;
    for (let r = 0; r < 16; r++) { X.beginPath(); X.moveTo(x, y + r * 8); X.lineTo(x + 128, y + r * 8); X.stroke(); for (let c = 0; c < 8; c++) { const bx = x + c * 16 + (r % 2) * 8; X.beginPath(); X.moveTo(bx, y + r * 8); X.lineTo(bx, y + r * 8 + 8); X.stroke(); } }
    X.fillStyle = '#efe9df'; X.fillRect(x + 34, y + 22, 60, 66); X.fillStyle = `rgb(${68 + t},${82 + t},${96 + t})`; X.fillRect(x + 40, y + 28, 48, 54); X.fillStyle = '#efe9df'; X.fillRect(x + 62, y + 28, 4, 54);
    litWin(x + 40, y + 28, 48, 54, 0.5);
  } else { // 공장 골함석
    X.fillStyle = `rgb(${196 + t},${204 + t},${212 + t})`; X.fillRect(x, y, 128, 128);
    for (let k = 0; k < 16; k++) { X.fillStyle = k % 2 ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.12)'; X.fillRect(x + k * 8, y, 4, 128); }
    if (Math.random() < 0.5) { X.fillStyle = 'rgba(70,90,110,0.85)'; X.fillRect(x, y + 10, 128, 16); litWin(x, y + 10, 128, 16, 0.25); }
    if (Math.random() < 0.12) { X.fillStyle = '#7d8790'; X.fillRect(x + 30, y + 60, 68, 68); }
  }
}
for (let st = 0; st < NSTY; st++) for (let r = 0; r < 2; r++) for (let bx = 0; bx < ATLAS; bx++) drawBay(st, bx * 128, (AROWS - 1 - (st * 2 + r)) * 128);
const dayTex = new THREE.CanvasTexture(dayC); dayTex.colorSpace = THREE.SRGBColorSpace;
const nightTex = new THREE.CanvasTexture(nightC); nightTex.colorSpace = THREE.SRGBColorSpace;
for (const t of [dayTex, nightTex]) { t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; t.anisotropy = 4; }

const softDot = (() => {
  const [c, x] = makeCanvas(128, 128);
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.4, 'rgba(255,255,255,0.65)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
})();
const puff = (() => {
  const [c, x] = makeCanvas(128, 128);
  for (let i = 0; i < 26; i++) {
    const px = 64 + rnd(-26, 26), py = 64 + rnd(-26, 26), r = rnd(14, 34);
    const g = x.createRadialGradient(px, py, 0, px, py, r);
    g.addColorStop(0, 'rgba(255,255,255,0.35)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  }
  return new THREE.CanvasTexture(c);
})();

// ───────────────────────── 재질 ─────────────────────────
let nightOn = false;
function facade(mat, instanced) {
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', `#include <common>
attribute float aStyle; varying float vStyle; varying vec2 vBay; varying float vSeed;`).replace('#include <uv_vertex>', `#include <uv_vertex>
vStyle = aStyle; vBay = uv;
${instanced ? 'vSeed = float(gl_InstanceID);' : 'vSeed = 0.0;'}`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
varying float vStyle; varying vec2 vBay; varying float vSeed;`).replace('#include <map_fragment>', `
vec2 bCell = floor(vBay); vec2 bF = fract(vBay);
float bH = fract(sin(dot(bCell + vSeed * vec2(1.7, 9.1), vec2(12.9898, 78.233))) * 43758.5453);
vec2 aUv = (vec2(floor(bH * ${ATLAS}.0), floor(vStyle + 0.5) * 2.0 + floor(fract(bH * 7.13) * 2.0)) + clamp(bF, 0.004, 0.996)) / vec2(${ATLAS}.0, ${AROWS}.0);
vec2 aDx = dFdx(vBay) / vec2(${ATLAS}.0, ${AROWS}.0), aDy = dFdy(vBay) / vec2(${ATLAS}.0, ${AROWS}.0);
diffuseColor *= textureGrad(map, aUv, aDx, aDy);`).replace('#include <emissivemap_fragment>', `totalEmissiveRadiance *= textureGrad(emissiveMap, aUv, aDx, aDy).rgb;`);
  };
  return mat;
}
const wallInst = facade(new THREE.MeshStandardMaterial({ map: dayTex, emissiveMap: nightTex, emissive: '#ffffff', emissiveIntensity: 0, roughness: 0.42, metalness: 0.15 }), true);
const roofInst = new THREE.MeshStandardMaterial({ color: '#b3b5b6', roughness: 0.9 });
const BOX = new THREE.BoxGeometry(1, 1, 1);
const BLOCK_MATS = [wallInst, wallInst, roofInst, roofInst, wallInst, wallInst];
const intactMats = new Map();
function intactMat(hex) {
  if (!intactMats.has(hex)) {
    intactMats.set(hex, [
      new THREE.MeshStandardMaterial({ color: new THREE.Color(hex).multiplyScalar(0.78), roughness: 0.9 }),
      new THREE.MeshStandardMaterial({ color: hex, map: dayTex, emissiveMap: nightTex, emissive: '#ffffff', emissiveIntensity: 0, roughness: 0.42, metalness: 0.15 }),
    ]);
  }
  return intactMats.get(hex);
}
const SITE_COLORS = ['#e8eef3', '#dfe7ee', '#edf1f4', '#d6e0e8'];
const STYLE_TINT = [['#e8eef3', '#dfe7ee', '#edf1f4', '#d6e0e8'], ['#ffffff', '#f3efe8', '#e9edf0', '#f6f2ea'], ['#ffffff', '#f6f1e6', '#eef2f5', '#fbf7ee'], ['#ffffff', '#f0e6e0', '#e8ddd6'], ['#ffffff', '#e6eef5', '#f0f0e8', '#e3ecf2']];
function facadeStyle(src) {
  const k = src.k || '', h = Math.floor(Math.abs(src.id) / 16) % 104729; // id가 2^31을 넘으면(relation) >> 연산이 음수가 됨
  if (k === 'f') return 4; if (k === 'b') return 3; if (k === 'a') return 2; if (k === 'g') return 0; if (k === 'c') return 1;
  if (src.s) return THEME_KEY === 'hospital' || THEME_KEY === 'nk' ? 1 : (h % 4 === 0 ? 1 : 0);
  if (k === 'o') return h % 3 === 0 ? 1 : 0;
  if (src.lv >= 10 && src.h < 90) return h % 3 === 0 ? 1 : 2; // 한국식 고층 아파트
  return [1, 1, 3, 0, 2][h % 5];
}
function buildingColor(src, style) {
  const pal = STYLE_TINT[style];
  if (src.c) return '#' + new THREE.Color('#ffffff').lerp(new THREE.Color(src.c), 0.6).getHexString();
  return pal[Math.floor(Math.abs(src.id) / 8) % pal.length];
}
const CITY_COLORS = ['#f0e9dc', '#e6e1d6', '#dcd8cf', '#d9dfe3', '#efe4d2', '#cfd4d8'];

// ───────────────────────── 땅 (높이장) ─────────────────────────
const S = Math.ceil(SCENE.radius * 2.3 / 100) * 100; // 한 변 길이(m)
const GN = Math.round(S / Math.max(4, S / 480)); // 4 m 간격(큰 부지는 넓게)
const GD = S / GN;
const MAXD = 420; // 이 깊이 = 지구 중심
const hgt = new Float32Array((GN + 1) * (GN + 1));
const heat = new Float32Array((GN + 1) * (GN + 1));
const groundGeo = new THREE.BufferGeometry();
{
  const n = (GN + 1) * (GN + 1);
  const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), uv = new Float32Array(n * 2);
  for (let j = 0; j <= GN; j++) for (let i = 0; i <= GN; i++) {
    const k = j * (GN + 1) + i;
    pos[k * 3] = -S / 2 + i * GD; pos[k * 3 + 2] = -S / 2 + j * GD; nor[k * 3 + 1] = 1;
    uv[k * 2] = i / GN; uv[k * 2 + 1] = 1 - j / GN;
  }
  const idx = new Uint32Array(GN * GN * 6); let o = 0;
  for (let j = 0; j < GN; j++) for (let i = 0; i < GN; i++) {
    const a = j * (GN + 1) + i, b = a + 1, c = a + GN + 1, d = c + 1;
    idx.set([a, c, b, b, c, d], o); o += 6;
  }
  groundGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  groundGeo.setAttribute('normal', new THREE.BufferAttribute(nor, 3).setUsage(THREE.DynamicDrawUsage));
  groundGeo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  groundGeo.setAttribute('aDepth', new THREE.BufferAttribute(new Float32Array(n), 1).setUsage(THREE.DynamicDrawUsage));
  groundGeo.setAttribute('aHeat', new THREE.BufferAttribute(new Float32Array(n), 1).setUsage(THREE.DynamicDrawUsage));
  groundGeo.setIndex(new THREE.BufferAttribute(idx, 1));
  groundGeo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), S);
}
// 지도 그리기 (OSM)
const groundTex = (() => {
  const P = IS_MOBILE ? 2048 : 4096;
  const [c, x] = makeCanvas(P, P);
  const k = P / S, tx = (v) => (v + S / 2) * k;
  x.fillStyle = '#b4b2a6'; x.fillRect(0, 0, P, P);
  // 잔 무늬
  for (let i = 0; i < 9000; i++) { x.fillStyle = `rgba(${Math.random() < 0.5 ? '255,255,255' : '0,0,0'},0.035)`; x.fillRect(Math.random() * P, Math.random() * P, rnd(2, 14), rnd(2, 14)); }
  const poly = (p) => { x.beginPath(); p.forEach(([a, b], i) => (i ? x.lineTo(tx(a), tx(b)) : x.moveTo(tx(a), tx(b)))); x.closePath(); };
  for (const s of SCENE.site) { poly(s); x.fillStyle = '#d3cec3'; x.fill(); }
  const AC = { green: '#7f9f69', water: '#5b8db0', pitch: '#6c9a55' };
  for (const a of SCENE.areas) { poly(a.p); x.fillStyle = AC[a.k] || '#888'; x.fill(); }
  const roads = [...SCENE.roads].sort((a, b) => a.w - b.w);
  x.lineCap = 'round'; x.lineJoin = 'round';
  for (const r of roads) {
    x.beginPath(); r.p.forEach(([a, b], i) => (i ? x.lineTo(tx(a), tx(b)) : x.moveTo(tx(a), tx(b))));
    x.strokeStyle = r.w <= 3 ? '#cbc6bb' : '#4f535a'; x.lineWidth = r.w * k; x.stroke();
    if (r.w >= 11) { x.setLineDash([6 * k, 6 * k]); x.strokeStyle = '#e8d27a'; x.lineWidth = 0.4 * k; x.stroke(); x.setLineDash([]); }
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
})();
const groundU = { uMaxD: { value: MAXD }, uQC: { value: new THREE.Vector2() }, uQT: { value: 0 }, uQA: { value: 0 } };
const groundMat = new THREE.MeshStandardMaterial({ map: groundTex, roughness: 0.95 });
groundMat.onBeforeCompile = (sh) => {
  Object.assign(sh.uniforms, groundU);
  sh.vertexShader = sh.vertexShader
    .replace('#include <common>', `#include <common>
attribute float aDepth; attribute float aHeat; varying float vDepth; varying float vHeat;
uniform vec2 uQC; uniform float uQT; uniform float uQA;`)
    .replace('#include <begin_vertex>', `#include <begin_vertex>
vDepth = aDepth; vHeat = aHeat;
float qd = distance(position.xz, uQC);
transformed.y += uQA * sin(qd*0.05 - uQT*10.0) * exp(-qd*0.0018);`);
  sh.fragmentShader = sh.fragmentShader
    .replace('#include <common>', `#include <common>
varying float vDepth; varying float vHeat; uniform float uMaxD;
vec3 layerCol(float km){
  if (km < 2.0) return vec3(0.40,0.29,0.19);
  if (km < 35.0) return mix(vec3(0.40,0.29,0.19), vec3(0.42,0.40,0.38), smoothstep(2.0,35.0,km));
  if (km < 2890.0) return mix(vec3(0.62,0.22,0.08), vec3(0.85,0.36,0.08), (km-35.0)/2855.0);
  if (km < 5150.0) return vec3(1.0,0.62,0.16);
  return vec3(1.0,0.95,0.78);
}`)
    .replace('#include <map_fragment>', `#include <map_fragment>
float dkm = 6371.0 * pow(clamp(vDepth/uMaxD,0.0,1.0), 1.6);
vec3 lay = layerCol(dkm);
float lt = smoothstep(0.25, 1.4, vDepth);
diffuseColor.rgb = mix(diffuseColor.rgb, lay, lt);`)
    .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
totalEmissiveRadiance += lay * lt * smoothstep(35.0, 900.0, dkm) * 1.6;
totalEmissiveRadiance += vec3(1.0,0.45,0.1) * vHeat * 2.2;`);
};
const outer = new THREE.Mesh(new THREE.RingGeometry(S * 0.705, 6000, 64, 1), new THREE.MeshStandardMaterial({ color: '#a9a79c', roughness: 1 }));
outer.rotation.x = -Math.PI / 2; outer.position.y = -0.05; outer.receiveShadow = true; world.add(outer);
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.receiveShadow = true;
world.add(ground);

function gIdx(i, j) { return j * (GN + 1) + i; }
function groundH(x, z) {
  const fx = (x + S / 2) / GD, fz = (z + S / 2) / GD;
  if (fx < 0 || fz < 0 || fx >= GN || fz >= GN) return 0;
  const i = fx | 0, j = fz | 0, u = fx - i, v = fz - j;
  const a = hgt[gIdx(i, j)], b = hgt[gIdx(i + 1, j)], c = hgt[gIdx(i, j + 1)], d = hgt[gIdx(i + 1, j + 1)];
  return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
}
let deepest = 0, coreReached = false;
const heatSet = new Set();
function refreshGround(i0, i1, j0, j1) {
  i0 = Math.max(0, i0); j0 = Math.max(0, j0); i1 = Math.min(GN, i1); j1 = Math.min(GN, j1);
  const pos = groundGeo.attributes.position, nor = groundGeo.attributes.normal, dep = groundGeo.attributes.aDepth;
  for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
    const k = gIdx(i, j);
    pos.array[k * 3 + 1] = hgt[k]; dep.array[k] = -hgt[k];
    const hl = hgt[gIdx(Math.max(0, i - 1), j)], hr = hgt[gIdx(Math.min(GN, i + 1), j)];
    const hd = hgt[gIdx(i, Math.max(0, j - 1))], hu = hgt[gIdx(i, Math.min(GN, j + 1))];
    const nx = hl - hr, nz = hd - hu, ny = 2 * GD, l = Math.hypot(nx, ny, nz);
    nor.array[k * 3] = nx / l; nor.array[k * 3 + 1] = ny / l; nor.array[k * 3 + 2] = nz / l;
  }
  for (const a of [pos, nor, dep]) {
    const s = gIdx(0, j0), e = gIdx(GN, j1), m = a.itemSize;
    a.addUpdateRange(s * m, (e - s + 1) * m); a.needsUpdate = true;
  }
}
function crater(x, z, r, depth, heatAmt = 0) {
  const i0 = Math.floor((x - r + S / 2) / GD), i1 = Math.ceil((x + r + S / 2) / GD);
  const j0 = Math.floor((z - r + S / 2) / GD), j1 = Math.ceil((z + r + S / 2) / GD);
  for (let j = Math.max(0, j0); j <= Math.min(GN, j1); j++) for (let i = Math.max(0, i0); i <= Math.min(GN, i1); i++) {
    const px = -S / 2 + i * GD, pz = -S / 2 + j * GD, d = Math.hypot(px - x, pz - z);
    if (d > r) continue;
    const t = d / r, k = gIdx(i, j);
    hgt[k] = Math.max(-MAXD, hgt[k] - depth * Math.pow(1 - t * t, 1.4));
    if (-hgt[k] > deepest) deepest = -hgt[k];
    if (heatAmt) { heat[k] = Math.min(1, heat[k] + heatAmt * (1 - t)); heatSet.add(k); }
  }
  refreshGround(i0, i1, j0, j1);
  pile.clear(x, z, r);
  rubble.wake(x, z, r + 2, 0);
  for (const b of grid.query(x, z, r + 8)) if (b.vox) b.dirty = true;
  trees.clear(x, z, r);
  if (!coreReached && deepest >= MAXD - 0.5) {
    coreReached = true;
    toast(T('core', CFG.antipode || ''), 5000);
    award(20000, T('coreBonus'));
  }
}
function decayHeat(dt) {
  if (!heatSet.size) return;
  const a = groundGeo.attributes.aHeat;
  let lo = Infinity, hi = -1;
  for (const k of heatSet) {
    heat[k] = Math.max(0, heat[k] - dt * 0.14);
    a.array[k] = heat[k];
    if (k < lo) lo = k; if (k > hi) hi = k;
    if (heat[k] === 0) heatSet.delete(k);
  }
  if (hi >= 0) { a.addUpdateRange(lo, hi - lo + 1); a.needsUpdate = true; }
}

// 잔해 더미 높이 (2 m 칸)
const pile = (() => {
  const C = 2, N = Math.ceil(S / C), h = new Float32Array(N * N);
  const ix = (x) => Math.floor((x + S / 2) / C);
  return {
    get(x, z) { const i = ix(x), j = ix(z); return i < 0 || j < 0 || i >= N || j >= N ? 0 : h[j * N + i]; },
    raise(x, z, r, top) {
      top = Math.min(top, 14); // 더미 높이 상한
      for (let j = ix(z - r); j <= ix(z + r); j++) for (let i = ix(x - r); i <= ix(x + r); i++) {
        if (i < 0 || j < 0 || i >= N || j >= N) continue;
        if (h[j * N + i] < top) h[j * N + i] = top;
      }
    },
    // 더미 위에 떨어진 조각이 옆보다 너무 높으면 낮은 쪽으로 굴러 내려감 (원뿔 모양 더미)
    slide(x, z, size) {
      const step = Math.max(2.5, size * 0.7), lim = Math.max(1.4, size * 0.6);
      for (let k = 0; k < 12; k++) {
        const h0 = this.get(x, z) + groundH(x, z);
        let bx = x, bz = z, bh = h0;
        for (let a = 0; a < 8; a++) { const nx = x + Math.cos(a * Math.PI / 4) * step, nz = z + Math.sin(a * Math.PI / 4) * step, nh = this.get(nx, nz) + groundH(nx, nz); if (nh < bh) { bh = nh; bx = nx; bz = nz; } }
        if (h0 - bh <= lim) break;
        x = bx + rnd(-0.5, 0.5); z = bz + rnd(-0.5, 0.5);
      }
      return [x, z];
    },
    clear(x, z, r) {
      for (let j = ix(z - r); j <= ix(z + r); j++) for (let i = ix(x - r); i <= ix(x + r); i++) {
        if (i < 0 || j < 0 || i >= N || j >= N) continue;
        if (Math.hypot(-S / 2 + (i + 0.5) * C - x, -S / 2 + (j + 0.5) * C - z) <= r) h[j * N + i] = 0;
      }
    },
  };
})();
const floorAt = (x, z) => groundH(x, z) + pile.get(x, z);

// ───────────────────────── 블록 층 (InstancedMesh) ─────────────────────────
const _m = new THREE.Matrix4(), _p = new THREE.Vector3(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _c = new THREE.Color();
const ZERO = new THREE.Matrix4().makeScale(0, 0, 0);
class SlotLayer {
  constructor(cap, evict) {
    this.cap = cap; this.evict = evict;
    const geo = BOX.clone(); this.styA = new THREE.InstancedBufferAttribute(new Float32Array(cap), 1).setUsage(THREE.DynamicDrawUsage); geo.setAttribute('aStyle', this.styA);
    const m = new THREE.InstancedMesh(geo, BLOCK_MATS, cap);
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(cap * 3), 3).setUsage(THREE.DynamicDrawUsage);
    m.count = 0; m.frustumCulled = false; m.castShadow = true; m.receiveShadow = true;
    this.mesh = m; this.sty = this.styA.array;
    this.pos = new Float32Array(cap * 3); this.size = new Float32Array(cap * 3); this.quat = new Float32Array(cap * 4); this.col = new Float32Array(cap * 3);
    this.alive = new Uint8Array(cap); this.owner = new Int32Array(cap).fill(-1); this.cell = new Int32Array(cap);
    this.free = []; this.high = 0; this.lo = Infinity; this.hi = -1; this.ring = 0; this.live = 0;
    world.add(m);
  }
  add(x, y, z, sx, sy, sz, q, r, g, b, st = 0) {
    let s = this.free.pop();
    if (s === undefined) {
      if (this.high < this.cap) s = this.high++;
      else if (!this.evict) return -1;
      else { s = this.ring; this.ring = (this.ring + 1) % this.cap; if (this.alive[s]) this.remove(s); this.free.pop(); }
    }
    this.pos.set([x, y, z], s * 3); this.size.set([sx, sy, sz], s * 3); this.quat.set([q.x, q.y, q.z, q.w], s * 4); this.col.set([r, g, b], s * 3);
    this.alive[s] = 1; this.live++;
    this.mesh.instanceColor.array.set([r, g, b], s * 3); this.sty[s] = st;
    this.write(s);
    if (this.mesh.count < this.high) this.mesh.count = this.high;
    return s;
  }
  write(s) {
    _p.fromArray(this.pos, s * 3); _q.fromArray(this.quat, s * 4); _s.fromArray(this.size, s * 3);
    _m.compose(_p, _q, _s).toArray(this.mesh.instanceMatrix.array, s * 16);
    this.mark(s);
  }
  remove(s) {
    if (!this.alive[s]) return;
    this.alive[s] = 0; this.live--; this.owner[s] = -1;
    ZERO.toArray(this.mesh.instanceMatrix.array, s * 16);
    this.free.push(s); this.mark(s);
  }
  mark(s) { if (s < this.lo) this.lo = s; if (s > this.hi) this.hi = s; }
  flush() {
    if (this.hi < 0) return;
    const im = this.mesh.instanceMatrix, ic = this.mesh.instanceColor;
    im.clearUpdateRanges(); im.addUpdateRange(this.lo * 16, (this.hi - this.lo + 1) * 16); im.needsUpdate = true;
    ic.clearUpdateRanges(); ic.addUpdateRange(this.lo * 3, (this.hi - this.lo + 1) * 3); ic.needsUpdate = true;
    this.styA.clearUpdateRanges(); this.styA.addUpdateRange(this.lo, this.hi - this.lo + 1); this.styA.needsUpdate = true;
    this.lo = Infinity; this.hi = -1;
  }
}
const blocks = new SlotLayer(IS_MOBILE ? 60000 : 90000, false);
const rubbleL = new SlotLayer(IS_MOBILE ? 18000 : 36000, true);
// 잔해 위치 버킷(16 m)
const rubIdx = (() => {
  const C = 16, map = new Map(), key = (i, j) => i * 100000 + j, out = [];
  return {
    add(s, x, z) { const k = key(Math.floor(x / C), Math.floor(z / C)); let a = map.get(k); if (!a) map.set(k, (a = [])); a.push(s); },
    collect(x, z, r) {
      out.length = 0;
      for (let i = Math.floor((x - r) / C); i <= Math.floor((x + r) / C); i++)
        for (let j = Math.floor((z - r) / C); j <= Math.floor((z + r) / C); j++) {
          const k = key(i, j), a = map.get(k); if (!a) continue;
          const keep = [];
          for (const s of a) if (rubbleL.alive[s] && Math.floor(rubbleL.pos[s * 3] / C) === i && Math.floor(rubbleL.pos[s * 3 + 2] / C) === j) { keep.push(s); out.push(s); }
          if (keep.length) map.set(k, [...new Set(keep)]); else map.delete(k);
        }
      return [...new Set(out)];
    },
  };
})();
// 잔해가 빠진 자리: 더미 높이를 남은 잔해로 다시 쌓고, 받침이 사라져 떠 있는 잔해는 다시 떨어뜨림
function resettle(x, z, r) {
  pile.clear(x, z, r);
  const L = rubbleL, list = rubIdx.collect(x, z, r).filter((s) => L.alive[s]);
  list.sort((a, b) => L.pos[a * 3 + 1] - L.pos[b * 3 + 1]);
  for (const s of list) {
    const px = L.pos[s * 3], py = L.pos[s * 3 + 1], pz = L.pos[s * 3 + 2];
    const half = (L.size[s * 3] + L.size[s * 3 + 1] + L.size[s * 3 + 2]) / 6;
    const fl = floorAt(px, pz);
    if (py - half * 0.8 > fl + 1.2 && debris.n < debris.cap - 20) {
      _q.fromArray(L.quat, s * 4);
      debris.spawn(px, py, pz, L.size[s * 3], L.size[s * 3 + 1], L.size[s * 3 + 2], _q, L.col[s * 3], L.col[s * 3 + 1], L.col[s * 3 + 2], 0, 0, 0, 0.3, 0, L.sty[s]);
      L.remove(s);
    } else {
      let y = py;
      if (py - half * 0.8 > fl + 1.2) { y = fl + half * 0.8; L.pos[s * 3 + 1] = y; L.write(s); } // 날아다니는 조각이 꽉 차면 그 자리에 바로 내려놓음(공중에 뜬 채 남지 않게)
      pile.raise(px, pz, Math.max(L.size[s * 3], L.size[s * 3 + 2]) * 0.35, y + half * 0.6 - groundH(px, pz));
    }
  }
}
const rubble = {
  wake(x, z, r, power, cx = x, cz = z) { // 반경 안 잔해를 다시 움직이게
    const L = rubbleL; let n = 0;
    if (!L.live) return 0;
    const list = rubIdx.collect(x, z, r);
    for (const s of list) {
      if (!L.alive[s]) continue;
      const px = L.pos[s * 3], pz = L.pos[s * 3 + 2];
      const d = Math.hypot(px - x, pz - z);
      if (d > r) continue;
      if (debris.n >= debris.cap - 50) continue; // 꽉 차면 남은 건 resettle이 바닥으로 내려놓음
      _q.fromArray(L.quat, s * 4);
      const dx = px - cx, dz = pz - cz, dl = Math.hypot(dx, dz) || 1, f = power * (1 - d / r);
      debris.spawn(px, L.pos[s * 3 + 1] + 0.3, pz, L.size[s * 3], L.size[s * 3 + 1], L.size[s * 3 + 2], _q,
        L.col[s * 3], L.col[s * 3 + 1], L.col[s * 3 + 2], dx / dl * f, f * 0.8 + rnd(0, 2), dz / dl * f, f * 0.05, 0, L.sty[s]);
      L.remove(s); n++;
    }
    if (n || power === 0) resettle(x, z, r + 6);
    return n;
  },
};

// 날아다니는 조각
const _wq = new THREE.Quaternion(), _dq = new THREE.Quaternion();
const debris = (() => {
  const cap = IS_MOBILE ? 4000 : 5000;
  const dgeo = BOX.clone(); const STA = new THREE.InstancedBufferAttribute(new Float32Array(cap), 1).setUsage(THREE.DynamicDrawUsage); dgeo.setAttribute('aStyle', STA); const STY = STA.array;
  const m = new THREE.InstancedMesh(dgeo, BLOCK_MATS, cap);
  m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(cap * 3), 3).setUsage(THREE.DynamicDrawUsage);
  m.count = 0; m.frustumCulled = false; m.castShadow = true; m.receiveShadow = true;
  world.add(m);
  const P = new Float32Array(cap * 3), V = new Float32Array(cap * 3), Q = new Float32Array(cap * 4), W = new Float32Array(cap * 3);
  const SZ = new Float32Array(cap * 3), C = new Float32Array(cap * 3), REST = new Float32Array(cap), TAG = new Int32Array(cap), OX = new Float32Array(cap * 2), AGE = new Float32Array(cap);
  const d = {
    cap, n: 0, mesh: m,
    spawn(x, y, z, sx, sy, sz, q, r, g, b, vx, vy, vz, spin = 1, tag = 0, st = 0) {
      if (d.n >= cap) return -1;
      const i = d.n++;
      P.set([x, y, z], i * 3); V.set([vx, vy, vz], i * 3); Q.set([q.x, q.y, q.z, q.w], i * 4);
      W.set([rnd(-1, 1) * spin, rnd(-1, 1) * spin, rnd(-1, 1) * spin], i * 3);
      SZ.set([sx, sy, sz], i * 3); C.set([r, g, b], i * 3); REST[i] = 0; TAG[i] = tag; OX[i * 2] = x; OX[i * 2 + 1] = z; AGE[i] = 0;
      m.instanceColor.array.set([r, g, b], i * 3); STY[i] = st;
      return i;
    },
    kill(i) {
      const j = --d.n;
      if (i !== j) {
        P.copyWithin(i * 3, j * 3, j * 3 + 3); V.copyWithin(i * 3, j * 3, j * 3 + 3); Q.copyWithin(i * 4, j * 4, j * 4 + 4);
        W.copyWithin(i * 3, j * 3, j * 3 + 3); SZ.copyWithin(i * 3, j * 3, j * 3 + 3); C.copyWithin(i * 3, j * 3, j * 3 + 3);
        REST[i] = REST[j]; TAG[i] = TAG[j]; STY[i] = STY[j]; OX[i * 2] = OX[j * 2]; OX[i * 2 + 1] = OX[j * 2 + 1]; AGE[i] = AGE[j];
        m.instanceColor.array.copyWithin(i * 3, j * 3, j * 3 + 3);
      }
    },
    push(x, y, z, r, power) { // 날고 있는 조각에 충격
      for (let i = 0; i < d.n; i++) {
        const dx = P[i * 3] - x, dy = P[i * 3 + 1] - y, dz = P[i * 3 + 2] - z, l = Math.hypot(dx, dy, dz);
        if (l > r || l === 0) continue;
        const f = power * (1 - l / r);
        V[i * 3] += dx / l * f; V[i * 3 + 1] += Math.abs(dy / l) * f + f * 0.4; V[i * 3 + 2] += dz / l * f; REST[i] = 0;
      }
    },
    update(dt) {
      const G = 13;
      const w = _wq, q = _dq;
      for (let i = 0; i < d.n; i++) {
        const i3 = i * 3;
        AGE[i] += dt;
        V[i3 + 1] -= G * dt;
        const sp = Math.hypot(V[i3], V[i3 + 1], V[i3 + 2]);
        if (sp > 1) { const dr = Math.max(0, 1 - 0.015 * dt * sp * 0.1); V[i3] *= dr; V[i3 + 1] *= dr; V[i3 + 2] *= dr; }
        P[i3] += V[i3] * dt; P[i3 + 1] += V[i3 + 1] * dt; P[i3 + 2] += V[i3 + 2] * dt;
        // 회전
        q.fromArray(Q, i * 4);
        w.set(W[i3] * dt * 0.5, W[i3 + 1] * dt * 0.5, W[i3 + 2] * dt * 0.5, 0).multiply(q);
        q.x += w.x; q.y += w.y; q.z += w.z; q.w += w.w; q.normalize(); q.toArray(Q, i * 4);
        // 다른 건물에 박힘
        if (sp > 22 && AGE[i] > 0.08) {
          const hit = hitBuildingAt(P[i3], P[i3 + 1], P[i3 + 2], V[i3], V[i3 + 1], V[i3 + 2]);
          if (hit) { V[i3] *= 0.45; V[i3 + 1] *= 0.45; V[i3 + 2] *= 0.45; }
        }
        const half = (SZ[i3] + SZ[i3 + 1] + SZ[i3 + 2]) / 6;
        const fl = floorAt(P[i3], P[i3 + 2]);
        if (P[i3 + 1] - half * 0.8 < fl) {
          P[i3 + 1] = fl + half * 0.8;
          if (V[i3 + 1] < 0) V[i3 + 1] *= -0.18;
          V[i3] *= 0.55; V[i3 + 2] *= 0.55; W[i3] *= 0.6; W[i3 + 1] *= 0.6; W[i3 + 2] *= 0.6;
          if (sp < 2.2) REST[i] += dt; else REST[i] = 0;
        }
        if (P[i3 + 1] < -MAXD - 50 || AGE[i] > 40) { d.kill(i); i--; continue; }
        if (REST[i] > 0.35) { // 내려앉음 → 잔해
          if (SZ[i3] > 2.5 && Math.random() < 0.35) sfx.thud(P[i3], P[i3 + 2], SZ[i3]);
          { const [sx2, sz2] = pile.slide(P[i3], P[i3 + 2], Math.max(SZ[i3], SZ[i3 + 1], SZ[i3 + 2])); P[i3] = sx2; P[i3 + 2] = sz2; P[i3 + 1] = floorAt(sx2, sz2) + half * 0.8; }
          q.fromArray(Q, i * 4);
          const rs = rubbleL.add(P[i3], P[i3 + 1], P[i3 + 2], SZ[i3], SZ[i3 + 1], SZ[i3 + 2], q, C[i3], C[i3 + 1], C[i3 + 2], STY[i]);
          rubIdx.add(rs, P[i3], P[i3 + 2]);
          pile.raise(P[i3], P[i3 + 2], Math.max(SZ[i3], SZ[i3 + 2]) * 0.35, P[i3 + 1] + half * 0.25 - groundH(P[i3], P[i3 + 2]));
          if (TAG[i] > 0) batLanded(TAG[i], Math.hypot(P[i3] - OX[i * 2], P[i3 + 2] - OX[i * 2 + 1]), P[i3], P[i3 + 1], P[i3 + 2]);
          d.kill(i); i--; continue;
        }
      }
      const arr = m.instanceMatrix.array;
      for (let i = 0; i < d.n; i++) {
        _p.fromArray(P, i * 3); _q.fromArray(Q, i * 4); _s.fromArray(SZ, i * 3);
        _m.compose(_p, _q, _s).toArray(arr, i * 16);
      }
      m.count = d.n;
      m.instanceMatrix.clearUpdateRanges(); m.instanceMatrix.addUpdateRange(0, Math.max(1, d.n) * 16); m.instanceMatrix.needsUpdate = true;
      m.instanceColor.clearUpdateRanges(); m.instanceColor.addUpdateRange(0, Math.max(1, d.n) * 3); m.instanceColor.needsUpdate = true;
      STA.clearUpdateRanges(); STA.addUpdateRange(0, Math.max(1, d.n)); STA.needsUpdate = true;
    },
  };
  return d;
})();

// ───────────────────────── 나무 ─────────────────────────
const trees = (() => {
  const pts = [];
  const inPoly = (x, z, p) => { let c = false; for (let i = 0, j = p.length - 1; i < p.length; j = i++) { const [x1, z1] = p[i], [x2, z2] = p[j]; if ((z1 > z) !== (z2 > z) && x < (x2 - x1) * (z - z1) / (z2 - z1) + x1) c = !c; } return c; };
  for (const a of SCENE.areas) if (a.k === 'green') {
    const xs = a.p.map((p) => p[0]), zs = a.p.map((p) => p[1]);
    const [x0, x1, z0, z1] = [Math.min(...xs), Math.max(...xs), Math.min(...zs), Math.max(...zs)];
    const n = Math.min(900, ((x1 - x0) * (z1 - z0)) / 140);
    for (let i = 0; i < n; i++) { const x = rnd(x0, x1), z = rnd(z0, z1); if (inPoly(x, z, a.p)) pts.push([x, z]); }
  }
  for (const r of SCENE.roads) if (r.w >= 11) {
    for (let k = 1; k < r.p.length; k++) {
      const [ax, az] = r.p[k - 1], [bx, bz] = r.p[k], L = Math.hypot(bx - ax, bz - az);
      const nx = -(bz - az) / L, nz = (bx - ax) / L;
      for (let t = 6; t < L; t += 11) for (const sgn of [-1, 1]) pts.push([ax + (bx - ax) * t / L + nx * sgn * (r.w / 2 + 2.5), az + (bz - az) * t / L + nz * sgn * (r.w / 2 + 2.5)]);
    }
  }
  const keep = pts.filter(([x, z]) => Math.hypot(x, z) < SCENE.radius * 1.05).slice(0, 5000);
  const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.25, 0.35, 3, 5).translate(0, 1.5, 0), new THREE.MeshStandardMaterial({ color: '#5b4632' }), keep.length);
  const crown = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(2.6, 0).translate(0, 4.6, 0), new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.9, flatShading: true }), keep.length);
  keep.forEach(([x, z], i) => {
    const s = rnd(0.8, 1.35);
    _m.compose(_p.set(x, 0, z), _q.setFromAxisAngle(_s.set(0, 1, 0), rnd(0, 6)), _s.set(s, s * rnd(0.9, 1.3), s));
    trunk.setMatrixAt(i, _m); crown.setMatrixAt(i, _m);
    crown.setColorAt(i, _c.setHSL(rnd(0.24, 0.32), rnd(0.35, 0.5), rnd(0.28, 0.4)));
  });
  for (const t of [trunk, crown]) { t.castShadow = true; t.receiveShadow = true; t.frustumCulled = false; world.add(t); }
  const alive = new Uint8Array(keep.length).fill(1);
  return {
    clear(x, z, r) {
      let ch = false;
      keep.forEach(([px, pz], i) => {
        if (!alive[i] || Math.hypot(px - x, pz - z) > r) return;
        alive[i] = 0; trunk.setMatrixAt(i, ZERO); crown.setMatrixAt(i, ZERO); ch = true;
        if (debris.n < debris.cap - 100 && Math.random() < 0.5) debris.spawn(px, 4, pz, 2.6, 2.6, 2.6, _q.identity(), 0.25, 0.38, 0.18, rnd(-12, 12), rnd(8, 22), rnd(-12, 12), 4);
      });
      if (ch) { trunk.instanceMatrix.needsUpdate = true; crown.instanceMatrix.needsUpdate = true; }
    },
    sway(t, amp) { crown.position.x = Math.sin(t * 20) * amp * 0.3; },
  };
})();

// ───────────────────────── 건물 ─────────────────────────
const buildings = [];
const intactGroup = new THREE.Group(); world.add(intactGroup);
// 구역(250 m)마다 벽·지붕을 한 덩어리로 합침. 건물이 부서지면 그 건물 꼭짓점만 한 점으로 접어서 숨김
const wallMerged = facade(new THREE.MeshStandardMaterial({ map: dayTex, emissiveMap: nightTex, emissive: '#ffffff', emissiveIntensity: 0, roughness: 0.42, metalness: 0.15, vertexColors: true }), false);
const roofMerged = new THREE.MeshStandardMaterial({ roughness: 0.9, vertexColors: true });
const chunks = new Map();
function mergeAdd(geo, hex, site, bi, p, style) {
  const cx = p.reduce((a, v) => a + v[0], 0) / p.length, cz = p.reduce((a, v) => a + v[1], 0) / p.length;
  const key = `${Math.floor(cx / 250)},${Math.floor(cz / 250)}`;
  if (!chunks.has(key)) chunks.set(key, { wall: { pos: [], nor: [], uv: [], col: [], sty: [], owners: [] }, roof: { pos: [], nor: [], uv: [], col: [], sty: [], owners: [] } });
  const ch = chunks.get(key), col = new THREE.Color(hex), rc = col.clone().multiplyScalar(0.78);
  const P = geo.attributes.position.array, N = geo.attributes.normal.array, U = geo.attributes.uv.array;
  const ref = { key, ranges: [] };
  for (const g of geo.groups) {
    const t = g.materialIndex === 1 ? ch.wall : ch.roof, c = g.materialIndex === 1 ? col : rc;
    const start = t.pos.length / 3;
    for (let v = g.start; v < g.start + g.count; v++) {
      t.pos.push(P[v * 3], P[v * 3 + 1], P[v * 3 + 2]); t.nor.push(N[v * 3], N[v * 3 + 1], N[v * 3 + 2]); t.uv.push(U[v * 2], U[v * 2 + 1]); t.col.push(c.r, c.g, c.b); t.sty.push(style);
    }
    t.owners.push([start, bi]);
    ref.ranges.push([g.materialIndex === 1 ? 'wall' : 'roof', start, g.count]);
  }
  return ref;
}
function buildChunks() {
  for (const [key, ch] of chunks) {
    for (const kind of ['wall', 'roof']) {
      const t = ch[kind]; if (!t.pos.length) continue;
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(t.pos, 3).setUsage(THREE.DynamicDrawUsage));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(t.nor, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(t.uv, 2));
      g.setAttribute('color', new THREE.Float32BufferAttribute(t.col, 3));
      g.setAttribute('aStyle', new THREE.Float32BufferAttribute(t.sty, 1));
      g.computeBoundingSphere(); g.computeBoundingBox();
      const m = new THREE.Mesh(g, kind === 'wall' ? wallMerged : roofMerged);
      m.castShadow = true; m.receiveShadow = true; m.userData.owners = t.owners;
      intactGroup.add(m); ch[kind + 'Mesh'] = m; t.pos = t.nor = t.uv = t.col = t.sty = null;
    }
  }
}
function hideIntact(b) {
  const ch = chunks.get(b.mesh.key);
  for (const [kind, start, count] of b.mesh.ranges) {
    const m = ch[kind + 'Mesh']; if (!m) continue;
    const a = m.geometry.attributes.position, x = a.array[start * 3], y = a.array[start * 3 + 1], z = a.array[start * 3 + 2];
    for (let v = start; v < start + count; v++) { a.array[v * 3] = x; a.array[v * 3 + 1] = y; a.array[v * 3 + 2] = z; }
    a.addUpdateRange(start * 3, count * 3); a.needsUpdate = true;
  }
  b.mesh.hidden = true;
}
const UP = new THREE.Vector3(0, 1, 0);
function polyInside(x, z, p) { let c = false; for (let i = 0, j = p.length - 1; i < p.length; j = i++) { const [x1, z1] = p[i], [x2, z2] = p[j]; if ((z1 > z) !== (z2 > z) && x < (x2 - x1) * (z - z1) / (z2 - z1) + x1) c = !c; } return c; }

SCENE.buildings.forEach((src, bi) => {
  const p = src.p;
  // 가장 긴 변 방향으로 격자 정렬
  let best = 0, th = 0;
  for (let i = 0; i < p.length; i++) { const [ax, az] = p[i], [bx, bz] = p[(i + 1) % p.length]; const L = Math.hypot(bx - ax, bz - az); if (L > best) { best = L; th = Math.atan2(bz - az, bx - ax); } }
  const cs = Math.cos(th), sn = Math.sin(th);
  const loc = p.map(([x, z]) => [cs * x + sn * z, -sn * x + cs * z]);
  const us = loc.map((v) => v[0]), ws = loc.map((v) => v[1]);
  const areaM = Math.abs(p.reduce((a, v, i) => { const w = p[(i + 1) % p.length]; return a + v[0] * w[1] - w[0] * v[1]; }, 0) / 2);
  const nyV = Math.min(src.lv, 40); // 블록 층 수 상한(초고층은 한 블록이 여러 층)
  const cell = Math.max(src.s ? 4 : 5, Math.ceil(Math.sqrt(areaM / 700)), Math.ceil(Math.sqrt(areaM * nyV / 22000)));
  const u0 = Math.min(...us), w0 = Math.min(...ws);
  const nx = Math.max(1, Math.ceil((Math.max(...us) - u0) / cell)), nz = Math.max(1, Math.ceil((Math.max(...ws) - w0) / cell));
  const cellsIn = [];
  for (let a = 0; a < nx; a++) for (let c = 0; c < nz; c++) if (polyInside(u0 + (a + 0.5) * cell, w0 + (c + 0.5) * cell, loc)) cellsIn.push(a * nz + c);
  if (!cellsIn.length) cellsIn.push(((nx / 2) | 0) * nz + ((nz / 2) | 0));
  const ny = nyV, fh = src.h / ny;
  const style = facadeStyle(src);
  const color = buildingColor(src, style);
  // 통짜 메시
  const shape = new THREE.Shape(p.map(([x, z]) => new THREE.Vector2(x, -z)));
  const geo = new THREE.ExtrudeGeometry(shape, { depth: src.h, bevelEnabled: false });
  geo.rotateX(-Math.PI / 2);
  const uv = geo.attributes.uv; const g1 = geo.groups.find((g) => g.materialIndex === 1);
  if (g1) for (let i = g1.start; i < g1.start + g1.count; i++) { const v = geo.index ? geo.index.getX(i) : i; uv.setXY(v, uv.getX(v) / cell, uv.getY(v) / fh); }
  const mesh = mergeAdd(geo, color, src.s, bi, p, style);
  geo.dispose();
  const xs = p.map((v) => v[0]), zs = p.map((v) => v[1]);
  buildings.push({
    i: bi, id: src.id, name: bName(src), site: !!src.s, h: src.h, poly: p, mesh, color: new THREE.Color(color), style,
    cs, sn, u0, w0, cell, nx, nz, ny, fh, cellsIn, vol: cellsIn.length * ny,
    bbox: [Math.min(...xs), Math.max(...xs), Math.min(...zs), Math.max(...zs)],
    cx: xs.reduce((a, b) => a + b, 0) / xs.length, cz: zs.reduce((a, b) => a + b, 0) / zs.length,
    vox: null, alive: cellsIn.length * ny, gone: false, collapsed: false, dirty: false,
    quat: new THREE.Quaternion().setFromAxisAngle(UP, -th),
  });
});
buildChunks();

// 시작 카메라 방향: 16방향 중 부지를 가리는 주변 건물이 가장 적은 쪽
(() => {
  const tg = controls.target, d = camera.position.distanceTo(tg), hy = camera.position.y - tg.y, hr = Math.hypot(camera.position.x - tg.x, camera.position.z - tg.z);
  let best = null;
  for (let k = 0; k < 16; k++) {
    const a = Math.atan2(camera.position.x - tg.x, camera.position.z - tg.z) + k * Math.PI / 8;
    const cx = tg.x + Math.sin(a) * hr, cz = tg.z + Math.cos(a) * hr;
    let occ = 0;
    for (let t = 0.08; t < 0.92; t += 0.04) {
      const x = cx + (tg.x - cx) * t, z = cz + (tg.z - cz) * t, y = hy * (1 - t);
      for (const b of buildings) { if (b.site || b.h < y || x < b.bbox[0] || x > b.bbox[1] || z < b.bbox[2] || z > b.bbox[3]) continue; if (polyInside(x, z, b.poly)) { occ += (b.h - y) * (1.2 - t); break; } }
    }
    const score = occ + k * 0.01; // 같으면 원래 방향
    if (!best || score < best.s) best = { s: score, x: cx, z: cz };
  }
  camera.position.set(best.x, camera.position.y, best.z); controls.update();
})();

// ───────────────────────── 옥상: 회사 간판 · 설비 ─────────────────────────
const roofMat = new THREE.MeshStandardMaterial({ color: '#9aa1a8', roughness: 0.8, metalness: 0.2 });
const roofUnits = (() => {
  const list = [];
  for (const b of buildings) {
    if (b.h < 18) continue;
    const n = Math.min(6, 1 + Math.floor(b.vol / 120));
    for (let k = 0; k < n * 3 && list.filter((u) => u.b === b).length < n; k++) {
      const x = rnd(b.bbox[0], b.bbox[1]), z = rnd(b.bbox[2], b.bbox[3]);
      if (!polyInside(x, z, b.poly)) continue;
      list.push({ b, x, z, sx: rnd(2.5, 6), sy: rnd(1.5, 3.5), sz: rnd(2.5, 6) });
    }
  }
  const m = new THREE.InstancedMesh(BOX, roofMat, Math.max(1, list.length));
  list.forEach((u, i) => { _m.compose(_p.set(u.x, u.b.h + u.sy / 2, u.z), u.b.quat, _s.set(u.sx, u.sy, u.sz)); m.setMatrixAt(i, _m); (u.b.roofIdx ||= []).push(i); });
  m.count = list.length; m.castShadow = true; m.receiveShadow = true; world.add(m);
  return m;
})();
function clearRoof(b) {
  if (b.roofIdx) { for (const i of b.roofIdx) roofUnits.setMatrixAt(i, ZERO); roofUnits.instanceMatrix.needsUpdate = true; b.roofIdx = null; }
  if (b.sign) dropSign(b);
}
const signs = [];
function signTexture(text) {
  const [c, x] = makeCanvas(1024, 256);
  x.fillStyle = '#0f172a'; x.fillRect(0, 0, 1024, 256);
  x.fillStyle = '#ffffff'; x.textAlign = 'center'; x.textBaseline = 'middle';
  let fs = 170; x.font = `900 ${fs}px ${getComputedStyle(document.body).fontFamily}`;
  while (x.measureText(text).width > 960 && fs > 40) { fs -= 8; x.font = `900 ${fs}px ${getComputedStyle(document.body).fontFamily}`; }
  x.fillText(text, 512, 136);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
(() => {
  const site = buildings.filter((b) => b.site).sort((a, b) => b.h - a.h);
  const text = CFG.sign || CFG.company;
  const tex = signTexture(text);
  const mat = new THREE.MeshStandardMaterial({ map: tex, emissiveMap: tex, emissive: '#ffffff', emissiveIntensity: 0.35, roughness: 0.6 });
  const back = new THREE.MeshStandardMaterial({ color: '#334155', roughness: 0.8 });
  for (const b of site.slice(0, site.length > 6 ? 2 : 1)) {
    const len = Math.max(b.nx, b.nz) * b.cell;
    const W = Math.max(18, Math.min(len * 0.75, 60)), H = W / 4;
    const g = new THREE.Group();
    const front = new THREE.Mesh(new THREE.PlaneGeometry(W, H), mat); front.position.set(0, H / 2 + 3, 0.6);
    const rear = new THREE.Mesh(new THREE.PlaneGeometry(W, H), mat); rear.position.set(0, H / 2 + 3, -0.6); rear.rotation.y = Math.PI;
    const frame = new THREE.Mesh(new THREE.BoxGeometry(W + 1, H + 1, 1), back); frame.position.y = H / 2 + 3;
    const post = new THREE.Mesh(new THREE.BoxGeometry(W * 0.9, 3, 1.2), roofMat); post.position.y = 1.5;
    g.add(frame, front, rear, post);
    g.position.set(b.cx, b.h, b.cz);
    g.rotation.y = Math.atan2(camera.position.x - b.cx, camera.position.z - b.cz); // 처음 카메라 쪽을 봄
    const board = frame;
    board.castShadow = true; world.add(g); b.sign = g; b.signH = H + 6; signs.push({ b, g, mat });
  }
})();
function dropSign(b) {
  const g = b.sign; b.sign = null; world.remove(g);
  const P = g.position;
  for (let k = 0; k < 4; k++) debris.spawn(P.x + rnd(-8, 8), P.y + 6, P.z + rnd(-8, 8), rnd(6, 12), rnd(3, 6), 0.8, g.quaternion, 0.1, 0.12, 0.18, rnd(-10, 10), rnd(5, 15), rnd(-10, 10), 2);
}
const SITE_VOL = buildings.filter((b) => b.site).reduce((a, b) => a + b.vol, 0);
const SITE_COUNT = buildings.filter((b) => b.site).length;

const grid = (() => {
  const C = 40, map = new Map(), key = (i, j) => i * 100000 + j;
  for (const b of buildings) {
    for (let i = Math.floor(b.bbox[0] / C); i <= Math.floor(b.bbox[1] / C); i++)
      for (let j = Math.floor(b.bbox[2] / C); j <= Math.floor(b.bbox[3] / C); j++) {
        const k = key(i, j); if (!map.has(k)) map.set(k, []); map.get(k).push(b);
      }
  }
  const EMPTY = [];
  return {
    at(x, z) { return map.get(key(Math.floor(x / C), Math.floor(z / C))) || EMPTY; },
    query(x, z, r) {
      const out = new Set();
      for (let i = Math.floor((x - r) / C); i <= Math.floor((x + r) / C); i++)
        for (let j = Math.floor((z - r) / C); j <= Math.floor((z + r) / C); j++)
          for (const b of map.get(key(i, j)) || []) if (!b.gone && b.bbox[0] - r <= x && x <= b.bbox[1] + r && b.bbox[2] - r <= z && z <= b.bbox[3] + r) out.add(b);
      return out;
    },
  };
})();

function blockWorld(b, a, y, c, out) {
  const u = b.u0 + (a + 0.5) * b.cell, w = b.w0 + (c + 0.5) * b.cell;
  out.set(b.cs * u - b.sn * w, (y + 0.5) * b.fh, b.sn * u + b.cs * w);
  return out;
}
function voxelize(b) {
  if (b.vox || b.gone) return b.vox;
  if (blocks.cap - blocks.live < b.vol) return null; // 블록 칸이 모자라면 쪼개지 않음
  const n = b.nx * b.ny * b.nz;
  const vox = new Int32Array(n).fill(-1);
  const r = b.color.r, g = b.color.g, bl = b.color.b;
  let made = 0;
  for (const ac of b.cellsIn) {
    const a = (ac / b.nz) | 0, c = ac % b.nz;
    for (let y = 0; y < b.ny; y++) {
      blockWorld(b, a, y, c, _p);
      const sh = 0.9 + 0.1 * Math.random();
      const s = blocks.add(_p.x, _p.y, _p.z, b.cell, b.fh, b.cell, b.quat, r * sh, g * sh, bl * sh, b.style);
      blocks.owner[s] = b.i; blocks.cell[s] = (a * b.ny + y) * b.nz + c;
      vox[(a * b.ny + y) * b.nz + c] = s; made++;
    }
  }
  b.vox = vox; b.alive = made;
  hideIntact(b); clearRoof(b);
  return vox;
}
const vIdx = (b, a, y, c) => (a * b.ny + y) * b.nz + c;

// 블록 하나 제거
let destroyedSite = 0;
function removeBlock(b, idx, mode, vx = 0, vy = 0, vz = 0, tag = 0) {
  const s = b.vox[idx]; if (s < 0) return;
  const L = blocks, x = L.pos[s * 3], y = L.pos[s * 3 + 1], z = L.pos[s * 3 + 2];
  if (mode === 'debris') {
    debris.spawn(x, y, z, L.size[s * 3] * 0.94, L.size[s * 3 + 1] * 0.94, L.size[s * 3 + 2] * 0.94, b.quat, L.col[s * 3], L.col[s * 3 + 1], L.col[s * 3 + 2], vx, vy, vz, Math.min(3, 0.4 + Math.hypot(vx, vy, vz) * 0.05), tag, b.style);
  } else if (mode === 'vapor') {
    fire.spawn(x, y, z, rnd(-3, 3), rnd(2, 8), rnd(-3, 3), rnd(5, 9), 0.5, [1, 0.8, 0.4], [1, 0.25, 0.05]);
  }
  L.remove(s); b.vox[idx] = -1; b.alive--; b.dirty = true;
  if (b.site) destroyedSite++;
  pts(10, x, y, z);
}

// 구 범위 파괴
function blastBuildings(cx, cy, cz, R, power, opt = {}) {
  let n = 0;
  for (const b of grid.query(cx, cz, R)) {
    if (!voxelize(b)) continue;
    for (const ac of b.cellsIn) {
      const a = (ac / b.nz) | 0, c = ac % b.nz;
      for (let y = 0; y < b.ny; y++) {
        const idx = vIdx(b, a, y, c), s = b.vox[idx]; if (s < 0) continue;
        const x = blocks.pos[s * 3], yy = blocks.pos[s * 3 + 1], z = blocks.pos[s * 3 + 2];
        let dx = x - cx, dy = yy - cy, dz = z - cz;
        if (opt.vertical) dy = 0; // 원기둥
        const d = Math.hypot(dx, dy, dz);
        if (d > R * (0.85 + Math.random() * 0.25)) continue;
        const l = d || 1, f = power * (1 - d / (R * 1.1)) + power * 0.15;
        if (opt.vapor && d < R * 0.75) { removeBlock(b, idx, 'vapor'); n++; continue; }
        if (opt.dir) {
          const [ux, uy, uz] = opt.dir, sp = rnd(0.75, 1.25) * power;
          removeBlock(b, idx, 'debris', ux * sp + rnd(-8, 8), uy * sp + rnd(0, 12), uz * sp + rnd(-8, 8), opt.tag || 0);
        } else removeBlock(b, idx, 'debris', dx / l * f + rnd(-3, 3), Math.max(dy / l, 0.15) * f + rnd(2, 8) * (power / 30), dz / l * f + rnd(-3, 3));
        n++;
      }
    }
  }
  return n;
}

// 빠르게 날아온 조각이 건물에 박히면 그 자리 블록이 떨어져 나감
function hitBuildingAt(x, y, z, vx, vy, vz) {
  for (const b of grid.at(x, z)) {
    if (b.gone || y > b.h || y < 0 || x < b.bbox[0] || x > b.bbox[1] || z < b.bbox[2] || z > b.bbox[3]) continue;
    const u = b.cs * x + b.sn * z, w = -b.sn * x + b.cs * z;
    const a = Math.floor((u - b.u0) / b.cell), c = Math.floor((w - b.w0) / b.cell), yy = Math.floor(y / b.fh);
    if (a < 0 || c < 0 || a >= b.nx || c >= b.nz || yy < 0 || yy >= b.ny) continue;
    if (!b.vox) { if (!b.cellsIn.includes(a * b.nz + c)) continue; if (!voxelize(b)) continue; }
    const idx = vIdx(b, a, yy, c);
    if (b.vox[idx] < 0) continue;
    removeBlock(b, idx, 'debris', vx * 0.5, vy * 0.5 + 3, vz * 0.5);
    if (Math.random() < 0.15) smoke.spawn(x, y, z, 0, 2, 0, rnd(6, 10), 2.5, [0.6, 0.58, 0.55], [0.5, 0.5, 0.5], 0.5);
    return true;
  }
  return false;
}

// 받침 없는 블록 낙하
const fallQueue = [];
function supportCheck(b) {
  b.dirty = false;
  if (!b.vox || b.gone) return;
  const seen = new Uint8Array(b.vox.length), st = [];
  for (const ac of b.cellsIn) {
    const a = (ac / b.nz) | 0, c = ac % b.nz, idx = vIdx(b, a, 0, c);
    if (b.vox[idx] < 0) continue;
    const s = b.vox[idx];
    if (groundH(blocks.pos[s * 3], blocks.pos[s * 3 + 2]) < -1.6) continue; // 아래가 파였음
    seen[idx] = 1; st.push(idx);
  }
  const sa = b.ny * b.nz, sy = b.nz, V = b.vox;
  const visit = (j) => { if (!seen[j] && V[j] >= 0) { seen[j] = 1; st.push(j); } };
  while (st.length) {
    const idx = st.pop(); const c = idx % b.nz, y = ((idx / b.nz) | 0) % b.ny, a = (idx / sa) | 0;
    if (a + 1 < b.nx) visit(idx + sa); if (a > 0) visit(idx - sa);
    if (y + 1 < b.ny) visit(idx + sy); if (y > 0) visit(idx - sy);
    if (c + 1 < b.nz) visit(idx + 1); if (c > 0) visit(idx - 1);
  }
  const loose = [];
  for (let i = 0; i < b.vox.length; i++) if (b.vox[i] >= 0 && !seen[i]) loose.push(i);
  if (loose.length) fallQueue.push({ b, loose });
  checkCollapse(b);
}
function dropLoose({ b, loose }) {
  loose = loose.filter((i) => b.vox && b.vox[i] >= 0); // 그사이 이미 부서진 블록 제외
  if (!loose.length) return;
  // 많으면 덩어리로 묶어서 떨어뜨림
  const free = debris.cap - debris.n;
  const m = loose.length < Math.min(500, free) ? 1 : loose.length < free * 3 ? 2 : 3;
  const groups = new Map();
  for (const idx of loose) {
    const c = idx % b.nz, y = ((idx / b.nz) | 0) % b.ny, a = (idx / (b.nz * b.ny)) | 0;
    const k = `${(a / m) | 0},${(y / Math.min(m, 2)) | 0},${(c / m) | 0}`;
    if (!groups.has(k)) groups.set(k, []); groups.get(k).push(idx);
  }
  let k = 0;
  for (const g of groups.values()) {
    let sx = 0, sy = 0, sz = 0, cr = 0, cg = 0, cb = 0;
    for (const idx of g) {
      const s = b.vox[idx];
      sx += blocks.pos[s * 3]; sy += blocks.pos[s * 3 + 1]; sz += blocks.pos[s * 3 + 2];
      cr += blocks.col[s * 3]; cg += blocks.col[s * 3 + 1]; cb += blocks.col[s * 3 + 2];
      blocks.remove(s); b.vox[idx] = -1; b.alive--; if (b.site) destroyedSite++;
    }
    const n = g.length, ext = Math.cbrt(n);
    debris.spawn(sx / n, sy / n, sz / n, b.cell * Math.min(m, ext * 1.1), b.fh * Math.min(Math.min(m, 2), ext), b.cell * Math.min(m, ext * 1.1), b.quat, cr / n, cg / n, cb / n, rnd(-2, 2), rnd(-3, 0), rnd(-2, 2), 0.35, 0, b.style);
    if (k++ % 5 === 0) smoke.spawn(sx / n, sy / n, sz / n, rnd(-2, 2), rnd(0, 2), rnd(-2, 2), rnd(10, 18), 4, [0.72, 0.7, 0.66], [0.55, 0.54, 0.52], 0.45);
    pts(10 * n, sx / n, sy / n, sz / n, true);
  }
  if (loose.length > 30) { sfx.at(b.cx, b.cz).crumble(Math.min(1, loose.length / 600)); sfx.v = 1; }
  b.dirty = true;
}
function checkCollapse(b) {
  if (b.collapsed) return;
  if (b.alive <= b.vol * 0.2) {
    b.collapsed = true;
    const nm = b.name || (b.site ? T('noName', CFG.company) : '');
    if (b.site) { award(5000, T('collapse', nm)); collapsedSite++; }
    else award(800, nm ? T('collapseSmall', nm) : T('nextBldg'));
  }
}
let collapsedSite = 0;

// 건물 통째로 날리기 (핵폭탄)
function obliterate(b, cx, cz, R, budget, gentle = false) {
  if (b.gone) return;
  const sample = [];
  if (b.vox) {
    for (let i = 0; i < b.vox.length; i++) if (b.vox[i] >= 0) sample.push(i);
  }
  const live = b.vox ? sample.length : b.vol;
  const k = Math.min(budget, live);
  const col = b.color;
  for (let t = 0; t < k; t++) {
    let x, y, z;
    if (b.vox) { const s = b.vox[sample[(Math.random() * sample.length) | 0]]; x = blocks.pos[s * 3]; y = blocks.pos[s * 3 + 1]; z = blocks.pos[s * 3 + 2]; }
    else {
      const ac = b.cellsIn[(Math.random() * b.cellsIn.length) | 0];
      blockWorld(b, (ac / b.nz) | 0, (Math.random() * b.ny) | 0, ac % b.nz, _p); x = _p.x; y = _p.y; z = _p.z;
    }
    const dx = x - cx, dz = z - cz, d = Math.hypot(dx, dz) || 1, f = (1 - Math.min(1, d / R)) * 170 + 30;
    const sz = b.cell * rnd(1, 1.8) * (gentle ? 1.4 : 1);
    if (gentle) debris.spawn(x, y, z, sz, b.fh * rnd(0.9, 1.5), sz, b.quat, col.r, col.g, col.b, rnd(-3, 3), rnd(-4, 0), rnd(-3, 3), 0.5, 0, b.style);
    else debris.spawn(x, y, z, sz, b.fh * rnd(0.8, 1.4), sz, b.quat, col.r, col.g, col.b, dx / d * f, rnd(25, 70), dz / d * f, 3, 0, b.style);
  }
  if (b.vox) { for (let i = 0; i < b.vox.length; i++) if (b.vox[i] >= 0) { blocks.remove(b.vox[i]); b.vox[i] = -1; } }
  else hideIntact(b);
  clearRoof(b);
  if (b.site) destroyedSite += b.alive;
  pts(10 * b.alive, b.cx, b.h / 2, b.cz, true);
  if (gentle) for (let i = 0; i < 14 * FXK; i++) smoke.spawn(b.cx + rnd(-20, 20), rnd(2, b.h * 0.6), b.cz + rnd(-20, 20), rnd(-4, 4), rnd(1, 5), rnd(-4, 4), rnd(18, 34), 5, [0.75, 0.72, 0.68], [0.6, 0.58, 0.56], 0.55, 1.5);
  if (gentle) { sfx.at(b.cx, b.cz).crumble(0.8); sfx.v = 1; }
  b.alive = 0; b.gone = true; checkCollapse(b);
}

// ───────────────────────── 파티클 ─────────────────────────
class Particles {
  constructor(cap, additive) {
    this.cap = cap; this.n = 0;
    const g = new THREE.BufferGeometry();
    this.P = new Float32Array(cap * 3); this.Cc = new Float32Array(cap * 3); this.Sz = new Float32Array(cap); this.A = new Float32Array(cap);
    g.setAttribute('position', new THREE.BufferAttribute(this.P, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aColor', new THREE.BufferAttribute(this.Cc, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.Sz, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(this.A, 1).setUsage(THREE.DynamicDrawUsage));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e5);
    this.V = new Float32Array(cap * 3); this.L = new Float32Array(cap); this.ML = new Float32Array(cap);
    this.S0 = new Float32Array(cap); this.GR = new Float32Array(cap); this.C0 = new Float32Array(cap * 3); this.C1 = new Float32Array(cap * 3); this.A0 = new Float32Array(cap); this.B = new Float32Array(cap);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: additive ? softDot : puff }, uScale: { value: 1 } },
      vertexShader: `attribute vec3 aColor; attribute float aSize; attribute float aAlpha; varying vec3 vC; varying float vA; uniform float uScale;
        void main(){ vC=aColor; vA=aAlpha; vec4 mv = modelViewMatrix*vec4(position,1.); gl_PointSize = min(aSize*uScale/max(-mv.z,1.), 900.); gl_Position = projectionMatrix*mv; }`,
      fragmentShader: `uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a*vA); }`,
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.pts = new THREE.Points(g, this.mat); this.pts.frustumCulled = false; this.pts.renderOrder = additive ? 3 : 2;
    world.add(this.pts);
  }
  spawn(x, y, z, vx, vy, vz, size, life, c0, c1, alpha = 1, grow = 1.6, buoy = 0) {
    if (this.n >= this.cap) return;
    const i = this.n++;
    this.P.set([x, y, z], i * 3); this.V.set([vx, vy, vz], i * 3);
    this.L[i] = 0; this.ML[i] = life * rnd(0.8, 1.2); this.S0[i] = size; this.GR[i] = grow; this.A0[i] = alpha; this.B[i] = buoy;
    this.C0.set(c0, i * 3); this.C1.set(c1, i * 3);
  }
  update(dt) {
    for (let i = 0; i < this.n; i++) {
      this.L[i] += dt;
      const t = this.L[i] / this.ML[i];
      if (t >= 1) {
        const j = --this.n;
        if (i !== j) {
          for (const [A, k] of [[this.P, 3], [this.V, 3], [this.C0, 3], [this.C1, 3]]) A.copyWithin(i * k, j * k, j * k + k);
          for (const A of [this.L, this.ML, this.S0, this.GR, this.A0, this.B]) A[i] = A[j];
        }
        i--; continue;
      }
      const i3 = i * 3, dr = Math.max(0, 1 - 1.4 * dt);
      this.V[i3] *= dr; this.V[i3 + 1] = this.V[i3 + 1] * dr + this.B[i] * dt; this.V[i3 + 2] *= dr;
      this.P[i3] += this.V[i3] * dt; this.P[i3 + 1] += this.V[i3 + 1] * dt; this.P[i3 + 2] += this.V[i3 + 2] * dt;
      this.Sz[i] = this.S0[i] * (1 + this.GR[i] * t);
      for (let k = 0; k < 3; k++) this.Cc[i3 + k] = this.C0[i3 + k] + (this.C1[i3 + k] - this.C0[i3 + k]) * Math.min(1, t * 1.6);
      this.A[i] = this.A0[i] * (t < 0.1 ? t / 0.1 : 1 - (t - 0.1) / 0.9);
    }
    const g = this.pts.geometry;
    g.setDrawRange(0, this.n);
    for (const k of ['position', 'aColor', 'aSize', 'aAlpha']) g.attributes[k].needsUpdate = true;
  }
}
// 업종별 소품 입자(서류·알약·동전…): 빙글빙글 돌며 팔랑팔랑 떨어짐
const confetti = (() => {
  const cap = IS_MOBILE ? 900 : 1600;
  const g = new THREE.BufferGeometry();
  const P = new Float32Array(cap * 3), SZ = new Float32Array(cap), A = new Float32Array(cap), ROT = new Float32Array(cap), IDX = new Float32Array(cap);
  const V = new Float32Array(cap * 3), L = new Float32Array(cap), ML = new Float32Array(cap), SP = new Float32Array(cap), PH = new Float32Array(cap);
  for (const [k, arr, n] of [['position', P, 3], ['aSize', SZ, 1], ['aAlpha', A, 1], ['aRot', ROT, 1], ['aIdx', IDX, 1]]) g.setAttribute(k, new THREE.BufferAttribute(arr, n).setUsage(THREE.DynamicDrawUsage));
  g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e5);
  const tex = new THREE.CanvasTexture(confettiAtlas(THEME_KEY)); tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.ShaderMaterial({
    uniforms: { map: { value: tex }, uScale: { value: 1 } }, transparent: true, depthWrite: false,
    vertexShader: `attribute float aSize; attribute float aAlpha; attribute float aRot; attribute float aIdx; varying float vA; varying float vR; varying float vI; uniform float uScale;
      void main(){ vA = aAlpha; vR = aRot; vI = aIdx; vec4 mv = modelViewMatrix * vec4(position, 1.); gl_PointSize = min(aSize * uScale / max(-mv.z, 1.), 400.); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform sampler2D map; varying float vA; varying float vR; varying float vI;
      void main(){ vec2 p = gl_PointCoord - .5; float c = cos(vR), s = sin(vR); p = mat2(c, -s, s, c) * p * 1.15 + .5;
        if (p.x < 0. || p.y < 0. || p.x > 1. || p.y > 1.) discard;
        vec2 uv = vec2((mod(vI, 2.) + p.x) / 2., 1. - (floor(vI / 2.) + p.y) / 2.);
        vec4 t = texture2D(map, uv); if (t.a < .08) discard; gl_FragColor = vec4(t.rgb, t.a * vA); }`,
  });
  const pts = new THREE.Points(g, mat); pts.frustumCulled = false; pts.renderOrder = 4; world.add(pts);
  let n = 0;
  return {
    mat,
    burst(x, y, z, count, speed, dir) {
      count = Math.round(count * Math.max(0.5, FXK));
      for (let k = 0; k < count && n < cap; k++) {
        const i = n++, a = rnd(0, Math.PI * 2), e = rnd(0.2, 1), sp = rnd(0.3, 1) * speed;
        P.set([x + rnd(-2, 2), y + rnd(0, 3), z + rnd(-2, 2)], i * 3);
        V.set(dir ? [dir[0] * sp + rnd(-4, 4), rnd(4, 14), dir[2] * sp + rnd(-4, 4)] : [Math.cos(a) * sp * (1 - e * 0.4), e * sp * 0.9 + 4, Math.sin(a) * sp * (1 - e * 0.4)], i * 3);
        SZ[i] = rnd(4.5, 8); IDX[i] = (Math.random() * 4) | 0; ROT[i] = rnd(0, 6.28); SP[i] = rnd(-6, 6); PH[i] = rnd(0, 6.28); L[i] = 0; ML[i] = rnd(3, 5.5);
      }
    },
    update(dt) {
      for (let i = 0; i < n; i++) {
        L[i] += dt;
        if (L[i] >= ML[i]) { const j = --n; if (i !== j) { P.copyWithin(i * 3, j * 3, j * 3 + 3); V.copyWithin(i * 3, j * 3, j * 3 + 3); SZ[i] = SZ[j]; IDX[i] = IDX[j]; ROT[i] = ROT[j]; SP[i] = SP[j]; PH[i] = PH[j]; L[i] = L[j]; ML[i] = ML[j]; } i--; continue; }
        const i3 = i * 3, dr = Math.max(0, 1 - 1.6 * dt);
        V[i3] *= dr; V[i3 + 2] *= dr; V[i3 + 1] = Math.max(V[i3 + 1] - 9 * dt, -6); // 종이처럼 천천히 떨어짐
        P[i3] += (V[i3] + Math.sin(L[i] * 3 + PH[i]) * 2.5) * dt; P[i3 + 1] += V[i3 + 1] * dt; P[i3 + 2] += (V[i3 + 2] + Math.cos(L[i] * 2.6 + PH[i]) * 2.5) * dt;
        const fl = floorAt(P[i3], P[i3 + 2]) + 0.4; if (P[i3 + 1] < fl) { P[i3 + 1] = fl; V[i3] = V[i3 + 2] = 0; SP[i] *= 0.9; }
        ROT[i] += SP[i] * dt; A[i] = Math.min(1, (ML[i] - L[i]) / 1);
      }
      g.setDrawRange(0, n); for (const k of ['position', 'aSize', 'aAlpha', 'aRot', 'aIdx']) g.attributes[k].needsUpdate = true;
    },
  };
})();
const fire = new Particles(IS_MOBILE ? 3500 : 5000, true);
const smoke = new Particles(IS_MOBILE ? 4500 : 6000, false);
let FXK = QUALITY[qLevel].fxk; // 화질에 따라 연기·불꽃 양

// 충격파 링, 불덩이
const fx = [];
function ring(x, y, z, R, dur, color = '#fff2d0') {
  const m = new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 64), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
  m.rotation.x = -Math.PI / 2; m.position.set(x, y + 0.6, z); world.add(m);
  fx.push({ t: 0, dur, up(t) { m.scale.setScalar(1 + R * Math.pow(t, 0.6)); m.material.opacity = 0.8 * (1 - t); }, done() { world.remove(m); m.geometry.dispose(); } });
}
const LIGHTS = [0, 1, 2].map(() => { const l = new THREE.PointLight('#ffb060', 0, 100, 1.2); world.add(l); return l; });
let lightPtr = 0;
function fireball(x, y, z, R, dur) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), new THREE.MeshBasicMaterial({ color: '#ffd28a', transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  m.position.set(x, y, z); world.add(m);
  const light = LIGHTS[lightPtr++ % LIGHTS.length]; light.position.set(x, y + R * 0.5, z); light.distance = R * 14;
  fx.push({ t: 0, dur, up(t) {
    m.scale.setScalar(R * Math.pow(t, 0.35) + 0.1); m.material.opacity = 1 - t;
    m.material.color.setRGB(1, 0.85 - t * 0.5, 0.55 - t * 0.5); light.intensity = (1 - t) * R * 400;
  }, done() { world.remove(m); light.intensity = 0; m.geometry.dispose(); } });
}
function after(sec, fn) { fx.push({ t: 0, dur: sec, up() {}, done: fn }); }


function explosionFX(x, y, z, R, big = 1) {
  fireball(x, y, z, R * 0.9, 0.5 + 0.25 * big);
  ring(x, Math.max(y - R * 0.6, groundH(x, z)), z, R * 3, 0.8 + 0.3 * big);
  const n = Math.min(220, 40 + R * 5) * FXK;
  confetti.burst(x, y, z, Math.min(80, 20 + R * 1.5), R * 1.6);
  for (let i = 0; i < n; i++) {
    const a = rnd(0, Math.PI * 2), e = rnd(-0.1, 1), sp = rnd(0.3, 1.2) * R * 2.4;
    fire.spawn(x, y, z, Math.cos(a) * sp * (1 - e * 0.5), e * sp, Math.sin(a) * sp * (1 - e * 0.5), rnd(0.25, 0.5) * R, rnd(0.45, 0.9), [1, 0.92, 0.6], [1, 0.3, 0.06], 1, 1.2, 6);
  }
  for (let i = 0; i < n * 0.8; i++) {
    const a = rnd(0, Math.PI * 2), sp = rnd(0.1, 0.6) * R * 1.5;
    smoke.spawn(x + rnd(-R, R) * 0.4, y + rnd(0, R * 0.4), z + rnd(-R, R) * 0.4, Math.cos(a) * sp, rnd(2, 10) + R * 0.3, Math.sin(a) * sp,
      rnd(0.4, 0.8) * R, rnd(2.5, 5) * big, [0.32, 0.29, 0.27], [0.62, 0.6, 0.58], 0.75, 1.8, 2);
  }
}

// ───────────────────────── 점수 · 직급 ─────────────────────────
const RANKS = [[0, '#8b95a5'], [600, '#5ea2d8'], [2200, '#3fb37f'], [5500, '#e2b33c'], [11000, '#ef8a32'], [20000, '#e5533d'], [34000, '#c13cc9'], [52000, '#ff2d55']].map(([v, c], i) => [T('ranks')[i], v, c]);
let score = 0, style = 0, lastHit = 0, maxRank = 0, recent = [], toolMult = 1, simTime = 0;
let pend = 0; const pendPos = new THREE.Vector3(); let pendT = 0;
const rankIdx = () => { let r = 0; RANKS.forEach((k, i) => { if (style >= k[1]) r = i; }); return r; };
const totalMult = () => toolMult * (1 + rankIdx() * 0.12);
function pts(n, x, y, z, quiet) {
  if (!Number.isFinite(x + y + z)) { x = y = z = 0; }
  const v = n * totalMult(); score += v; style += n * 0.55; lastHit = simTime;
  const r = rankIdx(); if (r > maxRank) { maxRank = r; if (r >= 2) toast(T('promo', RANKS[r][0]), 1600, RANKS[r][2]); }
  pend += v; pendPos.set(x, y, z);
}
function award(n, label) { score += n * totalMult(); style += n * 0.3; lastHit = simTime; toast(`${label}  +${NUM(Math.round(n * totalMult()))}`, 2200); }
function recordTool(id) {
  recent.push(id); if (recent.length > 6) recent.shift();
  const last4 = recent.slice(-4);
  toolMult = last4.length === 4 && last4.every((t) => t === id) ? 0.7 : 1 + 0.15 * (new Set(recent).size - 1);
}

// ───────────────────────── 소리 (Web Audio 합성) ─────────────────────────
const sfx = {
  ctx: null, out: null, muted: false, nb: null, v: 1, lastThud: 0, thudN: 0,
  at(x, z) { const d = Math.hypot(camera.position.x - x, camera.position.y, camera.position.z - z); this.v = THREE.MathUtils.clamp(1.7 - d / 800, 0.35, 1.35); return this; },
  init() {
    // 아이폰 무음 스위치가 켜져 있어도 소리가 나게: 오디오 세션을 '재생'으로
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) {}
    if (!this.silent) {
      try { // 무음 짧은 wav를 반복 재생해 두면 iOS가 웹 오디오를 무음 모드에서도 내보냄
        const a = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=');
        a.loop = true; a.setAttribute('playsinline', ''); a.volume = 0.01; a.play().catch(() => {}); this.silent = a;
      } catch (e) {}
    }
    if (this.ctx) { if (this.ctx.state !== 'running') this.ctx.resume(); return; }
    const C = window.AudioContext || window.webkitAudioContext; if (!C) return;
    this.ctx = new C();
    this.ctx.resume && this.ctx.resume();
    // iOS 첫 소리 깨우기: 아주 짧은 무음 버퍼 재생
    try { const bs = this.ctx.createBufferSource(); bs.buffer = this.ctx.createBuffer(1, 1, 22050); bs.connect(this.ctx.destination); bs.start(0); } catch (e) {}
    const comp = this.ctx.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 6;
    this.out = this.ctx.createGain(); this.out.gain.value = 0.85; this.out.connect(comp); comp.connect(this.ctx.destination);
    const len = this.ctx.sampleRate * 3; this.nb = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.nb.getChannelData(0); let b = 0;
    for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; b = (b + 0.02 * w) / 1.02; d[i] = w * 0.5 + b * 3; }
  },
  ok() { if (this.ctx && this.ctx.state !== 'running') this.ctx.resume(); return this.ctx && !this.muted; },
  env(g, t0, a, peak, dur) { g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(peak, t0 + a); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur); },
  noise(dur, type, f0, f1, peak, a = 0.004, delay = 0) {
    if (!this.ok()) return; const c = this.ctx, t = c.currentTime + delay;
    const s = c.createBufferSource(); s.buffer = this.nb; s.loop = true;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = c.createGain(); this.env(g, t, a, Math.min(1.5, peak * this.v), dur);
    s.connect(f); f.connect(g); g.connect(this.out); s.start(t, Math.random() * 2); s.stop(t + dur + 0.05);
  },
  tone(type, f0, f1, dur, peak, a = 0.005, delay = 0) {
    if (!this.ok()) return; const c = this.ctx, t = c.currentTime + delay;
    const o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(10, f1), t + dur);
    const g = c.createGain(); this.env(g, t, a, Math.min(1.5, peak * this.v), dur); o.connect(g); g.connect(this.out); o.start(t); o.stop(t + dur + 0.05);
  },
  boom(s = 1) {
    this.noise(0.09, 'highpass', 5000, 1500, 0.9 * Math.min(1, 0.4 + s * 0.5)); // 터지는 순간 '딱'
    this.noise(0.6 + s * 0.9, 'lowpass', 1800 * Math.min(1.5, s), 70, 0.95 * Math.min(1, 0.5 + s * 0.4)); // 본 폭발
    this.tone('sine', 95, 26, 0.5 + s * 0.7, 0.9); this.tone('triangle', 60, 22, 0.35 + s * 0.4, 0.5); // 저음 쿵
    const n = 3 + Math.min(8, s * 4); for (let k = 0; k < n; k++) this.noise(rnd(0.04, 0.12), 'bandpass', rnd(900, 3500), rnd(400, 900), rnd(0.15, 0.35), 0.002, rnd(0.1, 0.9 + s * 0.4)); // 파편 튀는 소리
  },
  thud(x, z, sz) { // 조각이 땅에 떨어지는 소리 (1초에 12번까지)
    const now = performance.now(); if (now - this.lastThud > 1000) { this.lastThud = now; this.thudN = 0; } if (++this.thudN > 12) return;
    this.at(x, z); const k = Math.min(1, sz / 8);
    this.tone('sine', rnd(70, 120) * (1.3 - k * 0.6), 35, 0.18 + k * 0.2, 0.25 + k * 0.35, 0.002); this.noise(0.12 + k * 0.15, 'lowpass', 900, 150, 0.15 + k * 0.25, 0.002); this.v = 1;
  },
  cheer() { this.noise(2.2, 'bandpass', 700, 1400, 0.35, 0.4); this.tone('square', 523, 523, 0.12, 0.12, 0.005, 0.05); this.tone('square', 659, 659, 0.12, 0.12, 0.005, 0.18); this.tone('square', 784, 784, 0.3, 0.12, 0.005, 0.31); },
  click() { this.v = 1; this.tone('triangle', 1100, 700, 0.06, 0.18); },
  crumble(s) { this.noise(1 + s * 1.5, 'bandpass', 700, 180, 0.25 + s * 0.4, 0.05); },
  whack() { this.noise(0.18, 'highpass', 3000, 800, 0.8); this.tone('square', 220, 70, 0.2, 0.35); },
  whoosh(d) { this.noise(d, 'bandpass', 300, 2600, 0.35, d * 0.8); },
  whistle(d) { this.tone('sine', 1700, 420, d, 0.18, 0.2); },
  zap() { this.tone('sawtooth', 1500, 160, 0.3, 0.3); this.noise(0.3, 'highpass', 4000, 1500, 0.3); },
  charge(d) { this.tone('sawtooth', 70, 900, d, 0.22, d * 0.9); },
  hum() {
    if (!this.ok()) return () => {};
    const c = this.ctx, o1 = c.createOscillator(), o2 = c.createOscillator(), g = c.createGain(), f = c.createBiquadFilter();
    o1.type = 'sawtooth'; o1.frequency.value = 150; o2.type = 'square'; o2.frequency.value = 301; f.type = 'lowpass'; f.frequency.value = 1800;
    g.gain.value = 0.0001; g.gain.exponentialRampToValueAtTime(0.16, c.currentTime + 0.05);
    o1.connect(f); o2.connect(f); f.connect(g); g.connect(this.out); o1.start(); o2.start();
    return () => { g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.25); o1.stop(c.currentTime + 0.3); o2.stop(c.currentTime + 0.3); };
  },
  rumble(d, a) { this.noise(d, 'lowpass', 220, 60, 0.35 + a * 0.5, 0.3); },
  nuke() { this.boom(3); this.noise(7, 'lowpass', 500, 40, 0.9, 0.05, 0.1); this.tone('sine', 50, 20, 5, 0.7, 0.05); },
};
const tsfx = themeSfx(THEME_KEY, sfx);

// ───────────────────────── 화면 흔들림 · 보조 ─────────────────────────
let shakeAmp = 0; const shakeOff = new THREE.Vector3();
const shake = (a) => { shakeAmp = Math.min(14, shakeAmp + a); };
function camFwd() { const f = new THREE.Vector3(); camera.getWorldDirection(f); f.y = 0; return f.normalize(); }

function explode(x, y, z, R, power, opt = {}) {
  blastBuildings(x, y, z, R, power);
  rubble.wake(x, z, R * 1.15, power * 0.7, x, z);
  debris.push(x, y, z, R * 1.6, power * 0.6);
  trees.clear(x, z, R * 0.8);
  if (opt.crater && y - groundH(x, z) < R * 0.8) crater(x, z, opt.crater[0], opt.crater[1]);
  explosionFX(x, y, z, R, opt.big || 1);
  shake(R * 0.08 * (opt.big || 1));
  sfx.at(x, z).boom(R / 16); sfx.v = 1;
}

// ───────────────────────── 도구 ─────────────────────────
const LABELS = Object.fromEntries(['bomb', 'bat', 'laser', 'meteor', 'quake', 'nuke'].map((k) => [k, T(`labels.${k}`)])); // 테마가 일부만 바꿔도 나머지는 기본 대사
const pick1 = (a) => a[(Math.random() * a.length) | 0];

const envTex = (() => {
  const [c, x] = makeCanvas(256, 180);
  x.fillStyle = '#fbfaf5'; x.fillRect(0, 0, 256, 180);
  x.strokeStyle = '#c9c4b8'; x.lineWidth = 4; x.strokeRect(4, 4, 248, 172);
  x.beginPath(); x.moveTo(6, 8); x.lineTo(128, 96); x.lineTo(250, 8); x.stroke();
  x.fillStyle = '#1b1b1b'; x.font = `900 46px ${getComputedStyle(document.body).fontFamily}`; x.textAlign = 'center'; x.fillText(T('envelope'), 128, 150);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
const camScale = () => THREE.MathUtils.clamp(camera.position.distanceTo(controls.target) / 260, 1, 5); // 멀리서 봐도 보이게
function dropBomb(P) {
  const k = camScale();
  const env = new THREE.Mesh(new THREE.BoxGeometry(9 * k, 0.5 * k, 6.5 * k), [0, 0, 1, 1, 0, 0].map((f) => new THREE.MeshStandardMaterial(f ? { map: envTex } : { color: '#efece4' })));
  env.castShadow = true;
  const H = 90 * k; env.position.set(P.x, P.y + H, P.z); world.add(env);
  fx.push({ t: 0, dur: 0.62, up(t) {
    const e = t * t; env.position.set(P.x + Math.sin(t * 9) * 4 * k * (1 - t), P.y + H * (1 - e), P.z + Math.cos(t * 7) * 3 * k * (1 - t));
    env.rotation.set(Math.sin(t * 10) * 0.6, t * 5, Math.cos(t * 8) * 0.5);
    if (Math.random() < 0.6) smoke.spawn(env.position.x, env.position.y, env.position.z, 0, 2, 0, 3 * k, 0.6, [1, 1, 1], [0.9, 0.9, 0.9], 0.35);
  }, done() {
    world.remove(env); env.geometry.dispose();
    explode(P.x, P.y + 2, P.z, 20, 46, { crater: [16, 6] }); tsfx('bomb');
    if (Math.random() < 0.45) floatText(P, pick1(LABELS.bomb), '#fff');
  } });
}

let batScale = 1, batSeq = 1; const batHR = new Set();
const boardTex = (() => { const t = new THREE.CanvasTexture(boardCanvas(THEME_KEY, (k) => (k === 'lang' ? LANG : T(k)))); t.colorSpace = THREE.SRGBColorSpace; return t; })();
function swingBat(P) {
  const L = 36 * batScale, id = batSeq++, VL = Math.max(L, 30 * camScale()); // VL: 보이는 크기
  const fwd = camFwd(), tan = new THREE.Vector3(-fwd.z, 0, fwd.x);
  const pivot = P.clone().addScaledVector(fwd, -VL * 0.55); pivot.y = Math.max(P.y, VL * 0.12);
  const g = new THREE.Group(); g.position.copy(pivot);
  const board = new THREE.Mesh(new THREE.BoxGeometry(VL, VL * 0.3, VL * 0.03), [0, 0, 0, 0, 1, 1].map((k) => (k ? new THREE.MeshStandardMaterial({ map: boardTex }) : new THREE.MeshStandardMaterial({ color: '#2b2b2e' }))));
  board.position.x = VL / 2; board.castShadow = true; g.add(board); world.add(g);
  const phi0 = Math.atan2(-fwd.z, fwd.x);
  sfx.whoosh(0.22);
  let hit = false;
  fx.push({ t: 0, dur: 0.8, up(t) {
    const s = Math.min(1, t / 0.4);
    g.rotation.y = phi0 + 1.5 - 3 * (s * s * (3 - 2 * s));
    if (!hit && s >= 0.5) {
      hit = true;
      const dir = fwd.clone().multiplyScalar(0.78).addScaledVector(tan, 0.42); dir.y = 0.42; dir.normalize();
      const sp = 60 + 22 * batScale;
      blastBuildings(P.x, P.y, P.z, L * 0.42, sp, { dir: [dir.x, dir.y, dir.z], tag: id });
      for (let i = 0; i < 2; i++) debris.push(P.x, P.y, P.z, L * 0.5, 25);
      rubble.wake(P.x, P.z, L * 0.4, 30, pivot.x, pivot.z);
      trees.clear(P.x, P.z, L * 0.3);
      sfx.at(P.x, P.z).whack(); sfx.v = 1; shake(1.5 * batScale);
      confetti.burst(P.x, P.y, P.z, 30, 30, [dir.x, dir.y, dir.z]);
      for (let i = 0; i < 25; i++) smoke.spawn(P.x, P.y, P.z, dir.x * 20 + rnd(-6, 6), rnd(0, 8), dir.z * 20 + rnd(-6, 6), rnd(5, 10) * batScale, 1.8, [0.7, 0.68, 0.64], [0.6, 0.6, 0.6], 0.5);
      if (Math.random() < 0.5) floatText(P, pick1(LABELS.bat), '#ffd6d6');
    }
    board.material.forEach((m) => { m.transparent = t > 0.75; m.opacity = t > 0.75 ? 1 - (t - 0.75) / 0.25 : 1; });
  }, done() { world.remove(g); board.geometry.dispose(); } });
}
function batLanded(id, dist, x, y, z) {
  if (dist > 70 && !batHR.has(id)) { batHR.add(id); award(3000, T('homerun', Math.round(dist))); sfx.cheer(); floatText(new THREE.Vector3(x, y + 8, z), T('homerunShort', Math.round(dist)), '#ffe066'); }
}

// 엑셀 레이저
const BEAM_SRC = new THREE.Vector3(260, 1400, -380);
const laser = { drawing: false, path: [], line: null, active: null };
const beam = (() => {
  const g = new THREE.Group();
  const geo = new THREE.CylinderGeometry(1, 1, 1, 16, 1, true).translate(0, 0.5, 0);
  [[1.3, (TH.beam || [])[0] || '#ffffff', 1], [3.2, (TH.beam || [])[1] || '#21d07a', 0.75], [7.5, (TH.beam || [])[1] || '#21a366', 0.28]].forEach(([r, c, o]) => {
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: o, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    m.scale.set(r, 1, r); m.userData.o = o; g.add(m);
  });
  g.visible = false; world.add(g); return g;
})();
function aimBeam(target, k = 1) {
  const dir = BEAM_SRC.clone().sub(target), len = dir.length();
  beam.position.copy(target); beam.quaternion.setFromUnitVectors(UP, dir.normalize());
  beam.children.forEach((m) => { m.scale.y = len; m.scale.x = m.scale.z = m.userData.r0 ??= m.scale.x; m.scale.x = m.scale.z = m.userData.r0 * k * rnd(0.9, 1.1); m.material.opacity = m.userData.o * Math.min(1, k); });
  beam.visible = true;
}
function laserCarve(x, z, first) {
  const y = Math.max(0, groundH(x, z));
  blastBuildings(x, 0, z, 8.5, 22, { vertical: true, vapor: true });
  rubble.wake(x, z, 9, 14, x, z);
  trees.clear(x, z, 6);
  crater(x, z, 5, 1.8, 1);
  for (let i = 0; i < 6; i++) fire.spawn(x, y + 1, z, rnd(-10, 10), rnd(5, 25), rnd(-10, 10), rnd(2, 5), 0.5, [0.85, 1, 0.85], [1, 0.4, 0.05]);
  smoke.spawn(x, y + 2, z, rnd(-2, 2), rnd(3, 8), rnd(-2, 2), rnd(5, 9), 2.2, [0.35, 0.36, 0.34], [0.5, 0.5, 0.5], 0.45);
  if (first) { explosionFX(x, y + 3, z, 7); sfx.boom(0.4); if (Math.random() < 0.6) floatText(new THREE.Vector3(x, y + 10, z), pick1(LABELS.laser), '#7dffb0'); }
}
function fireLaser(path) {
  const segs = []; let total = 0;
  for (let i = 1; i < path.length; i++) { const l = path[i].distanceTo(path[i - 1]); segs.push(l); total += l; }
  const charge = 0.65, dur = Math.min(2.6, Math.max(0.8, total / 160));
  sfx.charge(charge);
  laser.active = { path, segs, total, done: 0, nextBoom: 0 };
  let stopHum = null;
  fx.push({ t: 0, dur: charge, up(t) { skyU.uDark.value = Math.max(skyU.uDark.value, t * 0.65); aimBeam(path[0], t * 0.25); }, done() {
    stopHum = sfx.hum(); shake(1.5);
    fx.push({ t: 0, dur, up(t) {
      const a = laser.active; const target = t * a.total;
      while (a.done <= target) {
        let d = a.done, i = 0; while (i < a.segs.length && d > a.segs[i]) { d -= a.segs[i]; i++; }
        if (i >= a.segs.length) break;
        const p = path[i].clone().lerp(path[i + 1], a.segs[i] ? d / a.segs[i] : 0);
        laserCarve(p.x, p.z, a.done >= a.nextBoom);
        if (a.done >= a.nextBoom) a.nextBoom += 22;
        a.last = p; a.done += 3;
      }
      if (a.last) aimBeam(a.last.clone().setY(groundH(a.last.x, a.last.z)), 1);
      shakeAmp = Math.max(shakeAmp, 0.5);
    }, done() {
      stopHum && stopHum(); beam.visible = false; laser.active = null;
      fx.push({ t: 0, dur: 0.8, up(t) { skyU.uDark.value = (nightOn ? 0 : 0.65) * (1 - t); }, done() { skyU.uDark.value = 0; } });
    } });
  } });
}
function zap(P) {
  sfx.zap();
  fx.push({ t: 0, dur: 0.45, up(t) { aimBeam(P, 1 - t * 0.5); }, done() { beam.visible = false; } });
  laserCarve(P.x, P.z, true);
}

// 업종별 운석 모양
function meteorMesh() {
  const hot = (c, m = 0.4) => new THREE.MeshStandardMaterial({ color: c, emissive: '#ff7a1a', emissiveIntensity: 0.55, metalness: m, roughness: 0.4 });
  const g = new THREE.Group();
  switch (TH.meteor) {
    case 'pill': { const a = new THREE.Mesh(new THREE.CapsuleGeometry(5, 10, 6, 16), hot('#f8fafc', 0)); const b = new THREE.Mesh(new THREE.CylinderGeometry(5.05, 5.05, 5, 16), hot('#ef4444', 0)); b.position.y = 2.5; a.rotation.z = b.rotation.z = Math.PI / 3; g.add(a, b); break; }
    case 'coin': { const c = new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 2.4, 32), hot('#fbbf24', 1)); c.rotation.x = 1.1; g.add(c); break; }
    case 'wafer': { const c = new THREE.Mesh(new THREE.CylinderGeometry(12, 12, 0.8, 48), hot('#cbd5e1', 1)); c.rotation.x = 1; g.add(c); break; }
    case 'tv': { const box = new THREE.Mesh(new THREE.BoxGeometry(16, 10, 4), hot('#1f2937', 0.3)); const sc = new THREE.Mesh(new THREE.PlaneGeometry(14, 8.4), new THREE.MeshBasicMaterial({ color: '#93c5fd' })); sc.position.z = 2.05; g.add(box, sc); break; }
    case 'phone': { const box = new THREE.Mesh(new THREE.BoxGeometry(6, 12, 1), hot('#111827', 0.5)); const sc = new THREE.Mesh(new THREE.PlaneGeometry(5.4, 11), new THREE.MeshBasicMaterial({ color: '#a5b4fc' })); sc.position.z = 0.55; g.add(box, sc); g.scale.setScalar(1.4); break; }
    case 'gear': { const c = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, 3, 10), hot('#9ca3af', 1)); for (let i = 0; i < 10; i++) { const t = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), hot('#9ca3af', 1)); t.position.set(Math.cos(i / 10 * Math.PI * 2) * 9, 0, Math.sin(i / 10 * Math.PI * 2) * 9); c.add(t); } c.rotation.x = 1.2; g.add(c); break; }
    case 'gpu': { const box = new THREE.Mesh(new THREE.BoxGeometry(18, 4, 9), hot('#14532d', 0.6)); for (const x of [-5, 4]) { const f = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.2, 0.5, 20), hot('#111827', 0.2)); f.position.set(x, -2.2, 0); box.add(f); } g.add(box); break; }
    default: g.add(new THREE.Mesh(new THREE.IcosahedronGeometry(8, 1), new THREE.MeshBasicMaterial({ color: '#ffb36b' })));
  }
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}
function meteor(P) {
  const fwd = camFwd(), tan = new THREE.Vector3(-fwd.z, 0, fwd.x);
  const S0 = P.clone().addScaledVector(fwd, -380).addScaledVector(tan, 160); S0.y += 650;
  const rock = meteorMesh();
  world.add(rock); sfx.whoosh(1.5);
  const prev = S0.clone();
  fx.push({ t: 0, dur: 1.5, up(t) {
    const e = t * t; rock.position.lerpVectors(S0, P, e); rock.rotation.x += 0.12; rock.rotation.y += 0.07;
    for (let i = 0; i < 10; i++) {
      const q = prev.clone().lerp(rock.position, Math.random());
      fire.spawn(q.x, q.y, q.z, rnd(-3, 3), rnd(-3, 3), rnd(-3, 3), rnd(9, 16), 0.5, [1, 0.9, 0.6], [1, 0.3, 0.05]);
      smoke.spawn(q.x, q.y, q.z, rnd(-2, 2), rnd(0, 3), rnd(-2, 2), rnd(10, 18), 3, [0.45, 0.4, 0.36], [0.5, 0.5, 0.5], 0.55);
    }
    prev.copy(rock.position);
  }, done() {
    world.remove(rock); rock.traverse((o) => o.geometry && o.geometry.dispose());
    explode(P.x, P.y + 4, P.z, 34, 95, { big: 1.8 });
    crater(P.x, P.z, 42, 17); tsfx('meteor');
    floatText(P.clone().setY(P.y + 30), pick1(LABELS.meteor), '#ffcf8a');
  } });
}

let quake = null, quakeM = 7;
function startQuake(P) {
  const M = quakeM, A = Math.min(9, 0.08 * Math.pow(1.9, M - 4));
  quake = { t: 0, dur: 3.2, M, A, P: P.clone() };
  sfx.rumble(3.4, Math.min(1, (M - 4) / 5)); tsfx('quake'); shake(A * 0.6);
  floatText(P.clone().setY(P.y + 25), T('magLabel', M.toFixed(1), pick1(LABELS.quake)), '#ffd28a');
  for (const b of buildings) {
    if (b.gone) continue;
    const d = Math.hypot(b.cx - P.x, b.cz - P.z), I = M - 2.6 * Math.log10(1 + d / 50);
    if (I < 6.5 && !b.vox) continue; // 멀리 있는 온전한 건물은 흔들리기만
    if (I < 5.6) continue;
    after(rnd(0.2, 2.6), () => quakeHit(b, I));
  }
  if (M >= 8.5) {
    for (let k = 0; k < 3 + (M - 8.5) * 2; k++) {
      const a = rnd(0, Math.PI * 2), L = rnd(80, 60 + (M - 8) * 120);
      for (let s = 0; s < L; s += 5) after(0.3 + s / 120, () => crater(P.x + Math.cos(a) * s, P.z + Math.sin(a) * s, 3.5, 6 * (1 - s / L) + 1.5, 0.4));
    }
  }
}
function quakeHit(b, I) {
  if (b.gone) return;
  confetti.burst(b.cx, b.h * 0.8, b.cz, 14, 10);
  if (I >= 7.5) { // 통째로 주저앉음 (거친 덩어리로 처리해서 가볍게)
    const free = debris.cap - debris.n;
    obliterate(b, b.cx, b.cz, 1, Math.max(6, Math.min(b.site ? 110 : 40, Math.floor(free / 6))), true);
    return;
  }
  if (!voxelize(b)) return;
  const live = []; for (let i = 0; i < b.vox.length; i++) if (b.vox[i] >= 0) live.push(i);
  const lvl = (i) => ((i / b.nz) | 0) % b.ny;
  // 건물 한쪽 동(날개)의 1층 기둥이 무너지면 그 위가 통째로 주저앉음 (받침 검사가 떨어뜨림)
  const col = (i) => [(i / (b.nz * b.ny)) | 0, i % b.nz];
  const wings = I >= 7 ? 1 + Math.floor((I - 7) * 4) : (I >= 6.2 ? 1 : 0);
  for (let w = 0; w < wings; w++) {
    const ac = b.cellsIn[(Math.random() * b.cellsIn.length) | 0], ca = (ac / b.nz) | 0, cc = ac % b.nz;
    const R = Math.max(1.5, Math.sqrt(b.cellsIn.length) * rnd(0.25, 0.45));
    live.filter((i) => lvl(i) <= 1 && b.vox[i] >= 0).forEach((i) => { const [a, c] = col(i); if (Math.hypot(a - ca, c - cc) <= R) removeBlock(b, i, 'debris', rnd(-2, 2), 0, rnd(-2, 2)); });
  }
  if (I < 6.2) live.filter((i) => b.vox[i] >= 0 && lvl(i) === b.ny - 1 && Math.random() < 0.04).forEach((i) => removeBlock(b, i, 'debris', rnd(-3, 3), rnd(0, 2), rnd(-3, 3))); // 약한 지진: 옥상 일부만
}

let nukeBusy = false;
function nuke(P) {
  if (nukeBusy) return; nukeBusy = true;
  const bomb = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(2.4, 7, 6, 12), new THREE.MeshStandardMaterial({ color: '#30353b', metalness: 0.5, roughness: 0.4 }));
  const band = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.5, 1.2, 12), new THREE.MeshStandardMaterial({ color: '#f2c200' }));
  bomb.add(body, band); world.add(bomb);
  const top = P.clone(); top.y += 700; sfx.whistle(2.2);
  floatText(P.clone().setY(P.y + 40), pick1(LABELS.nuke), '#ff8080');
  fx.push({ t: 0, dur: 2.2, up(t) { bomb.position.lerpVectors(top, P, t * t); bomb.rotation.z = Math.sin(t * 20) * 0.05; }, done() {
    world.remove(bomb); detonate(P.clone().setY(groundH(P.x, P.z) + 10));
  } });
}
let timeScale = 1, slowT = 0;
function detonate(P) {
  const R = 420;
  flash(1, 2.2); slowT = 2.4; sfx.nuke(); tsfx('nuke'); shake(14);
  confetti.burst(P.x, P.y + 40, P.z, 220, 160);
  fireball(P.x, P.y, P.z, 170, 3.2);
  ring(P.x, P.y, P.z, 1100, 4.5, '#ffe9c0'); ring(P.x, P.y, P.z, 700, 3, '#ffffff');
  const hitList = [...grid.query(P.x, P.z, R)].filter((b) => Math.hypot(b.cx - P.x, b.cz - P.z) < R + 20);
  const budget = Math.max(8, Math.floor(Math.min(220, (debris.cap - debris.n - 300) / Math.max(1, hitList.length))));
  for (const b of hitList) obliterate(b, P.x, P.z, R, b.site ? budget : Math.ceil(budget * 0.5));
  rubble.wake(P.x, P.z, R, 120, P.x, P.z);
  debris.push(P.x, P.y, P.z, R * 1.3, 150);
  trees.clear(P.x, P.z, R);
  crater(P.x, P.z, 230, 75);
  award(30000, T('quit'));
  fx.push({ t: 0, dur: 9, up(t) { // 버섯구름
    const H = Math.min(520, 700 * Math.sqrt(t));
    for (let i = 0; i < 9 * FXK; i++) {
      const a = rnd(0, Math.PI * 2), r = rnd(0, 35);
      smoke.spawn(P.x + Math.cos(a) * r, P.y + rnd(0, H * 0.9), P.z + Math.sin(a) * r, 0, rnd(20, 50), 0, rnd(35, 70), 4, t < 0.25 ? [1, 0.55, 0.2] : [0.55, 0.45, 0.4], [0.42, 0.38, 0.36], 0.6, 1.2);
      const b2 = rnd(0, Math.PI * 2), rr = rnd(40, 90 + H * 0.35);
      smoke.spawn(P.x + Math.cos(b2) * rr * 0.5, P.y + H + rnd(-30, 30), P.z + Math.sin(b2) * rr * 0.5, Math.cos(b2) * rr * 0.4, rnd(-4, 14), Math.sin(b2) * rr * 0.4, rnd(60, 110), 5, t < 0.3 ? [1, 0.6, 0.25] : [0.6, 0.5, 0.45], [0.45, 0.42, 0.4], 0.7, 1.4);
      if (t < 0.5) fire.spawn(P.x + rnd(-40, 40), P.y + H * rnd(0.6, 1), P.z + rnd(-40, 40), rnd(-10, 10), rnd(5, 25), rnd(-10, 10), rnd(40, 80), 1.2, [1, 0.8, 0.4], [1, 0.25, 0.05], 0.8);
    }
    if (t < 0.15) for (let i = 0; i < 20; i++) { const a = rnd(0, Math.PI * 2), sp = rnd(150, 320); smoke.spawn(P.x, P.y, P.z, Math.cos(a) * sp, rnd(2, 12), Math.sin(a) * sp, rnd(40, 70), 3.5, [0.7, 0.62, 0.55], [0.6, 0.58, 0.55], 0.6, 1.5); }
  }, done() { nukeBusy = false; } });
}

// ───────────────────────── UI ─────────────────────────
const $ = (id) => document.getElementById(id);
const TOOLS = [
  { id: 'bomb', short: T('tools.bomb')[1], svg: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 8l9 6 9-6"/>', name: T('tools.bomb')[0], tip: T('tools.bomb')[2] },
  { id: 'bat', short: T('tools.bat')[1], svg: '<rect x="5" y="4" width="14" height="17" rx="2"/><rect x="9" y="2.5" width="6" height="3" rx="1"/><path d="M8 10h8M8 14h5"/><circle cx="15.5" cy="16.5" r="2.2"/>', name: T('tools.bat')[0], tip: T('tools.bat')[2], slider: { label: T('batSize'), min: 0.5, max: 3, step: 0.1, get: () => batScale, set: (v) => (batScale = v), fmt: (v) => `×${v.toFixed(1)} · ${Math.round(36 * v)} m` } },
  { id: 'laser', short: T('tools.laser')[1], svg: '<path d="M4 20V10M10 20V4M16 20v-7M21 20H3"/>', name: T('tools.laser')[0], tip: T('tools.laser')[2] },
  { id: 'meteor', short: T('tools.meteor')[1], svg: '<circle cx="15" cy="15" r="5"/><path d="M3 3l8 8M7 3l6 6M3 7l6 6"/>', name: T('tools.meteor')[0], tip: T('tools.meteor')[2] },
  { id: 'quake', short: T('tools.quake')[1], svg: '<path d="M2 13h4l2-6 3 11 3-9 2 4h6"/>', name: T('tools.quake')[0], tip: T('tools.quake')[2], slider: { label: T('mag'), min: 4, max: 10, step: 0.1, get: () => quakeM, set: (v) => (quakeM = v), fmt: (v) => `M ${v.toFixed(1)} · ${T('qk')[v < 6 ? 0 : v < 7.5 ? 1 : 2]}` } },
  { id: 'nuke', short: T('tools.nuke')[1], svg: '<circle cx="12" cy="12" r="2"/><path d="M12 10L8.5 4a8 8 0 0 1 7 0zM13.7 13l3.5 6a8 8 0 0 0 3.5-6zM10.3 13l-3.5 6a8 8 0 0 1-3.5-6z" fill="currentColor"/>', name: T('tools.nuke')[0], tip: T('tools.nuke')[2] },
];
let tool = 'bomb';
function buildDock() {
  const dock = $('dock');
  TOOLS.forEach((t, i) => {
    const b = document.createElement('button');
    b.className = 'tool'; b.dataset.id = t.id; b.title = t.tip;
    b.innerHTML = `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${t.svg}</svg><span class="nm">${t.name}</span><span class="sh">${t.short}</span><kbd>${i + 1}</kbd>`;
    b.onclick = () => selectTool(t.id);
    dock.appendChild(b);
  });
  $('slider').oninput = (e) => { const t = TOOLS.find((k) => k.id === tool); t.slider.set(+e.target.value); $('sliderVal').textContent = t.slider.fmt(+e.target.value); };
  selectTool('bomb');
}
function selectTool(id) {
  if (tool !== id) sfx.click();
  tool = id;
  document.querySelectorAll('.tool').forEach((b) => b.classList.toggle('on', b.dataset.id === id));
  const t = TOOLS.find((k) => k.id === id);
  $('tip').textContent = t.tip;
  const sw = $('sliderWrap');
  if (t.slider) {
    sw.hidden = false; $('sliderLabel').textContent = t.slider.label;
    Object.assign($('slider'), { min: t.slider.min, max: t.slider.max, step: t.slider.step, value: t.slider.get() });
    $('sliderVal').textContent = t.slider.fmt(t.slider.get());
  } else sw.hidden = true;
}

const floaters = [];
function floatText(pos, text, color = '#fff', big = false) {
  const el = document.createElement('div'); el.className = 'float' + (big ? ' big' : ''); el.textContent = text; el.style.color = color; el.style.opacity = 0;
  $('floaters').appendChild(el); floaters.push({ el, pos: pos.clone(), t: 0 });
  if (floaters.length > 28) { const f = floaters.shift(); f.el.remove(); }
}
let toastT = 0;
function toast(text, ms = 1800, color) {
  const el = $('toast'); el.textContent = text; el.style.color = color || ''; el.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), ms);
}
function flash(a, dur) { const el = $('flash'); el.style.transition = 'none'; el.style.opacity = a; requestAnimationFrame(() => { el.style.transition = `opacity ${dur}s ease-out`; el.style.opacity = 0; }); }

function setNight(on) {
  nightOn = on;
  const k = on ? SKY_NIGHT : SKY_DAY;
  skyU.uTop.value.copy(k.top); skyU.uHor.value.copy(k.hor); scene.fog.color.copy(k.fog);
  hemi.intensity = on ? 0.18 : 1.1; sun.intensity = on ? 0.12 : 2.6; sun.color.set(on ? '#9fb4ff' : '#fff3e0');
  wallInst.emissiveIntensity = on ? 1.6 : 0;
  wallMerged.emissiveIntensity = on ? 1.6 : 0;
  for (const sg of signs) sg.mat.emissiveIntensity = on ? 1.6 : 0.25;
  stars.visible = on; $('nightBtn').classList.toggle('on', on);
}

const hudEls = {};
function hud() {
  const r = rankIdx();
  hudEls.score.textContent = NUM(Math.round(score));
  hudEls.rank.textContent = RANKS[r][0]; hudEls.rank.style.background = RANKS[r][2];
  const nxt = RANKS[r + 1]; hudEls.bar.style.width = nxt ? `${Math.min(100, ((style - RANKS[r][1]) / (nxt[1] - RANKS[r][1])) * 100)}%` : '100%';
  hudEls.mult.textContent = `×${totalMult().toFixed(2)}`;
  hudEls.rate.textContent = `${Math.min(100, (destroyedSite / SITE_VOL) * 100).toFixed(1)}%`;
  hudEls.cnt.textContent = T('count', collapsedSite, SITE_COUNT);
  hudEls.depth.textContent = `${NUM(6371 * Math.pow(Math.min(1, deepest / MAXD), 1.6), { maximumFractionDigits: deepest < 40 ? 1 : 0 })} ${T('km')}`;
}

// 결과 카드
function makeCard() {
  renderer.render(scene, camera);
  const shot = new Image(); shot.src = canvas.toDataURL('image/jpeg', 0.9);
  shot.onload = () => {
    const [c, x] = makeCanvas(1200, 630);
    const s = Math.max(1200 / shot.width, 630 / shot.height);
    x.drawImage(shot, (1200 - shot.width * s) / 2, (630 - shot.height * s) / 2, shot.width * s, shot.height * s);
    const g = x.createLinearGradient(0, 0, 760, 0); g.addColorStop(0, 'rgba(10,14,22,.88)'); g.addColorStop(1, 'rgba(10,14,22,0)');
    x.fillStyle = g; x.fillRect(0, 0, 1200, 630);
    x.fillStyle = '#ff6a2b'; x.font = '700 22px sans-serif'; x.fillText(MODE === 'free' ? CFG.series : `${CFG.series} · ${T(MODE === 't60' ? 'mode.t60' : 'mode.demo')}`, 56, 70);
    x.fillStyle = '#fff'; x.font = '900 54px sans-serif'; x.fillText(T('smash', CFG.company), 56, 132);
    const CL = T('card'); const rows = [...(MODE === 'demolish' && gameOver ? [[T('mode.demo'), (finishMs / 1000).toFixed(1) + T('mode.sec')]] : MODE === 't60' ? [[T('mode.t60'), NUM(Math.round(score))]] : []), [CL[0], NUM(Math.round(score))], [CL[1], RANKS[maxRank][0]], [CL[2], hudEls.rate.textContent], [CL[3], hudEls.cnt.textContent], [CL[4], hudEls.depth.textContent]];
    rows.slice(0, 6).forEach(([k, v], i) => { x.fillStyle = '#aab4c3'; x.font = '500 24px sans-serif'; x.fillText(k, 56, 190 + i * 62); x.fillStyle = '#fff'; x.font = '800 40px sans-serif'; x.fillText(v, 300, 194 + i * 62); });
    const drawLogo = () => {  // 오른쪽 위 로고 칩
      if (!(logoImg.complete && logoImg.naturalWidth)) return false;
      const lh = 64, lw = Math.min(200, (logoImg.naturalWidth / logoImg.naturalHeight) * lh), cx = 1200 - 40 - lw - 28;
      x.fillStyle = CFG.logoBg || '#fff'; x.beginPath(); x.roundRect ? x.roundRect(cx, 36, lw + 28, lh + 24, 16) : x.rect(cx, 36, lw + 28, lh + 24); x.fill();
      x.drawImage(logoImg, cx + 14, 48, lw, lh); return true;
    };
    x.fillStyle = '#cfd6df'; x.font = '500 20px sans-serif'; x.fillText(`${CFG.place} · ${CFG.tagline}`, 56, 590);
    let url = c.toDataURL('image/png');  // 로고 없는 판을 먼저 만들어 두고
    try { if (drawLogo()) url = c.toDataURL('image/png'); } catch (e) {}  // 로고 출처가 달라 캔버스가 오염되면 로고 없는 판을 씀
    $('cardImg').src = url; $('cardDl').href = url; $('cardModal').hidden = false;
    const ranked = MODE !== 'free' && gameOver;
    $('submitRow').hidden = !RANK_ON || submitted || !ranked; $('submitMsg').textContent = MODE === 'free' ? T('mode.freeNoRank') : '';
    $('againBtn').hidden = MODE === 'free';
    if (PORTAL) nextBtn();
  };
}

// ───────────────────────── 입력 ─────────────────────────
const ray = new THREE.Raycaster(); const ndc = new THREE.Vector2();
function groundRay(r) {
  const o = r.ray.origin, d = r.ray.direction; let prev = 0;
  for (let t = 0; t < 5000; t += 3) {
    const x = o.x + d.x * t, y = o.y + d.y * t, z = o.z + d.z * t;
    if (y <= floorAt(x, z)) {
      let a = prev, b = t;
      for (let k = 0; k < 10; k++) { const m = (a + b) / 2; if (o.y + d.y * m <= floorAt(o.x + d.x * m, o.z + d.z * m)) b = m; else a = m; }
      return { point: new THREE.Vector3(o.x + d.x * b, o.y + d.y * b, o.z + d.z * b), distance: b };
    }
    prev = t;
  }
  return null;
}
function pickAt(cx, cy, groundOnly) {
  ndc.set((cx / innerWidth) * 2 - 1, -(cy / innerHeight) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const g = groundRay(ray);
  if (groundOnly) return g;
  const hits = ray.intersectObjects([...intactGroup.children, blocks.mesh, rubbleL.mesh], false);
  const h = hits[0];
  if (h && (!g || h.distance < g.distance)) return { point: h.point.clone(), distance: h.distance };
  return g;
}
// ───────────────────────── 게임 모드: t60 · demolish · free ─────────────────────────
let MODE = 'free', modeStart = 0, gameOver = false, nukeUsed = false, finishMs = 0;
const T60 = 60;
function startMode(m) {
  MODE = m; modeStart = simTime; gameOver = false; nukeUsed = false; submitted = false;
  document.body.dataset.mode = m; logEv('play', m);
  $('timer').hidden = m === 'free';
  if (m === 'demolish') document.querySelector('.tool[data-id="nuke"]').classList.add('ban');
}
function modeTick() {
  if (MODE === 'free' || gameOver) return;
  const el = $('timer'), t = simTime - modeStart;
  if (MODE === 't60') {
    const left = Math.max(0, T60 - t); el.textContent = left.toFixed(1); el.classList.toggle('hurry', left < 10);
    if (left <= 0) endRun(T('mode.timeUp'), T60 * 1000);
  } else {
    el.textContent = t.toFixed(1);
    if (collapsedSite >= SITE_COUNT) endRun(T('mode.done', t.toFixed(1)), Math.round(t * 1000));
  }
}
function endRun(msg, ms) {
  gameOver = true; finishMs = ms; logEv('finish', MODE); $('timer').classList.remove('hurry');
  toast(msg, 3000); sfx.cheer();
  setTimeout(makeCard, 1200);
}
function act(P) {
  if (gameOver) return;
  if (tool === 'nuke' && MODE === 'demolish') { toast(T('mode.nukeBan'), 1800); return; }
  if (tool === 'nuke' && MODE === 't60') { if (nukeUsed) { toast(T('mode.nukeOnce'), 1800); return; } nukeUsed = true; }
  recordTool(tool);
  if (tool === 'bomb') dropBomb(P);
  else if (tool === 'bat') swingBat(P);
  else if (tool === 'laser') zap(P);
  else if (tool === 'meteor') meteor(P);
  else if (tool === 'quake') startQuake(P);
  else if (tool === 'nuke') nuke(P);
}
const ptrs = new Map(); let down = null;
canvas.addEventListener('pointerdown', (e) => {
  ptrs.set(e.pointerId, e);
  if (ptrs.size > 1) { if (laser.drawing) cancelLaserDraw(); down = null; return; }
  down = { x: e.clientX, y: e.clientY, t: performance.now(), btn: e.button };
  if (tool === 'laser' && e.button === 0 && !laser.active) {
    const h = pickAt(e.clientX, e.clientY, true);
    if (h) {
      laser.drawing = true; controls.enabled = false; laser.path = [h.point];
      const g = new THREE.BufferGeometry().setFromPoints([h.point, h.point]);
      laser.line = new THREE.Line(g, new THREE.LineDashedMaterial({ color: '#21d07a', dashSize: 6, gapSize: 4, depthTest: false }));
      laser.line.renderOrder = 9; world.add(laser.line);
    }
  }
}, { capture: true });
canvas.addEventListener('pointermove', (e) => {
  if (ptrs.has(e.pointerId)) ptrs.set(e.pointerId, e);
  if (!laser.drawing) return;
  const h = pickAt(e.clientX, e.clientY, true); if (!h) return;
  const last = laser.path[laser.path.length - 1];
  if (h.point.distanceTo(last) > 3) {
    laser.path.push(h.point);
    laser.line.geometry.dispose();
    laser.line.geometry = new THREE.BufferGeometry().setFromPoints(laser.path.map((p) => p.clone().setY(p.y + 1.5)));
    laser.line.computeLineDistances();
  }
});
function cancelLaserDraw() { laser.drawing = false; controls.enabled = true; if (laser.line) { world.remove(laser.line); laser.line.geometry.dispose(); laser.line = null; } }
function endPointer(e) {
  ptrs.delete(e.pointerId);
  if (laser.drawing) {
    const path = laser.path; cancelLaserDraw();
    let len = 0; for (let i = 1; i < path.length; i++) len += path[i].distanceTo(path[i - 1]);
    if (len < 8) { recordTool('laser'); zap(path[0]); } else { recordTool('laser'); fireLaser(path); }
    down = null; return;
  }
  if (!down || down.btn !== 0) { down = null; return; }
  const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y), dt = performance.now() - down.t;
  down = null;
  if (moved > 8 || dt > 600) return;
  const h = pickAt(e.clientX, e.clientY);
  if (h) act(h.point);
}
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', (e) => { ptrs.delete(e.pointerId); if (laser.drawing) cancelLaserDraw(); down = null; });
addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;
  const n = +e.key; if (n >= 1 && n <= TOOLS.length) selectTool(TOOLS[n - 1].id);
  if (e.key === 'n' || e.key === 'N') setNight(!nightOn);
  if (e.key === 'l' || e.key === 'L') $('labelBtn').click();
  if (e.key === 'm' || e.key === 'M') toggleMute();
  if (e.key === 'Escape') { $('cardModal').hidden = true; $('rankModal').hidden = true; }
});
function toggleMute() { sfx.muted = !sfx.muted; $('muteBtn').classList.toggle('on', sfx.muted); $('muteBtn').textContent = sfx.muted ? T('btn.soundOff') : T('btn.sound'); }
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight);
  if (typeof setDpr === 'function' && dpr > dprCap()) setDpr(dprCap());
});

// ───────────────────────── 랭킹 (Supabase RPC) ─────────────────────────
const RANK_ON = !!(CFG.supabaseUrl && CFG.supabaseKey);
async function rpc(fn, args) {
  const ctl = new AbortController(); const tm = setTimeout(() => ctl.abort(), 9000);
  try {
    const r = await fetch(`${CFG.supabaseUrl}/rest/v1/rpc/${fn}`, { method: 'POST', signal: ctl.signal, headers: { apikey: CFG.supabaseKey, 'Content-Type': 'application/json' }, body: JSON.stringify(args || {}) });
    if (!r.ok) throw new Error(`${r.status}`);
    return r.json();
  } finally { clearTimeout(tm); }
}
function logEv(kind, mode) {
  if (PORTAL || !RANK_ON || navigator.webdriver || location.hash === '#bench') return;
  const cc = ((navigator.language || '').split('-')[1] || '').toUpperCase();
  rpc('smash_log', { p_kind: kind, p_company: CFG.code, p_mode: mode || null, p_lang: (navigator.language || '').slice(0, 2), p_mobile: matchMedia('(pointer:coarse)').matches, p_cc: cc || null }).catch(() => {});
}
setTimeout(() => logEv('visit'), 1500);
const escH = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
let submitted = false;
let boardMode = 't60';
async function loadBoard(highlight) {
  const el = $('rankList');
  document.querySelectorAll('.bt').forEach((b) => b.classList.toggle('on', b.dataset.m === boardMode));
  if (!RANK_ON) { el.innerHTML = `<p class="muted">${T('rank.off')}</p>`; return; }
  el.innerHTML = `<p class="muted">${T('rank.loading')}</p>`;
  try {
    const rows = await rpc('smash_top', { p_company: CFG.code, p_limit: 20, p_mode: boardMode });
    el.innerHTML = rows.length ? `<ol>${rows.map((r, i) => `<li class="${r.nick === highlight ? 'me' : ''}"><span class="no">${i + 1}</span><b>${escH(r.nick)}</b><span class="rk">${escH(r.rank_name || '')}</span><span class="sc">${boardMode === 'demolish' ? (r.time_ms / 1000).toFixed(1) + T('mode.sec') : NUM(r.score)}</span></li>`).join('')}</ol>` : `<p class="muted">${T('rank.empty')}</p>`;
  } catch (e) { el.innerHTML = `<p class="muted">${T('rank.fail')}</p>`; }
}
async function submitScore() {
  if (!RANK_ON || submitted) return;
  const nick = ($('nick').value || '').trim() || T('rank.anon');
  try { localStorage.setItem('smash-nick', nick); } catch (e) {}
  $('submitBtn').disabled = true; $('submitMsg').textContent = T('rank.sending');
  try {
    const r = await rpc('smash_submit', { p_company: CFG.code, p_nick: nick, p_score: Math.round(score), p_collapsed: collapsedSite, p_rank: RANKS[maxRank][0], p_mode: MODE, p_time_ms: finishMs });
    if (r.ok) { submitted = true; $('submitMsg').textContent = T('rank.done', CFG.company, r.position); boardMode = MODE; openRank(nick.slice(0, 12)); }
    else { $('submitMsg').textContent = r.reason === 'too_fast' ? T('rank.fast') : T('rank.err'); $('submitBtn').disabled = false; }
  } catch (e) { $('submitMsg').textContent = T('rank.err'); $('submitBtn').disabled = false; }
}
function openRank(hl) { $('rankModal').hidden = false; $('rankTitle').textContent = T('rank.title', CFG.company); loadBoard(typeof hl === 'string' ? hl : undefined); }

// ───────────────────────── 동 이름표 ─────────────────────────
let labelsOn = true;
const labels = buildings.filter((b) => b.site && b.name).map((b) => {
  const el = document.createElement('div'); el.className = 'blabel'; el.textContent = b.name; el.style.display = 'none';
  $('labels').appendChild(el); return { b, el, on: false };
});
const _lp = new THREE.Vector3(), occ = new Set();
function updateLabels() {
  const far = camera.position.distanceTo(controls.target) > SITE_EXT * 3.2 + 900;
  occ.clear();
  const W = innerWidth, H = innerHeight;
  const vis = [];
  for (const L of labels) {
    const b = L.b; let show = labelsOn && !far && !b.gone && !b.collapsed;
    if (show) {
      _lp.set(b.cx, b.h * (b.vox ? Math.max(0.15, b.alive / b.vol) : 1) + 4 + (b.sign ? b.signH : 0), b.cz).project(camera);
      show = _lp.z < 1 && Math.abs(_lp.x) < 1.05 && Math.abs(_lp.y) < 1.05;
      if (show) vis.push([L, (_lp.x * 0.5 + 0.5) * W, (-_lp.y * 0.5 + 0.5) * H, _lp.z]);
    }
    if (!show && L.on) { L.el.style.display = 'none'; L.on = false; }
  }
  vis.sort((a, b) => a[3] - b[3]); // 가까운 것부터 자리 차지
  const maxL = IS_MOBILE ? (camera.position.distanceTo(controls.target) > SITE_EXT * 1.2 + 250 ? 10 : 22) : 60;
  if (vis.length > maxL) { vis.sort((a, b) => Math.hypot(a[1] - W / 2, a[2] - H / 2) - Math.hypot(b[1] - W / 2, b[2] - H / 2)); for (const v of vis.splice(maxL)) if (v[0].on) { v[0].el.style.display = 'none'; v[0].on = false; } }
  for (const [L, x, y] of vis) {
    const k = `${Math.round(x / 84)},${Math.round(y / 20)}`;
    if (occ.has(k)) { if (L.on) { L.el.style.display = 'none'; L.on = false; } continue; }
    occ.add(k);
    if (!L.on) { L.el.style.display = ''; L.on = true; }
    L.el.style.transform = `translate(${x | 0}px,${y | 0}px) translate(-50%,-100%)`;
  }
}
function buildingFromHit(h) {
  if (!h) return null;
  if (h.object === blocks.mesh) { const o = blocks.owner[h.instanceId]; return o >= 0 ? buildings[o] : null; }
  const own = h.object.userData.owners; if (!own) return null;
  const v = h.faceIndex * 3; let lo = 0, hi = own.length - 1, r = -1;
  while (lo <= hi) { const m = (lo + hi) >> 1; if (own[m][0] <= v) { r = m; lo = m + 1; } else hi = m - 1; }
  return r >= 0 ? buildings[own[r][1]] : null;
}
let hoverT = 0;
canvas.addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse' || e.buttons || laser.drawing) { $('hover').hidden = true; return; }
  const now = performance.now(); if (now - hoverT < 90) return; hoverT = now;
  ndc.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const b = buildingFromHit(ray.intersectObjects([...intactGroup.children, blocks.mesh], false)[0]);
  const el = $('hover');
  if (!b || b.gone) { el.hidden = true; return; }
  const left = b.vox ? Math.round(b.alive / b.vol * 100) : 100;
  el.innerHTML = `<b>${b.name || (b.site ? CFG.company : T('hover')[0])}</b><span>${b.site ? CFG.company + ' · ' : ''}${T('hover.1', Math.round(b.h), left)}</span>`;
  el.style.transform = `translate(${e.clientX + 14}px,${e.clientY + 14}px)`; el.hidden = false;
});
canvas.addEventListener('pointerleave', () => ($('hover').hidden = true));

// ───────────────────────── 루프 ─────────────────────────
let lastT = performance.now(), hudT = 0, shadowSkip = 0;
// 해상도 자동 조절: 느리면 내리고, 여유 있으면 올림
const DPR_MIN = 0.5;
const dprCap = () => Math.min(devicePixelRatio, QUALITY[qLevel].dprMax, Math.sqrt(QUALITY[qLevel].px / (innerWidth * innerHeight)));
let dpr = dprCap(), dprAcc = 0, dprN = 0, slowSec = 0;
renderer.setPixelRatio(dpr);
function setDpr(v) { v = Math.round(v * 20) / 20; if (v !== dpr) { dpr = v; renderer.setPixelRatio(dpr); renderer.setSize(innerWidth, innerHeight); } }
function adaptDpr(rdt) {
  dprAcc += rdt; dprN++;
  if (dprAcc < 0.75) return;
  const avg = dprAcc / dprN * 1000; dprAcc = 0; dprN = 0;
  if (avg > 21) {
    if (dpr > DPR_MIN + 0.01) setDpr(Math.max(DPR_MIN, dpr * 0.85));
    else if (++slowSec >= 3 && qLevel > 0) { setQuality(qLevel - 1, true); slowSec = 0; }
  } else {
    slowSec = 0;
    if (avg < 12.5 && dpr < dprCap()) setDpr(Math.min(dprCap(), dpr + 0.1));
  }
}
function setQuality(q, auto) {
  qLevel = q; try { localStorage.setItem('smash-q', q); } catch (e) {}
  const Q = QUALITY[q];
  const want = Q.shadow > 0;
  if (sun.castShadow !== want) { sun.castShadow = want; scene.traverse((o) => { if (o.material) [].concat(o.material).forEach((m) => (m.needsUpdate = true)); }); }
  if (want && sun.shadow.mapSize.x !== Q.shadow) { sun.shadow.mapSize.set(Q.shadow, Q.shadow); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; } }
  renderer.shadowMap.needsUpdate = true;
  FXK = Q.fxk;
  setDpr(dprCap());
  const b = document.getElementById('qBtn'); if (b) b.textContent = T('quality', Q.name);
  if (auto) toast(T('qDown', Q.name), 2200);
}
const perfLog = [], renderLog = [];
function frame(now) {
  const c0 = performance.now();
  const rawDt = (now - lastT) / 1000; const rdt = Math.min(0.05, rawDt); lastT = now;
  if (!document.hidden && rawDt < 0.5) adaptDpr(rawDt);
  if (slowT > 0) { slowT -= rdt; timeScale = slowT > 1.2 ? 0.25 : 0.25 + (1.2 - slowT) / 1.2 * 0.75; } else timeScale = 1;
  const dt = rdt * timeScale; simTime += dt;

  camera.position.sub(shakeOff); controls.update();
  shakeOff.set(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1)).multiplyScalar(shakeAmp); camera.position.add(shakeOff);
  shakeAmp *= Math.exp(-rdt * 4.5); if (shakeAmp < 0.02) shakeAmp = 0;

  for (let i = 0; i < fx.length; i++) {
    const f = fx[i]; f.t += dt / f.dur; f.up(Math.min(1, f.t));
    if (f.t >= 1) { fx.splice(i, 1); i--; f.done(); }
  }
  if (quake) {
    quake.t += dt; const k = Math.max(0, 1 - quake.t / quake.dur);
    const a = quake.A * k * (quake.t < 0.3 ? quake.t / 0.3 : 1);
    world.position.set(rnd(-1, 1) * Math.min(2.5, a * 0.3), 0, rnd(-1, 1) * Math.min(2.5, a * 0.3));
    groundU.uQC.value.set(quake.P.x, quake.P.z); groundU.uQT.value = quake.t; groundU.uQA.value = quake.M >= 7.5 ? a : 0;
    trees.sway(quake.t, a); shakeAmp = Math.max(shakeAmp, a * 0.25);
    if (quake.t >= quake.dur) { resettle(quake.P.x, quake.P.z, 400); quake = null; world.position.set(0, 0, 0); groundU.uQA.value = 0; trees.sway(0, 0); }
  }
  debris.update(dt);
  fire.update(dt); smoke.update(dt); confetti.update(dt);
  let n = 0;
  for (const b of buildings) if (b.dirty && n < 4 && simTime - (b.lastCheck || 0) > 0.15) { b.lastCheck = simTime; supportCheck(b); n++; }
  if (fallQueue.length) dropLoose(fallQueue.shift());
  blocks.flush(); rubbleL.flush();
  decayHeat(dt);

  if (simTime - lastHit > 1.3) style = Math.max(0, style - dt * (50 + style * 0.14));
  if (pend > 0 && (simTime - pendT > 0.18)) { floatText(pendPos.clone().setY(pendPos.y + 6), `+${NUM(Math.round(pend))}`, '#ffe9a8'); pend = 0; pendT = simTime; }

  // 떠다니는 글씨
  for (let i = 0; i < floaters.length; i++) {
    const f = floaters[i]; f.t += rdt;
    if (f.t > 1.6) { f.el.remove(); floaters.splice(i, 1); i--; continue; }
    const p = f.pos.clone(); p.y += f.t * 14; p.project(camera);
    if (!(p.z <= 1 && Math.abs(p.x) <= 1.1 && Math.abs(p.y) <= 1.1)) { f.el.style.opacity = 0; continue; }
    f.el.style.transform = `translate(${(p.x * 0.5 + 0.5) * innerWidth}px, ${(-p.y * 0.5 + 0.5) * innerHeight}px) translate(-50%,-50%) scale(${f.t < 0.12 ? 0.6 + f.t * 3.4 : 1})`;
    f.el.style.opacity = f.t > 1.1 ? (1.6 - f.t) / 0.5 : 1;
  }
  const tg = controls.target;
  const sx = Math.round(tg.x / 20) * 20, sz = Math.round(tg.z / 20) * 20;
  const moving = debris.n > 0 || fx.length > 0 || quake || blocks.hi >= 0 || rubbleL.hi >= 0 || sx !== sun.target.position.x || sz !== sun.target.position.z;
  if (moving) { shadowSkip = (shadowSkip + 1) % (IS_MOBILE ? 2 : 1); if (!shadowSkip) renderer.shadowMap.needsUpdate = true; }
  sun.target.position.set(sx, 0, sz);
  sun.position.copy(sun.target.position).addScaledVector(SUN_DIR, 900);
  const ps = renderer.getDrawingBufferSize(new THREE.Vector2()).y / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
  fire.mat.uniforms.uScale.value = ps; smoke.mat.uniforms.uScale.value = ps; confetti.mat.uniforms.uScale.value = ps;
  sky.position.copy(camera.position);

  hudT += rdt; if (hudT > 0.1) { hudT = 0; hud(); modeTick(); }
  updateLabels();
  const c1 = performance.now();
  if (!BENCH) renderer.render(scene, camera);
  perfLog.push(c1 - c0); renderLog.push(performance.now() - c1); if (renderLog.length > 600) renderLog.shift(); if (perfLog.length > 600) perfLog.shift();
  requestAnimationFrame(frame);
}

// ───────────────────────── 시작 ─────────────────────────
['score', 'rank', 'bar', 'mult', 'rate', 'cnt', 'depth'].forEach((k) => (hudEls[k] = $(`h-${k}`)));
hud();
document.title = `${T('smash', CFG.company)} | ${CFG.series}`;
$('title').textContent = T('smash', CFG.company);
$('series').textContent = CFG.series;
const logoImg = new Image();
{
  const el = $('logo'); el.hidden = false;
  const initials = () => { el.style.background = '#ff6a2b'; el.innerHTML = `<b>${String(CFG.sign || CFG.company).trim().slice(0, 1)}</b>`; };
  if (CFG.logo) {
    el.style.background = CFG.logoBg || '#fff';
    logoImg.alt = CFG.company; logoImg.onerror = initials; logoImg.src = new URL(CFG.logo, document.baseURI).href;
    el.appendChild(logoImg);
  } else initials();
}
$('startTitle').textContent = T('smash', CFG.company);
$('startSeries').textContent = CFG.series;
$('startTag').textContent = CFG.tagline;
$('credit').textContent = T('credit', CFG.place, CFG.company, SITE_COUNT);
buildDock();
$('nightBtn').onclick = () => setNight(!nightOn);
$('menuBtn').onclick = () => $('bottom').classList.toggle('open');
$('labelBtn').onclick = () => { labelsOn = !labelsOn; $('labelBtn').classList.toggle('on', labelsOn); };
$('qBtn').textContent = T('quality', QUALITY[qLevel].name);
document.documentElement.lang = LANG;
document.querySelectorAll('[data-t]').forEach((el) => { const v = T(el.dataset.t); if (typeof v === 'string') el[el.dataset.attr || 'innerHTML'] = v; });
$('qBtn').onclick = () => setQuality((qLevel + 1) % QUALITY.length);
$('hubBtn').href = CFG.hub || '../';
if (PORTAL) $('hubBtn').onclick = (e) => { e.preventDefault(); openPicker(); };
if (SOFTWARE_GL) setTimeout(() => toast(T('noGpu'), 6000), 1500);
$('muteBtn').onclick = toggleMute;
$('resetBtn').onclick = () => location.reload();
$('cardBtn').onclick = makeCard;
$('cardClose').onclick = () => ($('cardModal').hidden = true);
$('rankBtn').onclick = () => openRank();
document.querySelectorAll('.bt').forEach((b) => (b.onclick = () => { boardMode = b.dataset.m; loadBoard(); }));
document.querySelectorAll('.bt').forEach((b, i) => (b.textContent = T('mode.boards')[i]));
$('rankClose').onclick = () => ($('rankModal').hidden = true);
$('submitBtn').onclick = submitScore;
try { $('nick').value = localStorage.getItem('smash-nick') || ''; } catch (e) {}
$('rankAll').href = (CFG.hub || '../') + '#rank';
if (PORTAL) $('rankAll').hidden = true;
['pointerdown', 'touchend', 'keydown'].forEach((ev) => addEventListener(ev, () => { if (!$('start').classList.contains('gone')) return; sfx.init(); }, { capture: true, passive: true }));
document.addEventListener('visibilitychange', () => { if (!document.hidden && sfx.ctx && sfx.ctx.state !== 'running') sfx.ctx.resume(); });
for (const [id, m] of [['startBtn', 't60'], ['demoBtn', 'demolish'], ['freeBtn', 'free']]) $(id).onclick = () => {
  sfx.init(); $('start').classList.add('gone'); startMode(m);
  setTimeout(() => toast(m === 'free' ? T('hint') : (m === 't60' ? T('mode.t60d') : T('mode.demod')), 3500), 400);
};
$('againBtn').onclick = () => location.reload();
// 포털: 결과창에 '다음 회사' — 아직 안 해 본 회사로 바로 이어서(세션 길이)
function nextBtn() {
  if ($('nextBtn')) return;
  const b = document.createElement('button'); b.className = 'btn primary'; b.id = 'nextBtn';
  b.textContent = { ko: '다음 회사 →', ja: '次の会社 →', zh: '下一家公司 →', vi: 'Công ty tiếp →' }[LANG] || 'Next company →';
  $('againBtn').after(b);
  b.onclick = async () => {
    let seen = []; try { seen = JSON.parse(localStorage.getItem('smash-seen') || '[]'); } catch (e) {}
    let list = []; try { list = await (await fetch(new URL('../companies.json', location.href))).json(); } catch (e) { return openPicker(); }
    const fresh = list.filter((c) => c.code !== CFG.code && !seen.includes(c.code));
    const pool = fresh.length ? fresh : list.filter((c) => c.code !== CFG.code);
    location.href = `../${pool[Math.floor(Math.random() * pool.length)].code}/index.html`;
  };
}
if (PORTAL) try { const k = 'smash-seen', a = JSON.parse(localStorage.getItem(k) || '[]'); if (!a.includes(CFG.code)) localStorage.setItem(k, JSON.stringify([...a, CFG.code])); } catch (e) {}
window.__sfxState = () => sfx.ctx && sfx.ctx.state;
window.__smash = { cam: (pos, tgt) => { camera.position.set(...pos); controls.target.set(...tgt); controls.update(); }, audio: () => (sfx.ctx ? sfx.ctx.state : 'none'), startMode, mode: () => ({ MODE, gameOver, finishMs }), renderNow: () => { renderer.shadowMap.needsUpdate = true; renderer.render(scene, camera); }, rubbleStats: () => { let mx = 0, hi = 0, fl = 0; const L = rubbleL; for (let k = 0; k < L.high; k++) { if (!L.alive[k]) continue; const x = L.pos[k * 3], z = L.pos[k * 3 + 2], half = (L.size[k * 3] + L.size[k * 3 + 1] + L.size[k * 3 + 2]) / 6, h = L.pos[k * 3 + 1] - half * 0.8 - groundH(x, z); /* 조각 바닥 높이 */ if (h > mx) mx = h; if (h > 20) hi++; if (L.pos[k * 3 + 1] - half * 0.8 > floorAt(x, z) + 3) fl++; } return { live: L.live, maxH: +mx.toFixed(1), over20: hi, floating: fl }; }, screenOf: (x, y, z) => { const v = new THREE.Vector3(x, y, z).project(camera); return { x: (v.x * 0.5 + 0.5) * innerWidth, y: (-v.y * 0.5 + 0.5) * innerHeight }; }, dpr: () => dpr, perfLog, renderLog, info: () => ({ calls: renderer.info.render.calls, tris: renderer.info.render.triangles, progs: renderer.info.programs.length }), simTime: () => simTime, actV: (t, p) => { const P = new THREE.Vector3(...p); if (t === 'quake') quakeM = 9; act(P); }, buildings, blocks, debris, rubbleL, act, pickAt, selectTool, setNight, state: () => ({ score, style, destroyedSite, collapsedSite, deepest, debris: debris.n, blocks: blocks.live, rubble: rubbleL.live, fx: fx.length }) };
// 포털 빌드: 다른 회사 고르기 창(../companies.json)
async function openPicker() {
  let box = $('pickModal');
  if (!box) {
    box = document.createElement('div'); box.id = 'pickModal';
    box.innerHTML = `<div class="box panel"><div class="rhead"><b>${escH(T('btn.hub').replace(/\s*→\s*$/, ''))}</b><button class="btn" id="pickClose">${escH(T('btn.close'))}</button></div><input id="pickQ" autocomplete="off" placeholder="🔍"><div id="pickList"></div></div>`;
    document.body.appendChild(box);
    $('pickClose').onclick = () => (box.hidden = true);
    box.onclick = (e) => { if (e.target === box) box.hidden = true; };
    let list = [];
    try { list = await (await fetch(new URL('../companies.json', location.href))).json(); } catch (e) {}
    const nm = (c) => (LANG === c.lang ? c.n : c.en) || c.n;
    const draw = () => {
      const q = $('pickQ').value.trim().toLowerCase();
      $('pickList').innerHTML = list.filter((c) => !q || (c.n + ' ' + c.en + ' ' + c.a).toLowerCase().includes(q))
        .map((c) => `<a class="pk${c.code === CFG.code ? ' on' : ''}" href="../${c.code}/index.html"><span>${c.f}</span><b>${escH(nm(c))}</b><i>${escH(LANG === c.lang ? c.p : (c.pe || c.p))}</i></a>`).join('');
    };
    $('pickQ').oninput = draw; draw();
  }
  box.hidden = false;
}
function warmup() {
  const P = new THREE.Vector3(0, -500, 0);
  fireball(P.x, P.y, P.z, 1, 0.01); ring(P.x, P.y, P.z, 1, 0.01);
  fire.spawn(0, -500, 0, 0, 0, 0, 1, 0.01, [1, 1, 1], [1, 1, 1]); smoke.spawn(0, -500, 0, 0, 0, 0, 1, 0.01, [1, 1, 1], [1, 1, 1]);
  const tmp = [new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ map: boardTex })),
    new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: '#30353b', metalness: 0.5, roughness: 0.4 })),
    new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: '#ffb36b' })),
    new THREE.Line(new THREE.BufferGeometry().setFromPoints([P, P]), new THREE.LineDashedMaterial({ color: '#21d07a', dashSize: 6, gapSize: 4, depthTest: false }))];
  tmp.push(meteorMesh());
  tmp.forEach((m) => { m.position.copy(P); world.add(m); });
  beam.visible = true; debris.mesh.count = 1; rubbleL.mesh.count = Math.max(1, rubbleL.mesh.count); blocks.mesh.count = Math.max(1, blocks.mesh.count);
  renderer.compile(scene, camera);
  beam.visible = false; debris.mesh.count = 0;
  tmp.forEach((m) => { world.remove(m); m.traverse((o) => o.geometry && o.geometry.dispose()); });
}
warmup();
requestAnimationFrame(frame);
