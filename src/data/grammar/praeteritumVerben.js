// B1 German Grammar Topic 16: Präteritum der unregelmäßigen Verben & Modalverben

export const PRAETERITUM_VERBEN_TOPIC = {
  "id": "praeteritum_verben",
  "exportName": "PRAETERITUM_VERBEN_TOPIC",
  "titleDe": "16. Präteritum & Modalverben in der Vergangenheit",
  "titleEn": "16. Simple Past (Präteritum) & Past Modals",
  "icon": "⏳",
  "badge": "ging, sprach, musste, konnte",
  "summaryDe": "Präteritum der wichtigsten unregelmäßigen Verben (gehen -> ging, sprechen -> sprach) sowie Präteritum und Perfekt mit Ersatzinfinitiv der Modalverben (musste, konnte, durfte, wollte, sollte + 'hat machen müssen').",
  "summaryEn": "Simple past of essential irregular/strong verbs (gehen -> ging, sprechen -> sprach) plus simple past and double infinitive past modal structures (musste, konnte, hat machen müssen).",
  "cheatSheet": {
    "rule": "Starke Verben wechseln im Präteritum den Stammvokal (Ablautreihe). Endungen: ich -ø, du -st, er/sie/es -ø, wir -en, ihr -t, sie/Sie -en (1. und 3. Person Singular haben KEINE Endung!).",
    "keyConnectors": [
      {
        "conn": "Modalverben im Präteritum (Standard in B1)",
        "meaning": "musste, konnte, durfte, wollte, sollte, mochte",
        "example": "Gestern konnte ich nicht kommen, weil ich lange arbeiten musste."
      },
      {
        "conn": "Häufigste starke Verben im Präteritum",
        "meaning": "kam, ging, stand, lag, saß, gab, nahm, sprach, half, sah, las, fuhr, schlief",
        "example": "Als er nach Hause kam, schliefen die Kinder schon."
      },
      {
        "conn": "Ersatzinfinitiv im Perfekt mit Modalverben",
        "meaning": "haben + Infinitiv + Modalverb im Infinitiv (kein Partizip II)",
        "example": "Ich habe den Bericht noch gestern Abend schreiben müssen (nicht: gemusst)."
      }
    ],
    "goldenRules": [
      "Goldene Regel 1: In der 1. und 3. Person Singular gibt es im Präteritum NIEMALS ein '-t' bei starken Verben: ich ging, er ging (nicht 'er gingt').",
      "Goldene Regel 2: Modalverben verlieren im Präteritum den Umlaut: können -> konnte, müssen -> musste, dürfen -> durfte."
    ]
  },
  "questions": [
    {
      "id": "pv_q1",
      "type": "multiple_choice",
      "prompt": "Gestern Abend ___ ich leider nicht zur Party kommen, weil ich lernen musste.",
      "sub": "Präteritum von können (ich)",
      "options": ["konnte", "könnte", "kann", "gekonnt"],
      "correct": 0,
      "explanationDe": "Das Präteritum von 'können' für 'ich' lautet 'konnte' (ohne Umlaut).",
      "explanationEn": "Past tense of 'können' for 1st person is 'konnte' (no umlaut).",
      "rule": "Modalverb im Präteritum: können -> konnte"
    },
    {
      "id": "pv_q2",
      "type": "multiple_choice",
      "prompt": "Als die Polizei am Tatort eintraf, ___ der Dieb bereits weggelaufen.",
      "sub": "Präteritum von sein (3. Person)",
      "options": ["war", "wurde", "hatte", "ist"],
      "correct": 0,
      "explanationDe": "Plusquamperfekt mit Präteritum von sein: 'war bereits weggelaufen'.",
      "explanationEn": "Past perfect auxiliary with 'war': 'war weggelaufen'.",
      "rule": "Präteritum von sein: war"
    },
    {
      "id": "pv_q3",
      "type": "gap_fill",
      "prompt": "Er ___ mir gestern eine sehr interessante Frage.",
      "sub": "Präteritum von stellen (schwaches Verb)",
      "options": ["stellte", "stand", "stellt", "gestellte"],
      "correct": 0,
      "explanationDe": "Regelmäßiges Verb: Stamm 'stell-' + Endung '-te' = 'stellte'.",
      "explanationEn": "Regular verb adds '-te': stellte.",
      "rule": "Regelmäßiges Präteritum mit -te"
    },
    {
      "id": "pv_q4",
      "type": "multiple_choice",
      "prompt": "Wie lautet die 3. Person Singular Präteritum von 'nehmen'?",
      "sub": "Starkes Verb nehmen",
      "options": ["nahm", "nahmte", "nimmt", "genommen"],
      "correct": 0,
      "explanationDe": "Starke Verben ändern den Vokal: nehmen -> er nahm (keine Endung in der 3. Person Singular).",
      "explanationEn": "Strong verb: nehmen -> er nahm.",
      "rule": "Ablautreihe: nehmen -> nahm"
    },
    {
      "id": "pv_q5",
      "type": "multiple_choice",
      "prompt": "Im letzten Sommer ___ wir zwei Wochen durch Südfrankreich.",
      "sub": "Präteritum von fahren (wir)",
      "options": ["fuhren", "fahrten", "fuhrt", "gefahren"],
      "correct": 0,
      "explanationDe": "Präteritum von 'fahren': wir fuhren.",
      "explanationEn": "Past of 'fahren': wir fuhren.",
      "rule": "fahren -> fuhren"
    },
    {
      "id": "pv_q6",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Er gingt gestern ohne Mantel nach Hause.'",
      "sub": "Endung der 3. Person Singular bei starken Verben",
      "options": [
        "'ging' statt 'gingt' (keine Endung bei er/sie/es)",
        "'nach Hause gingt er'",
        "'ohne Mantel gingt er'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "Die 1. und 3. Person Singular starker Verben im Präteritum hat KEINE Endung: 'ich ging, er ging'.",
      "explanationEn": "1st and 3rd person singular strong verbs take NO ending: 'er ging'.",
      "rule": "Keine Endung in 3. Pers. Sg. Präteritum"
    },
    {
      "id": "pv_q7",
      "type": "sentence_translation",
      "prompt": "Translate: 'He had to work on Saturday.'",
      "sub": "Präteritum von müssen",
      "options": [
        "Er musste am Samstag arbeiten.",
        "Er müsste am Samstag arbeiten.",
        "Er hat am Samstag arbeiten gemusst.",
        "Er war am Samstag arbeiten gemusst."
      ],
      "correct": 0,
      "explanationDe": "Für Vergangenheitserzählungen nutzt man bei Modalverben stets das Präteritum: 'Er musste arbeiten'.",
      "explanationEn": "Narrative past of modals: 'Er musste arbeiten'.",
      "rule": "Modalverb müssen -> musste"
    },
    {
      "id": "pv_q8",
      "type": "multiple_choice",
      "prompt": "Als Kind ___ ich jeden Tag um 20 Uhr ins Bett gehen.",
      "sub": "Präteritum von sollen / müssen",
      "options": ["musste", "müsste", "habe gemusst", "muss"],
      "correct": 0,
      "explanationDe": "Präteritum von 'müssen': ich musste.",
      "explanationEn": "Past of 'müssen': musste.",
      "rule": "müssen -> musste"
    },
    {
      "id": "pv_q9",
      "type": "gap_fill",
      "prompt": "Die Lehrerin ___ den Schülern die schwierige Grammatikregel noch einmal.",
      "sub": "Präteritum von erklären",
      "options": ["erklärte", "erklärt", "erklart", "geerklärte"],
      "correct": 0,
      "explanationDe": "Regelmäßiges Verb auf -ieren / untrennbar: Stamm 'erklär-' + '-te' = 'erklärte'.",
      "explanationEn": "Regular past: 'erklärte'.",
      "rule": "Präteritum schwacher Verben (-te)"
    },
    {
      "id": "pv_q10",
      "type": "multiple_choice",
      "prompt": "Wie lautet das Präteritum von 'geschehen' (3. Person Sg.)?",
      "sub": "Starkes Verb geschehen",
      "options": ["geschah", "geschieht", "geschehte", "geschiehtet"],
      "correct": 0,
      "explanationDe": "Das Präteritum von 'geschehen' lautet 'geschah': 'Was geschah danach?'.",
      "explanationEn": "Past of 'geschehen' is 'geschah'.",
      "rule": "geschehen -> geschah"
    },
    {
      "id": "pv_q11",
      "type": "word_order",
      "prompt": "Welche Satzstellung mit Ersatzinfinitiv im Perfekt ist korrekt?",
      "sub": "Ersatzinfinitiv mit Modalverb am Satzende",
      "options": [
        "Ich habe mein Auto in der Werkstatt reparieren lassen.",
        "Ich habe mein Auto in der Werkstatt gelassen reparieren.",
        "Ich habe reparieren lassen mein Auto in der Werkstatt.",
        "Ich mein Auto habe in der Werkstatt reparieren gelassen."
      ],
      "correct": 0,
      "explanationDe": "Beim Ersatzinfinitiv stehen die beiden Infinitive am Satzende: 'reparieren lassen' (nicht 'gelassen').",
      "explanationEn": "With double infinitive: 'reparieren lassen' at clause end.",
      "rule": "Ersatzinfinitiv mit lassen/Modalverb"
    },
    {
      "id": "pv_q12",
      "type": "multiple_choice",
      "prompt": "Der Minister ___ gestern vor der Presse über die neue Reform.",
      "sub": "Präteritum von sprechen",
      "options": ["sprach", "sprachte", "spricht", "gesprochen"],
      "correct": 0,
      "explanationDe": "Präteritum von 'sprechen': er sprach (Vokalwechsel e -> a).",
      "explanationEn": "Past of 'sprechen': sprach.",
      "rule": "sprechen -> sprach"
    },
    {
      "id": "pv_q13",
      "type": "gap_fill",
      "prompt": "Wir ___ leider keine Zeit, um die Stadtbesichtigung zu machen.",
      "sub": "Präteritum von haben (wir)",
      "options": ["hatten", "hätten", "haben", "gehabt"],
      "correct": 0,
      "explanationDe": "Präteritum von 'haben': wir hatten (ohne Umlaut, mit Umlaut wäre es Konjunktiv II).",
      "explanationEn": "Past of haben: 'wir hatten' (no umlaut).",
      "rule": "haben -> hatten"
    },
    {
      "id": "pv_q14",
      "type": "multiple_choice",
      "prompt": "Während des Studiums ___ er jeden Cent zweimal umdrehen.",
      "sub": "Präteritum von dürfen / müssen",
      "options": ["musste", "mochte", "durfte", "konnte"],
      "correct": 0,
      "explanationDe": "'musste umdrehen' drückt die Notwendigkeit aus.",
      "explanationEn": "'musste' expresses necessity in the past.",
      "rule": "Bedeutung von musste im Präteritum"
    },
    {
      "id": "pv_q15",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Sie wolltete nicht mit dem Zug fahren.'",
      "sub": "Präteritum von wollen",
      "options": [
        "'wollte' statt 'wolltete'",
        "'wollte sie nicht'",
        "'fahren wolltete'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "Das Präteritum von 'wollen' lautet 'wollte' (nicht 'wolltete').",
      "explanationEn": "Past of wollen is 'wollte'.",
      "rule": "wollen -> wollte"
    },
    {
      "id": "pv_q16",
      "type": "sentence_translation",
      "prompt": "Translate: 'The meeting lasted two hours.'",
      "sub": "Präteritum von dauern",
      "options": [
        "Die Besprechung dauerte zwei Stunden.",
        "Die Besprechung daut zwei Stunden.",
        "Die Besprechung hat zwei Stunden gedauert haben.",
        "Die Besprechung war zwei Stunden gedauert."
      ],
      "correct": 0,
      "explanationDe": "Regelmäßiges Präteritum: 'dauerte'.",
      "explanationEn": "Regular past: 'dauerte'.",
      "rule": "dauern -> dauerte"
    },
    {
      "id": "pv_q17",
      "type": "multiple_choice",
      "prompt": "Wie lautet das Präteritum von 'bieten' (er/sie/es)?",
      "sub": "Starkes Verb bieten",
      "options": ["bot", "biete", "bietete", "geboten"],
      "correct": 0,
      "explanationDe": "Präteritum von 'bieten' ist 'bot': 'Die Firma bot gute Konditionen'.",
      "explanationEn": "Past of bieten is 'bot'.",
      "rule": "bieten -> bot"
    },
    {
      "id": "pv_q18",
      "type": "gap_fill",
      "prompt": "Plötzlich ___ der Strom im ganzen Gebäude aus.",
      "sub": "Präteritum von ausfallen",
      "options": ["fiel", "fallte", "fielte", "gefallen"],
      "correct": 0,
      "explanationDe": "Das trennbare Verb 'ausfallen' bildet im Präteritum 'fiel ... aus'.",
      "explanationEn": "Past of fallen: fiel (fiel aus).",
      "rule": "ausfallen -> fiel aus"
    },
    {
      "id": "pv_q19",
      "type": "multiple_choice",
      "prompt": "Früher ___ man in vielen Restaurants noch rauchen, heute ist es verboten.",
      "sub": "Präteritum von dürfen (Erlaubnis)",
      "options": ["durfte", "dürfte", "darf", "gedurft"],
      "correct": 0,
      "explanationDe": "Präteritum von 'dürfen' für historische/frühere Erlaubnis lautet 'durfte' (ohne Umlaut).",
      "explanationEn": "Past permission uses 'durfte' (no umlaut).",
      "rule": "dürfen -> durfte"
    },
    {
      "id": "pv_q20",
      "type": "multiple_choice",
      "prompt": "Nach langer Diskussion ___ sich die Gruppe für das Projekt B.",
      "sub": "Präteritum von sich entscheiden",
      "options": ["entschied", "entscheidete", "entscheidet", "entscheiden"],
      "correct": 0,
      "explanationDe": "Präteritum von 'entscheiden' ist 'entschied' (ei -> ie).",
      "explanationEn": "Past of entscheiden is 'entschied'.",
      "rule": "entscheiden -> entschied"
    },
    {
      "id": "pv_q21",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Ich habe das Buch leider nicht lesen gekonnt.'",
      "sub": "Ersatzinfinitiv mit Modalverb",
      "options": [
        "'lesen können' statt 'lesen gekonnt' (Ersatzinfinitiv)",
        "'habe nicht das Buch'",
        "'gekonnt lesen'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "Steht ein Modalverb mit einem Vollverb im Perfekt, tritt der Ersatzinfinitiv ein: 'lesen können', nicht 'lesen gekonnt'.",
      "explanationEn": "When combined with another infinitive, modal uses infinitive: 'lesen können'.",
      "rule": "Ersatzinfinitiv bei Modalverben"
    },
    {
      "id": "pv_q22",
      "type": "gap_fill",
      "prompt": "Er ___ die Tür leise hinter sich zu.",
      "sub": "Präteritum von zuziehen / schlagen",
      "options": ["zog", "zieht", "gezogen", "zogte"],
      "correct": 0,
      "explanationDe": "Präteritum von 'ziehen': er zog ... zu.",
      "explanationEn": "Past of ziehen: 'zog'.",
      "rule": "ziehen -> zog"
    },
    {
      "id": "pv_q23",
      "type": "multiple_choice",
      "prompt": "Wie lautet die 2. Person Plural (ihr) von 'geben' im Präteritum?",
      "sub": "ihr-Form Präteritum",
      "options": ["ihr gabt", "ihr gebt", "ihr gabtet", "ihr gegeben"],
      "correct": 0,
      "explanationDe": "Präteritumstamm 'gab-' + Endung '-t' = 'ihr gabt'.",
      "explanationEn": "Past stem 'gab-' + '-t' = 'ihr gabt'.",
      "rule": "2. Person Plural: Stamm + t (ihr gabt)"
    },
    {
      "id": "pv_q24",
      "type": "sentence_translation",
      "prompt": "Translate: 'We knew the answer immediately.'",
      "sub": "Präteritum von wissen",
      "options": [
        "Wir wussten die Antwort sofort.",
        "Wir wissten die Antwort sofort.",
        "Wir gewusst die Antwort sofort.",
        "Wir wüssten die Antwort sofort."
      ],
      "correct": 0,
      "explanationDe": "Präteritum von 'wissen': wir wussten (ohne Umlaut).",
      "explanationEn": "Past of wissen: 'wir wussten'.",
      "rule": "wissen -> wusste"
    },
    {
      "id": "pv_q25",
      "type": "multiple_choice",
      "prompt": "Was beschreibt der Satz: 'Sie sollte den Chef sofort anrufen'?",
      "sub": "Bedeutung von sollte im Präteritum",
      "options": [
        "Einen Auftrag oder eine Aufforderung in der Vergangenheit",
        "Einen Wunsch für die Zukunft",
        "Eine Vermutung in der Gegenwart",
        "Eine Höflichkeitsbitte"
      ],
      "correct": 0,
      "explanationDe": "'sollte' im Präteritum drückt einen anvertrauten Auftrag oder eine Pflicht in der Vergangenheit aus.",
      "explanationEn": "'sollte' in the simple past expresses an assignment or duty given in the past.",
      "rule": "Bedeutung von 'sollte' in Vergangenheit"
    }
  ]
};
