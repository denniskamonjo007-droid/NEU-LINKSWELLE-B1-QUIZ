// B1 German Grammar Topic 10: N-Deklination (Schwache Maskulina)

export const N_DEKLINATION_TOPIC = {
  "id": "n_deklination",
  "exportName": "N_DEKLINATION_TOPIC",
  "titleDe": "10. N-Deklination (Schwache Maskulina)",
  "titleEn": "10. N-Declension (Weak Masculine Nouns)",
  "icon": "👤",
  "badge": "Endung -(e)n in allen Kasus",
  "summaryDe": "Eine Gruppe meist maskuliner Nomen erhält in allen Fällen (Akkusativ, Dativ, Genitiv) die Endung -(e)n im Singular. Nur der Nominativ Singular bleibt ohne Endung.",
  "summaryEn": "Weak masculine nouns add -(e)n in all cases (accusative, dative, genitive) in the singular. Only the nominative singular remains without an ending.",
  "cheatSheet": {
    "rule": "Nom: der Kunde | Akk: den Kunden | Dat: dem Kunden | Gen: des Kunden (Plural: die Kunden).",
    "keyConnectors": [
      {
        "conn": "Maskulina auf -e (Personen/Tiere)",
        "meaning": "der Junge, der Kunde, der Kollege, der Nachbar, der Löwe",
        "example": "Ich frage den Kunden (Akk). Ich helfe dem Kollegen (Dat)."
      },
      {
        "conn": "Fremdwörter auf -ent, -ant, -ist, -at",
        "meaning": "der Student, der Assistent, der Polizist, der Tourist, der Soldat",
        "example": "Die Polizei befragt den Zeugen (Akk). Der Professor spricht mit dem Studenten (Dat)."
      },
      {
        "conn": "Besondere Nomen mit -en / -ens",
        "meaning": "der Herr (den/dem Herrn), der Name (des Namens), das Herz (des Herzens)",
        "example": "Guten Tag, Herr Müller! Ich kenne diesen Herrn (Akk). Wie lautet der Vorname des Herrn?"
      }
    ],
    "goldenRules": [
      "Goldene Regel 1: N-Deklination betrifft fast ausschließlich MASKULINE Personenbezeichnungen (einzige Ausnahme Neutrum: 'das Herz').",
      "Goldene Regel 2: Im Genitiv Singular erhalten 'der Name', 'der Gedanke' und 'das Herz' zusätzlich ein -s: 'des Namens', 'des Gedankens', 'des Herzens'."
    ]
  },
  "questions": [
    {
      "id": "nd_q1",
      "type": "multiple_choice",
      "prompt": "Gestern habe ich meinen neuen ___ im Büro kennengelernt.",
      "sub": "Akkusativ Singular von 'der Kollege'",
      "options": ["Kollegen", "Kollege", "Kolleges", "Kollegem"],
      "correct": 0,
      "explanationDe": "'der Kollege' ist ein N-Deklinations-Nomen und erhält im Akkusativ die Endung '-n': 'den Kollegen'.",
      "explanationEn": "'der Kollege' is a weak masculine noun and gets '-n' in accusative: 'den Kollegen'.",
      "rule": "N-Deklination: Akk. Sg. mit -(e)n"
    },
    {
      "id": "nd_q2",
      "type": "multiple_choice",
      "prompt": "Wir müssen dem ___ die Rechnung sofort zuschicken.",
      "sub": "Dativ Singular von 'der Kunde'",
      "options": ["Kunden", "Kunde", "Kunder", "Kundem"],
      "correct": 0,
      "explanationDe": "Im Dativ Singular lautet die Form 'dem Kunden'.",
      "explanationEn": "In the dative singular, the form is 'dem Kunden'.",
      "rule": "N-Deklination: Dat. Sg. mit -(e)n"
    },
    {
      "id": "nd_q3",
      "type": "gap_fill",
      "prompt": "Kennen Sie diesen ___ dort drüben?",
      "sub": "Akkusativ von 'der Herr'",
      "options": ["Herrn", "Herr", "Herren", "Herres"],
      "correct": 0,
      "explanationDe": "Der Singular von 'der Herr' erhält im Akkusativ und Dativ ein '-n': 'den Herrn'. ('Herren' ist Plural).",
      "explanationEn": "Singular of 'der Herr' in accusative is 'den Herrn' ('Herren' is plural).",
      "rule": "der Herr -> den Herrn"
    },
    {
      "id": "nd_q4",
      "type": "multiple_choice",
      "prompt": "Die Zeugin sprach lange mit dem ermittelnden ___.",
      "sub": "Dativ Singular von 'der Polizist'",
      "options": ["Polizisten", "Polizist", "Poliziste", "Polizister"],
      "correct": 0,
      "explanationDe": "Nomen auf '-ist' gehören zur N-Deklination: 'dem Polizisten'.",
      "explanationEn": "Nouns ending in '-ist' follow n-declension: 'dem Polizisten'.",
      "rule": "Fremdwörter auf -ist: -(e)n"
    },
    {
      "id": "nd_q5",
      "type": "multiple_choice",
      "prompt": "Ich habe gestern unserem neuen ___ beim Umzug geholfen.",
      "sub": "Dativ Singular von 'der Nachbar'",
      "options": ["Nachbarn", "Nachbar", "Nachbars", "Nachbare"],
      "correct": 0,
      "explanationDe": "'helfen' regiert den Dativ: 'dem Nachbarn' mit N-Deklination.",
      "explanationEn": "'helfen' governs the dative: 'dem Nachbarn' with n-declension.",
      "rule": "der Nachbar -> dem Nachbarn"
    },
    {
      "id": "nd_q6",
      "type": "multiple_choice",
      "prompt": "Der Arzt untersucht den verletzten ___.",
      "sub": "Akkusativ Singular von 'der Patient'",
      "options": ["Patienten", "Patient", "Patienter", "Patientem"],
      "correct": 0,
      "explanationDe": "Nomen auf '-ent' gehören zur N-Deklination: 'den Patienten'.",
      "explanationEn": "Nouns ending in '-ent' take n-declension: 'den Patienten'.",
      "rule": "Fremdwörter auf -ent: -(e)n"
    },
    {
      "id": "nd_q7",
      "type": "gap_fill",
      "prompt": "Wie lautet die Schreibweise deines ___?",
      "sub": "Genitiv Singular von 'der Name'",
      "options": ["Namens", "Namen", "Names", "Name"],
      "correct": 0,
      "explanationDe": "'der Name' bildet den Genitiv unregelmäßig mit '-ns': 'des Namens'.",
      "explanationEn": "'der Name' forms genitive irregularly with '-ns': 'des Namens'.",
      "rule": "der Name -> des Namens"
    },
    {
      "id": "nd_q8",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Ich habe gestern den Student nach dem Weg gefragt.'",
      "sub": "Akkusativ von 'der Student'",
      "options": [
        "'den Studenten' statt 'den Student'",
        "'dem Student' statt 'den Student'",
        "'der Student' statt 'den Student'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "'der Student' muss als schwaches Nomen im Akkusativ 'den Studenten' heißen.",
      "explanationEn": "'der Student' as a weak noun must be 'den Studenten' in the accusative.",
      "rule": "der Student -> den Studenten"
    },
    {
      "id": "nd_q9",
      "type": "multiple_choice",
      "prompt": "Die Mutter rief den kleinen ___ zum Abendessen.",
      "sub": "Akkusativ von 'der Junge'",
      "options": ["Jungen", "Junge", "Junger", "Junges"],
      "correct": 0,
      "explanationDe": "'der Junge' verlangt im Akkusativ ein '-n': 'den Jungen'.",
      "explanationEn": "'der Junge' requires '-n' in accusative: 'den Jungen'.",
      "rule": "der Junge -> den Jungen"
    },
    {
      "id": "nd_q10",
      "type": "sentence_translation",
      "prompt": "Translate: 'We thanked the customer for the order.'",
      "sub": "Dativ mit danken",
      "options": [
        "Wir haben dem Kunden für den Auftrag gedankt.",
        "Wir haben dem Kunde für den Auftrag gedankt.",
        "Wir haben den Kunden für den Auftrag gedankt.",
        "Wir haben des Kunden für den Auftrag gedankt."
      ],
      "correct": 0,
      "explanationDe": "'danken' verlangt Dativ: 'dem Kunden' (N-Deklination).",
      "explanationEn": "'danken' takes dative: 'dem Kunden' with n-declension.",
      "rule": "danken + Dat: dem Kunden"
    },
    {
      "id": "nd_q11",
      "type": "multiple_choice",
      "prompt": "Der Richter befragte den einzigen ___ des Unfalls.",
      "sub": "Akkusativ von 'der Zeuge'",
      "options": ["Zeugen", "Zeuge", "Zeuges", "Zeugem"],
      "correct": 0,
      "explanationDe": "'der Zeuge' gehört zur N-Deklination: 'den Zeugen'.",
      "explanationEn": "'der Zeuge' takes n-declension: 'den Zeugen'.",
      "rule": "der Zeuge -> den Zeugen"
    },
    {
      "id": "nd_q12",
      "type": "multiple_choice",
      "prompt": "Sie schenkte ihrem kleinen ___ ein schönes Spielzeug.",
      "sub": "Dativ von 'der Neffe'",
      "options": ["Neffen", "Neffe", "Neffes", "Neffem"],
      "correct": 0,
      "explanationDe": "'der Neffe' (maskuline Person auf -e) erhält im Dativ ein '-n': 'ihrem Neffen'.",
      "explanationEn": "'der Neffe' gets '-n' in dative: 'ihrem Neffen'.",
      "rule": "der Neffe -> dem Neffen"
    },
    {
      "id": "nd_q13",
      "type": "gap_fill",
      "prompt": "Das Buch beschreibt das abenteuerliche Leben eines berühmten ___.",
      "sub": "Genitiv von 'der Astronaut'",
      "options": ["Astronauten", "Astronauts", "Astronaut", "Astronautes"],
      "correct": 0,
      "explanationDe": "Fremdwörter auf '-aut' folgen der N-Deklination: 'eines Astronauten'.",
      "explanationEn": "Nouns ending in '-aut' follow n-declension: 'eines Astronauten'.",
      "rule": "der Astronaut -> des Astronauten"
    },
    {
      "id": "nd_q14",
      "type": "multiple_choice",
      "prompt": "Ich habe die Bitte von ganzem ___ erfüllt.",
      "sub": "Dativ von 'das Herz'",
      "options": ["Herzen", "Herz", "Herzens", "Herzem"],
      "correct": 0,
      "explanationDe": "'das Herz' ist die Ausnahme der N-Deklination: Dativ 'dem Herzen'.",
      "explanationEn": "'das Herz' is irregular neuter: dative 'dem Herzen'.",
      "rule": "das Herz -> von ganzem Herzen"
    },
    {
      "id": "nd_q15",
      "type": "multiple_choice",
      "prompt": "Die Touristen folgten dem erfahrenen ___ durch das historische Museum.",
      "sub": "Dativ von 'der Experte'",
      "options": ["Experten", "Experte", "Expertes", "Expertem"],
      "correct": 0,
      "explanationDe": "'der Experte' verlangt im Dativ '-n': 'dem Experten'.",
      "explanationEn": "'der Experte' takes '-n' in dative: 'dem Experten'.",
      "rule": "der Experte -> dem Experten"
    },
    {
      "id": "nd_q16",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Der Chef sprach gestern mit einem neuen Praktikant.'",
      "sub": "Nomen auf -ant",
      "options": [
        "'Praktikanten' statt 'Praktikant'",
        "'Praktikantes' statt 'Praktikant'",
        "'Praktikantem' statt 'Praktikant'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "Fremdwörter auf '-ant' gehören zur N-Deklination: 'mit einem Praktikanten'.",
      "explanationEn": "Nouns ending in '-ant' take n-declension: 'Praktikanten'.",
      "rule": "der Praktikant -> dem Praktikanten"
    },
    {
      "id": "nd_q17",
      "type": "multiple_choice",
      "prompt": "Der Tierarzt fütterte den verletzten ___.",
      "sub": "Akkusativ von 'der Bär'",
      "options": ["Bären", "Bär", "Bäres", "Bärem"],
      "correct": 0,
      "explanationDe": "'der Bär' gehört zur N-Deklination: 'den Bären'.",
      "explanationEn": "'der Bär' is a weak masculine noun: 'den Bären'.",
      "rule": "der Bär -> den Bären"
    },
    {
      "id": "nd_q18",
      "type": "gap_fill",
      "prompt": "Der Anwalt vertritt den ausländischen ___ vor Gericht.",
      "sub": "Akkusativ von 'der Staatsangehörige/Diplomat'",
      "options": ["Diplomaten", "Diplomat", "Diplomates", "Diplomater"],
      "correct": 0,
      "explanationDe": "Nomen auf '-at' gehören zur N-Deklination: 'den Diplomaten'.",
      "explanationEn": "Nouns ending in '-at' take n-declension: 'den Diplomaten'.",
      "rule": "der Diplomat -> den Diplomaten"
    },
    {
      "id": "nd_q19",
      "type": "multiple_choice",
      "prompt": "Er konnte sich den ___ des Autors nicht merken.",
      "sub": "Akkusativ von 'der Name'",
      "options": ["Namen", "Name", "Namens", "Names"],
      "correct": 0,
      "explanationDe": "'der Name' erhält im Akkusativ ein '-n': 'den Namen'.",
      "explanationEn": "'der Name' gets '-n' in accusative: 'den Namen'.",
      "rule": "der Name -> den Namen"
    },
    {
      "id": "nd_q20",
      "type": "word_order",
      "prompt": "Bringe den Satz in die richtige Wortstellung: 'wir / dem Herrn / haben / geholfen'",
      "sub": "Dativ mit helfen und Perfekt",
      "options": [
        "Wir haben dem Herrn geholfen.",
        "Wir haben dem Herr geholfen.",
        "Wir dem Herrn haben geholfen.",
        "Geholfen haben wir dem Herr."
      ],
      "correct": 0,
      "explanationDe": "Dativ von 'der Herr' ist 'dem Herrn'. Satzklammer: 'haben ... geholfen'.",
      "explanationEn": "Dative of 'der Herr' is 'dem Herrn'. Correct verb bracket: 'haben ... geholfen'.",
      "rule": "dem Herrn + geholfen"
    },
    {
      "id": "nd_q21",
      "type": "multiple_choice",
      "prompt": "Der Professor stellte dem ___ eine schwierige Frage.",
      "sub": "Dativ von 'der Biologe'",
      "options": ["Biologen", "Biologe", "Biologes", "Biologem"],
      "correct": 0,
      "explanationDe": "Berufsbezeichnungen auf '-e' gehören zur N-Deklination: 'dem Biologen'.",
      "explanationEn": "Professions ending in '-e' take n-declension: 'dem Biologen'.",
      "rule": "der Biologe -> dem Biologen"
    },
    {
      "id": "nd_q22",
      "type": "gap_fill",
      "prompt": "Ich habe den Brief des ___ heute erhalten.",
      "sub": "Genitiv von 'der Präsident'",
      "options": ["Präsidenten", "Präsident", "Präsidents", "Präsidenter"],
      "correct": 0,
      "explanationDe": "'der Präsident' erhält im Genitiv '-en': 'des Präsidenten'.",
      "explanationEn": "'der Präsident' gets '-en' in genitive: 'des Präsidenten'.",
      "rule": "der Präsident -> des Präsidenten"
    },
    {
      "id": "nd_q23",
      "type": "multiple_choice",
      "prompt": "Kennst du diesen ___ aus unserer Nachbarschaft?",
      "sub": "Akkusativ von 'der Fotograf'",
      "options": ["Fotografen", "Fotograf", "Fotografs", "Fotografe"],
      "correct": 0,
      "explanationDe": "Nomen auf '-graf' gehören zur N-Deklination: 'diesen Fotografen'.",
      "explanationEn": "Nouns ending in '-graf' take n-declension: 'diesen Fotografen'.",
      "rule": "der Fotograf -> den Fotografen"
    },
    {
      "id": "nd_q24",
      "type": "error_correction",
      "prompt": "Finde den Fehler: 'Ich schenke dem Junge ein neues Fahrrad.'",
      "sub": "Dativ von 'der Junge'",
      "options": [
        "'dem Jungen' statt 'dem Junge'",
        "'den Junge' statt 'dem Junge'",
        "'dem Junges' statt 'dem Junge'",
        "Der Satz ist korrekt"
      ],
      "correct": 0,
      "explanationDe": "'der Junge' verlangt im Dativ zwingend die Endung '-n': 'dem Jungen'.",
      "explanationEn": "'der Junge' strictly takes '-n' in dative: 'dem Jungen'.",
      "rule": "der Junge -> dem Jungen"
    },
    {
      "id": "nd_q25",
      "type": "sentence_translation",
      "prompt": "Translate: 'The police arrested the thief and questioned the witness.'",
      "sub": "der Zeuge im Akkusativ",
      "options": [
        "Die Polizei verhaftete den Dieb und befragte den Zeugen.",
        "Die Polizei verhaftete den Dieb und befragte den Zeuge.",
        "Die Polizei verhaftete den Dieb und befragte dem Zeugen.",
        "Die Polizei verhaftete den Dieb und befragte des Zeugens."
      ],
      "correct": 0,
      "explanationDe": "'den Zeugen' (Akkusativ Singular mit N-Deklination).",
      "explanationEn": "'den Zeugen' (accusative singular with n-declension).",
      "rule": "befragen + Akk: den Zeugen"
    }
  ]
};
