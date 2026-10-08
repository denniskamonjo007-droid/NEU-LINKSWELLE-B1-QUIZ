// B1 German Grammar Topic 15: Wortbildung: Präfixe & Suffixe (Nomen & Adjektive)

export const WORTBILDUNG_TOPIC = {
  "id": "wortbildung",
  "exportName": "WORTBILDUNG_TOPIC",
  "titleDe": "15. Wortbildung (Präfixe & Suffixe)",
  "titleEn": "15. Word Formation (Prefixes & Suffixes)",
  "icon": "🧱",
  "badge": "-ung, -heit, -bar, un-",
  "summaryDe": "Systematische Bildung von Nomen und Adjektiven aus Verben und Nomen durch produktive Nachsilben (-ung, -heit, -keit, -schaft, -bar, -los, -lich, -ig) und Vorsilben (un-, miss-, be-, ent-, zer-, ver-).",
  "summaryEn": "Systematic formation of nouns and adjectives from verbs and nouns using productive suffixes (-ung, -heit, -keit, -schaft, -bar, -los, -lich, -ig) and prefixes (un-, miss-, be-, ent-, zer-, ver-).",
  "cheatSheet": {
    "rule": "Nomen-Endungen bestimmen das Genus! -ung, -heit, -keit, -schaft, -tät, -tion sind IMMER feminin (die). -chen, -lein, -nis (meist) sind neutral (das). -er, -ling sind maskulin (der).",
    "keyConnectors": [
      {
        "conn": "-ung (aus Verben -> feminin)",
        "meaning": "die Bedeutung, die Erfahrung, die Kündigung, die Hoffnung",
        "example": "Aus 'entscheiden' wird 'die Entscheidung' (immer DIE)."
      },
      {
        "conn": "-heit / -keit (aus Adjektiven -> feminin)",
        "meaning": "die Freiheit, die Gesundheit, die Einsamkeit, die Möglichkeit",
        "example": "Aus 'sauber' wird 'die Sauberkeit'; aus 'krank' wird 'die Krankheit'."
      },
      {
        "conn": "-bar & -los (Adjektiv-Suffixe)",
        "meaning": "-bar = passiv möglich ('machbar, trinkbar'); -los = ohne ('arbeitslos, schlaflos')",
        "example": "Das Wasser ist trinkbar (= man kann es trinken). Er ist obdachlos (= ohne Obdach)."
      },
      {
        "conn": "Präfixe: un- / miss- / zer- / ent-",
        "meaning": "un- / miss- = Verneinung/falsch ('unglücklich, Missverständnis'); zer- = kaputt ('zerbrechen'); ent- = wegnehmen ('entlassen')",
        "example": "Wir müssen dieses Missverständnis aufklären."
      }
    ],
    "goldenRules": [
      "Goldene Regel 1: Alle Nomen mit -ung, -heit, -keit, -schaft, -tät, -tion, -ei sind FEMININ (die).",
      "Goldene Regel 2: Das Suffix -bar bedeutet 'kann gemacht werden': recycelbar = kann recycelt werden; unbezahlbar = kann man nicht bezahlen."
    ]
  },
  "questions": [
    {
      "id": "wb_q1",
      "type": "multiple_choice",
      "prompt": "Welcher Artikel gehört zu Wörtern mit der Endung '-ung' (z.B. Hoffnung, Meinung, Warnung)?",
      "sub": "Genus von Nomen auf -ung",
      "options": ["die (feminin)", "der (maskulin)", "das (neutral)", "wechselt je nach Wort"],
      "correct": 0,
      "explanationDe": "Substantive mit dem Suffix '-ung' sind im Deutschen ausnahmslos FEMININ: die Hoffnung, die Entscheidung, die Wohnung.",
      "explanationEn": "Nouns ending in '-ung' are without exception FEMININE: die Hoffnung, die Entscheidung.",
      "rule": "Nomen-Suffix -ung ist immer feminin (die)"
    },
    {
      "id": "wb_q2",
      "type": "multiple_choice",
      "prompt": "Welches Adjektiv bedeutet 'kann repariert werden'?",
      "sub": "Suffix -bar (Möglichkeit)",
      "options": ["reparierbar", "reparierlich", "reparierlos", "reparierig"],
      "correct": 0,
      "explanationDe": "Das Suffix '-bar' drückt eine passive Machbarkeit aus: 'reparierbar' = kann repariert werden.",
      "explanationEn": "The suffix '-bar' denotes possibility: 'reparierbar' = can be repaired.",
      "rule": "Adjektiv-Suffix -bar = machbar / möglich"
    },
    {
      "id": "wb_q3",
      "type": "gap_fill",
      "prompt": "Der Vertrag ist leider un___; man kann ihn rechtlich nicht mehr anfechten.",
      "sub": "Gegenteil von wirksam mit un-",
      "options": ["wirksam", "sicher", "möglich", "bekannt"],
      "correct": 0,
      "explanationDe": "Das Präfix 'un-' verneint das Adjektiv: unwirksam = nicht wirksam / ungültig.",
      "explanationEn": "The prefix 'un-' negates: 'unwirksam' = ineffective / invalid.",
      "rule": "Präfix un- zur Verneinung"
    },
    {
      "id": "wb_q4",
      "type": "multiple_choice",
      "prompt": "Wie lautet das Nomen zum Adjektiv 'einsam'?",
      "sub": "Suffix -keit bei Nomen aus Adjektiven",
      "options": ["die Einsamkeit", "die Einsamung", "die Einsamschaft", "das Einsamsein"],
      "correct": 0,
      "explanationDe": "Adjektive auf '-sam', '-bar', '-ig', '-lich' bilden das Nomen mit '-keit': die Einsamkeit, die Dankbarkeit, die Höflichkeit.",
      "explanationEn": "Adjectives ending in '-sam', '-bar', '-ig', '-lich' form nouns with '-keit': die Einsamkeit.",
      "rule": "Adjektiv + -keit (die Einsamkeit)"
    },
    {
      "id": "wb_q5",
      "type": "multiple_choice",
      "prompt": "Wie lautet das Nomen zum Adjektiv 'gesund'?",
      "sub": "Suffix -heit",
      "options": ["die Gesundheit", "die Gesundkeit", "die Gesundung", "das Gesundtum"],
      "correct": 0,
      "explanationDe": "Aus 'gesund' wird mit dem Suffix '-heit' das Nomen 'die Gesundheit'.",
      "explanationEn": "From 'gesund' with suffix '-heit' comes 'die Gesundheit'.",
      "rule": "Nomen-Suffix -heit"
    },
    {
      "id": "wb_q6",
      "type": "multiple_choice",
      "prompt": "Jemand, der keine Hoffnung mehr hat, ist ___.",
      "sub": "Suffix -los (ohne)",
      "options": ["hoffnungslos", "unhoffbar", "hoffnungsleer", "hoffnungsarm"],
      "correct": 0,
      "explanationDe": "Das Suffix '-los' bedeutet 'ohne': hoffnungslos = ohne Hoffnung; arbeitslos = ohne Arbeit.",
      "explanationEn": "The suffix '-los' means 'without': hoffnungslos = hopeless.",
      "rule": "Adjektiv-Suffix -los"
    },
    {
      "id": "wb_q7",
      "type": "gap_fill",
      "prompt": "Wir müssen dieses ___verständnis schnell aus der Welt schaffen.",
      "sub": "Präfix miss- (falsch/fehlerhaft)",
      "options": ["Miss", "Un", "Ver", "Ent"],
      "correct": 0,
      "explanationDe": "Das Präfix 'Miss-' drückt eine falsche oder negative Handlung aus: das Missverständnis (falsches Verstehen).",
      "explanationEn": "The prefix 'Miss-' expresses error or negative: das Missverständnis = misunderstanding.",
      "rule": "Präfix miss- (Fehlleistung)"
    },
    {
      "id": "wb_q8",
      "type": "multiple_choice",
      "prompt": "Welcher Artikel gehört zu 'Freundschaft, Mannschaft, Wissenschaft'?",
      "sub": "Nomen-Suffix -schaft",
      "options": ["die", "der", "das", "variiert"],
      "correct": 0,
      "explanationDe": "Alle Substantive auf '-schaft' sind ausnahmslos FEMININ: die Freundschaft, die Mannschaft.",
      "explanationEn": "All nouns ending in '-schaft' are feminine: die Freundschaft.",
      "rule": "Suffix -schaft ist immer feminin (die)"
    },
    {
      "id": "wb_q9",
      "type": "multiple_choice",
      "prompt": "Welches Adjektiv drückt aus, dass man viel Geduld hat?",
      "sub": "Suffix -ig",
      "options": ["geduldig", "geduldbar", "geduldisch", "geduldreich"],
      "correct": 0,
      "explanationDe": "Vom Nomen 'die Geduld' wird mit '-ig' das Adjektiv 'geduldig' abgeleitet.",
      "explanationEn": "From noun 'die Geduld', '-ig' forms adjective 'geduldig'.",
      "rule": "Nomen + -ig = Adjektiv"
    },
    {
      "id": "wb_q10",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Das Wichtigkeit dieses Dokuments ist enorm.'",
      "sub": "Genus von Nomen auf -keit",
      "options": [
        "'Die Wichtigkeit' statt 'Das Wichtigkeit'",
        "'dieser Dokument' statt 'dieses Dokuments'",
        "'enorme' statt 'enorm'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "Wörter auf '-keit' sind immer feminin (die Wichtigkeit, nicht das Wichtigkeit).",
      "explanationEn": "Nouns with '-keit' are feminine: 'Die Wichtigkeit'.",
      "rule": "Suffix -keit ist immer feminin (die)"
    },
    {
      "id": "wb_q11",
      "type": "sentence_translation",
      "prompt": "Translate: 'Is tap water in this city drinkable?'",
      "sub": "Suffix -bar",
      "options": [
        "Ist das Leitungswasser in dieser Stadt trinkbar?",
        "Ist das Leitungswasser in dieser Stadt getrunken?",
        "Ist das Leitungswasser in dieser Stadt trinklich?",
        "Ist das Leitungswasser in dieser Stadt trinkend?"
      ],
      "correct": 0,
      "explanationDe": "'trinkbar' bedeutet 'geeignet zum Trinken' (drinkable).",
      "explanationEn": "'trinkbar' corresponds directly to 'drinkable'.",
      "rule": "Verb + -bar (trinkbar)"
    },
    {
      "id": "wb_q12",
      "type": "multiple_choice",
      "prompt": "Was bedeutet das Präfix 'zer-' im Wort 'zerstören' oder 'zerbrechen'?",
      "sub": "Bedeutung des Präfixes zer-",
      "options": [
        "in Teile gehen / kaputtgehen",
        "wiederholen",
        "nicht machen",
        "zusammenfügen"
      ],
      "correct": 0,
      "explanationDe": "'zer-' drückt immer eine Zerstörung oder Trennung in viele Teile aus: zerbrechen, zerreißen, zerstören.",
      "explanationEn": "'zer-' signifies destruction or breaking into parts: zerbrechen, zerstören.",
      "rule": "Untrennbares Präfix zer- (Zerstörung)"
    },
    {
      "id": "wb_q13",
      "type": "gap_fill",
      "prompt": "Dieser Antrag ist leider fehler___; wir haben keinen einzigen Fehler gefunden!",
      "sub": "Suffix -frei / -los (ohne Fehler)",
      "options": ["frei", "bar", "ig", "sam"],
      "correct": 0,
      "explanationDe": "'fehlerfrei' bedeutet 'ohne jeden Fehler' / perfekt.",
      "explanationEn": "'fehlerfrei' means 'faultless / flawless'.",
      "rule": "Suffix -frei (fehlerfrei)"
    },
    {
      "id": "wb_q14",
      "type": "multiple_choice",
      "prompt": "Aus welchem Verb entsteht das Nomen 'die Verspätung'?",
      "sub": "Wortstamm von Verspätung",
      "options": ["sich verspäten", "spät sein", "verspäten lassen", "verspätigen"],
      "correct": 0,
      "explanationDe": "Das Verb 'sich verspäten' bildet mit dem Suffix '-ung' das Nomen 'die Verspätung'.",
      "explanationEn": "From verb 'sich verspäten' comes 'die Verspätung'.",
      "rule": "Verb -> Nomen auf -ung"
    },
    {
      "id": "wb_q15",
      "type": "multiple_choice",
      "prompt": "Welches Wort beschreibt jemanden, der ohne Gewissen handelt?",
      "sub": "Suffix -los",
      "options": ["gewissenlos", "ungewissen", "gewisslos", "gewissenarm"],
      "correct": 0,
      "explanationDe": "'gewissenlos' = ohne Skrupel / ohne Gewissen.",
      "explanationEn": "'gewissenlos' = unprincipled / without conscience.",
      "rule": "Nomen + -los (gewissenlos)"
    },
    {
      "id": "wb_q16",
      "type": "word_order",
      "prompt": "Welcher Ausdruck ist grammatisch richtig gebildet?",
      "sub": "Zusammengesetzte Nomen (Komposita-Regel)",
      "options": [
        "die Krankenversicherung (letztes Wort bestimmt den Artikel: die Versicherung)",
        "der Krankenversicherung (vom ersten Wort 'der Kranke')",
        "das Krankenversicherung (neutral)",
        "die Krankeversicherung"
      ],
      "correct": 0,
      "explanationDe": "Bei zusammengesetzten Nomen (Komposita) bestimmt IMMER das LETZTE Nomen das Genus: die Versicherung -> die Krankenversicherung.",
      "explanationEn": "In German compound nouns, the LAST noun determines the gender: die Versicherung -> die Krankenversicherung.",
      "rule": "Letztes Nomen bestimmt Genus bei Komposita"
    },
    {
      "id": "wb_q17",
      "type": "multiple_choice",
      "prompt": "Wie heißt das Gegenteil von 'verständlich' mit einem Präfix?",
      "sub": "Verneinendes Präfix un-",
      "options": ["unverständlich", "missverständlich", "zerverständlich", "antiverständlich"],
      "correct": 0,
      "explanationDe": "'unverständlich' = man kann es gar nicht verstehen; 'missverständlich' = man versteht es leicht falsch.",
      "explanationEn": "'unverständlich' = incomprehensible.",
      "rule": "un- vs. miss-"
    },
    {
      "id": "wb_q18",
      "type": "gap_fill",
      "prompt": "Die Pünktlich___ der Züge in Deutschland wird oft diskutiert.",
      "sub": "Suffix -keit von pünktlich",
      "options": ["keit", "heit", "ung", "schaft"],
      "correct": 0,
      "explanationDe": "Adjektive auf '-lich' bilden das Nomen mit '-keit': pünktlich -> die Pünktlichkeit.",
      "explanationEn": "Adjectives ending in '-lich' take '-keit': pünktlich -> die Pünktlichkeit.",
      "rule": "-lich + -keit"
    },
    {
      "id": "wb_q19",
      "type": "multiple_choice",
      "prompt": "Welches Adjektiv drückt aus, dass etwas jeden Tag stattfindet?",
      "sub": "Suffix -lich (zeitliche Wiederholung)",
      "options": ["täglich", "tägig", "taglos", "tagbar"],
      "correct": 0,
      "explanationDe": "Mit '-lich' und Umlaut bildet man Zeitausdrücke: der Tag -> täglich; das Jahr -> jährlich; der Monat -> monatlich.",
      "explanationEn": "With '-lich' and umlaut, time frequencies are formed: Tag -> täglich.",
      "rule": "Zeitangaben mit -lich (täglich, jährlich)"
    },
    {
      "id": "wb_q20",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Die Verzeihung dieses Fehlers ist unmöglichbar.'",
      "sub": "Doppeltes Suffix vermieden",
      "options": [
        "'unmöglich' statt 'unmöglichbar'",
        "'Der Verzeihung' statt 'Die Verzeihung'",
        "'diesen Fehlers'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "'unmöglich' ist bereits das korrekte Adjektiv; 'unmöglichbar' existiert nicht.",
      "explanationEn": "'unmöglich' is already the adjective; 'unmöglichbar' is a false double suffix.",
      "rule": "Korrekte Suffixverwendung"
    },
    {
      "id": "wb_q21",
      "type": "multiple_choice",
      "prompt": "Was bedeutet das Nomen 'die Umweltverträglichkeit'?",
      "sub": "Zusammengesetztes B1-Nomen",
      "options": [
        "Wie gut etwas von der Natur/Umwelt vertragen wird",
        "Ein Vertrag über Umweltschutz",
        "Eine Umweltkatastrophe",
        "Die Messung von Luftfeuchtigkeit"
      ],
      "correct": 0,
      "explanationDe": "Umwelt + verträglich (aus vertragen) + keit = Verträglichkeit für die Umwelt.",
      "explanationEn": "Environmental compatibility.",
      "rule": "Kompositum mit Suffix -keit"
    },
    {
      "id": "wb_q22",
      "type": "gap_fill",
      "prompt": "Kinder müssen lernen, Verantwor___ für ihr Handeln zu übernehmen.",
      "sub": "Nomen auf -ung von antworten / verantworten",
      "options": ["tung", "heit", "keit", "schaft"],
      "correct": 0,
      "explanationDe": "Aus 'verantworten' wird 'die Verantwortung' (feminin).",
      "explanationEn": "'verantworten' -> 'die Verantwortung' (responsibility).",
      "rule": "Verantwortung auf -ung"
    },
    {
      "id": "wb_q23",
      "type": "sentence_translation",
      "prompt": "Translate: 'This situation is completely unacceptable.'",
      "sub": "Suffix -bar mit un-",
      "options": [
        "Diese Situation ist völlig unakzeptabel.",
        "Diese Situation ist völlig unakzeptiert.",
        "Diese Situation ist völlig akzeptlos.",
        "Diese Situation ist völlig unakzeptend."
      ],
      "correct": 0,
      "explanationDe": "'unakzeptabel' oder 'unannehmbar' drückt aus, dass man es nicht akzeptieren kann.",
      "explanationEn": "'unakzeptabel' = unacceptable.",
      "rule": "un- ... -bar"
    },
    {
      "id": "wb_q24",
      "type": "multiple_choice",
      "prompt": "Welches Präfix macht Verben wie 'zahlen, steigen, leben' zu untrennbaren Verben?",
      "sub": "Untrennbares Präfix ver-",
      "options": [
        "ver- (bezahlen, überleben, verreisen)",
        "ab- (abzahlen)",
        "auf- (aufsteigen)",
        "ein- (einleben)"
      ],
      "correct": 0,
      "explanationDe": "Die Präfixe be-, ge-, er-, ver-, zer-, ent-, emp-, miss- sind IMMER untrennbar.",
      "explanationEn": "The prefixes be-, ge-, er-, ver-, zer-, ent-, emp-, miss- are always inseparable.",
      "rule": "Untrennbare Präfixe (be-, ver-, er-, zer-)"
    },
    {
      "id": "wb_q25",
      "type": "multiple_choice",
      "prompt": "Wie nennt man die Verkleinerungsform (Diminutiv) im Deutschen mit 'das'?",
      "sub": "Suffixe -chen und -lein",
      "options": [
        "-chen und -lein (das Häuschen, das Brötchen, immer neutral)",
        "-ling (der Prüfling)",
        "-ei (die Bäckerei)",
        "-er (der Bäcker)"
      ],
      "correct": 0,
      "explanationDe": "Wörter mit den Diminutiv-Endungen '-chen' und '-lein' sind IMMER neutral (das): das Mädchen, das Brötchen.",
      "explanationEn": "Diminutives with '-chen' and '-lein' are ALWAYS neuter (das): das Häuschen.",
      "rule": "Diminutive -chen & -lein sind immer neutral"
    }
  ]
};
