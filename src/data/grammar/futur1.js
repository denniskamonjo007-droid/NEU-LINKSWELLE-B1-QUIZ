// B1 German Grammar Topic: Futur I & Vermutungen mit „werden“ (Thema N: Verben)

export const FUTUR1_TOPIC = {
  id: 'futur1',
  exportName: 'FUTUR1_TOPIC',
  titleDe: '19. Futur I & Vermutungen mit „werden“',
  titleEn: '19. Future Tense (Futur I) & Suppositions with „werden“',
  icon: '🚀',
  badge: 'werden + Infinitiv am Satzende',
  summaryDe: 'Das Futur I wird mit dem Hilfsverb „werden“ und dem Infinitiv am Satzende gebildet. Es drückt Pläne, Absichten, feste Versprechen und Vermutungen für Gegenwart und Zukunft aus.',
  summaryEn: 'Futur I is formed with the auxiliary „werden“ + infinitive at sentence end. It expresses future plans, firm promises, and suppositions/assumptions about present or future.',
  cheatSheet: {
    rule: 'Bildung: konjugiertes „werden“ (Pos. 2) + Infinitiv (am Satzende).',
    keyConnectors: [
      {
        conn: 'Zukunft / Pläne',
        meaning: 'werden + Infinitiv',
        example: 'Nächsten Monat werden wir nach Berlin umziehen.'
      },
      {
        conn: 'Vermutung (Gegenwart)',
        meaning: 'werden + wohl/sicher/vielleicht + Infinitiv',
        example: 'Er antwortet nicht; er wird wohl noch schlafen.'
      },
      {
        conn: 'Präsens vs. Futur I',
        meaning: 'Mit Zeitangabe reicht meist Präsens; ohne Zeitangabe Futur I',
        example: 'Morgen fliege ich nach Rom. (Präsens) vs. Ich werde dich vermissen. (Futur I)'
      },
      {
        conn: 'Versprechen & Absichten',
        meaning: 'Feste Zusage für die Zukunft',
        example: 'Ich werde dir morgen ganz bestimmt helfen.'
      }
    ],
    goldenRules: [
      'Goldene Regel 1: Das Hilfsverb „werden“ wird konjugiert (ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden), der Vollverb-Infinitiv steht am Satzende.',
      'Goldene Regel 2: Bei Vermutungen verwendet man oft Signalwörter wie „wohl“, „sicher“, „vermutlich“ oder „wahrscheinlich“ („Er wird wohl krank sein“ = He is probably sick).'
    ]
  },
  questions: [
    {
      id: 'fut_q1',
      type: 'multiple_choice',
      prompt: 'Im nächsten Sommer ___ wir eine Reise nach Skandinavien machen.',
      promptEn: 'Next summer we will take a trip to Scandinavia.',
      options: ['werden', 'wird', 'werdet', 'wirst'],
      correct: 'werden',
      explanationDe: 'Richtig! Das Subjekt ist „wir“, daher lautet die konjugierte Form von werden „werden“.',
      explanationEn: 'Correct! The subject is „wir“, so the conjugated form of werden is „werden“.'
    },
    {
      id: 'fut_q2',
      type: 'multiple_choice',
      prompt: 'Er antwortet nicht auf die Nachricht. Er ___ wohl noch schlafen.',
      promptEn: 'He is not replying to the message. He is probably still sleeping.',
      options: ['wird', 'werde', 'wirst', 'werden'],
      correct: 'wird',
      explanationDe: 'Richtig! In der 3. Person Singular („er“) heißt es „wird“. Hier drückt es eine Vermutung aus.',
      explanationEn: 'Correct! In the 3rd person singular („er“), the form is „wird“ expressing a supposition.'
    },
    {
      id: 'fut_q3',
      type: 'multiple_choice',
      prompt: 'Welche Bedeutung hat der Satz: „Er wird wohl krank sein“?',
      promptEn: 'What does the sentence „Er wird wohl krank sein“ express?',
      options: ['Eine feste Verabredung', 'Eine Vermutung über die Gegenwart', 'Eine Erinnerung an gestern', 'Einen Befehl'],
      correct: 'Eine Vermutung über die Gegenwart',
      explanationDe: 'Richtig! „werden + wohl + Infinitiv“ drückt eine Vermutung über den aktuellen Zustand aus (He is probably sick).',
      explanationEn: 'Correct! „werden + wohl + infinitive“ expresses an assumption about the present state.'
    },
    {
      id: 'fut_q4',
      type: 'multiple_choice',
      prompt: 'Du ___ die B1-Prüfung ganz sicher mit Bravour bestehen.',
      promptEn: 'You will certainly pass the B1 exam with flying colors.',
      options: ['wirst', 'wird', 'werdet', 'werden'],
      correct: 'wirst',
      explanationDe: 'Richtig! In der 2. Person Singular („du“) heißt es „du wirst“.',
      explanationEn: 'Correct! In the 2nd person singular („du“), the form is „wirst“.'
    },
    {
      id: 'fut_q5',
      type: 'gap_fill',
      prompt: 'Ich verspreche dir, ich ___ morgen pünktlich um acht Uhr da sein.',
      promptEn: 'I promise you, I will be there punctually at eight o\'clock tomorrow.',
      options: ['werde', 'wird', 'wirst', 'werden'],
      correct: 'werde',
      explanationDe: 'Richtig! Für die 1. Person Singular („ich“) lautet die Form „werde“.',
      explanationEn: 'Correct! For 1st person singular („ich“), the form is „werde“.'
    },
    {
      id: 'fut_q6',
      type: 'gap_fill',
      prompt: 'Ihr ___ nach dem Studium sicherlich eine gute Arbeitsstelle finden.',
      promptEn: 'You (plural) will certainly find a good job after graduating.',
      options: ['werdet', 'werden', 'wird', 'wirst'],
      correct: 'werdet',
      explanationDe: 'Richtig! Für die 2. Person Plural („ihr“) lautet die Form „werdet“.',
      explanationEn: 'Correct! For 2nd person plural („ihr“), the form is „werdet“.'
    },
    {
      id: 'fut_q7',
      type: 'gap_fill',
      prompt: 'Die Ärzte hoffen, dass der Patient sich bald vollständig erholen ___.',
      promptEn: 'The doctors hope that the patient will recover fully soon.',
      options: ['wird', 'werde', 'werden', 'werdet'],
      correct: 'wird',
      explanationDe: 'Richtig! Im Nebensatz mit „dass“ wandert das Hilfsverb „wird“ ganz ans Satzende nach dem Infinitiv.',
      explanationEn: 'Correct! In a subordinate clause with „dass“, the auxiliary „wird“ moves to the very end.'
    },
    {
      id: 'fut_q8',
      type: 'multiple_choice',
      prompt: 'Wann verwendet man im Deutschen meistens Präsens statt Futur I?',
      promptEn: 'When is present tense usually used in German instead of Futur I?',
      options: [
        'Wenn eine Zeitangabe (z. B. morgen, nächste Woche) die Zukunft klar macht',
        'Nur bei unregelmäßigen Verben',
        'Nur in der Vergangenheit',
        'Niemals'
      ],
      correct: 'Wenn eine Zeitangabe (z. B. morgen, nächste Woche) die Zukunft klar macht',
      explanationDe: 'Richtig! Wenn eine Zeitangabe wie „morgen“ im Satz steht, verwendet man meistens das Präsens („Morgen fahre ich nach Berlin“).',
      explanationEn: 'Correct! If a time word like „tomorrow“ makes the future clear, present tense is normally preferred.'
    },
    {
      id: 'fut_q9',
      type: 'sentence_translation',
      prompt: 'Translate: "We will move into the new apartment next month."',
      promptEn: 'We will move into the new apartment next month.',
      correct: 'Wir werden nächsten Monat in die neue Wohnung einziehen.',
      segments: [
        { text: 'Wir werden', correct: true },
        { text: 'nächsten Monat', correct: true },
        { text: 'in die neue Wohnung', correct: true },
        { text: 'einziehen.', correct: true }
      ],
      options: [
        'Wir werden nächsten Monat in die neue Wohnung einziehen.',
        'Wir nächsten Monat einziehen werden in die neue Wohnung.',
        'Wir werden einziehen in die neue Wohnung nächsten Monat.',
        'Wir wird nächsten Monat in die neue Wohnung einziehen.'
      ],
      explanationDe: 'Richtig! „werden“ an Position 2 und der trennbare Infinitiv „einziehen“ am Satzende.',
      explanationEn: 'Correct! „werden“ in position 2 and the infinitive „einziehen“ at the sentence end.'
    },
    {
      id: 'fut_q10',
      type: 'sentence_translation',
      prompt: 'Translate: "He is probably in the office right now."',
      promptEn: 'He is probably in the office right now.',
      correct: 'Er wird wohl gerade im Büro sein.',
      segments: [
        { text: 'Er wird', correct: true },
        { text: 'wohl gerade', correct: true },
        { text: 'im Büro', correct: true },
        { text: 'sein.', correct: true }
      ],
      options: [
        'Er wird wohl gerade im Büro sein.',
        'Er ist wohl gerade im Büro werden.',
        'Er wohl gerade im Büro sein wird.',
        'Er wird wohl gerade sein im Büro.'
      ],
      explanationDe: 'Richtig! Futur I mit „wohl“ drückt eine Vermutung über die Gegenwart aus: „wird... sein“.',
      explanationEn: 'Correct! Futur I with „wohl“ expresses an assumption about the present: „wird... sein“.'
    },
    {
      id: 'fut_q11',
      type: 'word_order',
      prompt: 'Welche Wortstellung im Futur I ist grammatikalisch korrekt?',
      promptEn: 'Which word order in Futur I is grammatically correct?',
      options: [
        'Morgen wird der Handwerker die Heizung reparieren.',
        'Morgen wird der Handwerker reparieren die Heizung.',
        'Morgen der Handwerker wird die Heizung reparieren.',
        'Der Handwerker morgen reparieren wird die Heizung.'
      ],
      correct: 'Morgen wird der Handwerker die Heizung reparieren.',
      explanationDe: 'Richtig! Im Hauptsatz steht das konjugierte „wird“ an Position 2 und der Infinitiv „reparieren“ ganz am Ende.',
      explanationEn: 'Correct! In a main clause, conjugated „wird“ is in position 2 and infinitive „reparieren“ at the end.'
    },
    {
      id: 'fut_q12',
      type: 'word_order',
      prompt: 'Welche Satzstellung im Nebensatz mit Futur I ist richtig?',
      promptEn: 'Which sentence structure in a subordinate clause with Futur I is correct?',
      options: [
        'Ich glaube, dass sie das Spiel gewinnen werden.',
        'Ich glaube, dass sie werden das Spiel gewinnen.',
        'Ich glaube, dass werden sie das Spiel gewinnen.',
        'Ich glaube, dass sie das Spiel werden gewinnen.'
      ],
      correct: 'Ich glaube, dass sie das Spiel gewinnen werden.',
      explanationDe: 'Richtig! Im Nebensatz steht der Infinitiv („gewinnen“) vor dem konjugierten Hilfsverb („werden“) am Satzende.',
      explanationEn: 'Correct! In a subordinate clause, the infinitive precedes the conjugated auxiliary at the end.'
    },
    {
      id: 'fut_q13',
      type: 'error_correction',
      prompt: 'Finde den Fehler: „Er wird nächste Woche sein neues Auto verkaufen wird.“',
      promptEn: 'Spot the error: „Er wird nächste Woche sein neues Auto verkaufen wird.“',
      options: [
        'Lösche das doppelte „wird“ am Satzende',
        'Ersetze „verkaufen“ durch „verkauft“',
        'Ersetze „wird“ durch „wirst“',
        'Ersetze „sein“ durch „ihr“'
      ],
      correct: 'Lösche das doppelte „wird“ am Satzende',
      explanationDe: 'Richtig! Das Hilfsverb „wird“ steht nur an Position 2, am Satzende steht nur der Infinitiv „verkaufen“.',
      explanationEn: 'Correct! The auxiliary stands only in position 2; at the end stands only the infinitive.'
    },
    {
      id: 'fut_q14',
      type: 'error_correction',
      prompt: 'Finde den Fehler: „Wir werden morgen nach Hause gefahren.“',
      promptEn: 'Spot the error: „Wir werden morgen nach Hause gefahren.“',
      options: [
        'Ersetze „gefahren“ durch den Infinitiv „fahren“',
        'Ersetze „werden“ durch „wurden“',
        'Ersetze „morgen“ durch „gestern“',
        'Ersetze „nach“ durch „zu“'
      ],
      correct: 'Ersetze „gefahren“ durch den Infinitiv „fahren“',
      explanationDe: 'Richtig! Futur I verlangt den reinen Infinitiv („fahren“), nicht das Partizip II (das wäre Passiv).',
      explanationEn: 'Correct! Futur I requires the plain infinitive („fahren“), not Partizip II (which would be passive).'
    },
    {
      id: 'fut_q15',
      type: 'multiple_choice',
      prompt: 'Die Experten vermuten, dass die Zinsen im kommenden Quartal steigen ___.',
      promptEn: 'Experts suspect that interest rates will rise in the coming quarter.',
      options: ['werden', 'wird', 'werdet', 'wirst'],
      correct: 'werden',
      explanationDe: 'Richtig! „die Zinsen“ ist Plural, daher lautet das Hilfsverb „werden“.',
      explanationEn: 'Correct! „die Zinsen“ is plural, so the auxiliary is „werden“.'
    },
    {
      id: 'fut_q16',
      type: 'multiple_choice',
      prompt: '„Schau dir die dunklen Wolken an! Es ___ gleich regnen.“',
      promptEn: '„Look at the dark clouds! It is going to rain in a minute.“',
      options: ['wird', 'werde', 'werden', 'werdet'],
      correct: 'wird',
      explanationDe: 'Richtig! „Es“ verlangt die 3. Person Singular „wird“ für die Vorhersage.',
      explanationEn: 'Correct! „Es“ takes 3rd person singular „wird“ for the prediction.'
    },
    {
      id: 'fut_q17',
      type: 'gap_fill',
      prompt: 'Keine Sorge, wir ___ dich rechtzeitig vom Flughafen abholen.',
      promptEn: 'Don\'t worry, we will pick you up from the airport on time.',
      options: ['werden', 'wird', 'werdet', 'wirst'],
      correct: 'werden',
      explanationDe: 'Richtig! Das Subjekt ist „wir“, das konjugierte Hilfsverb lautet „werden“.',
      explanationEn: 'Correct! The subject is „wir“, so the auxiliary is „werden“.'
    },
    {
      id: 'fut_q18',
      type: 'multiple_choice',
      prompt: 'Wie konjugiert man „werden“ in der 2. Person Plural („ihr“)?',
      promptEn: 'How do you conjugate „werden“ in the 2nd person plural („ihr“)?',
      options: ['ihr werdet', 'ihr wird', 'ihr werden', 'ihr wirst'],
      correct: 'ihr werdet',
      explanationDe: 'Richtig! Die Form für „ihr“ lautet „werdet“.',
      explanationEn: 'Correct! The form for „ihr“ is „werdet“.'
    },
    {
      id: 'fut_q19',
      type: 'sentence_translation',
      prompt: 'Translate: "They will probably arrive in twenty minutes."',
      promptEn: 'They will probably arrive in twenty minutes.',
      correct: 'Sie werden wahrscheinlich in zwanzig Minuten ankommen.',
      segments: [
        { text: 'Sie werden', correct: true },
        { text: 'wahrscheinlich', correct: true },
        { text: 'in zwanzig Minuten', correct: true },
        { text: 'ankommen.', correct: true }
      ],
      options: [
        'Sie werden wahrscheinlich in zwanzig Minuten ankommen.',
        'Sie wahrscheinlich in zwanzig Minuten ankommen werden.',
        'Sie wird wahrscheinlich ankommen in zwanzig Minuten.',
        'Sie werden ankommen wahrscheinlich in zwanzig Minuten.'
      ],
      explanationDe: 'Richtig! Futur I mit Vermutungswort „wahrscheinlich“: „werden... ankommen“.',
      explanationEn: 'Correct! Futur I with supposition adverb „wahrscheinlich“: „werden... ankommen“.'
    },
    {
      id: 'fut_q20',
      type: 'multiple_choice',
      prompt: '„Wo ist Maria? – Sie ___ wohl im Stau stehen.“',
      promptEn: '„Where is Maria? – She is probably stuck in traffic.“',
      options: ['wird', 'werde', 'werden', 'wirst'],
      correct: 'wird',
      explanationDe: 'Richtig! „Sie“ (Maria, Singular) verlangt „wird“ als Ausdruck der Vermutung.',
      explanationEn: 'Correct! „Sie“ (Maria, 3rd sing) takes „wird“ to express probability.'
    },
    {
      id: 'fut_q21',
      type: 'gap_fill',
      prompt: 'Ich ___ dich nie vergessen!',
      promptEn: 'I will never forget you!',
      options: ['werde', 'wird', 'wirst', 'werden'],
      correct: 'werde',
      explanationDe: 'Richtig! „Ich werde dich nie vergessen“ drückt ein festes Versprechen im Futur I aus.',
      explanationEn: 'Correct! „Ich werde dich nie vergessen“ expresses a firm promise in Futur I.'
    },
    {
      id: 'fut_q22',
      type: 'error_correction',
      prompt: 'Finde den Fehler: „Du wird die Prüfung bestimmt schaffen.“',
      promptEn: 'Spot the error: „Du wird die Prüfung bestimmt schaffen.“',
      options: [
        'Ersetze „wird“ durch „wirst“ (2. Person Singular)',
        'Ersetze „schaffen“ durch „geschafft“',
        'Ersetze „die“ durch „der“',
        'Ersetze „bestimmt“ durch „bestimmte“'
      ],
      correct: 'Ersetze „wird“ durch „wirst“ (2. Person Singular)',
      explanationDe: 'Richtig! Bei „du“ lautet die korrekte Konjugation von werden „wirst“.',
      explanationEn: 'Correct! With „du“, the correct conjugation of werden is „wirst“.'
    },
    {
      id: 'fut_q23',
      type: 'multiple_choice',
      prompt: 'Was ist der Unterschied zwischen „Er wird operiert“ und „Er wird operieren“?',
      promptEn: 'What is the difference between „Er wird operiert“ and „Er wird operieren“?',
      options: [
        '„Er wird operiert“ ist Passiv (er ist Patient); „Er wird operieren“ ist Futur I (er ist Chirurg/Aktiv)',
        'Beide Sätze bedeuten genau dasselbe',
        '„Er wird operieren“ ist Vergangenheit',
        '„Er wird operiert“ ist Konjunktiv II'
      ],
      correct: '„Er wird operiert“ ist Passiv (er ist Patient); „Er wird operieren“ ist Futur I (er ist Chirurg/Aktiv)',
      explanationDe: 'Richtig! „werden + Partizip II“ bildet das Passiv, während „werden + Infinitiv“ das Futur I bildet.',
      explanationEn: 'Correct! „werden + Partizip II“ forms passive, whereas „werden + Infinitiv“ forms Futur I.'
    },
    {
      id: 'fut_q24',
      type: 'gap_fill',
      prompt: 'Die Umweltorganisation hofft, dass die Emissionen in Zukunft drastisch sinken ___.',
      promptEn: 'The environmental organization hopes that emissions will drop drastically in the future.',
      options: ['werden', 'wird', 'werdet', 'wirst'],
      correct: 'werden',
      explanationDe: 'Richtig! „die Emissionen“ ist Plural, daher lautet die Form am Nebensatzende „werden“.',
      explanationEn: 'Correct! „die Emissionen“ is plural, so the form at the subordinate clause end is „werden“.'
    },
    {
      id: 'fut_q25',
      type: 'multiple_choice',
      prompt: '„Glaubst du, dass es morgen schneien ___?“',
      promptEn: '„Do you think it will snow tomorrow?“',
      options: ['wird', 'werde', 'werden', 'werdet'],
      correct: 'wird',
      explanationDe: 'Richtig! Das unpersönliche Wetterpronomen „es“ verlangt die 3. Person Singular „wird“.',
      explanationEn: 'Correct! The impersonal weather pronoun „es“ takes the 3rd person singular „wird“.'
    }
  ]
};
