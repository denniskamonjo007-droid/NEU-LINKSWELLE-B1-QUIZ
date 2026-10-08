// B1 German Grammar Training Center View
import { state, setTab, setScreen, t, notify, getGrammarTopicMetrics } from '../state.js';
import { GRAMMAR_TOPICS, QUESTION_TYPES, getGrammarTopicById, filterTopicQuestions, shuffleArray } from '../data/grammar/index.js';
import { startGrammarQuiz } from './grammarQuiz.js';

let selectedTopicForModal = null;

export function renderGrammar(container) {
  let totalAnswered = 0;
  let topicScoresSum = 0;
  let topicsWithScores = 0;

  GRAMMAR_TOPICS.forEach(topic => {
    const metrics = getGrammarTopicMetrics(topic.id);
    totalAnswered += metrics.completed;
    if (metrics.bestScore > 0) {
      topicScoresSum += metrics.bestScore;
      topicsWithScores++;
    }
  });

  const avgMastery = topicsWithScores > 0 ? Math.round(topicScoresSum / topicsWithScores) : 0;
  const totalQuestionsInCurriculum = GRAMMAR_TOPICS.reduce((sum, t) => sum + (t.questions?.length || 0), 0);

  container.innerHTML = `
    <div class="pb-28">
      <!-- Grammar Section Header -->
      <div class="bg-white px-5 py-6 text-slate-900 border-b border-gray-200 dark:bg-slate-900 dark:text-white dark:border-slate-800">
        <div class="flex items-center justify-between">
          <div class="text-[11px] font-black tracking-wider uppercase theme-text">
            📐 ${t('B1 GRAMMAR TRAINER', 'B1 GRAMMATIK-ZENTRUM')}
          </div>
          <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 text-[10px] font-black">
            ${totalQuestionsInCurriculum} ${t('Questions', 'Fragen')}
          </span>
        </div>
        <h1 class="mt-1 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
          ${t('German B1 Grammar Drills', 'B1 Grammatik-Training')}
        </h1>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
          ${t(
            'Targeted questions across all essential B1 grammar topics and 5 question types: Multiple Choice, Fill in Gaps, Sentence Translations, Word Order, and Error Correction.',
            'Gezielte Fragen für alle prüfungsrelevanten B1-Grammatikthemen in 5 Fragetypen: Multiple Choice, Lückentext, Satzübersetzung, Satzbau und Fehlersuche.'
          )}
        </p>

        <!-- Metrics Chips -->
        <div class="mt-4 flex flex-wrap gap-2 text-[11px] font-bold">
          <span class="flex items-center gap-1 rounded-full bg-gray-100 dark:bg-slate-800 px-3 py-1 text-slate-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700">
            📚 ${GRAMMAR_TOPICS.length} ${t('Topics', 'Themen')}
          </span>
          <span class="flex items-center gap-1 rounded-full bg-gray-100 dark:bg-slate-800 px-3 py-1 text-slate-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700">
            🎯 ${totalQuestionsInCurriculum} ${t('Total Questions', 'Fragen gesamt')}
          </span>
          <span class="flex items-center gap-1 rounded-full theme-badge px-3 py-1 font-extrabold">
            📈 ${avgMastery}% ${t('Avg Mastery', 'Ø Beherrschung')}
          </span>
          <span class="flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-950/40 px-3 py-1 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            ✍️ ${totalAnswered} ${t('Answered', 'Geübt')}
          </span>
        </div>

        <!-- 5 Question Types Legend Pill -->
        <div class="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700/60 text-xs">
          <div class="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-wider mb-1.5">
            ${t('5 QUESTION TYPES PER TOPIC', '5 FRAGETYPEN JE THEMA')}
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300">
            <span>🎯 1. Multiple Choice</span>
            <span>🧩 2. ${t('Fill in Gaps', 'Lückentext')}</span>
            <span>🌐 3. ${t('Translations', 'Satzübersetzung')}</span>
            <span>🔀 4. ${t('Word Order', 'Satzbau & Verben')}</span>
            <span>🔍 5. ${t('Error Spotting', 'Fehlersuche')}</span>
            <span class="text-emerald-600 dark:text-emerald-400">🔁 ${t('Mistake Drills', 'Fehler-Wiederholung')}</span>
          </div>
        </div>
      </div>

      <!-- Quick Mixed Drill Banner -->
      <div class="p-4">
        <div class="rounded-2xl border-2 border-indigo-200 dark:border-indigo-900 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 p-4.5 shadow-xs flex items-center justify-between">
          <div>
            <span class="text-[9.5px] font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
              ⚡ ${t('RAPID MIXED DRILL', 'SCHNELLER MIXED-DRILL')}
            </span>
            <h3 class="text-sm font-black text-slate-900 dark:text-white mt-0.5">
              ${t('20 Random Grammar Questions', '20 Zufällige Grammatikfragen')}
            </h3>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              ${t('Drill mixed questions from all 8 B1 grammar topics', 'Gemischte Fragen aus allen 8 B1-Themen trainieren')}
            </p>
          </div>
          <button id="grammar-rapid-drill-btn" class="shrink-0 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black shadow-xs transition active:scale-95 cursor-pointer">
            ${t('Start Drill', 'Drill starten')} ›
          </button>
        </div>
      </div>

      <!-- Grammar Topics List -->
      <div class="px-4 space-y-4">
        <div class="flex items-center justify-between px-1">
          <h2 class="text-xs font-black tracking-wider text-slate-400 dark:text-slate-500 uppercase">
            ${t('B1 GRAMMAR MASTER CURRICULUM (17 TOPICS)', 'B1-GRAMMATIK GESAMTCURRICULUM (17 THEMEN)')}
          </h2>
          <span class="text-[10px] text-slate-400 font-bold">
            ${GRAMMAR_TOPICS.length} ${t('topics', 'Themen')}
          </span>
        </div>

        ${GRAMMAR_TOPICS.map((topic, index) => {
          const metrics = getGrammarTopicMetrics(topic.id);
          const bestScore = metrics.bestScore || 0;
          const questionsCount = topic.questions?.length || 100;
          const missedCount = metrics.missedCount || 0;

          return `
            <div data-topic-id="${topic.id}" class="grammar-topic-card rounded-2xl border border-gray-200 bg-white p-5 shadow-xs dark:bg-slate-900 dark:border-slate-800 transition hover:border-slate-300 dark:hover:border-slate-700">
              <!-- Top Card Info -->
              <div class="flex items-start justify-between gap-3">
                <div class="flex items-start gap-3.5">
                  <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-2xl shadow-xs">
                    ${topic.icon}
                  </div>
                  <div>
                    <div class="flex items-center gap-2 flex-wrap">
                      <h3 class="text-sm font-black text-slate-900 dark:text-white">
                        ${state.settings.lang === 'de' ? topic.titleDe : topic.titleEn}
                      </h3>
                      <span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[9.5px] font-extrabold text-slate-600 dark:text-slate-300">
                        ${topic.badge}
                      </span>
                    </div>
                    <p class="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                      ${state.settings.lang === 'de' ? topic.summaryDe : topic.summaryEn}
                    </p>
                  </div>
                </div>
                ${bestScore > 0 ? `
                  <div class="text-right shrink-0">
                    <span class="px-2.5 py-1 rounded-xl text-xs font-black ${
                      bestScore >= 80
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                        : bestScore >= 60
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                        : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    }">
                      ${bestScore}%
                    </span>
                    <div class="text-[9px] text-slate-400 mt-0.5 font-bold">${t('Best Score', 'Höchstwert')}</div>
                  </div>
                ` : ''}
              </div>

              <!-- Progress Bar -->
              <div class="mt-3.5">
                <div class="flex justify-between items-center text-[10.5px] text-slate-400 mb-1 font-bold">
                  <span>${questionsCount} ${t('Questions total', 'Fragen gesamt')}</span>
                  <span>${metrics.completed} ${t('practiced', 'absolviert')} (${metrics.attempts} ${t('rounds', 'Runden')})</span>
                </div>
                <div class="h-2 w-full rounded-full bg-gray-100 dark:bg-slate-800 overflow-hidden">
                  <div class="h-full rounded-full bg-emerald-500 dark:bg-emerald-400 transition-all duration-500" style="width: ${bestScore}%"></div>
                </div>
              </div>

              <!-- Topic Controls & Launch Bar -->
              <div class="mt-4 pt-3.5 border-t border-gray-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                <div class="flex items-center gap-1.5">
                  <button data-rule-topic="${topic.id}" class="grammar-cheat-sheet-btn flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition cursor-pointer">
                    <span>📖</span> ${t('Rules & Cheat Sheet', 'Grammatik-Regeln')}
                  </button>
                  ${missedCount > 0 ? `
                    <button data-missed-topic="${topic.id}" class="grammar-repeat-missed-btn flex items-center gap-1 px-3 py-1.5 rounded-xl bg-red-50 hover:bg-red-100 dark:bg-red-950/30 dark:hover:bg-red-900/40 text-red-700 dark:text-red-300 text-xs font-black transition cursor-pointer">
                      <span>🔁</span> ${missedCount} ${t('Missed', 'Fehler üben')}
                    </button>
                  ` : ''}
                </div>

                <div class="flex items-center gap-2">
                  <select data-batch-topic="${topic.id}" class="grammar-batch-select text-xs font-bold bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl px-2.5 py-1.5 border border-gray-200 dark:border-slate-700 focus:outline-none">
                    <option value="20" selected>20 ${t('Questions', 'Fragen')}</option>
                    <option value="10">10 ${t('Questions', 'Fragen')}</option>
                    <option value="50">50 ${t('Questions', 'Fragen')}</option>
                    <option value="100">100 ${t('All Questions', 'Alle 100')}</option>
                  </select>
                  <button data-start-topic="${topic.id}" class="grammar-start-test-btn px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-emerald-600 dark:hover:bg-emerald-700 text-xs font-black shadow-xs transition active:scale-95 cursor-pointer">
                    ${t('Start Practice', 'Starten')} ›
                  </button>
                </div>
              </div>

              <!-- Question Type Quick Filter Drawer -->
              <div class="mt-3 flex flex-wrap gap-1.5">
                ${QUESTION_TYPES.map(qType => `
                  <button data-type-filter="${qType.id}" data-topic-id="${topic.id}" class="grammar-type-filter-chip px-2.5 py-1 rounded-lg text-[10px] font-bold bg-gray-50 hover:bg-gray-100 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 border border-gray-200/60 dark:border-slate-700/60 transition cursor-pointer">
                    ${qType.icon} ${state.settings.lang === 'de' ? qType.nameDe : qType.nameEn}
                  </button>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Rule Cheat Sheet Modal Container -->
    <div id="grammar-modal-backdrop" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs hidden flex items-center justify-center p-4">
      <div id="grammar-modal-content" class="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 p-6 text-slate-900 dark:text-white shadow-2xl border border-gray-200 dark:border-slate-800">
        <!-- Rendered dynamically -->
      </div>
    </div>
  `;

  // Attach Event Handlers
  container.querySelector('#grammar-rapid-drill-btn')?.addEventListener('click', () => {
    // Generate 20 random questions drawn from across all topics
    const allQuestions = GRAMMAR_TOPICS.flatMap(t => t.questions || []);
    const randomized = shuffleArray(allQuestions).slice(0, 20);
    startGrammarQuiz('mixed', randomized, t('Mixed Grammar Drill (20 Qs)', 'Gemischter Grammatik-Drill (20 Fragen)'));
  });

  // Start Topic Test Buttons
  container.querySelectorAll('.grammar-start-test-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const topicId = btn.getAttribute('data-start-topic');
      const batchSelect = container.querySelector(`select[data-batch-topic="${topicId}"]`);
      const batchSize = parseInt(batchSelect?.value || '20', 10);
      launchTopicTest(topicId, 'all', batchSize);
    });
  });

  // Type Filter Chips
  container.querySelectorAll('.grammar-type-filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const topicId = btn.getAttribute('data-topic-id');
      const filterType = btn.getAttribute('data-type-filter');
      const batchSelect = container.querySelector(`select[data-batch-topic="${topicId}"]`);
      const batchSize = parseInt(batchSelect?.value || '20', 10);
      launchTopicTest(topicId, filterType, batchSize);
    });
  });

  // Repeat Missed Questions Buttons
  container.querySelectorAll('.grammar-repeat-missed-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const topicId = btn.getAttribute('data-missed-topic');
      const metrics = getGrammarTopicMetrics(topicId);
      const missedQuestions = filterTopicQuestions(topicId, 'mistakes', metrics.missedIds);
      const topic = getGrammarTopicById(topicId);
      startGrammarQuiz(
        topicId,
        shuffleArray(missedQuestions),
        `${topic.titleDe} • ${t('Mistakes Drill', 'Fehler wiederholen')} (${missedQuestions.length})`
      );
    });
  });

  // Cheat Sheet Modal Buttons
  container.querySelectorAll('.grammar-cheat-sheet-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const topicId = btn.getAttribute('data-rule-topic');
      openCheatSheetModal(topicId, container);
    });
  });
}

function launchTopicTest(topicId, filterType, batchSize) {
  const topic = getGrammarTopicById(topicId);
  const questionsPool = filterTopicQuestions(topicId, filterType);
  const selectedQuestions = shuffleArray(questionsPool).slice(0, batchSize);
  
  const typeObj = QUESTION_TYPES.find(qt => qt.id === filterType);
  const typeLabel = typeObj ? (state.settings.lang === 'de' ? typeObj.nameDe : typeObj.nameEn) : '';
  const title = `${topic.titleDe} • ${typeLabel} (${selectedQuestions.length})`;
  
  startGrammarQuiz(topicId, selectedQuestions, title);
}

function openCheatSheetModal(topicId, container) {
  const topic = getGrammarTopicById(topicId);
  const modalBackdrop = container.querySelector('#grammar-modal-backdrop');
  const modalContent = container.querySelector('#grammar-modal-content');
  if (!modalBackdrop || !modalContent) return;

  const cs = topic.cheatSheet || {};

  modalContent.innerHTML = `
    <div class="flex items-start justify-between border-b border-gray-100 pb-3 dark:border-slate-800">
      <div class="flex items-center gap-2.5">
        <span class="text-2xl">${topic.icon}</span>
        <div>
          <h3 class="text-base font-black text-slate-900 dark:text-white">
            ${topic.titleDe}
          </h3>
          <p class="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
            ${t('B1 Grammar Cheat Sheet', 'B1-Grammatik Spickzettel')}
          </p>
        </div>
      </div>
      <button id="grammar-modal-close-btn" class="h-8 w-8 rounded-full bg-gray-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white font-bold flex items-center justify-center cursor-pointer">
        ✕
      </button>
    </div>

    <div class="mt-4 space-y-4 text-xs">
      <!-- Main Rule Box -->
      <div class="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-300 font-semibold leading-relaxed">
        <span class="font-black">📌 ${t('Core Rule', 'Hauptregel')}:</span> ${cs.rule || topic.summaryDe}
      </div>

      <!-- Golden Rules -->
      ${cs.goldenRules ? `
        <div class="space-y-2">
          <div class="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-wider">
            ⭐ ${t('GOLDEN RULES & EXAM TRAPS', 'GOLDENE REGELN & PRÜFUNGSFALLEN')}
          </div>
          ${cs.goldenRules.map(gr => `
            <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 text-amber-900 dark:text-amber-200 font-bold leading-normal">
              ${gr}
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Key Table / Connectors if available -->
      ${cs.keyConnectors ? `
        <div>
          <div class="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-wider mb-2">
            🔗 ${t('SIGNAL CONNECTORS & MEANINGS', 'SIGNAL-KONJUNKTIONEN')}
          </div>
          <div class="space-y-1.5 max-h-48 overflow-y-auto no-scrollbar">
            ${cs.keyConnectors.map(c => `
              <div class="p-2.5 rounded-xl bg-gray-50 dark:bg-slate-800/80 border border-gray-100 dark:border-slate-700/60 flex items-start justify-between gap-2">
                <div>
                  <span class="font-black text-slate-900 dark:text-white">${c.conn}</span>
                  <span class="text-slate-500 dark:text-slate-400 text-[10px] ml-1">(${c.meaning})</span>
                </div>
                <span class="text-[10.5px] italic text-slate-600 dark:text-slate-300 text-right max-w-[200px]">${c.example}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Quick Launch button in modal -->
      <div class="pt-4 border-t border-gray-100 dark:border-slate-800 flex justify-end gap-2">
        <button id="modal-start-test-btn" class="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-emerald-600 dark:hover:bg-emerald-700 font-black transition active:scale-98 cursor-pointer">
          ${t('Start Practice Round Now', 'Jetzt 20 Fragen üben')} ›
        </button>
      </div>
    </div>
  `;

  modalBackdrop.classList.remove('hidden');

  modalContent.querySelector('#grammar-modal-close-btn')?.addEventListener('click', () => {
    modalBackdrop.classList.add('hidden');
  });

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) modalBackdrop.classList.add('hidden');
  });

  modalContent.querySelector('#modal-start-test-btn')?.addEventListener('click', () => {
    modalBackdrop.classList.add('hidden');
    launchTopicTest(topicId, 'all', 20);
  });
}
