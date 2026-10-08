// Spaced Repetition System (SRS) using SM-2 & Leitner Interval Schedules
// Intervals: 1 day, 3 days, 7 days, 16 days, 30 days (and ease-factored mature intervals)

import { state, notify } from '../state.js';
import { VOCAB } from '../data/vocab.js';
import { GRAMMAR_TOPICS } from '../data/grammar/index.js';

export const SRS_INTERVAL_LADDER = [1, 3, 7, 16, 30];

/**
 * Calculates the next SRS review state for a card using SM-2 / Leitner
 * @param {Object} current - Existing card record (or null for new)
 * @param {number} quality - 1 (Again), 2 (Hard), 3 (Good), 4 (Easy)
 */
export function calculateNextSRSState(current, quality) {
  let ease = current?.ease || 2.5;
  let repetitions = current?.repetitions || 0;
  let interval = current?.interval || 1;
  let lapses = current?.lapses || 0;
  let totalReviews = (current?.totalReviews || 0) + 1;

  if (quality === 1) {
    // Again: reset repetition counter, review in 1 day
    repetitions = 0;
    interval = 1;
    lapses += 1;
    ease = Math.max(1.3, ease - 0.2);
  } else if (quality === 2) {
    // Hard: advance cautiously (1 -> 2 or small step)
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 2;
    else interval = Math.max(interval + 1, Math.round(interval * 1.2));
    ease = Math.max(1.3, ease - 0.15);
  } else if (quality === 3) {
    // Good: standard Leitner ladder (1 -> 3 -> 7 -> 16 -> 30)
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 3;
    else if (repetitions === 2) interval = 7;
    else if (repetitions === 3) interval = 16;
    else if (repetitions === 4) interval = 30;
    else interval = Math.max(interval + 2, Math.round(interval * ease));
    repetitions += 1;
  } else if (quality === 4) {
    // Easy: accelerated progression (skip a step, boost ease)
    if (repetitions === 0) interval = 3;
    else if (repetitions === 1) interval = 7;
    else if (repetitions === 2) interval = 16;
    else interval = Math.max(interval + 5, Math.round(interval * ease * 1.3));
    repetitions += 1;
    ease = Math.min(3.0, ease + 0.15);
  }

  ease = Math.round(ease * 100) / 100;
  const lastReviewed = Date.now();
  const nextReview = lastReviewed + (interval * 86400000);

  return {
    ...(current || {}),
    ease,
    interval,
    repetitions,
    lapses,
    totalReviews,
    lastReviewed,
    nextReview
  };
}

/**
 * Ensures initial set of at least 24 cards are available for daily review
 */
export function seedInitialSRSCards() {
  if (!state.srs) state.srs = {};
  const currentCount = Object.keys(state.srs).length;
  if (currentCount >= 24) return;

  const now = Date.now();
  let added = 0;

  // 1. Seed essential high-frequency B1 vocabulary words
  const initialTopics = [
    'Daily Life & Home',
    'Work & Education',
    'Travel & Transportation',
    'Communication',
    'Food & Dining',
    'Health & Body',
    'Money & Shopping',
    'Cause & Effect'
  ];

  for (const topicName of initialTopics) {
    const list = VOCAB[topicName] || [];
    for (let i = 0; i < Math.min(list.length, 3); i++) {
      const w = list[i];
      if (!state.srs[w.g]) {
        state.srs[w.g] = {
          id: w.g,
          type: 'vocab',
          front: w.g,
          back: w.e,
          wordType: w.t,
          topic: topicName,
          repetitions: 0,
          interval: 1,
          ease: 2.5,
          totalReviews: 0,
          lastReviewed: 0,
          nextReview: now - 1000 // due immediately
        };
        added++;
        if (Object.keys(state.srs).length >= 24) break;
      }
    }
    if (Object.keys(state.srs).length >= 24) break;
  }

  // 2. Seed essential grammar questions
  if (Object.keys(state.srs).length < 24) {
    for (const gTopic of GRAMMAR_TOPICS.slice(0, 4)) {
      const q = gTopic.questions?.[0];
      if (q && !state.srs[q.id]) {
        state.srs[q.id] = {
          id: q.id,
          type: 'grammar',
          front: q.prompt,
          back: q.explanationDe || q.explanationEn || 'Grammatikregel beachten',
          rule: q.rule || gTopic.titleDe,
          topic: gTopic.titleDe,
          repetitions: 0,
          interval: 1,
          ease: 2.5,
          totalReviews: 0,
          lastReviewed: 0,
          nextReview: now - 1000
        };
      }
    }
  }

  try {
    localStorage.setItem('lw_srs', JSON.stringify(state.srs));
  } catch {}
}

/**
 * Returns all cards currently due for review
 */
export function getSRSDueCards() {
  if (!state.srs) state.srs = {};
  seedInitialSRSCards();

  const now = Date.now();
  const cards = [];

  Object.values(state.srs).forEach((item) => {
    // Due if never reviewed or nextReview <= now
    if (!item.lastReviewed || item.nextReview <= now) {
      cards.push(item);
    }
  });

  return cards;
}

/**
 * Returns metrics on the entire SRS card database
 */
export function getSRSMetrics() {
  if (!state.srs) state.srs = {};
  seedInitialSRSCards();

  const now = Date.now();
  let dueCount = 0;
  let learningCount = 0;
  let matureCount = 0;
  let totalReviews = 0;
  let totalLapses = 0;

  const entries = Object.values(state.srs);
  const totalCount = entries.length;

  entries.forEach((item) => {
    totalReviews += (item.totalReviews || 0);
    totalLapses += (item.lapses || 0);

    const isDue = !item.lastReviewed || item.nextReview <= now;
    if (isDue) {
      dueCount++;
    }

    if ((item.interval || 0) >= 21) {
      matureCount++;
    } else if (item.lastReviewed) {
      learningCount++;
    }
  });

  const retentionRate = totalReviews > 0
    ? Math.max(0, Math.min(100, Math.round(((totalReviews - totalLapses) / totalReviews) * 100)))
    : 100;

  return {
    dueCount,
    learningCount,
    matureCount,
    totalCount,
    totalReviews,
    retentionRate
  };
}

/**
 * Save user review rating for a card and trigger updates
 */
export function recordSRSRating(cardId, quality) {
  if (!state.srs) state.srs = {};
  const current = state.srs[cardId];
  if (!current) return;

  const next = calculateNextSRSState(current, quality);
  state.srs[cardId] = next;

  try {
    localStorage.setItem('lw_srs', JSON.stringify(state.srs));
  } catch {}

  notify();
  return next;
}
