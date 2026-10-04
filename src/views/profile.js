import { state, t, setTab } from '../state.js';
import { startWeakWordsTraining } from './quiz.js';

let friends = [
  { name: 'Sarah M.', avatar: '👩‍🏫', score: 2450, streak: 12 },
  { name: 'Lukas B.', avatar: '👨‍🎓', score: 1980, streak: 8 },
  { name: 'Elena K.', avatar: '👩‍💼', score: 1420, streak: 5 }
];

export function renderProfile(container) {
  const highscoresList = Object.values(state.highscores).sort((a, b) => b.pct - a.pct);
  const missedCount = Object.keys(state.missedWords).length;
  const bestScore = highscoresList.length > 0 ? highscoresList[0].pct : 0;
  const testsTaken = highscoresList.length;

  container.innerHTML = `
    <div class="mx-auto max-w-lg pb-28">
      <!-- Profile Header -->
      <div class="sticky top-0 z-10 bg-white px-4 py-4.5 text-slate-900 dark:bg-slate-900 dark:text-white border-b border-gray-200 dark:border-slate-800 flex items-center justify-between">
        <h2 class="text-base font-black tracking-tight flex items-center gap-1.5 leading-none text-slate-900 dark:text-white">
          <span>👤</span> ${t('Learner Profile', 'Lernprofil')}
        </h2>
        <button id="open-settings-modal-btn" class="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 transition cursor-pointer">
          ⚙️ ${t('Settings', 'Optionen')}
        </button>
      </div>

      <div class="p-4 space-y-4">
        <!-- Student ID Card -->
        <div class="rounded-3xl bg-white dark:bg-slate-900 p-6 text-slate-900 dark:text-white shadow-xs border border-gray-200 dark:border-slate-800 relative overflow-hidden">
          <div class="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet-600/5 blur-2xl pointer-events-none"></div>
          
          <div class="flex items-center justify-between">
            <span class="text-[9px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-mono">
              ${t('GOETHE B1 INSTITUT CARD', 'LINKSWELLE AUSWEIS')}
            </span>
            <span class="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-400/30 text-[9px] font-black uppercase">
              ${state.settings.cefrLevel || 'B1'}
            </span>
          </div>

          <div class="mt-4 flex items-center gap-4">
            <div class="h-16 w-16 rounded-2xl bg-gray-100 dark:bg-white/10 border-2 border-gray-200 dark:border-white/20 flex items-center justify-center text-3xl overflow-hidden shrink-0 shadow-inner">
              ${state.settings.photoUrl ? `<img src="${state.settings.photoUrl}" class="h-full w-full object-cover" />` : state.settings.avatar}
            </div>
            <div>
              <h3 class="text-lg font-black tracking-tight text-slate-900 dark:text-white">${state.settings.userName}</h3>
              <div class="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">ID: LW-B1-${Math.abs(state.settings.userName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 1000))}</div>
              <div class="flex gap-2 mt-2">
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-400/20 dark:text-amber-300 dark:border-amber-400/30">
                  🔥 ${state.streak.count} ${t('Day Streak', 'Tage Streak')}
                </span>
              </div>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-gray-100 dark:border-white/10 grid grid-cols-3 gap-2 text-center">
            <div>
              <div class="text-xl font-black text-slate-900 dark:text-white">${bestScore}%</div>
              <div class="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mt-0.5">${t('Best Score', 'Höchstwert')}</div>
            </div>
            <div>
              <div class="text-xl font-black text-slate-900 dark:text-white">${testsTaken}</div>
              <div class="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mt-0.5">${t('Tests Taken', 'Tests absolviert')}</div>
            </div>
            <div>
              <div class="text-xl font-black text-slate-900 dark:text-white">${state.bookmarks.length}</div>
              <div class="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mt-0.5">${t('Saved Words', 'Gemerkt')}</div>
            </div>
          </div>
        </div>

        <!-- Weak Words Training Launcher -->
        ${missedCount > 0 ? `
          <div class="rounded-2xl border border-rose-200 bg-rose-50/70 p-4 dark:bg-rose-950/20 dark:border-rose-900/30 flex items-center justify-between text-left">
            <div>
              <h4 class="text-xs font-black text-rose-800 dark:text-rose-300 uppercase tracking-wide">
                🎯 ${t('WEAK WORDS TRAINER', 'SCHWÄCHEN-TRAINER')}
              </h4>
              <p class="text-xs text-rose-700 dark:text-rose-400 mt-0.5 font-medium">
                ${missedCount} ${t('vocabulary items need review.', 'Wörter wurden fehlerhaft beantwortet.')}
              </p>
            </div>
            <button id="start-weak-words-btn" class="px-3.5 py-2 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white text-xs font-black rounded-xl shadow cursor-pointer transition shrink-0">
              ${t('Practice Now', 'Jetzt üben')}
            </button>
          </div>
        ` : ''}

        <!-- Friends Leaderboard -->
        <div class="rounded-3xl border border-gray-150 bg-white p-5 shadow-xs dark:bg-slate-900 dark:border-slate-800 text-left space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
              🏆 ${t('FRIENDS LEAGUE', 'FREUNDES-LIGA')}
            </h4>
            <span class="text-[10px] text-gray-400 font-bold">Weekly Rank</span>
          </div>

          <div class="space-y-2">
            <!-- User Rank Row -->
            <div class="flex items-center justify-between p-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30">
              <div class="flex items-center gap-3">
                <span class="text-xs font-black text-emerald-700 dark:text-emerald-400">#1</span>
                <div class="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-sm shadow-xs">
                  ${state.settings.photoUrl ? `<img src="${state.settings.photoUrl}" class="h-full w-full rounded-full object-cover" />` : state.settings.avatar}
                </div>
                <div>
                  <div class="text-xs font-black text-slate-900 dark:text-white">${state.settings.userName} (You)</div>
                  <div class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">🔥 ${state.streak.count} days</div>
                </div>
              </div>
              <div class="text-xs font-black text-emerald-700 dark:text-emerald-400">
                ${testsTaken * 120 + state.streak.count * 50} pts
              </div>
            </div>

            <!-- Friends Rows -->
            ${friends.map((f, i) => `
              <div class="flex items-center justify-between p-3 rounded-2xl bg-gray-50 dark:bg-slate-950 border border-gray-150/60 dark:border-slate-800/80">
                <div class="flex items-center gap-3">
                  <span class="text-xs font-bold text-gray-400">#${i + 2}</span>
                  <div class="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-sm shadow-xs">
                    ${f.avatar}
                  </div>
                  <div>
                    <div class="text-xs font-bold text-slate-800 dark:text-slate-200">${f.name}</div>
                    <div class="text-[10px] text-gray-400">🔥 ${f.streak} days</div>
                  </div>
                </div>
                <div class="text-xs font-bold text-gray-600 dark:text-slate-400">
                  ${f.score} pts
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Add Friend Input -->
          <div class="pt-2 flex gap-2">
            <input
              id="new-friend-name-input"
              type="text"
              placeholder="${t('Add study partner name...', 'Lernpartner hinzufügen...')}"
              class="flex-1 p-2 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-white focus:outline-none"
            />
            <button id="add-friend-btn" class="px-3 py-2 bg-slate-900 dark:bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-slate-800 cursor-pointer transition">
              + Add
            </button>
          </div>
        </div>

        <!-- High Scores List -->
        <div class="rounded-3xl border border-gray-150 bg-white p-5 shadow-xs dark:bg-slate-900 dark:border-slate-800 text-left space-y-3">
          <h4 class="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
            🏅 ${t('RECORDED HIGH SCORES', 'BESTENLISTE')}
          </h4>
          ${highscoresList.length > 0 ? `
            <div class="space-y-2">
              ${highscoresList.slice(0, 8).map((hs, i) => `
                <div class="flex items-center justify-between p-3 rounded-2xl bg-gray-50 dark:bg-slate-950 border border-gray-150/60 dark:border-slate-800 text-xs">
                  <div class="flex items-center gap-2 min-w-0">
                    <span class="text-base">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '🎖️'}</span>
                    <div class="truncate">
                      <div class="font-bold text-slate-900 dark:text-white truncate">${hs.topic}</div>
                      <div class="text-[10px] text-gray-400 capitalize">${hs.mode.replace('_level_', ' Level ')}</div>
                    </div>
                  </div>
                  <span class="font-black px-2.5 py-1 rounded-lg ${
                    hs.pct >= 70
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
                      : 'bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300'
                  }">
                    ${hs.pct}%
                  </span>
                </div>
              `).join('')}
            </div>
          ` : `
            <div class="p-6 text-center text-xs text-gray-400 font-semibold">
              ${t('Complete quiz topics to record top exam scores here!', 'Schließe Quizze ab, um Rekorde hier zu verewigen!')}
            </div>
          `}
        </div>
      </div>
    </div>
  `;

  // Attach Listeners
  container.querySelector('#open-settings-modal-btn')?.addEventListener('click', () => {
    setTab('settings');
  });

  container.querySelector('#start-weak-words-btn')?.addEventListener('click', () => {
    startWeakWordsTraining();
  });

  const friendInput = container.querySelector('#new-friend-name-input');
  container.querySelector('#add-friend-btn')?.addEventListener('click', () => {
    if (!friendInput) return;
    const name = friendInput.value.trim();
    if (!name) return;
    const avatars = ['👨‍💼', '👩‍🔬', '👨‍🎨', '👩‍💻', '👨‍🏫'];
    friends.push({
      name,
      avatar: avatars[Math.floor(Math.random() * avatars.length)],
      score: Math.floor(Math.random() * 1000) + 500,
      streak: Math.floor(Math.random() * 7) + 1
    });
    renderProfile(container);
  });
}
