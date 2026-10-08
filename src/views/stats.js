import { state, t, setTab, getGrammarTopicMetrics } from '../state.js';
import { startWeakWordsTraining } from './quiz.js';
import { VOCAB } from '../data/vocab.js';
import { GRAMMAR_TOPICS } from '../data/grammar/index.js';
import { getSRSMetrics } from '../utils/srsManager.js';
import { startSRSReviewSession } from './srsReview.js';

// Icons mapping for topics
const ICONS = {
  "Daily Life & Home": "🏡",
  "Work & Education": "💼",
  "People & Relationships": "👥",
  "Travel & Transportation": "✈️",
  "Communication": "📱",
  "Food & Dining": "🍽️",
  "Health & Body": "🏥",
  "Money & Shopping": "💳",
  "Time & Schedule": "⏰",
  "Environment & Nature": "🌿",
  "Leisure & Culture": "🎭",
  "Emotions & Opinions": "💭",
  "Technology & Media": "💻",
  "Society & Law": "⚖️",
  "Buildings & Places": "🏛️"
};

export function renderStats(container) {
  const topicsList = Object.keys(VOCAB);

  // Overall Statistics computation
  const getOverallProgressDetails = () => {
    let sum = 0;
    let count = 0;
    Object.values(state.progress).forEach((topicObj) => {
      Object.values(topicObj).forEach((modeObj) => {
        if (modeObj) {
          sum += modeObj.pct;
          count++;
        }
      });
    });
    return {
      pct: count > 0 ? Math.round(sum / count) : 0,
      quizzesDone: count,
    };
  };

  const stat = getOverallProgressDetails();
  const srsMetrics = getSRSMetrics();

  // Compute last 28 days list for studies heatmap
  const getHeatmapCells = () => {
    const list = [];
    const nowTime = new Date().setHours(0, 0, 0, 0);
    for (let i = 27; i >= 0; i--) {
      const targetDate = new Date(nowTime - i * 86400000);
      const str = targetDate.toISOString().slice(0, 10);
      const studyPoints = state.activity[str] || 0;
      list.push({ date: str, count: studyPoints });
    }
    return list;
  };

  const heatmapList = getHeatmapCells();
  const weakWordsList = Object.values(state.missedWords)
    .sort((a, b) => b.count - a.count);

  // B1 Grammar Training Metrics
  let totalGrammarAnswered = 0;
  let totalGrammarAttempts = 0;
  let grammarScoreSum = 0;
  let topicsPracticed = 0;
  GRAMMAR_TOPICS.forEach(tObj => {
    const m = getGrammarTopicMetrics(tObj.id);
    totalGrammarAnswered += m.completed;
    totalGrammarAttempts += m.attempts;
    if (m.bestScore > 0) {
      grammarScoreSum += m.bestScore;
      topicsPracticed++;
    }
  });
  const avgGrammarMastery = topicsPracticed > 0 ? Math.round(grammarScoreSum / topicsPracticed) : 0;

  container.innerHTML = `
    <div class="mx-auto max-w-lg pb-28">
      <!-- Title Navbar -->
      <div class="sticky top-0 z-10 flex items-center justify-between bg-white px-4 py-4.5 text-slate-900 dark:bg-slate-900 dark:text-white border-b border-gray-200 dark:border-slate-800">
        <h2 class="text-base font-extrabold flex items-center gap-1.5 text-slate-900 dark:text-white">
          <span>📈</span> ${t('Study Progress', 'Lernstatistik')}
        </h2>
      </div>

      <div class="p-4 space-y-4">
        <!-- Overall circular card code -->
        <div class="rounded-2xl border border-gray-100 bg-white p-5 text-center dark:bg-slate-900 dark:border-slate-850/50 shadow-xs">
          <h3 class="text-xs font-black tracking-wider text-gray-400 dark:text-slate-500 uppercase">
            ${t('OVERALL PROGRESS RATE', 'GESAMTFORTSCHRITT')}
          </h3>
          <div class="mt-4 flex flex-col items-center justify-center">
            <div class="relative flex h-28 w-28 items-center justify-center rounded-full border-4 border-emerald-500">
              <span class="text-4xl font-black text-gray-800 dark:text-white">
                ${stat.pct}
                <span class="text-sm font-semibold text-gray-400">%</span>
              </span>
            </div>
            <div class="text-xs font-bold text-gray-500 mt-3 dark:text-slate-400">
              ${stat.quizzesDone} ${t('quizzes completed', 'Tests absolviert')}
            </div>
          </div>
        </div>

        <!-- Spaced Repetition (SRS / Anki-Style) Daily Memory Matrix -->
        <div class="rounded-2xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 p-5 dark:bg-slate-900 dark:border-slate-800 shadow-xs text-left">
          <div class="flex items-center justify-between mb-3">
            <div>
              <h3 class="text-xs font-black tracking-wider text-indigo-700 dark:text-indigo-400 uppercase flex items-center gap-1.5">
                <span>🧠</span> ${t('SPACED REPETITION (SM-2 / ANKI)', 'SPACED REPETITION (SM-2 / ANKI)')}
              </h3>
              <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 font-semibold">
                ${srsMetrics.dueCount > 0 ? `⏰ ${srsMetrics.dueCount} ${t('cards due today for review', 'Karten heute zur Wiederholung fällig')}` : `✅ ${t('All cards reviewed for today!', 'Alle Karten für heute wiederholt!')}`}
              </p>
            </div>
            <button id="stats-start-srs-btn" class="px-2.5 py-1 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-black transition cursor-pointer shadow-xs active:scale-95">
              ${srsMetrics.dueCount > 0 ? `${t('Review', 'Wiederholen')} (${srsMetrics.dueCount}) ›` : `${t('Review Ahead', 'Wiederholen')} ›`}
            </button>
          </div>

          <div class="grid grid-cols-3 gap-2 mt-4 text-center">
            <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/40">
              <span class="text-[9.5px] font-black uppercase text-amber-700 dark:text-amber-400 block">${t('Due Today', 'Heute fällig')}</span>
              <span class="text-xl font-black text-amber-900 dark:text-amber-200">${srsMetrics.dueCount}</span>
            </div>
            <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/40">
              <span class="text-[9.5px] font-black uppercase text-blue-700 dark:text-blue-400 block">${t('Learning', 'Lernphase')}</span>
              <span class="text-xl font-black text-blue-900 dark:text-blue-200">${srsMetrics.learningCount}</span>
            </div>
            <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/40">
              <span class="text-[9.5px] font-black uppercase text-emerald-700 dark:text-emerald-400 block">${t('Mature (30d+)', 'Gemeistert')}</span>
              <span class="text-xl font-black text-emerald-900 dark:text-emerald-200">${srsMetrics.matureCount}</span>
            </div>
          </div>

          <div class="mt-3.5 pt-3 border-t border-indigo-150 dark:border-indigo-900/40 flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
            <span>${t('Retention Accuracy:', 'Erfolgsquote:')} <strong class="text-indigo-600 dark:text-indigo-400">${srsMetrics.retentionRate}%</strong></span>
            <span>${t('Total Reviews:', 'Wiederholungen:')} <strong class="text-slate-700 dark:text-slate-300">${srsMetrics.totalReviews}</strong></span>
          </div>
        </div>

        <!-- B1 Grammar Training Progress Card -->
        <div class="rounded-2xl border border-gray-150 bg-white p-5 dark:bg-slate-900 dark:border-slate-850/50 shadow-xs text-left">
          <div class="flex items-center justify-between mb-3">
            <div>
              <h3 class="text-xs font-black tracking-wider text-gray-400 dark:text-slate-500 uppercase flex items-center gap-1.5">
                <span>📐</span> ${t('B1 GRAMMAR MASTERY', 'B1-GRAMMATIK FORTSCHRITT')}
              </h3>
              <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 font-semibold">
                ${totalGrammarAnswered} ${t(`questions answered across ${GRAMMAR_TOPICS.length} topics`, `Fragen in ${GRAMMAR_TOPICS.length} Themen absolviert`)}
              </p>
            </div>
            <button id="stats-open-grammar-btn" class="px-2.5 py-1 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-black transition cursor-pointer">
              ${t('Open Trainer', 'Grammatik')} ›
            </button>
          </div>

          <div class="space-y-2 mt-3">
            ${GRAMMAR_TOPICS.map(gt => {
              const gm = getGrammarTopicMetrics(gt.id);
              const score = gm.bestScore || 0;
              let barColor = 'bg-rose-500';
              if (score >= 80) barColor = 'bg-emerald-500';
              else if (score >= 50) barColor = 'bg-amber-500';
              return `
                <div class="flex items-center gap-2.5">
                  <span class="w-6 shrink-0 text-center text-sm">${gt.icon}</span>
                  <span class="w-32 truncate text-xs font-bold text-slate-700 dark:text-slate-300">
                    ${state.settings.lang === 'de' ? gt.titleDe : gt.titleEn}
                  </span>
                  <div class="h-2.5 flex-1 rounded-full bg-gray-100 dark:bg-slate-800 overflow-hidden relative">
                    <div class="h-full rounded-full transition-all duration-500 ${barColor}" style="width: ${score}%"></div>
                  </div>
                  <span class="w-8 shrink-0 text-right text-xs font-black text-slate-800 dark:text-slate-200">
                    ${score > 0 ? `${score}%` : '0%'}
                  </span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Charts and bars score card -->
        <div class="rounded-2xl border border-gray-100 bg-white p-5 dark:bg-slate-900 dark:border-slate-850/50 shadow-xs">
          <h3 class="text-xs font-black tracking-wider text-gray-400 dark:text-slate-500 uppercase mb-4 text-left">
            ${t('BEST SCORE PER TOPIC', 'BESTER TEST JE KATEGORIE')}
          </h3>
          <div class="space-y-3.5">
            ${topicsList.map((tp, tpIdx) => {
              const bestScore = Object.values(state.progress[tp] || {}).reduce((best, curr) => Math.max(best, curr?.pct || 0), 0);
              let barColor = 'bg-rose-500';
              if (bestScore >= 80) {
                barColor = 'bg-emerald-500';
              } else if (bestScore >= 50) {
                barColor = 'bg-amber-500';
              }
              const numStr = tpIdx + 1 < 10 ? `0${tpIdx + 1}` : `${tpIdx + 1}`;
              return `
                <div class="flex items-center gap-3">
                  <span class="w-32 truncate text-right text-xs font-semibold text-gray-500 dark:text-slate-400">
                    <span class="font-mono text-[10px] text-indigo-500 mr-1">${numStr}.</span>${ICONS[tp] || '📖'} ${tp}
                  </span>
                  <div class="h-4 flex-1 rounded-full bg-gray-100 dark:bg-slate-800 overflow-hidden relative">
                    <div
                      class="h-full rounded-full transition-all duration-500 ${barColor}"
                      style="width: ${bestScore}%"
                    ></div>
                  </div>
                  <span class="w-8 shrink-0 text-left text-xs font-extrabold text-gray-700 dark:text-slate-300">
                    ${bestScore}%
                  </span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- GitHub Heatmap activity card -->
        <div class="rounded-2xl border border-gray-100 bg-white p-5 dark:bg-slate-900 dark:border-slate-850/50 shadow-xs text-left">
          <h3 class="text-xs font-black tracking-wider text-gray-400 dark:text-slate-500 uppercase mb-2">
            ${t('ACTIVITY LOG (Last 28 days)', 'AKTIVITÄTSMETER (Letzte 28 Tage)')}
          </h3>
          <p class="text-[10px] text-gray-400 mt-1 dark:text-slate-450 leading-relaxed mb-4 font-semibold">
            ${t('Visualizing your commitment. Greener cells mark sessions cleared.', 'Farbige Zellen stehen für absolvierte Übungssitzungen am jeweiligen Tag.')}
          </p>
          <div class="grid grid-cols-7 gap-2">
            ${heatmapList.map((cell) => {
              let colorCls = 'bg-gray-100 dark:bg-slate-850';
              if (cell.count > 0) {
                if (cell.count >= 8) colorCls = 'bg-emerald-600 dark:bg-emerald-500';
                else if (cell.count >= 4) colorCls = 'bg-emerald-450 dark:bg-emerald-650';
                else if (cell.count >= 2) colorCls = 'bg-emerald-300 dark:bg-emerald-800';
                else colorCls = 'bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300/10';
              }
              return `
                <div
                  title="${cell.date}: ${cell.count} points"
                  class="aspect-square rounded-md transition duration-150 ${colorCls}"
                ></div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Weak Words checklist helper -->
        <div class="rounded-2xl border border-gray-100 bg-white p-5 dark:bg-slate-900 dark:border-slate-850/50 shadow-xs">
          <div class="flex items-center justify-between border-b border-gray-50 pb-3 dark:border-slate-850">
            <h3 class="text-xs font-black tracking-wider text-gray-400 dark:text-slate-500 uppercase">
              ${t('WEAK WORDS TRACKER', 'SCHWACHE WÖRTER')}
            </h3>
            ${weakWordsList.length > 0 ? `
              <button
                id="train-weak-btn"
                class="rounded-lg bg-orange-600 hover:bg-orange-700 px-3 py-1.5 font-black text-[10px] tracking-wide text-white uppercase active:scale-95 transition cursor-pointer"
              >
                ${t('Train Weak', 'Lernen')}
              </button>
            ` : ''}
          </div>

          <div class="mt-4 space-y-2 text-left">
            ${weakWordsList.length > 0 ? 
              weakWordsList.slice(0, 5).map((w, index) => `
                <div class="flex items-center justify-between rounded-xl bg-gray-50 dark:bg-slate-850/50 p-3 border border-gray-100/50 dark:border-slate-800/50">
                  <div>
                    <div class="text-sm font-black text-slate-800 dark:text-white capitalize">${w.g}</div>
                    <div class="text-xs text-slate-400 dark:text-slate-400 capitalize">${w.e}</div>
                  </div>
                  <span class="rounded-md bg-rose-50 px-2 py-0.5 text-[10px] font-black text-rose-600 dark:bg-rose-950/20 dark:text-rose-400 border border-rose-250/25">
                    ${t('Missed', 'Fehler')}: ${index + 1}
                  </span>
                </div>
              `).join('')
            : `
              <div class="py-6 text-center text-xs text-gray-400 dark:text-slate-500 font-semibold">
                ${t('No weak words captured! Clear quizzes to detect mistakes.', 'Keine fehlerhaften Wörter erfasst! Vokabeltests abschließen für Detektion.')}
              </div>
            `}
          </div>
        </div>
      </div>
    </div>
  `;

  const trainBtn = container.querySelector('#train-weak-btn');
  if (trainBtn) {
    trainBtn.addEventListener('click', startWeakWordsTraining);
  }

  container.querySelector('#stats-start-srs-btn')?.addEventListener('click', () => {
    startSRSReviewSession();
  });

  container.querySelector('#stats-open-grammar-btn')?.addEventListener('click', () => {
    setTab('grammar');
  });
}
