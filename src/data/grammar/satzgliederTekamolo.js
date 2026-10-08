// B1 German Grammar Topic 17: Satzglieder, TEKAMOLO & Pronomenstellung

export const SATZGLIEDER_TEKAMOLO_TOPIC = {
  "id": "satzglieder_tekamolo",
  "exportName": "SATZGLIEDER_TEKAMOLO_TOPIC",
  "titleDe": "17. Satzglieder, TEKAMOLO & Pronomenstellung",
  "titleEn": "17. Word Order: TEKAMOLO & Pronoun Placement",
  "icon": "🔀",
  "badge": "Wann? Warum? Wie? Wo? & es ihm",
  "summaryDe": "Die exakte Reihenfolge der Satzglieder im deutschen Mittelfeld: TEKAMOLO (Temporal, Kausal, Modal, Lokal), sowie die feste Stellung von Pronomen (Pronomen vor Nomen; bei zwei Pronomen: immer Akkusativ vor Dativ: 'Ich gebe es ihm').",
  "summaryEn": "Word order in the German Mittelfeld: TEKAMOLO (Temporal, Causal, Modal, Locational) and the strict placement of pronouns (pronouns before nouns; with two pronouns: accusative always before dative: 'Ich gebe es ihm').",
  "cheatSheet": {
    "rule": "1. TEKAMOLO: Wann? (Temporal) -> Warum? (Kausal) -> Wie? (Modal) -> Wo/Wohin? (Lokal). 2. Pronomen-Regel: Akkusativ-Pronomen steht IMMER VOR dem Dativ-Pronomen ('Ich schenke ES IHM').",
    "keyConnectors": [
      {
        "conn": "TE-KA-MO-LO Reihenfolge",
        "meaning": "Temporal -> Kausal -> Modal -> Lokal",
        "example": "Ich fahre morgen (Te) wegen des Streiks (Ka) mit dem Fahrrad (Mo) zur Arbeit (Lo)."
      },
      {
        "conn": "Zwei Nomen-Objekte: Dativ vor Akkusativ",
        "meaning": "Person (Dativ) kommt VOR Sache (Akkusativ)",
        "example": "Ich gebe meinem Freund (Dat) das Buch (Akk)."
      },
      {
        "conn": "Zwei Pronomen: Akkusativ vor Dativ!",
        "meaning": "Pronomen 'es' / 'ihn' / 'sie' IMMER VOR 'ihm' / 'ihr' / 'ihnen'",
        "example": "Ich gebe es (Akk) ihm (Dat). / Sie schenkt sie (Akk) uns (Dat)."
      },
      {
        "conn": "Pronomen + Nomen: Pronomen gewinnt!",
        "meaning": "Pronomen stehen immer vor Nomen",
        "example": "Ich gebe es (Pronomen Akk) meinem Freund (Nomen Dat)."
      }
    ],
    "goldenRules": [
      "Goldene Regel 1: Stehen ZWEI PRONOMEN im Mittelfeld, gilt strikt: AKKUSATIV VOR DATIV ('Ich schicke es dir', nicht 'Ich schicke dir es').",
      "Goldene Regel 2: TE-KA-MO-LO: Zeit (Wann?) kommt VOR Ort (Wo/Wohin?)."
    ]
  },
  "questions": [
    {
      "id": "st_q1",
      "type": "multiple_choice",
      "prompt": "Welcher Satz hat die richtige TEKAMOLO-Reihenfolge (Temporal vor Lokal)?",
      "sub": "Wann vor Wo",
      "options": [
        "Ich fahre morgen nach Berlin.",
        "Ich fahre nach Berlin morgen.",
        "Ich nach Berlin fahre morgen.",
        "Morgen nach Berlin ich fahre."
      ],
      "correct": 0,
      "explanationDe": "Temporal ('morgen') steht im Deutschen immer vor Lokal ('nach Berlin').",
      "explanationEn": "Temporal ('morgen') precedes locational ('nach Berlin'): 'Ich fahre morgen nach Berlin'.",
      "rule": "TE vor LO (Temporal vor Lokal)"
    },
    {
      "id": "st_q2",
      "type": "multiple_choice",
      "prompt": "Wie lautet die richtige Pronomenstellung bei: 'Ich gebe dem Lehrer den Brief' -> mit zwei Pronomen?",
      "sub": "Zwei Pronomen im Satz",
      "options": [
        "Ich gebe ihn ihm.",
        "Ich gebe ihm ihn.",
        "Ich gebe ihm es.",
        "Ich gebe ihn dem Lehrer."
      ],
      "correct": 0,
      "explanationDe": "Bei zwei Personalpronomen steht der Akkusativ ('ihn' für den Brief) IMMER vor dem Dativ ('ihm' für den Lehrer): 'Ich gebe ihn ihm'.",
      "explanationEn": "With two pronouns, accusative precedes dative: 'Ich gebe ihn ihm'.",
      "rule": "Pronomenregel: Akkusativ vor Dativ"
    },
    {
      "id": "st_q3",
      "type": "word_order",
      "prompt": "Bringe die Angaben in die korrekte TEKAMOLO-Reihenfolge: 'Wir fahren ___ .'",
      "sub": "Temporal, Kausal, Modal, Lokal",
      "options": [
        "heute (Te) wegen des Regens (Ka) mit der Bahn (Mo) ins Büro (Lo)",
        "heute ins Büro wegen des Regens mit der Bahn",
        "ins Büro heute mit der Bahn wegen des Regens",
        "mit der Bahn heute wegen des Regens ins Büro"
      ],
      "correct": 0,
      "explanationDe": "Exakte Reihenfolge: Temporal (heute) -> Kausal (wegen des Regens) -> Modal (mit der Bahn) -> Lokal (ins Büro).",
      "explanationEn": "Correct order: Temporal -> Causal -> Modal -> Locational.",
      "rule": "TE-KA-MO-LO Struktur"
    },
    {
      "id": "st_q4",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Kannst du mir es bitte sofort zurückgeben?'",
      "sub": "Pronomenstellung Akkusativ vor Dativ",
      "options": [
        "'es mir' statt 'mir es' (Akkusativ-Pronomen vor Dativ-Pronomen)",
        "'zurückgeben mir es'",
        "'kannst du bitte mir es'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "Zwei Pronomen: Das Akkusativpronomen 'es' muss VOR das Dativpronomen 'mir': 'Kannst du es mir ... geben?'.",
      "explanationEn": "Accusative pronoun 'es' must come BEFORE dative pronoun 'mir': 'es mir'.",
      "rule": "Akkusativpronomen vor Dativpronomen (es mir)"
    },
    {
      "id": "st_q5",
      "type": "gap_fill",
      "prompt": "Ich habe ___ das Geschenk schon gestern geschickt.",
      "sub": "Dativ vor Akkusativ bei zwei Nomen/einem Pronomen",
      "options": ["ihm", "ihn", "er", "dessen"],
      "correct": 0,
      "explanationDe": "Steht ein Pronomen neben einem Nomen ('das Geschenk'), steht das Pronomen vorne: 'habe IHM (Dativ-Pronomen) das Geschenk geschickt'.",
      "explanationEn": "Pronoun precedes noun: 'habe ihm das Geschenk geschickt'.",
      "rule": "Pronomen vor Nomen"
    },
    {
      "id": "st_q6",
      "type": "multiple_choice",
      "prompt": "Welcher Satz mit zwei Nomen-Objekten ist standardsprachlich richtig?",
      "sub": "Zwei Nomen: Dativ vor Akkusativ",
      "options": [
        "Die Mutter schenkt dem Kind (Dat) ein Spielzeug (Akk).",
        "Die Mutter schenkt ein Spielzeug dem Kind.",
        "Die Mutter dem Kind ein Spielzeug schenkt.",
        "Die Mutter schenkt dem Kind ein Spielzeug zu."
      ],
      "correct": 0,
      "explanationDe": "Bei zwei Substantiven steht standardsprachlich das Dativobjekt vor dem Akkusativobjekt: 'dem Kind ein Spielzeug'.",
      "explanationEn": "With two nouns, dative normally precedes accusative: 'dem Kind ein Spielzeug'.",
      "rule": "Nomen: Dativ vor Akkusativ"
    },
    {
      "id": "st_q7",
      "type": "sentence_translation",
      "prompt": "Translate: 'I will explain it to you tomorrow.'",
      "sub": "Pronomenstellung + Zeitangabe",
      "options": [
        "Ich erkläre es dir morgen.",
        "Ich erkläre dir es morgen.",
        "Ich morgen es dir erkläre.",
        "Ich erkläre morgen dir es."
      ],
      "correct": 0,
      "explanationDe": "Pronomen stehen direkt nach dem Verb: Akkusativ ('es') vor Dativ ('dir'), dann die Temporalbestimmung ('morgen').",
      "explanationEn": "'es dir morgen': accusative pronoun before dative pronoun, then temporal.",
      "rule": "es dir + Temporalangabe"
    },
    {
      "id": "st_q8",
      "type": "multiple_choice",
      "prompt": "Wohin gehört die Angabe des Mittels ('mit dem Bus') in TEKAMOLO?",
      "sub": "Modale Angabe (Wie?)",
      "options": [
        "An 3. Stelle (Modal: Wie?)",
        "An 1. Stelle (Temporal)",
        "An 2. Stelle (Kausal)",
        "An letzte Stelle (Lokal)"
      ],
      "correct": 0,
      "explanationDe": "Mittel und Art/Weise ('mit dem Bus', 'schnell') beantworten die Frage 'Wie?' und sind modal (3. Stelle).",
      "explanationEn": "Modal answers 'How?' / by what means: 3rd position in TE-KA-MO-LO.",
      "rule": "Modalangabe an Position 3"
    },
    {
      "id": "st_q9",
      "type": "gap_fill",
      "prompt": "Der Chef hat ___ die neue Kollegin noch nicht vorgestellt.",
      "sub": "Dativpronomen vor Nomen-Akkusativ",
      "options": ["uns", "wir", "unsere", "sie"],
      "correct": 0,
      "explanationDe": "'jemandem (Dativ) jemanden (Akkusativ) vorstellen': 'hat UNS (Dat) die neue Kollegin (Akk) vorgestellt'.",
      "explanationEn": "'hat uns die Kollegin vorgestellt': dative pronoun precedes accusative noun.",
      "rule": "Dativpronomen vor Akkusativnomen"
    },
    {
      "id": "st_q10",
      "type": "word_order",
      "prompt": "Welcher Satz im Nebensatz hat die richtige Wortstellung?",
      "sub": "Pronomenstellung im Nebensatz",
      "options": [
        "... weil er es ihr gestern geschenkt hat.",
        "... weil er ihr es gestern geschenkt hat.",
        "... weil es ihr er gestern geschenkt hat.",
        "... weil er gestern es ihr geschenkt hat."
      ],
      "correct": 0,
      "explanationDe": "Im Nebensatz folgen nach der Konjunktion Subjekt ('er'), dann Pronomen (Akk 'es' vor Dat 'ihr'), dann Angaben und Verben.",
      "explanationEn": "In subordinate clause: subject -> acc pronoun -> dat pronoun -> modifiers -> verbs.",
      "rule": "Satzstellung der Pronomen im Nebensatz"
    },
    {
      "id": "st_q11",
      "type": "multiple_choice",
      "prompt": "Was passiert mit der Wortstellung, wenn ein Adverb wie 'Gestern' an Position 1 steht?",
      "sub": "Inversion / Verb an Position 2",
      "options": [
        "Das finite Verb steht an Position 2, das Subjekt folgt direkt an Position 3 (Inversion).",
        "Das Subjekt bleibt an Position 2.",
        "Das Verb wandert an das Satzende.",
        "Man muss ein Komma setzen."
      ],
      "correct": 0,
      "explanationDe": "Im deutschen Hauptsatz steht das finite Verb STRIKT an Position 2: 'Gestern (1) ging (2) ich (3) ins Kino'.",
      "explanationEn": "Verb second rule: 'Gestern ging ich'.",
      "rule": "Hauptsatz: Verb an 2. Stelle (Inversion)"
    },
    {
      "id": "st_q12",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Ich habe gestern im Restaurant mit meiner Freundin sehr gut gegessen.'",
      "sub": "TEKAMOLO: Modal vor Lokal",
      "options": [
        "Lokal ('im Restaurant') steht vor Modal ('mit meiner Freundin / sehr gut')",
        "'gegessen' muss vor das Restaurant",
        "'meine Freundin' im Akkusativ",
        "Der Satz ist umgangssprachlich üblich, aber standardsprachlich steht Modal vor Lokal"
      ],
      "correct": 3,
      "explanationDe": "Nach reiner TEKAMOLO-Regel steht Modal ('mit meiner Freundin sehr gut') vor Lokal ('im Restaurant').",
      "explanationEn": "TEKAMOLO puts modal before locational in careful standard German.",
      "rule": "Modal vor Lokal"
    },
    {
      "id": "st_q13",
      "type": "multiple_choice",
      "prompt": "Ersetze beide Objekte durch Pronomen: 'Ich leihe meiner Schwester mein Fahrrad.'",
      "sub": "Zwei Pronomen",
      "options": [
        "Ich leihe es ihr.",
        "Ich leihe ihr es.",
        "Ich leihe sie ihm.",
        "Ich leihe ihm es."
      ],
      "correct": 0,
      "explanationDe": "mein Fahrrad (das Fahrrad) = es (Akkusativ); meiner Schwester = ihr (Dativ). Akkusativ vor Dativ: 'Ich leihe es ihr'.",
      "explanationEn": "das Fahrrad = es; meiner Schwester = ihr. Order: es ihr.",
      "rule": "Akkusativ vor Dativ: es ihr"
    },
    {
      "id": "st_q14",
      "type": "gap_fill",
      "prompt": "Wir müssen ___ wegen der Bauarbeiten zu Fuß umgehen.",
      "sub": "Akkusativobjekt-Pronomen vor Kausalangabe",
      "options": ["die Baustelle", "der Baustelle", "dem Baustelle", "den Baustellen"],
      "correct": 0,
      "explanationDe": "'die Baustelle umgehen' (Akkusativ feminin: die Baustelle).",
      "explanationEn": "'die Baustelle' is accusative object.",
      "rule": "Objektstellung bei transitiven Verben"
    },
    {
      "id": "st_q15",
      "type": "multiple_choice",
      "prompt": "Welcher Fragetyp entspricht der 'Kausal'-Angabe in TEKAMOLO?",
      "sub": "Kausalangabe",
      "options": [
        "Warum? / Weshalb? / Aus welchem Grund?",
        "Wann? / Wie lange?",
        "Wie? / Auf welche Weise?",
        "Wo? / Wohin?"
      ],
      "correct": 0,
      "explanationDe": "Kausal bestimmt den Grund (Warum?): wegen des Regens, aus Neugier, dank deiner Hilfe.",
      "explanationEn": "Causal answers 'Why?' (wegen, aus, dank).",
      "rule": "Kausal = Warum?"
    },
    {
      "id": "st_q16",
      "type": "word_order",
      "prompt": "Welche Reihenfolge ist standardsprachlich richtig?",
      "sub": "TEKAMOLO",
      "options": [
        "Sie wartet seit einer Stunde (Te) geduldig (Mo) an der Haltestelle (Lo).",
        "Sie wartet an der Haltestelle seit einer Stunde geduldig.",
        "Sie an der Haltestelle wartet seit einer Stunde geduldig.",
        "Sie wartet geduldig an der Haltestelle seit einer Stunde."
      ],
      "correct": 0,
      "explanationDe": "Temporal ('seit einer Stunde') -> Modal ('geduldig') -> Lokal ('an der Haltestelle').",
      "explanationEn": "Temporal -> Modal -> Locational.",
      "rule": "Temporal vor Modal vor Lokal"
    },
    {
      "id": "st_q17",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Ich zeige Ihnen das Dokument nicht, sondern zeige Ihnen es morgen.'",
      "sub": "es Ihnen vs. Ihnen es",
      "options": [
        "'zeige es Ihnen' statt 'zeige Ihnen es'",
        "'Ihnen das Dokument zeige'",
        "'nicht Ihnen zeige'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "Zwei Pronomen: Das Akkusativpronomen 'es' MUSS vor das Dativpronomen 'Ihnen': 'zeige es Ihnen'.",
      "explanationEn": "Pronoun order: accusative 'es' before dative 'Ihnen': 'es Ihnen'.",
      "rule": "es Ihnen (Akk vor Dat)"
    },
    {
      "id": "st_q18",
      "type": "multiple_choice",
      "prompt": "Ersetze die Nomen durch Pronomen: 'Der Arzt verschreibt dem Patienten die Medikamente.'",
      "sub": "Pronomenersatz",
      "options": [
        "Er verschreibt sie ihm.",
        "Er verschreibt ihm sie.",
        "Er verschreibt es ihm.",
        "Er verschreibt ihm es."
      ],
      "correct": 0,
      "explanationDe": "die Medikamente (Plural) = sie (Akkusativ); dem Patienten = ihm (Dativ). Akkusativ vor Dativ: 'Er verschreibt sie ihm'.",
      "explanationEn": "die Medikamente = sie; dem Patienten = ihm. Order: sie ihm.",
      "rule": "Akkusativ Plural 'sie' vor Dativ 'ihm'"
    },
    {
      "id": "st_q19",
      "type": "gap_fill",
      "prompt": "Ich bringe ___ morgen zur Schule.",
      "sub": "Akkusativpronomen vor Temporal und Lokal",
      "options": ["dich", "dir", "du", "dein"],
      "correct": 0,
      "explanationDe": "'jemanden (Akkusativ) zur Schule bringen': 'Ich bringe DICH morgen zur Schule'.",
      "explanationEn": "Direct object pronoun 'dich' precedes modifiers.",
      "rule": "Objektpronomen dich"
    },
    {
      "id": "st_q20",
      "type": "sentence_translation",
      "prompt": "Translate: 'He offered it to me yesterday.'",
      "sub": "Pronomen es mir + Temporal",
      "options": [
        "Er hat es mir gestern angeboten.",
        "Er hat mir es gestern angeboten.",
        "Er hat gestern mir es angeboten.",
        "Er hat angeboten es mir gestern."
      ],
      "correct": 0,
      "explanationDe": "Akkusativpronomen 'es' vor Dativpronomen 'mir': 'Er hat es mir gestern angeboten'.",
      "explanationEn": "Accusative 'es' before dative 'mir': 'Er hat es mir gestern angeboten'.",
      "rule": "es mir angeboten"
    },
    {
      "id": "st_q21",
      "type": "multiple_choice",
      "prompt": "Welcher Satz verdeutlicht die Stellung des Dativobjekts bei bestimmten Nomen?",
      "sub": "Dativ vor Akkusativ",
      "options": [
        "Ich habe dem Kunden das Angebot per E-Mail geschickt.",
        "Ich habe das Angebot dem Kunden per E-Mail geschickt.",
        "Ich habe per E-Mail das Angebot dem Kunden geschickt.",
        "Ich habe geschickt dem Kunden das Angebot."
      ],
      "correct": 0,
      "explanationDe": "Standardfolge: Dativ ('dem Kunden') vor Akkusativ ('das Angebot') vor Modal ('per E-Mail').",
      "explanationEn": "Default order: Dative before accusative before modal.",
      "rule": "Dativ vor Akkusativ vor Modal"
    },
    {
      "id": "st_q22",
      "type": "gap_fill",
      "prompt": "Kannst du ___ bitte deine Notizen ausleihen?",
      "sub": "Dativpronomen vor Nomen-Akkusativ",
      "options": ["mir", "mich", "ich", "mein"],
      "correct": 0,
      "explanationDe": "'jemandem (Dativ) etwas leihen': 'Kannst du MIR bitte deine Notizen leihen?'.",
      "explanationEn": "'leihen' takes dative of person: mir.",
      "rule": "jemandem (Dat) etwas leihen"
    },
    {
      "id": "st_q23",
      "type": "word_order",
      "prompt": "Wie lautet die richtige Reihenfolge im Hauptsatz mit Modalverb?",
      "sub": "Satzklammer",
      "options": [
        "Wir müssen (Pos 2) heute Abend den Bericht fertigschreiben (Ende).",
        "Wir müssen fertigschreiben heute Abend den Bericht.",
        "Wir heute Abend müssen den Bericht fertigschreiben.",
        "Heute Abend wir müssen den Bericht fertigschreiben."
      ],
      "correct": 0,
      "explanationDe": "Satzklammer: Das konjugierte Modalverb steht an Position 2, der Infinitiv am absoluten Satzende.",
      "explanationEn": "Sentence bracket: conjugated modal verb at position 2, infinitive at the very end.",
      "rule": "Deutsche Satzklammer"
    },
    {
      "id": "st_q24",
      "type": "multiple_choice",
      "prompt": "Was passiert mit der Stellung, wenn das Akkusativobjekt ein PRONOMEN ist, das Dativobjekt aber ein NOMEN?",
      "sub": "Pronomen schlägt Nomen",
      "options": [
        "Das Pronomen steht IMMER vor dem Nomen ('Ich gebe es meinem Bruder').",
        "Das Nomen steht vor dem Pronomen ('Ich gebe meinem Bruder es').",
        "Die Reihenfolge ist beliebig wählbar.",
        "Man darf Pronomen und Nomen nicht mischen."
      ],
      "correct": 0,
      "explanationDe": "Pronomen stehen immer vor Nomen! Also: 'Ich gebe es (Pronomen Akk) meinem Bruder (Nomen Dat)'.",
      "explanationEn": "Pronouns always precede nouns: 'Ich gebe es meinem Bruder'.",
      "rule": "Pronomen vor Nomen"
    },
    {
      "id": "st_q25",
      "type": "multiple_choice",
      "prompt": "Warum ist der Satz 'Ich fahre nach Italien im Sommer' stilistisch unschön im Deutschen?",
      "sub": "TE vor LO Regel",
      "options": [
        "Weil die Temporalbestimmung ('im Sommer') vor der Lokalbestimmung ('nach Italien') stehen sollte.",
        "Weil Italien großgeschrieben werden muss.",
        "Weil man 'nach' nicht mit Ländern verwenden darf.",
        "Weil das Verb an das Ende muss."
      ],
      "correct": 0,
      "explanationDe": "Die Grundregel TEKAMOLO besagt: Temporal vor Lokal ('Ich fahre im Sommer nach Italien').",
      "explanationEn": "TEKAMOLO principle: temporal before locational: 'im Sommer nach Italien'.",
      "rule": "TE vor LO Priorität"
    }
  ]
};
