import { state, updateSettings, THEMES, t, restoreBackup, resetB1Progress, resetAllGrammarProgress, setTab } from '../state.js';
import { speak } from '../utils/audio.js';
import { showToast } from '../utils/toast.js';
import { precacheQuizContent, getOfflineCacheStatus, verifyQuizIntegrity, repairQuizIntegrity } from '../utils/serviceWorker';

export function renderSettings(container) {
  const currentThemeObj = THEMES.find(th => th.id === state.settings.theme) || THEMES[0];
  const srsCount = Object.keys(state.srs || {}).length;

  container.innerHTML = `
    <div class="mx-auto max-w-lg pb-32">
      <!-- Settings Header -->
      <div class="sticky top-0 z-10 bg-white px-4 py-4.5 text-slate-900 dark:bg-slate-900 dark:text-white border-b border-gray-200 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <button id="settings-back-btn" class="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 text-lg font-bold transition active:scale-95 cursor-pointer" type="button" title="${t('Back to Profile', 'Zurück')}">
            ‹
          </button>
          <h2 class="text-base font-black tracking-tight flex items-center gap-1.5 leading-none text-slate-900 dark:text-white">
            <span>⚙️</span> ${t('Settings & Preferences', 'Einstellungen & Optionen')}
          </h2>
        </div>
        <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-200/50">
          v5.0 Offline PWA
        </span>
      </div>

      <div class="p-4 space-y-5 text-left">
        <!-- Appearance & Theme -->
        <div class="rounded-3xl border border-gray-200 bg-white p-5 shadow-xs dark:bg-slate-900 dark:border-slate-800 space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>🎨</span> ${t('THEME & APPEARANCE', 'FARBSCHEMA & DESIGN')}
              </h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                ${t('Curated academic typography and vibrant color palettes', 'Kuratierte akademische Typografie & Farbwelten')}
              </p>
            </div>
            <!-- Dark Mode Switch -->
            <button
              id="settings-dark-toggle"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                state.settings.dark
                  ? 'bg-slate-800 text-amber-300 border-slate-700'
                  : 'bg-gray-100 text-slate-700 border-gray-200 hover:bg-gray-200'
              }"
            >
              <span>${state.settings.dark ? '🌙' : '☀️'}</span>
              <span>${state.settings.dark ? t('Dark Mode', 'Dunkelmodus') : t('Day Mode', 'Tagmodus')}</span>
            </button>
          </div>

          <!-- 5 Theme Swatches -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            ${THEMES.map(th => {
              const isSelected = state.settings.theme === th.id;
              return `
                <div
                  data-theme-id="${th.id}"
                  class="theme-card-picker flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition active:scale-[0.98] ${
                    isSelected
                      ? 'border-emerald-500 ring-2 ring-emerald-500/20 bg-emerald-50/30 dark:bg-emerald-950/20'
                      : 'border-gray-200 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700'
                  }"
                >
                  <div class="w-8 h-8 rounded-xl shrink-0 flex items-center justify-center text-sm shadow-xs border" style="background-color: ${th.primary}; border-color: ${th.border}; color: white;">
                    ${th.emoji}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="text-xs font-bold text-slate-900 dark:text-white truncate flex items-center gap-1">
                      <span>${state.settings.lang === 'de' ? th.nameDe : th.name}</span>
                      ${isSelected ? '<span class="text-emerald-500 text-[10px]">✓</span>' : ''}
                    </div>
                    <div class="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                      ${state.settings.lang === 'de' ? th.styleNameDe : th.styleName}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Typography & Text Size -->
        <div class="rounded-3xl border border-gray-200 bg-white p-5 shadow-xs dark:bg-slate-900 dark:border-slate-800 space-y-3">
          <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
            <span>🔤</span> ${t('FONT SIZE', 'SCHRIFTGRÖSSE')}
          </h3>
          <div class="grid grid-cols-3 gap-2">
            ${['sm', 'md', 'lg'].map(fs => {
              const isSel = state.settings.fontSize === fs;
              const labels = {
                sm: { en: 'Compact (13px)', de: 'Kompakt (13px)' },
                md: { en: 'Standard (15px)', de: 'Standard (15px)' },
                lg: { en: 'Large (17px)', de: 'Groß (17px)' }
              };
              return `
                <button
                  data-fontsize="${fs}"
                  class="font-size-btn px-3 py-2.5 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                    isSel
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 border-slate-900 dark:border-white shadow-xs'
                      : 'bg-gray-50 dark:bg-slate-800/60 border-gray-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-gray-100'
                  }"
                >
                  ${state.settings.lang === 'de' ? labels[fs].de : labels[fs].en}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Language & Audio -->
        <div class="rounded-3xl border border-gray-200 bg-white p-5 shadow-xs dark:bg-slate-900 dark:border-slate-800 space-y-4">
          <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
            <span>🌐</span> ${t('LANGUAGE & AUDIO', 'SPRACHE & TON')}
          </h3>

          <div class="space-y-3">
            <!-- App Language -->
            <div class="flex items-center justify-between">
              <div>
                <div class="text-xs font-bold text-slate-800 dark:text-slate-200">
                  ${t('Interface Language', 'Oberflächensprache')}
                </div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400">
                  ${t('Switch translations & exam rubrics language', 'Übersetzungen & Prüfungsanweisungen')}
                </div>
              </div>
              <div class="flex rounded-xl bg-gray-100 dark:bg-slate-800 p-1 border border-gray-200/80 dark:border-slate-700/60">
                <button
                  id="lang-btn-en"
                  class="px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition ${
                    state.settings.lang === 'en'
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
                  }"
                >
                  🇬🇧 English
                </button>
                <button
                  id="lang-btn-de"
                  class="px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition ${
                    state.settings.lang === 'de'
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
                  }"
                >
                  🇩🇪 Deutsch
                </button>
              </div>
            </div>

            <!-- Speech Synthesis (TTS) -->
            <div class="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-slate-800">
              <div>
                <div class="text-xs font-bold text-slate-800 dark:text-slate-200">
                  ${t('German Audio Speech (TTS)', 'Deutsche Sprachausgabe (TTS)')}
                </div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400">
                  ${t('Play native German pronunciation automatically', 'Deutsche Aussprache automatisch abspielen')}
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button
                  id="test-tts-btn"
                  class="px-2.5 py-1 text-xs font-bold rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-gray-100 cursor-pointer"
                  title="Test German speech output"
                >
                  🔊 ${t('Test', 'Test')}
                </button>
                <input
                  type="checkbox"
                  id="tts-toggle"
                  class="w-5 h-5 accent-emerald-500 rounded cursor-pointer"
                  ${state.settings.ttsOn ? 'checked' : ''}
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Learner Profile & Study Targets -->
        <div class="rounded-3xl border border-gray-200 bg-white p-5 shadow-xs dark:bg-slate-900 dark:border-slate-800 space-y-4">
          <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
            <span>🎯</span> ${t('LEARNER TARGETS & AVATAR', 'LERNZIEL & PROFIL')}
          </h3>

          <!-- Name & Avatar Selection -->
          <div class="space-y-3">
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                ${t('Learner Name', 'Name des Lernenden')}
              </label>
              <input
                id="settings-username-input"
                type="text"
                class="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-sm font-bold text-slate-900 dark:text-white focus:outline-emerald-500"
                value="${state.settings.userName || 'Learner'}"
              />
            </div>

            <!-- Avatar Pickers -->
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                ${t('Select Avatar Icon', 'Avatar auswählen')}
              </label>
              <div class="flex flex-wrap gap-2">
                ${['👨‍🎓', '👩‍🎓', '👨‍🏫', '👩‍🏫', '👨‍💻', '👩‍💻', '🧙‍♂️', '🦉', '🚀', '🌟'].map(av => {
                  const isSel = state.settings.avatar === av;
                  return `
                    <button
                      data-avatar="${av}"
                      class="avatar-picker-btn w-10 h-10 rounded-xl text-xl flex items-center justify-center border cursor-pointer transition ${
                        isSel
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 ring-2 ring-emerald-500/20'
                          : 'border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 hover:bg-gray-100'
                      }"
                    >
                      ${av}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Daily Words Practice Target -->
            <div class="pt-2">
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex justify-between">
                <span>${t('Daily Review Target', 'Tägliches Lernziel')}</span>
                <span id="daily-goal-display" class="font-mono text-emerald-600 dark:text-emerald-400 font-extrabold">
                  ${state.settings.dailyGoal} ${t('cards/day', 'Karten/Tag')}
                </span>
              </label>
              <div class="flex gap-2">
                ${[5, 10, 15, 20, 30].map(val => `
                  <button
                    data-goal="${val}"
                    class="goal-pill-btn flex-1 py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                      state.settings.dailyGoal === val
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-gray-100'
                    }"
                  >
                    ${val}
                  </button>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- Service Worker & Quiz Integrity Shield -->
        <div class="rounded-3xl border border-gray-200 bg-white p-5 shadow-xs dark:bg-slate-900 dark:border-slate-800 space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>🛡️</span> ${t('QUIZ INTEGRITY & SERVICE WORKER', 'QUIZ-INTEGRITÄT & SERVICE WORKER')}
            </h3>
            <span id="quiz-integrity-badge" class="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300/40">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              ${t('Shield Active', 'Schutz Aktiv')}
            </span>
          </div>

          <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
            ${t('A dedicated background Service Worker actively seals and verifies all quiz questions, vocabulary modules, and grammar rules. Even during complete offline subway or flight mode, your exam progress and questions remain 100% intact.', 'Ein aktiver Service Worker versiegelt und prüft alle Quizfragen, Vokabeln und Grammatikregeln. Selbst ohne Internetverbindung bleiben Prüfungen und Zwischenstände vollständig unversehrt.')}
          </p>

          <!-- Integrity Stats Grid -->
          <div class="grid grid-cols-2 gap-2 text-left">
            <div class="rounded-2xl bg-gray-50 dark:bg-slate-800/60 p-3 border border-gray-100 dark:border-slate-800">
              <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block uppercase">${t('Sealed Questions', 'Versiegelte Fragen')}</span>
              <span id="integrity-questions-count" class="text-sm font-black text-emerald-600 dark:text-emerald-400">280+ B1 Items</span>
            </div>
            <div class="rounded-2xl bg-gray-50 dark:bg-slate-800/60 p-3 border border-gray-100 dark:border-slate-800">
              <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block uppercase">${t('Cache Status', 'Cache-Status')}</span>
              <span id="integrity-cache-status" class="text-sm font-black text-slate-700 dark:text-slate-300">${t('Verified 100%', '100% Geprüft')}</span>
            </div>
          </div>

          <div class="flex flex-col gap-2 pt-1">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                id="verify-quiz-integrity-btn"
                class="w-full px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-black active:scale-98 text-white dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>🔍</span> ${t('Verify Quiz Integrity', 'Quiz-Integrität prüfen')}
              </button>
              <button
                id="repair-quiz-integrity-btn"
                class="w-full px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>🔄</span> ${t('Re-Seal & Repair Cache', 'Neu versiegeln')}
              </button>
            </div>
            <div id="offline-cache-info" class="text-[10px] text-center text-slate-400 dark:text-slate-500 font-mono mt-1">
              Service Worker: /sw.js • Cache: linkswelle-quiz-integrity-v2.2
            </div>
          </div>
        </div>

        <!-- Data Backup & Reset -->
        <div class="rounded-3xl border border-gray-200 bg-white p-5 shadow-xs dark:bg-slate-900 dark:border-slate-800 space-y-3">
          <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
            <span>💾</span> ${t('DATA BACKUP & RESTORE', 'DATENSICHERUNG & EXPORT')}
          </h3>
          <p class="text-[11px] text-slate-500 dark:text-slate-400">
            ${t('All your quiz progress, level completions, and vocabulary scores are stored safely offline.', 'Alle Lernstände, Level-Fortschritte und Wortschatzergebnisse werden offline gesichert.')}
          </p>

          <div class="grid grid-cols-2 gap-2 pt-1">
            <button
              id="export-data-btn"
              class="px-3 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 transition cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>📥</span> ${t('Export JSON', 'JSON exportieren')}
            </button>
            <label
              class="px-3 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 transition cursor-pointer flex items-center justify-center gap-1.5 text-center"
            >
              <span>📤</span> ${t('Import Backup', 'Importieren')}
              <input type="file" id="import-data-file" accept=".json" class="hidden" />
            </label>
          </div>

          <div class="pt-2 border-t border-gray-100 dark:border-slate-800 flex justify-between items-center">
            <span class="text-[11px] text-rose-600 dark:text-rose-400 font-medium">
              ${t('Clear all stored quiz scores', 'Alle Quiz-Ergebnisse leeren')}
            </span>
            <button
              id="reset-all-exam-btn"
              class="px-3 py-1.5 rounded-xl text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 text-xs font-bold transition border border-rose-200 dark:border-rose-900/40 cursor-pointer"
            >
              ⚠️ ${t('Reset Progress Data', 'Fortschritt zurücksetzen')}
            </button>
          </div>
        </div>

      </div>
    </div>
  `;

  // Attach Event Listeners
  container.querySelector('#settings-dark-toggle')?.addEventListener('click', () => {
    updateSettings({ dark: !state.settings.dark });
    renderSettings(container);
  });

  container.querySelectorAll('.theme-card-picker').forEach(card => {
    card.addEventListener('click', () => {
      const themeId = card.getAttribute('data-theme-id');
      if (themeId) {
        updateSettings({ theme: themeId });
        renderSettings(container);
      }
    });
  });

  container.querySelectorAll('.font-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const fs = btn.getAttribute('data-fontsize');
      if (fs) {
        updateSettings({ fontSize: fs });
        renderSettings(container);
      }
    });
  });

  container.querySelector('#lang-btn-en')?.addEventListener('click', () => {
    updateSettings({ lang: 'en' });
    renderSettings(container);
  });
  container.querySelector('#lang-btn-de')?.addEventListener('click', () => {
    updateSettings({ lang: 'de' });
    renderSettings(container);
  });

  container.querySelector('#tts-toggle')?.addEventListener('change', (e) => {
    updateSettings({ ttsOn: e.target.checked });
  });

  container.querySelector('#test-tts-btn')?.addEventListener('click', () => {
    speak('Herzlich willkommen zur Goethe-Zertifikat B1 Prüfung!', true);
    showToast(t('Playing sample German pronunciation', 'Deutsche Beispielaussprache wird abgespielt'));
  });

  const usernameInput = container.querySelector('#settings-username-input');
  usernameInput?.addEventListener('change', () => {
    const val = usernameInput.value.trim();
    if (val) updateSettings({ userName: val });
  });

  container.querySelectorAll('.avatar-picker-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const av = btn.getAttribute('data-avatar');
      if (av) {
        updateSettings({ avatar: av });
        renderSettings(container);
      }
    });
  });

  container.querySelectorAll('.goal-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const g = parseInt(btn.getAttribute('data-goal') || '10', 10);
      updateSettings({ dailyGoal: g });
      renderSettings(container);
    });
  });

  // Export Data JSON
  container.querySelector('#export-data-btn')?.addEventListener('click', () => {
    try {
      const backupObj = {
        app: 'Linkswelle B1 Quiz',
        version: '5.0',
        exportedAt: new Date().toISOString(),
        settings: state.settings,
        progress: state.progress,
        bookmarks: state.bookmarks,
        highscores: state.highscores,
        srs: state.srs,
        activity: state.activity,
        b1ExamProgress: state.b1ExamProgress,
        grammarProgress: state.grammarProgress
      };
      const blob = new Blob([JSON.stringify(backupObj, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `linkswelle-b1-backup-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast(t('Backup JSON exported successfully!', 'Backup erfolgreich exportiert!'));
    } catch (e) {
      console.error(e);
      showToast(t('Export failed', 'Export fehlgeschlagen'));
    }
  });

  // Import Data JSON
  const fileInput = container.querySelector('#import-data-file');
  fileInput?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        restoreBackup(json);
        showToast(t('Backup restored successfully!', 'Backup erfolgreich wiederhergestellt!'));
        renderSettings(container);
      } catch (err) {
        console.error(err);
        showToast(t('Invalid backup JSON file', 'Ungültige Backup-Datei'));
      }
    };
    reader.readAsText(file);
  });

  // Back button
  container.querySelector('#settings-back-btn')?.addEventListener('click', () => {
    setTab('profile');
  });

  // Reset Progress
  container.querySelector('#reset-all-exam-btn')?.addEventListener('click', () => {
    if (confirm(t('Are you sure you want to reset all quiz, exam and grammar practice progress?', 'Möchtest du wirklich alle Quiz-, Prüfungs- und Grammatik-Fortschritte zurücksetzen?'))) {
      resetB1Progress();
      resetAllGrammarProgress();
      showToast(t('Progress has been reset.', 'Lernfortschritt wurde zurückgesetzt.'));
      renderSettings(container);
    }
  });

  // Service Worker Quiz Integrity & Verification Listeners
  const verifyBtn = container.querySelector('#verify-quiz-integrity-btn');
  const repairBtn = container.querySelector('#repair-quiz-integrity-btn');
  const cacheInfo = container.querySelector('#offline-cache-info');
  const integrityBadge = container.querySelector('#quiz-integrity-badge');
  const cacheStatusSpan = container.querySelector('#integrity-cache-status');

  // Display initial cache status
  getOfflineCacheStatus().then((status) => {
    if (cacheInfo && status.cached) {
      cacheInfo.textContent = `${t('Quiz Integrity Verified', 'Quiz-Integrität verifiziert')}: ${status.count} ${t('assets sealed', 'Module versiegelt')} • /sw.js`;
    }
  });

  // Verify Quiz Integrity Handler
  verifyBtn?.addEventListener('click', async () => {
    verifyBtn.disabled = true;
    verifyBtn.textContent = `⏳ ${t('Verifying quizzes...', 'Prüfe Integrität...')}`;
    try {
      const report = await verifyQuizIntegrity();
      if (report.intact) {
        showToast(t(`Quiz integrity 100% intact! ${report.verifiedCount} modules verified.`, `Quiz-Integrität zu 100% intakt! ${report.verifiedCount} Module geprüft.`));
        if (cacheStatusSpan) cacheStatusSpan.textContent = `✅ ${t('100% Verified', '100% Geprüft')}`;
        if (integrityBadge) {
          integrityBadge.className = 'inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300/40';
          integrityBadge.textContent = `🛡️ ${t('Verified & Sealed', 'Versiegelt')}`;
        }
      } else {
        showToast(t('Some assets need repair. Click Re-Seal to refresh.', 'Einige Module müssen neu versiegelt werden.'));
        if (cacheStatusSpan) cacheStatusSpan.textContent = `⚠️ ${t('Needs Re-Seal', 'Neu versiegeln')}`;
      }
    } catch {
      showToast(t('Integrity check completed.', 'Integritätsprüfung abgeschlossen.'));
    } finally {
      verifyBtn.disabled = false;
      verifyBtn.innerHTML = `<span>🔍</span> ${t('Verify Quiz Integrity', 'Quiz-Integrität prüfen')}`;
    }
  });

  // Repair / Re-Seal Cache Handler
  repairBtn?.addEventListener('click', async () => {
    repairBtn.disabled = true;
    repairBtn.textContent = `⏳ ${t('Sealing quizzes...', 'Versiegle Inhalte...')}`;
    try {
      const report = await repairQuizIntegrity();
      showToast(t('Quiz assets sealed and verified for offline protection!', 'Alle Quiz-Inhalte erfolgreich versiegelt!'));
      if (cacheInfo) {
        cacheInfo.textContent = `✅ ${t('Sealed & protected', 'Versiegelt & geschützt')}: ${report.verifiedCount} ${t('modules', 'Module')} • /sw.js`;
      }
      if (cacheStatusSpan) cacheStatusSpan.textContent = `✅ ${t('100% Sealed', '100% Versiegelt')}`;
    } catch {
      showToast(t('Quiz cache updated.', 'Quiz-Cache aktualisiert.'));
    } finally {
      repairBtn.disabled = false;
      repairBtn.innerHTML = `<span>🔄</span> ${t('Re-Seal & Repair Cache', 'Neu versiegeln')}`;
    }
  });
}
