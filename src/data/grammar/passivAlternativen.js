// B1 German Grammar Topic 13: Zustandspassiv & Passiv-Alternativen

export const PASSIV_ALTERNATIVEN_TOPIC = {
  "id": "passiv_alternativen",
  "exportName": "PASSIV_ALTERNATIVEN_TOPIC",
  "titleDe": "13. Zustandspassiv & Passiv-Alternativen",
  "titleEn": "13. State Passive & Passive Alternatives",
  "icon": "🔄",
  "badge": "sein + Partizip II / sich lassen",
  "summaryDe": "Das Zustandspassiv (sein + Partizip II) beschreibt das fertige Resultat einer Handlung. Beliebte B1-Passiv-Alternativen sind 'sich lassen + Infinitiv' und 'sein zu + Infinitiv'.",
  "summaryEn": "The State Passive (sein + Partizip II) describes the finished state or result. Key B1 passive alternatives include 'sich lassen + infinitive' and 'sein + zu + infinitive'.",
  "cheatSheet": {
    "rule": "Zustandspassiv: Subjekt + SEIN + Partizip II. Alternativen: 'lässt sich machen' (kann gemacht werden) & 'ist zu tun' (muss/kann getan werden).",
    "keyConnectors": [
      {
        "conn": "Vorgang vs. Zustand",
        "meaning": "Vorgangspassiv: 'Das Fenster wird geöffnet' (Aktion) | Zustandspassiv: 'Das Fenster ist geöffnet' (Zustand)",
        "example": "Die Tür wird gerade repariert (Vorgang). Die Tür ist repariert (fertig/Zustand)."
      },
      {
        "conn": "sich lassen + Infinitiv",
        "meaning": "Bedeutung: 'kann gemacht werden' (Möglichkeit)",
        "example": "Dieses Problem lässt sich leicht lösen (= Das Problem kann leicht gelöst werden)."
      },
      {
        "conn": "sein + zu + Infinitiv",
        "meaning": "Bedeutung: 'muss / kann getan werden' (Pflicht oder Möglichkeit)",
        "example": "Die Rechnung ist sofort zu bezahlen (= Die Rechnung muss sofort bezahlt werden)."
      },
      {
        "conn": "Adjektive auf -bar / -lich",
        "meaning": "machbar, lösbar, erreichbar, leserlich",
        "example": "Die Handschrift ist kaum leserlich (= kann kaum gelesen werden)."
      }
    ],
    "goldenRules": [
      "Goldene Regel 1: 'werden' beschreibt die laufende Aktion ('Das Geschäft WIRD geschlossen'), 'sein' beschreibt das fertige Ergebnis ('Das Geschäft IST geschlossen').",
      "Goldene Regel 2: 'Das lässt sich nicht ändern' ist eine der häufigsten B1-Redewendungen und bedeutet 'Das kann man nicht ändern'."
    ]
  },
  "questions": [
    {
      "id": "pa_q1",
      "type": "multiple_choice",
      "prompt": "Am Sonntag ___ alle Geschäfte in Deutschland geschlossen.",
      "sub": "Zustandspassiv (Resultat/Zustand)",
      "options": ["sind", "werden", "haben", "wurden"],
      "correct": 0,
      "explanationDe": "Zustandspassiv mit 'sein': 'sind geschlossen'. Es beschreibt den Zustand am Sonntag.",
      "explanationEn": "State passive with 'sein': 'sind geschlossen' describes the condition on Sunday.",
      "rule": "Zustandspassiv: sein + Partizip II"
    },
    {
      "id": "pa_q2",
      "type": "multiple_choice",
      "prompt": "Keine Sorge, dieses technische Problem ___ sich schnell lösen.",
      "sub": "Passiv-Alternative mit 'lassen'",
      "options": ["lässt", "kann", "wird", "macht"],
      "correct": 0,
      "explanationDe": "'lässt sich lösen' bedeutet 'kann gelöst werden' (Passiv-Alternative).",
      "explanationEn": "'lässt sich lösen' means 'can be solved' (passive alternative).",
      "rule": "sich lassen + Infinitiv"
    },
    {
      "id": "pa_q3",
      "type": "multiple_choice",
      "prompt": "Dieser wichtige Betrag ist bis zum Monatsende ___ bezahlen.",
      "sub": "sein + zu + Infinitiv",
      "options": ["zu", "nach", "um", "für"],
      "correct": 0,
      "explanationDe": "'ist zu bezahlen' drückt eine Notwendigkeit aus (= muss bezahlt werden).",
      "explanationEn": "'ist zu bezahlen' expresses necessity (= must be paid).",
      "rule": "sein + zu + Infinitiv"
    },
    {
      "id": "pa_q4",
      "type": "gap_fill",
      "prompt": "Als wir nach Hause kamen, ___ das Essen bereits gekocht.",
      "sub": "Zustandspassiv in der Vergangenheit",
      "options": ["war", "wurde", "hatte", "ist"],
      "correct": 0,
      "explanationDe": "Zustandspassiv Präteritum: 'war gekocht' (das Essen stand schon fertig auf dem Tisch).",
      "explanationEn": "State passive past: 'war gekocht' (the meal was already cooked and ready).",
      "rule": "Zustandspassiv Präteritum: war + Partizip II"
    },
    {
      "id": "pa_q5",
      "type": "sentence_translation",
      "prompt": "Welcher Satz bedeutet dasselbe wie: 'Die Aufgabe kann nicht gelöst werden'?",
      "sub": "Wähle die passende Passiv-Alternative",
      "options": [
        "Die Aufgabe lässt sich nicht lösen.",
        "Die Aufgabe ist gelöst worden.",
        "Die Aufgabe lässt nicht lösen.",
        "Die Aufgabe wird nicht lösen."
      ],
      "correct": 0,
      "explanationDe": "'lässt sich nicht lösen' drückt genau aus: 'kann nicht gelöst werden'.",
      "explanationEn": "'lässt sich nicht lösen' precisely means: 'cannot be solved'.",
      "rule": "sich lassen = können + Passiv"
    },
    {
      "id": "pa_q6",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Die Hausaufgabe ist bis morgen zu abgeben.'",
      "sub": "Infinitiv mit 'zu' bei trennbaren Verben",
      "options": [
        "'abzugeben' statt 'zu abgeben'",
        "'abgegeben' statt 'zu abgeben'",
        "'wird' statt 'ist'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "Bei trennbaren Verben wandert 'zu' zwischen Präfix und Stamm: 'abzugeben'.",
      "explanationEn": "For separable verbs, 'zu' goes between prefix and stem: 'abzugeben'.",
      "rule": "sein + ab-zu-geben"
    },
    {
      "id": "pa_q7",
      "type": "multiple_choice",
      "prompt": "Das Buch ist überall im Handel ___.",
      "sub": "Adjektiv auf -lich (Passiv-Alternative)",
      "options": ["erhältlich", "erhaltend", "erhalten", "erhaltbar"],
      "correct": 0,
      "explanationDe": "'erhältlich' bedeutet 'kann erhalten/gekauft werden'.",
      "explanationEn": "'erhältlich' means 'can be obtained/purchased'.",
      "rule": "Adjektiv auf -lich = Passiv-Ersatz"
    },
    {
      "id": "pa_q8",
      "type": "gap_fill",
      "prompt": "Der alte Fernseher lässt sich leider nicht mehr ___.",
      "sub": "sich lassen + Infinitiv",
      "options": ["reparieren", "repariert", "reparierend", "zu reparieren"],
      "correct": 0,
      "explanationDe": "'lässt sich' verlangt den reinen Infinitiv ohne 'zu': 'reparieren'.",
      "explanationEn": "'lässt sich' takes bare infinitive without 'zu': 'reparieren'.",
      "rule": "lässt sich + Infinitiv"
    },
    {
      "id": "pa_q9",
      "type": "multiple_choice",
      "prompt": "Diese Regel ist von allen Mitarbeitern strikt ___ beachten.",
      "sub": "sein + zu + Infinitiv",
      "options": ["zu", "nach", "für", "um"],
      "correct": 0,
      "explanationDe": "'ist zu beachten' bedeutet 'muss beachtet werden'.",
      "explanationEn": "'ist zu beachten' means 'must be observed'.",
      "rule": "sein + zu + Infinitiv"
    },
    {
      "id": "pa_q10",
      "type": "multiple_choice",
      "prompt": "Das Fenster ___ bereits geputzt, als wir ins Zimmer kamen.",
      "sub": "Zustandspassiv in der Vergangenheit",
      "options": ["war", "wurde", "hatte", "ist"],
      "correct": 0,
      "explanationDe": "Zustandspassiv im Präteritum: 'war geputzt' (Zustand war fertig).",
      "explanationEn": "State passive past: 'war geputzt' (result was done).",
      "rule": "war + Partizip II"
    },
    {
      "id": "pa_q11",
      "type": "sentence_translation",
      "prompt": "Welcher Satz bedeutet: 'Man kann diesen Text leicht verstehen'?",
      "sub": "Passiv-Alternative",
      "options": [
        "Dieser Text ist leicht verständlich.",
        "Dieser Text wird leicht verstehen.",
        "Dieser Text hat leicht verstanden.",
        "Dieser Text lässt leicht verstehen."
      ],
      "correct": 0,
      "explanationDe": "'verständlich' drückt als Adjektiv die Passivbedeutung 'kann verstanden werden' aus.",
      "explanationEn": "'verständlich' expresses the passive meaning 'can be understood'.",
      "rule": "Adjektiv auf -lich"
    },
    {
      "id": "pa_q12",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Das Dokument lässt sich einfach zu ausdrucken.'",
      "sub": "sich lassen ohne zu",
      "options": [
        "'ausdrucken' statt 'zu ausdrucken'",
        "'ausgedruckt' statt 'zu ausdrucken'",
        "'lässt' statt 'wird'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "Nach 'sich lassen' steht der Infinitiv OHNE 'zu': 'lässt sich einfach ausdrucken'.",
      "explanationEn": "After 'sich lassen' the infinitive stands WITHOUT 'zu'.",
      "rule": "sich lassen + Infinitiv (ohne zu)"
    },
    {
      "id": "pa_q13",
      "type": "multiple_choice",
      "prompt": "Die neue Brücke ___ vor zwei Wochen fertiggestellt worden.",
      "sub": "Vorgangspassiv Perfekt",
      "options": ["ist", "wurde", "hat", "war"],
      "correct": 0,
      "explanationDe": "Vorgangspassiv Perfekt: 'ist ... fertiggestellt worden'.",
      "explanationEn": "Process passive perfect: 'ist ... fertiggestellt worden'.",
      "rule": "ist ... worden"
    },
    {
      "id": "pa_q14",
      "type": "gap_fill",
      "prompt": "Die Anweisungen sind genau ___ befolgen.",
      "sub": "sein + zu + Infinitiv",
      "options": ["zu", "an", "für", "auf"],
      "correct": 0,
      "explanationDe": "'sind zu befolgen' drückt die Pflicht aus (= müssen befolgt werden).",
      "explanationEn": "'sind zu befolgen' expresses obligation (= must be followed).",
      "rule": "sein + zu + befolgen"
    },
    {
      "id": "pa_q15",
      "type": "multiple_choice",
      "prompt": "Die Tür ___ geöffnet. (Es zieht, mach sie bitte zu!)",
      "sub": "Zustandspassiv Präsens",
      "options": ["ist", "wird", "hat", "sei"],
      "correct": 0,
      "explanationDe": "Der aktuelle Zustand ist 'ist geöffnet' (Zustandspassiv).",
      "explanationEn": "Current state is 'ist geöffnet' (state passive).",
      "rule": "ist geöffnet (Zustand)"
    },
    {
      "id": "pa_q16",
      "type": "word_order",
      "prompt": "Bringe den Satz in die richtige Wortstellung: 'sich / der Plan / lässt / verwirklichen / gut'",
      "sub": "Wortstellung mit sich lassen",
      "options": [
        "Der Plan lässt sich gut verwirklichen.",
        "Der Plan lässt verwirklichen sich gut.",
        "Lässt sich gut der Plan verwirklichen.",
        "Der Plan sich lässt gut verwirklichen."
      ],
      "correct": 0,
      "explanationDe": "'Der Plan lässt sich gut verwirklichen.'",
      "explanationEn": "'Der Plan lässt sich gut verwirklichen.'",
      "rule": "Subjekt + lässt sich + Infinitiv"
    },
    {
      "id": "pa_q17",
      "type": "multiple_choice",
      "prompt": "Das Wasser aus diesem Brunnen ist nicht ___.",
      "sub": "Adjektiv auf -bar (Passiv-Alternative)",
      "options": ["trinkbar", "getrunken", "trinkend", "getränkt"],
      "correct": 0,
      "explanationDe": "'trinkbar' bedeutet 'kann getrunken werden'.",
      "explanationEn": "'trinkbar' means 'can be drunk / potable'.",
      "rule": "Adjektiv auf -bar"
    },
    {
      "id": "pa_q18",
      "type": "multiple_choice",
      "prompt": "Dieses Formular ___ noch heute auszufüllen.",
      "sub": "sein + zu + Infinitiv",
      "options": ["ist", "hat", "lässt", "wird"],
      "correct": 0,
      "explanationDe": "'ist ... auszufüllen' bedeutet 'muss ausgefüllt werden'.",
      "explanationEn": "'ist auszufüllen' means 'must be filled out'.",
      "rule": "ist + auszufüllen"
    },
    {
      "id": "pa_q19",
      "type": "sentence_translation",
      "prompt": "Translate: 'The battery cannot be replaced.'",
      "sub": "Passiv-Alternative mit sich lassen",
      "options": [
        "Der Akku lässt sich nicht austauschen.",
        "Der Akku wird nicht austauschen.",
        "Der Akku ist nicht ausgetauscht worden.",
        "Der Akku lässt nicht austauschen."
      ],
      "correct": 0,
      "explanationDe": "'lässt sich nicht austauschen' drückt die Unmöglichkeit passivisch aus.",
      "explanationEn": "'lässt sich nicht austauschen' expresses passive impossibility.",
      "rule": "lässt sich nicht + Infinitiv"
    },
    {
      "id": "pa_q20",
      "type": "multiple_choice",
      "prompt": "Die Konferenz ___ für morgen früh geplant.",
      "sub": "Zustandspassiv",
      "options": ["ist", "wird", "hat", "sei"],
      "correct": 0,
      "explanationDe": "'ist geplant' beschreibt den Zustand/den Plan.",
      "explanationEn": "'ist geplant' describes the state/schedule.",
      "rule": "ist geplant"
    },
    {
      "id": "pa_q21",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Die Schrift ist kaum zu lesen, sie ist nicht lesbar.'",
      "sub": "Grammatikprüfung",
      "options": [
        "Der Satz ist vollkommen korrekt",
        "'leserlich' statt 'lesbar'",
        "'wird' statt 'ist'",
        "'gelesen' statt 'zu lesen'"
      ],
      "correct": 0,
      "explanationDe": "Der Satz verwendet beide Passiv-Alternativen korrekt ('ist zu lesen' und 'lesbar').",
      "explanationEn": "The sentence uses both passive alternatives correctly.",
      "rule": "Passiv-Alternativen korrekt"
    },
    {
      "id": "pa_q22",
      "type": "gap_fill",
      "prompt": "Hier ___ man leider nicht parken.",
      "sub": "Man als Passiv-Alternative",
      "options": ["darf", "wird", "ist", "lässt"],
      "correct": 0,
      "explanationDe": "'Man darf nicht parken' entspricht dem Passiv 'Parken ist verboten'.",
      "explanationEn": "'Man darf nicht parken' is equivalent to passive prohibition.",
      "rule": "man + Aktivverb"
    },
    {
      "id": "pa_q23",
      "type": "multiple_choice",
      "prompt": "Das Geschäft ___ jeden Tag um 20 Uhr geschlossen.",
      "sub": "Vorgangspassiv (Aktion)",
      "options": ["wird", "ist", "hat", "wäre"],
      "correct": 0,
      "explanationDe": "Um 20 Uhr findet die Handlung des Schließens statt: Vorgangspassiv 'wird geschlossen'.",
      "explanationEn": "At 8 PM the action of closing occurs: process passive 'wird geschlossen'.",
      "rule": "wird geschlossen (Vorgang)"
    },
    {
      "id": "pa_q24",
      "type": "multiple_choice",
      "prompt": "Es ist schon 21 Uhr, das Geschäft ___ schon geschlossen.",
      "sub": "Zustandspassiv (Zustand)",
      "options": ["ist", "wird", "hat", "sei"],
      "correct": 0,
      "explanationDe": "Um 21 Uhr ist der Laden bereits zu: Zustandspassiv 'ist geschlossen'.",
      "explanationEn": "At 9 PM the store is already shut: state passive 'ist geschlossen'.",
      "rule": "ist geschlossen (Zustand)"
    },
    {
      "id": "pa_q25",
      "type": "sentence_translation",
      "prompt": "Translate: 'All safety instructions must be strictly followed.'",
      "sub": "sein + zu + Infinitiv",
      "options": [
        "Alle Sicherheitsvorschriften sind streng zu beachten.",
        "Alle Sicherheitsvorschriften werden streng zu beachten.",
        "Alle Sicherheitsvorschriften haben streng beachtet.",
        "Alle Sicherheitsvorschriften lassen streng beachten."
      ],
      "correct": 0,
      "explanationDe": "'sind streng zu beachten' drückt 'müssen beachtet werden' aus.",
      "explanationEn": "'sind streng zu beachten' expresses 'must be observed'.",
      "rule": "sind ... zu beachten"
    }
  ]
};
