// ============================================
// Firebase Cloud Sync Module for Combined LeetCode Tracker
// ============================================
// Self-contained module: injects its own styles, UI, and sync logic.
// Uses Firebase Realtime Database with passphrase-based identification.
//
// SETUP:
//   1. Go to https://console.firebase.google.com/
//   2. Create a new project (free Spark plan)
//   3. Add a Web App (Project Settings > General > Your apps)
//   4. Copy the firebaseConfig object below
//   5. Go to Realtime Database > Create Database > Start in test mode
//   6. Done!

(function () {
    'use strict';

    // =============================================
    // 🔧 FIREBASE CONFIG — REPLACE WITH YOUR OWN
    // =============================================
    const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCjEQ50AIbVpDociFjy7gFZ9JztFH0rNaA",
  authDomain: "dsa-tracker-42a99.firebaseapp.com",
  databaseURL: "https://dsa-tracker-42a99-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dsa-tracker-42a99",
  storageBucket: "dsa-tracker-42a99.firebasestorage.app",
  messagingSenderId: "78939554451",
  appId: "1:78939554451:web:16fd9f30bb0ebb91938366"
};

    // ===== CONSTANTS =====
    const SYNC_ID_KEY = 'combined-sync-id';
    const SYNC_PHRASE_KEY = 'combined-sync-phrase';
    // Must match the keys used in combined-app.js
    const SK = 'combined-solved';
    const SK_REVISITS = SK + '_revisits';
    const SK_NOTES = SK + '_notes';
    const SK_CUSTOM = SK + '_custom_revisits';
    const SK_TRACKED = SK + '_tracked_done';
    const SK_HISTORY = SK + '_history';

    // ===== CHECK FIREBASE SDK =====
    if (typeof firebase === 'undefined') {
        console.warn('[Sync] Firebase SDK not loaded. Cloud sync disabled.');
        return;
    }

    // ===== CHECK CONFIG =====
    if (!FIREBASE_CONFIG.apiKey || !FIREBASE_CONFIG.databaseURL) {
        console.warn('[Sync] Firebase config not set. Update firebase-sync.js with your Firebase credentials.');
        injectStyles();
        injectDisabledUI();
        return;
    }

    // ===== INIT FIREBASE =====
    try {
        firebase.initializeApp(FIREBASE_CONFIG);
    } catch (e) {
        if (!/duplicate-app/.test(e.code || '')) {
            console.error('[Sync] Firebase init error:', e);
            return;
        }
    }
    const db = firebase.database();

    // ===== STATE =====
    let syncUserId = localStorage.getItem(SYNC_ID_KEY) || null;
    let isSyncing = false;

    // ===== INJECT EVERYTHING =====
    injectStyles();
    injectSyncUI();

    // ===== SHA-256 =====
    async function sha256(message) {
        const buf = new TextEncoder().encode(message);
        const hash = await crypto.subtle.digest('SHA-256', buf);
        return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // ===== DEBOUNCE =====
    function debounce(fn, ms) {
        let t;
        return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
    }

    // ===== HELPERS =====
    function esc(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // Firebase may convert arrays with gaps to objects — normalize back
    function ensureArray(val) {
        if (Array.isArray(val)) return val;
        if (val && typeof val === 'object') return Object.values(val);
        return [];
    }

    // Firebase RTDB forbids dots (.) in object keys, so we store data as
    // JSON strings. This helper parses a field that might be a JSON string
    // (new format) or a raw object/array (legacy format).
    function parseJsonField(val, fallback) {
        if (typeof val === 'string') {
            try { return JSON.parse(val); } catch (e) { return fallback; }
        }
        if (val !== null && val !== undefined) return val;
        return fallback;
    }

    function getUserRef() {
        return syncUserId ? db.ref('users/' + syncUserId) : null;
    }

    // ===== LOCAL DATA =====
    function getLocalData() {
        return {
            solved: JSON.parse(localStorage.getItem(SK) || '{}'),
            revisits: JSON.parse(localStorage.getItem(SK_REVISITS) || '{}'),
            notes: JSON.parse(localStorage.getItem(SK_NOTES) || '{}'),
            customRevisits: JSON.parse(localStorage.getItem(SK_CUSTOM) || '[]'),
            trackedDone: JSON.parse(localStorage.getItem(SK_TRACKED) || '{}'),
            revisionHistory: JSON.parse(localStorage.getItem(SK_HISTORY) || '[]')
        };
    }

    // Apply merged data to both localStorage and the live app state variables
    function applyData(data) {
        var s  = data.solved || {};
        var r  = data.revisits || {};
        var n  = data.notes || {};
        var cr = ensureArray(data.customRevisits);
        var td = data.trackedDone || {};
        var rh = ensureArray(data.revisionHistory);

        // Persist to localStorage
        localStorage.setItem(SK, JSON.stringify(s));
        localStorage.setItem(SK_REVISITS, JSON.stringify(r));
        localStorage.setItem(SK_NOTES, JSON.stringify(n));
        localStorage.setItem(SK_CUSTOM, JSON.stringify(cr));
        localStorage.setItem(SK_TRACKED, JSON.stringify(td));
        localStorage.setItem(SK_HISTORY, JSON.stringify(rh));

        // Update live app state (mutate in-place so existing references stay valid)
        try {
            // solved
            if (typeof solved !== 'undefined') {
                Object.keys(solved).forEach(function (k) { delete solved[k]; });
                Object.assign(solved, s);
            }
            // revisits
            if (typeof revisits !== 'undefined') {
                Object.keys(revisits).forEach(function (k) { delete revisits[k]; });
                Object.assign(revisits, r);
            }
            // notes
            if (typeof notes !== 'undefined') {
                Object.keys(notes).forEach(function (k) { delete notes[k]; });
                Object.assign(notes, n);
            }
            // customRevisits
            if (typeof customRevisits !== 'undefined' && Array.isArray(customRevisits)) {
                customRevisits.length = 0;
                cr.forEach(function (item) { customRevisits.push(item); });
            }
            // trackedDone
            if (typeof trackedDone !== 'undefined') {
                Object.keys(trackedDone).forEach(function (k) { delete trackedDone[k]; });
                Object.assign(trackedDone, td);
            }
            // revisionHistory
            if (typeof revisionHistory !== 'undefined' && Array.isArray(revisionHistory)) {
                revisionHistory.length = 0;
                rh.forEach(function (item) { revisionHistory.push(item); });
            }
        } catch (e) {
            console.warn('[Sync] Could not update live app state:', e);
        }
    }

    // ===== MERGE STRATEGY =====
    function mergeData(local, cloud) {
        var merged = {};

        // Additive union for solved, revisits, trackedDone
        ['solved', 'revisits', 'trackedDone'].forEach(function (key) {
            var l = local[key] || {};
            var c = cloud[key] || {};
            merged[key] = {};
            // Copy all local keys
            Object.keys(l).forEach(function (k) { if (l[k]) merged[key][k] = l[k]; });
            // Add all cloud keys (union)
            Object.keys(c).forEach(function (k) { if (c[k]) merged[key][k] = c[k]; });
        });

        // Notes: keep both, prefer longer content if conflict
        var ln = local.notes || {};
        var cn = cloud.notes || {};
        merged.notes = {};
        Object.keys(ln).forEach(function (k) { merged.notes[k] = ln[k]; });
        Object.keys(cn).forEach(function (k) {
            if (cn[k] && (!merged.notes[k] || cn[k].length >= merged.notes[k].length)) {
                merged.notes[k] = cn[k];
            }
        });

        // Custom revisits: merge by id, cloud wins on conflict
        var lc = ensureArray(local.customRevisits);
        var cc = ensureArray(cloud.customRevisits);
        var idMap = {};
        lc.forEach(function (r) { idMap[r.id] = r; });
        cc.forEach(function (r) { idMap[r.id] = r; }); // cloud overwrites duplicates
        merged.customRevisits = Object.keys(idMap).map(function (k) { return idMap[k]; });

        // Revision history: merge by id (Problem/Concept Name), cloud wins on conflict
        var lrh = ensureArray(local.revisionHistory);
        var crh = ensureArray(cloud.revisionHistory);
        var rhMap = {};
        lrh.forEach(function (r) { rhMap[r.id || r['Problem/Concept Name']] = r; });
        crh.forEach(function (r) { rhMap[r.id || r['Problem/Concept Name']] = r; }); // cloud overwrites duplicates
        merged.revisionHistory = Object.keys(rhMap).map(function (k) { return rhMap[k]; });

        return merged;
    }

    // ===== SYNC OPERATIONS =====
    async function performSync() {
        if (!syncUserId || isSyncing) return;
        isSyncing = true;
        setSyncStatus('syncing');

        try {
            var ref = getUserRef();
            var snapshot = await ref.once('value');
            var cloudRaw = snapshot.val() || {};

            // Parse cloud data — stored as JSON strings to avoid Firebase
            // key restrictions (dots in keys like "1::1. Two Sum")
            var cloudData = {
                solved: parseJsonField(cloudRaw.solved, {}),
                revisits: parseJsonField(cloudRaw.revisits, {}),
                notes: parseJsonField(cloudRaw.notes, {}),
                customRevisits: ensureArray(parseJsonField(cloudRaw.customRevisits, [])),
                trackedDone: parseJsonField(cloudRaw.trackedDone, {}),
                revisionHistory: ensureArray(parseJsonField(cloudRaw.revisionHistory, []))
            };

            var localData = getLocalData();
            var merged = mergeData(localData, cloudData);

            // Apply locally (updates both localStorage and live state)
            applyData(merged);

            // Push to cloud (as JSON strings to avoid Firebase key restrictions)
            await ref.set({
                solved: JSON.stringify(merged.solved),
                revisits: JSON.stringify(merged.revisits),
                notes: JSON.stringify(merged.notes),
                customRevisits: JSON.stringify(merged.customRevisits),
                trackedDone: JSON.stringify(merged.trackedDone),
                revisionHistory: JSON.stringify(merged.revisionHistory),
                lastUpdated: firebase.database.ServerValue.TIMESTAMP
            });

            // Re-render the app
            reRenderApp();
            setSyncStatus('synced');
        } catch (err) {
            console.error('[Sync] Error during sync:', err);
            setSyncStatus('error');
        } finally {
            isSyncing = false;
        }
    }

    var debouncedPush = debounce(async function () {
        if (!syncUserId) return;
        setSyncStatus('syncing');
        try {
            var localData = getLocalData();
            await getUserRef().set({
                solved: JSON.stringify(localData.solved),
                revisits: JSON.stringify(localData.revisits),
                notes: JSON.stringify(localData.notes),
                customRevisits: JSON.stringify(localData.customRevisits),
                trackedDone: JSON.stringify(localData.trackedDone),
                revisionHistory: JSON.stringify(localData.revisionHistory),
                lastUpdated: firebase.database.ServerValue.TIMESTAMP
            });
            setSyncStatus('synced');
        } catch (err) {
            console.error('[Sync] Push error:', err);
            setSyncStatus('error');
        }
    }, 800);

    // ===== GLOBAL HOOK =====
    // combined-app.js calls this after every state change
    window._pushToCloud = function () {
        if (syncUserId) debouncedPush();
    };

    // ===== CONNECT / DISCONNECT =====
    async function connectWithPassphrase(passphrase) {
        var hash = await sha256(passphrase.trim());
        syncUserId = hash;
        localStorage.setItem(SYNC_ID_KEY, hash);
        localStorage.setItem(SYNC_PHRASE_KEY, passphrase.trim());
        await performSync();
        updateSyncBar();
    }

    function disconnectSync() {
        syncUserId = null;
        localStorage.removeItem(SYNC_ID_KEY);
        localStorage.removeItem(SYNC_PHRASE_KEY);
        updateSyncBar();
        setSyncStatus('disconnected');
    }

    // ===== RE-RENDER APP =====
    function reRenderApp() {
        try {
            if (typeof renderCategories === 'function') {
                var q = document.getElementById('searchInput');
                renderCategories(q ? q.value : '');
            }
            if (typeof updateProgress === 'function') updateProgress();
            if (typeof isRevisitView !== 'undefined' && isRevisitView && typeof renderRevisitView === 'function') {
                renderRevisitView();
            }
        } catch (e) {
            console.warn('[Sync] Re-render error:', e);
        }
    }

    // ===== STYLES =====
    function injectStyles() {
        var style = document.createElement('style');
        style.id = 'sync-module-styles';
        style.textContent = [
            '/* === Cloud Sync Bar === */',
            '.sync-bar{display:flex;align-items:center;justify-content:center;gap:0.75rem;padding:0.6rem 1.2rem;margin:1rem auto 0;max-width:600px;background:var(--bg-panel);border:3px solid #1a1514;border-radius:12px;font-size:0.9rem;font-weight:700;color:#1a1514;box-shadow:4px 4px 0px #1a1514;transition:all .2s ease}',
            '.sync-bar:hover{transform:translate(2px,2px);box-shadow:2px 2px 0px #1a1514}',

            '.sync-indicator{width:12px;height:12px;border-radius:50%;background:#e0e0e0;border:2px solid #1a1514;flex-shrink:0;transition:all .3s ease}',
            '.sync-indicator.synced{background:#40c4aa}',
            '.sync-indicator.syncing{background:#fed154;animation:syncPulse 1s infinite}',
            '.sync-indicator.error{background:#ff4d42}',
            '.sync-indicator.disconnected{background:#e0e0e0}',
            '@keyframes syncPulse{0%,100%{opacity:1}50%{opacity:.35}}',

            '.sync-status-text{font-size:0.85rem;font-weight:700;color:#1a1514}',
            '.sync-id-display{font-family:"JetBrains Mono",monospace;font-size:0.75rem;font-weight:800;color:#1a1514;background:#fef0cb;padding:0.15rem 0.5rem;border:2px solid #1a1514;border-radius:6px}',

            '.sync-connect-btn{background:#fed154;border:3px solid #1a1514;color:#1a1514;padding:0.4rem 1rem;border-radius:8px;font-size:0.85rem;font-weight:800;cursor:pointer;transition:all .2s ease;font-family:inherit;box-shadow:2px 2px 0px #1a1514}',
            '.sync-connect-btn:hover{background:#ff4d42;color:#fff;transform:translate(2px,2px);box-shadow:0px 0px 0px #1a1514}',

            '.sync-actions{display:flex;gap:0.5rem;align-items:center}',
            '.sync-action-btn{background:var(--bg-panel);border:2px solid #1a1514;color:#1a1514;padding:0.3rem 0.65rem;border-radius:6px;font-size:0.8rem;font-weight:700;cursor:pointer;transition:all .2s ease;font-family:inherit;box-shadow:2px 2px 0px #1a1514}',
            '.sync-action-btn:hover{background:#fef0cb;transform:translate(2px,2px);box-shadow:0px 0px 0px #1a1514}',
            '.sync-action-btn.danger:hover{background:#ff4d42;color:#fff}',

            '/* === Modal === */',
            '.sync-modal-overlay{position:fixed;inset:0;background:rgba(26,21,20,0.6);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:10000;opacity:0;visibility:hidden;transition:all .2s ease}',
            '.sync-modal-overlay.open{opacity:1;visibility:visible}',
            '.sync-modal{background:var(--bg-panel);border:4px solid #1a1514;border-radius:16px;padding:2rem;width:90%;max-width:420px;box-shadow:8px 8px 0px #1a1514;transform:translateY(20px);transition:transform .2s cubic-bezier(0.4, 0, 0.2, 1)}',
            '.sync-modal-overlay.open .sync-modal{transform:translateY(0)}',
            '.sync-modal-title{font-size:1.6rem;font-weight:900;color:#1a1514;margin-bottom:0.5rem}',
            '.sync-modal-desc{font-size:0.95rem;font-weight:500;color:#1a1514;line-height:1.5;margin-bottom:1.5rem}',
            '.sync-input-group{margin-bottom:1.2rem}',
            '.sync-input-label{display:block;font-size:0.8rem;font-weight:800;color:#1a1514;margin-bottom:0.4rem;text-transform:uppercase}',
            '.sync-input{width:100%;padding:0.8rem 1rem;background:#fef0cb;border:3px solid #1a1514;border-radius:8px;color:#1a1514;font-size:1rem;font-weight:600;font-family:"JetBrains Mono",monospace;outline:none;transition:all .2s;box-sizing:border-box;box-shadow:inset 3px 3px 0px rgba(0,0,0,0.05)}',
            '.sync-input:focus{border-color:#ff4d42;background:var(--bg-panel)}',
            '.sync-input::placeholder{color:rgba(26,21,20,0.4)}',
            '.sync-modal-actions{display:flex;gap:0.8rem;margin-top:1.5rem}',
            '.sync-modal-btn{flex:1;padding:0.8rem 1rem;border:3px solid #1a1514;border-radius:8px;font-size:0.95rem;font-weight:800;cursor:pointer;transition:all .2s ease;font-family:inherit;box-shadow:4px 4px 0px #1a1514}',
            '.sync-modal-btn.primary{background:#ff4d42;color:#fff}',
            '.sync-modal-btn.primary:hover{transform:translate(2px,2px);box-shadow:2px 2px 0px #1a1514}',
            '.sync-modal-btn.primary:disabled{opacity:0.6;cursor:not-allowed;transform:none;box-shadow:4px 4px 0px #1a1514}',
            '.sync-modal-btn.secondary{background:var(--bg-panel);color:#1a1514}',
            '.sync-modal-btn.secondary:hover{background:#fef0cb;transform:translate(2px,2px);box-shadow:2px 2px 0px #1a1514}',
            '.sync-hint{font-size:0.8rem;font-weight:600;color:rgba(26,21,20,0.6);margin-top:0.6rem;line-height:1.4}'
        ].join('\n');
        document.head.appendChild(style);
    }

    // ===== UI INJECTION =====
    function injectSyncUI() {
        // --- Sync Bar ---
        var bar = document.createElement('div');
        bar.className = 'sync-bar';
        bar.id = 'syncBar';

        // Insert after tier-nav (inside the header)
        var tierNav = document.getElementById('tierNav');
        if (tierNav && tierNav.parentNode) {
            tierNav.parentNode.insertBefore(bar, tierNav.nextSibling);
        } else {
            var hero = document.querySelector('.hero');
            if (hero) hero.appendChild(bar);
        }

        // --- Modal ---
        var overlay = document.createElement('div');
        overlay.className = 'sync-modal-overlay';
        overlay.id = 'syncModalOverlay';
        overlay.innerHTML = [
            '<div class="sync-modal">',
            '  <div class="sync-modal-title">☁️ Cloud Sync</div>',
            '  <div class="sync-modal-desc">',
            '    Enter a passphrase to sync your progress across devices.<br>',
            '    Use the <strong>same passphrase</strong> on any device to access your data.',
            '  </div>',
            '  <div class="sync-input-group">',
            '    <label class="sync-input-label" for="syncPassphraseInput">Passphrase</label>',
            '    <input type="text" class="sync-input" id="syncPassphraseInput"',
            '           placeholder="Enter a memorable passphrase…"',
            '           autocomplete="off" spellcheck="false">',
            '    <div class="sync-hint">💡 Your passphrase is hashed (SHA-256) before being sent — it\'s never stored in plain text on the server.</div>',
            '  </div>',
            '  <div class="sync-modal-actions">',
            '    <button class="sync-modal-btn secondary" id="syncCancelBtn">Cancel</button>',
            '    <button class="sync-modal-btn primary" id="syncConnectModalBtn">Connect &amp; Sync</button>',
            '  </div>',
            '</div>'
        ].join('\n');
        document.body.appendChild(overlay);

        // --- Events ---
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) closeModal();
        });
        document.getElementById('syncCancelBtn').addEventListener('click', closeModal);
        document.getElementById('syncConnectModalBtn').addEventListener('click', handleConnect);
        document.getElementById('syncPassphraseInput').addEventListener('keydown', function (e) {
            if (e.key === 'Enter') handleConnect();
        });

        // ESC to close
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
        });

        // Initial render
        updateSyncBar();
    }

    function injectDisabledUI() {
        var bar = document.createElement('div');
        bar.className = 'sync-bar';
        bar.id = 'syncBar';
        bar.innerHTML = '<span class="sync-indicator disconnected"></span>' +
            '<span class="sync-status-text">☁️ Cloud sync not configured — update <code>firebase-sync.js</code> with your Firebase config</span>';
        var tierNav = document.getElementById('tierNav');
        if (tierNav && tierNav.parentNode) {
            tierNav.parentNode.insertBefore(bar, tierNav.nextSibling);
        }
    }

    // ===== UI UPDATES =====
    function updateSyncBar() {
        var bar = document.getElementById('syncBar');
        if (!bar) return;

        if (syncUserId) {
            var phrase = localStorage.getItem(SYNC_PHRASE_KEY) || '';
            var display = phrase
                ? phrase.substring(0, 14) + (phrase.length > 14 ? '…' : '')
                : syncUserId.substring(0, 8) + '…';

            bar.innerHTML = [
                '<span class="sync-indicator synced" id="syncIndicator"></span>',
                '<span class="sync-status-text">☁️ Synced</span>',
                '<span class="sync-id-display">' + esc(display) + '</span>',
                '<div class="sync-actions">',
                '  <button class="sync-action-btn" id="syncNowBtn" title="Force full sync">↻ Sync</button>',
                '  <button class="sync-action-btn danger" id="syncDisconnectBtn" title="Stop syncing">Disconnect</button>',
                '</div>'
            ].join('');

            document.getElementById('syncNowBtn').addEventListener('click', function () { performSync(); });
            document.getElementById('syncDisconnectBtn').addEventListener('click', function () { disconnectSync(); });
        } else {
            bar.innerHTML = [
                '<span class="sync-indicator disconnected"></span>',
                '<span class="sync-status-text">☁️ Local only</span>',
                '<button class="sync-connect-btn" id="syncOpenModalBtn">Sync Across Devices</button>'
            ].join('');

            document.getElementById('syncOpenModalBtn').addEventListener('click', openModal);
        }
    }

    function setSyncStatus(status) {
        var ind = document.getElementById('syncIndicator');
        if (ind) ind.className = 'sync-indicator ' + status;
    }

    function openModal() {
        var overlay = document.getElementById('syncModalOverlay');
        if (overlay) {
            overlay.classList.add('open');
            setTimeout(function () {
                var input = document.getElementById('syncPassphraseInput');
                if (input) input.focus();
            }, 150);
        }
    }

    function closeModal() {
        var overlay = document.getElementById('syncModalOverlay');
        if (overlay) overlay.classList.remove('open');
        var input = document.getElementById('syncPassphraseInput');
        if (input) input.value = '';
    }

    async function handleConnect() {
        var input = document.getElementById('syncPassphraseInput');
        var passphrase = (input ? input.value : '').trim();
        if (!passphrase) {
            if (input) input.focus();
            return;
        }
        var btn = document.getElementById('syncConnectModalBtn');
        if (btn) { btn.disabled = true; btn.textContent = 'Connecting…'; }
        try {
            await connectWithPassphrase(passphrase);
            closeModal();
        } catch (err) {
            console.error('[Sync] Connect error:', err);
            alert('Failed to connect: ' + err.message);
        } finally {
            if (btn) { btn.disabled = false; btn.textContent = 'Connect & Sync'; }
        }
    }

    // ===== AUTO-CONNECT =====
    if (syncUserId) {
        // Delay to let combined-app.js fully initialize
        setTimeout(function () { performSync(); }, 600);
    }

})();
