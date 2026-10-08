// Interactive Spaced Repetition (SRS) Review Runner (Anki / SM-2 Style)
import { state, setScreen, t, notify } from '../state.js';
import { speak } from '../utils/audio.js';
import { getSRSDueCards, recordSRSRating, calculateNextSRSState } from '../utils/srsManager.js';
import { getGrammarPromptTranslation } from '../data/grammar/promptTranslations.js';

let dueCards = [];
let currentIdx = 0;
let isFlipped = false;
let sessionStats = { again: 0, hard: 0, good: 0, easy: 0 };

export function startSRSReviewSession() {
  dueCards = getSRSDueCards();
  currentIdx = 0;
  isFlipped = false;
  sessionStats = { again: 0, hard: 0, good: 0, easy: 0 };
  setScreen('srs-review');
}

export function renderSRSReview(container) {
  if (!container) return;

  // If no due cards remain, show session completion
  if (dueCards.length === 0 || currentIdx >= dueCards.length) {
    renderSRSCompletion(container);
    return;
  }

  const card = dueCards[currentIdx];
  const total = dueCards.length;
  const isVocab = card.type === 'vocab';

  // Preview next intervals for the 4 Anki buttons
  const nextAgain = calculateNextSRSState(card, 1);
  const nextHard = calculateNextSRSState(card, 2);
  const nextGood = calculateNextSRSState(card, 3);
  const nextEasy = calculateNextSRSState(card, 4);

  const formatDays = (d) => d === 1 ? '1d' : `${d}d`;

  // English translation for grammar cards
  const promptEn = !isVocab ? getGrammarPromptTranslation(card) : null;

  container.innerHTML = `
    <div class="pb-28">
      <!-- Sticky Navigation Header -->
      <div class="sticky top-0 z-20 flex items-center justify-between bg-white px-4 py-4 text-slate-900 dark:bg-slate-900 dark:text-white border-b border-gray-200 dark:border-slate-800">
        <div class="flex items-center gap-3">
          <button id="srs-back-btn" class="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 text-lg font-bold transition active:scale-95 cursor-pointer">
            ‹
          </button>
          <div>
            <h2 class="text-sm font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>🧠</span> ${t('SRS Daily Review', 'Tägliche Wiederholung')}
            </h2>
            <div class="text-[10px] text-slate-500 font-extrabold">
              ${card.topic || 'B1 Curriculum'} • Leitner SM-2
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-black text-slate-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700">
            ${currentIdx + 1} / ${total}
          </span>
        </div>
      </div>

      <div class="p-4">
        <!-- Progress Bar -->
        <div class="h-2 w-full rounded-full bg-gray-100 dark:bg-slate-800 overflow-hidden mb-4">
          <div class="h-full rounded-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300" style="width: ${((currentIdx + 1) / total) * 100}%"></div>
        </div>

        <!-- Session Mini Stats -->
        <div class="flex items-center justify-between px-1 mb-3 text-[11px] font-bold text-slate-500 dark:text-slate-400">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-md bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 font-black">
              Again: ${sessionStats.again}
            </span>
            <span class="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-black">
              Passed: ${sessionStats.hard + sessionStats.good + sessionStats.easy}
            </span>
          </div>
          <span class="text-[10px] text-slate-400">
            ${t('Interval ladder: 1d → 3d → 7d → 16d → 30d', 'Intervall-Stufen: 1T → 3T → 7T → 16T → 30T')}
          </span>
        </div>

        <!-- SRS Review Card Body -->
        <div id="srs-card" class="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm dark:bg-slate-900 dark:border-slate-800 cursor-pointer select-none transition active:scale-[0.99] min-h-[300px] flex flex-col justify-between">
          <!-- Card Front / Header -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                isVocab
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300'
                  : 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300'
              }">
                ${isVocab ? '📖 ' + t('Vocabulary Card', 'Vokabel-Karte') : '📐 ' + t('Grammar Card', 'Grammatik-Karte')}
              </span>
              <span class="text-[10px] font-mono text-slate-400">
                ${t('Repetitions', 'Wiederholungen')}: ${card.repetitions || 0}
              </span>
            </div>

            <!-- Front Prompt Text -->
            <div class="mt-4 text-center">
              <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                ${card.front}
              </h3>
              ${promptEn ? `
                <div class="mt-3 inline-block max-w-md p-2 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-200 text-xs font-semibold italic border border-indigo-150 dark:border-indigo-900/50">
                  <span class="not-italic font-black text-[9px] uppercase px-1 py-0.2 bg-indigo-200/80 rounded mr-1">EN</span>
                  "${promptEn}"
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Card Back / Reveal -->
          ${isFlipped ? `
            <div class="mt-6 pt-6 border-t border-dashed border-gray-200 dark:border-slate-800 animate-fadeIn">
              <div class="text-center">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                  ${t('Answer / Meaning', 'Bedeutung / Lösung')}
                </span>
                <div class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  ${card.back}
                </div>
                ${card.rule ? `
                  <div class="mt-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                    💡 ${card.rule}
                  </div>
                ` : ''}
              </div>

              <!-- Pronunciation Trigger -->
              <div class="mt-5 flex justify-center">
                <button id="srs-speak-btn" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition cursor-pointer">
                  🔊 ${t('Pronounce', 'Anhören')}
                </button>
              </div>
            </div>
          ` : `
            <div class="text-center py-8">
              <button id="srs-flip-btn" class="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-black transition cursor-pointer shadow-sm active:scale-95">
                👁️ ${t('Tap to Reveal Answer', 'Antwort aufdecken')}
              </button>
              <p class="text-[10px] text-slate-400 mt-2">
                ${t('Keyboard: Space or Enter to reveal', 'Tastatur: Leertaste oder Enter')}
              </p>
            </div>
          `}

          <!-- Footer hint -->
          <div class="text-center text-[10px] text-slate-400 mt-4">
            ${isFlipped ? t('Rate your recall to schedule next review date:', 'Wie gut wusstest du die Antwort?') : t('Think of the translation or rule before flipping', 'Überlege zuerst die Antwort')}
          </div>
        </div>

        <!-- Anki-style 4 Response Buttons (shown when flipped) -->
        ${isFlipped ? `
          <div class="mt-4 grid grid-cols-4 gap-2 animate-fadeIn">
            <!-- 1. Again (1d) -->
            <button data-srs-rating="1" class="srs-rating-btn flex flex-col items-center justify-center p-3 rounded-2xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-900 transition active:scale-95 cursor-pointer">
              <span class="text-xs font-black">${t('Again', 'Nochmal')}</span>
              <span class="text-[10px] font-bold opacity-80 mt-0.5">${formatDays(nextAgain.interval)}</span>
              <span class="text-[8.5px] opacity-60 mt-1 font-mono font-bold">[1]</span>
            </button>

            <!-- 2. Hard (3d) -->
            <button data-srs-rating="2" class="srs-rating-btn flex flex-col items-center justify-center p-3 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900 transition active:scale-95 cursor-pointer">
              <span class="text-xs font-black">${t('Hard', 'Schwer')}</span>
              <span class="text-[10px] font-bold opacity-80 mt-0.5">${formatDays(nextHard.interval)}</span>
              <span class="text-[8.5px] opacity-60 mt-1 font-mono font-bold">[2]</span>
            </button>

            <!-- 3. Good (7d) -->
            <button data-srs-rating="3" class="srs-rating-btn flex flex-col items-center justify-center p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900 transition active:scale-95 cursor-pointer">
              <span class="text-xs font-black">${t('Good', 'Gut')}</span>
              <span class="text-[10px] font-bold opacity-80 mt-0.5">${formatDays(nextGood.interval)}</span>
              <span class="text-[8.5px] opacity-60 mt-1 font-mono font-bold">[3]</span>
            </button>

            <!-- 4. Easy (16d) -->
            <button data-srs-rating="4" class="srs-rating-btn flex flex-col items-center justify-center p-3 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900 transition active:scale-95 cursor-pointer">
              <span class="text-xs font-black">${t('Easy', 'Einfach')}</span>
              <span class="text-[10px] font-bold opacity-80 mt-0.5">${formatDays(nextEasy.interval)}</span>
              <span class="text-[8.5px] opacity-60 mt-1 font-mono font-bold">[4]</span>
            </button>
          </div>
        ` : ''}
      </div>
    </div>
  `;

  // Attach Event Handlers
  const backBtn = container.querySelector('#srs-back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      setScreen('home');
    });
  }

  const flipBtn = container.querySelector('#srs-flip-btn');
  const cardEl = container.querySelector('#srs-card');

  const doFlip = () => {
    if (!isFlipped) {
      isFlipped = true;
      renderSRSReview(container);
      if (state.settings.ttsOn) {
        speak(card.front.replace('___', '').trim(), true);
      }
    }
  };

  if (flipBtn) flipBtn.addEventListener('click', (e) => { e.stopPropagation(); doFlip(); });
  if (cardEl && !isFlipped) cardEl.addEventListener('click', doFlip);

  const speakBtn = container.querySelector('#srs-speak-btn');
  if (speakBtn) {
    speakBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      speak(card.front.replace('___', '').trim(), true);
    });
  }

  // Rating buttons
  container.querySelectorAll('.srs-rating-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const rating = parseInt(btn.getAttribute('data-srs-rating'), 10);
      handleRatingChoice(rating, container);
    });
  });

  // Global keyboard shortcuts (Space/Enter to flip, 1/2/3/4 to rate)
  const handleKeydown = (e) => {
    if (state.screen !== 'srs-review') {
      window.removeEventListener('keydown', handleKeydown);
      return;
    }
    if (!isFlipped && (e.code === 'Space' || e.code === 'Enter')) {
      e.preventDefault();
      doFlip();
    } else if (isFlipped && ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4'].includes(e.code)) {
      e.preventDefault();
      const map = { Digit1: 1, Numpad1: 1, Digit2: 2, Numpad2: 2, Digit3: 3, Numpad3: 3, Digit4: 4, Numpad4: 4 };
      handleRatingChoice(map[e.code], container);
    }
  };

  window.removeEventListener('keydown', handleKeydown);
  window.addEventListener('keydown', handleKeydown, { once: true });
}

function handleRatingChoice(quality, container) {
  const card = dueCards[currentIdx];
  if (!card) return;

  if (quality === 1) sessionStats.again++;
  else if (quality === 2) sessionStats.hard++;
  else if (quality === 3) sessionStats.good++;
  else if (quality === 4) sessionStats.easy++;

  // Record into state
  recordSRSRating(card.id, quality);

  // If card was rated 'Again', re-insert it at the end of the due queue for immediate re-test
  if (quality === 1) {
    dueCards.push(card);
  }

  currentIdx++;
  isFlipped = false;
  renderSRSReview(container);
}

function renderSRSCompletion(container) {
  const totalReviewed = sessionStats.again + sessionStats.hard + sessionStats.good + sessionStats.easy;
  const passedCount = sessionStats.hard + sessionStats.good + sessionStats.easy;
  const accuracy = totalReviewed > 0 ? Math.round((passedCount / totalReviewed) * 100) : 100;

  container.innerHTML = `
    <div class="mx-auto max-w-lg p-5 pb-28 text-center animate-fadeIn">
      <div class="my-6 inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-emerald-100 text-5xl dark:bg-emerald-950/60 shadow-md">
        🎉
      </div>

      <h2 class="text-2xl font-black text-slate-900 dark:text-white">
        ${t('Daily Review Complete!', 'Tagesziel erreicht!')}
      </h2>
      <p class="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm mx-auto leading-relaxed">
        ${t('You reviewed all due cards for today. Your long-term memory is actively consolidating!', 'Du hast alle fälligen Karten für heute gemeistert. Dein Langzeitgedächtnis wird gestärkt!')}
      </p>

      <!-- Session Results Grid -->
      <div class="mt-6 grid grid-cols-2 gap-3 text-left">
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
          <span class="text-[10px] font-black uppercase text-slate-400 tracking-wider">
            ${t('Total Reviews', 'Wiederholungen')}
          </span>
          <div class="text-2xl font-black text-slate-900 dark:text-white mt-0.5">
            ${totalReviewed}
          </div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
          <span class="text-[10px] font-black uppercase text-slate-400 tracking-wider">
            ${t('Retention Accuracy', 'Erfolgsquote')}
          </span>
          <div class="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5">
            ${accuracy}%
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-8 space-y-3">
        <button id="srs-complete-home-btn" class="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-emerald-600 dark:hover:bg-emerald-700 text-sm font-black transition cursor-pointer shadow-sm active:scale-98">
          ${t('Back to Dashboard', 'Zurück zur Startseite')}
        </button>
        <button id="srs-complete-stats-btn" class="w-full py-3.5 rounded-2xl bg-gray-100 hover:bg-gray-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 text-sm font-bold transition cursor-pointer active:scale-98">
          📊 ${t('View Spaced Repetition Stats', 'SRS-Statistik ansehen')}
        </button>
      </div>
    </div>
  `;

  const homeBtn = container.querySelector('#srs-complete-home-btn');
  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      setScreen('home');
    });
  }

  const statsBtn = container.querySelector('#srs-complete-stats-btn');
  if (statsBtn) {
    statsBtn.addEventListener('click', () => {
      setScreen('home');
      state.tab = 'stats';
      notify();
    });
  }
}
