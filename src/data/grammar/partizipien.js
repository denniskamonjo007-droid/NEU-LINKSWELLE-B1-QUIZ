// B1 German Grammar Topic 12: Partizip I & II als Adjektive (Partizipiale Attribute)

export const PARTIZIPIEN_TOPIC = {
  "id": "partizipien",
  "exportName": "PARTIZIPIEN_TOPIC",
  "titleDe": "12. Partizip I & II als Adjektive",
  "titleEn": "12. Participles as Adjectives (Partizip I & II)",
  "icon": "🎨",
  "badge": "schlafend vs. geschlossen",
  "summaryDe": "Partizip I (Infinitiv + d) und Partizip II (ge-...-t/-en) können wie normale Adjektive vor Nomen stehen und erhalten reguläre Adjektivendungen.",
  "summaryEn": "Participle I (infinitive + d) and Participle II (ge-...-t/-en) can be used as adjectives before nouns and take standard adjective endings.",
  "cheatSheet": {
    "rule": "Partizip I: Infinitiv + 'd' + Adjektivendung (aktiv, andauernd). Partizip II: Partizip II + Adjektivendung (passiv, abgeschlossen).",
    "keyConnectors": [
      {
        "conn": "Partizip I (Gleichzeitigkeit / Aktiv)",
        "meaning": "das schlafende Kind (das Kind schläft)",
        "example": "Vorsicht vor dem kochenden Wasser! Sie spricht fließendes Deutsch."
      },
      {
        "conn": "Partizip II (Vorzeitigkeit / Passiv)",
        "meaning": "die geschlossene Tür (die Tür wurde geschlossen)",
        "example": "Das reparierte Auto steht vor der Werkstatt. Die gebrauchten Bücher sind billig."
      },
      {
        "conn": "Deklination",
        "meaning": "Folgt 1:1 den Regeln der normalen Adjektivdeklination",
        "example": "ein weinendes Baby (Nom/Akk n), die geöffnete Flasche (Nom/Akk f), den fahrenden Zug (Akk m)"
      }
    ],
    "goldenRules": [
      "Goldene Regel 1: Partizip I drückt IMMER eine aktive, gerade ablaufende Handlung aus: spielen -> das spielende Kind.",
      "Goldene Regel 2: Partizip II von transitiven Verben drückt ein passives oder abgeschlossenes Ergebnis aus: reparieren -> das reparierte Fahrrad."
    ]
  },
  "questions": [
    {
      "id": "pt_q1",
      "type": "multiple_choice",
      "prompt": "Vorsicht, fass den Topf nicht an! Das ist ___ Wasser!",
      "sub": "Partizip I von 'kochen' (das Wasser)",
      "options": ["kochendes", "gekochtes", "kochende", "kochender"],
      "correct": 0,
      "explanationDe": "Das Wasser kocht gerade (andauernde Aktion): Partizip I 'kochend' + Endung '-es' bei Nullartikel Neutrum.",
      "explanationEn": "The water is boiling right now: Participle I 'kochend' + neuter ending '-es': 'kochendes Wasser'.",
      "rule": "Partizip I: Infinitiv + d + Endung"
    },
    {
      "id": "pt_q2",
      "type": "multiple_choice",
      "prompt": "Wegen der ___ Tür konnten wir den Raum nicht betreten.",
      "sub": "Partizip II von 'schließen' (die Tür, Dativ)",
      "options": ["geschlossenen", "schließenden", "geschlossene", "schließende"],
      "correct": 0,
      "explanationDe": "Die Tür ist bereits geschlossen (Ergebnis): Partizip II 'geschlossen' + Dativ-Endung '-en'.",
      "explanationEn": "The door is already closed: Participle II 'geschlossen' + dative ending '-en'.",
      "rule": "Partizip II als Adjektiv mit Endung"
    },
    {
      "id": "pt_q3",
      "type": "gap_fill",
      "prompt": "Der Schaffner half der älteren Dame in den ___ Zug.",
      "sub": "Partizip I von 'abfahren' (Akkusativ maskulin)",
      "options": ["abfahrenden", "abgefahrenen", "abfahrende", "abgefahrene"],
      "correct": 0,
      "explanationDe": "Der Zug fährt gerade ab: Partizip I 'abfahrend' + Akkusativ maskulin '-en'.",
      "explanationEn": "The train is departing right now: Participle I 'abfahrend' + accusative masculine '-en'.",
      "rule": "Partizip I: abfahrend + en"
    },
    {
      "id": "pt_q4",
      "type": "multiple_choice",
      "prompt": "Sie holte das frisch ___ Hemd aus der Reinigung.",
      "sub": "Partizip II von 'waschen' (das Hemd, Akkusativ)",
      "options": ["gewaschene", "waschende", "gewaschenes", "gewaschenen"],
      "correct": 0,
      "explanationDe": "Bestimmter Artikel 'das' + Neutrum Akkusativ verlangt die schwache Endung '-e': 'das gewaschene Hemd'.",
      "explanationEn": "Definite article 'das' + neuter accusative takes weak ending '-e': 'das gewaschene Hemd'.",
      "rule": "Partizip II: gewaschen + e"
    },
    {
      "id": "pt_q5",
      "type": "multiple_choice",
      "prompt": "Er spricht fast fehlerfreies, fließ___ Deutsch.",
      "sub": "Partizip I von 'fließen'",
      "options": ["fließendes", "geflossenes", "fließende", "fließender"],
      "correct": 0,
      "explanationDe": "Akkusativ Neutrum ohne Artikel: 'fließendes Deutsch'.",
      "explanationEn": "Accusative neuter zero article: 'fließendes Deutsch'.",
      "rule": "fließend + es"
    },
    {
      "id": "pt_q6",
      "type": "sentence_translation",
      "prompt": "Translate: 'The stolen bicycle was found by the police.'",
      "sub": "Partizip II von stehlen",
      "options": [
        "Das gestohlene Fahrrad wurde von der Polizei gefunden.",
        "Das stehlende Fahrrad wurde von der Polizei gefunden.",
        "Das gestohlenes Fahrrad wurde von der Polizei gefunden.",
        "Das stehlte Fahrrad wurde von der Polizei gefunden."
      ],
      "correct": 0,
      "explanationDe": "Partizip II von 'stehlen' ist 'gestohlen' -> 'Das gestohlene Fahrrad'.",
      "explanationEn": "Participle II of 'stehlen' is 'gestohlen' -> 'Das gestohlene Fahrrad'.",
      "rule": "gestohlen + e"
    },
    {
      "id": "pt_q7",
      "type": "multiple_choice",
      "prompt": "Die Mutter beruhigte das laut ___ Kind.",
      "sub": "Partizip I von weinen (Akkusativ Neutrum)",
      "options": ["weinende", "weinendes", "geweinte", "weinenden"],
      "correct": 0,
      "explanationDe": "Bestimmter Artikel 'das' + Akkusativ Neutrum verlangt '-e': 'das weinende Kind'.",
      "explanationEn": "Definite article 'das' + neuter accusative takes '-e': 'das weinende Kind'.",
      "rule": "Partizip I: weinend + e"
    },
    {
      "id": "pt_q8",
      "type": "gap_fill",
      "prompt": "Auf dem Tisch lag ein bereits ___ Brief.",
      "sub": "Partizip II von öffnen",
      "options": ["geöffneter", "öffnender", "geöffnete", "geöffneten"],
      "correct": 0,
      "explanationDe": "Unbestimmter Artikel 'ein' + Maskulinum Nominativ verlangt die Endung '-er': 'ein geöffneter Brief'.",
      "explanationEn": "Indefinite article 'ein' + masculine nominative takes '-er': 'ein geöffneter Brief'.",
      "rule": "Partizip II: geöffnet + er"
    },
    {
      "id": "pt_q9",
      "type": "multiple_choice",
      "prompt": "Mit ___ Interesse verfolgten die Zuschauer das spannende Spiel.",
      "sub": "Partizip I von wachsen (Dativ Neutrum)",
      "options": ["wachsendem", "wachsenden", "gewachsenem", "wachsende"],
      "correct": 0,
      "explanationDe": "Nullartikel Dativ Neutrum verlangt die starke Endung '-em': 'mit wachsendem Interesse'.",
      "explanationEn": "Zero article dative neuter takes strong ending '-em': 'mit wachsendem Interesse'.",
      "rule": "wachsend + em"
    },
    {
      "id": "pt_q10",
      "type": "multiple_choice",
      "prompt": "Der Mechaniker reparierte die ___ Bremsen.",
      "sub": "Partizip II von beschädigen (Plural)",
      "options": ["beschädigten", "beschädigte", "beschädigter", "beschädigtes"],
      "correct": 0,
      "explanationDe": "Bestimmter Artikel 'die' im Plural verlangt '-en': 'die beschädigten Bremsen'.",
      "explanationEn": "Definite article plural takes '-en': 'die beschädigten Bremsen'.",
      "rule": "beschädigt + en"
    },
    {
      "id": "pt_q11",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Ich sah gestern einen brennende Baum am Straßenrand.'",
      "sub": "Akkusativ maskulin",
      "options": [
        "'einen brennenden Baum' statt 'einen brennende Baum'",
        "'einen gebrannten Baum'",
        "'ein brennender Baum'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "Akkusativ maskulin verlangt immer die Endung '-en': 'einen brennenden Baum'.",
      "explanationEn": "Accusative masculine always takes '-en': 'einen brennenden Baum'.",
      "rule": "brennend + en"
    },
    {
      "id": "pt_q12",
      "type": "multiple_choice",
      "prompt": "Wir trafen viele Deutsch ___ Studenten auf dem Campus.",
      "sub": "Partizip I von lernen (Plural)",
      "options": ["lernende", "gelernte", "lernenden", "lernender"],
      "correct": 0,
      "explanationDe": "Nullartikel Plural Akkusativ verlangt '-e': 'viele Deutsch lernende Studenten'.",
      "explanationEn": "Zero article plural accusative takes '-e': 'Deutsch lernende Studenten'.",
      "rule": "lernend + e"
    },
    {
      "id": "pt_q13",
      "type": "gap_fill",
      "prompt": "Er trank einen Schluck aus der frisch ___ Flasche.",
      "sub": "Partizip II von öffnen (Dativ feminin)",
      "options": ["geöffneten", "öffnenden", "geöffnete", "geöffneter"],
      "correct": 0,
      "explanationDe": "Nach 'aus der' (Dativ feminin) heißt die Adjektivendung '-en': 'der geöffneten Flasche'.",
      "explanationEn": "After 'aus der' (dative feminine) the ending is '-en': 'der geöffneten Flasche'.",
      "rule": "geöffnet + en"
    },
    {
      "id": "pt_q14",
      "type": "multiple_choice",
      "prompt": "Das ___ Auto wurde in die Werkstatt abgeschleppt.",
      "sub": "Partizip II von liegenbleiben",
      "options": ["liegengebliebene", "liegenbleibende", "liegengebliebenes", "liegengebliebenen"],
      "correct": 0,
      "explanationDe": "Partizip II mit bestimmtem Artikel Neutrum: 'das liegengebliebene Auto'.",
      "explanationEn": "Participle II with neuter definite article: 'das liegengebliebene Auto'.",
      "rule": "liegengeblieben + e"
    },
    {
      "id": "pt_q15",
      "type": "word_order",
      "prompt": "Bringe den Satz in die richtige Wortstellung: 'die / lachenden / Kinder / spielten / im Park'",
      "sub": "Partizipialattribut im Satz",
      "options": [
        "Die lachenden Kinder spielten im Park.",
        "Die Kinder lachenden spielten im Park.",
        "Spielten im Park die Kinder lachenden.",
        "Die Kinder spielten lachenden im Park."
      ],
      "correct": 0,
      "explanationDe": "Das Partizip I 'lachenden' steht direkt vor dem Nomen 'Kinder'.",
      "explanationEn": "The participle I 'lachenden' stands directly before the noun 'Kinder'.",
      "rule": "Attribut vor Nomen"
    },
    {
      "id": "pt_q16",
      "type": "multiple_choice",
      "prompt": "Die Polizei befragte alle am Unfall ___ Personen.",
      "sub": "Partizip II von beteiligen",
      "options": ["beteiligten", "beteiligte", "beteiligter", "beteiligtes"],
      "correct": 0,
      "explanationDe": "Plural Akkusativ mit 'alle': 'alle beteiligten Personen'.",
      "explanationEn": "Plural accusative with 'alle': 'alle beteiligten Personen'.",
      "rule": "beteiligt + en"
    },
    {
      "id": "pt_q17",
      "type": "gap_fill",
      "prompt": "Sie begrüßte die Gäste mit einem ___ Lächeln.",
      "sub": "Partizip I von strahlen (Dativ Neutrum)",
      "options": ["strahlenden", "gestrahlten", "strahlendem", "strahlende"],
      "correct": 0,
      "explanationDe": "Nach 'mit einem' (Dativ Neutrum) lautet die Adjektivendung '-en': 'einem strahlenden Lächeln'.",
      "explanationEn": "After 'mit einem' (dative neuter) the ending is '-en': 'einem strahlenden Lächeln'.",
      "rule": "strahlend + en"
    },
    {
      "id": "pt_q18",
      "type": "multiple_choice",
      "prompt": "Für die Renovierung suchen wir einen ___ Handwerker.",
      "sub": "Partizip II von erfahren (Akkusativ maskulin)",
      "options": ["erfahrenen", "erfahrene", "erfahrener", "erfahrenes"],
      "correct": 0,
      "explanationDe": "Akkusativ maskulin nach 'einen': 'einen erfahrenen Handwerker'.",
      "explanationEn": "Accusative masculine after 'einen': 'einen erfahrenen Handwerker'.",
      "rule": "erfahren + en"
    },
    {
      "id": "pt_q19",
      "type": "sentence_translation",
      "prompt": "Translate: 'The sleeping dog did not hear the doorbell.'",
      "sub": "schlafend als Partizip I",
      "options": [
        "Der schlafende Hund hörte die Klingel nicht.",
        "Der geschlafene Hund hörte die Klingel nicht.",
        "Der schlafenden Hund hörte die Klingel nicht.",
        "Der schlafender Hund hörte die Klingel nicht."
      ],
      "correct": 0,
      "explanationDe": "Partizip I Nominativ maskulin mit bestimmtem Artikel: 'Der schlafende Hund'.",
      "explanationEn": "Participle I nominative masculine with definite article: 'Der schlafende Hund'.",
      "rule": "schlafend + e"
    },
    {
      "id": "pt_q20",
      "type": "multiple_choice",
      "prompt": "Im Hotelzimmer gab es leider kein ___ Wasser.",
      "sub": "Partizip I von fließen (kein + Neutrum)",
      "options": ["fließendes", "fließende", "geflossenes", "fließenden"],
      "correct": 0,
      "explanationDe": "Nach 'kein' im Neutrum Nominativ/Akkusativ steht '-es': 'kein fließendes Wasser'.",
      "explanationEn": "After 'kein' in neuter nominative/accusative, ending is '-es': 'kein fließendes Wasser'.",
      "rule": "fließend + es"
    },
    {
      "id": "pt_q21",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Die verloren gegangenen Schlüssel wurden wiedergefunden.'",
      "sub": "Grammatikprüfung",
      "options": [
        "Der Satz ist völlig korrekt",
        "'verloren gegangene' statt 'verloren gegangenen'",
        "'wurde' statt 'wurden'",
        "'gefundet' statt 'wiedergefunden'"
      ],
      "correct": 0,
      "explanationDe": "Der Satz ist grammatikalisch einwandfrei: 'Die verloren gegangenen Schlüssel'.",
      "explanationEn": "The sentence is grammatically flawless: 'Die verloren gegangenen Schlüssel'.",
      "rule": "Partizipialattribut im Plural"
    },
    {
      "id": "pt_q22",
      "type": "multiple_choice",
      "prompt": "Gestern sah ich einen Mann mit einem ___ Koffer.",
      "sub": "Partizip I von rollen (Dativ maskulin)",
      "options": ["rollenden", "gerollten", "rollendem", "rollende"],
      "correct": 0,
      "explanationDe": "Nach 'mit einem' im Dativ maskulin steht '-en': 'einem rollenden Koffer'.",
      "explanationEn": "After 'mit einem' in dative masculine ending is '-en': 'einem rollenden Koffer'.",
      "rule": "rollend + en"
    },
    {
      "id": "pt_q23",
      "type": "gap_fill",
      "prompt": "Die Regierung unterstützt die vom Hochwasser ___ Familien.",
      "sub": "Partizip II von betreffen (Plural)",
      "options": ["betroffenen", "betroffene", "betreffenden", "betroffener"],
      "correct": 0,
      "explanationDe": "Bestimmter Artikel Plural verlangt '-en': 'die betroffenen Familien'.",
      "explanationEn": "Definite article plural takes '-en': 'die betroffenen Familien'.",
      "rule": "betroffen + en"
    },
    {
      "id": "pt_q24",
      "type": "multiple_choice",
      "prompt": "Er aß ein hart ___ Ei zum Frühstück.",
      "sub": "Partizip II von kochen (Neutrum)",
      "options": ["gekochtes", "kochendes", "gekochte", "gekochten"],
      "correct": 0,
      "explanationDe": "Nach 'ein' Neutrum Akkusativ steht '-es': 'ein hart gekochtes Ei'.",
      "explanationEn": "After 'ein' neuter accusative ending is '-es': 'ein hart gekochtes Ei'.",
      "rule": "gekocht + es"
    },
    {
      "id": "pt_q25",
      "type": "sentence_translation",
      "prompt": "Translate: 'All invited guests arrived on time.'",
      "sub": "Partizip II von einladen",
      "options": [
        "Alle eingeladenen Gäste kamen pünktlich an.",
        "Alle einladenden Gäste kamen pünktlich an.",
        "Alle eingeladene Gäste kamen pünktlich an.",
        "Alle eingeladenes Gäste kamen pünktlich an."
      ],
      "correct": 0,
      "explanationDe": "Korrekt: 'Alle eingeladenen Gäste' (Plural nach alle verlangt -en).",
      "explanationEn": "Correct: 'Alle eingeladenen Gäste' (plural after alle takes -en).",
      "rule": "eingeladen + en"
    }
  ]
};
