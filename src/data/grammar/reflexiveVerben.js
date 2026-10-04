// B1 German Grammar Topic 14: Reflexive Verben (Akkusativ vs. Dativ)

export const REFLEXIVE_VERBEN_TOPIC = {
  "id": "reflexive_verben",
  "exportName": "REFLEXIVE_VERBEN_TOPIC",
  "titleDe": "14. Reflexive Verben (Akkusativ vs. Dativ)",
  "titleEn": "14. Reflexive Verben (Accusative vs. Dative)",
  "icon": "🪞",
  "badge": "mich/dich vs. mir/dir",
  "summaryDe": "Reflexive Verben verlangen ein Reflexivpronomen. Steht bereits ein direktes Akkusativobjekt im Satz, steht das Reflexivpronomen im DATIV (z.B. 'Ich wasche MICH' vs. 'Ich wasche MIR die Hände').",
  "summaryEn": "Reflexive verbs require a reflexive pronoun. If the sentence already contains a direct accusative object, the reflexive pronoun switches to DATIVE (e.g., 'Ich wasche mich' vs. 'Ich wasche mir die Hände').",
  "cheatSheet": {
    "rule": "Akk: mich, dich, sich, uns, euch, sich. Dat: MIR, DIR, sich, uns, euch, sich (nur bei 'ich' und 'du' gibt es unterschiedliche Formen!).",
    "keyConnectors": [
      {
        "conn": "Akkusativ-Reflexiv (kein weiteres Objekt)",
        "meaning": "Ich wasche mich. Du beeilst dich. Er freut sich.",
        "example": "Ich ziehe mich schnell an. Wir treffen uns um 18 Uhr."
      },
      {
        "conn": "Dativ-Reflexiv (+ konkretes Akkusativobjekt)",
        "meaning": "Ich wasche MIR (Dat) die Hände (Akk). Du putzt DIR (Dat) die Zähne (Akk).",
        "example": "Ich ziehe mir eine Jacke an. Ich kaufe mir ein neues Buch."
      },
      {
        "conn": "Feste Dativ-Reflexive Verben (abstrakt)",
        "meaning": "sich (Dat) etwas vorstellen, sich (Dat) etwas überlegen, sich (Dat) Sorgen machen",
        "example": "Das kann ich mir nicht vorstellen! Ich muss mir das noch überlegen."
      }
    ],
    "goldenRules": [
      "Goldene Regel 1: In der 3. Person (er/sie/es/sie/Sie) und im Plural (wir/ihr) ist das Pronomen im Akkusativ und Dativ IDENTISCH ('sich', 'uns', 'euch'). Nur bei ICH (mich vs. mir) und DU (dich vs. dir) musst du aufpassen!",
      "Goldene Regel 2: Gibt es ein zweites Akkusativobjekt? Wenn JA -> Reflexivpronomen im Dativ ('Ich merke MIR das Wort')."
    ]
  },
  "questions": [
    {
      "id": "rv_q1",
      "type": "multiple_choice",
      "prompt": "Vor dem Essen wasche ich ___ gründlich die Hände.",
      "sub": "Reflexivpronomen mit Akkusativobjekt 'die Hände'",
      "options": ["mir", "mich", "sich", "dir"],
      "correct": 0,
      "explanationDe": "Da 'die Hände' bereits das Akkusativobjekt ist, muss das Reflexivpronomen im DATIV stehen: 'wasche ich MIR'.",
      "explanationEn": "Since 'die Hände' is already the accusative object, the reflexive pronoun must be DATIVE: 'MIR'.",
      "rule": "Reflexivpronomen im Dativ bei 2. Objekt"
    },
    {
      "id": "rv_q2",
      "type": "multiple_choice",
      "prompt": "Beeil ___ bitte, der Zug fährt in fünf Minuten ab!",
      "sub": "sich beeilen (Akkusativ)",
      "options": ["dich", "dir", "sich", "mich"],
      "correct": 0,
      "explanationDe": "'sich beeilen' hat kein weiteres Akkusativobjekt, daher Akkusativ: 'Beeil dich'.",
      "explanationEn": "'sich beeilen' has no other object, hence accusative: 'Beeil dich'.",
      "rule": "sich beeilen (Akkusativ)"
    },
    {
      "id": "rv_q3",
      "type": "gap_fill",
      "prompt": "Das kann ich ___ beim besten Willen nicht vorstellen!",
      "sub": "sich (Dat) etwas vorstellen",
      "options": ["mir", "mich", "dir", "sich"],
      "correct": 0,
      "explanationDe": "'sich etwas vorstellen' verlangt das Reflexivpronomen im Dativ: 'kann ich mir vorstellen'.",
      "explanationEn": "'sich etwas vorstellen' requires dative reflexive pronoun: 'kann ich mir vorstellen'.",
      "rule": "sich (Dat) etwas vorstellen"
    },
    {
      "id": "rv_q4",
      "type": "multiple_choice",
      "prompt": "Zieh ___ schnell eine warme Jacke an, draußen ist es kalt.",
      "sub": "sich (Dat) etwas anziehen",
      "options": ["dir", "dich", "mir", "sich"],
      "correct": 0,
      "explanationDe": "Wegen des Akkusativobjekts 'eine warme Jacke' steht das Pronomen im Dativ: 'Zieh dir ... an'.",
      "explanationEn": "Because of the accusative object 'eine warme Jacke', pronoun is dative: 'Zieh dir an'.",
      "rule": "sich (Dat) etwas anziehen"
    },
    {
      "id": "rv_q5",
      "type": "multiple_choice",
      "prompt": "Morgens putze ich ___ immer drei Minuten lang die Zähne.",
      "sub": "sich (Dat) die Zähne putzen",
      "options": ["mir", "mich", "sich", "uns"],
      "correct": 0,
      "explanationDe": "'die Zähne' ist Akkusativ, also 'putze ich mir (Dativ)'.",
      "explanationEn": "'die Zähne' is accusative, so 'putze ich mir (dative)'.",
      "rule": "sich (Dat) die Zähne putzen"
    },
    {
      "id": "rv_q6",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Ich muss mich diesen Vorschlag noch in Ruhe überlegen.'",
      "sub": "sich etwas überlegen",
      "options": [
        "'mir' statt 'mich' (sich Dativ etwas überlegen)",
        "'überlegt' statt 'überlegen'",
        "'diesem' statt 'diesen'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "'sich etwas überlegen' verlangt das Reflexivpronomen im Dativ: 'Ich muss MIR überlegen'.",
      "explanationEn": "'sich etwas überlegen' takes the dative: 'Ich muss MIR überlegen'.",
      "rule": "sich (Dat) etwas überlegen"
    },
    {
      "id": "rv_q7",
      "type": "sentence_translation",
      "prompt": "Translate: 'Are you interested in German literature?'",
      "sub": "sich interessieren für + Akk",
      "options": [
        "Interessierst du dich für deutsche Literatur?",
        "Interessierst du dir für deutsche Literatur?",
        "Interessierst du sich für deutsche Literatur?",
        "Interessierst du mich für deutsche Literatur?"
      ],
      "correct": 0,
      "explanationDe": "'sich interessieren' steht im Akkusativ: 'du dich'.",
      "explanationEn": "'sich interessieren' takes accusative: 'du dich'.",
      "rule": "sich (Akk) interessieren für"
    }
  ]
};
