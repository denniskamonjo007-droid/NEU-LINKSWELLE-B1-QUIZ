// Master Index for B1 German Grammar Modules
import { NEBENSAETZE_TOPIC } from './nebensaetze.js';
import { RELATIVSAETZE_TOPIC } from './relativsaetze.js';
import { PASSIV_TOPIC } from './passiv.js';
import { KONJUNKTIV2_TOPIC } from './konjunktiv2.js';
import { INFINITIV_ZU_TOPIC } from './infinitivZu.js';
import { PRAEPOSITIONEN_TOPIC } from './praepositionen.js';
import { ADJEKTIVDEKLINATION_TOPIC } from './adjektive.js';
import { ZWEITEILIGE_KONNEKTOREN_TOPIC } from './konnektoren.js';
import { VERBEN_PRAEPOSITIONEN_TOPIC } from './verbenMitPraepositionen.js';
import { N_DEKLINATION_TOPIC } from './nDeklination.js';
import { PLUSQUAMPERFEKT_TOPIC } from './plusquamperfekt.js';
import { PARTIZIPIEN_TOPIC } from './partizipien.js';
import { PASSIV_ALTERNATIVEN_TOPIC } from './passivAlternativen.js';
import { REFLEXIVE_VERBEN_TOPIC } from './reflexiveVerben.js';
import { WORTBILDUNG_TOPIC } from './wortbildung.js';
import { PRAETERITUM_VERBEN_TOPIC } from './praeteritumVerben.js';
import { SATZGLIEDER_TEKAMOLO_TOPIC } from './satzgliederTekamolo.js';
import { GENITIV_TOPIC } from './genitiv.js';
import { FUTUR1_TOPIC } from './futur1.js';
import { PRONOMINALADVERBIEN_TOPIC } from './pronominaladverbien.js';
import { B1_MASTER_EXAM_TOPIC } from './b1MasterExam.js';

export const GRAMMAR_TOPICS = [
  NEBENSAETZE_TOPIC,
  RELATIVSAETZE_TOPIC,
  PASSIV_TOPIC,
  KONJUNKTIV2_TOPIC,
  INFINITIV_ZU_TOPIC,
  PRAEPOSITIONEN_TOPIC,
  ADJEKTIVDEKLINATION_TOPIC,
  ZWEITEILIGE_KONNEKTOREN_TOPIC,
  VERBEN_PRAEPOSITIONEN_TOPIC,
  N_DEKLINATION_TOPIC,
  PLUSQUAMPERFEKT_TOPIC,
  PARTIZIPIEN_TOPIC,
  PASSIV_ALTERNATIVEN_TOPIC,
  REFLEXIVE_VERBEN_TOPIC,
  WORTBILDUNG_TOPIC,
  PRAETERITUM_VERBEN_TOPIC,
  SATZGLIEDER_TEKAMOLO_TOPIC,
  GENITIV_TOPIC,
  FUTUR1_TOPIC,
  PRONOMINALADVERBIEN_TOPIC,
  B1_MASTER_EXAM_TOPIC
];

export const QUESTION_TYPES = [
  { id: 'all', nameDe: 'Alle 5 Typen gemischt', nameEn: 'All 5 Types Mixed', icon: '⚡' },
  { id: 'multiple_choice', nameDe: 'Multiple Choice (Regeln)', nameEn: 'Multiple Choice (Rules)', icon: '🎯' },
  { id: 'gap_fill', nameDe: 'Lückentext (Endungen & Formen)', nameEn: 'Fill in the Gaps (Forms)', icon: '🧩' },
  { id: 'sentence_translation', nameDe: 'Satzübersetzung (Struktur)', nameEn: 'Sentence Translation', icon: '🌐' },
  { id: 'word_order', nameDe: 'Satzbau & Verbstellung', nameEn: 'Word Order & Satzbau', icon: '🔀' },
  { id: 'error_correction', nameDe: 'Fehlersuche & Korrektur', nameEn: 'Spot & Fix Grammar Error', icon: '🔍' }
];

export function getGrammarTopicById(topicId) {
  return GRAMMAR_TOPICS.find(t => t.id === topicId) || GRAMMAR_TOPICS[0];
}

export function filterTopicQuestions(topicId, filterType = 'all', missedQuestionIds = []) {
  const topic = getGrammarTopicById(topicId);
  if (!topic || !topic.questions) return [];
  
  if (filterType === 'mistakes') {
    const set = new Set(missedQuestionIds || []);
    const missed = topic.questions.filter(q => set.has(q.id));
    return missed.length > 0 ? missed : topic.questions.slice(0, 20);
  }
  
  if (filterType === 'all') {
    return [...topic.questions];
  }
  
  return topic.questions.filter(q => q.type === filterType);
}

export function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
