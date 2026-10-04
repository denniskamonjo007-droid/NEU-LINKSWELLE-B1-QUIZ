// B1 German Grammar Topic: Verben mit festen Präpositionen & Wechselpräpositionen
export const PRAEPOSITIONEN_TOPIC = {
  "id": "praepositionen",
  "exportName": "PRAEPOSITIONEN_TOPIC",
  "titleDe": "06. Wechsel- & Genitiv-Präpositionen",
  "titleEn": "06. Two-Way & Genitive Prepositions",
  "icon": "🧭",
  "badge": "Akkusativ vs. Dativ & feste Wendungen",
  "summaryDe": "Feste Präpositionalverben fordern einen festen Kasus (warten auf + Akk, träumen von + Dat). Wechselpräpositionen (an, auf, hinter, in, neben, über, unter, vor, zwischen) regieren den Akkusativ bei Bewegung/Richtung (Wohin?) und den Dativ bei Lage/Ort (Wo?).",
  "summaryEn": "Fixed prepositional verbs govern a strict case. Two-way prepositions take the accusative for direction/motion (Wohin?) and the dative for stationary location (Wo?).",
  "cheatSheet": {
    "rule": "Wo? + Dativ (Ruhe/Position); Wohin? + Akkusativ (Richtung/Aktion). Feste Verben müssen mit Kasus auswendig gelernt werden!",
    "keyVerbs": [
      {
        "verb": "warten auf + Akk",
        "example": "Ich warte auf dich."
      },
      {
        "verb": "sich freuen auf + Akk",
        "example": "Ich freue mich auf den Urlaub (Zukunft)."
      },
      {
        "verb": "sich freuen über + Akk",
        "example": "Ich freue mich über das Geschenk (Gegenwart)."
      },
      {
        "verb": "denken an + Akk",
        "example": "Ich denke an dich."
      },
      {
        "verb": "sich interessieren für + Akk",
        "example": "Er interessiert sich für Sport."
      },
      {
        "verb": "teilnehmen an + Dat",
        "example": "Wir nehmen am Kurs teil."
      },
      {
        "verb": "träumen von + Dat",
        "example": "Sie träumt von einer Reise."
      },
      {
        "verb": "Angst haben vor + Dat",
        "example": "Er hat Angst vor Hunden."
      }
    ],
    "goldenRules": [
      "Goldene Regel 1: Frage nach Personen mit 'Präposition + wen/wem' (z.B. 'Auf wen wartest du?'), nach Sachen mit 'Wo(r)- + Präposition' (z.B. 'Worauf wartest du?').",
      "Goldene Regel 2: Stellen/legen/setzen = Wohin? -> Akkusativ! Stehen/liegen/sitzen = Wo? -> Dativ!"
    ]
  },
  "questions": [
    {
      "id": "praep_q1",
      "type": "multiple_choice",
      "prompt": "Ich warte seit einer halben Stunde ___ den Bus.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "auf",
        "für",
        "an",
        "über"
      ],
      "correct": 0,
      "explanationDe": "'warten auf' verlangt den Akkusativ ('auf den Bus').",
      "explanationEn": "'warten auf' verlangt den Akkusativ ('auf den Bus').",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q2",
      "type": "multiple_choice",
      "prompt": "Er interessiert sich sehr ___ moderne Kunst.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "für",
        "über",
        "an",
        "an"
      ],
      "correct": 0,
      "explanationDe": "'sich interessieren für' verlangt den Akkusativ.",
      "explanationEn": "'sich interessieren für' verlangt den Akkusativ.",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q3",
      "type": "multiple_choice",
      "prompt": "Wir nehmen gerne ___ dem Deutschkurs teil.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "an",
        "in",
        "bei",
        "mit"
      ],
      "correct": 0,
      "explanationDe": "'teilnehmen an' verlangt den Dativ ('an dem Kurs').",
      "explanationEn": "'teilnehmen an' verlangt den Dativ ('an dem Kurs').",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q4",
      "type": "multiple_choice",
      "prompt": "Sie denkt oft ___ ihre Kindheit in Österreich.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "an",
        "über",
        "auf",
        "nach"
      ],
      "correct": 0,
      "explanationDe": "'denken an' verlangt den Akkusativ ('an ihre Kindheit').",
      "explanationEn": "'denken an' verlangt den Akkusativ ('an ihre Kindheit').",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q5",
      "type": "multiple_choice",
      "prompt": "Der Student freut sich ___ die bevorstehenden Ferien.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "auf",
        "über",
        "für",
        "an"
      ],
      "correct": 0,
      "explanationDe": "'sich freuen auf' bezieht sich auf die Zukunft (+ Akkusativ).",
      "explanationEn": "'sich freuen auf' bezieht sich auf die Zukunft (+ Akkusativ).",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q6",
      "type": "multiple_choice",
      "prompt": "Er hat sich sehr ___ das schöne Geschenk gefreut.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "über",
        "auf",
        "für",
        "an"
      ],
      "correct": 0,
      "explanationDe": "'sich freuen über' bezieht sich auf Gegenwärtiges/Vergangenes (+ Akkusativ).",
      "explanationEn": "'sich freuen über' bezieht sich auf Gegenwärtiges/Vergangenes (+ Akkusativ).",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q7",
      "type": "multiple_choice",
      "prompt": "Ich muss mich noch ___ dem Chef entschuldigen.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "bei",
        "zu",
        "für",
        "mit"
      ],
      "correct": 0,
      "explanationDe": "'sich entschuldigen bei' + Dativ (Person) und 'für' + Akkusativ (Sache).",
      "explanationEn": "'sich entschuldigen bei' + Dativ (Person) und 'für' + Akkusativ (Sache).",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q8",
      "type": "multiple_choice",
      "prompt": "Sie träumt schon lange ___ einer eigenen Wohnung.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "von",
        "über",
        "nach",
        "an"
      ],
      "correct": 0,
      "explanationDe": "'träumen von' verlangt den Dativ ('von einer Wohnung').",
      "explanationEn": "'träumen von' verlangt den Dativ ('von einer Wohnung').",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q9",
      "type": "multiple_choice",
      "prompt": "Worüber ärgerst du dich? - Ich ärgere mich ___ das schlechte Wetter.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "über",
        "auf",
        "an",
        "für"
      ],
      "correct": 0,
      "explanationDe": "'sich ärgern über' verlangt den Akkusativ.",
      "explanationEn": "'sich ärgern über' verlangt den Akkusativ.",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q10",
      "type": "multiple_choice",
      "prompt": "Er bedankt sich bei seiner Tante ___ die Hilfe.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "für",
        "über",
        "an",
        "von"
      ],
      "correct": 0,
      "explanationDe": "'sich bedanken für' + Akkusativ.",
      "explanationEn": "'sich bedanken für' + Akkusativ.",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q11",
      "type": "multiple_choice",
      "prompt": "Gehört dieses Buch ___ dir?",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "zu",
        "an",
        "mit",
        "[keine Präposition]"
      ],
      "correct": 3,
      "explanationDe": "'gehören' verlangt direkten Dativ ohne Präposition: 'gehört dir'.",
      "explanationEn": "'gehören' verlangt direkten Dativ ohne Präposition: 'gehört dir'.",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q12",
      "type": "multiple_choice",
      "prompt": "Wir sprechen gerade ___ den neuen Arbeitsplan.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "über",
        "an",
        "auf",
        "zu"
      ],
      "correct": 0,
      "explanationDe": "'sprechen über' verlangt den Akkusativ.",
      "explanationEn": "'sprechen über' verlangt den Akkusativ.",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q13",
      "type": "multiple_choice",
      "prompt": "Hast du Angst ___ großen Hunden?",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "vor",
        "von",
        "an",
        "über"
      ],
      "correct": 0,
      "explanationDe": "'Angst haben vor' verlangt den Dativ ('vor großen Hunden').",
      "explanationEn": "'Angst haben vor' verlangt den Dativ ('vor großen Hunden').",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q14",
      "type": "multiple_choice",
      "prompt": "Er erinnert sich gerne ___ seine Schulzeit.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "an",
        "über",
        "auf",
        "für"
      ],
      "correct": 0,
      "explanationDe": "'sich erinnern an' verlangt den Akkusativ ('an seine Schulzeit').",
      "explanationEn": "'sich erinnern an' verlangt den Akkusativ ('an seine Schulzeit').",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q15",
      "type": "multiple_choice",
      "prompt": "Sie hofft ___ ein gutes Prüfungsergebnis.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "auf",
        "für",
        "an",
        "über"
      ],
      "correct": 0,
      "explanationDe": "'hoffen auf' verlangt den Akkusativ.",
      "explanationEn": "'hoffen auf' verlangt den Akkusativ.",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q16",
      "type": "multiple_choice",
      "prompt": "Ich lade dich herzlich ___ meiner Geburtstagsfeier ein.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "zu",
        "in",
        "auf",
        "an"
      ],
      "correct": 0,
      "explanationDe": "'einladen zu' verlangt den Dativ ('zu meiner Feier').",
      "explanationEn": "'einladen zu' verlangt den Dativ ('zu meiner Feier').",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q17",
      "type": "multiple_choice",
      "prompt": "Der Lehrer hilft dem Schüler ___ den Hausaufgaben.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "bei",
        "mit",
        "zu",
        "in"
      ],
      "correct": 0,
      "explanationDe": "'helfen bei' verlangt den Dativ ('bei den Hausaufgaben').",
      "explanationEn": "'helfen bei' verlangt den Dativ ('bei den Hausaufgaben').",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q18",
      "type": "multiple_choice",
      "prompt": "Das Buch liegt ___ dem Tisch.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "auf",
        "in",
        "an",
        "über"
      ],
      "correct": 0,
      "explanationDe": "Wechselpräposition 'auf' + Dativ (Wo? Lagezustand).",
      "explanationEn": "Wechselpräposition 'auf' + Dativ (Wo? Lagezustand).",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q19",
      "type": "multiple_choice",
      "prompt": "Er legt das Buch ___ den Tisch.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "auf",
        "in",
        "an",
        "über"
      ],
      "correct": 0,
      "explanationDe": "Wechselpräposition 'auf' + Akkusativ (Wohin? Richtungsaktion).",
      "explanationEn": "Wechselpräposition 'auf' + Akkusativ (Wohin? Richtungsaktion).",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q20",
      "type": "multiple_choice",
      "prompt": "Wir treffen uns morgen ___ der Haltestelle.",
      "sub": "Wähle die richtige Präposition",
      "options": [
        "an",
        "in",
        "auf",
        "zu"
      ],
      "correct": 0,
      "explanationDe": "'an der Haltestelle' (Wo? Dativ).",
      "explanationEn": "'an der Haltestelle' (Wo? Dativ).",
      "rule": "Feste Präpositionen"
    },
    {
      "id": "praep_q21",
      "type": "gap_fill",
      "prompt": "Ich warte schon so lange [ ... ] deine Antwort.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "auf",
        "für",
        "über",
        "an"
      ],
      "correct": 0,
      "explanationDe": "'warten auf' + Akkusativ.",
      "explanationEn": "'warten auf' + Akkusativ.",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q22",
      "type": "gap_fill",
      "prompt": "Er denkt jeden Tag [ ... ] seine Familie.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "an",
        "auf",
        "über",
        "in"
      ],
      "correct": 0,
      "explanationDe": "'denken an' + Akkusativ.",
      "explanationEn": "'denken an' + Akkusativ.",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q23",
      "type": "gap_fill",
      "prompt": "Wir freuen uns alle [ ... ] das kommende Wochenende.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "auf",
        "über",
        "an",
        "für"
      ],
      "correct": 0,
      "explanationDe": "'sich freuen auf' (Zukunft).",
      "explanationEn": "'sich freuen auf' (Zukunft).",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q24",
      "type": "gap_fill",
      "prompt": "Sie ärgert sich oft [ ... ] die Unpünktlichkeit der Bahn.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "über",
        "auf",
        "an",
        "für"
      ],
      "correct": 0,
      "explanationDe": "'sich ärgern über' + Akkusativ.",
      "explanationEn": "'sich ärgern über' + Akkusativ.",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q25",
      "type": "gap_fill",
      "prompt": "Er nimmt regelmäßig [ ... ] den Besprechungen teil.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "an",
        "in",
        "bei",
        "mit"
      ],
      "correct": 0,
      "explanationDe": "'teilnehmen an' + Dativ.",
      "explanationEn": "'teilnehmen an' + Dativ.",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q26",
      "type": "gap_fill",
      "prompt": "Sie träumt [ ... ] einer Reise um die Welt.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "von",
        "über",
        "an",
        "auf"
      ],
      "correct": 0,
      "explanationDe": "'träumen von' + Dativ.",
      "explanationEn": "'träumen von' + Dativ.",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q27",
      "type": "gap_fill",
      "prompt": "Ich interessiere mich sehr [ ... ] deutsche Geschichte.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "für",
        "über",
        "an",
        "zu"
      ],
      "correct": 0,
      "explanationDe": "'sich interessieren für' + Akkusativ.",
      "explanationEn": "'sich interessieren für' + Akkusativ.",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q28",
      "type": "gap_fill",
      "prompt": "Bitte achte [ ... ] die rote Ampel!",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "auf",
        "an",
        "für",
        "über"
      ],
      "correct": 0,
      "explanationDe": "'achten auf' + Akkusativ.",
      "explanationEn": "'achten auf' + Akkusativ.",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q29",
      "type": "gap_fill",
      "prompt": "Er bedankte sich herzlich [ ... ] das schöne Geschenk.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "für",
        "über",
        "an",
        "bei"
      ],
      "correct": 0,
      "explanationDe": "'sich bedanken für' + Akkusativ.",
      "explanationEn": "'sich bedanken für' + Akkusativ.",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q30",
      "type": "gap_fill",
      "prompt": "Hast du keine Angst [ ... ] Prüfungen?",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "vor",
        "an",
        "von",
        "über"
      ],
      "correct": 0,
      "explanationDe": "'Angst haben vor' + Dativ.",
      "explanationEn": "'Angst haben vor' + Dativ.",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q31",
      "type": "gap_fill",
      "prompt": "Er erinnert sich noch genau [ ... ] den ersten Schultag.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "an",
        "auf",
        "über",
        "zu"
      ],
      "correct": 0,
      "explanationDe": "'sich erinnern an' + Akkusativ.",
      "explanationEn": "'sich erinnern an' + Akkusativ.",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q32",
      "type": "gap_fill",
      "prompt": "Sie hofft [ ... ] eine baldige Besserung.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "auf",
        "für",
        "an",
        "über"
      ],
      "correct": 0,
      "explanationDe": "'hoffen auf' + Akkusativ.",
      "explanationEn": "'hoffen auf' + Akkusativ.",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q33",
      "type": "gap_fill",
      "prompt": "Wir gratulieren dir [ ... ] Geburtstag!",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "zum",
        "beim",
        "am",
        "für den"
      ],
      "correct": 0,
      "explanationDe": "'gratulieren zu' + Dativ ('zum Geburtstag').",
      "explanationEn": "'gratulieren zu' + Dativ ('zum Geburtstag').",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q34",
      "type": "gap_fill",
      "prompt": "Er diskutiert gerne [ ... ] seinen Freunden über Politik.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "mit",
        "bei",
        "von",
        "zu"
      ],
      "correct": 0,
      "explanationDe": "'diskutieren mit' + Dativ (Person).",
      "explanationEn": "'diskutieren mit' + Dativ (Person).",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q35",
      "type": "gap_fill",
      "prompt": "Die Lampe hängt [ ... ] dem Esstisch.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "über",
        "auf",
        "an",
        "in"
      ],
      "correct": 0,
      "explanationDe": "Wechselpräposition 'über' + Dativ (Wo?).",
      "explanationEn": "Wechselpräposition 'über' + Dativ (Wo?).",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q36",
      "type": "gap_fill",
      "prompt": "Er hängt das Bild [ ... ] die weiße Wand.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "an",
        "auf",
        "in",
        "über"
      ],
      "correct": 0,
      "explanationDe": "Wechselpräposition 'an' + Akkusativ (Wohin?).",
      "explanationEn": "Wechselpräposition 'an' + Akkusativ (Wohin?).",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q37",
      "type": "gap_fill",
      "prompt": "Der Hund liegt gemütlich [ ... ] dem Teppich.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "auf",
        "in",
        "an",
        "unter"
      ],
      "correct": 0,
      "explanationDe": "Lagezustand (Wo?) -> Dativ 'auf dem Teppich'.",
      "explanationEn": "Lagezustand (Wo?) -> Dativ 'auf dem Teppich'.",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q38",
      "type": "gap_fill",
      "prompt": "Sie setzt sich [ ... ] den bequemen Sessel.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "in",
        "an",
        "auf",
        "vor"
      ],
      "correct": 0,
      "explanationDe": "Richtungsbewegung (Wohin?) -> Akkusativ 'in den Sessel'.",
      "explanationEn": "Richtungsbewegung (Wohin?) -> Akkusativ 'in den Sessel'.",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q39",
      "type": "gap_fill",
      "prompt": "Er bewirbt sich [ ... ] eine neue Stelle.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "um",
        "für",
        "an",
        "auf"
      ],
      "correct": 0,
      "explanationDe": "'sich bewerben um' + Akkusativ.",
      "explanationEn": "'sich bewerben um' + Akkusativ.",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q40",
      "type": "gap_fill",
      "prompt": "Wir müssen uns [ ... ] den neuen Lehrer gewöhnen.",
      "sub": "Setze die passende Präposition ein",
      "options": [
        "an",
        "auf",
        "über",
        "in"
      ],
      "correct": 0,
      "explanationDe": "'sich gewöhnen an' + Akkusativ.",
      "explanationEn": "'sich gewöhnen an' + Akkusativ.",
      "rule": "Lückentext: Präpositionen"
    },
    {
      "id": "praep_q41",
      "type": "sentence_translation",
      "prompt": "Translate: 'I am waiting for the bus.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Ich warte auf den Bus.",
        "Ich warte für den Bus.",
        "Ich warte an den Bus.",
        "Ich warte über den Bus."
      ],
      "correct": 0,
      "explanationDe": "'warten auf' + Akkusativ.",
      "explanationEn": "'warten auf' + Akkusativ.",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q42",
      "type": "sentence_translation",
      "prompt": "Translate: 'She is interested in art.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Sie interessiert sich für Kunst.",
        "Sie interessiert sich an Kunst.",
        "Sie interessiert sich über Kunst.",
        "Sie interessiert sich in Kunst."
      ],
      "correct": 0,
      "explanationDe": "'sich interessieren für'.",
      "explanationEn": "'sich interessieren für'.",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q43",
      "type": "sentence_translation",
      "prompt": "Translate: 'He participates in the course.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Er nimmt am Kurs teil.",
        "Er nimmt im Kurs teil.",
        "Er nimmt zum Kurs teil.",
        "Er nimmt beim Kurs teil."
      ],
      "correct": 0,
      "explanationDe": "'teilnehmen an' + Dativ ('am Kurs').",
      "explanationEn": "'teilnehmen an' + Dativ ('am Kurs').",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q44",
      "type": "sentence_translation",
      "prompt": "Translate: 'We are looking forward to the holidays.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Wir freuen uns auf die Ferien.",
        "Wir freuen uns über die Ferien.",
        "Wir freuen uns für die Ferien.",
        "Wir freuen uns an die Ferien."
      ],
      "correct": 0,
      "explanationDe": "'sich freuen auf' (Zukunft).",
      "explanationEn": "'sich freuen auf' (Zukunft).",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q45",
      "type": "sentence_translation",
      "prompt": "Translate: 'He was happy about the present.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Er hat sich über das Geschenk gefreut.",
        "Er hat sich auf das Geschenk gefreut.",
        "Er hat sich für das Geschenk gefreut.",
        "Er hat sich an das Geschenk gefreut."
      ],
      "correct": 0,
      "explanationDe": "'sich freuen über' (Gegenwart/Vergangenheit).",
      "explanationEn": "'sich freuen über' (Gegenwart/Vergangenheit).",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q46",
      "type": "sentence_translation",
      "prompt": "Translate: 'Are you afraid of dogs?'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Hast du Angst vor Hunden?",
        "Hast du Angst von Hunden?",
        "Hast du Angst über Hunden?",
        "Hast du Angst an Hunden?"
      ],
      "correct": 0,
      "explanationDe": "'Angst vor' + Dativ.",
      "explanationEn": "'Angst vor' + Dativ.",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q47",
      "type": "sentence_translation",
      "prompt": "Translate: 'She dreams of a big house.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Sie träumt von einem großen Haus.",
        "Sie träumt über ein großes Haus.",
        "Sie träumt an einem großen Haus.",
        "Sie träumt nach einem großen Haus."
      ],
      "correct": 0,
      "explanationDe": "'träumen von' + Dativ.",
      "explanationEn": "'träumen von' + Dativ.",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q48",
      "type": "sentence_translation",
      "prompt": "Translate: 'He apologized to his boss.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Er entschuldigte sich bei seinem Chef.",
        "Er entschuldigte sich zu seinem Chef.",
        "Er entschuldigte sich an seinem Chef.",
        "Er entschuldigte sich für seinen Chef."
      ],
      "correct": 0,
      "explanationDe": "'sich entschuldigen bei' + Dativ.",
      "explanationEn": "'sich entschuldigen bei' + Dativ.",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q49",
      "type": "sentence_translation",
      "prompt": "Translate: 'I remember that day.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Ich erinnere mich an diesen Tag.",
        "Ich erinnere mich über diesen Tag.",
        "Ich erinnere mich auf diesen Tag.",
        "Ich erinnere mich für diesen Tag."
      ],
      "correct": 0,
      "explanationDe": "'sich erinnern an' + Akkusativ.",
      "explanationEn": "'sich erinnern an' + Akkusativ.",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q50",
      "type": "sentence_translation",
      "prompt": "Translate: 'The cat is sitting under the table.' (location)",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Die Katze sitzt unter dem Tisch.",
        "Die Katze sitzt unter den Tisch.",
        "Die Katze setzt sich unter den Tisch.",
        "Die Katze sitzt auf dem Tisch."
      ],
      "correct": 0,
      "explanationDe": "Lage (Wo?) verlangt Dativ: 'unter dem Tisch'.",
      "explanationEn": "Lage (Wo?) verlangt Dativ: 'unter dem Tisch'.",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q51",
      "type": "sentence_translation",
      "prompt": "Translate: 'The cat runs under the table.' (direction)",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Die Katze rennt unter den Tisch.",
        "Die Katze rennt unter dem Tisch.",
        "Die Katze sitzt unter den Tisch.",
        "Die Katze rennt auf den Tisch."
      ],
      "correct": 0,
      "explanationDe": "Richtung (Wohin?) verlangt Akkusativ: 'unter den Tisch'.",
      "explanationEn": "Richtung (Wohin?) verlangt Akkusativ: 'unter den Tisch'.",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q52",
      "type": "sentence_translation",
      "prompt": "Translate: 'He applies for the position.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Er bewirbt sich um die Stelle.",
        "Er bewirbt sich für die Stelle.",
        "Er bewirbt sich an die Stelle.",
        "Er bewirbt sich auf die Stelle."
      ],
      "correct": 0,
      "explanationDe": "'sich bewerben um' + Akkusativ.",
      "explanationEn": "'sich bewerben um' + Akkusativ.",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q53",
      "type": "sentence_translation",
      "prompt": "Translate: 'We got used to the cold weather.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Wir haben uns an das kalte Wetter gewöhnt.",
        "Wir haben uns auf das kalte Wetter gewöhnt.",
        "Wir haben uns über das kalte Wetter gewöhnt.",
        "Wir haben uns für das kalte Wetter gewöhnt."
      ],
      "correct": 0,
      "explanationDe": "'sich gewöhnen an' + Akkusativ.",
      "explanationEn": "'sich gewöhnen an' + Akkusativ.",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q54",
      "type": "sentence_translation",
      "prompt": "Translate: 'He is angry about the delay.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Er ärgert sich über die Verspätung.",
        "Er ärgert sich auf die Verspätung.",
        "Er ärgert sich für die Verspätung.",
        "Er ärgert sich an die Verspätung."
      ],
      "correct": 0,
      "explanationDe": "'sich ärgern über' + Akkusativ.",
      "explanationEn": "'sich ärgern über' + Akkusativ.",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q55",
      "type": "sentence_translation",
      "prompt": "Translate: 'I congratulate you on your success.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Ich gratuliere dir zu deinem Erfolg.",
        "Ich gratuliere dich für deinen Erfolg.",
        "Ich gratuliere dir auf deinen Erfolg.",
        "Ich gratuliere dir über deinen Erfolg."
      ],
      "correct": 0,
      "explanationDe": "'gratulieren zu' + Dativ.",
      "explanationEn": "'gratulieren zu' + Dativ.",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q56",
      "type": "sentence_translation",
      "prompt": "Translate: 'She thanked him for the flowers.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Sie dankte ihm für die Blumen.",
        "Sie dankte ihn für die Blumen.",
        "Sie dankte ihm über die Blumen.",
        "Sie bedankte sich ihm für die Blumen."
      ],
      "correct": 0,
      "explanationDe": "'danken' + Dativ (Person) + 'für' + Akkusativ.",
      "explanationEn": "'danken' + Dativ (Person) + 'für' + Akkusativ.",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q57",
      "type": "sentence_translation",
      "prompt": "Translate: 'He puts the glass onto the table.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Er stellt das Glas auf den Tisch.",
        "Er stellt das Glas auf dem Tisch.",
        "Er legt das Glas auf dem Tisch.",
        "Er steht das Glas auf den Tisch."
      ],
      "correct": 0,
      "explanationDe": "Richtung mit 'stellen' -> Akkusativ 'auf den Tisch'.",
      "explanationEn": "Richtung mit 'stellen' -> Akkusativ 'auf den Tisch'.",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q58",
      "type": "sentence_translation",
      "prompt": "Translate: 'The glass is standing on the table.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Das Glas steht auf dem Tisch.",
        "Das Glas steht auf den Tisch.",
        "Das Glas stellt auf dem Tisch.",
        "Das Glas liegt auf den Tisch."
      ],
      "correct": 0,
      "explanationDe": "Lagezustand mit 'stehen' -> Dativ 'auf dem Tisch'.",
      "explanationEn": "Lagezustand mit 'stehen' -> Dativ 'auf dem Tisch'.",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q59",
      "type": "sentence_translation",
      "prompt": "Translate: 'We are talking about our vacation.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Wir sprechen über unseren Urlaub.",
        "Wir sprechen von unserem Urlaub.",
        "Wir sprechen an unseren Urlaub.",
        "Wir sprechen auf unseren Urlaub."
      ],
      "correct": 0,
      "explanationDe": "'sprechen über' + Akkusativ.",
      "explanationEn": "'sprechen über' + Akkusativ.",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q60",
      "type": "sentence_translation",
      "prompt": "Translate: 'He invited us to dinner.'",
      "sub": "Wähle die korrekte Übersetzung",
      "options": [
        "Er hat uns zum Abendessen eingeladen.",
        "Er hat uns für das Abendessen eingeladen.",
        "Er hat uns am Abendessen eingeladen.",
        "Er hat uns auf das Abendessen eingeladen."
      ],
      "correct": 0,
      "explanationDe": "'einladen zu' + Dativ ('zum Abendessen').",
      "explanationEn": "'einladen zu' + Dativ ('zum Abendessen').",
      "rule": "Satzübersetzung Präpositionen"
    },
    {
      "id": "praep_q61",
      "type": "word_order",
      "prompt": "Arrange the prepositional verb clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Ich",
        "warte",
        "auf",
        "den",
        "Bus"
      ],
      "correctOrder": "Ich warte auf den Bus",
      "explanationDe": "Subjekt + Verb + 'auf' + Akkusativ.",
      "explanationEn": "Subjekt + Verb + 'auf' + Akkusativ.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q62",
      "type": "word_order",
      "prompt": "Arrange the reflexive prepositional clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Er",
        "interessiert",
        "sich",
        "für",
        "moderne",
        "Kunst"
      ],
      "correctOrder": "Er interessiert sich für moderne Kunst",
      "explanationDe": "Subjekt + Verb + Reflexivpronomen + 'für' + Akkusativ.",
      "explanationEn": "Subjekt + Verb + Reflexivpronomen + 'für' + Akkusativ.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q63",
      "type": "word_order",
      "prompt": "Arrange the separable prepositional clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Wir",
        "nehmen",
        "an",
        "dem",
        "Kurs",
        "teil"
      ],
      "correctOrder": "Wir nehmen an dem Kurs teil",
      "explanationDe": "Subjekt + Verb + Präpositionalobjekt + trennbares Präfix 'teil'.",
      "explanationEn": "Subjekt + Verb + Präpositionalobjekt + trennbares Präfix 'teil'.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q64",
      "type": "word_order",
      "prompt": "Arrange the future joy clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Ich",
        "freue",
        "mich",
        "auf",
        "die",
        "Ferien"
      ],
      "correctOrder": "Ich freue mich auf die Ferien",
      "explanationDe": "'sich freuen auf' + Akkusativ.",
      "explanationEn": "'sich freuen auf' + Akkusativ.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q65",
      "type": "word_order",
      "prompt": "Arrange the past joy clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Er",
        "freut",
        "sich",
        "über",
        "das",
        "Geschenk"
      ],
      "correctOrder": "Er freut sich über das Geschenk",
      "explanationDe": "'sich freuen über' + Akkusativ.",
      "explanationEn": "'sich freuen über' + Akkusativ.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q66",
      "type": "word_order",
      "prompt": "Arrange the anger clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Sie",
        "ärgert",
        "sich",
        "über",
        "den",
        "Stau"
      ],
      "correctOrder": "Sie ärgert sich über den Stau",
      "explanationDe": "'sich ärgern über' + Akkusativ.",
      "explanationEn": "'sich ärgern über' + Akkusativ.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q67",
      "type": "word_order",
      "prompt": "Arrange the dream clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Sie",
        "träumt",
        "von",
        "einer",
        "weiten",
        "Reise"
      ],
      "correctOrder": "Sie träumt von einer weiten Reise",
      "explanationDe": "'träumen von' + Dativ.",
      "explanationEn": "'träumen von' + Dativ.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q68",
      "type": "word_order",
      "prompt": "Arrange the memory clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Er",
        "erinnert",
        "sich",
        "an",
        "den",
        "Urlaub"
      ],
      "correctOrder": "Er erinnert sich an den Urlaub",
      "explanationDe": "'sich erinnern an' + Akkusativ.",
      "explanationEn": "'sich erinnern an' + Akkusativ.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q69",
      "type": "word_order",
      "prompt": "Arrange the fear clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Das",
        "Kind",
        "hat",
        "Angst",
        "vor",
        "Hunden"
      ],
      "correctOrder": "Das Kind hat Angst vor Hunden",
      "explanationDe": "'Angst haben vor' + Dativ.",
      "explanationEn": "'Angst haben vor' + Dativ.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q70",
      "type": "word_order",
      "prompt": "Arrange the application clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Er",
        "bewirbt",
        "sich",
        "um",
        "die",
        "Stelle"
      ],
      "correctOrder": "Er bewirbt sich um die Stelle",
      "explanationDe": "'sich bewerben um' + Akkusativ.",
      "explanationEn": "'sich bewerben um' + Akkusativ.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q71",
      "type": "word_order",
      "prompt": "Arrange the two-way preposition direction clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Er",
        "stellt",
        "die",
        "Vase",
        "auf",
        "den",
        "Tisch"
      ],
      "correctOrder": "Er stellt die Vase auf den Tisch",
      "explanationDe": "Wohin? -> Akkusativ 'auf den Tisch'.",
      "explanationEn": "Wohin? -> Akkusativ 'auf den Tisch'.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q72",
      "type": "word_order",
      "prompt": "Arrange the two-way preposition location clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Die",
        "Vase",
        "steht",
        "auf",
        "dem",
        "Tisch"
      ],
      "correctOrder": "Die Vase steht auf dem Tisch",
      "explanationDe": "Wo? -> Dativ 'auf dem Tisch'.",
      "explanationEn": "Wo? -> Dativ 'auf dem Tisch'.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q73",
      "type": "word_order",
      "prompt": "Arrange the hang direction clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Sie",
        "hängt",
        "das",
        "Bild",
        "an",
        "die",
        "Wand"
      ],
      "correctOrder": "Sie hängt das Bild an die Wand",
      "explanationDe": "Wohin? -> Akkusativ 'an die Wand'.",
      "explanationEn": "Wohin? -> Akkusativ 'an die Wand'.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q74",
      "type": "word_order",
      "prompt": "Arrange the hang location clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Das",
        "Bild",
        "hängt",
        "an",
        "der",
        "Wand"
      ],
      "correctOrder": "Das Bild hängt an der Wand",
      "explanationDe": "Wo? -> Dativ 'an der Wand'.",
      "explanationEn": "Wo? -> Dativ 'an der Wand'.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q75",
      "type": "word_order",
      "prompt": "Arrange the apology clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Er",
        "entschuldigt",
        "sich",
        "bei",
        "dem",
        "Lehrer"
      ],
      "correctOrder": "Er entschuldigt sich bei dem Lehrer",
      "explanationDe": "'sich entschuldigen bei' + Dativ.",
      "explanationEn": "'sich entschuldigen bei' + Dativ.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q76",
      "type": "word_order",
      "prompt": "Arrange the help clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Sie",
        "hilft",
        "ihm",
        "bei",
        "der",
        "Arbeit"
      ],
      "correctOrder": "Sie hilft ihm bei der Arbeit",
      "explanationDe": "'helfen bei' + Dativ.",
      "explanationEn": "'helfen bei' + Dativ.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q77",
      "type": "word_order",
      "prompt": "Arrange the congratulation clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Wir",
        "gratulieren",
        "dir",
        "zum",
        "Geburtstag"
      ],
      "correctOrder": "Wir gratulieren dir zum Geburtstag",
      "explanationDe": "'gratulieren zu' + Dativ.",
      "explanationEn": "'gratulieren zu' + Dativ.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q78",
      "type": "word_order",
      "prompt": "Arrange the invitation clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Er",
        "lädt",
        "sie",
        "zum",
        "Essen",
        "ein"
      ],
      "correctOrder": "Er lädt sie zum Essen ein",
      "explanationDe": "'einladen zu' + Dativ + 'ein'.",
      "explanationEn": "'einladen zu' + Dativ + 'ein'.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q79",
      "type": "word_order",
      "prompt": "Arrange the habituation clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Wir",
        "gewöhnen",
        "uns",
        "an",
        "das",
        "Klima"
      ],
      "correctOrder": "Wir gewöhnen uns an das Klima",
      "explanationDe": "'sich gewöhnen an' + Akkusativ.",
      "explanationEn": "'sich gewöhnen an' + Akkusativ.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q80",
      "type": "word_order",
      "prompt": "Arrange the indirect question with Wo-compound:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Worauf",
        "wartest",
        "du",
        "eigentlich"
      ],
      "correctOrder": "Worauf wartest du eigentlich",
      "explanationDe": "Pronominaladverb 'Worauf' + Verb + Subjekt + Partikel.",
      "explanationEn": "Pronominaladverb 'Worauf' + Verb + Subjekt + Partikel.",
      "rule": "Satzbau mit Präpositionalobjekt"
    },
    {
      "id": "praep_q81",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Ich warte [für den Bus] [seit] [einer halben Stunde].",
      "segments": [
        {
          "text": "für den Bus",
          "isError": true,
          "correction": "auf den Bus"
        },
        {
          "text": "seit einer halben Stunde.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Auf Deutsch heißt es 'warten auf' + Akkusativ (nicht 'für').",
      "explanationEn": "Auf Deutsch heißt es 'warten auf' + Akkusativ (nicht 'für').",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q82",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Er interessiert sich [an die] [moderne] [Kunst].",
      "segments": [
        {
          "text": "an die",
          "isError": true,
          "correction": "für die"
        },
        {
          "text": "moderne Kunst.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'sich interessieren' verlangt die Präposition 'für' (+ Akkusativ).",
      "explanationEn": "'sich interessieren' verlangt die Präposition 'für' (+ Akkusativ).",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q83",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Wir freuen uns [über die Ferien] [nächste Woche].",
      "segments": [
        {
          "text": "über die Ferien",
          "isError": true,
          "correction": "auf die Ferien"
        },
        {
          "text": "nächste Woche.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Für zukünftige Ereignisse heißt es 'sich freuen auf' (nicht 'über').",
      "explanationEn": "Für zukünftige Ereignisse heißt es 'sich freuen auf' (nicht 'über').",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q84",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Er nimmt [in dem Kurs] [aktiv] [teil].",
      "segments": [
        {
          "text": "in dem Kurs",
          "isError": true,
          "correction": "am Kurs (an dem Kurs)"
        },
        {
          "text": "aktiv teil.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'teilnehmen' verlangt 'an' + Dativ ('am Kurs').",
      "explanationEn": "'teilnehmen' verlangt 'an' + Dativ ('am Kurs').",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q85",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Sie träumt [über eine] [große] [Reise].",
      "segments": [
        {
          "text": "über eine",
          "isError": true,
          "correction": "von einer"
        },
        {
          "text": "große Reise.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'träumen' verlangt die Präposition 'von' + Dativ ('von einer großen Reise').",
      "explanationEn": "'träumen' verlangt die Präposition 'von' + Dativ ('von einer großen Reise').",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q86",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Hast du Angst [von Hunden]?",
      "segments": [
        {
          "text": "von Hunden?",
          "isError": true,
          "correction": "vor Hunden?"
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'Angst haben' verlangt 'vor' + Dativ (nicht 'von').",
      "explanationEn": "'Angst haben' verlangt 'vor' + Dativ (nicht 'von').",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q87",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Er entschuldigt sich [zu seinem Chef] [für die Verspätung].",
      "segments": [
        {
          "text": "zu seinem Chef",
          "isError": true,
          "correction": "bei seinem Chef"
        },
        {
          "text": "für die Verspätung.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'sich entschuldigen' bei einer Person verlangt 'bei' + Dativ.",
      "explanationEn": "'sich entschuldigen' bei einer Person verlangt 'bei' + Dativ.",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q88",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Er erinnert sich [über seinen] [ersten] [Schultag].",
      "segments": [
        {
          "text": "über seinen",
          "isError": true,
          "correction": "an seinen"
        },
        {
          "text": "ersten Schultag.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'sich erinnern' verlangt 'an' + Akkusativ.",
      "explanationEn": "'sich erinnern' verlangt 'an' + Akkusativ.",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q89",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Ich stelle das Glas [auf dem Tisch].",
      "segments": [
        {
          "text": "auf dem Tisch.",
          "isError": true,
          "correction": "auf den Tisch."
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Richtung/Wohin? mit 'stellen' verlangt Akkusativ ('auf den Tisch').",
      "explanationEn": "Richtung/Wohin? mit 'stellen' verlangt Akkusativ ('auf den Tisch').",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q90",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Das Buch liegt [auf den Tisch].",
      "segments": [
        {
          "text": "auf den Tisch.",
          "isError": true,
          "correction": "auf dem Tisch."
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Lagezustand/Wo? mit 'liegen' verlangt Dativ ('auf dem Tisch').",
      "explanationEn": "Lagezustand/Wo? mit 'liegen' verlangt Dativ ('auf dem Tisch').",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q91",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Wir gratulieren dir [für deinen] [Erfolg].",
      "segments": [
        {
          "text": "für deinen",
          "isError": true,
          "correction": "zu deinem"
        },
        {
          "text": "Erfolg.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'gratulieren' verlangt 'zu' + Dativ ('zu deinem Erfolg').",
      "explanationEn": "'gratulieren' verlangt 'zu' + Dativ ('zu deinem Erfolg').",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q92",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Er bedankt sich [über die Blumen].",
      "segments": [
        {
          "text": "über die Blumen.",
          "isError": true,
          "correction": "für die Blumen."
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'sich bedanken' für eine Sache verlangt 'für' + Akkusativ.",
      "explanationEn": "'sich bedanken' für eine Sache verlangt 'für' + Akkusativ.",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q93",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Er bewirbt sich [für die] [offene] [Stelle].",
      "segments": [
        {
          "text": "für die",
          "isError": true,
          "correction": "um die"
        },
        {
          "text": "offene Stelle.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'sich bewerben' verlangt 'um' + Akkusativ.",
      "explanationEn": "'sich bewerben' verlangt 'um' + Akkusativ.",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q94",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Sie hängt das Bild [an der Wand].",
      "segments": [
        {
          "text": "an der Wand.",
          "isError": true,
          "correction": "an die Wand."
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Wohin? Aktion verlangt Akkusativ 'an die Wand'.",
      "explanationEn": "Wohin? Aktion verlangt Akkusativ 'an die Wand'.",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q95",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Die Katze sitzt [unter den Tisch].",
      "segments": [
        {
          "text": "unter den Tisch.",
          "isError": true,
          "correction": "unter dem Tisch."
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Wo? Zustand verlangt Dativ 'unter dem Tisch'.",
      "explanationEn": "Wo? Zustand verlangt Dativ 'unter dem Tisch'.",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q96",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Ich lade dich [für meine Party] [ein].",
      "segments": [
        {
          "text": "für meine Party",
          "isError": true,
          "correction": "zu meiner Party"
        },
        {
          "text": "ein.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'einladen' verlangt 'zu' + Dativ ('zu meiner Party').",
      "explanationEn": "'einladen' verlangt 'zu' + Dativ ('zu meiner Party').",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q97",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Er ärgert sich [auf den Stau].",
      "segments": [
        {
          "text": "auf den Stau.",
          "isError": true,
          "correction": "über den Stau."
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'sich ärgern' verlangt 'über' + Akkusativ.",
      "explanationEn": "'sich ärgern' verlangt 'über' + Akkusativ.",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q98",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Sie gewöhnt sich [mit dem kalten Wetter].",
      "segments": [
        {
          "text": "mit dem kalten Wetter.",
          "isError": true,
          "correction": "an das kalte Wetter."
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'sich gewöhnen an' verlangt Akkusativ.",
      "explanationEn": "'sich gewöhnen an' verlangt Akkusativ.",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q99",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Er denkt [über seine Zukunft] [nach].",
      "segments": [
        {
          "text": "Er denkt über seine Zukunft nach.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Grammatikalisch korrekt ('nachdenken über').",
      "explanationEn": "Grammatikalisch korrekt ('nachdenken über').",
      "rule": "Fehlersuche Präpositionen"
    },
    {
      "id": "praep_q100",
      "type": "error_correction",
      "prompt": "Finde den Fehler bei der Präposition:",
      "sentence": "Wir sprechen [von den neuen Plan].",
      "segments": [
        {
          "text": "von den neuen Plan.",
          "isError": true,
          "correction": "über den neuen Plan (oder: von dem neuen Plan)."
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'von' verlangt Dativ ('von dem neuen Plan') oder 'über' + Akkusativ.",
      "explanationEn": "'von' verlangt Dativ ('von dem neuen Plan') oder 'über' + Akkusativ.",
      "rule": "Fehlersuche Präpositionen"
    }
  ]
};
