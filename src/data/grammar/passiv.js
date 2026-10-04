// B1 German Grammar Topic: Passiv (Vorgangs- & Zustandspassiv)
// 100 questions dataset covering 5 question types for repeated practice.

export const PASSIV_TOPIC = {
  "id": "passiv",
  "exportName": "PASSIV_TOPIC",
  "titleDe": "03. Passiv (Vorgangs- & Zustandspassiv)",
  "titleEn": "03. Passive Voice (Process & State)",
  "icon": "⚙️",
  "badge": "werden / sein + Partizip II",
  "summaryDe": "Das Vorgangspassiv betont die Handlung (werden + Partizip II). Das Zustandspassiv beschreibt das Resultat einer beendeten Handlung (sein + Partizip II). Der Urheber wird mit \"von\" (+ Dativ) oder \"durch\" (+ Akkusativ) genannt.",
  "summaryEn": "Process passive emphasizes the action (werden + Partizip II). State passive describes the resulting state (sein + Partizip II). The agent is expressed with \"von\" (+ Dativ) or \"durch\" (+ Akkusativ).",
  "cheatSheet": {
    "rule": "Vorgangspassiv: Präsens: wird + Partizip II; Präteritum: wurde + Partizip II; Perfekt: ist + Partizip II + worden; Mit Modalverb: muss + Partizip II + werden.",
    "table": [
      {
        "tempus": "Präsens",
        "form": "wird repariert",
        "beispiel": "Das Auto wird heute repariert."
      },
      {
        "tempus": "Präteritum",
        "form": "wurde repariert",
        "beispiel": "Das Auto wurde gestern repariert."
      },
      {
        "tempus": "Perfekt",
        "form": "ist repariert worden",
        "beispiel": "Das Auto ist gestern repariert worden."
      },
      {
        "tempus": "Modalverb",
        "form": "muss repariert werden",
        "beispiel": "Das Auto muss sofort repariert werden."
      },
      {
        "tempus": "Zustandspassiv",
        "form": "ist repariert",
        "beispiel": "Das Auto ist schon repariert."
      }
    ],
    "goldenRules": [
      "Goldene Regel 1: Im Perfekt Passiv heißt es immer \"worden\" (ohne ge-!), NIEMALS \"geworden\"!",
      "Goldene Regel 2: Personen/Handelnde stehen mit \"von\" + Dativ (\"vom Chef\"). Mittel/Ursachen stehen mit \"durch\" + Akkusativ (\"durch das Unwetter\")."
    ]
  },
  "questions": [
    {
      "id": "pas_q1",
      "type": "multiple_choice",
      "prompt": "Die neue Brücke ___ nächstes Jahr eröffnet.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "wird",
        "wurde",
        "worden",
        "ist"
      ],
      "correct": 0,
      "explanationDe": "Präsens/Futur Vorgangspassiv Singular -> 'wird eröffnet'.",
      "explanationEn": "Present/future process passive -> 'wird eröffnet'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q2",
      "type": "multiple_choice",
      "prompt": "Das alte Rathaus ___ im letzten Sommer renoviert.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "wurde",
        "wird",
        "ist",
        "hat"
      ],
      "correct": 0,
      "explanationDe": "Präteritum Vorgangspassiv ('im letzten Sommer') -> 'wurde renoviert'.",
      "explanationEn": "Past tense passive -> 'wurde renoviert'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q3",
      "type": "multiple_choice",
      "prompt": "Der Brief ist gestern von der Sekretärin abgeschickt ___.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "worden",
        "geworden",
        "werden",
        "gewesen"
      ],
      "correct": 0,
      "explanationDe": "Perfekt Passiv verlangt stets 'worden' (ohne Vorsilbe ge-!).",
      "explanationEn": "Perfekt passive always takes 'worden' (never 'geworden').",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q4",
      "type": "multiple_choice",
      "prompt": "Hier ___ Deutsch, Englisch und Spanisch gesprochen.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "werden",
        "wird",
        "worden",
        "haben"
      ],
      "correct": 0,
      "explanationDe": "Mehrere Sprachen = Plural Subjekt -> 'werden gesprochen'.",
      "explanationEn": "Multiple languages = plural subject -> 'werden gesprochen'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q5",
      "type": "multiple_choice",
      "prompt": "Die Hausaufgaben ___ bis morgen erledigt werden.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "müssen",
        "muss",
        "wird",
        "haben"
      ],
      "correct": 0,
      "explanationDe": "Plural Subjekt 'die Hausaufgaben' + Modalverb -> 'müssen erledigt werden'.",
      "explanationEn": "Plural subject + modal verb -> 'müssen'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q6",
      "type": "multiple_choice",
      "prompt": "Der Patient wurde ___ Chefarzt persönlich operiert.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "vom",
        "durch den",
        "mit dem",
        "aus dem"
      ],
      "correct": 0,
      "explanationDe": "Handelnde Person = 'von' + Dativ ('von dem' = 'vom').",
      "explanationEn": "Agent person = 'von' + dative -> 'vom Chefarzt'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q7",
      "type": "multiple_choice",
      "prompt": "Viele Bäume wurden ___ den starken Sturm entwurzelt.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "durch",
        "von",
        "mit",
        "wegen"
      ],
      "correct": 0,
      "explanationDe": "Naturkraft / Ursache / Mittel = 'durch' + Akkusativ.",
      "explanationEn": "Force of nature / cause = 'durch' + accusative.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q8",
      "type": "multiple_choice",
      "prompt": "Die Geschäfte sind am Sonntag ___.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "geschlossen",
        "schließen",
        "geschlossen worden",
        "schloss"
      ],
      "correct": 0,
      "explanationDe": "Zustandspassiv (Zustand am Sonntag) = 'sein' + Partizip II -> 'sind geschlossen'.",
      "explanationEn": "State passive = 'sind geschlossen'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q9",
      "type": "multiple_choice",
      "prompt": "Das Formular ___ sofort ausgefüllt werden.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "muss",
        "wird",
        "hat",
        "ist"
      ],
      "correct": 0,
      "explanationDe": "Notwendigkeit im Passiv mit Modalverb -> 'muss ausgefüllt werden'.",
      "explanationEn": "Necessity in passive -> 'muss'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q10",
      "type": "multiple_choice",
      "prompt": "Wann ___ die Rechnungen bezahlt worden?",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "sind",
        "haben",
        "wurden",
        "werden"
      ],
      "correct": 0,
      "explanationDe": "Perfekt Passiv Plural mit Hilfsverb 'sein' -> 'sind bezahlt worden'.",
      "explanationEn": "Perfekt passive plural with 'sein' -> 'sind bezahlt worden'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q11",
      "type": "multiple_choice",
      "prompt": "Die Einladungen zur Konferenz ___ bereits verschickt.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "wurden",
        "wurde",
        "worden",
        "wird"
      ],
      "correct": 0,
      "explanationDe": "Plural Subjekt 'die Einladungen' im Präteritum -> 'wurden verschickt'.",
      "explanationEn": "Plural subject in simple past -> 'wurden'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q12",
      "type": "multiple_choice",
      "prompt": "In Deutschland ___ viel Kaffee getrunken.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "wird",
        "werden",
        "ist",
        "hat"
      ],
      "correct": 0,
      "explanationDe": "'Kaffee' ist unzählbar (Singular) -> 'wird getrunken'.",
      "explanationEn": "Singular mass noun -> 'wird getrunken'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q13",
      "type": "multiple_choice",
      "prompt": "Das Museum ___ montags geschlossen.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "ist",
        "wird",
        "worden",
        "gewesen"
      ],
      "correct": 0,
      "explanationDe": "Zustandspassiv für den Ruhetag -> 'ist geschlossen'.",
      "explanationEn": "State passive for closed day -> 'ist geschlossen'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q14",
      "type": "multiple_choice",
      "prompt": "Die Schlüssel ___ gestern im Büro vergessen.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "wurden",
        "wurde",
        "sind",
        "haben"
      ],
      "correct": 0,
      "explanationDe": "Plural 'die Schlüssel' im Präteritum -> 'wurden vergessen'.",
      "explanationEn": "Plural simple past -> 'wurden vergessen'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q15",
      "type": "multiple_choice",
      "prompt": "Das Zimmer ___ jeden Morgen gründlich geputzt.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "wird",
        "wurde",
        "worden",
        "hat"
      ],
      "correct": 0,
      "explanationDe": "Regelmäßige Handlung im Präsens -> 'wird geputzt'.",
      "explanationEn": "Habitual present action -> 'wird geputzt'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q16",
      "type": "multiple_choice",
      "prompt": "Die Fenster ___ gestern von den Handwerkern geputzt worden.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "sind",
        "haben",
        "wurden",
        "werden"
      ],
      "correct": 0,
      "explanationDe": "Perfekt Passiv mit 'geputzt worden' verlangt 'sind'.",
      "explanationEn": "Perfekt passive requires 'sind'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q17",
      "type": "multiple_choice",
      "prompt": "Hier ___ nicht geraucht werden!",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "darf",
        "wird",
        "hat",
        "muss"
      ],
      "correct": 0,
      "explanationDe": "Verbot im Passiv -> 'darf nicht geraucht werden'.",
      "explanationEn": "Prohibition in passive -> 'darf nicht geraucht werden'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q18",
      "type": "multiple_choice",
      "prompt": "Das Auto ___ repariert, du kannst es jetzt abholen.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "ist",
        "wird",
        "wurde",
        "worden"
      ],
      "correct": 0,
      "explanationDe": "Zustand nach Abschluss der Reparatur -> 'ist repariert' (Zustandspassiv).",
      "explanationEn": "Completed state -> 'ist repariert'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q19",
      "type": "multiple_choice",
      "prompt": "Der Täter ___ von der Polizei festgenommen.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "wurde",
        "hat",
        "ist",
        "wird"
      ],
      "correct": 0,
      "explanationDe": "Abgeschlossenes historisches Ereignis im Präteritum -> 'wurde festgenommen'.",
      "explanationEn": "Completed past event -> 'wurde festgenommen'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q20",
      "type": "multiple_choice",
      "prompt": "Dieses Medikament ___ nur in der Apotheke verkauft werden.",
      "sub": "Wähle die korrekte Passivform",
      "options": [
        "darf",
        "wird",
        "ist",
        "hat"
      ],
      "correct": 0,
      "explanationDe": "Erlaubnis/Vorschrift mit Modalverb -> 'darf verkauft werden'.",
      "explanationEn": "Permission/regulation -> 'darf'.",
      "rule": "Vorgangs- & Zustandspassiv"
    },
    {
      "id": "pas_q21",
      "type": "gap_fill",
      "prompt": "Das Mittagessen [ ... ] gerade gekocht.",
      "sub": "Setze die passende Form ein",
      "options": [
        "wird",
        "wurde",
        "worden",
        "hat"
      ],
      "correct": 0,
      "explanationDe": "Präsens Vorgangspassiv -> 'wird'.",
      "explanationEn": "Present process passive -> 'wird'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q22",
      "type": "gap_fill",
      "prompt": "Die E-Mail ist gestern [ ... ] worden.",
      "sub": "Setze die passende Form ein",
      "options": [
        "gesendet",
        "senden",
        "sendete",
        "gesendet haben"
      ],
      "correct": 0,
      "explanationDe": "Partizip II vor 'worden' -> 'gesendet worden'.",
      "explanationEn": "Participle II before 'worden'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q23",
      "type": "gap_fill",
      "prompt": "Das Konzert wurde [ ... ] schlechtem Wetter abgesagt.",
      "sub": "Setze die passende Form ein",
      "options": [
        "wegen",
        "von",
        "durch",
        "mit"
      ],
      "correct": 0,
      "explanationDe": "Begründung/Ursache -> 'wegen'.",
      "explanationEn": "Reason -> 'wegen'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q24",
      "type": "gap_fill",
      "prompt": "Die Rechnung [ ... ] gestern pünktlich bezahlt.",
      "sub": "Setze die passende Form ein",
      "options": [
        "wurde",
        "wird",
        "worden",
        "ist"
      ],
      "correct": 0,
      "explanationDe": "Präteritum Singular -> 'wurde'.",
      "explanationEn": "Past tense singular -> 'wurde'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q25",
      "type": "gap_fill",
      "prompt": "Alle Fenster müssen vor dem Sturm geschlossen [ ... ].",
      "sub": "Setze die passende Form ein",
      "options": [
        "werden",
        "worden",
        "geworden",
        "sein"
      ],
      "correct": 0,
      "explanationDe": "Infinitiv 'werden' nach Modalverb 'müssen'.",
      "explanationEn": "Infinitive 'werden' after modal verb.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q26",
      "type": "gap_fill",
      "prompt": "Das Gebäude wurde [ ... ] einem berühmten Architekten entworfen.",
      "sub": "Setze die passende Form ein",
      "options": [
        "von",
        "durch",
        "mit",
        "aus"
      ],
      "correct": 0,
      "explanationDe": "Urheber (Person) -> 'von' + Dativ.",
      "explanationEn": "Agent (person) -> 'von'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q27",
      "type": "gap_fill",
      "prompt": "Die Tür ist schon seit einer Stunde [ ... ].",
      "sub": "Setze die passende Form ein",
      "options": [
        "geöffnet",
        "öffnen",
        "geöffnet worden",
        "öffnete"
      ],
      "correct": 0,
      "explanationDe": "Zustandspassiv -> 'ist geöffnet'.",
      "explanationEn": "State passive -> 'ist geöffnet'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q28",
      "type": "gap_fill",
      "prompt": "In dieser Bäckerei [ ... ] die Brötchen noch von Hand gebacken.",
      "sub": "Setze die passende Form ein",
      "options": [
        "werden",
        "wird",
        "wurden",
        "worden"
      ],
      "correct": 0,
      "explanationDe": "Plural Subjekt 'die Brötchen' -> 'werden'.",
      "explanationEn": "Plural subject -> 'werden'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q29",
      "type": "gap_fill",
      "prompt": "Der Vertrag ist gestern unterschrieben [ ... ].",
      "sub": "Setze die passende Form ein",
      "options": [
        "worden",
        "geworden",
        "werden",
        "gewesen"
      ],
      "correct": 0,
      "explanationDe": "Perfekt Passiv -> 'worden'.",
      "explanationEn": "Perfekt passive -> 'worden'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q30",
      "type": "gap_fill",
      "prompt": "Das Fahrrad [ ... ] gestern Nacht gestohlen.",
      "sub": "Setze die passende Form ein",
      "options": [
        "wurde",
        "wird",
        "worden",
        "ist"
      ],
      "correct": 0,
      "explanationDe": "Präteritum Passiv -> 'wurde gestohlen'.",
      "explanationEn": "Past passive -> 'wurde'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q31",
      "type": "gap_fill",
      "prompt": "Das Paket [ ... ] morgen zugestellt.",
      "sub": "Setze die passende Form ein",
      "options": [
        "wird",
        "wurde",
        "worden",
        "ist"
      ],
      "correct": 0,
      "explanationDe": "Zukunft / Präsens Passiv -> 'wird zugestellt'.",
      "explanationEn": "Future passive -> 'wird'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q32",
      "type": "gap_fill",
      "prompt": "Die Straße wurde [ ... ] Hochwasser blockiert.",
      "sub": "Setze die passende Form ein",
      "options": [
        "durch",
        "von",
        "mit",
        "über"
      ],
      "correct": 0,
      "explanationDe": "Naturkraft / unbelebtes Mittel -> 'durch'.",
      "explanationEn": "Inanimate force -> 'durch'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q33",
      "type": "gap_fill",
      "prompt": "Hier [ ... ] leise gesprochen werden.",
      "sub": "Setze die passende Form ein",
      "options": [
        "muss",
        "wird",
        "worden",
        "hat"
      ],
      "correct": 0,
      "explanationDe": "Modalverb Notwendigkeit -> 'muss gesprochen werden'.",
      "explanationEn": "Modal verb -> 'muss'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q34",
      "type": "gap_fill",
      "prompt": "Die Koffer [ ... ] bereits ins Zimmer gebracht worden.",
      "sub": "Setze die passende Form ein",
      "options": [
        "sind",
        "haben",
        "wurden",
        "werden"
      ],
      "correct": 0,
      "explanationDe": "Perfekt Passiv Plural mit 'sind'.",
      "explanationEn": "Perfekt passive plural with 'sind'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q35",
      "type": "gap_fill",
      "prompt": "Das Buch [ ... ] im Jahr 1990 geschrieben.",
      "sub": "Setze die passende Form ein",
      "options": [
        "wurde",
        "wird",
        "ist",
        "hat"
      ],
      "correct": 0,
      "explanationDe": "Historisches Datum -> Präteritum 'wurde'.",
      "explanationEn": "Historical date -> 'wurde'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q36",
      "type": "gap_fill",
      "prompt": "Das Auto [ ... ] gewaschen, es glänzt wie neu.",
      "sub": "Setze die passende Form ein",
      "options": [
        "ist",
        "wird",
        "wurde",
        "worden"
      ],
      "correct": 0,
      "explanationDe": "Zustandspassiv mit 'ist gewaschen'.",
      "explanationEn": "State passive with 'ist gewaschen'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q37",
      "type": "gap_fill",
      "prompt": "Die Gäste [ ... ] vom Hotelier herzlich begrüßt.",
      "sub": "Setze die passende Form ein",
      "options": [
        "wurden",
        "wurde",
        "worden",
        "wird"
      ],
      "correct": 0,
      "explanationDe": "Plural Subjekt im Präteritum -> 'wurden'.",
      "explanationEn": "Plural simple past -> 'wurden'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q38",
      "type": "gap_fill",
      "prompt": "Wegen der Bauarbeiten [ ... ] der Verkehr umgeleitet.",
      "sub": "Setze die passende Form ein",
      "options": [
        "wird",
        "wurde",
        "worden",
        "ist"
      ],
      "correct": 0,
      "explanationDe": "Singular Präsens Passiv -> 'wird umgeleitet'.",
      "explanationEn": "Singular present passive -> 'wird'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q39",
      "type": "gap_fill",
      "prompt": "Die Blumen müssen jeden zweiten Tag gegossen [ ... ].",
      "sub": "Setze die passende Form ein",
      "options": [
        "werden",
        "worden",
        "geworden",
        "sein"
      ],
      "correct": 0,
      "explanationDe": "Infinitiv nach Modalverb -> 'werden'.",
      "explanationEn": "Infinitive after modal -> 'werden'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q40",
      "type": "gap_fill",
      "prompt": "Das Problem ist gelöst [ ... ].",
      "sub": "Setze die passende Form ein",
      "options": [
        "worden",
        "geworden",
        "werden",
        "sein"
      ],
      "correct": 0,
      "explanationDe": "Perfekt Passiv mit 'ist gelöst worden'.",
      "explanationEn": "Perfekt passive -> 'worden'.",
      "rule": "Lückentext: Passiv"
    },
    {
      "id": "pas_q41",
      "type": "sentence_translation",
      "prompt": "Translate: 'The car is being repaired.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Das Auto wird repariert.",
        "Das Auto ist repariert.",
        "Das Auto wurde repariert.",
        "Das Auto wird reparieren."
      ],
      "correct": 0,
      "explanationDe": "Präsens Vorgangspassiv = 'wird repariert'.",
      "explanationEn": "Present process passive = 'wird repariert'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q42",
      "type": "sentence_translation",
      "prompt": "Translate: 'The house was built in 1980.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Das Haus wurde 1980 gebaut.",
        "Das Haus ist 1980 gebaut worden.",
        "Das Haus wird 1980 gebaut.",
        "Das Haus hat 1980 gebaut."
      ],
      "correct": 0,
      "explanationDe": "Präteritum Passiv = 'wurde gebaut'.",
      "explanationEn": "Simple past passive = 'wurde gebaut'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q43",
      "type": "sentence_translation",
      "prompt": "Translate: 'The letters have been sent.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Die Briefe sind gesendet worden.",
        "Die Briefe wurden gesendet worden.",
        "Die Briefe haben gesendet worden.",
        "Die Briefe sind gesendet geworden."
      ],
      "correct": 0,
      "explanationDe": "Perfekt Passiv Plural = 'sind gesendet worden'.",
      "explanationEn": "Perfekt passive plural = 'sind gesendet worden'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q44",
      "type": "sentence_translation",
      "prompt": "Translate: 'The window is open.' (state)",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Das Fenster ist geöffnet.",
        "Das Fenster wird geöffnet.",
        "Das Fenster wurde geöffnet.",
        "Das Fenster ist geöffnet worden."
      ],
      "correct": 0,
      "explanationDe": "Zustandspassiv beschreibt den aktuellen Zustand = 'ist geöffnet'.",
      "explanationEn": "State passive describes the condition = 'ist geöffnet'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q45",
      "type": "sentence_translation",
      "prompt": "Translate: 'This bill must be paid today.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Diese Rechnung muss heute bezahlt werden.",
        "Diese Rechnung wird heute bezahlt müssen.",
        "Diese Rechnung muss heute bezahlt worden.",
        "Diese Rechnung hat heute bezahlt werden."
      ],
      "correct": 0,
      "explanationDe": "Passiv mit Modalverb = 'muss ... bezahlt werden'.",
      "explanationEn": "Passive with modal verb = 'muss ... bezahlt werden'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q46",
      "type": "sentence_translation",
      "prompt": "Translate: 'He was operated on by the doctor.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Er wurde vom Arzt operiert.",
        "Er wurde durch den Arzt operiert.",
        "Er ist vom Arzt operiert.",
        "Er hat vom Arzt operiert."
      ],
      "correct": 0,
      "explanationDe": "Handelnde Person = 'vom Arzt' ('von' + Dat).",
      "explanationEn": "Human agent = 'vom Arzt'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q47",
      "type": "sentence_translation",
      "prompt": "Translate: 'The trees were destroyed by the storm.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Die Bäume wurden durch den Sturm zerstört.",
        "Die Bäume wurden vom Sturm zerstört.",
        "Die Bäume sind durch den Sturm zerstört.",
        "Die Bäume haben durch den Sturm zerstört."
      ],
      "correct": 0,
      "explanationDe": "Naturkraft / Ursache = 'durch den Sturm'.",
      "explanationEn": "Force of nature = 'durch den Sturm'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q48",
      "type": "sentence_translation",
      "prompt": "Translate: 'German is spoken in Austria.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "In Österreich wird Deutsch gesprochen.",
        "In Österreich ist Deutsch gesprochen.",
        "In Österreich wurde Deutsch gesprochen.",
        "In Österreich hat Deutsch gesprochen."
      ],
      "correct": 0,
      "explanationDe": "Präsens Passiv = 'wird gesprochen'.",
      "explanationEn": "Present passive = 'wird gesprochen'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q49",
      "type": "sentence_translation",
      "prompt": "Translate: 'The museum was renovated last year.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Das Museum wurde letztes Jahr renoviert.",
        "Das Museum wird letztes Jahr renoviert.",
        "Das Museum ist letztes Jahr renoviert.",
        "Das Museum hat letztes Jahr renoviert."
      ],
      "correct": 0,
      "explanationDe": "Präteritum Passiv = 'wurde renoviert'.",
      "explanationEn": "Simple past passive = 'wurde renoviert'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q50",
      "type": "sentence_translation",
      "prompt": "Translate: 'Smoking is not permitted here.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Hier darf nicht geraucht werden.",
        "Hier wird nicht geraucht dürfen.",
        "Hier muss nicht geraucht werden.",
        "Hier kann nicht geraucht worden."
      ],
      "correct": 0,
      "explanationDe": "Unpersönliches Passiv mit 'dürfen' = 'Hier darf nicht geraucht werden'.",
      "explanationEn": "Impersonal passive with 'dürfen'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q51",
      "type": "sentence_translation",
      "prompt": "Translate: 'The room has already been cleaned.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Das Zimmer ist schon geputzt worden.",
        "Das Zimmer wurde schon geputzt worden.",
        "Das Zimmer ist schon geputzt geworden.",
        "Das Zimmer hat schon geputzt werden."
      ],
      "correct": 0,
      "explanationDe": "Perfekt Passiv = 'ist geputzt worden'.",
      "explanationEn": "Perfekt passive = 'ist geputzt worden'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q52",
      "type": "sentence_translation",
      "prompt": "Translate: 'The cake is eaten fresh.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Der Kuchen wird frisch gegessen.",
        "Der Kuchen ist frisch gegessen.",
        "Der Kuchen wurde frisch gegessen.",
        "Der Kuchen hat frisch gegessen."
      ],
      "correct": 0,
      "explanationDe": "Präsens Passiv = 'wird gegessen'.",
      "explanationEn": "Present passive = 'wird gegessen'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q53",
      "type": "sentence_translation",
      "prompt": "Translate: 'The tickets could not be printed.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Die Tickets konnten nicht gedruckt werden.",
        "Die Tickets wurden nicht gedruckt können.",
        "Die Tickets konnten nicht gedruckt worden.",
        "Die Tickets haben nicht gedruckt werden können."
      ],
      "correct": 0,
      "explanationDe": "Präteritum Modalverb im Passiv = 'konnten ... gedruckt werden'.",
      "explanationEn": "Past modal passive = 'konnten ... gedruckt werden'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q54",
      "type": "sentence_translation",
      "prompt": "Translate: 'All questions were answered.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Alle Fragen wurden beantwortet.",
        "Alle Fragen wurde beantwortet.",
        "Alle Fragen sind beantwortet worden.",
        "Alle Fragen werden beantwortet."
      ],
      "correct": 0,
      "explanationDe": "Plural Präteritum = 'wurden beantwortet'.",
      "explanationEn": "Plural past = 'wurden beantwortet'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q55",
      "type": "sentence_translation",
      "prompt": "Translate: 'The shop is closed on Sundays.' (state)",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Das Geschäft ist sonntags geschlossen.",
        "Das Geschäft wird sonntags geschlossen.",
        "Das Geschäft wurde sonntags geschlossen.",
        "Das Geschäft ist sonntags geschlossen worden."
      ],
      "correct": 0,
      "explanationDe": "Zustandspassiv = 'ist geschlossen'.",
      "explanationEn": "State passive = 'ist geschlossen'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q56",
      "type": "sentence_translation",
      "prompt": "Translate: 'A new stadium is being built.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Ein neues Stadion wird gebaut.",
        "Ein neues Stadion ist gebaut.",
        "Ein neues Stadion wurde gebaut.",
        "Ein neues Stadion hat gebaut."
      ],
      "correct": 0,
      "explanationDe": "Präsens Vorgangspassiv = 'wird gebaut'.",
      "explanationEn": "Present passive = 'wird gebaut'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q57",
      "type": "sentence_translation",
      "prompt": "Translate: 'The keys were found in the park.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Die Schlüssel wurden im Park gefunden.",
        "Die Schlüssel wurde im Park gefunden.",
        "Die Schlüssel sind im Park gefunden worden.",
        "Die Schlüssel werden im Park gefunden."
      ],
      "correct": 0,
      "explanationDe": "Plural Präteritum Passiv = 'wurden gefunden'.",
      "explanationEn": "Plural past passive = 'wurden gefunden'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q58",
      "type": "sentence_translation",
      "prompt": "Translate: 'The homework should be handed in on Monday.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Die Hausaufgabe soll am Montag abgegeben werden.",
        "Die Hausaufgabe wird am Montag abgegeben sollen.",
        "Die Hausaufgabe soll am Montag abgegeben worden.",
        "Die Hausaufgabe hat am Montag abgegeben werden."
      ],
      "correct": 0,
      "explanationDe": "Modalverb 'sollen' im Passiv = 'soll ... abgegeben werden'.",
      "explanationEn": "Modal passive with 'sollen'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q59",
      "type": "sentence_translation",
      "prompt": "Translate: 'The luggage is loaded onto the plane.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Das Gepäck wird ins Flugzeug geladen.",
        "Das Gepäck ist ins Flugzeug geladen.",
        "Das Gepäck wurde ins Flugzeug geladen.",
        "Das Gepäck wird ins Flugzeug laden."
      ],
      "correct": 0,
      "explanationDe": "Präsens Vorgangspassiv = 'wird geladen'.",
      "explanationEn": "Present passive = 'wird geladen'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q60",
      "type": "sentence_translation",
      "prompt": "Translate: 'The thief was arrested by the police.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Der Dieb wurde von der Polizei verhaftet.",
        "Der Dieb wurde durch die Polizei verhaftet.",
        "Der Dieb ist von der Polizei verhaftet.",
        "Der Dieb hat von der Polizei verhaftet."
      ],
      "correct": 0,
      "explanationDe": "Handelnde Personen/Institution = 'von der Polizei'.",
      "explanationEn": "Agent = 'von der Polizei'.",
      "rule": "Satzübersetzung Passiv"
    },
    {
      "id": "pas_q61",
      "type": "word_order",
      "prompt": "Arrange the passive sentence:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Das",
        "Auto",
        "wird",
        "heute",
        "repariert"
      ],
      "correctOrder": "Das Auto wird heute repariert",
      "explanationDe": "Subjekt + 'wird' (Pos 2) + Zeitangabe + Partizip II am Ende.",
      "explanationEn": "Subject + 'wird' + time + participle at end.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q62",
      "type": "word_order",
      "prompt": "Arrange the past passive sentence:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Das",
        "Haus",
        "wurde",
        "letztes",
        "Jahr",
        "renoviert"
      ],
      "correctOrder": "Das Haus wurde letztes Jahr renoviert",
      "explanationDe": "Subjekt + 'wurde' + Zeitangabe + Partizip II am Ende.",
      "explanationEn": "Subject + 'wurde' + time + participle at end.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q63",
      "type": "word_order",
      "prompt": "Arrange the modal passive sentence:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Die",
        "Rechnung",
        "muss",
        "sofort",
        "bezahlt",
        "werden"
      ],
      "correctOrder": "Die Rechnung muss sofort bezahlt werden",
      "explanationDe": "Subjekt + 'muss' + Adverb + Partizip II + Infinitiv 'werden' am Satzende.",
      "explanationEn": "Subject + modal + adverb + participle + 'werden'.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q64",
      "type": "word_order",
      "prompt": "Arrange the Perfekt passive sentence:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Der",
        "Brief",
        "ist",
        "gestern",
        "abgeschickt",
        "worden"
      ],
      "correctOrder": "Der Brief ist gestern abgeschickt worden",
      "explanationDe": "Subjekt + 'ist' + Zeitangabe + Partizip II + 'worden' am Ende.",
      "explanationEn": "Subject + 'ist' + time + participle + 'worden'.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q65",
      "type": "word_order",
      "prompt": "Arrange the passive with agent:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Der",
        "Patient",
        "wurde",
        "vom",
        "Arzt",
        "untersucht"
      ],
      "correctOrder": "Der Patient wurde vom Arzt untersucht",
      "explanationDe": "Subjekt + 'wurde' + Urheber 'vom Arzt' + Partizip II am Ende.",
      "explanationEn": "Subject + 'wurde' + agent + participle at end.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q66",
      "type": "word_order",
      "prompt": "Arrange the passive with cause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Das",
        "Dach",
        "wurde",
        "durch",
        "den",
        "Sturm",
        "beschädigt"
      ],
      "correctOrder": "Das Dach wurde durch den Sturm beschädigt",
      "explanationDe": "Subjekt + 'wurde' + 'durch den Sturm' + Partizip II.",
      "explanationEn": "Subject + 'wurde' + cause + participle.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q67",
      "type": "word_order",
      "prompt": "Arrange the plural present passive:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Hier",
        "werden",
        "jeden",
        "Tag",
        "frische",
        "Brötchen",
        "gebacken"
      ],
      "correctOrder": "Hier werden jeden Tag frische Brötchen gebacken",
      "explanationDe": "Ortsangabe + 'werden' + Zeitangabe + Subjekt + Partizip II.",
      "explanationEn": "Location + 'werden' + time + subject + participle.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q68",
      "type": "word_order",
      "prompt": "Arrange the state passive:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Die",
        "Geschäfte",
        "sind",
        "sonntags",
        "geschlossen"
      ],
      "correctOrder": "Die Geschäfte sind sonntags geschlossen",
      "explanationDe": "Subjekt + 'sind' + Zeitangabe + Partizip II als Zustand.",
      "explanationEn": "Subject + 'sind' + time + participle.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q69",
      "type": "word_order",
      "prompt": "Arrange the passive prohibition:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Hier",
        "darf",
        "nicht",
        "fotografiert",
        "werden"
      ],
      "correctOrder": "Hier darf nicht fotografiert werden",
      "explanationDe": "Ortsangabe + 'darf' + Negation + Partizip II + 'werden'.",
      "explanationEn": "Location + 'darf' + not + participle + 'werden'.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q70",
      "type": "word_order",
      "prompt": "Arrange the subordinate clause in passive:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "weil",
        "die",
        "Straße",
        "gesperrt",
        "ist"
      ],
      "correctOrder": "weil die Straße gesperrt ist",
      "explanationDe": "'weil' + Subjekt + Partizip II + Hilfsverb 'ist' am Satzende.",
      "explanationEn": "'weil' + subject + participle + verb 'ist' at end.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q71",
      "type": "word_order",
      "prompt": "Arrange the past perfect passive subordinate clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "nachdem",
        "der",
        "Vertrag",
        "unterschrieben",
        "worden",
        "war"
      ],
      "correctOrder": "nachdem der Vertrag unterschrieben worden war",
      "explanationDe": "'nachdem' + Subjekt + Partizip II + 'worden war' am Ende.",
      "explanationEn": "'nachdem' + subject + participle + 'worden war'.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q72",
      "type": "word_order",
      "prompt": "Arrange the plural past passive:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Die",
        "Fenster",
        "wurden",
        "gestern",
        "geputzt"
      ],
      "correctOrder": "Die Fenster wurden gestern geputzt",
      "explanationDe": "Plural Subjekt + 'wurden' + Zeitangabe + Partizip II.",
      "explanationEn": "Plural subject + 'wurden' + time + participle.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q73",
      "type": "word_order",
      "prompt": "Arrange the passive recommendation:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Das",
        "Gemüse",
        "sollte",
        "frisch",
        "gekocht",
        "werden"
      ],
      "correctOrder": "Das Gemüse sollte frisch gekocht werden",
      "explanationDe": "Subjekt + Konjunktiv II Modalverb + Adverb + Partizip II + 'werden'.",
      "explanationEn": "Subject + modal + adverb + participle + 'werden'.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q74",
      "type": "word_order",
      "prompt": "Arrange the passive with 'können':",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Das",
        "Problem",
        "kann",
        "schnell",
        "gelöst",
        "werden"
      ],
      "correctOrder": "Das Problem kann schnell gelöst werden",
      "explanationDe": "Subjekt + 'kann' + Adverb + Partizip II + 'werden'.",
      "explanationEn": "Subject + 'kann' + adverb + participle + 'werden'.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q75",
      "type": "word_order",
      "prompt": "Arrange the passive Perfekt question:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Wann",
        "sind",
        "die",
        "Koffer",
        "gebracht",
        "worden"
      ],
      "correctOrder": "Wann sind die Koffer gebracht worden",
      "explanationDe": "Fragewort + 'sind' + Subjekt + Partizip II + 'worden'.",
      "explanationEn": "Question word + 'sind' + subject + participle + 'worden'.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q76",
      "type": "word_order",
      "prompt": "Arrange the present passive with location:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "In",
        "Deutschland",
        "wird",
        "sehr",
        "viel",
        "Bier",
        "getrunken"
      ],
      "correctOrder": "In Deutschland wird sehr viel Bier getrunken",
      "explanationDe": "Ortsangabe + 'wird' + Subjekt 'sehr viel Bier' + Partizip II.",
      "explanationEn": "Location + 'wird' + subject + participle.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q77",
      "type": "word_order",
      "prompt": "Arrange the passive command with 'müssen':",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Alle",
        "Dokumente",
        "müssen",
        "heute",
        "abgegeben",
        "werden"
      ],
      "correctOrder": "Alle Dokumente müssen heute abgegeben werden",
      "explanationDe": "Subjekt + 'müssen' + Zeitangabe + Partizip II + 'werden'.",
      "explanationEn": "Subject + 'müssen' + time + participle + 'werden'.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q78",
      "type": "word_order",
      "prompt": "Arrange the passive with 'von':",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Das",
        "Buch",
        "wurde",
        "von",
        "ihm",
        "geschrieben"
      ],
      "correctOrder": "Das Buch wurde von ihm geschrieben",
      "explanationDe": "Subjekt + 'wurde' + Urheber 'von ihm' + Partizip II.",
      "explanationEn": "Subject + 'wurde' + agent + participle.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q79",
      "type": "word_order",
      "prompt": "Arrange the state passive with 'schon':",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "Das",
        "Essen",
        "ist",
        "schon",
        "fertig",
        "gekocht"
      ],
      "correctOrder": "Das Essen ist schon fertig gekocht",
      "explanationDe": "Subjekt + 'ist' + Adverb + Partizip II.",
      "explanationEn": "Subject + 'ist' + adverb + participle.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q80",
      "type": "word_order",
      "prompt": "Arrange the passive relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "das",
        "gestern",
        "eröffnet",
        "wurde"
      ],
      "correctOrder": "das gestern eröffnet wurde",
      "explanationDe": "Relativpronomen + Zeitangabe + Partizip II + 'wurde' am Ende.",
      "explanationEn": "Relative pronoun + time + participle + 'wurde'.",
      "rule": "Satzbau im Passiv"
    },
    {
      "id": "pas_q81",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Das Buch [ist] [gestern] [gekauft] [geworden].",
      "segments": [
        {
          "text": "Das Buch ist",
          "isError": false
        },
        {
          "text": "gestern",
          "isError": false
        },
        {
          "text": "gekauft",
          "isError": false
        },
        {
          "text": "geworden.",
          "isError": true,
          "correction": "worden"
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Im Perfekt Passiv heißt es immer 'worden' (ohne Vorsilbe ge-!).",
      "explanationEn": "In the Perfekt passive, always use 'worden' (never 'geworden').",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q82",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Die Fenster [wird] [jeden Tag] [von der Putzkraft] [geputzt].",
      "segments": [
        {
          "text": "Die Fenster",
          "isError": false
        },
        {
          "text": "wird",
          "isError": true,
          "correction": "werden"
        },
        {
          "text": "jeden Tag",
          "isError": false
        },
        {
          "text": "geputzt.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'Die Fenster' ist Plural -> finite Verbform muss 'werden' sein.",
      "explanationEn": "Plural subject requires plural verb 'werden'.",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q83",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Der Patient [wurde] [durch den Arzt] [persönlich] [operiert].",
      "segments": [
        {
          "text": "Der Patient wurde",
          "isError": false
        },
        {
          "text": "durch den Arzt",
          "isError": true,
          "correction": "vom Arzt"
        },
        {
          "text": "persönlich",
          "isError": false
        },
        {
          "text": "operiert.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Für handelnde Personen steht 'von' + Dativ ('vom Arzt'), nicht 'durch'.",
      "explanationEn": "For personal agents use 'von' + dative, not 'durch'.",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q84",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Das Auto [muss] [sofort] [repariert] [worden].",
      "segments": [
        {
          "text": "Das Auto muss",
          "isError": false
        },
        {
          "text": "sofort",
          "isError": false
        },
        {
          "text": "repariert",
          "isError": false
        },
        {
          "text": "worden.",
          "isError": true,
          "correction": "werden"
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Nach einem Modalverb ('muss') steht der Infinitiv 'werden' (nicht 'worden').",
      "explanationEn": "After a modal verb, use infinitive 'werden'.",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q85",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Die Brücke [hat] [letztes Jahr] [gebaut] [worden].",
      "segments": [
        {
          "text": "Die Brücke",
          "isError": false
        },
        {
          "text": "hat",
          "isError": true,
          "correction": "ist"
        },
        {
          "text": "letztes Jahr",
          "isError": false
        },
        {
          "text": "gebaut worden.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Perfekt Passiv bildet man immer mit dem Hilfsverb 'sein' ('ist gebaut worden').",
      "explanationEn": "Perfekt passive always uses auxiliary 'sein' ('ist').",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q86",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Hier [wird] [Deutsch und Englisch] [gesprochen].",
      "segments": [
        {
          "text": "Hier",
          "isError": false
        },
        {
          "text": "wird",
          "isError": true,
          "correction": "werden"
        },
        {
          "text": "Deutsch und Englisch",
          "isError": false
        },
        {
          "text": "gesprochen.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'Deutsch und Englisch' bilden ein Pluralsubjekt -> 'werden gesprochen'.",
      "explanationEn": "Compound subject -> plural verb 'werden'.",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q87",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Das Geschäft [ist] [jeden Abend] [um 20 Uhr] [geschlossen worden].",
      "segments": [
        {
          "text": "Das Geschäft",
          "isError": false
        },
        {
          "text": "ist ... geschlossen worden",
          "isError": true,
          "correction": "wird ... geschlossen"
        },
        {
          "text": "jeden Abend",
          "isError": false
        },
        {
          "text": "um 20 Uhr.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Regelmäßige Handlung in der Gegenwart erfordert Präsens Passiv ('wird geschlossen').",
      "explanationEn": "Habitual action in present requires 'wird geschlossen'.",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q88",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Die Suppe [wurde] [zu viel Salz] [gekocht].",
      "segments": [
        {
          "text": "Die Suppe wurde",
          "isError": false
        },
        {
          "text": "zu viel Salz",
          "isError": true,
          "correction": "mit zu viel Salz"
        },
        {
          "text": "gekocht.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Präpositionale Ergänzung 'mit zu viel Salz' fehlt.",
      "explanationEn": "Preposition 'mit' is required.",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q89",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Die Dokumente [wurden] [gestern] [verschickt] [gewesen].",
      "segments": [
        {
          "text": "Die Dokumente",
          "isError": false
        },
        {
          "text": "wurden",
          "isError": false
        },
        {
          "text": "gestern verschickt",
          "isError": false
        },
        {
          "text": "gewesen.",
          "isError": true,
          "correction": "[entfernen: nur 'wurden verschickt']"
        },
        {
          "text": "",
          "isError": false
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Im Präteritum Passiv steht kein 'gewesen' ('wurden verschickt').",
      "explanationEn": "No 'gewesen' in simple past passive.",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q90",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Das Haus [wurde] [von dem Sturm] [beschädigt].",
      "segments": [
        {
          "text": "Das Haus wurde",
          "isError": false
        },
        {
          "text": "von dem Sturm",
          "isError": true,
          "correction": "durch den Sturm"
        },
        {
          "text": "beschädigt.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Bei Naturkräften/Ursachen verwendet man 'durch' + Akkusativ.",
      "explanationEn": "For forces of nature use 'durch' + accusative.",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q91",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Hier [darf] [nicht] [rauchen] [werden].",
      "segments": [
        {
          "text": "Hier darf",
          "isError": false
        },
        {
          "text": "nicht",
          "isError": false
        },
        {
          "text": "rauchen",
          "isError": true,
          "correction": "geraucht"
        },
        {
          "text": "werden.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Passiv verlangt Partizip II ('geraucht werden', nicht Infinitiv 'rauchen').",
      "explanationEn": "Passive requires Partizip II ('geraucht').",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q92",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Die Rechnungen [sind] [bereits] [bezahlt] [werden].",
      "segments": [
        {
          "text": "Die Rechnungen sind",
          "isError": false
        },
        {
          "text": "bereits bezahlt",
          "isError": false
        },
        {
          "text": "werden.",
          "isError": true,
          "correction": "worden"
        },
        {
          "text": "",
          "isError": false
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Perfekt Passiv mit 'sind' verlangt 'worden' (nicht 'werden').",
      "explanationEn": "Perfekt passive requires 'worden' after 'sind'.",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q93",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Der Brief [wird] [gestern] [abgeschickt].",
      "segments": [
        {
          "text": "Der Brief",
          "isError": false
        },
        {
          "text": "wird",
          "isError": true,
          "correction": "wurde"
        },
        {
          "text": "gestern",
          "isError": false
        },
        {
          "text": "abgeschickt.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'gestern' verlangt Präteritum ('wurde') statt Präsens ('wird').",
      "explanationEn": "'gestern' requires past tense 'wurde'.",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q94",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Die Einladung [hat] [vom Chef] [geschrieben].",
      "segments": [
        {
          "text": "Die Einladung",
          "isError": false
        },
        {
          "text": "hat",
          "isError": true,
          "correction": "wurde"
        },
        {
          "text": "vom Chef",
          "isError": false
        },
        {
          "text": "geschrieben.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Passiv verlangt 'wurde' (nicht 'hat', da die Einladung nicht selbst schreibt).",
      "explanationEn": "Passive requires 'wurde'.",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q95",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Das Zimmer [ist] [jeden Morgen] [geputzt].",
      "segments": [
        {
          "text": "Das Zimmer",
          "isError": false
        },
        {
          "text": "ist",
          "isError": true,
          "correction": "wird"
        },
        {
          "text": "jeden Morgen",
          "isError": false
        },
        {
          "text": "geputzt.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Wiederholte Vorgangshandlung verlangt Vorgangspassiv 'wird geputzt'.",
      "explanationEn": "Repeated process requires 'wird'.",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q96",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Alle Fragen [konnten] [nicht] [beantwortet] [worden].",
      "segments": [
        {
          "text": "Alle Fragen konnten",
          "isError": false
        },
        {
          "text": "nicht beantwortet",
          "isError": false
        },
        {
          "text": "worden.",
          "isError": true,
          "correction": "werden"
        },
        {
          "text": "",
          "isError": false
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Nach Modalverb im Präteritum ('konnten') steht Infinitiv 'werden'.",
      "explanationEn": "After modal verb use infinitive 'werden'.",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q97",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Das Auto [wurde] [reparieren] [lassen].",
      "segments": [
        {
          "text": "Das Auto wurde",
          "isError": false
        },
        {
          "text": "reparieren lassen.",
          "isError": true,
          "correction": "repariert (oder: Er ließ das Auto reparieren)"
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Im Passiv steht das Partizip II 'repariert'.",
      "explanationEn": "Partizip II required.",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q98",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Die Suppe [wird] [gerade] [kochen].",
      "segments": [
        {
          "text": "Die Suppe wird",
          "isError": false
        },
        {
          "text": "gerade",
          "isError": false
        },
        {
          "text": "kochen.",
          "isError": true,
          "correction": "gekocht"
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Vorgangspassiv verlangt Partizip II ('gekocht').",
      "explanationEn": "Requires participle II 'gekocht'.",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q99",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Die Gäste [wurden] [herzlich] [begrüßen].",
      "segments": [
        {
          "text": "Die Gäste wurden",
          "isError": false
        },
        {
          "text": "herzlich",
          "isError": false
        },
        {
          "text": "begrüßen.",
          "isError": true,
          "correction": "begrüßt"
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Partizip II von 'begrüßen' lautet 'begrüßt'.",
      "explanationEn": "Participle is 'begrüßt'.",
      "rule": "Fehlersuche Passiv"
    },
    {
      "id": "pas_q100",
      "type": "error_correction",
      "prompt": "Finde den Grammatikfehler im Passivsatz:",
      "sentence": "Der Vertrag [wird] [gestern] [unterschrieben] [worden].",
      "segments": [
        {
          "text": "Der Vertrag",
          "isError": false
        },
        {
          "text": "wird",
          "isError": true,
          "correction": "ist"
        },
        {
          "text": "gestern",
          "isError": false
        },
        {
          "text": "unterschrieben worden.",
          "isError": false
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Perfekt Passiv mit 'worden' bildet man mit 'ist' (nicht 'wird').",
      "explanationEn": "Perfekt passive with 'worden' uses 'ist'.",
      "rule": "Fehlersuche Passiv"
    }
  ]
};
