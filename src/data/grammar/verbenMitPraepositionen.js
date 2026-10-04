// B1 German Grammar Topic 09: Verben mit festen Präpositionen & Pronominaladverbien

export const VERBEN_PRAEPOSITIONEN_TOPIC = {
  "id": "verben_praepositionen",
  "exportName": "VERBEN_PRAEPOSITIONEN_TOPIC",
  "titleDe": "09. Verben mit festen Präpositionen & Da-/Wo-",
  "titleEn": "09. Prepositional Verbs & Pronominal Adverbs",
  "icon": "🎯",
  "badge": "Worauf? Darauf!",
  "summaryDe": "Viele deutsche Verben verlangen eine feste Präposition mit festem Kasus (Akkusativ oder Dativ). Bei Sachen nutzt man da(r)- und wo(r)-, bei Personen Präposition + Pronomen.",
  "summaryEn": "Many German verbs govern fixed prepositions with a specific case. Use da(r)- and wo(r)- for objects/abstract things, but preposition + pronoun for people.",
  "cheatSheet": {
    "rule": "Objekte/Sachen: wo(r)- für Fragen, da(r)- für Aussagen. Personen: Präposition + Pronomen (z.B. 'Auf wen wartest du?' vs. 'Worauf wartest du?').",
    "keyConnectors": [
      {
        "conn": "warten auf + Akk",
        "meaning": "to wait for",
        "example": "Worauf wartest du? Ich warte auf den Bus / darauf, dass er kommt. Auf wen wartest du? Auf meine Schwester."
      },
      {
        "conn": "sich freuen auf/über + Akk",
        "meaning": "look forward to (auf) / be pleased about (über)",
        "example": "Ich freue mich auf den Urlaub (Zukunft). Ich freue mich über das Geschenk (Gegenwart/Vergangenheit)."
      },
      {
        "conn": "sich interessieren für + Akk",
        "meaning": "to be interested in",
        "example": "Wofür interessierst du dich? Ich interessiere mich für Politik."
      },
      {
        "conn": "sich kümmern um + Akk",
        "meaning": "to take care of",
        "example": "Sie kümmert sich um die Kinder / um die Organisation."
      },
      {
        "conn": "teilnehmen an + Dat",
        "meaning": "to participate in",
        "example": "Woran nimmst du teil? Ich nehme am Kurs teil."
      },
      {
        "conn": "abhängen von + Dat",
        "meaning": "to depend on",
        "example": "Das hängt vom Wetter ab / davon ab, wie viel Zeit wir haben."
      },
      {
        "conn": "träumen von + Dat",
        "meaning": "to dream of",
        "example": "Wovon träumst du? Ich träume von einer Weltreise."
      },
      {
        "conn": "denken an + Akk",
        "meaning": "to think of",
        "example": "Woran denkst du? An wen denkst du?"
      }
    ],
    "goldenRules": [
      "Regel 1 (Person vs. Sache): Frage nach Personen mit Präposition + Wen/Wem ('Mit WEM sprichst du?'). Frage nach Sachen mit Wo(r)- + Präposition ('WORÜBER sprichst du?').",
      "Regel 2 (Pronominaladverb-R): Beginnt die Präposition mit einem Vokal (an, auf, über, unter, in), wird ein 'r' eingefügt: da-R-auf, wo-R-über, da-R-an."
    ]
  },
  "questions": [
    {
      "id": "vp_q1",
      "type": "multiple_choice",
      "prompt": "Ich warte schon seit einer Stunde ___ den Bus.",
      "sub": "Wähle die passende Präposition",
      "options": ["auf", "für", "an", "über"],
      "correct": 0,
      "explanationDe": "'warten' verlangt immer die Präposition 'auf' + Akkusativ.",
      "explanationEn": "'warten' always requires the preposition 'auf' + accusative.",
      "rule": "warten auf + Akkusativ"
    },
    {
      "id": "vp_q2",
      "type": "multiple_choice",
      "prompt": "___ wartest du eigentlich? - Auf meinen Bruder.",
      "sub": "Frage nach einer Person",
      "options": ["Auf wen", "Worauf", "An wen", "Woran"],
      "correct": 0,
      "explanationDe": "Da nach einer Person gefragt wird, heißt es 'Auf wen' (nicht 'Worauf').",
      "explanationEn": "Because we ask about a person, we use 'Auf wen' instead of 'Worauf'.",
      "rule": "Personen: Präposition + Fragewort"
    },
    {
      "id": "vp_q3",
      "type": "multiple_choice",
      "prompt": "___ denkst du gerade? - An meine morgige Prüfung.",
      "sub": "Frage nach einer Sache",
      "options": ["Woran", "An wen", "Wofür", "Worüber"],
      "correct": 0,
      "explanationDe": "Bei einer Sache ('die Prüfung') verbindet sich 'wo-' mit 'r' und 'an' zu 'woran'.",
      "explanationEn": "For an object/thing, 'wo' connects with 'r' and 'an' into 'woran'.",
      "rule": "wo(r)- + Präposition bei Sachen"
    },
    {
      "id": "vp_q4",
      "type": "gap_fill",
      "prompt": "Er interessiert sich sehr ___ moderne deutsche Geschichte.",
      "sub": "Setze die richtige Präposition ein",
      "options": ["für", "über", "an", "um"],
      "correct": 0,
      "explanationDe": "'sich interessieren' verlangt 'für' + Akkusativ.",
      "explanationEn": "'sich interessieren' requires 'für' + accusative.",
      "rule": "sich interessieren für + Akkusativ"
    },
    {
      "id": "vp_q5",
      "type": "multiple_choice",
      "prompt": "Wir freuen uns schon riesig ___ den kommenden Sommerurlaub.",
      "sub": "Freude auf ein zukünftiges Ereignis",
      "options": ["auf", "über", "für", "an"],
      "correct": 0,
      "explanationDe": "'sich freuen auf' bezieht sich auf die Zukunft (Vorfreude).",
      "explanationEn": "'sich freuen auf' refers to a future event (anticipation).",
      "rule": "sich freuen auf + Akk (Zukunft)"
    },
    {
      "id": "vp_q6",
      "type": "multiple_choice",
      "prompt": "Vielen Dank für die Blumen! Ich habe mich sehr ___ gefreut.",
      "sub": "Freude über ein gegenwärtiges/vergangenes Ereignis",
      "options": ["darüber", "darauf", "daran", "dafür"],
      "correct": 0,
      "explanationDe": "'sich freuen über' bezieht sich auf Gegenwärtiges oder Erhaltenes: 'darüber'.",
      "explanationEn": "'sich freuen über' refers to present or received things: 'darüber'.",
      "rule": "sich freuen über + Akk (Gegenwart)"
    },
    {
      "id": "vp_q7",
      "type": "gap_fill",
      "prompt": "Der Erfolg des Projekts hängt ___ vielen Faktoren ab.",
      "sub": "Feste Präposition von 'abhängen'",
      "options": ["von", "an", "bei", "aus"],
      "correct": 0,
      "explanationDe": "'abhängen' verlangt 'von' + Dativ.",
      "explanationEn": "'abhängen' requires 'von' + dative.",
      "rule": "abhängen von + Dativ"
    },
    {
      "id": "vp_q8",
      "type": "multiple_choice",
      "prompt": "Nimmst du am Samstag auch ___ Sportfest teil?",
      "sub": "Feste Präposition von 'teilnehmen'",
      "options": ["am", "ans", "zum", "aufs"],
      "correct": 0,
      "explanationDe": "'teilnehmen an' + Dativ: an + dem Sportfest = am Sportfest.",
      "explanationEn": "'teilnehmen an' takes the dative: an + dem = am Sportfest.",
      "rule": "teilnehmen an + Dativ"
    },
    {
      "id": "vp_q9",
      "type": "multiple_choice",
      "prompt": "Kümmerst du dich bitte ___ die Hotelreservierung?",
      "sub": "Feste Präposition von 'sich kümmern'",
      "options": ["um", "für", "an", "über"],
      "correct": 0,
      "explanationDe": "'sich kümmern' verlangt immer die Präposition 'um' + Akkusativ.",
      "explanationEn": "'sich kümmern' always takes 'um' + accusative.",
      "rule": "sich kümmern um + Akkusativ"
    },
    {
      "id": "vp_q10",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Worüber wartest du eigentlich seit 20 Minuten?'",
      "sub": "Korrigiere das Pronominaladverb",
      "options": [
        "'Worauf' statt 'Worüber' (warten auf)",
        "'Woran' statt 'Worüber'",
        "'Wofür' statt 'Worüber'",
        "Der Satz ist fehlerfrei"
      ],
      "correct": 0,
      "explanationDe": "Das Verb heißt 'warten auf', daher lautet das Fragewort 'Worauf'.",
      "explanationEn": "The verb is 'warten auf', therefore the question word is 'Worauf'.",
      "rule": "warten auf -> worauf"
    },
    {
      "id": "vp_q11",
      "type": "multiple_choice",
      "prompt": "Sie zweifelt oft ___ seinen Versprechungen.",
      "sub": "Feste Präposition von 'zweifeln'",
      "options": ["an", "über", "in", "von"],
      "correct": 0,
      "explanationDe": "'zweifeln' verlangt die Präposition 'an' + Dativ.",
      "explanationEn": "'zweifeln' requires the preposition 'an' + dative.",
      "rule": "zweifeln an + Dativ"
    },
    {
      "id": "vp_q12",
      "type": "multiple_choice",
      "prompt": "Ich habe ihn ___ Hilfe gebeten.",
      "sub": "Feste Präposition von 'bitten'",
      "options": ["um", "für", "nach", "zu"],
      "correct": 0,
      "explanationDe": "'jemanden bitten um' verlangt 'um' + Akkusativ.",
      "explanationEn": "'bitten um' requires 'um' + accusative.",
      "rule": "bitten um + Akkusativ"
    },
    {
      "id": "vp_q13",
      "type": "gap_fill",
      "prompt": "Er träumt schon lange ___ einem eigenen Haus im Grünen.",
      "sub": "Feste Präposition von 'träumen'",
      "options": ["von", "aus", "über", "an"],
      "correct": 0,
      "explanationDe": "'träumen' verlangt 'von' + Dativ.",
      "explanationEn": "'träumen' requires 'von' + dative.",
      "rule": "träumen von + Dativ"
    },
    {
      "id": "vp_q14",
      "type": "multiple_choice",
      "prompt": "Der Arzt warnt die Patienten ___ den Gefahren des Rauchens.",
      "sub": "Feste Präposition von 'warnen'",
      "options": ["vor", "gegen", "von", "um"],
      "correct": 0,
      "explanationDe": "'warnen' verlangt 'vor' + Dativ.",
      "explanationEn": "'warnen' requires 'vor' + dative.",
      "rule": "warnen vor + Dativ"
    },
    {
      "id": "vp_q15",
      "type": "sentence_translation",
      "prompt": "Translate: 'Are you satisfied with your current salary?'",
      "sub": "Übersetze ins Deutsche",
      "options": [
        "Bist du mit deinem aktuellen Gehalt zufrieden?",
        "Bist du für dein aktuelles Gehalt zufrieden?",
        "Bist du über dein aktuelles Gehalt zufrieden?",
        "Bist du an deinem aktuellen Gehalt zufrieden?"
      ],
      "correct": 0,
      "explanationDe": "'zufrieden sein' verlangt die Präposition 'mit' + Dativ.",
      "explanationEn": "'zufrieden sein' takes 'mit' + dative.",
      "rule": "zufrieden mit + Dativ"
    },
    {
      "id": "vp_q16",
      "type": "multiple_choice",
      "prompt": "Er ärgert sich oft ___ die vielen Verspätungen der Bahn.",
      "sub": "sich ärgern über + Akk",
      "options": ["über", "auf", "an", "für"],
      "correct": 0,
      "explanationDe": "'sich ärgern' verlangt die Präposition 'über' + Akkusativ.",
      "explanationEn": "'sich ärgern' requires 'über' + accusative.",
      "rule": "sich ärgern über + Akkusativ"
    },
    {
      "id": "vp_q17",
      "type": "multiple_choice",
      "prompt": "Erinnerst du dich noch ___ unseren Urlaub in Italien?",
      "sub": "sich erinnern an + Akk",
      "options": ["an", "auf", "in", "an den"],
      "correct": 0,
      "explanationDe": "'sich erinnern' verlangt die Präposition 'an' + Akkusativ.",
      "explanationEn": "'sich erinnern' requires 'an' + accusative.",
      "rule": "sich erinnern an + Akkusativ"
    },
    {
      "id": "vp_q18",
      "type": "multiple_choice",
      "prompt": "Ich habe mich sehr schnell ___ das deutsche Wetter gewöhnt.",
      "sub": "sich gewöhnen an + Akk",
      "options": ["an", "zu", "für", "mit"],
      "correct": 0,
      "explanationDe": "'sich gewöhnen' verlangt die Präposition 'an' + Akkusativ.",
      "explanationEn": "'sich gewöhnen' requires 'an' + accusative.",
      "rule": "sich gewöhnen an + Akkusativ"
    },
    {
      "id": "vp_q19",
      "type": "gap_fill",
      "prompt": "Viele Arbeitnehmer protestieren lautstark ___ die geplante Reform.",
      "sub": "protestieren gegen + Akk",
      "options": ["gegen", "für", "mit", "von"],
      "correct": 0,
      "explanationDe": "'protestieren' verlangt die Präposition 'gegen' + Akkusativ.",
      "explanationEn": "'protestieren' takes 'gegen' + accusative.",
      "rule": "protestieren gegen + Akkusativ"
    },
    {
      "id": "vp_q20",
      "type": "word_order",
      "prompt": "Bringe den Satz in die richtige Wortstellung: 'worauf / wartest / du / denn / noch ?'",
      "sub": "Fragestellung mit Pronominaladverb",
      "options": [
        "Worauf wartest du denn noch?",
        "Auf was wartest du denn noch?",
        "Du wartest worauf denn noch?",
        "Wartest du worauf denn noch?"
      ],
      "correct": 0,
      "explanationDe": "Im formellen B1-Standarddeutsch fragt man mit dem Pronominaladverb 'Worauf'.",
      "explanationEn": "In standard B1 German, use the pronominal adverb 'Worauf'.",
      "rule": "Worauf wartest du?"
    },
    {
      "id": "vp_q21",
      "type": "multiple_choice",
      "prompt": "Wir gratulieren dir ganz herzlich ___ deinem Geburtstag!",
      "sub": "gratulieren zu + Dat",
      "options": ["zu", "an", "für", "über"],
      "correct": 0,
      "explanationDe": "'gratulieren' verlangt die Präposition 'zu' + Dativ.",
      "explanationEn": "'gratulieren' takes 'zu' + dative.",
      "rule": "gratulieren zu + Dativ"
    },
    {
      "id": "vp_q22",
      "type": "gap_fill",
      "prompt": "Die Eltern sind sehr stolz ___ die schulischen Erfolge ihrer Tochter.",
      "sub": "stolz auf + Akk",
      "options": ["auf", "über", "von", "mit"],
      "correct": 0,
      "explanationDe": "'stolz sein' verlangt die Präposition 'auf' + Akkusativ.",
      "explanationEn": "'stolz sein' takes 'auf' + accusative.",
      "rule": "stolz auf + Akkusativ"
    },
    {
      "id": "vp_q23",
      "type": "multiple_choice",
      "prompt": "Er leidet schon seit Wochen ___ einer schweren Grippe.",
      "sub": "leiden an + Dat (Krankheit)",
      "options": ["an", "unter", "von", "aus"],
      "correct": 0,
      "explanationDe": "Bei einer konkreten Krankheit heißt es 'leiden an' + Dativ (bei Umständen 'unter').",
      "explanationEn": "For an illness use 'leiden an' + dative (for conditions use 'unter').",
      "rule": "leiden an + Dativ"
    },
    {
      "id": "vp_q24",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Ich interessiere mich an der deutschen Sprache.'",
      "sub": "sich interessieren",
      "options": [
        "'für die deutsche Sprache' statt 'an der deutschen Sprache'",
        "'über die deutsche Sprache'",
        "'zu der deutschen Sprache'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "Das Verb heißt 'sich interessieren für' + Akkusativ (nicht 'an').",
      "explanationEn": "The verb is 'sich interessieren für' + accusative.",
      "rule": "sich interessieren für"
    },
    {
      "id": "vp_q25",
      "type": "sentence_translation",
      "prompt": "Translate: 'Can I rely on your help?'",
      "sub": "sich verlassen auf + Akk",
      "options": [
        "Kann ich mich auf deine Hilfe verlassen?",
        "Kann ich mich für deine Hilfe verlassen?",
        "Kann ich mich an deiner Hilfe verlassen?",
        "Kann ich mich zu deiner Hilfe verlassen?"
      ],
      "correct": 0,
      "explanationDe": "'sich verlassen auf' verlangt 'auf' + Akkusativ.",
      "explanationEn": "'sich verlassen auf' requires 'auf' + accusative.",
      "rule": "sich verlassen auf + Akkusativ"
    }
  ]
};
