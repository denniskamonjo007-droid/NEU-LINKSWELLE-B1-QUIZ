// B1 German Grammar Topic: Pronominaladverbien, Indefinitpronomen & Pronomen „es“ (Thema S: Pronomen)

export const PRONOMINALADVERBIEN_TOPIC = {
  id: 'pronominaladverbien',
  exportName: 'PRONOMINALADVERBIEN_TOPIC',
  titleDe: '20. Pronominaladverbien, Indefinitpronomen & „es“',
  titleEn: '20. Pronominal Adverbs, Indefinite Pronouns & „es“',
  icon: '🎯',
  badge: 'woran / darauf | alles & nichts | Pronomen „es“',
  summaryDe: 'Pronominaladverbien verbinden Präpositionen mit wo(r)- für Fragen und da(r)- für Verweise auf Dinge/Sätze. Bei Personen muss die Präposition mit wen/wem stehen. Das Modul umfasst auch Indefinitpronomen und das Pronomen „es“.',
  summaryEn: 'Pronominal adverbs combine prepositions with wo(r)- for questions and da(r)- for referencing things or clauses. For people, use preposition + wen/wem. Also covers indefinite pronouns and the impersonal pronoun „es“.',
  cheatSheet: {
    rule: 'Sachen: wo(r)- / da(r)- + Präposition | Personen: Präposition + wen / wem.',
    keyConnectors: [
      {
        conn: 'Frage: Sache vs. Person',
        meaning: 'Sache: Woran denkst du? | Person: An wen denkst du?',
        example: 'Woran denkst du? – An meinen Urlaub. | An wen denkst du? – An meine Mutter.'
      },
      {
        conn: 'Verweis auf Nebensatz: da(r)-',
        meaning: 'darauf, dass... / daran, dass... / davon, dass...',
        example: 'Ich freue mich darauf, dass du mich bald besuchst.'
      },
      {
        conn: 'Indefinitpronomen',
        meaning: 'alles, nichts, etwas, jemand, niemand, man, einer',
        example: 'Ich habe alles im Kühlschrank gegessen. Er ist völlig leer!'
      },
      {
        conn: 'Das Pronomen „es“',
        meaning: 'Wetter (es regnet), Zeit (es ist spät), Befinden (wie geht es dir?)',
        example: 'Es schneit seit heute Morgen ununterbrochen.'
      }
    ],
    goldenRules: [
      'Goldene Regel 1: Beginnt die Präposition mit einem Vokal (an, auf, über, um), fügt man ein -r- ein: wo + r + an = woran; da + r + auf = darauf.',
      'Goldene Regel 2: Verwende da(r)- und wo(r)- NIEMALS für Personen! Für Menschen gilt immer: Präposition + Pronomen („Mit wem sprichst du?“ – NICHT: „Womit sprichst du?“).'
    ]
  },
  questions: [
    {
      id: 'pro_q1',
      type: 'multiple_choice',
      prompt: '„___ denkst du gerade? – An meinen nächsten Urlaub.“',
      promptEn: '„What are you thinking about right now? – About my next vacation.“',
      options: ['Woran', 'An was', 'Daran', 'Was'],
      correct: 'Woran',
      explanationDe: 'Richtig! Da der Urlaub eine Sache ist, fragt man mit dem Pronominaladverb „woran“ (wo + r + an).',
      explanationEn: 'Correct! Since vacation is a thing/concept, ask with the pronominal adverb „woran“ (wo + r + an).'
    },
    {
      id: 'pro_q2',
      type: 'multiple_choice',
      prompt: '„___ wartest du am Bahnsteig? – Auf meine Schwester.“',
      promptEn: '„Who are you waiting for on the platform? – For my sister.“',
      options: ['Worauf', 'Auf wen', 'Darauf', 'An wen'],
      correct: 'Auf wen',
      explanationDe: 'Richtig! Die Schwester ist eine Person, daher fragt man mit Präposition + Akkusativ („Auf wen“).',
      explanationEn: 'Correct! The sister is a person, so you must use the preposition + interrogative pronoun („Auf wen“).'
    },
    {
      id: 'pro_q3',
      type: 'multiple_choice',
      prompt: 'Ich freue mich schon sehr ___, dass du mich am Wochenende besuchst.',
      promptEn: 'I am already looking forward very much to you visiting me on the weekend.',
      options: ['darauf', 'auf das', 'worauf', 'daran'],
      correct: 'darauf',
      explanationDe: 'Richtig! „sich freuen auf“ verweist mit „darauf“ auf den folgenden „dass“-Nebensatz.',
      explanationEn: 'Correct! „sich freuen auf“ points forward to the subordinate clause using „darauf“.'
    },
    {
      id: 'pro_q4',
      type: 'multiple_choice',
      prompt: '„Ich habe ___ im Kühlschrank gegessen. Er ist jetzt komplett leer!“',
      promptEn: '„I ate everything in the fridge. It is completely empty now!“',
      options: ['alles', 'nichts', 'etwas', 'einiges'],
      correct: 'alles',
      explanationDe: 'Richtig! Das Indefinitpronomen „alles“ bedeutet hier die gesamte Menge an Lebensmitteln.',
      explanationEn: 'Correct! The indefinite pronoun „alles“ indicates the entirety of the food.'
    },
    {
      id: 'pro_q5',
      type: 'multiple_choice',
      prompt: '„___ regnet schon seit dem frühen Morgen ununterbrochen.“',
      promptEn: '„It has been raining continuously since early morning.“',
      options: ['Es', 'Er', 'Sie', 'Das'],
      correct: 'Es',
      explanationDe: 'Richtig! Bei Witterungsverben wie regnen, schneien oder donnern fungiert „es“ als festes grammatikalisches Subjekt.',
      explanationEn: 'Correct! With weather verbs (regnen, schneien), „es“ functions as the impersonal subject.'
    },
    {
      id: 'pro_q6',
      type: 'gap_fill',
      prompt: 'Er erinnert sich oft ___an, wie schön seine Kindheit in den Bergen war.',
      promptEn: 'He often remembers how beautiful his childhood in the mountains was.',
      options: ['dar', 'wor', 'hier', 'darin'],
      correct: 'dar',
      explanationDe: 'Richtig! „sich erinnern an“ verlangt das Pronominaladverb „daran“ (da + r + an).',
      explanationEn: 'Correct! „sich erinnern an“ requires the pronominal adverb „daran“ (da + r + an).'
    },
    {
      id: 'pro_q7',
      type: 'gap_fill',
      prompt: '„___über ärgerst du dich so sehr? – Über den unpünktlichen Zug.“',
      promptEn: '„What are you so angry about? – About the unpunctual train.“',
      options: ['Wor', 'Dar', 'Hier', 'Von'],
      correct: 'Wor',
      explanationDe: 'Richtig! Für Fragen nach einer Sache mit „über“ bildet man „worüber“ (wo + r + über).',
      explanationEn: 'Correct! For asking about a thing with „über“, form „worüber“ (wo + r + über).'
    },
    {
      id: 'pro_q8',
      type: 'gap_fill',
      prompt: 'Hat ___ meinen Schlüsselbund auf dem Tisch gesehen?',
      promptEn: 'Has anyone seen my bunch of keys on the table?',
      options: ['jemand', 'niemand', 'etwas', 'nichts'],
      correct: 'jemand',
      explanationDe: 'Richtig! „jemand“ (anyone / somebody) fragt nach einer beliebigen Person.',
      explanationEn: 'Correct! „jemand“ (anyone / somebody) asks about an unspecified person.'
    },
    {
      id: 'pro_q9',
      type: 'multiple_choice',
      prompt: '„Über ___ sprecht ihr? – Über unseren neuen Abteilungsleiter.“',
      promptEn: '„Who are you talking about? – About our new department head.“',
      options: ['wen', 'worüber', 'wem', 'was'],
      correct: 'wen',
      explanationDe: 'Richtig! Der Abteilungsleiter ist eine Person; „sprechen über + Akkusativ“ verlangt daher „Über wen“.',
      explanationEn: 'Correct! The department head is a person; „sprechen über + Acc.“ requires „Über wen“.'
    },
    {
      id: 'pro_q10',
      type: 'multiple_choice',
      prompt: 'Die Studenten zweifeln nicht ___, dass die Prüfung machbar ist.',
      promptEn: 'The students do not doubt that the exam is doable.',
      options: ['daran', 'woran', 'damit', 'darauf'],
      correct: 'daran',
      explanationDe: 'Richtig! „zweifeln an (+ Dativ)“ verbindet sich mit „daran“ für den folgenden „dass“-Satz.',
      explanationEn: 'Correct! „zweifeln an (+ Dat.)“ links to the subordinate clause using „daran“.'
    },
    {
      id: 'pro_q11',
      type: 'sentence_translation',
      prompt: 'Translate: "What are you interested in? – In classical music."',
      promptEn: 'What are you interested in? – In classical music.',
      correct: 'Wofür interessierst du dich? – Für klassische Musik.',
      segments: [
        { text: 'Wofür', correct: true },
        { text: 'interessierst du dich?', correct: true },
        { text: '– Für', correct: true },
        { text: 'klassische Musik.', correct: true }
      ],
      options: [
        'Wofür interessierst du dich? – Für klassische Musik.',
        'Für was interessierst du dich? – Für klassische Musik.',
        'Woran interessierst du dich? – Für klassische Musik.',
        'Worüber interessierst du dich? – Für klassische Musik.'
      ],
      explanationDe: 'Richtig! „sich interessieren für“ bildet bei Sachen die Frage „Wofür“.',
      explanationEn: 'Correct! „sich interessieren für“ forms the question „Wofür“ for things.'
    },
    {
      id: 'pro_q12',
      type: 'sentence_translation',
      prompt: 'Translate: "Nobody was at home when the postman rang."',
      promptEn: 'Nobody was at home when the postman rang.',
      correct: 'Niemand war zu Hause, als der Postbote klingelte.',
      segments: [
        { text: 'Niemand', correct: true },
        { text: 'war zu Hause,', correct: true },
        { text: 'als der Postbote', correct: true },
        { text: 'klingelte.', correct: true }
      ],
      options: [
        'Nichts war zu Hause, als der Postbote klingelte.',
        'Niemand war zu Hause, als der Postbote klingelte.',
        'Jemand war zu Hause, als der Postbote klingelte.',
        'Niemand war zu Hause, wenn der Postbote klingelte.'
      ],
      explanationDe: 'Richtig! Das negative Indefinitpronomen für Personen heißt „niemand“.',
      explanationEn: 'Correct! The negative indefinite pronoun for people is „niemand“ (nobody).'
    },
    {
      id: 'pro_q13',
      type: 'word_order',
      prompt: 'Welche Wortstellung mit Pronominaladverb ist korrekt?',
      promptEn: 'Which word order with a pronominal adverb is correct?',
      options: [
        'Wir haben lange darüber diskutiert, wie wir das Problem lösen können.',
        'Wir haben darüber lange diskutiert wie können wir das Problem lösen.',
        'Wir lange darüber diskutiert haben, wie wir das Problem lösen können.',
        'Darüber wir haben lange diskutiert, wie wir das Problem lösen können.'
      ],
      correct: 'Wir haben lange darüber diskutiert, wie wir das Problem lösen können.',
      explanationDe: 'Richtig! Das Pronominaladverb „darüber“ steht im Mittelfeld und verweist auf die indirekte Frage.',
      explanationEn: 'Correct! The pronominal adverb „darüber“ stands in the central field pointing to the indirect question.'
    },
    {
      id: 'pro_q14',
      type: 'word_order',
      prompt: 'Welcher Satz mit dem unpersönlichen Pronomen „es“ ist standardsprachlich richtig?',
      promptEn: 'Which sentence with the impersonal pronoun „es“ is standard German?',
      options: [
        'Wie geht es Ihnen heute?',
        'Wie geht Ihnen heute es?',
        'Wie es geht Ihnen heute?',
        'Wie Ihnen geht es heute?'
      ],
      correct: 'Wie geht es Ihnen heute?',
      explanationDe: 'Richtig! Bei festen Redewendungen wie „Wie geht es Ihnen?“ folgt „es“ direkt auf das finite Verb.',
      explanationEn: 'Correct! In fixed phrases like „Wie geht es Ihnen?“, „es“ immediately follows the verb.'
    },
    {
      id: 'pro_q15',
      type: 'error_correction',
      prompt: 'Finde den Fehler: „Womit hast du gestern Abend telefoniert?“',
      promptEn: 'Spot the error: „Womit hast du gestern Abend telefoniert?“',
      options: [
        'Ersetze „Womit“ durch „Mit wem“ (eine Person, keine Sache)',
        'Ersetze „telefoniert“ durch „angerufen“',
        'Ersetze „du“ durch „Sie“',
        'Ersetze „gestern Abend“ durch „morgen Abend“'
      ],
      correct: 'Ersetze „Womit“ durch „Mit wem“ (eine Person, keine Sache)',
      explanationDe: 'Richtig! Man telefoniert mit einer Person! Pronominaladverbien wie „womit“ dürfen niemals für Menschen verwendet werden.',
      explanationEn: 'Correct! You speak with a person. Pronominal adverbs like „womit“ must never be used for humans.'
    },
    {
      id: 'pro_q16',
      type: 'error_correction',
      prompt: 'Finde den Fehler: „Er freut sich auf das, dass er bald Urlaub hat.“',
      promptEn: 'Spot the error: „Er freut sich auf das, dass er bald Urlaub hat.“',
      options: [
        'Ersetze „auf das“ durch das Pronominaladverb „darauf“',
        'Ersetze „freut“ durch „gefreut“',
        'Ersetze „Urlaub hat“ durch „hat Urlaub“',
        'Ersetze „dass“ durch „weil“'
      ],
      correct: 'Ersetze „auf das“ durch das Pronominaladverb „darauf“',
      explanationDe: 'Richtig! Vor einem „dass“-Satz muss das Pronominaladverb „darauf“ stehen, nicht „auf das“.',
      explanationEn: 'Correct! Before a „dass“-clause, you must use the pronominal adverb „darauf“, not „auf das“.'
    },
    {
      id: 'pro_q17',
      type: 'multiple_choice',
      prompt: '„Weißt du ___ über den neuen Chef? – Nein, überhaupt nichts.“',
      promptEn: '„Do you know anything about the new boss? – No, nothing at all.“',
      options: ['etwas', 'alles', 'jemand', 'man'],
      correct: 'etwas',
      explanationDe: 'Richtig! „etwas“ (something/anything) drückt eine unbestimmte Information aus.',
      explanationEn: 'Correct! „etwas“ (something/anything) expresses an indefinite piece of information.'
    },
    {
      id: 'pro_q18',
      type: 'multiple_choice',
      prompt: '„___ klopft an der Tür. Wer kann das um diese Uhrzeit sein?“',
      promptEn: '„Somebody is knocking at the door. Who can that be at this hour?“',
      options: ['Jemand', 'Niemand', 'Etwas', 'Nichts'],
      correct: 'Jemand',
      explanationDe: 'Richtig! „Jemand“ steht für eine unbekannte Person.',
      explanationEn: 'Correct! „Jemand“ stands for an unknown person (someone).'
    },
    {
      id: 'pro_q19',
      type: 'multiple_choice',
      prompt: 'Der Politiker bat die Bürger ___um, Ruhe zu bewahren.',
      promptEn: 'The politician asked the citizens to remain calm.',
      options: ['dar', 'wor', 'mit', 'von'],
      correct: 'dar',
      explanationDe: 'Richtig! „bitten um“ bildet das Pronominaladverb „darum“ (da + r + um).',
      explanationEn: 'Correct! „bitten um“ forms the pronominal adverb „darum“ (da + r + um).'
    },
    {
      id: 'pro_q20',
      type: 'gap_fill',
      prompt: 'Im Sommer ist ___ bis zweiundzwanzig Uhr hell draußen.',
      promptEn: 'In summer it is bright outside until ten p.m.',
      options: ['es', 'er', 'sie', 'das'],
      correct: 'es',
      explanationDe: 'Richtig! Unpersönliche Zeit- und Lichtverhältnisse werden mit „es“ gebildet (es ist hell, es ist dunkel).',
      explanationEn: 'Correct! Impersonal conditions of time and light use „es“ (es ist hell, es ist spät).'
    },
    {
      id: 'pro_q21',
      type: 'multiple_choice',
      prompt: '„___für brauchst du die Schere? – Um den Karton zu öffnen.“',
      promptEn: '„What do you need the scissors for? – To open the box.“',
      options: ['Wo', 'Wor', 'Da', 'Dar'],
      correct: 'Wo',
      explanationDe: 'Richtig! Da „für“ mit einem Konsonanten beginnt, wird KEIN -r- eingefügt: wo + für = „wofür“.',
      explanationEn: 'Correct! Since „für“ begins with a consonant, no -r- is added: wo + für = „wofür“.'
    },
    {
      id: 'pro_q22',
      type: 'multiple_choice',
      prompt: '„___auf freust du dich am meisten? – Auf das Wochenende!“',
      promptEn: '„What are you most looking forward to? – To the weekend!“',
      options: ['Wor', 'Wo', 'Dar', 'Da'],
      correct: 'Wor',
      explanationDe: 'Richtig! Da „auf“ mit einem Vokal beginnt, wird ein -r- eingefügt: wo + r + auf = „worauf“.',
      explanationEn: 'Correct! Since „auf“ begins with a vowel, an -r- is inserted: wo + r + auf = „worauf“.'
    },
    {
      id: 'pro_q23',
      type: 'sentence_translation',
      prompt: 'Translate: "I know nothing about this matter."',
      promptEn: 'I know nothing about this matter.',
      correct: 'Ich weiß nichts über diese Angelegenheit.',
      segments: [
        { text: 'Ich weiß', correct: true },
        { text: 'nichts über', correct: true },
        { text: 'diese', correct: true },
        { text: 'Angelegenheit.', correct: true }
      ],
      options: [
        'Ich weiß nichts über diese Angelegenheit.',
        'Ich weiß alles über diese Angelegenheit.',
        'Ich kenne nichts zu dieser Angelegenheit.',
        'Ich weiß niemand über diese Angelegenheit.'
      ],
      explanationDe: 'Richtig! Das Indefinitpronomen „nichts“ negiert die Information vollständig.',
      explanationEn: 'Correct! The indefinite pronoun „nichts“ negates the information completely (nothing).'
    },
    {
      id: 'pro_q24',
      type: 'multiple_choice',
      prompt: '„Wie spät ist ___? – Schon Viertel vor sieben.“',
      promptEn: '„What time is it? – Already a quarter to seven.“',
      options: ['es', 'er', 'sie', 'das'],
      correct: 'es',
      explanationDe: 'Richtig! Die feste Zeitfrage lautet: „Wie spät ist es?“.',
      explanationEn: 'Correct! The standard time inquiry is „Wie spät ist es?“.'
    },
    {
      id: 'pro_q25',
      type: 'multiple_choice',
      prompt: 'In Deutschland darf ___ an Sonntagen nicht laut bohren oder rasenmähen.',
      promptEn: 'In Germany, one is not allowed to drill loudly or mow the lawn on Sundays.',
      options: ['man', 'jemand', 'niemand', 'alles'],
      correct: 'man',
      explanationDe: 'Richtig! Das Indefinitpronomen „man“ bezeichnet die Allgemeinheit (people in general / one).',
      explanationEn: 'Correct! The indefinite pronoun „man“ refers to people in general / one.'
    }
  ]
};
