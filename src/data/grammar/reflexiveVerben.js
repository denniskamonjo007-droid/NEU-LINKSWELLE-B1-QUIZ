// B1 German Grammar Topic 14: Reflexive Verben (Akkusativ vs. Dativ)

export const REFLEXIVE_VERBEN_TOPIC = {
  "id": "reflexive_verben",
  "exportName": "REFLEXIVE_VERBEN_TOPIC",
  "titleDe": "14. Reflexive Verben (Akkusativ vs. Dativ)",
  "titleEn": "14. Reflexive Verbs (Accusative vs. Dative)",
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
    },
    {
      "id": "rv_q8",
      "type": "multiple_choice",
      "prompt": "Mach ___ bitte keine Sorgen, alles wird gut gehen!",
      "sub": "sich (Dat) Sorgen machen",
      "options": ["dir", "dich", "mir", "sich"],
      "correct": 0,
      "explanationDe": "'Sorgen' fungiert als Akkusativobjekt, deshalb steht das Reflexivpronomen im Dativ: 'Mach DIR keine Sorgen'.",
      "explanationEn": "'Sorgen' is the accusative object, therefore reflexive pronoun is dative: 'Mach dir keine Sorgen'.",
      "rule": "sich (Dat) Sorgen machen"
    },
    {
      "id": "rv_q9",
      "type": "gap_fill",
      "prompt": "Ich habe ___ beim Kochen in den Finger geschnitten.",
      "sub": "sich (Dat) in den Finger schneiden",
      "options": ["mir", "mich", "dir", "sich"],
      "correct": 0,
      "explanationDe": "Bei Körperteilen als Ortsangabe/Objekt steht das Reflexivpronomen im Dativ: 'habe ich MIR in den Finger geschnitten'.",
      "explanationEn": "When referring to one's own body part injured, dative is used: 'habe ich MIR geschnitten'.",
      "rule": "sich (Dat) wehtun / schneiden"
    },
    {
      "id": "rv_q10",
      "type": "multiple_choice",
      "prompt": "Wir freuen ___ schon sehr auf den gemeinsamen Urlaub.",
      "sub": "sich freuen auf + Akk",
      "options": ["uns", "euch", "sich", "mir"],
      "correct": 0,
      "explanationDe": "Für 'wir' lautet das Reflexivpronomen stets 'uns'.",
      "explanationEn": "For 'wir', the reflexive pronoun is always 'uns'.",
      "rule": "Reflexivpronomen Plural 1. Person"
    },
    {
      "id": "rv_q11",
      "type": "gap_fill",
      "prompt": "Könnt ihr ___ bitte etwas leiser unterhalten?",
      "sub": "sich unterhalten (ihr)",
      "options": ["euch", "uns", "sich", "ihr"],
      "correct": 0,
      "explanationDe": "Für 'ihr' lautet das Reflexivpronomen stets 'euch'.",
      "explanationEn": "For 'ihr', the reflexive pronoun is always 'euch'.",
      "rule": "Reflexivpronomen Plural 2. Person"
    },
    {
      "id": "rv_q12",
      "type": "multiple_choice",
      "prompt": "Ein so teures Auto kann ich ___ im Moment leider nicht leisten.",
      "sub": "sich (Dat) etwas leisten können",
      "options": ["mir", "mich", "sich", "dir"],
      "correct": 0,
      "explanationDe": "'sich etwas leisten können' steht immer mit dem Dativ: 'kann ich MIR nicht leisten'.",
      "explanationEn": "'sich etwas leisten können' always takes dative: 'kann ich mir leisten'.",
      "rule": "sich (Dat) etwas leisten können"
    },
    {
      "id": "rv_q13",
      "type": "word_order",
      "prompt": "Welche Wortstellung ist grammatisch korrekt?",
      "sub": "Reflexivpronomen im Hauptsatz mit Inversion",
      "options": [
        "Morgen treffe ich mich mit meiner Chefin.",
        "Morgen ich treffe mich mit meiner Chefin.",
        "Morgen treffe mich ich mit meiner Chefin.",
        "Morgen treffe mit meiner Chefin ich mich."
      ],
      "correct": 0,
      "explanationDe": "Nach Vorfeld ('Morgen') folgt Verb ('treffe'), dann Subjekt ('ich') und Reflexivpronomen ('mich').",
      "explanationEn": "Verb in position 2, subject immediately after, followed by reflexive pronoun: 'Morgen treffe ich mich'.",
      "rule": "Satzstellung des Reflexivpronomens"
    },
    {
      "id": "rv_q14",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Er hat mich über die Verspätung geärgert.'",
      "sub": "sich ärgern über",
      "options": [
        "'sich' statt 'mich' (3. Person maskulin)",
        "'über' verlangt Dativ",
        "'geärgert hat' am Ende",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "Das Subjekt ist 'Er' (3. Person), daher muss das Reflexivpronomen 'sich' lauten: 'Er hat SICH geärgert'.",
      "explanationEn": "Subject is 'Er', so reflexive pronoun must be 'sich': 'Er hat sich geärgert'.",
      "rule": "Reflexivpronomen 3. Person (sich)"
    },
    {
      "id": "rv_q15",
      "type": "gap_fill",
      "prompt": "Merk ___ diese Telefonnummer gut, bevor du sie vergisst!",
      "sub": "sich (Dat) etwas merken",
      "options": ["dir", "dich", "mir", "sich"],
      "correct": 0,
      "explanationDe": "'sich etwas merken' hat das Akkusativobjekt 'diese Telefonnummer', erfordert also Dativ: 'Merk dir'.",
      "explanationEn": "'sich etwas merken' takes dative: 'Merk dir die Nummer'.",
      "rule": "sich (Dat) etwas merken"
    },
    {
      "id": "rv_q16",
      "type": "sentence_translation",
      "prompt": "Translate: 'I need to get used to the new working hours.'",
      "sub": "sich gewöhnen an + Akk",
      "options": [
        "Ich muss mich an die neuen Arbeitszeiten gewöhnen.",
        "Ich muss mir an die neuen Arbeitszeiten gewöhnen.",
        "Ich muss mich für die neuen Arbeitszeiten gewöhnen.",
        "Ich muss mir zu den neuen Arbeitszeiten gewöhnen."
      ],
      "correct": 0,
      "explanationDe": "'sich gewöhnen an + Akk' steht mit Akkusativ-Pronomen: 'Ich muss mich gewöhnen'.",
      "explanationEn": "'sich gewöhnen an' uses accusative reflexive pronoun: 'Ich muss mich ... gewöhnen'.",
      "rule": "sich gewöhnen an + Akk"
    },
    {
      "id": "rv_q17",
      "type": "multiple_choice",
      "prompt": "Hast du ___ schon bei Frau Weber für die Hilfe bedankt?",
      "sub": "sich bedanken bei + Dat",
      "options": ["dich", "dir", "sich", "mich"],
      "correct": 0,
      "explanationDe": "'sich bedanken' ist im Akkusativ reflexiv: 'Hast du DICH bedankt'.",
      "explanationEn": "'sich bedanken' takes accusative: 'Hast du dich bedankt'.",
      "rule": "sich bedanken bei/für"
    },
    {
      "id": "rv_q18",
      "type": "gap_fill",
      "prompt": "Ich wünsche ___ zum Geburtstag eine schöne Reise.",
      "sub": "sich (Dat) etwas wünschen",
      "options": ["mir", "mich", "dir", "sich"],
      "correct": 0,
      "explanationDe": "'eine schöne Reise' ist Akkusativobjekt, daher Dativ: 'wünsche ich MIR'.",
      "explanationEn": "'eine schöne Reise' is direct object, so reflexive is dative: 'wünsche ich mir'.",
      "rule": "sich (Dat) etwas wünschen"
    },
    {
      "id": "rv_q19",
      "type": "word_order",
      "prompt": "Welche Wortstellung im Nebensatz ist korrekt?",
      "sub": "Reflexivpronomen nach Pronomen-Subjekt im Nebensatz",
      "options": [
        "... weil er sich immer pünktlich anmeldet.",
        "... weil sich er immer pünktlich anmeldet.",
        "... weil er immer pünktlich sich anmeldet.",
        "... weil anmeldet er sich immer pünktlich."
      ],
      "correct": 0,
      "explanationDe": "Ist das Subjekt ein Personalpronomen ('er'), folgt das Reflexivpronomen ('sich') unmittelbar darauf: 'weil er sich ... anmeldet'.",
      "explanationEn": "Personal pronoun subject immediately precedes reflexive pronoun: 'weil er sich ... anmeldet'.",
      "rule": "Reflexivpronomen nach Personalpronomen im Nebensatz"
    },
    {
      "id": "rv_q20",
      "type": "multiple_choice",
      "prompt": "Die beiden Nachbarn streiten ___ schon seit Jahren über den Gartenzaun.",
      "sub": "sich streiten (Plural reziprok)",
      "options": ["sich", "uns", "euch", "ihnen"],
      "correct": 0,
      "explanationDe": "Für die 3. Person Plural ('Die Nachbarn') ist das Pronomen immer 'sich'.",
      "explanationEn": "3rd person plural always takes 'sich': 'streiten sich'.",
      "rule": "Reziprokes Verb mit 'sich'"
    },
    {
      "id": "rv_q21",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Ich ziehe mich die neuen Schuhe an.'",
      "sub": "sich (Dat) etwas anziehen",
      "options": [
        "'mir' statt 'mich' (wegen Akkusativobjekt 'die Schuhe')",
        "'anziehe' muss zusammenstehen",
        "'die neue Schuhe' ist falsch dekliniert",
        "Der Satz ist fehlerfrei"
      ],
      "correct": 0,
      "explanationDe": "Da 'die neuen Schuhe' das Akkusativobjekt ist, muss 'mir' (Dativ) stehen: 'Ich ziehe MIR die neuen Schuhe an'.",
      "explanationEn": "Because 'die neuen Schuhe' is direct object, pronoun is dative 'mir': 'Ich ziehe mir an'.",
      "rule": "sich (Dat) Kleidung anziehen"
    },
    {
      "id": "rv_q22",
      "type": "gap_fill",
      "prompt": "Er erinnert ___ nicht mehr an seinen ersten Schultag.",
      "sub": "sich erinnern an + Akk",
      "options": ["sich", "ihn", "ihm", "sich selbst"],
      "correct": 0,
      "explanationDe": "'sich erinnern' verlangt das Reflexivpronomen 'sich' (3. Person).",
      "explanationEn": "'sich erinnern' takes reflexive pronoun 'sich': 'Er erinnert sich'.",
      "rule": "sich erinnern an + Akk"
    },
    {
      "id": "rv_q23",
      "type": "sentence_translation",
      "prompt": "Translate: 'Did you hurt your knee?'",
      "sub": "sich (Dat) wehtun",
      "options": [
        "Hast du dir das Knie wehgetan?",
        "Hast du dich das Knie wehgetan?",
        "Hast du dein Knie wehgetan?",
        "Hast du dir das Knie wehgemacht?"
      ],
      "correct": 0,
      "explanationDe": "'sich wehtun' steht im Dativ mit dem betroffenen Körperteil als Akkusativ: 'dir das Knie wehgetan'.",
      "explanationEn": "'sich wehtun' requires dative pronoun: 'Hast du dir das Knie wehgetan?'.",
      "rule": "sich (Dat) wehtun"
    },
    {
      "id": "rv_q24",
      "type": "multiple_choice",
      "prompt": "Wir müssen ___ beeilen, sonst verpassen wir den Flug.",
      "sub": "sich beeilen (wir)",
      "options": ["uns", "sich", "euch", "unsere"],
      "correct": 0,
      "explanationDe": "Das Reflexivpronomen für 'wir' lautet 'uns'.",
      "explanationEn": "Reflexive pronoun for 'wir' is 'uns'.",
      "rule": "sich beeilen (wir uns)"
    },
    {
      "id": "rv_q25",
      "type": "multiple_choice",
      "prompt": "Warum kämmst du ___ nicht vor dem Spiegel?",
      "sub": "sich kämmen (ohne weiteres Objekt)",
      "options": ["dich", "dir", "sich", "mich"],
      "correct": 0,
      "explanationDe": "Da kein Körperteil genannt wird ('die Haare'), steht Akkusativ: 'kämmst du dich'. (Vergleiche: 'kämmst du DIR die Haare').",
      "explanationEn": "Without a specific body part mentioned, accusative is used: 'kämmst du dich'.",
      "rule": "Akkusativ vs. Dativ bei Körperpflege"
    }
  ]
};
