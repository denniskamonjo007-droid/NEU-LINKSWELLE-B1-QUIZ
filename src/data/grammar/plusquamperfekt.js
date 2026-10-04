// B1 German Grammar Topic 11: Plusquamperfekt & Vorzeitigkeit mit „nachdem“

export const PLUSQUAMPERFEKT_TOPIC = {
  "id": "plusquamperfekt",
  "exportName": "PLUSQUAMPERFEKT_TOPIC",
  "titleDe": "11. Plusquamperfekt & Temporalsätze mit „nachdem“",
  "titleEn": "11. Past Perfect & Time Clauses with „nachdem“",
  "icon": "⏳",
  "badge": "Vorzeitigkeit: hatte/war + Partizip II",
  "summaryDe": "Das Plusquamperfekt beschreibt eine Handlung, die VOR einem anderen Ereignis in der Vergangenheit stattgefunden hat. Es wird mit 'hatte' oder 'war' + Partizip II gebildet.",
  "summaryEn": "The Past Perfect describes an action that happened BEFORE another past event. It is formed with 'hatte' or 'war' + Partizip II, especially with 'nachdem'.",
  "cheatSheet": {
    "rule": "Bildung: Präteritum von haben/sein (hatte/war) + Partizip II am Satzende.",
    "keyConnectors": [
      {
        "conn": "nachdem + Plusquamperfekt",
        "meaning": "after (action 1 completed before action 2)",
        "example": "Nachdem er gefrühstückt hatte, ging er zur Arbeit."
      },
      {
        "conn": "Zwei Vergangenheiten",
        "meaning": "Frühere Handlung: Plusquamperfekt | Spätere Handlung: Präteritum",
        "example": "Sie war müde, weil sie die ganze Nacht gelernt hatte."
      },
      {
        "conn": "Bewegungsverben mit 'sein'",
        "meaning": "war + Partizip II (gegangen, gefahren, aufgewacht)",
        "example": "Nachdem der Zug abgefahren war, bemerkte er seinen Fehler."
      }
    ],
    "goldenRules": [
      "Goldene Regel 1: Steht der 'nachdem'-Satz in der Vergangenheit, MUSS das Plusquamperfekt stehen, wenn der Hauptsatz im Präteritum/Perfekt steht.",
      "Goldene Regel 2: Verben der Orts- oder Zustandsveränderung bilden das Plusquamperfekt mit 'war' ('war eingeschlafen', 'war angekommen', 'war geflogen')."
    ]
  },
  "questions": [
    {
      "id": "pq_q1",
      "type": "multiple_choice",
      "prompt": "Nachdem er die Prüfung bestanden ___, feierte er mit seinen Freunden.",
      "sub": "Plusquamperfekt mit haben",
      "options": ["hatte", "hat", "hätte", "war"],
      "correct": 0,
      "explanationDe": "'bestehen' bildet das Perfekt/Plusquamperfekt mit 'haben': 'hatte bestanden'.",
      "explanationEn": "'bestehen' forms past perfect with 'haben': 'hatte bestanden'.",
      "rule": "Plusquamperfekt: hatte + Partizip II"
    },
    {
      "id": "pq_q2",
      "type": "multiple_choice",
      "prompt": "Nachdem sie in Berlin angekommen ___, rief sie ihre Familie an.",
      "sub": "Bewegungsverb mit sein",
      "options": ["war", "hatte", "wäre", "ist"],
      "correct": 0,
      "explanationDe": "'ankommen' ist ein Bewegungsverb und bildet das Plusquamperfekt mit 'war': 'angekommen war'.",
      "explanationEn": "'ankommen' expresses movement and takes 'war': 'angekommen war'.",
      "rule": "Plusquamperfekt mit sein: war + Partizip II"
    },
    {
      "id": "pq_q3",
      "type": "gap_fill",
      "prompt": "Er konnte den Brief nicht abschicken, weil er die Adresse vergessen ___.",
      "sub": "Vorzeitigkeit in der Vergangenheit",
      "options": ["hatte", "hat", "hätte", "war"],
      "correct": 0,
      "explanationDe": "Das Vergessen geschah vor dem Abschicken: Plusquamperfekt 'vergessen hatte'.",
      "explanationEn": "The forgetting happened before the sending: past perfect 'vergessen hatte'.",
      "rule": "Vorzeitigkeit: hatte + Partizip II"
    },
    {
      "id": "pq_q4",
      "type": "word_order",
      "prompt": "Bringe den Nebensatz in die richtige Wortstellung: 'nachdem / gegessen / wir / hatten'",
      "sub": "Verbstellung im Nebensatz",
      "options": [
        "..., nachdem wir gegessen hatten.",
        "..., nachdem hatten wir gegessen.",
        "..., nachdem wir hatten gegessen.",
        "..., wir hatten nachdem gegessen."
      ],
      "correct": 0,
      "explanationDe": "Im Nebensatz mit 'nachdem' steht das konjugierte Hilfsverb 'hatten' am absoluten Satzende.",
      "explanationEn": "In the subordinate clause with 'nachdem', the conjugated auxiliary 'hatten' goes to the very end.",
      "rule": "Nebensatz: Hilfsverb am Schluss"
    },
    {
      "id": "pq_q5",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Nachdem er aufgestanden ist, ging er sofort unter die Dusche.'",
      "sub": "Vorzeitigkeit bei Präteritum im Hauptsatz",
      "options": [
        "'aufgestanden war' statt 'aufgestanden ist'",
        "'geht' statt 'ging'",
        "'gegangen war' statt 'ging'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "Da der Hauptsatz im Präteritum steht ('ging'), verlangt 'nachdem' das Plusquamperfekt ('aufgestanden war').",
      "explanationEn": "Since main clause is in past tense ('ging'), 'nachdem' requires past perfect ('aufgestanden war').",
      "rule": "nachdem + Plusquamperfekt vor Präteritum"
    },
    {
      "id": "pq_q6",
      "type": "multiple_choice",
      "prompt": "Als die Polizei eintraf, ___ die Diebe bereits geflohen.",
      "sub": "Plusquamperfekt von fliehen",
      "options": ["waren", "hatten", "sind", "wurden"],
      "correct": 0,
      "explanationDe": "'fliehen' bildet das Perfekt und Plusquamperfekt mit 'sein': 'waren geflohen'.",
      "explanationEn": "'fliehen' forms past perfect with 'sein': 'waren geflohen'.",
      "rule": "fliehen -> waren geflohen"
    },
    {
      "id": "pq_q7",
      "type": "multiple_choice",
      "prompt": "Nachdem die Besprechung geendet ___, verließen alle Mitarbeiter den Raum.",
      "sub": "Plusquamperfekt mit haben",
      "options": ["hatte", "war", "hätte", "wurde"],
      "correct": 0,
      "explanationDe": "'enden' bildet das Perfekt/Plusquamperfekt mit 'haben': 'geendet hatte'.",
      "explanationEn": "'enden' takes 'haben': 'geendet hatte'.",
      "rule": "hatte + geendet"
    },
    {
      "id": "pq_q8",
      "type": "sentence_translation",
      "prompt": "Translate: 'After he had read the contract, he signed it.'",
      "sub": "Nachdem + Plusquamperfekt",
      "options": [
        "Nachdem er den Vertrag gelesen hatte, unterschrieb er ihn.",
        "Nachdem er den Vertrag gelesen hat, unterschrieb er ihn.",
        "Nachdem er den Vertrag las, unterschrieb er ihn.",
        "Nachdem er hatte den Vertrag gelesen, unterschrieb er ihn."
      ],
      "correct": 0,
      "explanationDe": "Korrekt: 'Nachdem er ... gelesen hatte (Plusquamperfekt), unterschrieb er (Präteritum)'.",
      "explanationEn": "Correct: 'Nachdem er ... gelesen hatte (past perfect), unterschrieb er (past)'.",
      "rule": "nachdem + Plusquamperfekt, Präteritum"
    },
    {
      "id": "pq_q9",
      "type": "multiple_choice",
      "prompt": "Nachdem wir die Koffer gepackt ___, riefen wir ein Taxi.",
      "sub": "Plusquamperfekt mit haben",
      "options": ["hatten", "waren", "haben", "hätten"],
      "correct": 0,
      "explanationDe": "'packen' bildet das Plusquamperfekt mit 'hatten': 'gepackt hatten'.",
      "explanationEn": "'packen' takes 'hatten': 'gepackt hatten'.",
      "rule": "gepackt hatten"
    },
    {
      "id": "pq_q10",
      "type": "gap_fill",
      "prompt": "Sie fühlte sich erleichtert, nachdem sie die schwierige Prüfung bestanden ___.",
      "sub": "hatte bestanden",
      "options": ["hatte", "war", "hat", "hätte"],
      "correct": 0,
      "explanationDe": "Frühere Handlung mit 'nachdem' verlangt das Plusquamperfekt: 'bestanden hatte'.",
      "explanationEn": "Earlier action with 'nachdem' takes past perfect: 'bestanden hatte'.",
      "rule": "bestanden hatte"
    },
    {
      "id": "pq_q11",
      "type": "multiple_choice",
      "prompt": "Nachdem das Flugzeug gelandet ___, durften die Passagiere aufstehen.",
      "sub": "Bewegungsverb mit war",
      "options": ["war", "hatte", "wäre", "ist"],
      "correct": 0,
      "explanationDe": "'landen' ist eine Zustands-/Ortsveränderung und bildet das Plusquamperfekt mit 'war'.",
      "explanationEn": "'landen' expresses state change/movement and forms past perfect with 'war'.",
      "rule": "gelandet war"
    },
    {
      "id": "pq_q12",
      "type": "multiple_choice",
      "prompt": "Er wusste die Antwort nicht, weil er das Kapitel nicht gelesen ___.",
      "sub": "Begründung in der Vorzeitigkeit",
      "options": ["hatte", "war", "hätte", "hat"],
      "correct": 0,
      "explanationDe": "'nicht gelesen hatte' drückt Vorzeitigkeit vor dem Präteritum 'wusste' aus.",
      "explanationEn": "'nicht gelesen hatte' expresses past perfect before past 'wusste'.",
      "rule": "gelesen hatte"
    },
    {
      "id": "pq_q13",
      "type": "word_order",
      "prompt": "Bringe den Satz in die richtige Reihenfolge: 'eingeschlafen / war / das Kind / nachdem'",
      "sub": "Wortstellung mit nachdem",
      "options": [
        "..., nachdem das Kind eingeschlafen war.",
        "..., nachdem war das Kind eingeschlafen.",
        "..., nachdem das Kind war eingeschlafen.",
        "..., das Kind war nachdem eingeschlafen."
      ],
      "correct": 0,
      "explanationDe": "Im Nebensatz mit 'nachdem' steht das Hilfsverb 'war' am Ende.",
      "explanationEn": "In the clause with 'nachdem', auxiliary 'war' is at the end.",
      "rule": "eingeschlafen war"
    },
    {
      "id": "pq_q14",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Nachdem er gefrühstückt hatte, ging er zur Arbeit.'",
      "sub": "Grammatikprüfung",
      "options": [
        "Der Satz ist vollkommen korrekt",
        "'gefrühstückt hat' statt 'gefrühstückt hatte'",
        "'geht' statt 'ging'",
        "'nach' statt 'nachdem'"
      ],
      "correct": 0,
      "explanationDe": "Der Satz ist perfekt: 'nachdem' + Plusquamperfekt, Hauptsatz im Präteritum.",
      "explanationEn": "The sentence is completely correct: 'nachdem' + past perfect, past tense in main clause.",
      "rule": "nachdem + Plusquamperfekt, Präteritum"
    },
    {
      "id": "pq_q15",
      "type": "multiple_choice",
      "prompt": "Wir konnten nicht ins Haus, weil mein Bruder den Schlüssel verloren ___.",
      "sub": "Plusquamperfekt mit verlieren",
      "options": ["hatte", "war", "wäre", "hat"],
      "correct": 0,
      "explanationDe": "'verlieren' bildet das Plusquamperfekt mit 'hatte': 'verloren hatte'.",
      "explanationEn": "'verlieren' takes 'hatte': 'verloren hatte'.",
      "rule": "verloren hatte"
    },
    {
      "id": "pq_q16",
      "type": "multiple_choice",
      "prompt": "Nachdem der Gast bezahlt ___, verließ er das Restaurant.",
      "sub": "bezahlen im Plusquamperfekt",
      "options": ["hatte", "war", "hätte", "wurde"],
      "correct": 0,
      "explanationDe": "'bezahlen' bildet das Plusquamperfekt mit 'hatte': 'bezahlt hatte'.",
      "explanationEn": "'bezahlen' forms past perfect with 'hatte': 'bezahlt hatte'.",
      "rule": "bezahlt hatte"
    },
    {
      "id": "pq_q17",
      "type": "gap_fill",
      "prompt": "Er erkannte seinen Schulfreund sofort, obwohl sie sich zehn Jahre lang nicht gesehen ___.",
      "sub": "Plusquamperfekt mit sehen",
      "options": ["hatten", "waren", "haben", "hätten"],
      "correct": 0,
      "explanationDe": "Vorzeitigkeit mit 'hatten gesehen'.",
      "explanationEn": "Past perfect with 'hatten gesehen'.",
      "rule": "gesehen hatten"
    },
    {
      "id": "pq_q18",
      "type": "multiple_choice",
      "prompt": "Nachdem die Sonne untergegangen ___, wurde es schlagartig kalt.",
      "sub": "untergehen mit sein",
      "options": ["war", "hatte", "wäre", "ist"],
      "correct": 0,
      "explanationDe": "'untergehen' bildet das Plusquamperfekt mit 'war': 'untergegangen war'.",
      "explanationEn": "'untergehen' forms past perfect with 'war': 'untergegangen war'.",
      "rule": "untergegangen war"
    },
    {
      "id": "pq_q19",
      "type": "sentence_translation",
      "prompt": "Translate: 'After the meeting had ended, they went for lunch.'",
      "sub": "Nachdem + Plusquamperfekt",
      "options": [
        "Nachdem das Meeting geendet hatte, gingen sie zum Mittagessen.",
        "Nachdem das Meeting geendet hat, gingen sie zum Mittagessen.",
        "Nachdem das Meeting endete, gingen sie zum Mittagessen.",
        "Nachdem hatte das Meeting geendet, gingen sie zum Mittagessen."
      ],
      "correct": 0,
      "explanationDe": "Korrekt: 'geendet hatte, gingen sie'.",
      "explanationEn": "Correct: 'geendet hatte, gingen sie'.",
      "rule": "geendet hatte, gingen sie"
    },
    {
      "id": "pq_q20",
      "type": "multiple_choice",
      "prompt": "Als ich am Bahnhof ankam, ___ der Zug schon abgefahren.",
      "sub": "abfahren im Plusquamperfekt",
      "options": ["war", "hatte", "ist", "wurde"],
      "correct": 0,
      "explanationDe": "'abfahren' bildet das Plusquamperfekt mit 'war': 'war abgefahren'.",
      "explanationEn": "'abfahren' takes 'war': 'war abgefahren'.",
      "rule": "war abgefahren"
    },
    {
      "id": "pq_q21",
      "type": "gap_fill",
      "prompt": "Er war sehr müde, weil er die ganze Nacht gearbeitet ___.",
      "sub": "arbeiten im Plusquamperfekt",
      "options": ["hatte", "war", "hätte", "hat"],
      "correct": 0,
      "explanationDe": "'gearbeitet hatte' beschreibt den Grund vor der Müdigkeit.",
      "explanationEn": "'gearbeitet hatte' explains the past reason.",
      "rule": "gearbeitet hatte"
    },
    {
      "id": "pq_q22",
      "type": "multiple_choice",
      "prompt": "Nachdem der Arzt ihn gründlich untersucht ___, verschrieb er ein Medikament.",
      "sub": "untersuchen im Plusquamperfekt",
      "options": ["hatte", "war", "hätte", "wurde"],
      "correct": 0,
      "explanationDe": "'untersucht hatte' (Plusquamperfekt mit haben).",
      "explanationEn": "'untersucht hatte' (past perfect with haben).",
      "rule": "untersucht hatte"
    },
    {
      "id": "pq_q23",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Nachdem wir angekommen sind, haben wir sofort gegessen.'",
      "sub": "Vorzeitigkeit in der Vergangenheit",
      "options": [
        "'angekommen waren' statt 'angekommen sind'",
        "'ankamen' statt 'angekommen sind'",
        "'gegessen hatten' statt 'haben gegessen'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "Im nachdem-Satz muss die Vorzeitigkeit mit dem Plusquamperfekt ('angekommen waren') ausgedrückt werden.",
      "explanationEn": "In the nachdem-clause, prior past must be expressed with past perfect ('angekommen waren').",
      "rule": "angekommen waren"
    },
    {
      "id": "pq_q24",
      "type": "word_order",
      "prompt": "Bringe den Satz in die richtige Wortstellung: 'nachdem / das Haus / renoviert / er / hatte'",
      "sub": "Satzstellung mit nachdem",
      "options": [
        "..., nachdem er das Haus renoviert hatte.",
        "..., nachdem hatte er das Haus renoviert.",
        "..., nachdem er hatte das Haus renoviert.",
        "..., er hatte nachdem das Haus renoviert."
      ],
      "correct": 0,
      "explanationDe": "Verb am Satzende: '... nachdem er das Haus renoviert hatte.'",
      "explanationEn": "Verb at end: '... nachdem er das Haus renoviert hatte.'",
      "rule": "renoviert hatte"
    },
    {
      "id": "pq_q25",
      "type": "multiple_choice",
      "prompt": "Nachdem die Kinder eingeschlafen ___, sahen die Eltern einen Film.",
      "sub": "einschlafen im Plusquamperfekt",
      "options": ["waren", "hatten", "seien", "wurden"],
      "correct": 0,
      "explanationDe": "'einschlafen' ist eine Zustandsänderung: 'eingeschlafen waren'.",
      "explanationEn": "'einschlafen' denotes state change: 'eingeschlafen waren'.",
      "rule": "eingeschlafen waren"
    }
  ]
};
