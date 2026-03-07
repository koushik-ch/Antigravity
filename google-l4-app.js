// Google L4 DSA Prep — App Logic
// Uses G_DATA from google-l4-data.js

const STORAGE_KEY = 'google-l4-solved';

// ===== STATE =====
let solved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
let revisits = JSON.parse(localStorage.getItem(STORAGE_KEY+'_revisits') || '{}');
let notes = JSON.parse(localStorage.getItem(STORAGE_KEY+'_notes') || '{}');
let currentTier = 'all';
let currentCategory = 'all';

// ===== DOM REFS =====
const mainContent = document.getElementById('mainContent');
const searchInput = document.getElementById('searchInput');
const backToTopBtn = document.getElementById('backToTop');
const progressBar = document.getElementById('progressBar');
const progressRing = document.getElementById('progressRing');
const progressPct = document.getElementById('progressPct');
const solvedCountEl = document.getElementById('solvedCount');
const totalCountEl = document.getElementById('totalCount');
const tierFilter = document.getElementById('tierFilter');

// ===== SVG GRADIENT FOR RING =====
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
    progressRing.style.stroke = 'url(#ringGrad)';
})();

// ===== STUDY ORDER =====
const STUDY_ORDER = [
    1, 2, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 21, 25, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 40, 41,
    42, 43, 44, 45, 59, 60, 61, 63,
    65, 69, 64, 66, 67, 68,
    46, 47, 48, 49, 50,
    53, 57, 54, 56, 58,
    82, 85, 79, 80, 81,
    93, 94,
    3, 4, 11, 17, 22, 26, 27, 28, 29, 38, 39, 51, 52, 55, 62,
    74, 75, 76, 77, 78,
    83, 84, 86, 87, 88, 89, 90, 91, 92,
    5, 7, 70, 71, 72, 73
];

function getStudyOrder(patternNum) {
    const idx = STUDY_ORDER.indexOf(patternNum);
    return idx >= 0 ? idx + 1 : 99;
}

// ===== HELPERS =====
function escapeHtml(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function highlightText(text, q) {
    if (!q) return escapeHtml(text);
    const escaped = escapeHtml(text);
    const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return escaped.replace(regex, '<mark>$1</mark>');
}

function getLeetCodeUrl(problemStr) {
    const name = problemStr.replace(/^\d+\.\s*/, '').trim();
    const slug = name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    return `https://leetcode.com/problems/${slug}/`;
}

function parseProblemNumber(str) {
    const m = str.match(/^(\d+)\./);
    return m ? m[1] : '';
}

function problemKey(patternNum, problemText) {
    return `${patternNum}::${problemText}`;
}

function toggleSolved(patternNum, problemText) {
    const key = problemKey(patternNum, problemText);
    if (solved[key]) delete solved[key];
    else solved[key] = 1;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(solved));
    updateProgress();
    // Update specific checkbox and tag visuals
    const checkbox = document.querySelector(`[data-key="${CSS.escape(key)}"]`);
    if (checkbox) {
        checkbox.classList.toggle('checked');
        checkbox.textContent = checkbox.classList.contains('checked') ? '✓' : '';
        checkbox.closest('.problem-tag').classList.toggle('solved');
    }
    // Update card progress bar
    updateCardProgress(patternNum);
}

function updateCardProgress(patternNum) {
    const card = document.querySelector(`[data-pnum="${patternNum}"]`);
    if (!card) return;
    const total = card.querySelectorAll('.problem-tag').length;
    const done = card.querySelectorAll('.problem-tag.solved').length;
    const fill = card.querySelector('.card-progress-fill');
    if (fill) fill.style.width = total > 0 ? (done / total * 100) + '%' : '0%';
}

// ===== PROGRESS =====
function updateProgress() {
    let total = 0;
    let done = 0;
    let visiblePatterns = 0;

    G_DATA.forEach(cat => {
        if (currentCategory !== 'all' && cat.id !== currentCategory) return;
        cat.patterns.forEach(p => {
            if (currentTier !== 'all' && p.tier !== currentTier) return;
            visiblePatterns++;
            p.problems.forEach(pr => {
                total++;
                if (solved[problemKey(p.num, pr.t)]) done++;
            });
        });
    });

    const pct = total > 0 ? Math.round(done / total * 100) : 0;

    progressPct.textContent = pct + '%';
    solvedCountEl.textContent = done;
    totalCountEl.textContent = total;

    const patternCountEl = document.getElementById('patternCount');
    if (patternCountEl) patternCountEl.textContent = visiblePatterns;

    const circumference = 2 * Math.PI * 52;
    const offset = circumference - (pct / 100) * circumference;
    progressRing.style.strokeDashoffset = offset;
}

// ===== CATEGORY NAV =====
function initNav() {
    const track = document.querySelector('.nav-track');
    G_DATA.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'nav-pill';
        btn.dataset.category = cat.id;
        btn.textContent = `${cat.icon} ${cat.title.replace(' Patterns', '')}`;
        btn.addEventListener('click', () => {
            currentCategory = cat.id;
            track.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            renderCategories(searchInput.value);
            updateProgress();
            document.getElementById(`cat-${cat.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        track.appendChild(btn);
    });
    track.querySelector('[data-category="all"]').addEventListener('click', () => {
        currentCategory = 'all';
        track.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
        track.querySelector('[data-category="all"]').classList.add('active');
        renderCategories(searchInput.value);
        updateProgress();
    });
}

// ===== TIER FILTER =====
tierFilter.addEventListener('click', (e) => {
    const btn = e.target.closest('.tier-btn');
    if (!btn) return;
    currentTier = btn.dataset.tier;
    tierFilter.querySelectorAll('.tier-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCategories(searchInput.value);
    updateProgress();
});

// ===== SEARCH =====
searchInput.addEventListener('input', () => renderCategories(searchInput.value));
document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); searchInput.focus(); }
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = ''; searchInput.blur(); renderCategories();
    }
});

// ===== RENDER =====
function renderCategories(query = '') {
    const q = query.toLowerCase().trim();
    let html = '';
    const catColors = {};
    let catIdx = 0;

    G_DATA.forEach((cat) => {
        if (currentCategory !== 'all' && cat.id !== currentCategory) { catIdx++; return; }
        catColors[cat.id] = catIdx;

        let filteredPatterns = cat.patterns.filter(p => {
            if (currentTier !== 'all' && p.tier !== currentTier) return false;
            if (!q) return true;
            if (p.name.toLowerCase().includes(q)) return true;
            if (p.problems.some(prob => prob.t.toLowerCase().includes(q))) return true;
            if (cat.title.toLowerCase().includes(q)) return true;
            return false;
        });

        if (filteredPatterns.length === 0) { catIdx++; return; }

        let categoryProblemCount = 0;
        filteredPatterns.forEach(p => categoryProblemCount += p.problems.length);

        html += `<section class="category-section visible cat-color-${catIdx}" id="cat-${cat.id}" data-category="${cat.id}">
            <div class="category-header"><div class="category-icon">${cat.icon}</div>
            <h2 class="category-title">${cat.number}. ${highlightText(cat.title, q)}</h2>
            <span class="category-count">${filteredPatterns.length} pattern${filteredPatterns.length !== 1 ? 's' : ''} • ${categoryProblemCount} problem${categoryProblemCount !== 1 ? 's' : ''}</span></div>
            <div class="patterns-grid">
            ${filteredPatterns.map(p => {
            const tierLabel = p.tier === 'must' ? 'Must-Solve' : p.tier === 'important' ? 'Important' : 'Good-to-Know';
            const freqLabel = p.freq === 'high' ? '🔥 High Freq' : p.freq === 'medium' ? '📊 Med Freq' : '📉 Low Freq';
            const order = getStudyOrder(p.num);
            const solvedInPattern = p.problems.filter(pr => solved[problemKey(p.num, pr.t)]).length;
            const cardPct = p.problems.length > 0 ? (solvedInPattern / p.problems.length * 100) : 0;

            const filteredProblems = q ? p.problems.filter(pr => pr.t.toLowerCase().includes(q) || p.name.toLowerCase().includes(q) || cat.title.toLowerCase().includes(q)) : p.problems;

            return `<div class="pattern-card" data-pattern="${p.num}" data-pnum="${p.num}">
                    <div class="study-order">#${order}</div>
                    <div class="pattern-card-header" onclick="this.parentElement.classList.toggle('collapsed')">
                        <div class="pattern-card-header-text">
                            <span class="pattern-number">${p.num}</span>
                            <span class="tier-badge ${p.tier}">${tierLabel}</span>
                            <span class="google-freq ${p.freq}">${freqLabel}</span>
                            <div class="pattern-name">${highlightText(p.name, q)}</div>
                            <span class="problem-count-badge">📝 ${p.problems.length} problem${p.problems.length !== 1 ? 's' : ''} · ${solvedInPattern} done</span>
                        </div>
                        <span class="toggle-arrow">▼</span>
                    </div>
                    <div class="problem-list">
                        ${filteredProblems.map(pr => {
                const num = parseProblemNumber(pr.t);
                const key = problemKey(p.num, pr.t);
                const isSolved = solved[key];
                const diffClass = pr.d === 'E' ? 'easy' : pr.d === 'M' ? 'medium' : 'hard';
                const diffText = pr.d === 'E' ? 'Easy' : pr.d === 'M' ? 'Med' : 'Hard';
                return `<a href="${getLeetCodeUrl(pr.t)}" target="_blank" rel="noopener" class="problem-tag ${isSolved ? 'solved' : ''}" onclick="event.stopPropagation()">
                                <span class="problem-check ${isSolved ? 'checked' : ''}" data-key="${escapeHtml(key)}" onclick="event.preventDefault();event.stopPropagation();toggleSolved(${p.num},'${pr.t.replace(/'/g, "\\'")}');">${isSolved ? '✓' : ''}</span>
                                ${num ? `<span class="problem-num">${num}.</span>` : ''}${highlightText(pr.t.replace(/^\d+\.\s*/, ''), q)}
                                <span class="diff-badge ${diffClass}">${diffText}</span>
                            </a>`;
            }).join('')}
                    </div>
                    <div class="card-progress"><div class="card-progress-fill" style="width:${cardPct}%"></div></div>
                </div>`;
        }).join('')}
            </div></section>`;
        catIdx++;
    });

    if (!html) {
        html = `<div class="no-results"><div class="no-results-icon">🔍</div><h3>No patterns found</h3><p>Try adjusting your search or tier filter.</p></div>`;
    }
    mainContent.innerHTML = html;

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.05 });
    document.querySelectorAll('.category-section').forEach(s => observer.observe(s));
}

// ===== SCROLL HANDLERS =====
window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 500);
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== CURSOR FOLLOWING RADIANT =====
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.pattern-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
        card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
    });
});

// ===== INIT =====
initNav();
renderCategories();
updateProgress();
