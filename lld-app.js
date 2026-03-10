// LLD Prep — App Logic
const STORAGE_KEY = 'lld-prep-progress';
let completedWeeks = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
const TOTAL_WEEKS = 4;

// ===== PROGRESS RING GRADIENT =====
(function addRingGradient() {
    const svg = document.querySelector('.progress-ring');
    if (!svg) return;
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const lg = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    lg.setAttribute('id', 'ringGrad');
    lg.setAttribute('x1', '0%'); lg.setAttribute('y1', '0%');
    lg.setAttribute('x2', '100%'); lg.setAttribute('y2', '100%');
    const s1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    s1.setAttribute('offset', '0%'); s1.setAttribute('stop-color', '#F59E0B');
    const s2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    s2.setAttribute('offset', '100%'); s2.setAttribute('stop-color', '#EF4444');
    lg.append(s1, s2); defs.append(lg); svg.prepend(defs);
})();

// ===== WEEK TOGGLE =====
function toggleWeek(weekNum) {
    const idx = completedWeeks.indexOf(weekNum);
    if (idx > -1) completedWeeks.splice(idx, 1);
    else completedWeeks.push(weekNum);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedWeeks));
    updateWeekUI(weekNum);
    updateStats();
}

function updateWeekUI(weekNum) {
    const card = document.getElementById(`week-${weekNum}`);
    const btn = document.getElementById(`wc-${weekNum}`);
    const done = completedWeeks.includes(weekNum);
    if (card) card.classList.toggle('completed', done);
    if (btn) btn.classList.toggle('done', done);
}

function updateStats() {
    const count = completedWeeks.length;
    const pct = Math.round((count / TOTAL_WEEKS) * 100);
    const el = document.getElementById('weeksCompleted');
    const pEl = document.getElementById('progressPct');
    if (el) el.textContent = count;
    if (pEl) pEl.textContent = pct + '%';
    const circumference = 2 * Math.PI * 52;
    const offset = circumference - (pct / 100) * circumference;
    const ring = document.getElementById('progressRing');
    if (ring) ring.style.strokeDashoffset = offset;
}

function initWeeks() {
    for (let w = 1; w <= TOTAL_WEEKS; w++) updateWeekUI(w);
    updateStats();
}

// ===== TAB SWITCHING =====
const tabs = {
    roadmap: document.getElementById('view-roadmap'),
    patterns: document.getElementById('view-patterns'),
    framework: document.getElementById('view-framework'),
};

document.getElementById('tabNav').addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    const tab = btn.dataset.tab;
    if (!tabs[tab]) return;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    Object.values(tabs).forEach(v => { if (v) v.classList.add('hidden'); });
    tabs[tab].classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SCROLL & BACK TO TOP =====
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    document.getElementById('progressBar').style.width = (docH > 0 ? (scrollTop / docH) * 100 : 0) + '%';
    document.getElementById('backToTop').classList.toggle('visible', scrollTop > 400);
});

document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== INIT =====
initWeeks();
