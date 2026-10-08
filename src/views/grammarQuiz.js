// Dedicated Interactive B1 Grammar Test Runner for all 5 Question Types
import { state, setScreen, t, recordGrammarSessionResult, notify } from '../state.js';
import { speak } from '../utils/audio.js';
import { getGrammarTopicById, shuffleArray } from '../data/grammar/index.js';
import { getGrammarPromptTranslation } from '../data/grammar/promptTranslations.js';

let activeTopicId = 'nebensaetze';
let testTitle = '';
let questions = [];
let answers = []; // Each slot: { chosen: any, isCorrect: boolean, errorDetails?: string }
let currentIdx = 0;

// Scrambled word order active state for current question
let wordOrderChosen = [];
let wordOrderAvailable = [];

export function startGrammarQuiz(topicId, qList, titleStr) {
  activeTopicId = topicId;
  testTitle = titleStr || 'B1 Grammar Test';
  
  // Randomize answer option positions so the correct answer is not always letter A
  questions = (qList || []).map((q) => {
    if (q.options && Array.isArray(q.options) && q.options.length > 1) {
      const correctIdx = q.correct !== undefined ? q.correct : 0;
      const correctText = q.options[correctIdx];
      const shuffledOptions = shuffleArray([...q.options]);
      const newCorrectIdx = shuffledOptions.indexOf(correctText);
      return {
        ...q,
        options: shuffledOptions,
        correct: newCorrectIdx >= 0 ? newCorrectIdx : 0
      };
    }
    return { ...q };
  });

  answers = new Array(questions.length).fill(null);
  currentIdx = 0;
  initWordOrderForCurrent();
  setScreen('grammar-quiz');
}

function initWordOrderForCurrent() {
  const q = questions[currentIdx];
  if (q && q.type === 'word_order') {
    const existing = answers[currentIdx];
    if (existing && existing.chosen) {
      wordOrderChosen = typeof existing.chosen === 'string' ? existing.chosen.split(' ') : existing.chosen;
      wordOrderAvailable = [];
    } else if (q.scrambled) {
      wordOrderChosen = [];
      wordOrderAvailable = shuffleArray(q.scrambled);
    }
  }
}

export function renderGrammarQuiz(container) {
  if (!questions || questions.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center">
        <p class="text-sm font-bold text-slate-500">${t('No questions available.', 'Keine Fragen verfügbar.')}</p>
        <button id="grammar-empty-back-btn" class="mt-4 px-4 py-2 bg-slate-900 text-white rounded-xl font-bold cursor-pointer">
          ${t('Back to Grammar', 'Zurück zur Grammatik')}
        </button>
      </div>
    `;
    container.querySelector('#grammar-empty-back-btn')?.addEventListener('click', () => setScreen('home'));
    return;
  }

  // Check if all questions have been answered and user is on results screen
  const isFinished = answers.every(a => a !== null) && answers.length > 0 && currentIdx >= questions.length;
  if (isFinished) {
    renderGrammarResults(container);
    return;
  }

  const q = questions[currentIdx];
  const promptEn = getGrammarPromptTranslation(q);
  const total = questions.length;
  const currentAnswer = answers[currentIdx];
  const hasAnswered = currentAnswer !== null;

  // Question type metadata
  const typeIcons = {
    multiple_choice: '🎯',
    gap_fill: '🧩',
    sentence_translation: '🌐',
    word_order: '🔀',
    error_correction: '🔍'
  };

  const typeLabels = {
    multiple_choice: t('Multiple Choice', 'Multiple Choice (Regel)'),
    gap_fill: t('Fill in the Gaps', 'Lückentext'),
    sentence_translation: t('Sentence Translation', 'Satzübersetzung'),
    word_order: t('Word Order / Satzbau', 'Satzbau & Verbstellung'),
    error_correction: t('Spot the Grammar Error', 'Fehlersuche & Korrektur')
  };

  container.innerHTML = `
    <div class="pb-28">
      <!-- Sticky Navigation Header -->
      <div class="sticky top-0 z-20 flex items-center justify-between bg-white px-4 py-4 text-slate-900 dark:bg-slate-900 dark:text-white border-b border-gray-200 dark:border-slate-800">
        <div class="flex items-center gap-3">
          <button id="gquiz-back-btn" class="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 text-lg font-bold transition active:scale-95 cursor-pointer">
            ‹
          </button>
          <div class="flex-1 min-w-0">
            <h2 class="truncate text-xs font-black tracking-tight text-slate-900 dark:text-white">
              ${testTitle}
            </h2>
            <div class="flex items-center gap-1.5 mt-0.5 text-[10px] text-slate-500 font-extrabold">
              <span>${typeIcons[q.type] || '📐'}</span>
              <span>${typeLabels[q.type] || q.type}</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 text-[9.5px] font-black text-emerald-700 dark:text-emerald-400 border border-emerald-200/50" title="${t('Grammar test sealed & verified by Service Worker', 'Grammatik-Test versiegelt & geschützt durch Service Worker')}">
            🛡️ ${t('Integrity Verified', 'Versiegelt')}
          </span>
          <button id="gquiz-rule-hint-btn" class="p-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-black cursor-pointer" title="${t('View Grammar Rule', 'Regel ansehen')}">
            📖 ${t('Rule', 'Regel')}
          </button>
          <span class="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-black text-slate-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700">
            ${currentIdx + 1} / ${total}
          </span>
        </div>
      </div>

      <div class="p-4">
        <!-- Progress Bar -->
        <div class="h-1.5 w-full rounded-full bg-gray-100 dark:bg-slate-800 overflow-hidden mb-4">
          <div class="h-full rounded-full bg-slate-900 dark:bg-emerald-500 transition-all duration-300" style="width: ${((currentIdx + 1) / total) * 100}%"></div>
        </div>

        <!-- Question Tracker Dots -->
        <div class="flex flex-wrap gap-1.5 mb-5 justify-center select-none">
          ${questions.map((_, i) => {
            const ans = answers[i];
            let cellStyle = 'border-gray-200 bg-white dark:bg-slate-900 dark:border-slate-800 text-gray-400';
            if (i === currentIdx) {
              cellStyle = 'border-slate-900 bg-slate-900 text-white dark:border-emerald-500 dark:bg-emerald-600';
            } else if (ans !== null) {
              cellStyle = ans.isCorrect
                ? 'border-emerald-400 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800'
                : 'border-red-400 bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800';
            }
            return `
              <button data-dot-idx="${i}" class="gquiz-dot-btn flex h-7 w-7 items-center justify-center rounded-lg border text-[11px] font-black transition cursor-pointer active:scale-95 ${cellStyle}">
                ${i + 1}
              </button>
            `;
          }).join('')}
        </div>

        <!-- Question Card -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs dark:bg-slate-900 dark:border-slate-800">
          <div class="flex items-center justify-between border-b border-gray-100 pb-3 dark:border-slate-800">
            <span class="rounded-lg bg-slate-100 px-2.5 py-1 text-[9.5px] font-black uppercase text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              ${typeIcons[q.type]} ${typeLabels[q.type]}
            </span>
            <div class="flex items-center gap-1.5">
              <button id="gquiz-speak-btn" class="flex items-center gap-1 rounded-xl bg-gray-50 border border-gray-200 dark:bg-slate-800 dark:border-slate-700 px-2.5 py-1 text-[11px] font-bold text-slate-600 dark:text-slate-300 hover:bg-gray-100 cursor-pointer">
                🔊 ${t('Listen', 'Anhören')}
              </button>
            </div>
          </div>

          <!-- Prompt Area -->
          <div class="mt-4">
            <div class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              ${q.sub || t('Choose the grammatically correct answer', 'Wähle die grammatikalisch korrekte Antwort')}
            </div>
            
            ${q.type === 'error_correction' ? `
              <div class="mt-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                ${t('Which segment contains a grammar mistake? Tap the erroneous segment:', 'Welcher Teil enthält den Grammatikfehler? Klicke auf den falschen Satzteil:')}
              </div>
            ` : ''}

            <h3 class="text-xl font-black mt-2 text-slate-900 dark:text-white leading-snug">
              ${q.type === 'error_correction' ? renderErrorCorrectionPrompt(q, hasAnswered, currentAnswer) : q.prompt}
            </h3>

            ${promptEn ? `
              <div class="mt-2.5 flex items-start gap-2 p-2.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-150 dark:border-indigo-900/50 text-slate-700 dark:text-slate-300">
                <span class="shrink-0 px-1.5 py-0.5 rounded text-[9.5px] font-black uppercase tracking-wider bg-indigo-200/80 text-indigo-900 dark:bg-indigo-900/70 dark:text-indigo-200">
                  EN
                </span>
                <p class="text-xs font-semibold leading-relaxed text-indigo-950 dark:text-indigo-200">
                  ${promptEn}
                </p>
              </div>
            ` : ''}
          </div>

          <!-- Interactive Question Type Dispatch -->
          <div class="mt-6 border-t border-gray-100 pt-4 dark:border-slate-800">
            ${renderQuestionInteractiveArea(q, hasAnswered, currentAnswer)}
          </div>

          <!-- Explanation Feedback Card -->
          ${hasAnswered ? `
            <div class="mt-5 p-4 rounded-xl border ${
              currentAnswer.isCorrect
                ? 'bg-emerald-50 text-emerald-900 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-200 dark:border-emerald-800'
                : 'bg-red-50 text-red-900 border-red-200 dark:bg-red-950/30 dark:text-red-200 dark:border-red-800'
            }">
              <div class="flex items-center gap-2 font-black text-sm">
                <span>${currentAnswer.isCorrect ? '✅ ' + t('Correct!', 'Richtig!') : '❌ ' + t('Incorrect', 'Nicht ganz richtig')}</span>
                <span class="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full ${
                  currentAnswer.isCorrect ? 'bg-emerald-200/60 dark:bg-emerald-900/60' : 'bg-red-200/60 dark:bg-red-900/60'
                }">
                  ${q.rule || 'B1 Grammatik'}
                </span>
              </div>
              <p class="text-xs mt-2 leading-relaxed font-semibold">
                ${state.settings.lang === 'de' ? (q.explanationDe || q.explanation) : (q.explanationEn || q.explanationDe || q.explanation)}
              </p>
            </div>
          ` : ''}

          <!-- Bottom Action Buttons: Next / Check -->
          <div class="mt-5 pt-3 border-t border-gray-100 dark:border-slate-800 flex justify-between items-center gap-2">
            <button id="gquiz-prev-btn" class="px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 text-xs font-bold transition cursor-pointer ${
              currentIdx === 0 ? 'opacity-30 cursor-not-allowed' : ''
            }" ${currentIdx === 0 ? 'disabled' : ''}>
              ‹ ${t('Previous', 'Vorherige')}
            </button>

            ${hasAnswered ? `
              <button id="gquiz-next-btn" class="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-emerald-600 dark:hover:bg-emerald-700 text-xs font-black shadow-xs transition active:scale-95 cursor-pointer">
                ${currentIdx + 1 < total ? t('Next Question', 'Nächste Frage') + ' ›' : t('View Results', 'Ergebnisse ansehen') + ' 🏆'}
              </button>
            ` : q.type === 'word_order' ? `
              <button id="gquiz-check-order-btn" class="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-emerald-600 dark:hover:bg-emerald-700 text-xs font-black shadow-xs transition active:scale-95 cursor-pointer ${
                wordOrderAvailable.length > 0 ? 'opacity-50' : ''
              }">
                ${t('Check Sentence Order', 'Satzbau überprüfen')} ✓
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    </div>

    <!-- Rule Hint Popover Modal -->
    <div id="gquiz-hint-modal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs hidden flex items-center justify-center p-4">
      <div class="max-h-[80vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 p-6 text-slate-900 dark:text-white shadow-2xl border border-gray-200 dark:border-slate-800">
        <div class="flex items-center justify-between border-b border-gray-100 pb-3 dark:border-slate-800">
          <h4 class="font-black text-sm">📖 ${t('Grammar Rule Insight', 'Grammatik-Regelhinweis')}</h4>
          <button id="gquiz-hint-close-btn" class="h-7 w-7 rounded-full bg-gray-100 dark:bg-slate-800 font-bold flex items-center justify-center cursor-pointer">✕</button>
        </div>
        <div class="mt-4 text-xs space-y-3 leading-relaxed font-semibold text-slate-600 dark:text-slate-300">
          <p class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 font-bold text-slate-800 dark:text-white">
            ${q.rule || 'Grammatik-Regel für dieses Thema'}
          </p>
          <p>${state.settings.lang === 'de' ? (q.explanationDe || q.explanation) : (q.explanationEn || q.explanationDe || q.explanation)}</p>
        </div>
      </div>
    </div>
  `;

  // Attach Event Handlers
  container.querySelector('#gquiz-back-btn')?.addEventListener('click', () => {
    state.tab = 'grammar';
    setScreen('home');
  });
  
  container.querySelector('#gquiz-speak-btn')?.addEventListener('click', () => {
    let textToSpeak = '';
    if (q.type === 'sentence_translation') {
      if (hasAnswered && q.options && q.options[q.correct]) {
        textToSpeak = q.options[q.correct];
      } else if (q.options && q.options.length > 0) {
        textToSpeak = q.options[0];
      } else {
        textToSpeak = q.prompt;
      }
    } else if (q.type === 'word_order') {
      textToSpeak = hasAnswered ? q.correctOrder : (wordOrderChosen.length > 0 ? wordOrderChosen.join(' ') : q.correctOrder);
    } else if (q.type === 'error_correction') {
      textToSpeak = q.segments ? q.segments.map(s => s.text).join(' ') : (q.sentence || q.prompt);
    } else {
      textToSpeak = (q.prompt || '').replace(/\[\s*\.\.\.\s*\]/g, ' ... ').replace(/___+/g, ' ... ').trim();
    }
    speak(textToSpeak, true);
  });

  container.querySelector('#gquiz-rule-hint-btn')?.addEventListener('click', () => {
    container.querySelector('#gquiz-hint-modal')?.classList.remove('hidden');
  });
  container.querySelector('#gquiz-hint-close-btn')?.addEventListener('click', () => {
    container.querySelector('#gquiz-hint-modal')?.classList.add('hidden');
  });

  // Dot jumping
  container.querySelectorAll('.gquiz-dot-btn').forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-dot-idx') || '0', 10);
      currentIdx = idx;
      initWordOrderForCurrent();
      renderGrammarQuiz(container);
    });
  });

  // Previous button
  container.querySelector('#gquiz-prev-btn')?.addEventListener('click', () => {
    if (currentIdx > 0) {
      currentIdx--;
      initWordOrderForCurrent();
      renderGrammarQuiz(container);
    }
  });

  // Next button
  container.querySelector('#gquiz-next-btn')?.addEventListener('click', () => {
    if (currentIdx + 1 < total) {
      currentIdx++;
      initWordOrderForCurrent();
      renderGrammarQuiz(container);
    } else {
      // Completed! Save session result and show completion screen
      const correctCount = answers.filter(a => a && a.isCorrect).length;
      const missedIds = [];
      answers.forEach((ans, idx) => {
        if (!ans || !ans.isCorrect) missedIds.push(questions[idx].id);
      });
      recordGrammarSessionResult(activeTopicId, correctCount, total, missedIds);
      currentIdx = total; // Go to results view
      renderGrammarResults(container);
    }
  });

  // Interactive Choices (Multiple Choice, Gap Fill, Sentence Translation)
  container.querySelectorAll('.gquiz-choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (hasAnswered) return;
      const optIdx = parseInt(btn.getAttribute('data-opt-idx') || '0', 10);
      const isCorrect = optIdx === q.correct;
      answers[currentIdx] = {
        chosen: optIdx,
        isCorrect,
        chosenText: q.options[optIdx]
      };
      renderGrammarQuiz(container);
    });
  });

  // Word Order Click Handlers (indexed)
  container.querySelectorAll('.gquiz-word-available-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (hasAnswered) return;
      const idx = parseInt(btn.getAttribute('data-avail-idx') || '0', 10);
      if (idx >= 0 && idx < wordOrderAvailable.length) {
        const [word] = wordOrderAvailable.splice(idx, 1);
        wordOrderChosen.push(word);
        renderGrammarQuiz(container);
      }
    });
  });

  container.querySelectorAll('.gquiz-word-chosen-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (hasAnswered) return;
      const idx = parseInt(btn.getAttribute('data-chosen-idx') || '0', 10);
      if (idx >= 0 && idx < wordOrderChosen.length) {
        const [word] = wordOrderChosen.splice(idx, 1);
        wordOrderAvailable.push(word);
        renderGrammarQuiz(container);
      }
    });
  });

  container.querySelector('#gquiz-order-reset-btn')?.addEventListener('click', () => {
    if (hasAnswered) return;
    initWordOrderForCurrent();
    renderGrammarQuiz(container);
  });

  container.querySelector('#gquiz-check-order-btn')?.addEventListener('click', () => {
    if (hasAnswered) return;
    const constructed = wordOrderChosen.join(' ').trim();
    const targetClean = (q.correctOrder || '').trim();
    // Compare ignoring case and trailing punctuation
    const normalize = s => s.toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
    const isCorrect = normalize(constructed) === normalize(targetClean);
    answers[currentIdx] = {
      chosen: constructed,
      isCorrect,
      correctOrder: q.correctOrder
    };
    renderGrammarQuiz(container);
  });

  // Error Correction Segments Handler
  container.querySelectorAll('.gquiz-error-segment-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (hasAnswered) return;
      const segIdx = parseInt(btn.getAttribute('data-seg-idx') || '0', 10);
      const seg = q.segments[segIdx];
      const isCorrect = Boolean(seg && seg.isError);
      answers[currentIdx] = {
        chosen: segIdx,
        isCorrect,
        chosenSegment: seg
      };
      renderGrammarQuiz(container);
    });
  });
}

function renderErrorCorrectionPrompt(q, hasAnswered, currentAnswer) {
  if (!q.segments) return q.sentence || q.prompt;

  return `
    <div class="flex flex-wrap gap-2 my-2">
      ${q.segments.map((seg, idx) => {
        let style = 'border-gray-200 bg-gray-50 text-slate-800 dark:bg-slate-800 dark:text-slate-100 hover:border-slate-400';
        if (hasAnswered) {
          if (seg.isError) {
            style = 'border-red-500 bg-red-100 text-red-900 dark:bg-red-950/60 dark:text-red-200 font-black';
          } else if (currentAnswer && currentAnswer.chosen === idx) {
            style = 'border-slate-400 bg-slate-200 text-slate-700 dark:bg-slate-700';
          }
        }
        return `
          <button data-seg-idx="${idx}" ${hasAnswered ? 'disabled' : ''} class="gquiz-error-segment-btn px-3 py-2 rounded-xl border text-sm font-semibold transition cursor-pointer ${style}">
            <span class="text-[9.5px] uppercase font-mono mr-1.5 opacity-60 font-black">[${String.fromCharCode(65 + idx)}]</span>
            <span>${seg.text}</span>
          </button>
        `;
      }).join('')}
    </div>
  `;
}

function renderQuestionInteractiveArea(q, hasAnswered, currentAnswer) {
  // 1. Multiple Choice, Gap Fill, or Sentence Translation
  if (q.type === 'multiple_choice' || q.type === 'gap_fill' || q.type === 'sentence_translation') {
    return `
      <div class="space-y-2.5">
        ${(q.options || []).map((opt, oIdx) => {
          let optStyle = 'border-gray-200 bg-gray-50/70 hover:bg-gray-100 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-800 dark:text-slate-100 dark:border-slate-700';
          if (hasAnswered) {
            if (oIdx === q.correct) {
              optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200 font-black shadow-xs';
            } else if (currentAnswer && currentAnswer.chosen === oIdx) {
              optStyle = 'border-red-500 bg-red-50 text-red-900 dark:bg-red-950/50 dark:text-red-200 font-bold';
            } else {
              optStyle = 'opacity-35 border-gray-100 text-slate-400 dark:bg-slate-900';
            }
          }
          const alphabet = String.fromCharCode(65 + oIdx);
          return `
            <button data-opt-idx="${oIdx}" ${hasAnswered ? 'disabled' : ''} class="gquiz-choice-btn w-full flex items-center gap-3.5 rounded-2xl border p-3.5 text-left text-sm font-semibold transition cursor-pointer active:scale-[0.99] ${optStyle}">
              <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-700 text-xs font-black text-slate-800 dark:text-slate-200 uppercase">
                ${hasAnswered && oIdx === q.correct ? '✓' : hasAnswered && currentAnswer && currentAnswer.chosen === oIdx ? '✗' : alphabet}
              </span>
              <span class="leading-snug flex-1">${opt}</span>
            </button>
          `;
        }).join('')}
      </div>
    `;
  }

  // 2. Word Order / Satzbau
  if (q.type === 'word_order') {
    return `
      <div class="space-y-4">
        <!-- Assembled Sentence Box -->
        <div>
          <div class="flex items-center justify-between text-[10.5px] font-black uppercase text-slate-400 dark:text-slate-500 mb-1.5">
            <span>${t('YOUR CONSTRUCTED SENTENCE (TAP TO REMOVE)', 'DEIN ZUSAMMENGESETZTER SATZ:')}</span>
            ${!hasAnswered ? `
              <button id="gquiz-order-reset-btn" class="text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white cursor-pointer">
                ↺ ${t('Reset', 'Zurücksetzen')}
              </button>
            ` : ''}
          </div>
          <div class="min-h-[58px] p-3 rounded-2xl border-2 ${
            hasAnswered
              ? currentAnswer.isCorrect
                ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30'
                : 'border-red-500 bg-red-50/50 dark:bg-red-950/30'
              : 'border-dashed border-gray-300 dark:border-slate-700 bg-gray-50/50 dark:bg-slate-800/40'
          } flex flex-wrap gap-2 items-center">
            ${wordOrderChosen.length === 0 ? `
              <span class="text-xs text-slate-400 italic">
                ${t('Tap the word tiles below in grammatical order...', 'Tippe die Wörter unten in der richtigen Reihenfolge an...')}
              </span>
            ` : wordOrderChosen.map((w, cIdx) => `
              <button data-chosen-idx="${cIdx}" ${hasAnswered ? 'disabled' : ''} class="gquiz-word-chosen-btn px-3 py-1.5 rounded-xl bg-slate-900 text-white dark:bg-emerald-600 dark:text-white text-xs font-black shadow-xs cursor-pointer active:scale-95 transition">
                ${w}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Available Word Tiles Pool -->
        ${!hasAnswered ? `
          <div>
            <div class="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 mb-1.5">
              ${t('AVAILABLE WORDS (TAP TO ADD)', 'VERFÜGBARE WÖRTER:')}
            </div>
            <div class="flex flex-wrap gap-2">
              ${wordOrderAvailable.map((w, aIdx) => `
                <button data-avail-idx="${aIdx}" class="gquiz-word-available-btn px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-black border border-gray-200 dark:border-slate-700 shadow-xs cursor-pointer active:scale-95 transition">
                  ${w}
                </button>
              `).join('')}
            </div>
          </div>
        ` : `
          <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300">
            <span class="text-slate-400 uppercase text-[10px] font-black block mb-0.5">
              ${t('CORRECT WORD ORDER', 'KORREKTE WORTSTELLUNG:')}
            </span>
            <span>${q.correctOrder}</span>
          </div>
        `}
      </div>
    `;
  }

  // 3. Error Correction interactive notes
  if (q.type === 'error_correction') {
    return `
      <div class="text-xs text-slate-500 dark:text-slate-400">
        ${!hasAnswered ? `
          <p class="leading-relaxed font-semibold">
            ${t('Tap on the bracketed segment above that violates German grammar rules.', 'Klicke oben auf den markierten Satzteil, der gegen die deutsche Grammatik verstößt.')}
          </p>
        ` : ''}
      </div>
    `;
  }

  return '';
}

function renderGrammarResults(container) {
  const total = questions.length;
  const correctCount = answers.filter(a => a && a.isCorrect).length;
  const scorePct = Math.round((correctCount / total) * 100);
  const missedCount = total - correctCount;

  // Question Type performance breakdown
  const typeBreakdown = {};
  questions.forEach((q, i) => {
    if (!typeBreakdown[q.type]) typeBreakdown[q.type] = { total: 0, correct: 0 };
    typeBreakdown[q.type].total++;
    if (answers[i] && answers[i].isCorrect) typeBreakdown[q.type].correct++;
  });

  const passed = scorePct >= 60;
  const topic = getGrammarTopicById(activeTopicId);

  container.innerHTML = `
    <div class="pb-28 p-5 max-w-lg mx-auto">
      <div class="text-center mt-4">
        <!-- Badge -->
        <span class="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
          scorePct >= 80 ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' :
          passed ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' :
          'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300'
        }">
          ${scorePct >= 80 ? '🏆 ' + t('Mastery Achieved!', 'Meisterhaft!') :
            passed ? '✨ ' + t('Passed!', 'Bestanden!') :
            '💪 ' + t('Needs More Practice', 'Weiter üben!')}
        </span>

        <!-- Score Ring Number -->
        <div class="mt-4 text-5xl font-black text-slate-900 dark:text-white">
          ${scorePct}%
        </div>
        <p class="text-xs text-slate-400 font-bold mt-1">
          ${correctCount} / ${total} ${t('Questions correct', 'Fragen richtig beantwortet')}
        </p>
        <h2 class="text-lg font-black text-slate-800 dark:text-slate-100 mt-2">
          ${testTitle}
        </h2>
      </div>

      <!-- Type Breakdown Card -->
      <div class="mt-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-4.5 space-y-3">
        <h3 class="text-xs font-black uppercase text-slate-400 dark:text-slate-500 tracking-wider">
          ${t('PERFORMANCE BY QUESTION TYPE', 'LEISTUNG NACH FRAGETYP')}
        </h3>
        <div class="space-y-2">
          ${Object.entries(typeBreakdown).map(([qType, stats]) => {
            const pct = Math.round((stats.correct / stats.total) * 100);
            return `
              <div>
                <div class="flex justify-between items-center text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span class="capitalize">${qType.replace('_', ' ')}</span>
                  <span>${stats.correct}/${stats.total} (${pct}%)</span>
                </div>
                <div class="h-1.5 w-full rounded-full bg-gray-100 dark:bg-slate-800 overflow-hidden mt-1">
                  <div class="h-full rounded-full ${pct >= 70 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-red-500'}" style="width: ${pct}%"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Actions -->
      <div class="mt-6 space-y-2.5">
        ${missedCount > 0 ? `
          <button id="gquiz-retry-missed-btn" class="w-full py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-xs font-black shadow-md transition active:scale-98 cursor-pointer flex items-center justify-center gap-2">
            <span>🔁</span> ${t(`Repeat ${missedCount} Missed Questions`, `${missedCount} Fehlerhafte Fragen wiederholen`)}
          </button>
        ` : ''}

        <button id="gquiz-new-round-btn" class="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-emerald-600 dark:hover:bg-emerald-700 text-xs font-black shadow-md transition active:scale-98 cursor-pointer">
          ${t('Practice 20 New Questions in this Topic', '20 neue Fragen zu diesem Thema üben')}
        </button>

        <button id="gquiz-exit-btn" class="w-full py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-black transition cursor-pointer">
          ‹ ${t('Back to Grammar Topics', 'Zurück zu den Grammatikthemen')}
        </button>
      </div>
    </div>
  `;

  container.querySelector('#gquiz-retry-missed-btn')?.addEventListener('click', () => {
    const missedQuestions = questions.filter((_, i) => answers[i] && !answers[i].isCorrect);
    startGrammarQuiz(activeTopicId, shuffleArray(missedQuestions), `${topic.titleDe} • ${t('Mistakes Drill', 'Fehler-Wiederholung')}`);
    renderGrammarQuiz(container);
  });

  container.querySelector('#gquiz-new-round-btn')?.addEventListener('click', () => {
    const all = topic.questions || [];
    startGrammarQuiz(activeTopicId, shuffleArray(all).slice(0, 20), `${topic.titleDe} • 20 ${t('Questions', 'Fragen')}`);
    renderGrammarQuiz(container);
  });

  container.querySelector('#gquiz-exit-btn')?.addEventListener('click', () => {
    state.tab = 'grammar';
    setScreen('home');
  });
}
