// HLD Prep — App Logic
const STORAGE_KEY = 'hld-prep-progress';
let completedWeeks = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

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
    s1.setAttribute('offset', '0%'); s1.setAttribute('stop-color', '#4285F4');
    const s2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    s2.setAttribute('offset', '100%'); s2.setAttribute('stop-color', '#34A853');
    lg.append(s1, s2); defs.append(lg); svg.prepend(defs);
})();

// ===== WEEK TOGGLE =====
function toggleWeek(weekNum) {
    const idx = completedWeeks.indexOf(weekNum);
    if (idx > -1) {
        completedWeeks.splice(idx, 1);
    } else {
        completedWeeks.push(weekNum);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedWeeks));
    updateWeekUI(weekNum);
    updateStats();
}

function updateWeekUI(weekNum) {
    const card = document.getElementById(`week-${weekNum}`);
    const btn = document.getElementById(`wc-${weekNum}`);
    const isDone = completedWeeks.includes(weekNum);
    if (card) card.classList.toggle('completed', isDone);
    if (btn) btn.classList.toggle('done', isDone);
}

function updateStats() {
    const count = completedWeeks.length;
    const pct = Math.round((count / 8) * 100);

    document.getElementById('weeksCompleted').textContent = count;
    document.getElementById('progressPct').textContent = pct + '%';

    const circumference = 2 * Math.PI * 52;
    const offset = circumference - (pct / 100) * circumference;
    document.getElementById('progressRing').style.strokeDashoffset = offset;
}

function initWeeks() {
    for (let w = 1; w <= 8; w++) {
        updateWeekUI(w);
    }
    updateStats();
}

// ===== DAYS UNTIL AUG 1 2026 =====
function updateDaysLeft() {
    const target = new Date('2026-08-01T00:00:00');
    const now = new Date();
    const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
    const el = document.getElementById('daysLeft');
    if (el) el.textContent = diff > 0 ? diff : '0';
}

// ===== TAB SWITCHING =====
const tabs = {
    roadmap: document.getElementById('view-roadmap'),
    cheatsheet: document.getElementById('view-cheatsheet'),
    framework: document.getElementById('view-framework'),
};

document.getElementById('tabNav').addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    const tab = btn.dataset.tab;
    if (!tabs[tab]) return;

    // Update buttons
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update views
    Object.values(tabs).forEach(v => v.classList.add('hidden'));
    tabs[tab].classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== QPS CALCULATOR =====
function formatNumber(n) {
    if (n >= 1e15) return (n / 1e15).toFixed(2) + ' PB';
    if (n >= 1e12) return (n / 1e12).toFixed(2) + ' TB';
    if (n >= 1e9) return (n / 1e9).toFixed(2) + ' GB';
    if (n >= 1e6) return (n / 1e6).toFixed(2) + ' MB';
    if (n >= 1e3) return (n / 1e3).toFixed(2) + ' KB';
    return n.toFixed(0) + ' B';
}

function formatQps(n) {
    if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M QPS';
    if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K QPS';
    return Math.round(n) + ' QPS';
}

function formatBandwidth(bytesPerSec) {
    const mbps = bytesPerSec / (1024 * 1024);
    if (mbps >= 1000) return (mbps / 1000).toFixed(2) + ' GB/s';
    if (mbps >= 1) return mbps.toFixed(1) + ' MB/s';
    return (bytesPerSec / 1024).toFixed(1) + ' KB/s';
}

function runCalculator() {
    const dau = parseFloat(document.getElementById('calcDau').value) || 0;
    const req = parseFloat(document.getElementById('calcReq').value) || 0;
    const sizeKb = parseFloat(document.getElementById('calcSize').value) || 0;

    const avgQps = (dau * req) / 100000;
    const peakQps = avgQps * 2;
    const dailyDataBytes = dau * req * (sizeKb * 1024);
    const totalStorage = dailyDataBytes * 365 * 5;
    const bandwidthBytesPerSec = peakQps * (sizeKb * 1024);

    document.getElementById('resQps').textContent = formatQps(avgQps);
    document.getElementById('resPeakQps').textContent = formatQps(peakQps);
    document.getElementById('resStorage').textContent = formatNumber(totalStorage);
    document.getElementById('resBandwidth').textContent = formatBandwidth(bandwidthBytesPerSec);
}

// Wire up calculator
['calcDau', 'calcReq', 'calcSize'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', runCalculator);
});

// ===== SCROLL PROGRESS & BACK TO TOP =====
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    document.getElementById('progressBar').style.width = progress + '%';

    const btn = document.getElementById('backToTop');
    btn.classList.toggle('visible', scrollTop > 400);
});

document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== INIT =====
initWeeks();
updateDaysLeft();
runCalculator();
