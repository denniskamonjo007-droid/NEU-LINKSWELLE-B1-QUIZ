import { dailyLifeSentences } from './sentences/topic_daily_life.js';
import { workEducationSentences } from './sentences/topic_work_education.js';
import { peopleRelationshipsSentences } from './sentences/topic_people_relationships.js';
import { travelTransportSentences } from './sentences/topic_travel_transport.js';
import { communicationSentences } from './sentences/topic_communication.js';
import { foodDiningSentences } from './sentences/topic_food_dining.js';
import { healthBodySentences } from './sentences/topic_health_body.js';
import { moneyShoppingSentences } from './sentences/topic_money_shopping.js';
import { timeScheduleSentences } from './sentences/topic_time_schedule.js';
import { environmentNatureSentences } from './sentences/topic_environment_nature.js';
import { leisureCultureSentences } from './sentences/topic_leisure_culture.js';
import { emotionsOpinionsSentences } from './sentences/topic_emotions_opinions.js';
import { technologyMediaSentences } from './sentences/topic_technology_media.js';
import { societyLawSentences } from './sentences/topic_society_law.js';
import { buildingsPlacesSentences } from './sentences/topic_buildings_places.js';
import { causeEffectSentences } from './sentences/topic_cause_effect.js';
import { bureaucracySentences } from './sentences/topic_bureaucracy.js';
import { workplaceLawSentences } from './sentences/topic_workplace_law.js';
import { healthcareSentences } from './sentences/topic_healthcare.js';
import { prepositionalVerbsSentences } from './sentences/topic_prepositional_verbs.js';

// Sentence expansions: 105 sentences per topic = 210 questions per topic (+200+ in each topic)
import { expansionPart1 } from './sentences/expansion_part1.js';
import { expansionPart2 } from './sentences/expansion_part2.js';
import { expansionPart3 } from './sentences/expansion_part3.js';
import { expansionPart4 } from './sentences/expansion_part4.js';

export const SENTENCE_EXERCISES = {
  "Daily Life & Home": [...dailyLifeSentences, ...(expansionPart1["Daily Life & Home"] || [])],
  "Work & Education": [...workEducationSentences, ...(expansionPart1["Work & Education"] || [])],
  "People & Relationships": [...peopleRelationshipsSentences, ...(expansionPart1["People & Relationships"] || [])],
  "Travel & Transportation": [...travelTransportSentences, ...(expansionPart1["Travel & Transportation"] || [])],
  "Communication": [...communicationSentences, ...(expansionPart1["Communication"] || [])],
  "Food & Dining": [...foodDiningSentences, ...(expansionPart2["Food & Dining"] || [])],
  "Health & Body": [...healthBodySentences, ...(expansionPart2["Health & Body"] || [])],
  "Money & Shopping": [...moneyShoppingSentences, ...(expansionPart2["Money & Shopping"] || [])],
  "Time & Schedule": [...timeScheduleSentences, ...(expansionPart2["Time & Schedule"] || [])],
  "Environment & Nature": [...environmentNatureSentences, ...(expansionPart3["Environment & Nature"] || [])],
  "Leisure & Culture": [...leisureCultureSentences, ...(expansionPart3["Leisure & Culture"] || [])],
  "Emotions & Opinions": [...emotionsOpinionsSentences, ...(expansionPart3["Emotions & Opinions"] || [])],
  "Technology & Media": [...technologyMediaSentences, ...(expansionPart3["Technology & Media"] || [])],
  "Society & Law": [...societyLawSentences, ...(expansionPart3["Society & Law"] || [])],
  "Buildings & Places": [...buildingsPlacesSentences, ...(expansionPart3["Buildings & Places"] || [])],
  "Cause & Effect": [...causeEffectSentences, ...(expansionPart4["Cause & Effect"] || [])],
  "Bureaucracy & Official Documents": [...bureaucracySentences, ...(expansionPart4["Bureaucracy & Official Documents"] || [])],
  "Workplace & Labor Law": [...workplaceLawSentences, ...(expansionPart4["Workplace & Labor Law"] || [])],
  "Healthcare & Medical Terms": [...healthcareSentences, ...(expansionPart4["Healthcare & Medical Terms"] || [])],
  "Verbs with Fixed Prepositions": [...prepositionalVerbsSentences, ...(expansionPart4["Verbs with Fixed Prepositions"] || [])]
};
