// B1 German Grammar Topic: Der Genitiv, Possessivattribute & Eigennamen (Thema P: Nomen)

export const GENITIV_TOPIC = {
  id: 'genitiv',
  exportName: 'GENITIV_TOPIC',
  titleDe: '18. Der Genitiv, Possessivattribute & Eigennamen',
  titleEn: '18. The Genitive Case, Possession & Proper Names',
  icon: '👑',
  badge: 'Genitiv: des/der + -(e)s | Eigennamen auf -s',
  summaryDe: 'Der Genitiv zeigt Besitz und Zugehörigkeit. Er ersetzt die umgangssprachliche Struktur „von + Dativ“. Maskulin und Neutrum erhalten die Endung -(e)s, Feminin und Plural keine Nomenendung.',
  summaryEn: 'The Genitive case shows possession and association, replacing colloquial „von + Dativ“. Masculine and neuter nouns take -(e)s; feminine and plural take „der“ with no noun ending.',
  cheatSheet: {
    rule: 'Maskulin & Neutrum: des / eines + Nomen-(e)s | Feminin & Plural: der / einer + Nomen (ohne Endung).',
    keyConnectors: [
      {
        conn: 'Maskulin & Neutrum',
        meaning: 'des Mannes / des Kindes / des Autos / dieses Jahres',
        example: 'Die Farbe des neuen Autos ist dunkelblau.'
      },
      {
        conn: 'Feminin & Plural',
        meaning: 'der Frau / der Mutter / der Kinder / der Eltern',
        example: 'Das Lachen der glücklichen Kinder war laut.'
      },
      {
        conn: 'Eigennamen (Besitz)',
        meaning: 'Name + -s (ohne Apostroph) | Bei s, ß, z, x nur Apostroph',
        example: 'Birgits Schwester besucht Moritz\' Freundin.'
      },
      {
        conn: 'Genitiv-Präpositionen',
        meaning: 'trotz, wegen, während, außerhalb, innerhalb + Genitiv',
        example: 'Trotz des schlechten Wetters machten wir einen Ausflug.'
      }
    ],
    goldenRules: [
      'Goldene Regel 1: Ersetze umgangssprachliches „von + Dativ“ im B1-Schreiben durch den Genitiv („das Auto meines Vaters“ statt „das Auto von meinem Vater“).',
      'Goldene Regel 2: Endet ein Name auf einen s-Laut (s, ß, z, tz, x), wird KEIN s angehängt, sondern nur ein Apostroph (\' ): Felix\' Auto, Moritz\' Freundin, Thomas\' Buch.'
    ]
  },
  questions: [
    {
      id: 'gen_q1',
      type: 'multiple_choice',
      prompt: 'Das Auto ___ Mannes steht direkt vor der Garage.',
      promptEn: 'The car of the man is parked directly in front of the garage.',
      options: ['der', 'dem', 'des', 'den'],
      correct: 'des',
      explanationDe: 'Richtig! Maskulinum im Genitiv verlangt den Artikel „des“ und die Endung -(e)s am Nomen.',
      explanationEn: 'Correct! Masculine nouns take „des“ in the genitive case with an -(e)s ending on the noun.'
    },
    {
      id: 'gen_q2',
      type: 'multiple_choice',
      prompt: 'Die Tasche ___ Mutter liegt auf dem Wohnzimmertisch.',
      promptEn: 'The mother\'s bag is lying on the living room table.',
      options: ['der', 'die', 'des', 'den'],
      correct: 'der',
      explanationDe: 'Richtig! Femininum im Genitiv bildet den Artikel „der“ ohne Endung am Nomen.',
      explanationEn: 'Correct! Feminine nouns take the article „der“ in the genitive case with no suffix on the noun.'
    },
    {
      id: 'gen_q3',
      type: 'multiple_choice',
      prompt: 'Wie lautet die korrekte Genitivform für Moritz (endet auf z)?',
      promptEn: 'What is the correct genitive possessive form for Moritz (ends in z)?',
      options: ['Moritzs Auto', 'Moritz\'s Auto', 'Moritz\' Auto', 'Moritzen Auto'],
      correct: 'Moritz\' Auto',
      explanationDe: 'Richtig! Namen, die auf einen s-Laut (s, ß, z, x) enden, erhalten im Deutschen nur einen Apostroph.',
      explanationEn: 'Correct! Names ending in an s-sound take only an apostrophe without an extra -s in German.'
    },
    {
      id: 'gen_q4',
      type: 'multiple_choice',
      prompt: 'Wie formuliert man „die Nase von seinem Großvater“ gehoben im Genitiv?',
      promptEn: 'How do you formulate „the nose of his grandfather“ formally in the genitive?',
      options: ['die Nase von seinen Großvater', 'die Nase seines Großvaters', 'die Nase seinem Großvater', 'die Nase sein Großvater'],
      correct: 'die Nase seines Großvaters',
      explanationDe: 'Richtig! „von seinem Großvater“ wird im Genitiv zu „seines Großvaters“ umgeformt.',
      explanationEn: 'Correct! „von seinem Großvater“ is transformed into the formal genitive „seines Großvaters“.'
    },
    {
      id: 'gen_q5',
      type: 'multiple_choice',
      prompt: '___ des starken Regens fand das Fußballspiel pünktlich statt.',
      promptEn: 'Despite the heavy rain, the soccer match took place on time.',
      options: ['Wegen', 'Trotz', 'Während', 'Außerhalb'],
      correct: 'Trotz',
      explanationDe: 'Richtig! Die konzessive Präposition „trotz“ verlangt den Genitiv („trotz des Regens“).',
      explanationEn: 'Correct! The concessive preposition „trotz“ requires the genitive case.'
    },
    {
      id: 'gen_q6',
      type: 'gap_fill',
      prompt: 'Die Spielzeuge der lieb___ Kinder lagen im ganzen Zimmer verstreut.',
      promptEn: 'The toys of the lovely children were scattered throughout the room.',
      options: ['en', 'er', 'es', 'em'],
      correct: 'en',
      explanationDe: 'Richtig! Nach bestimmtem Artikel im Genitiv Plural lautet die Adjektivendung immer „-en“.',
      explanationEn: 'Correct! After the definite article in genitive plural, the adjective ending is always „-en“.'
    },
    {
      id: 'gen_q7',
      type: 'gap_fill',
      prompt: 'Wegen eines technisch___ Defekts verzögerte sich der Abflug um zwei Stunden.',
      promptEn: 'Due to a technical defect, departure was delayed by two hours.',
      options: ['en', 'em', 'es', 'er'],
      correct: 'en',
      explanationDe: 'Richtig! Nach unbestimmtem Artikel im Genitiv Maskulinum („eines Defekts“) lautet die Adjektivendung „-en“.',
      explanationEn: 'Correct! In genitive masculine with indefinite article, the adjective takes „-en“.'
    },
    {
      id: 'gen_q8',
      type: 'gap_fill',
      prompt: 'Während des ganz___ Tages schien die Sonne ununterbrochen.',
      promptEn: 'Throughout the entire day, the sun shone without interruption.',
      options: ['en', 'es', 'em', 'er'],
      correct: 'en',
      explanationDe: 'Richtig! „während des ganzen Tages“ steht im Genitiv mit Adjektivendung „-en“.',
      explanationEn: 'Correct! „während des ganzen Tages“ is in the genitive case with the adjective ending „-en“.'
    },
    {
      id: 'gen_q9',
      type: 'gap_fill',
      prompt: 'Der Erfolg ihr___ ersten Buches überraschte die junge Schriftstellerin.',
      promptEn: 'The success of her first book surprised the young author.',
      options: ['es', 'er', 'en', 'em'],
      correct: 'es',
      explanationDe: 'Richtig! Neutrum im Genitiv („das Buch“) verlangt das Possessivpronomen „ihres“.',
      explanationEn: 'Correct! Neuter in genitive takes the possessive ending „-es“ (ihres Buches).'
    },
    {
      id: 'gen_q10',
      type: 'gap_fill',
      prompt: 'Die Meinung mein___ Eltern ist mir in dieser Frage sehr wichtig.',
      promptEn: 'The opinion of my parents is very important to me on this matter.',
      options: ['er', 'en', 'es', 'em'],
      correct: 'er',
      explanationDe: 'Richtig! Plural im Genitiv („die Eltern“) verlangt das Possessivpronomen „meiner“.',
      explanationEn: 'Correct! Plural in the genitive takes „meiner“ (meiner Eltern).'
    },
    {
      id: 'gen_q11',
      type: 'multiple_choice',
      prompt: 'Welche Form bei Eigennamen ist grammatikalisch korrekt?',
      promptEn: 'Which form for proper names is grammatically correct?',
      options: ['Birgits Schwester', 'Birgit\'s Schwester', 'der Birgit ihre Schwester', 'Birgiten Schwester'],
      correct: 'Birgits Schwester',
      explanationDe: 'Richtig! Im Deutschen wird bei normalen Eigennamen ein -s OHNE Apostroph angehängt.',
      explanationEn: 'Correct! In German, standard proper names take an -s without an apostrophe (Birgits Schwester).'
    },
    {
      id: 'gen_q12',
      type: 'multiple_choice',
      prompt: 'Innerhalb ___ Jahreszeit ändern sich die Temperaturen spürbar.',
      promptEn: 'Within this season, temperatures change noticeably.',
      options: ['dieser', 'dieses', 'diese', 'diesem'],
      correct: 'dieser',
      explanationDe: 'Richtig! „die Jahreszeit“ ist feminin, im Genitiv nach „innerhalb“ heißt es „dieser Jahreszeit“.',
      explanationEn: 'Correct! „die Jahreszeit“ is feminine; in genitive after „innerhalb“ it is „dieser Jahreszeit“.'
    },
    {
      id: 'gen_q13',
      type: 'sentence_translation',
      prompt: 'Translate: "The roof of the old house was damaged."',
      promptEn: 'The roof of the old house was damaged.',
      correct: 'Das Dach des alten Hauses wurde beschädigt.',
      segments: [
        { text: 'Das Dach', correct: true },
        { text: 'des alten Hauses', correct: true },
        { text: 'wurde', correct: true },
        { text: 'beschädigt.', correct: true }
      ],
      options: [
        'Das Dach von dem alten Haus wurde beschädigt.',
        'Das Dach des alten Hauses wurde beschädigt.',
        'Das Dach dem alten Haus wurde beschädigt.',
        'Das Dach des altes Haus wurde beschädigt.'
      ],
      explanationDe: 'Richtig! „des alten Hauses“ ist der korrekte Genitiv für das neutrale Nomen Haus.',
      explanationEn: 'Correct! „des alten Hauses“ is the formal genitive construction for neuter nouns.'
    },
    {
      id: 'gen_q14',
      type: 'sentence_translation',
      prompt: 'Translate: "Despite the high costs, they bought the apartment."',
      promptEn: 'Despite the high costs, they bought the apartment.',
      correct: 'Trotz der hohen Kosten kauften sie die Wohnung.',
      segments: [
        { text: 'Trotz', correct: true },
        { text: 'der hohen Kosten', correct: true },
        { text: 'kauften sie', correct: true },
        { text: 'die Wohnung.', correct: true }
      ],
      options: [
        'Trotz die hohen Kosten kauften sie die Wohnung.',
        'Trotz der hohen Kosten kauften sie die Wohnung.',
        'Wegen den hohen Kosten kauften sie die Wohnung.',
        'Trotz des hohen Kostens kauften sie die Wohnung.'
      ],
      explanationDe: 'Richtig! „trotz“ verlangt den Genitiv Plural („der hohen Kosten“).',
      explanationEn: 'Correct! „trotz“ governs the genitive plural: „der hohen Kosten“.'
    },
    {
      id: 'gen_q15',
      type: 'sentence_translation',
      prompt: 'Translate: "Felix\'s car is parked outside the city."',
      promptEn: 'Felix\'s car is parked outside the city.',
      correct: 'Felix\' Auto steht außerhalb der Stadt.',
      segments: [
        { text: 'Felix\' Auto', correct: true },
        { text: 'steht', correct: true },
        { text: 'außerhalb der Stadt.', correct: true }
      ],
      options: [
        'Felixs Auto steht außerhalb von die Stadt.',
        'Felix\' Auto steht außerhalb der Stadt.',
        'Das Auto von Felix steht außerhalb die Stadt.',
        'Felix\'s Auto steht außerhalb dem Stadt.'
      ],
      explanationDe: 'Richtig! Felix endet auf x (Apostroph) und außerhalb verlangt den Genitiv („der Stadt“).',
      explanationEn: 'Correct! Felix ends in x (takes apostrophe) and außerhalb requires genitive („der Stadt“).'
    },
    {
      id: 'gen_q16',
      type: 'word_order',
      prompt: 'Welche Wortstellung im Genitiv ist grammatikalisch korrekt?',
      promptEn: 'Which word order in the genitive is grammatically correct?',
      options: [
        'Wegen des schlechten Wetters sagten wir den Ausflug ab.',
        'Wegen dem schlechten Wetter sagten wir den Ausflug ab.',
        'Des schlechten Wetters wegen wir sagten den Ausflug ab.',
        'Wegen des schlecht Wetters sagten den Ausflug wir ab.'
      ],
      correct: 'Wegen des schlechten Wetters sagten wir den Ausflug ab.',
      explanationDe: 'Richtig! Im Standarddeutschen verlangt „wegen“ den Genitiv mit Verb an Position 2.',
      explanationEn: 'Correct! Standard German requires genitive after „wegen“ with verb in position 2.'
    },
    {
      id: 'gen_q17',
      type: 'word_order',
      prompt: 'Welche Satzstellung mit Genitivattribut ist standardsprachlich richtig?',
      promptEn: 'Which sentence structure with a genitive attribute is standard German?',
      options: [
        'Die Qualität der Produkte hat sich spürbar verbessert.',
        'Die Qualität von die Produkte hat sich spürbar verbessert.',
        'Der Produkte Qualität hat sich spürbar verbessert.',
        'Die Qualität der Produkte sich hat spürbar verbessert.'
      ],
      correct: 'Die Qualität der Produkte hat sich spürbar verbessert.',
      explanationDe: 'Richtig! Das Genitivattribut „der Produkte“ folgt direkt auf das Bezugswort „Qualität“.',
      explanationEn: 'Correct! The genitive attribute „der Produkte“ follows directly after „Qualität“.'
    },
    {
      id: 'gen_q18',
      type: 'error_correction',
      prompt: 'Finde den Fehler: „Die Farbe von dem neuen Kleid gefällt mir sehr gut.“',
      promptEn: 'Spot the error: „Die Farbe von dem neuen Kleid gefällt mir sehr gut.“',
      options: [
        'Ersetze „von dem neuen Kleid“ durch „des neuen Kleides“',
        'Ersetze „gefällt“ durch „gefallen“',
        'Ersetze „mir“ durch „mich“',
        'Ersetze „Die Farbe“ durch „Der Farbe“'
      ],
      correct: 'Ersetze „von dem neuen Kleid“ durch „des neuen Kleides“',
      explanationDe: 'Richtig! Im gehobenen B1-Deutsch ersetzt man „von dem...“ durch den Genitiv „des neuen Kleides“.',
      explanationEn: 'Correct! In formal B1 German, replace „von dem...“ with the genitive „des neuen Kleides“.'
    },
    {
      id: 'gen_q19',
      type: 'error_correction',
      prompt: 'Finde den Fehler: „Thomas\'s neues Fahrrad steht im Fahrradkeller.“',
      promptEn: 'Spot the error: „Thomas\'s neues Fahrrad steht im Fahrradkeller.“',
      options: [
        'Ersetze „Thomas\'s“ durch „Thomas\'“ (kein extra -s nach s-Laut)',
        'Ersetze „neues“ durch „neuem“',
        'Ersetze „steht“ durch „gestanden“',
        'Ersetze „im“ durch „in“'
      ],
      correct: 'Ersetze „Thomas\'s“ durch „Thomas\'“ (kein extra -s nach s-Laut)',
      explanationDe: 'Richtig! Bei Eigennamen, die auf -s enden, wird im Deutschen kein zusätzliches -s angehängt, sondern nur ein Apostroph gesetzt.',
      explanationEn: 'Correct! Names ending in -s take only an apostrophe without an extra -s in German.'
    },
    {
      id: 'gen_q20',
      type: 'error_correction',
      prompt: 'Finde den Fehler: „Trotz dem dichten Nebel fuhr der Kapitän weiter.“',
      promptEn: 'Spot the error: „Trotz dem dichten Nebel fuhr der Kapitän weiter.“',
      options: [
        'Ersetze „dem dichten Nebel“ durch „des dichten Nebels“ (Genitiv)',
        'Ersetze „Trotz“ durch „Wegen“',
        'Ersetze „fuhr“ durch „gefahren“',
        'Ersetze „der Kapitän“ durch „des Kapitäns“'
      ],
      correct: 'Ersetze „dem dichten Nebel“ durch „des dichten Nebels“ (Genitiv)',
      explanationDe: 'Richtig! „Trotz“ verlangt standardsprachlich den Genitiv („trotz des dichten Nebels“).',
      explanationEn: 'Correct! Standard German requires the genitive case after „trotz“.'
    },
    {
      id: 'gen_q21',
      type: 'multiple_choice',
      prompt: 'Die Handlung ___ Films war extrem spannend und mitreißend.',
      promptEn: 'The plot of the movie was extremely exciting and thrilling.',
      options: ['des', 'der', 'dem', 'den'],
      correct: 'des',
      explanationDe: 'Richtig! Maskulinum im Genitiv verlangt „des Films“ (mit Endung -s).',
      explanationEn: 'Correct! Masculine nouns in the genitive take „des Films“.'
    },
    {
      id: 'gen_q22',
      type: 'multiple_choice',
      prompt: 'Außerhalb ___ Öffnungszeiten ist die Arztpraxis geschlossen.',
      promptEn: 'Outside of opening hours, the doctor\'s office is closed.',
      options: ['der', 'die', 'den', 'des'],
      correct: 'der',
      explanationDe: 'Richtig! Plural im Genitiv nach „außerhalb“ lautet „der Öffnungszeiten“.',
      explanationEn: 'Correct! Plural in the genitive after „außerhalb“ is „der Öffnungszeiten“.'
    },
    {
      id: 'gen_q23',
      type: 'multiple_choice',
      prompt: 'Die Reparatur ___ Waschmaschine kostete zweihundert Euro.',
      promptEn: 'The repair of the washing machine cost two hundred euros.',
      options: ['der', 'die', 'den', 'des'],
      correct: 'der',
      explanationDe: 'Richtig! „die Waschmaschine“ ist feminin und nimmt im Genitiv den Artikel „der“.',
      explanationEn: 'Correct! Feminine nouns take the article „der“ in the genitive case.'
    },
    {
      id: 'gen_q24',
      type: 'gap_fill',
      prompt: 'Wegen des stark___ Schneefalls fiel der Unterricht heute aus.',
      promptEn: 'Because of the heavy snowfall, classes were canceled today.',
      options: ['en', 'em', 'es', 'er'],
      correct: 'en',
      explanationDe: 'Richtig! Maskulinum im Genitiv nach bestimmtem Artikel verlangt die Adjektivendung „-en“.',
      explanationEn: 'Correct! Masculine nouns in the genitive take the adjective ending „-en“.'
    },
    {
      id: 'gen_q25',
      type: 'multiple_choice',
      prompt: 'Wie lautet der Genitiv von „dieses Jahr“?',
      promptEn: 'What is the genitive form of „dieses Jahr“?',
      options: ['dieses Jahres', 'dieser Jahre', 'diesem Jahr', 'diesen Jahres'],
      correct: 'dieses Jahres',
      explanationDe: 'Richtig! Neutrum im Genitiv verlangt „dieses Jahres“ mit der Endung -es am Nomen.',
      explanationEn: 'Correct! Neuter nouns in the genitive take „dieses Jahres“ with -(e)s on the noun.'
    }
  ]
};
