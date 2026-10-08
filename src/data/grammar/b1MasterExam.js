// B1 Master Grammar Exam: 24 Official Goethe / Telc Practice Questions (Themen N–S)

export const B1_MASTER_EXAM_TOPIC = {
  id: 'b1_master_exam',
  exportName: 'B1_MASTER_EXAM_TOPIC',
  titleDe: '21. Goethe/Telc B1 Master-Prüfung (Themen N–S)',
  titleEn: '21. Goethe/Telc B1 Master Exam (Topics N–S)',
  icon: '🏆',
  badge: 'Offizieller Prüfungs-Check (24 Fragen)',
  summaryDe: 'Umfassende Original-Prüfungsfragen aus dem B1-Lehrwerk für alle Grammatikthemen N bis S: Verben, Satzbau, Nomen, Adjektive, Präpositionen und Pronomen.',
  summaryEn: 'Comprehensive original exam questions from the B1 curriculum covering all grammar topics N through S: Verbs, Syntax, Nouns, Adjectives, Prepositions, and Pronouns.',
  cheatSheet: {
    rule: '24 offizielle Multiple-Choice-Prüfungsfragen nach Goethe/Telc-Standard.',
    keyConnectors: [
      {
        conn: 'Thema N (Verben)',
        meaning: 'Plusquamperfekt, Konjunktiv II, Passiv, feste Präpositionen, Infinitiv mit zu, Reflexiv',
        example: 'Fragen 27 bis 32 testen Kernkompetenzen der Verbgrammatik.'
      },
      {
        conn: 'Thema O (Satzbau)',
        meaning: 'Relativsätze (denen, was), Temporalsätze (als/wenn), Kausalsätze (da), Finalsätze (um...zu), Proportional (je...desto)',
        example: 'Fragen 33 bis 38 testen Satzstrukturen und Konjunktionen.'
      },
      {
        conn: 'Thema P & Q (Nomen & Adjektive)',
        meaning: 'Genitiv (des Mannes), N-Deklination (den Franzosen), Namen-Genitiv (Moritz\'), Adjektivdeklination, Superlativ, Partizip I',
        example: 'Fragen 39 bis 44 testen Formen und Endungen.'
      },
      {
        conn: 'Thema R & S (Präpositionen & Pronomen)',
        meaning: 'Genitivpräpositionen (trotz), Postposition (entlang), Pronominaladverbien (woran, darauf), Indefinita (alles), Pronomen es',
        example: 'Fragen 45 bis 50 testen Funktionswörter und Präpositionen.'
      }
    ],
    goldenRules: [
      'Goldene Regel 1: Lies jede Frage aufmerksam und achte auf Signalwörter wie Kasus, Subjektgleichheit oder Zeitstufen.',
      'Goldene Regel 2: Überprüfe bei Fehlern die ausführliche zweisprachige Regelerklärung.'
    ]
  },
  questions: [
    {
      id: 'me_q27',
      type: 'multiple_choice',
      prompt: '„Nachdem er gegessen hatte, ___ er ins Bett.“ (Thema N - Plusquamperfekt)',
      promptEn: '„After he had eaten, he went to bed.“ (Topic N - Past Perfect)',
      options: ['geht', 'ging', 'ist gegangen', 'war gegangen'],
      correct: 'ging',
      explanationDe: 'Richtig! Die frühere Handlung im nachdem-Satz steht im Plusquamperfekt („hatte gegessen“); die nachfolgende Haupthandlung steht im Präteritum („ging“).',
      explanationEn: 'Correct! The earlier action in the nachdem-clause is in the Past Perfect; the subsequent main clause action must be in the Simple Past (Präteritum: „ging“).'
    },
    {
      id: 'me_q28',
      type: 'multiple_choice',
      prompt: '„Wenn ich Zeit hätte, ___ ich ins Kino.“ (Thema N - Konjunktiv II)',
      promptEn: '„If I had time, I would go to the cinema.“ (Topic N - Subjunctive II)',
      options: ['gehe', 'ging', 'ginge / würde gehen', 'bin gegangen'],
      correct: 'ginge / würde gehen',
      explanationDe: 'Richtig! Irreale Wünsche und Bedingungssätze in der Gegenwart verlangen den Konjunktiv II („ginge“ oder „würde gehen“).',
      explanationEn: 'Correct! Unreal conditions in the present require Konjunktiv II („ginge“ or „würde gehen“).'
    },
    {
      id: 'me_q29',
      type: 'multiple_choice',
      prompt: '„Das Auto ist repariert ___.“ (Thema N - Passiv Perfekt)',
      promptEn: '„The car has been repaired.“ (Topic N - Passive Perfect)',
      options: ['geworden', 'worden', 'gewesen', 'gemacht'],
      correct: 'worden',
      explanationDe: 'Richtig! Das Passiv Perfekt wird mit „sein + Partizip II + worden“ gebildet. Niemals „geworden“!',
      explanationEn: 'Correct! Passive Perfect is formed with „sein + Partizip II + worden“. Never use „geworden“ here!'
    },
    {
      id: 'me_q30',
      type: 'multiple_choice',
      prompt: '„Ich warte ___ den Bus.“ (Thema N - Verben mit Präpositionen)',
      promptEn: '„I am waiting for the bus.“ (Topic N - Verbs with Prepositions)',
      options: ['auf (+ Akkusativ)', 'für (+ Akkusativ)', 'an (+ Dativ)', 'über (+ Akkusativ)'],
      correct: 'auf (+ Akkusativ)',
      explanationDe: 'Richtig! Das feste Verbgefüge lautet „warten auf + Akkusativ“ (den Bus).',
      explanationEn: 'Correct! The fixed collocation is „warten auf + Accusative“.'
    },
    {
      id: 'me_q31',
      type: 'multiple_choice',
      prompt: 'Welcher Satz ist grammatikalisch richtig? (Thema N - Infinitiv mit/ohne zu)',
      promptEn: 'Which sentence is grammatically correct? (Topic N - Infinitive with/without zu)',
      options: [
        'Ich hoffe, dich bald zu sehen.',
        'Ich hoffe, dich bald sehen.',
        'Ich hoffe, dich bald sehen zu.',
        'Ich hoffe, zu dich bald sehen.'
      ],
      correct: 'Ich hoffe, dich bald zu sehen.',
      explanationDe: 'Richtig! „hoffen“ verlangt den Infinitiv mit „zu“ direkt vor dem Verb am Satzende („zu sehen“).',
      explanationEn: 'Correct! „hoffen“ takes the infinitive with „zu“ immediately before the final verb („zu sehen“).'
    },
    {
      id: 'me_q32',
      type: 'multiple_choice',
      prompt: '„Ich wasche ___ die Hände.“ (Thema N - Reflexivpronomen)',
      promptEn: '„I wash my hands.“ (Topic N - Reflexive Pronouns)',
      options: ['mich', 'mir', 'mich selbst', 'mein'],
      correct: 'mir',
      explanationDe: 'Richtig! Da mit „die Hände“ bereits ein Akkusativobjekt vorhanden ist, steht das Reflexivpronomen im Dativ („mir“).',
      explanationEn: 'Correct! Since „die Hände“ is already an accusative object, the reflexive pronoun must be in the dative case („mir“).'
    },
    {
      id: 'me_q33',
      type: 'multiple_choice',
      prompt: '„Die Kinder, ___ ich geholfen habe, sind nett.“ (Thema O - Relativpronomen)',
      promptEn: '„The children whom I helped are nice.“ (Topic O - Relative Pronouns)',
      options: ['die', 'denen', 'den', 'deren'],
      correct: 'denen',
      explanationDe: 'Richtig! „helfen“ verlangt den Dativ; das Relativpronomen im Dativ Plural lautet „denen“.',
      explanationEn: 'Correct! „helfen“ governs the dative case; the relative pronoun in dative plural is „denen“.'
    },
    {
      id: 'me_q34',
      type: 'multiple_choice',
      prompt: '„Das ist alles, ___ ich weiß.“ (Thema O - Relativpronomen)',
      promptEn: '„That is all that I know.“ (Topic O - Relative Pronouns)',
      options: ['das', 'was', 'welches', 'wo'],
      correct: 'was',
      explanationDe: 'Richtig! Nach neutralen Indefinitpronomen wie „alles“, „nichts“ oder „etwas“ steht als Relativpronomen immer „was“.',
      explanationEn: 'Correct! After indefinite neuter pronouns like „alles“, „nichts“, „etwas“, the relative pronoun is always „was“.'
    },
    {
      id: 'me_q35',
      type: 'multiple_choice',
      prompt: '„___ ich ein Kind war, spielte ich oft im Wald.“ (Thema O - Temporal)',
      promptEn: '„When I was a child, I often played in the forest.“ (Topic O - Time)',
      options: ['Wenn', 'Als', 'Während', 'Seitdem'],
      correct: 'Als',
      explanationDe: 'Richtig! Für eine einmalige Zeitspanne oder ein einmaliges Ereignis in der Vergangenheit verwendet man „Als“.',
      explanationEn: 'Correct! For a single timeframe or one-off event in the past, German uses „Als“.'
    },
    {
      id: 'me_q36',
      type: 'multiple_choice',
      prompt: '„___ es regnet, nehmen wir den Schirm.“ (Thema O - Kausal, Grund ist allgemein bekannt)',
      promptEn: '„Since it is raining, we take the umbrella.“ (Topic O - Cause, fact is obvious)',
      options: ['Weil', 'Da', 'Trotzdem', 'Obwohl'],
      correct: 'Da',
      explanationDe: 'Richtig! Wenn der Grund dem Gesprächspartner bereits bekannt oder offensichtlich ist, verwendet man bevorzugt „Da“ am Satzanfang.',
      explanationEn: 'Correct! When the reason is already generally known or obvious, „Da“ is preferred at the beginning of the sentence.'
    },
    {
      id: 'me_q37',
      type: 'multiple_choice',
      prompt: '„Ich lerne viel, ___ die Prüfung zu bestehen.“ (Thema O - Final)',
      promptEn: '„I study a lot in order to pass the exam.“ (Topic O - Purpose)',
      options: ['damit', 'um', 'dass', 'weshalb'],
      correct: 'um',
      explanationDe: 'Richtig! Bei gleichem Subjekt in beiden Teilsätzen verwendet man die Infinitivkonstruktion „um... zu“.',
      explanationEn: 'Correct! When the subject is the same in both clauses, use the infinitive construction „um... zu“.'
    },
    {
      id: 'me_q38',
      type: 'multiple_choice',
      prompt: '„___ mehr ich lerne, ___ besser spreche ich.“ (Thema O - Proportional)',
      promptEn: '„The more I learn, the better I speak.“ (Topic O - Proportion)',
      options: ['Je / desto', 'Wenn / dann', 'Weil / deshalb', 'Zwar / aber'],
      correct: 'Je / desto',
      explanationDe: 'Richtig! Die proportionale Konjunktion lautet „je... desto“ (oder alternativ „je... umso“).',
      explanationEn: 'Correct! The proportional conjunction pair is „je... desto“ (or „je... umso“).'
    },
    {
      id: 'me_q39',
      type: 'multiple_choice',
      prompt: '„Das Auto ___ Mannes ist neu.“ (Thema P - Genitiv)',
      promptEn: '„The car of the man is new.“ (Topic P - Genitive)',
      options: ['der', 'dem', 'des', 'den'],
      correct: 'des',
      explanationDe: 'Richtig! Das Maskulinum bildet im Genitiv den Artikel „des“ und erhält die Endung -(e)s am Nomen.',
      explanationEn: 'Correct! Masculine nouns take „des“ in the genitive case with an -(e)s suffix.'
    },
    {
      id: 'me_q40',
      type: 'multiple_choice',
      prompt: '„Ich kenne ___ Franzosen.“ (Thema P - N-Deklination)',
      promptEn: '„I know the Frenchman.“ (Topic P - N-Declension)',
      options: ['der', 'den', 'des', 'dem'],
      correct: 'den',
      explanationDe: 'Richtig! „kennen“ verlangt den Akkusativ Maskulinum („den“). Als schwaches Nomen erhält „Franzose“ im Akkusativ die Endung -n („den Franzosen“).',
      explanationEn: 'Correct! „kennen“ governs the accusative („den“). As a weak noun, „Franzose“ takes the -n ending in the accusative.'
    },
    {
      id: 'me_q41',
      type: 'multiple_choice',
      prompt: 'Wie lautet die richtige Form für: „Das Auto von Moritz (endet auf z)“? (Thema P - Genitiv)',
      promptEn: 'What is the correct form for: „The car of Moritz (ends in z)“? (Topic P - Genitive)',
      options: ['Moritz\'s Auto', 'Moritzs Auto', 'Moritz\' Auto', 'Moritzen Auto'],
      correct: 'Moritz\' Auto',
      explanationDe: 'Richtig! Namen, die auf einen s-Laut (s, ß, z, x) enden, bilden den Genitiv mit einem Apostroph OHNE zusätzliches s.',
      explanationEn: 'Correct! Names ending in an s-sound form the genitive with an apostrophe without an additional -s.'
    },
    {
      id: 'me_q42',
      type: 'multiple_choice',
      prompt: '„Er fährt mit ___ neuen Auto.“ (Thema Q - Adjektivdeklination)',
      promptEn: '„He drives with a new red car.“ (Topic Q - Adjective Declension)',
      options: ['ein rotes', 'einem roten', 'einen roten', 'einem rotem'],
      correct: 'einem roten',
      explanationDe: 'Richtig! Nach der Dativpräposition „mit“ heißt es im Neutrum: „einem roten neuen Auto“.',
      explanationEn: 'Correct! After the dative preposition „mit“, neuter takes „einem roten“.'
    },
    {
      id: 'me_q43',
      type: 'multiple_choice',
      prompt: '„Der Mammutbaum ist der ___ Baum der Welt.“ (Thema Q - Superlativ)',
      promptEn: '„The redwood is the tallest tree in the world.“ (Topic Q - Superlative)',
      options: ['höchste', 'höher', 'am höchsten', 'hoch'],
      correct: 'höchste',
      explanationDe: 'Richtig! Vor einem Nomen mit bestimmtem Artikel steht der Superlativ mit Adjektivendung: „der höchste Baum“.',
      explanationEn: 'Correct! Before a noun with a definite article, the superlative takes an adjective ending: „der höchste Baum“.'
    },
    {
      id: 'me_q44',
      type: 'multiple_choice',
      prompt: '„Das ___ Kind sucht seine Mutter. (weinen)“ (Thema Q - Partizip I)',
      promptEn: '„The crying child is looking for its mother.“ (Topic Q - Participle I)',
      options: ['geweinte', 'weinende', 'weinendes', 'weint'],
      correct: 'weinende',
      explanationDe: 'Richtig! Das Partizip I (Infinitiv + d) drückt eine gleichzeitige Handlung aus: weinen + d + e = „weinende“.',
      explanationEn: 'Correct! Participle I (Infinitive + d) expresses ongoing action with adjective ending: „das weinende Kind“.'
    },
    {
      id: 'me_q45',
      type: 'multiple_choice',
      prompt: '„___ des starken Regens fand das Spiel statt.“ (Thema R - Genitivpräposition)',
      promptEn: '„Despite the heavy rain, the game took place.“ (Topic R - Genitive Preposition)',
      options: ['Wegen', 'Trotz', 'Während', 'Außerhalb'],
      correct: 'Trotz',
      explanationDe: 'Richtig! „Trotz“ drückt den Gegensatz aus und verlangt den Genitiv („des starken Regens“).',
      explanationEn: 'Correct! „Trotz“ expresses concession/contrast and governs the genitive case.'
    },
    {
      id: 'me_q46',
      type: 'multiple_choice',
      prompt: '„Wir laufen den Fluss ___.“ (Thema R - Lokale Präposition)',
      promptEn: '„We walk along the river.“ (Topic R - Local Preposition)',
      options: ['durch', 'um', 'entlang', 'gegen'],
      correct: 'entlang',
      explanationDe: 'Richtig! Die Präposition „entlang“ steht nachgestellt mit dem Akkusativ: „den Fluss entlang“.',
      explanationEn: 'Correct! The preposition „entlang“ stands after the noun with the accusative: „den Fluss entlang“.'
    },
    {
      id: 'me_q47',
      type: 'multiple_choice',
      prompt: '„___ denkst du? – An den Urlaub.“ (Thema S - Pronominaladverb)',
      promptEn: '„What are you thinking about? – About vacation.“ (Topic S - Pronominal Adverb)',
      options: ['Woran', 'An was', 'Daran', 'Was'],
      correct: 'Woran',
      explanationDe: 'Richtig! Da der Urlaub eine Sache ist, fragt man mit dem Pronominaladverb „Woran“ (wo + r + an).',
      explanationEn: 'Correct! Since vacation is a thing, ask with the pronominal adverb „Woran“ (wo + r + an).'
    },
    {
      id: 'me_q48',
      type: 'multiple_choice',
      prompt: '„Ich freue mich ___, dass du kommst.“ (Thema S - Pronominaladverb)',
      promptEn: '„I look forward to you coming.“ (Topic S - Pronominal Adverb)',
      options: ['auf das', 'darauf', 'worauf', 'über das'],
      correct: 'darauf',
      explanationDe: 'Richtig! „sich freuen auf“ verweist mit „darauf“ auf den Nebensatz („dass du kommst“).',
      explanationEn: 'Correct! „sich freuen auf“ points forward to the clause using „darauf“.'
    },
    {
      id: 'me_q49',
      type: 'multiple_choice',
      prompt: '„Ich habe ___ im Kühlschrank gegessen. Er ist leer!“ (Thema S - Indefinitpronomen)',
      promptEn: '„I ate everything in the fridge. It is empty!“ (Topic S - Indefinite Pronoun)',
      options: ['alles', 'nichts', 'etwas', 'einiges'],
      correct: 'alles',
      explanationDe: 'Richtig! Das Indefinitpronomen „alles“ bedeutet hier den gesamten Inhalt.',
      explanationEn: 'Correct! The indefinite pronoun „alles“ indicates all contents.'
    },
    {
      id: 'me_q50',
      type: 'multiple_choice',
      prompt: '„___ regnet schon den ganzen Tag.“ (Thema S - Das Pronomen „es“)',
      promptEn: '„It has been raining all day.“ (Topic S - The pronoun „es“)',
      options: ['Er', 'Sie', 'Es', 'Das'],
      correct: 'Es',
      explanationDe: 'Richtig! Das unpersönliche Wetterverb „regnen“ erfordert das Pronomen „Es“ als Subjekt.',
      explanationEn: 'Correct! The impersonal weather verb „regnen“ requires the pronoun „Es“ as subject.'
    }
  ]
};
