// =============================================
// THITA PATTERNS — App Logic v2.0
// With progress tracking, difficulty badges, checkboxes
// =============================================

const STORAGE_KEY = 'topicwise-solved';

// ===== DATA (loaded from topicwise-data.js) =====
// Uses TOPICWISE_DATA

// ===== STATE =====
let solved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
let currentCategory = 'all';

// ===== DOM REFS =====
const mainContent = document.getElementById('mainContent');
const categoryNav = document.getElementById('categoryNav');
const navTrack = categoryNav.querySelector('.nav-track');
const searchInput = document.getElementById('searchInput');
const backToTopBtn = document.getElementById('backToTop');
const progressBar = document.getElementById('progressBar');
const progressRing = document.getElementById('progressRing');
const progressPct = document.getElementById('progressPct');
const solvedCountEl = document.getElementById('solvedCount');
const totalCountEl = document.getElementById('totalCount');

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
    s1.setAttribute('offset', '0%'); s1.setAttribute('stop-color', '#7c6cf0');
    const s2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    s2.setAttribute('offset', '100%'); s2.setAttribute('stop-color', '#06b6d4');
    lg.append(s1, s2); defs.append(lg); svg.prepend(defs);
    progressRing.style.stroke = 'url(#ringGrad)';
})();

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
    // Update count text
    const countBadge = card.querySelector('.problem-count-badge');
    if (countBadge) {
        const totalProblems = card.querySelectorAll('.problem-tag').length;
        countBadge.textContent = `📝 ${totalProblems} problem${totalProblems !== 1 ? 's' : ''} · ${done} done`;
    }
}

// ===== PROGRESS =====
function updateProgress() {
    let total = 0;
    let done = 0;
    let visiblePatterns = 0;

    TOPICWISE_DATA.forEach(cat => {
        if (currentCategory !== 'all' && cat.id !== currentCategory) return;
        cat.patterns.forEach(p => {
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
    TOPICWISE_DATA.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'nav-pill';
        btn.dataset.category = cat.id;
        btn.textContent = `${cat.icon} ${cat.title.replace(' Patterns', '').replace(/\(.*\)/, '').trim()}`;
        btn.addEventListener('click', () => {
            currentCategory = cat.id;
            navTrack.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            renderCategories(searchInput.value);
            updateProgress();
            document.getElementById(`cat-${cat.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        navTrack.appendChild(btn);
    });
    navTrack.querySelector('[data-category="all"]').addEventListener('click', () => {
        currentCategory = 'all';
        navTrack.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
        navTrack.querySelector('[data-category="all"]').classList.add('active');
        renderCategories(searchInput.value);
        updateProgress();
    });
}

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
    let catIdx = 0;

    TOPICWISE_DATA.forEach((cat) => {
        if (currentCategory !== 'all' && cat.id !== currentCategory) { catIdx++; return; }

        let filteredPatterns = cat.patterns.filter(p => {
            if (!q) return true;
            if (p.name.toLowerCase().includes(q)) return true;
            if (p.problems.some(prob => prob.t.toLowerCase().includes(q))) return true;
            if (cat.title.toLowerCase().includes(q)) return true;
            return false;
        });

        if (filteredPatterns.length === 0) { catIdx++; return; }

        let categoryProblemCount = 0;
        filteredPatterns.forEach(p => categoryProblemCount += p.problems.length);

        html += `<section class="category-section visible cat-color-${catIdx % 15}" id="cat-${cat.id}" data-category="${cat.id}">
            <div class="category-header"><div class="category-icon">${cat.icon}</div>
            <h2 class="category-title">${cat.number}. ${highlightText(cat.title, q)}</h2>
            <span class="category-count">${filteredPatterns.length} pattern${filteredPatterns.length !== 1 ? 's' : ''} • ${categoryProblemCount} problem${categoryProblemCount !== 1 ? 's' : ''}</span></div>
            <div class="patterns-grid">
            ${filteredPatterns.map(p => {
            const solvedInPattern = p.problems.filter(pr => solved[problemKey(p.num, pr.t)]).length;
            const cardPct = p.problems.length > 0 ? (solvedInPattern / p.problems.length * 100) : 0;

            const filteredProblems = q ? p.problems.filter(pr => pr.t.toLowerCase().includes(q) || p.name.toLowerCase().includes(q) || cat.title.toLowerCase().includes(q)) : p.problems;

            return `<div class="pattern-card" data-pattern="${p.num}" data-pnum="${p.num}">
                    <div class="pattern-card-header" onclick="this.parentElement.classList.toggle('collapsed')">
                        <div class="pattern-card-header-text">
                            <span class="pattern-number">${p.num}</span>
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
        html = `<div class="no-results"><div class="no-results-icon">🔍</div><h3>No patterns found</h3><p>Try adjusting your search term.</p></div>`;
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
