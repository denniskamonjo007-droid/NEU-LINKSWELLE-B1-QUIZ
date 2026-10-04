// B1 German Grammar Topic: Konjunktiv II (Wünsche & Höflichkeit)
// 100 questions dataset covering 5 question types for repeated practice.

export const KONJUNKTIV2_TOPIC = {
  "id": "konjunktiv2",
  "exportName": "KONJUNKTIV2_TOPIC",
  "titleDe": "04. Konjunktiv II (Wünsche & Höflichkeit)",
  "titleEn": "04. Subjunctive II (Wishes & Politeness)",
  "icon": "💭",
  "badge": "hätte, wäre, würde + Infinitiv",
  "summaryDe": "Der Konjunktiv II drückt Höflichkeit, Wünsche, Ratschläge und irreale Bedingungen aus. Bei den meisten Verben nutzt man die \"würde + Infinitiv\"-Form; sein/haben und Modalverben bilden eigene Originalformen (wäre, hätte, könnte, müsste, sollte).",
  "summaryEn": "Subjunctive II expresses politeness, wishes, advice, and hypothetical situations. Most verbs use \"würde + infinitive\"; sein/haben and modal verbs form their own shapes (wäre, hätte, könnte, müsste, sollte).",
  "cheatSheet": {
    "rule": "Höfliche Bitte: \"Könnten Sie mir helfen?\", \"Würden Sie bitte das Fenster schließen?\" Ratschlag: \"Du solltest mehr schlafen.\" Irreal: \"Wenn ich Zeit hätte, würde ich reisen.\"",
    "table": [
      {
        "verb": "haben",
        "k2": "ich hätte, du hättest, er/sie hätte, wir hätten"
      },
      {
        "verb": "sein",
        "k2": "ich wäre, du wärst, er/sie wäre, wir wären"
      },
      {
        "verb": "können",
        "k2": "ich könnte, du könntest, er/sie könnte, wir könnten"
      },
      {
        "verb": "müssen",
        "k2": "ich müsste, du müsstest, er/sie müsste, wir müssten"
      },
      {
        "verb": "sollen",
        "k2": "ich sollte, du solltest, er/sie sollte, wir sollten"
      },
      {
        "verb": "dürfen",
        "k2": "ich dürfte, du dürftest, er/sie dürfte, wir dürften"
      },
      {
        "verb": "alle anderen",
        "k2": "würde + Infinitiv (ich würde gerne kommen)"
      }
    ],
    "goldenRules": [
      "Goldene Regel 1: Bei \"sein\" und \"haben\" NIE \"würde sein\" oder \"würde haben\" sagen! Immer \"wäre\" und \"hätte\" nutzen!",
      "Goldene Regel 2: In irrealen Konditionalsätzen steht das Verb im Nebensatz am Ende (\"Wenn ich reich WÄRE, ...\") und der Hauptsatz beginnt mit Inversion (\"... WÜRDE ich ein Haus KAUFEN\")."
    ]
  },
  "questions": [
    {
      "id": "k2_q1",
      "type": "multiple_choice",
      "prompt": "Wenn ich mehr Zeit ___, würde ich jeden Tag Sport treiben.",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "hätte",
        "habe",
        "hatte",
        "haben würde"
      ],
      "correct": 0,
      "explanationDe": "Irreale Bedingung mit 'haben' verlangt 'hätte' (nicht 'haben würde').",
      "explanationEn": "Hypothetical condition with 'haben' requires 'hätte'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q2",
      "type": "multiple_choice",
      "prompt": "An deiner Stelle ___ ich sofort zum Arzt gehen.",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "würde",
        "werde",
        "hätte",
        "wäre"
      ],
      "correct": 0,
      "explanationDe": "Ratschlag mit 'gehen' -> 'würde ... gehen'.",
      "explanationEn": "Advice formula -> 'würde ... gehen'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q3",
      "type": "multiple_choice",
      "prompt": "___ Sie mir bitte das Salz reichen?",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "Könnten",
        "Können",
        "Könntet",
        "Konnten"
      ],
      "correct": 0,
      "explanationDe": "Höfliche Bitte an 'Sie' mit Modalverb 'können' -> 'Könnten Sie'.",
      "explanationEn": "Polite request -> 'Könnten Sie'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q4",
      "type": "multiple_choice",
      "prompt": "Wenn das Wetter schön ___, könnten wir an den See fahren.",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "wäre",
        "ist",
        "war",
        "sein würde"
      ],
      "correct": 0,
      "explanationDe": "'sein' im Konjunktiv II lautet 'wäre' (nie 'sein würde').",
      "explanationEn": "'sein' in Subjunctive II is 'wäre'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q5",
      "type": "multiple_choice",
      "prompt": "Ich ___ gerne ein Glas Wasser bestellen.",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "würde",
        "werde",
        "hätte",
        "möchte gerne"
      ],
      "correct": 0,
      "explanationDe": "Höfliche Bestellung: 'würde gerne ... bestellen' (oder 'hätte gerne').",
      "explanationEn": "Polite order with 'würde gerne'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q6",
      "type": "multiple_choice",
      "prompt": "Du bist so müde. Du ___ früher ins Bett gehen.",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "solltest",
        "sollst",
        "würdest",
        "hättest"
      ],
      "correct": 0,
      "explanationDe": "Ratschlag / Empfehlung verlangt 'solltest'.",
      "explanationEn": "Advice/recommendation requires 'solltest'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q7",
      "type": "multiple_choice",
      "prompt": "Wenn wir reich ___, würden wir eine Weltreise machen.",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "wären",
        "sind",
        "waren",
        "sein würden"
      ],
      "correct": 0,
      "explanationDe": "'wir' + Konjunktiv II von 'sein' -> 'wären'.",
      "explanationEn": "'wir' + Subjunctive II of 'sein' -> 'wären'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q8",
      "type": "multiple_choice",
      "prompt": "Herr Müller, ___ Sie so freundlich und unterschreiben hier?",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "wären",
        "würden",
        "seien",
        "hätten"
      ],
      "correct": 0,
      "explanationDe": "Höfliche Wendung: 'Wären Sie so freundlich und...'.",
      "explanationEn": "Polite formula: 'Wären Sie so freundlich'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q9",
      "type": "multiple_choice",
      "prompt": "Ich wünschte, ich ___ besser Deutsch sprechen.",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "könnte",
        "kann",
        "konnte",
        "gekonnt hätte"
      ],
      "correct": 0,
      "explanationDe": "Unerfüllbarer Wunsch der Gegenwart mit 'können' -> 'könnte'.",
      "explanationEn": "Unfulfilled wish in present with 'können' -> 'könnte'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q10",
      "type": "multiple_choice",
      "prompt": "Wenn er den Bus nicht verpasst ___, wäre er pünktlich gewesen.",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "hätte",
        "hatte",
        "hat",
        "haben würde"
      ],
      "correct": 0,
      "explanationDe": "Irreale Bedingung der Vergangenheit: 'verpasst hätte'.",
      "explanationEn": "Past hypothetical: 'verpasst hätte'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q11",
      "type": "multiple_choice",
      "prompt": "Wir ___ morgen gerne zu eurer Party kommen.",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "würden",
        "werden",
        "wären",
        "hätten"
      ],
      "correct": 0,
      "explanationDe": "Wunsch / Bereitschaft: 'würden gerne kommen'.",
      "explanationEn": "Desire/readiness: 'würden gerne kommen'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q12",
      "type": "multiple_choice",
      "prompt": "Wenn ich du ___, würde ich das Angebot annehmen.",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "wäre",
        "bin",
        "war",
        "hätte"
      ],
      "correct": 0,
      "explanationDe": "Feste Redewendung: 'Wenn ich du wäre...'.",
      "explanationEn": "Idiomatic advice: 'Wenn ich du wäre...'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q13",
      "type": "multiple_choice",
      "prompt": "Frau Schmidt, ___ ich kurz Ihr Telefon benutzen?",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "Dürfte",
        "Darf",
        "Dürfen",
        "Durfte"
      ],
      "correct": 0,
      "explanationDe": "Sehr höfliche Frage nach Erlaubnis mit 'dürfen' -> 'Dürfte ich'.",
      "explanationEn": "Polite permission request -> 'Dürfte ich'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q14",
      "type": "multiple_choice",
      "prompt": "Wenn sie fleißiger gelernt ___, hätte sie die Prüfung bestanden.",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "hätte",
        "hatte",
        "hat",
        "haben würde"
      ],
      "correct": 0,
      "explanationDe": "Vergangenheit Konjunktiv II: Hilfsverb 'hätte gelernt'.",
      "explanationEn": "Past conditional: 'hätte gelernt'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q15",
      "type": "multiple_choice",
      "prompt": "Ich ___ lieber zu Hause bleiben als ins Kino zu gehen.",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "würde",
        "werde",
        "hätte",
        "wäre"
      ],
      "correct": 0,
      "explanationDe": "Präferenz: 'würde lieber ... bleiben'.",
      "explanationEn": "Preference: 'würde lieber ... bleiben'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q16",
      "type": "multiple_choice",
      "prompt": "Wenn wir ein größeres Auto ___, könnten wir alle mitfahren.",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "hätten",
        "haben",
        "hatten",
        "haben würden"
      ],
      "correct": 0,
      "explanationDe": "'wir' + Konjunktiv II von 'haben' -> 'hätten'.",
      "explanationEn": "'wir' + subjunctive II of 'haben' -> 'hätten'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q17",
      "type": "multiple_choice",
      "prompt": "Er tut so, als ___ er alles besser!",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "wüsste",
        "weiß",
        "gewusst hat",
        "wissen würde"
      ],
      "correct": 0,
      "explanationDe": "Irrealer Vergleich mit 'als': Verb 'wüsste' (von wissen).",
      "explanationEn": "Hypothetical comparison with 'als' -> 'wüsste'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q18",
      "type": "multiple_choice",
      "prompt": "___ du mir bitte helfen?",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "Könntest",
        "Kannst",
        "Konntest",
        "Würdest können"
      ],
      "correct": 0,
      "explanationDe": "Höfliche Bitte per du: 'Könntest du'.",
      "explanationEn": "Polite informal request: 'Könntest du'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q19",
      "type": "multiple_choice",
      "prompt": "Ohne deine Hilfe ___ wir das Projekt nicht geschafft.",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "hätten",
        "haben",
        "hatten",
        "würden"
      ],
      "correct": 0,
      "explanationDe": "Irreale Vergangenheit ohne 'wenn': 'hätten wir nicht geschafft'.",
      "explanationEn": "Past counterfactual: 'hätten wir nicht geschafft'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q20",
      "type": "multiple_choice",
      "prompt": "Wenn ich fliegen ___, würde ich sofort ans Meer reisen.",
      "sub": "Wähle die passende Konjunktiv-II-Form",
      "options": [
        "könnte",
        "kann",
        "konnte",
        "können würde"
      ],
      "correct": 0,
      "explanationDe": "Irreale Fähigkeit: 'könnte'.",
      "explanationEn": "Hypothetical ability: 'könnte'.",
      "rule": "Konjunktiv II Formen"
    },
    {
      "id": "k2_q21",
      "type": "gap_fill",
      "prompt": "Wenn ich doch bloß mehr Geld [ ... ]!",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "hätte",
        "habe",
        "hatte",
        "haben würde"
      ],
      "correct": 0,
      "explanationDe": "Wunschsatz mit 'haben' -> 'hätte'.",
      "explanationEn": "Wish clause -> 'hätte'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q22",
      "type": "gap_fill",
      "prompt": "An deiner Stelle [ ... ] ich den Chef um Rat fragen.",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "würde",
        "werde",
        "hätte",
        "wäre"
      ],
      "correct": 0,
      "explanationDe": "Ratschlag -> 'würde fragen'.",
      "explanationEn": "Advice -> 'würde fragen'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q23",
      "type": "gap_fill",
      "prompt": "[ ... ] Sie mir bitte sagen, wo der Bahnhof ist?",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "Könnten",
        "Können",
        "Könntet",
        "Hätten"
      ],
      "correct": 0,
      "explanationDe": "Höfliche Frage -> 'Könnten Sie'.",
      "explanationEn": "Polite question -> 'Könnten Sie'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q24",
      "type": "gap_fill",
      "prompt": "Wenn es nicht so kalt [ ... ], gingen wir spazieren.",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "wäre",
        "ist",
        "war",
        "wäre gewesen"
      ],
      "correct": 0,
      "explanationDe": "'sein' im Konjunktiv II -> 'wäre'.",
      "explanationEn": "Subjunctive II of 'sein' -> 'wäre'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q25",
      "type": "gap_fill",
      "prompt": "Ich [ ... ] gerne einen Termin vereinbaren.",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "würde",
        "werde",
        "hätte",
        "wäre"
      ],
      "correct": 0,
      "explanationDe": "Höfliche Absicht -> 'würde gerne vereinbaren'.",
      "explanationEn": "Polite intent -> 'würde gerne vereinbaren'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q26",
      "type": "gap_fill",
      "prompt": "Du siehst blass aus. Du [ ... ] dich ausruhen.",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "solltest",
        "sollst",
        "würdest",
        "hättest"
      ],
      "correct": 0,
      "explanationDe": "Empfehlung -> 'solltest'.",
      "explanationEn": "Recommendation -> 'solltest'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q27",
      "type": "gap_fill",
      "prompt": "Wenn wir mehr Platz [ ... ], kauften wir einen Hund.",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "hätten",
        "haben",
        "hatten",
        "haben würden"
      ],
      "correct": 0,
      "explanationDe": "Irreale Bedingung -> 'hätten'.",
      "explanationEn": "Counterfactual condition -> 'hätten'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q28",
      "type": "gap_fill",
      "prompt": "Ich wünschte, ich [ ... ] im Urlaub am Strand!",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "wäre",
        "bin",
        "war",
        "wäre gewesen"
      ],
      "correct": 0,
      "explanationDe": "Gegenwärtiger Wunsch mit 'sein' -> 'wäre'.",
      "explanationEn": "Present wish -> 'wäre'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q29",
      "type": "gap_fill",
      "prompt": "[ ... ] du mir bitte dein Wörterbuch leihen?",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "Würdest",
        "Wirst",
        "Hättest",
        "Wärst"
      ],
      "correct": 0,
      "explanationDe": "Höfliche Bitte mit 'würdest du'.",
      "explanationEn": "Polite request -> 'würdest du'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q30",
      "type": "gap_fill",
      "prompt": "Wenn er schneller gelaufen [ ... ], hätte er den Zug erwischt.",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "wäre",
        "war",
        "ist",
        "hätte"
      ],
      "correct": 0,
      "explanationDe": "Bewegungsverb 'laufen' verlangt 'wäre gelaufen'.",
      "explanationEn": "Motion verb 'laufen' takes 'wäre gelaufen'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q31",
      "type": "gap_fill",
      "prompt": "Ich [ ... ] lieber Tee als Kaffee.",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "hätte",
        "habe",
        "hätte gern",
        "wäre"
      ],
      "correct": 0,
      "explanationDe": "Höflicher Wunsch beim Trinken -> 'hätte gern / hätte lieber'.",
      "explanationEn": "Polite desire -> 'hätte'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q32",
      "type": "gap_fill",
      "prompt": "Wenn ich Flügel [ ... ], würde ich zu dir fliegen.",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "hätte",
        "habe",
        "hatte",
        "haben würde"
      ],
      "correct": 0,
      "explanationDe": "Irreale Fantasie -> 'hätte'.",
      "explanationEn": "Fantasy condition -> 'hätte'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q33",
      "type": "gap_fill",
      "prompt": "[ ... ] Sie so nett, die Tür zu schließen?",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "Wären",
        "Würden",
        "Hätten",
        "Seien"
      ],
      "correct": 0,
      "explanationDe": "'Wären Sie so nett' ist die klassische Höflichkeitsformel.",
      "explanationEn": "Polite formula -> 'Wären Sie so nett'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q34",
      "type": "gap_fill",
      "prompt": "Du [ ... ] nicht so viel Zucker essen.",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "solltest",
        "sollst",
        "würdest",
        "hättest"
      ],
      "correct": 0,
      "explanationDe": "Ratschlag an 'du' -> 'solltest'.",
      "explanationEn": "Advice -> 'solltest'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q35",
      "type": "gap_fill",
      "prompt": "Wenn wir das gewusst [ ... ], wären wir zu Hause geblieben.",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "hätten",
        "haben",
        "hatten",
        "wären"
      ],
      "correct": 0,
      "explanationDe": "'wissen' bildet das Perfekt mit 'haben' -> 'gewusst hätten'.",
      "explanationEn": "Counterfactual past -> 'gewusst hätten'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q36",
      "type": "gap_fill",
      "prompt": "Ich [ ... ] mich freuen, wenn Sie bald antworten.",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "würde",
        "werde",
        "hätte",
        "wäre"
      ],
      "correct": 0,
      "explanationDe": "Höfliche Briefformel: 'Ich würde mich freuen, wenn...'.",
      "explanationEn": "Letter formula -> 'Ich würde mich freuen'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q37",
      "type": "gap_fill",
      "prompt": "Wenn du mich gefragt [ ... ], hätte ich dir geholfen.",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "hättest",
        "hast",
        "hattest",
        "würdest fragen"
      ],
      "correct": 0,
      "explanationDe": "Irreale Vergangenheit: 'gefragt hättest'.",
      "explanationEn": "Past counterfactual -> 'gefragt hättest'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q38",
      "type": "gap_fill",
      "prompt": "[ ... ] ich Sie kurz unterbrechen?",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "Dürfte",
        "Darf",
        "Kann",
        "Hätte"
      ],
      "correct": 0,
      "explanationDe": "Höfliche Bitte um Erlaubnis -> 'Dürfte ich'.",
      "explanationEn": "Polite permission -> 'Dürfte ich'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q39",
      "type": "gap_fill",
      "prompt": "Wir [ ... ] sehr dankbar für Ihre Unterstützung.",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "wären",
        "sind",
        "waren",
        "würden"
      ],
      "correct": 0,
      "explanationDe": "Höflicher Dank: 'Wir wären sehr dankbar'.",
      "explanationEn": "Polite thank you -> 'Wir wären sehr dankbar'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q40",
      "type": "gap_fill",
      "prompt": "Wenn das Leben doch nur ein Wunschkonzert [ ... ]!",
      "sub": "Setze die richtige Konjunktiv-II-Form ein",
      "options": [
        "wäre",
        "ist",
        "war",
        "gewesen wäre"
      ],
      "correct": 0,
      "explanationDe": "Sprichwörtlicher Wunschsatz -> 'wäre'.",
      "explanationEn": "Proverbial wish -> 'wäre'.",
      "rule": "Lückentext: Konjunktiv II"
    },
    {
      "id": "k2_q41",
      "type": "sentence_translation",
      "prompt": "Translate: 'If I had time, I would learn Spanish.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Wenn ich Zeit hätte, würde ich Spanisch lernen.",
        "Wenn ich Zeit habe, würde ich Spanisch lernen.",
        "Wenn ich Zeit hätte, ich würde Spanisch lernen.",
        "Wenn ich Zeit haben würde, lernte ich Spanisch."
      ],
      "correct": 0,
      "explanationDe": "Irreale Bedingung: 'hätte' am Ende des Nebensatzes, 'würde ich' im Hauptsatz.",
      "explanationEn": "'hätte' at end of 'wenn' clause, 'würde ich' in main clause.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q42",
      "type": "sentence_translation",
      "prompt": "Translate: 'Could you please help me?'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Könnten Sie mir bitte helfen?",
        "Können Sie mir bitte helfen?",
        "Würden Sie mir bitte helfen können?",
        "Könntet Sie mir bitte helfen?"
      ],
      "correct": 0,
      "explanationDe": "Höfliche Frage mit Modalverb 'können' -> 'Könnten Sie'.",
      "explanationEn": "Polite question with modal -> 'Könnten Sie'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q43",
      "type": "sentence_translation",
      "prompt": "Translate: 'In your place, I would see a doctor.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "An deiner Stelle würde ich zum Arzt gehen.",
        "An deiner Stelle gehe ich zum Arzt.",
        "An deiner Stelle ich würde zum Arzt gehen.",
        "An deiner Stelle ging ich zum Arzt."
      ],
      "correct": 0,
      "explanationDe": "Ratschlagsformel: 'An deiner Stelle würde ich...'.",
      "explanationEn": "Advice formula: 'An deiner Stelle würde ich...'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q44",
      "type": "sentence_translation",
      "prompt": "Translate: 'I would like to drink a tea.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Ich hätte gerne einen Tee.",
        "Ich habe gerne einen Tee.",
        "Ich würde gern einen Tee haben.",
        "Ich wäre gerne einen Tee."
      ],
      "correct": 0,
      "explanationDe": "Höfliche Bestellung: 'Ich hätte gerne einen Tee.'",
      "explanationEn": "Polite order with 'hätte gerne'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q45",
      "type": "sentence_translation",
      "prompt": "Translate: 'If it were warmer, we could swim.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Wenn es wärmer wäre, könnten wir schwimmen.",
        "Wenn es wärmer ist, könnten wir schwimmen.",
        "Wenn es wärmer wäre, wir könnten schwimmen.",
        "Wenn es wärmer sein würde, könnten wir schwimmen."
      ],
      "correct": 0,
      "explanationDe": "'wäre' im Nebensatz + Inversion 'könnten wir'.",
      "explanationEn": "'wäre' in if-clause + inversion 'könnten wir'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q46",
      "type": "sentence_translation",
      "prompt": "Translate: 'You should sleep more.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Du solltest mehr schlafen.",
        "Du sollst mehr schlafen.",
        "Du würdest mehr schlafen.",
        "Du hättest mehr schlafen."
      ],
      "correct": 0,
      "explanationDe": "Empfehlung / Ratschlag mit 'solltest'.",
      "explanationEn": "Advice with 'solltest'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q47",
      "type": "sentence_translation",
      "prompt": "Translate: 'If I were rich, I would buy a boat.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Wenn ich reich wäre, würde ich ein Boot kaufen.",
        "Wenn ich reich bin, würde ich ein Boot kaufen.",
        "Wenn ich reich sein würde, kaufe ich ein Boot.",
        "Wenn ich reich wäre, ich kaufte ein Boot."
      ],
      "correct": 0,
      "explanationDe": "'wäre' (nie 'sein würde') + 'würde ich ... kaufen'.",
      "explanationEn": "'wäre' + 'würde ich ... kaufen'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q48",
      "type": "sentence_translation",
      "prompt": "Translate: 'Would you be so kind as to open the window?'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Wären Sie so freundlich, das Fenster zu öffnen?",
        "Würden Sie so freundlich, das Fenster zu öffnen?",
        "Hätten Sie so freundlich, das Fenster zu öffnen?",
        "Sind Sie so freundlich, das Fenster zu öffnen?"
      ],
      "correct": 0,
      "explanationDe": "Höflichkeitsfloskel: 'Wären Sie so freundlich...'.",
      "explanationEn": "Polite phrase: 'Wären Sie so freundlich...'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q49",
      "type": "sentence_translation",
      "prompt": "Translate: 'I wish I had a car.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Ich wünschte, ich hätte ein Auto.",
        "Ich wünschte, ich habe ein Auto.",
        "Ich wünschte, ich hatte ein Auto.",
        "Ich wünschte, ich würde ein Auto haben."
      ],
      "correct": 0,
      "explanationDe": "Unerfüllter Wunsch: 'ich hätte'.",
      "explanationEn": "Unfulfilled wish: 'ich hätte'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q50",
      "type": "sentence_translation",
      "prompt": "Translate: 'If he had arrived earlier, we would have eaten together.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Wenn er früher angekommen wäre, hätten wir zusammen gegessen.",
        "Wenn er früher angekommen war, hätten wir zusammen gegessen.",
        "Wenn er früher ankäme, hätten wir zusammen gegessen.",
        "Wenn er früher angekommen wäre, wir hätten zusammen gegessen."
      ],
      "correct": 0,
      "explanationDe": "Irreale Vergangenheit: 'angekommen wäre' (Bewegung) + 'hätten wir gegessen'.",
      "explanationEn": "Past counterfactual with 'angekommen wäre'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q51",
      "type": "sentence_translation",
      "prompt": "Translate: 'May I ask a question?'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Dürfte ich eine Frage stellen?",
        "Darf ich eine Frage stellen?",
        "Könnte ich eine Frage gestellt haben?",
        "Würde ich eine Frage stellen dürfen?"
      ],
      "correct": 0,
      "explanationDe": "Sehr höfliche Frage nach Erlaubnis mit 'Dürfte ich'.",
      "explanationEn": "Polite permission request with 'Dürfte ich'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q52",
      "type": "sentence_translation",
      "prompt": "Translate: 'We would gladly come to your party.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Wir würden gerne zu eurer Party kommen.",
        "Wir werden gerne zu eurer Party kommen.",
        "Wir wären gerne zu eurer Party kommen.",
        "Wir hatten gerne zu eurer Party kommen."
      ],
      "correct": 0,
      "explanationDe": "Freundliche Zusage: 'würden gerne ... kommen'.",
      "explanationEn": "Polite acceptance with 'würden gerne kommen'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q53",
      "type": "sentence_translation",
      "prompt": "Translate: 'If I were you, I would take the train.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Wenn ich du wäre, würde ich den Zug nehmen.",
        "Wenn ich du bin, würde ich den Zug nehmen.",
        "Wenn ich du wäre, ich würde den Zug nehmen.",
        "Wenn ich wäre du, würde ich den Zug nehmen."
      ],
      "correct": 0,
      "explanationDe": "Ratschlag: 'Wenn ich du wäre, würde ich...'.",
      "explanationEn": "Advice formula: 'Wenn ich du wäre, würde ich...'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q54",
      "type": "sentence_translation",
      "prompt": "Translate: 'I would prefer to stay at home tonight.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Ich würde heute Abend lieber zu Hause bleiben.",
        "Ich werde heute Abend lieber zu Hause bleiben.",
        "Ich hätte heute Abend lieber zu Hause bleiben.",
        "Ich wäre heute Abend lieber zu Hause geblieben."
      ],
      "correct": 0,
      "explanationDe": "Präferenz in der Gegenwart: 'würde lieber bleiben'.",
      "explanationEn": "Present preference with 'würde lieber bleiben'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q55",
      "type": "sentence_translation",
      "prompt": "Translate: 'If you had called me, I would have helped you.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Wenn du mich angerufen hättest, hätte ich dir geholfen.",
        "Wenn du mich angerufen hast, hätte ich dir geholfen.",
        "Wenn du mich anriefest, hätte ich dir geholfen.",
        "Wenn du mich angerufen hättest, ich hätte dir geholfen."
      ],
      "correct": 0,
      "explanationDe": "Irreale Bedingung der Vergangenheit: 'angerufen hättest' + 'hätte ich geholfen'.",
      "explanationEn": "Past conditional: 'angerufen hättest' + 'hätte ich geholfen'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q56",
      "type": "sentence_translation",
      "prompt": "Translate: 'Could we meet at five o'clock?'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Könnten wir uns um fünf Uhr treffen?",
        "Können wir uns um fünf Uhr treffen?",
        "Würden wir uns um fünf Uhr treffen können?",
        "Hätten wir uns um fünf Uhr treffen können?"
      ],
      "correct": 0,
      "explanationDe": "Höflicher Terminvorschlag: 'Könnten wir uns...'.",
      "explanationEn": "Polite appointment suggestion: 'Könnten wir uns...'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q57",
      "type": "sentence_translation",
      "prompt": "Translate: 'I would be delighted if you visit us.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Ich würde mich freuen, wenn Sie uns besuchen würden.",
        "Ich werde mich freuen, wenn Sie uns besuchen.",
        "Ich hätte mich freuen, wenn Sie uns besuchen.",
        "Ich freute mich, wenn Sie uns besuchen würden."
      ],
      "correct": 0,
      "explanationDe": "Höfliche Einladung: 'würde mich freuen, wenn...'.",
      "explanationEn": "Polite invitation with 'würde mich freuen'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q58",
      "type": "sentence_translation",
      "prompt": "Translate: 'If we had enough money, we would buy that apartment.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Wenn wir genug Geld hätten, würden wir diese Wohnung kaufen.",
        "Wenn wir genug Geld haben, würden wir diese Wohnung kaufen.",
        "Wenn wir genug Geld hätten, wir würden diese Wohnung kaufen.",
        "Wenn wir genug Geld haben würden, kauften wir diese Wohnung."
      ],
      "correct": 0,
      "explanationDe": "Irreale Gegenwart: 'hätten' + 'würden wir kaufen'.",
      "explanationEn": "Present counterfactual: 'hätten' + 'würden wir kaufen'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q59",
      "type": "sentence_translation",
      "prompt": "Translate: 'You shouldn't work so much.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Du solltest nicht so viel arbeiten.",
        "Du sollst nicht so viel arbeiten.",
        "Du würdest nicht so viel arbeiten.",
        "Du hättest nicht so viel gearbeitet."
      ],
      "correct": 0,
      "explanationDe": "Fürsorglicher Ratschlag: 'Du solltest nicht...'.",
      "explanationEn": "Caring advice: 'Du solltest nicht...'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q60",
      "type": "sentence_translation",
      "prompt": "Translate: 'We would be very grateful for your assistance.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Wir wären für Ihre Hilfe sehr dankbar.",
        "Wir würden für Ihre Hilfe sehr dankbar sein.",
        "Wir waren für Ihre Hilfe sehr dankbar.",
        "Wir hätten für Ihre Hilfe sehr dankbar."
      ],
      "correct": 0,
      "explanationDe": "Formelle Höflichkeit: 'Wir wären sehr dankbar'.",
      "explanationEn": "Formal politeness: 'Wir wären sehr dankbar'.",
      "rule": "Satzübersetzung Konjunktiv II"
    },
    {
      "id": "k2_q61",
      "type": "word_order",
      "prompt": "Arrange the conditional clause:",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "Wenn",
        "ich",
        "mehr",
        "Zeit",
        "hätte"
      ],
      "correctOrder": "Wenn ich mehr Zeit hätte",
      "explanationDe": "'Wenn' + Subjekt + Objekt + 'hätte' am Ende des Nebensatzes.",
      "explanationEn": "'Wenn' + subject + object + 'hätte' at end.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q62",
      "type": "word_order",
      "prompt": "Arrange the main clause following an if-clause:",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "würde",
        "ich",
        "jeden",
        "Tag",
        "Sport",
        "treiben"
      ],
      "correctOrder": "würde ich jeden Tag Sport treiben",
      "explanationDe": "Inversion nach Nebensatz: 'würde' + Subjekt + Zeitangabe + Infinitiv am Ende.",
      "explanationEn": "Inversion: 'würde' + subject + time + infinitive at end.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q63",
      "type": "word_order",
      "prompt": "Arrange the polite question:",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "Könnten",
        "Sie",
        "mir",
        "bitte",
        "helfen"
      ],
      "correctOrder": "Könnten Sie mir bitte helfen",
      "explanationDe": "Finites Verb 'Könnten' + Subjekt 'Sie' + Dativ 'mir' + Partikel 'bitte' + Infinitiv 'helfen'.",
      "explanationEn": "Verb 'Könnten' + subject + object + 'bitte' + infinitive.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q64",
      "type": "word_order",
      "prompt": "Arrange the advice clause:",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "An",
        "deiner",
        "Stelle",
        "würde",
        "ich",
        "zum",
        "Arzt",
        "gehen"
      ],
      "correctOrder": "An deiner Stelle würde ich zum Arzt gehen",
      "explanationDe": "Angabe 'An deiner Stelle' + 'würde' (Pos 2) + Subjekt 'ich' + Richtungsangabe + Infinitiv.",
      "explanationEn": "Intro phrase + 'würde' + subject + directional + infinitive.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q65",
      "type": "word_order",
      "prompt": "Arrange the hypothetical clause with 'wäre':",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "Wenn",
        "das",
        "Wetter",
        "doch",
        "schöner",
        "wäre"
      ],
      "correctOrder": "Wenn das Wetter doch schöner wäre",
      "explanationDe": "'Wenn' + Subjekt + Partikel 'doch' + Komparativ + 'wäre' am Ende.",
      "explanationEn": "'Wenn' + subject + particle + comparative + 'wäre'.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q66",
      "type": "word_order",
      "prompt": "Arrange the recommendation:",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "Du",
        "solltest",
        "heute",
        "früher",
        "schlafen",
        "gehen"
      ],
      "correctOrder": "Du solltest heute früher schlafen gehen",
      "explanationDe": "Subjekt + 'solltest' + Zeitangaben + Doppelinfinitiv 'schlafen gehen'.",
      "explanationEn": "Subject + 'solltest' + time + double infinitive.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q67",
      "type": "word_order",
      "prompt": "Arrange the wish clause with 'gern':",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "Ich",
        "hätte",
        "gerne",
        "eine",
        "Tasse",
        "Kaffee"
      ],
      "correctOrder": "Ich hätte gerne eine Tasse Kaffee",
      "explanationDe": "Subjekt + 'hätte' + 'gerne' + Akkusativobjekt.",
      "explanationEn": "Subject + 'hätte' + 'gerne' + object.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q68",
      "type": "word_order",
      "prompt": "Arrange the past counterfactual subordinate clause:",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "wenn",
        "du",
        "mich",
        "angerufen",
        "hättest"
      ],
      "correctOrder": "wenn du mich angerufen hättest",
      "explanationDe": "'wenn' + Subjekt + Akkusativ + Partizip II + 'hättest' am Ende.",
      "explanationEn": "'wenn' + subject + object + participle + 'hättest'.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q69",
      "type": "word_order",
      "prompt": "Arrange the past counterfactual main clause:",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "hätte",
        "ich",
        "dir",
        "sofort",
        "geholfen"
      ],
      "correctOrder": "hätte ich dir sofort geholfen",
      "explanationDe": "Inversion: Hilfsverb 'hätte' + Subjekt + Dativ + Zeit + Partizip II.",
      "explanationEn": "Inversion: 'hätte' + subject + dative + adverb + participle.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q70",
      "type": "word_order",
      "prompt": "Arrange the polite permission question:",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "Dürfte",
        "ich",
        "kurz",
        "das",
        "Fenster",
        "öffnen"
      ],
      "correctOrder": "Dürfte ich kurz das Fenster öffnen",
      "explanationDe": "'Dürfte' + Subjekt 'ich' + Adverb 'kurz' + Akkusativ + Infinitiv.",
      "explanationEn": "'Dürfte' + subject + adverb + object + infinitive.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q71",
      "type": "word_order",
      "prompt": "Arrange the preference statement:",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "Ich",
        "würde",
        "lieber",
        "zu",
        "Hause",
        "bleiben"
      ],
      "correctOrder": "Ich würde lieber zu Hause bleiben",
      "explanationDe": "Subjekt + 'würde' + 'lieber' + Ortsangabe + Infinitiv 'bleiben'.",
      "explanationEn": "Subject + 'würde' + 'lieber' + location + infinitive.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q72",
      "type": "word_order",
      "prompt": "Arrange the polite letter ending:",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "Ich",
        "würde",
        "mich",
        "über",
        "eine",
        "Antwort",
        "freuen"
      ],
      "correctOrder": "Ich würde mich über eine Antwort freuen",
      "explanationDe": "Subjekt + 'würde' + Reflexiv 'mich' + Präpositionalobjekt + Infinitiv 'freuen'.",
      "explanationEn": "Subject + 'würde' + reflexive + object + infinitive.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q73",
      "type": "word_order",
      "prompt": "Arrange the phrase with 'wären':",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "Wir",
        "wären",
        "Ihnen",
        "sehr",
        "dankbar"
      ],
      "correctOrder": "Wir wären Ihnen sehr dankbar",
      "explanationDe": "Subjekt + 'wären' + Dativobjekt + Prädikativ 'sehr dankbar'.",
      "explanationEn": "Subject + 'wären' + dative + predicate.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q74",
      "type": "word_order",
      "prompt": "Arrange the polite request with 'würden':",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "Würden",
        "Sie",
        "bitte",
        "hier",
        "unterschreiben"
      ],
      "correctOrder": "Würden Sie bitte hier unterschreiben",
      "explanationDe": "'Würden' + Subjekt 'Sie' + 'bitte' + Ortsangabe + Infinitiv.",
      "explanationEn": "'Würden' + subject + 'bitte' + location + infinitive.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q75",
      "type": "word_order",
      "prompt": "Arrange the motion past counterfactual:",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "wenn",
        "er",
        "früher",
        "losgegangen",
        "wäre"
      ],
      "correctOrder": "wenn er früher losgegangen wäre",
      "explanationDe": "'wenn' + Subjekt + Komparativ + Partizip II + 'wäre' am Ende.",
      "explanationEn": "'wenn' + subject + comparative + participle + 'wäre'.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q76",
      "type": "word_order",
      "prompt": "Arrange the hypothetical wish:",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "Ich",
        "wünschte",
        "wir",
        "hätten",
        "Urlaub"
      ],
      "correctOrder": "Ich wünschte wir hätten Urlaub",
      "explanationDe": "Hauptsatz 'Ich wünschte' + Subjekt 'wir' + Konjunktiv II 'hätten' + Nomen 'Urlaub'.",
      "explanationEn": "Main clause + subject + 'hätten' + noun.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q77",
      "type": "word_order",
      "prompt": "Arrange the polite suggestion:",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "Wir",
        "könnten",
        "morgen",
        "zusammen",
        "kochen"
      ],
      "correctOrder": "Wir könnten morgen zusammen kochen",
      "explanationDe": "Subjekt + 'könnten' + Zeitangabe + Modaladverb + Infinitiv.",
      "explanationEn": "Subject + 'könnten' + time + adverb + infinitive.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q78",
      "type": "word_order",
      "prompt": "Arrange the hypothetical comparison with 'als':",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "Er",
        "tut",
        "so",
        "als",
        "wüsste",
        "er",
        "alles"
      ],
      "correctOrder": "Er tut so als wüsste er alles",
      "explanationDe": "Redewendung 'tut so als' + finite Verbform 'wüsste' + Subjekt + Akkusativ.",
      "explanationEn": "Idiom 'tut so als' + verb 'wüsste' + subject + object.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q79",
      "type": "word_order",
      "prompt": "Arrange the unreal condition with modal:",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "Wenn",
        "ich",
        "fliegen",
        "könnte"
      ],
      "correctOrder": "Wenn ich fliegen könnte",
      "explanationDe": "'Wenn' + Subjekt + Infinitiv + Modalverb 'könnte' am Ende.",
      "explanationEn": "'Wenn' + subject + infinitive + modal verb at end.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q80",
      "type": "word_order",
      "prompt": "Arrange the warning advice:",
      "sub": "Bringe die Wörter in die richtige Reihenfolge",
      "scrambled": [
        "Du",
        "solltest",
        "nicht",
        "so",
        "viel",
        "Kaffee",
        "trinken"
      ],
      "correctOrder": "Du solltest nicht so viel Kaffee trinken",
      "explanationDe": "Subjekt + 'solltest' + Negation + Mengenangabe + Infinitiv.",
      "explanationEn": "Subject + 'solltest' + negation + object + infinitive.",
      "rule": "Satzbau im Konjunktiv II"
    },
    {
      "id": "k2_q81",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Wenn ich Zeit [haben würde], [würde ich] [Spanisch] [lernen].",
      "segments": [
        {
          "text": "haben würde,",
          "isError": true,
          "correction": "hätte"
        },
        {
          "text": "würde ich",
          "isError": false
        },
        {
          "text": "Spanisch",
          "isError": false
        },
        {
          "text": "lernen.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Bei 'haben' verwendet man im Konjunktiv II immer 'hätte' (nie 'haben würde').",
      "explanationEn": "For 'haben', use 'hätte' (never 'haben würde').",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q82",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Wenn das Wetter schön [sein würde], [gingen wir] [an den See] [baden].",
      "segments": [
        {
          "text": "sein würde,",
          "isError": true,
          "correction": "wäre"
        },
        {
          "text": "gingen wir",
          "isError": false
        },
        {
          "text": "an den See",
          "isError": false
        },
        {
          "text": "baden.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Bei 'sein' verwendet man immer 'wäre' (nie 'sein würde').",
      "explanationEn": "For 'sein', always use 'wäre' (never 'sein würde').",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q83",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "An deiner Stelle [werde] [ich] [sofort] [den Arzt anrufen].",
      "segments": [
        {
          "text": "werde",
          "isError": true,
          "correction": "würde"
        },
        {
          "text": "ich",
          "isError": false
        },
        {
          "text": "sofort",
          "isError": false
        },
        {
          "text": "den Arzt anrufen.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Ratschläge verlangen Konjunktiv II 'würde' (nicht Futur 'werde').",
      "explanationEn": "Advice requires subjunctive II 'würde' (not 'werde').",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q84",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "[Können Sie] [mir bitte] [das Fenster] [aufmachen]?",
      "segments": [
        {
          "text": "Können Sie",
          "isError": true,
          "correction": "Könnten Sie"
        },
        {
          "text": "mir bitte",
          "isError": false
        },
        {
          "text": "das Fenster",
          "isError": false
        },
        {
          "text": "aufmachen?",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Eine besonders höfliche Bitte erfordert Konjunktiv II 'Könnten Sie'.",
      "explanationEn": "Polite request requires 'Könnten Sie'.",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q85",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Wenn er [hätte Zeit], [würde er] [uns] [besuchen].",
      "segments": [
        {
          "text": "Wenn er",
          "isError": false
        },
        {
          "text": "hätte Zeit,",
          "isError": true,
          "correction": "Zeit hätte"
        },
        {
          "text": "würde er",
          "isError": false
        },
        {
          "text": "uns besuchen.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Im 'wenn'-Nebensatz muss das finite Verb 'hätte' ganz am Ende stehen.",
      "explanationEn": "In the 'wenn' clause, the verb 'hätte' must stand at the very end.",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q86",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Ich [wäre gerne] [einen Kaffee] [bestellen].",
      "segments": [
        {
          "text": "wäre gerne",
          "isError": true,
          "correction": "würde gerne (oder: hätte gerne einen Kaffee)"
        },
        {
          "text": "einen Kaffee",
          "isError": false
        },
        {
          "text": "bestellen.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Mit Infinitiv 'bestellen' verbindet sich 'würde gerne' (nicht 'wäre').",
      "explanationEn": "With infinitive 'bestellen' use 'würde gerne'.",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q87",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Du [sollt] [nicht] [so spät] [schlafen gehen].",
      "segments": [
        {
          "text": "sollt",
          "isError": true,
          "correction": "solltest"
        },
        {
          "text": "nicht",
          "isError": false
        },
        {
          "text": "so spät",
          "isError": false
        },
        {
          "text": "schlafen gehen.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Ratschlag per Du im Konjunktiv II lautet 'solltest' (nicht 'sollt').",
      "explanationEn": "Advice in subjunctive II is 'solltest'.",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q88",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Wenn wir reich wären, [wir würden] [ein Haus] [am Meer kaufen].",
      "segments": [
        {
          "text": "Wenn wir reich wären,",
          "isError": false
        },
        {
          "text": "wir würden",
          "isError": true,
          "correction": "würden wir"
        },
        {
          "text": "ein Haus",
          "isError": false
        },
        {
          "text": "am Meer kaufen.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Inversionsfehler: Nach dem Nebensatz muss der Hauptsatz mit dem finiten Verb 'würden wir' beginnen.",
      "explanationEn": "Inversion error: main clause must start with verb 'würden wir'.",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q89",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Ich wünschte, ich [habe] [mehr Geduld] [mit den Kindern].",
      "segments": [
        {
          "text": "Ich wünschte,",
          "isError": false
        },
        {
          "text": "ich habe",
          "isError": true,
          "correction": "ich hätte"
        },
        {
          "text": "mehr Geduld",
          "isError": false
        },
        {
          "text": "mit den Kindern.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Unerfüllbarer Wunsch verlangt Konjunktiv II 'hätte' (nicht Indikativ 'habe').",
      "explanationEn": "Unfulfilled wish requires 'hätte'.",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q90",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Wenn er früher gekommen wäre, [haben wir] [zusammen] [gegessen].",
      "segments": [
        {
          "text": "Wenn er früher gekommen wäre,",
          "isError": false
        },
        {
          "text": "haben wir",
          "isError": true,
          "correction": "hätten wir"
        },
        {
          "text": "zusammen",
          "isError": false
        },
        {
          "text": "gegessen.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Irreale Vergangenheit verlangt Konjunktiv II 'hätten wir' (nicht Indikativ 'haben wir').",
      "explanationEn": "Past counterfactual requires 'hätten wir'.",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q91",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Frau Meier, [sein Sie] [bitte so nett] [und helfen mir].",
      "segments": [
        {
          "text": "sein Sie",
          "isError": true,
          "correction": "wären Sie"
        },
        {
          "text": "bitte so nett",
          "isError": false
        },
        {
          "text": "und helfen mir.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Die höfliche Redewendung lautet 'Wären Sie so nett'.",
      "explanationEn": "Polite phrase is 'Wären Sie so nett'.",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q92",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Du [würdest] [besser] [deine Hausaufgaben] [gemacht].",
      "segments": [
        {
          "text": "Du würdest",
          "isError": false
        },
        {
          "text": "besser",
          "isError": false
        },
        {
          "text": "deine Hausaufgaben",
          "isError": false
        },
        {
          "text": "gemacht.",
          "isError": true,
          "correction": "machen (oder: hättest gemacht)"
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Nach 'würdest' muss der Infinitiv 'machen' stehen (nicht Partizip II 'gemacht').",
      "explanationEn": "After 'würdest', use infinitive 'machen'.",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q93",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Ich [dürfe] [Sie] [um einen Gefallen] [bitten].",
      "segments": [
        {
          "text": "Ich dürfe",
          "isError": true,
          "correction": "Dürfte ich (oder: Ich möchte Sie bitten)"
        },
        {
          "text": "Sie",
          "isError": false
        },
        {
          "text": "um einen Gefallen",
          "isError": false
        },
        {
          "text": "bitten.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Konjunktiv II von dürfen lautet 'dürfte' (nicht Konjunktiv I 'dürfe').",
      "explanationEn": "Subjunctive II is 'dürfte' (not 'dürfe').",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q94",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Wenn ich du [wäre gewesen], [hätte ich] [den Vertrag] [unterschrieben].",
      "segments": [
        {
          "text": "Wenn ich du wäre gewesen,",
          "isError": true,
          "correction": "Wenn ich an deiner Stelle gewesen wäre"
        },
        {
          "text": "hätte ich",
          "isError": false
        },
        {
          "text": "den Vertrag",
          "isError": false
        },
        {
          "text": "unterschrieben.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Die Vergangenheitsform lautet 'Wenn ich an deiner Stelle gewesen wäre'.",
      "explanationEn": "Correction needed.",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q95",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Wir [hätten] [gerne] [nach Italien] [fliegen].",
      "segments": [
        {
          "text": "Wir hätten",
          "isError": true,
          "correction": "Wir würden (oder: möchten)"
        },
        {
          "text": "gerne",
          "isError": false
        },
        {
          "text": "nach Italien",
          "isError": false
        },
        {
          "text": "fliegen.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Mit dem Infinitiv 'fliegen' verbindet man 'würden gerne' (nicht 'hätten gerne').",
      "explanationEn": "With infinitive 'fliegen', use 'würden gerne'.",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q96",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Wenn es morgen [regnen würde], [bleiben wir] [zu Hause].",
      "segments": [
        {
          "text": "Wenn es morgen regnen würde,",
          "isError": false
        },
        {
          "text": "bleiben wir",
          "isError": true,
          "correction": "blieben wir (oder: würden wir bleiben)"
        },
        {
          "text": "zu Hause.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Konsequenz im Konjunktiv II: 'würden wir zu Hause bleiben'.",
      "explanationEn": "Consequence in subjunctive II: 'würden wir zu Hause bleiben'.",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q97",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Du [hättest] [mehr] [Gemüse] [essen sollen].",
      "segments": [
        {
          "text": "Du hättest",
          "isError": false
        },
        {
          "text": "mehr Gemüse",
          "isError": false
        },
        {
          "text": "essen sollen.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Dieser Satz ist grammatikalisch korrekt als Ersatzinfinitiv.",
      "explanationEn": "Grammatically correct.",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q98",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Wenn ich [könnte zaubern], [würde ich] [alles ändern].",
      "segments": [
        {
          "text": "könnte zaubern,",
          "isError": true,
          "correction": "zaubern könnte"
        },
        {
          "text": "würde ich",
          "isError": false
        },
        {
          "text": "alles ändern.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Im Nebensatz steht das Modalverb 'könnte' ganz am Schluss: 'zaubern könnte'.",
      "explanationEn": "Modal verb 'könnte' stands at end: 'zaubern könnte'.",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q99",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Ich wünschte, du [bist] [hier bei mir] [am Strand].",
      "segments": [
        {
          "text": "Ich wünschte,",
          "isError": false
        },
        {
          "text": "du bist",
          "isError": true,
          "correction": "du wärst"
        },
        {
          "text": "hier bei mir",
          "isError": false
        },
        {
          "text": "am Strand.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Wunschsatz verlangt Konjunktiv II: 'du wärst'.",
      "explanationEn": "Wish clause requires 'du wärst'.",
      "rule": "Fehlersuche Konjunktiv II"
    },
    {
      "id": "k2_q100",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Konjunktiv-II-Satz:",
      "sentence": "Herr Ober, wir [hätten gerne] [die Rechnung] [gebracht].",
      "segments": [
        {
          "text": "wir hätten gerne",
          "isError": false
        },
        {
          "text": "die Rechnung",
          "isError": false
        },
        {
          "text": "gebracht.",
          "isError": true,
          "correction": "bezahlt (oder: Hätten Sie gerne die Rechnung?)"
        }
      ],
      "sub": "Klicke auf das falsche Segment",
      "explanationDe": "Der Gast sagt: 'Wir möchten bitte zahlen' oder 'Könnten Sie uns die Rechnung bringen?'.",
      "explanationEn": "Colloquial error correction.",
      "rule": "Fehlersuche Konjunktiv II"
    }
  ]
};
