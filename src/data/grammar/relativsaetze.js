// B1 German Grammar Topic: Relativsätze (Kasus & Präpositionen)
export const RELATIVSAETZE_TOPIC = {
  "id": "relativsaetze",
  "exportName": "RELATIVSAETZE_TOPIC",
  "titleDe": "02. Relativsätze (Kasus & Präpositionen)",
  "titleEn": "02. Relative Clauses (Cases & Prepositions)",
  "icon": "🔍",
  "badge": "der, die, das / dessen, deren / mit Präpositionen",
  "summaryDe": "Relativsätze geben nähere Informationen über ein Bezugswort. Das Relativpronomen richtet sich im Genus und Numerus nach dem Bezugswort, im Kasus jedoch nach seiner Rolle im Relativsatz.",
  "summaryEn": "Relative clauses describe an antecedent. The pronoun matches gender/number of the antecedent, and case based on its syntactic role in the relative clause.",
  "cheatSheet": {
    "rule": "Nominativ: der/die/das/die; Akkusativ: den/die/das/die; Dativ: dem/der/dem/denen; Genitiv: dessen/deren/dessen/deren. Präpositionen bestimmen den Kasus!",
    "goldenRules": [
      "Goldene Regel 1: Im Plural Dativ heißt das Relativpronomen IMMER 'denen' (z.B. 'die Freunde, mit DENEN ich reise')!",
      "Goldene Regel 2: Nach unbestimmten Wörtern wie 'alles', 'nichts', 'etwas' und substantivierten Superlativen ('das Beste') steht 'was' als Relativpronomen!"
    ]
  },
  "questions": [
    {
      "id": "rel_q1",
      "type": "multiple_choice",
      "prompt": "Das ist der Mann, ___ ich gestern im Supermarkt getroffen habe.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "den",
        "der",
        "dem",
        "dessen"
      ],
      "correct": 0,
      "explanationDe": "Akkusativ Maskulin -> 'den'.",
      "explanationEn": "Akkusativ Maskulin -> 'den'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q2",
      "type": "multiple_choice",
      "prompt": "Die Kollegin, ___ ich das Buch gegeben habe, ist heute krank.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "der",
        "die",
        "den",
        "deren"
      ],
      "correct": 0,
      "explanationDe": "Dativ Feminin -> 'der'.",
      "explanationEn": "Dativ Feminin -> 'der'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q3",
      "type": "multiple_choice",
      "prompt": "Das Kind, ___ auf dem Spielplatz spielt, lacht fröhlich.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "das",
        "dem",
        "dessen",
        "den"
      ],
      "correct": 0,
      "explanationDe": "Nominativ Neutrum -> 'das'.",
      "explanationEn": "Nominativ Neutrum -> 'das'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q4",
      "type": "multiple_choice",
      "prompt": "Die Nachbarn, mit ___ wir gesprochen haben, sind sehr nett.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "denen",
        "die",
        "den",
        "deren"
      ],
      "correct": 0,
      "explanationDe": "Dativ Plural nach 'mit' -> 'denen'.",
      "explanationEn": "Dativ Plural nach 'mit' -> 'denen'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q5",
      "type": "multiple_choice",
      "prompt": "Kennst du die Frau, ___ Auto vor dem Haus parkt?",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "deren",
        "dessen",
        "der",
        "die"
      ],
      "correct": 0,
      "explanationDe": "Genitiv Feminin -> 'deren'.",
      "explanationEn": "Genitiv Feminin -> 'deren'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q6",
      "type": "multiple_choice",
      "prompt": "Der Handwerker, ___ Sohn mit mir studiert, hat den Tisch gebaut.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "dessen",
        "deren",
        "dem",
        "den"
      ],
      "correct": 0,
      "explanationDe": "Genitiv Maskulin -> 'dessen'.",
      "explanationEn": "Genitiv Maskulin -> 'dessen'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q7",
      "type": "multiple_choice",
      "prompt": "Das Projekt, an ___ wir arbeiten, ist fast abgeschlossen.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "dem",
        "das",
        "dessen",
        "den"
      ],
      "correct": 0,
      "explanationDe": "'arbeiten an' + Dativ Neutrum -> 'an dem'.",
      "explanationEn": "'arbeiten an' + Dativ Neutrum -> 'an dem'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q8",
      "type": "multiple_choice",
      "prompt": "Hier ist der Kollege, über ___ sich alle freuen.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "den",
        "dem",
        "der",
        "dessen"
      ],
      "correct": 0,
      "explanationDe": "'freuen über' + Akkusativ Maskulin -> 'über den'.",
      "explanationEn": "'freuen über' + Akkusativ Maskulin -> 'über den'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q9",
      "type": "multiple_choice",
      "prompt": "Die Wohnung, in ___ wir wohnen, hat einen Garten.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "der",
        "die",
        "dem",
        "deren"
      ],
      "correct": 0,
      "explanationDe": "Wo? -> Dativ Feminin -> 'in der'.",
      "explanationEn": "Wo? -> Dativ Feminin -> 'in der'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q10",
      "type": "multiple_choice",
      "prompt": "Das Thema, für ___ ich mich interessiere, ist spannend.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "das",
        "dem",
        "den",
        "dessen"
      ],
      "correct": 0,
      "explanationDe": "'interessieren für' + Akkusativ Neutrum -> 'für das'.",
      "explanationEn": "'interessieren für' + Akkusativ Neutrum -> 'für das'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q11",
      "type": "multiple_choice",
      "prompt": "Gibt es jemanden, ___ mir kurz helfen kann?",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "der",
        "den",
        "dem",
        "dessen"
      ],
      "correct": 0,
      "explanationDe": "Nominativ Maskulin Subjekt -> 'der'.",
      "explanationEn": "Nominativ Maskulin Subjekt -> 'der'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q12",
      "type": "multiple_choice",
      "prompt": "Die Kinder, für ___ wir Geschenke gekauft haben, freuen sich.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "die",
        "denen",
        "deren",
        "der"
      ],
      "correct": 0,
      "explanationDe": "'für' + Akkusativ Plural -> 'für die'.",
      "explanationEn": "'für' + Akkusativ Plural -> 'für die'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q13",
      "type": "multiple_choice",
      "prompt": "Das Mädchen, ___ Tasche gestohlen wurde, weinte.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "dessen",
        "deren",
        "dem",
        "das"
      ],
      "correct": 0,
      "explanationDe": "Genitiv Neutrum -> 'dessen'.",
      "explanationEn": "Genitiv Neutrum -> 'dessen'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q14",
      "type": "multiple_choice",
      "prompt": "Der Arzt, zu ___ ich gehe, hat Urlaub.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "dem",
        "den",
        "der",
        "dessen"
      ],
      "correct": 0,
      "explanationDe": "'zu' + Dativ Maskulin -> 'zu dem'.",
      "explanationEn": "'zu' + Dativ Maskulin -> 'zu dem'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q15",
      "type": "multiple_choice",
      "prompt": "Die Stadt, aus ___ sie kommt, liegt in den Alpen.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "der",
        "die",
        "dem",
        "deren"
      ],
      "correct": 0,
      "explanationDe": "'aus' + Dativ Feminin -> 'aus der'.",
      "explanationEn": "'aus' + Dativ Feminin -> 'aus der'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q16",
      "type": "multiple_choice",
      "prompt": "Wo sind die Papiere, ___ ich unterschreiben muss?",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "die",
        "denen",
        "der",
        "deren"
      ],
      "correct": 0,
      "explanationDe": "Akkusativ Plural -> 'die'.",
      "explanationEn": "Akkusativ Plural -> 'die'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q17",
      "type": "multiple_choice",
      "prompt": "Das Hotel, in ___ wir geschlafen haben, war sauber.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "dem",
        "das",
        "der",
        "den"
      ],
      "correct": 0,
      "explanationDe": "Dativ Neutrum -> 'in dem'.",
      "explanationEn": "Dativ Neutrum -> 'in dem'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q18",
      "type": "multiple_choice",
      "prompt": "Der Bus, auf ___ alle warten, hat Verspätung.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "den",
        "dem",
        "der",
        "dessen"
      ],
      "correct": 0,
      "explanationDe": "'warten auf' + Akkusativ Maskulin -> 'auf den'.",
      "explanationEn": "'warten auf' + Akkusativ Maskulin -> 'auf den'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q19",
      "type": "multiple_choice",
      "prompt": "Das ist alles, ___ ich dazu sagen möchte.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "was",
        "das",
        "dem",
        "welches"
      ],
      "correct": 0,
      "explanationDe": "Nach 'alles' steht 'was'.",
      "explanationEn": "Nach 'alles' steht 'was'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q20",
      "type": "multiple_choice",
      "prompt": "Die Schule, an ___ er unterrichtet, ist modern.",
      "sub": "Wähle das passende Relativpronomen",
      "options": [
        "der",
        "die",
        "dem",
        "deren"
      ],
      "correct": 0,
      "explanationDe": "'an' + Dativ Feminin -> 'an der'.",
      "explanationEn": "'an' + Dativ Feminin -> 'an der'.",
      "rule": "Relativpronomen"
    },
    {
      "id": "rel_q21",
      "type": "gap_fill",
      "prompt": "Der Laptop, [ ... ] ich gekauft habe, ist schnell.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "den",
        "der",
        "dem",
        "dessen"
      ],
      "correct": 0,
      "explanationDe": "Akkusativ Maskulin -> 'den'.",
      "explanationEn": "Akkusativ Maskulin -> 'den'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q22",
      "type": "gap_fill",
      "prompt": "Die Frau, mit [ ... ] er spricht, ist seine Tante.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "der",
        "die",
        "dem",
        "denen"
      ],
      "correct": 0,
      "explanationDe": "Dativ Feminin nach 'mit' -> 'der'.",
      "explanationEn": "Dativ Feminin nach 'mit' -> 'der'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q23",
      "type": "gap_fill",
      "prompt": "Das Buch, [ ... ] auf dem Tisch liegt, ist meins.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "das",
        "dem",
        "den",
        "dessen"
      ],
      "correct": 0,
      "explanationDe": "Nominativ Neutrum -> 'das'.",
      "explanationEn": "Nominativ Neutrum -> 'das'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q24",
      "type": "gap_fill",
      "prompt": "Die Gäste, [ ... ] er gedankt hat, waren zufrieden.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "denen",
        "die",
        "der",
        "deren"
      ],
      "correct": 0,
      "explanationDe": "Dativ Plural -> 'denen'.",
      "explanationEn": "Dativ Plural -> 'denen'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q25",
      "type": "gap_fill",
      "prompt": "Die Lehrerin, [ ... ] Auto gestohlen wurde, erstattete Anzeige.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "deren",
        "dessen",
        "der",
        "die"
      ],
      "correct": 0,
      "explanationDe": "Genitiv Feminin -> 'deren'.",
      "explanationEn": "Genitiv Feminin -> 'deren'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q26",
      "type": "gap_fill",
      "prompt": "Der Schüler, [ ... ] Heft nass wurde, trocknete es.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "dessen",
        "deren",
        "dem",
        "den"
      ],
      "correct": 0,
      "explanationDe": "Genitiv Maskulin -> 'dessen'.",
      "explanationEn": "Genitiv Maskulin -> 'dessen'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q27",
      "type": "gap_fill",
      "prompt": "Der Schlüssel, mit [ ... ] man die Tür öffnet, ist verloren.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "dem",
        "den",
        "der",
        "dessen"
      ],
      "correct": 0,
      "explanationDe": "Dativ Maskulin -> 'mit dem'.",
      "explanationEn": "Dativ Maskulin -> 'mit dem'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q28",
      "type": "gap_fill",
      "prompt": "Die Freunde, an [ ... ] wir geschrieben haben, antworteten schnell.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "die",
        "denen",
        "der",
        "deren"
      ],
      "correct": 0,
      "explanationDe": "'schreiben an' + Akkusativ Plural -> 'an die'.",
      "explanationEn": "'schreiben an' + Akkusativ Plural -> 'an die'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q29",
      "type": "gap_fill",
      "prompt": "Das Restaurant, in [ ... ] wir aßen, war gemütlich.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "dem",
        "das",
        "der",
        "den"
      ],
      "correct": 0,
      "explanationDe": "Dativ Neutrum -> 'in dem'.",
      "explanationEn": "Dativ Neutrum -> 'in dem'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q30",
      "type": "gap_fill",
      "prompt": "Der Kollege, [ ... ] mir immer hilft, hat heute frei.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "der",
        "den",
        "dem",
        "dessen"
      ],
      "correct": 0,
      "explanationDe": "Nominativ Maskulin -> 'der'.",
      "explanationEn": "Nominativ Maskulin -> 'der'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q31",
      "type": "gap_fill",
      "prompt": "Die Aufgaben, [ ... ] wir lösen mussten, waren schwer.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "die",
        "denen",
        "der",
        "deren"
      ],
      "correct": 0,
      "explanationDe": "Akkusativ Plural -> 'die'.",
      "explanationEn": "Akkusativ Plural -> 'die'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q32",
      "type": "gap_fill",
      "prompt": "Die Dame, von [ ... ] ich das gelernt habe, ist Professorin.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "der",
        "die",
        "dem",
        "dessen"
      ],
      "correct": 0,
      "explanationDe": "Dativ Feminin nach 'von' -> 'von der'.",
      "explanationEn": "Dativ Feminin nach 'von' -> 'von der'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q33",
      "type": "gap_fill",
      "prompt": "Das ist das Beste, [ ... ] passieren konnte!",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "was",
        "das",
        "dem",
        "dessen"
      ],
      "correct": 0,
      "explanationDe": "Nach substantiviertem Superlativ -> 'was'.",
      "explanationEn": "Nach substantiviertem Superlativ -> 'was'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q34",
      "type": "gap_fill",
      "prompt": "Der Tourist, [ ... ] wir den Weg zeigten, bedankte sich.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "dem",
        "den",
        "der",
        "dessen"
      ],
      "correct": 0,
      "explanationDe": "Dativ Maskulin -> 'dem'.",
      "explanationEn": "Dativ Maskulin -> 'dem'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q35",
      "type": "gap_fill",
      "prompt": "Die Nachbarn, [ ... ] Hund laut bellt, sind verreist.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "deren",
        "dessen",
        "denen",
        "die"
      ],
      "correct": 0,
      "explanationDe": "Genitiv Plural -> 'deren'.",
      "explanationEn": "Genitiv Plural -> 'deren'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q36",
      "type": "gap_fill",
      "prompt": "Der Zug, in [ ... ] sie stiegen, fuhr pünktlich ab.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "den",
        "dem",
        "der",
        "dessen"
      ],
      "correct": 0,
      "explanationDe": "Wohin? -> Akkusativ Maskulin 'in den'.",
      "explanationEn": "Wohin? -> Akkusativ Maskulin 'in den'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q37",
      "type": "gap_fill",
      "prompt": "Das Gebäude, vor [ ... ] die Taxis stehen, ist der Bahnhof.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "dem",
        "das",
        "der",
        "den"
      ],
      "correct": 0,
      "explanationDe": "Dativ Neutrum -> 'vor dem'.",
      "explanationEn": "Dativ Neutrum -> 'vor dem'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q38",
      "type": "gap_fill",
      "prompt": "Die Ärztin, [ ... ] er vertraut, hat ihn geheilt.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "der",
        "die",
        "den",
        "deren"
      ],
      "correct": 0,
      "explanationDe": "'vertrauen' + Dativ -> 'der'.",
      "explanationEn": "'vertrauen' + Dativ -> 'der'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q39",
      "type": "gap_fill",
      "prompt": "Die Menschen, für [ ... ] dieses Gesetz gilt, protestieren.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "die",
        "denen",
        "der",
        "deren"
      ],
      "correct": 0,
      "explanationDe": "'für' + Akkusativ Plural -> 'für die'.",
      "explanationEn": "'für' + Akkusativ Plural -> 'für die'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q40",
      "type": "gap_fill",
      "prompt": "Das Zimmer, [ ... ] Fenster zum Hof geht, ist ruhig.",
      "sub": "Setze das richtige Relativpronomen ein",
      "options": [
        "dessen",
        "deren",
        "dem",
        "das"
      ],
      "correct": 0,
      "explanationDe": "Genitiv Neutrum -> 'dessen'.",
      "explanationEn": "Genitiv Neutrum -> 'dessen'.",
      "rule": "Lückentext: Relativpronomen"
    },
    {
      "id": "rel_q41",
      "type": "sentence_translation",
      "prompt": "Translate: 'The woman who lives next door is nice.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Die Frau, die nebenan wohnt, ist nett.",
        "Die Frau, der nebenan wohnt, ist nett.",
        "Die Frau, welche wohnt nebenan, ist nett.",
        "Die Frau, wer nebenan wohnt, ist nett."
      ],
      "correct": 0,
      "explanationDe": "Nom. Feminin -> 'die'.",
      "explanationEn": "Nom. Feminin -> 'die'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q42",
      "type": "sentence_translation",
      "prompt": "Translate: 'The man whom I invited is here.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Der Mann, den ich eingeladen habe, ist hier.",
        "Der Mann, dem ich eingeladen habe, ist hier.",
        "Der Mann, der ich eingeladen habe, ist hier.",
        "Der Mann, wen ich eingeladen habe, ist hier."
      ],
      "correct": 0,
      "explanationDe": "Akk. Maskulin -> 'den'.",
      "explanationEn": "Akk. Maskulin -> 'den'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q43",
      "type": "sentence_translation",
      "prompt": "Translate: 'The book that I am reading is exciting.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Das Buch, das ich lese, ist spannend.",
        "Das Buch, dem ich lese, ist spannend.",
        "Das Buch, den ich lese, ist spannend.",
        "Das Buch, welches ich lese ist spannend."
      ],
      "correct": 0,
      "explanationDe": "Akk. Neutrum -> 'das'.",
      "explanationEn": "Akk. Neutrum -> 'das'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q44",
      "type": "sentence_translation",
      "prompt": "Translate: 'The neighbors to whom we wave are friendly.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Die Nachbarn, denen wir winken, sind freundlich.",
        "Die Nachbarn, die wir winken, sind freundlich.",
        "Die Nachbarn, den wir winken, sind freundlich.",
        "Die Nachbarn, deren wir winken, sind freundlich."
      ],
      "correct": 0,
      "explanationDe": "Dat. Plural -> 'denen'.",
      "explanationEn": "Dat. Plural -> 'denen'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q45",
      "type": "sentence_translation",
      "prompt": "Translate: 'The student whose dog ran away is sad.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Der Schüler, dessen Hund weggelaufen ist, ist traurig.",
        "Der Schüler, deren Hund weggelaufen ist, ist traurig.",
        "Der Schüler, dem Hund weggelaufen ist, ist traurig.",
        "Der Schüler, den Hund weggelaufen ist, ist traurig."
      ],
      "correct": 0,
      "explanationDe": "Gen. Maskulin -> 'dessen'.",
      "explanationEn": "Gen. Maskulin -> 'dessen'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q46",
      "type": "sentence_translation",
      "prompt": "Translate: 'The colleague with whom I work is helpful.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Die Kollegin, mit der ich arbeite, ist hilfsbereit.",
        "Die Kollegin, mit die ich arbeite, ist hilfsbereit.",
        "Die Kollegin, mit dem ich arbeite, ist hilfsbereit.",
        "Die Kollegin, mit denen ich arbeite, ist hilfsbereit."
      ],
      "correct": 0,
      "explanationDe": "Dat. Feminin nach 'mit' -> 'mit der'.",
      "explanationEn": "Dat. Feminin nach 'mit' -> 'mit der'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q47",
      "type": "sentence_translation",
      "prompt": "Translate: 'The apartment in which we live is big.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Die Wohnung, in der wir wohnen, ist groß.",
        "Die Wohnung, in die wir wohnen, ist groß.",
        "Die Wohnung, in dem wir wohnen, ist groß.",
        "Die Wohnung, wo in wir wohnen, ist groß."
      ],
      "correct": 0,
      "explanationDe": "Wo? -> 'in der'.",
      "explanationEn": "Wo? -> 'in der'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q48",
      "type": "sentence_translation",
      "prompt": "Translate: 'Everything that he said was right.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Alles, was er sagte, war richtig.",
        "Alles, das er sagte, war richtig.",
        "Alles, welches er sagte, war richtig.",
        "Alles, dem er sagte, war richtig."
      ],
      "correct": 0,
      "explanationDe": "Nach 'alles' -> 'was'.",
      "explanationEn": "Nach 'alles' -> 'was'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q49",
      "type": "sentence_translation",
      "prompt": "Translate: 'The teacher who explained the grammar is patient.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Der Lehrer, der die Grammatik erklärt hat, ist geduldig.",
        "Der Lehrer, den die Grammatik erklärt hat, ist geduldig.",
        "Der Lehrer, dem die Grammatik erklärt hat, ist geduldig.",
        "Der Lehrer, welcher hat die Grammatik erklärt, ist geduldig."
      ],
      "correct": 0,
      "explanationDe": "Nom. Maskulin -> 'der'.",
      "explanationEn": "Nom. Maskulin -> 'der'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q50",
      "type": "sentence_translation",
      "prompt": "Translate: 'The city to which we travel is Munich.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Die Stadt, in die wir reisen, ist München.",
        "Die Stadt, in der wir reisen, ist München.",
        "Die Stadt, nach die wir reisen, ist München.",
        "Die Stadt, zu die wir reisen, ist München."
      ],
      "correct": 0,
      "explanationDe": "Wohin? -> 'in die'.",
      "explanationEn": "Wohin? -> 'in die'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q51",
      "type": "sentence_translation",
      "prompt": "Translate: 'The friends whom I met were happy.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Die Freunde, die ich getroffen habe, waren glücklich.",
        "Die Freunde, denen ich getroffen habe, waren glücklich.",
        "Die Freunde, deren ich getroffen habe, waren glücklich.",
        "Die Freunde, den ich getroffen habe, waren glücklich."
      ],
      "correct": 0,
      "explanationDe": "Akk. Plural -> 'die'.",
      "explanationEn": "Akk. Plural -> 'die'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q52",
      "type": "sentence_translation",
      "prompt": "Translate: 'The hotel in which we stayed was cheap.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Das Hotel, in dem wir übernachtet haben, war billig.",
        "Das Hotel, in das wir übernachtet haben, war billig.",
        "Das Hotel, in den wir übernachtet haben, war billig.",
        "Das Hotel, wo in wir übernachtet haben, war billig."
      ],
      "correct": 0,
      "explanationDe": "Dat. Neutrum -> 'in dem'.",
      "explanationEn": "Dat. Neutrum -> 'in dem'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q53",
      "type": "sentence_translation",
      "prompt": "Translate: 'The woman whose daughter won is proud.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Die Frau, deren Tochter gewonnen hat, ist stolz.",
        "Die Frau, dessen Tochter gewonnen hat, ist stolz.",
        "Die Frau, der Tochter gewonnen hat, ist stolz.",
        "Die Frau, die Tochter gewonnen hat, ist stolz."
      ],
      "correct": 0,
      "explanationDe": "Gen. Feminin -> 'deren'.",
      "explanationEn": "Gen. Feminin -> 'deren'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q54",
      "type": "sentence_translation",
      "prompt": "Translate: 'The topic about which we spoke was serious.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Das Thema, über das wir sprachen, war ernst.",
        "Das Thema, über dem wir sprachen, war ernst.",
        "Das Thema, über den wir sprachen, war ernst.",
        "Das Thema, worüber sprachen wir, war ernst."
      ],
      "correct": 0,
      "explanationDe": "Akk. Neutrum nach 'über' -> 'über das'.",
      "explanationEn": "Akk. Neutrum nach 'über' -> 'über das'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q55",
      "type": "sentence_translation",
      "prompt": "Translate: 'The doctor whom I trust helped me.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Die Ärztin, der ich vertraue, half mir.",
        "Die Ärztin, die ich vertraue, half mir.",
        "Die Ärztin, den ich vertraue, half mir.",
        "Die Ärztin, deren ich vertraue, half mir."
      ],
      "correct": 0,
      "explanationDe": "'vertrauen' + Dativ -> 'der'.",
      "explanationEn": "'vertrauen' + Dativ -> 'der'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q56",
      "type": "sentence_translation",
      "prompt": "Translate: 'The bus that goes to the airport is yellow.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Der Bus, der zum Flughafen fährt, ist gelb.",
        "Der Bus, den zum Flughafen fährt, ist gelb.",
        "Der Bus, dem zum Flughafen fährt, ist gelb.",
        "Der Bus, welcher fährt zum Flughafen, ist gelb."
      ],
      "correct": 0,
      "explanationDe": "Nom. Maskulin -> 'der'.",
      "explanationEn": "Nom. Maskulin -> 'der'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q57",
      "type": "sentence_translation",
      "prompt": "Translate: 'The children for whom we cooked ate everything.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Die Kinder, für die wir gekocht haben, aßen alles.",
        "Die Kinder, für denen wir gekocht haben, aßen alles.",
        "Die Kinder, für der wir gekocht haben, aßen alles.",
        "Die Kinder, für deren wir gekocht haben, aßen alles."
      ],
      "correct": 0,
      "explanationDe": "Akk. Plural nach 'für' -> 'für die'.",
      "explanationEn": "Akk. Plural nach 'für' -> 'für die'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q58",
      "type": "sentence_translation",
      "prompt": "Translate: 'The key that was lost is found.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Der Schlüssel, der verloren war, ist gefunden.",
        "Der Schlüssel, den verloren war, ist gefunden.",
        "Der Schlüssel, dem verloren war, ist gefunden.",
        "Der Schlüssel, dessen verloren war, ist gefunden."
      ],
      "correct": 0,
      "explanationDe": "Nom. Maskulin -> 'der'.",
      "explanationEn": "Nom. Maskulin -> 'der'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q59",
      "type": "sentence_translation",
      "prompt": "Translate: 'The car whose engine is broken is in the garage.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Das Auto, dessen Motor kaputt ist, steht in der Werkstatt.",
        "Das Auto, deren Motor kaputt ist, steht in der Werkstatt.",
        "Das Auto, dem Motor kaputt ist, steht in der Werkstatt.",
        "Das Auto, das Motor kaputt ist, steht in der Werkstatt."
      ],
      "correct": 0,
      "explanationDe": "Gen. Neutrum -> 'dessen'.",
      "explanationEn": "Gen. Neutrum -> 'dessen'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q60",
      "type": "sentence_translation",
      "prompt": "Translate: 'The language that she learns is German.'",
      "sub": "Wähle die korrekte deutsche Übersetzung",
      "options": [
        "Die Sprache, die sie lernt, ist Deutsch.",
        "Die Sprache, der sie lernt, ist Deutsch.",
        "Die Sprache, welche lernt sie, ist Deutsch.",
        "Die Sprache, das sie lernt, ist Deutsch."
      ],
      "correct": 0,
      "explanationDe": "Akk. Feminin -> 'die'.",
      "explanationEn": "Akk. Feminin -> 'die'.",
      "rule": "Satzübersetzung Relativsatz"
    },
    {
      "id": "rel_q61",
      "type": "word_order",
      "prompt": "Arrange the relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "den",
        "ich",
        "gestern",
        "getroffen",
        "habe"
      ],
      "correctOrder": "den ich gestern getroffen habe",
      "explanationDe": "Akkusativ 'den' + Subjekt + Zeit + Partizip II + Hilfsverb am Ende.",
      "explanationEn": "Akkusativ 'den' + Subjekt + Zeit + Partizip II + Hilfsverb am Ende.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q62",
      "type": "word_order",
      "prompt": "Arrange the dative relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "dem",
        "wir",
        "geholfen",
        "haben"
      ],
      "correctOrder": "dem wir geholfen haben",
      "explanationDe": "Dativ 'dem' + Subjekt + Partizip II + 'haben'.",
      "explanationEn": "Dativ 'dem' + Subjekt + Partizip II + 'haben'.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q63",
      "type": "word_order",
      "prompt": "Arrange the prepositional relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "mit",
        "dem",
        "ich",
        "gesprochen",
        "habe"
      ],
      "correctOrder": "mit dem ich gesprochen habe",
      "explanationDe": "'mit dem' + Subjekt + Partizip II + 'habe'.",
      "explanationEn": "'mit dem' + Subjekt + Partizip II + 'habe'.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q64",
      "type": "word_order",
      "prompt": "Arrange the genitive relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "dessen",
        "Auto",
        "vor",
        "dem",
        "Haus",
        "steht"
      ],
      "correctOrder": "dessen Auto vor dem Haus steht",
      "explanationDe": "'dessen Auto' + Ortsangabe + Verb 'steht'.",
      "explanationEn": "'dessen Auto' + Ortsangabe + Verb 'steht'.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q65",
      "type": "word_order",
      "prompt": "Arrange the feminine genitive relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "deren",
        "Tochter",
        "in",
        "Wien",
        "studiert"
      ],
      "correctOrder": "deren Tochter in Wien studiert",
      "explanationDe": "'deren Tochter' + Ort + Verb 'studiert'.",
      "explanationEn": "'deren Tochter' + Ort + Verb 'studiert'.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q66",
      "type": "word_order",
      "prompt": "Arrange the plural dative relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "denen",
        "wir",
        "immer",
        "gerne",
        "helfen"
      ],
      "correctOrder": "denen wir immer gerne helfen",
      "explanationDe": "'denen' + Subjekt + Adverbien + Verb 'helfen'.",
      "explanationEn": "'denen' + Subjekt + Adverbien + Verb 'helfen'.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q67",
      "type": "word_order",
      "prompt": "Arrange the accusative feminine relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "die",
        "sie",
        "letzte",
        "Woche",
        "gekauft",
        "hat"
      ],
      "correctOrder": "die sie letzte Woche gekauft hat",
      "explanationDe": "'die' + Subjekt + Zeitangabe + Partizip II + 'hat'.",
      "explanationEn": "'die' + Subjekt + Zeitangabe + Partizip II + 'hat'.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q68",
      "type": "word_order",
      "prompt": "Arrange the relative clause with modal verb:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "den",
        "man",
        "nicht",
        "reparieren",
        "kann"
      ],
      "correctOrder": "den man nicht reparieren kann",
      "explanationDe": "'den' + Subjekt + Negation + Infinitiv + Modalverb 'kann'.",
      "explanationEn": "'den' + Subjekt + Negation + Infinitiv + Modalverb 'kann'.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q69",
      "type": "word_order",
      "prompt": "Arrange the 'über' relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "über",
        "den",
        "sich",
        "alle",
        "freuen"
      ],
      "correctOrder": "über den sich alle freuen",
      "explanationDe": "'über den' + Reflexiv + Subjekt + Verb.",
      "explanationEn": "'über den' + Reflexiv + Subjekt + Verb.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q70",
      "type": "word_order",
      "prompt": "Arrange the 'in' relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "in",
        "der",
        "wir",
        "seit",
        "Jahren",
        "wohnen"
      ],
      "correctOrder": "in der wir seit Jahren wohnen",
      "explanationDe": "'in der' + Subjekt + Zeit + Verb.",
      "explanationEn": "'in der' + Subjekt + Zeit + Verb.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q71",
      "type": "word_order",
      "prompt": "Arrange the nominative relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "das",
        "auf",
        "dem",
        "Tisch",
        "liegt"
      ],
      "correctOrder": "das auf dem Tisch liegt",
      "explanationDe": "'das' + Ortsangabe + Verb.",
      "explanationEn": "'das' + Ortsangabe + Verb.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q72",
      "type": "word_order",
      "prompt": "Arrange the 'auf' relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "auf",
        "den",
        "wir",
        "gewartet",
        "haben"
      ],
      "correctOrder": "auf den wir gewartet haben",
      "explanationDe": "'auf den' + Subjekt + Partizip II + 'haben'.",
      "explanationEn": "'auf den' + Subjekt + Partizip II + 'haben'.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q73",
      "type": "word_order",
      "prompt": "Arrange the 'für' relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "für",
        "das",
        "er",
        "sich",
        "interessiert"
      ],
      "correctOrder": "für das er sich interessiert",
      "explanationDe": "'für das' + Subjekt + Reflexiv + Verb.",
      "explanationEn": "'für das' + Subjekt + Reflexiv + Verb.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q74",
      "type": "word_order",
      "prompt": "Arrange the 'an' relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "an",
        "dem",
        "wir",
        "gemeinsam",
        "arbeiten"
      ],
      "correctOrder": "an dem wir gemeinsam arbeiten",
      "explanationDe": "'an dem' + Subjekt + Adverb + Verb.",
      "explanationEn": "'an dem' + Subjekt + Adverb + Verb.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q75",
      "type": "word_order",
      "prompt": "Arrange the 'zu' relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "zu",
        "dem",
        "ich",
        "gestern",
        "ging"
      ],
      "correctOrder": "zu dem ich gestern ging",
      "explanationDe": "'zu dem' + Subjekt + Zeit + Verb.",
      "explanationEn": "'zu dem' + Subjekt + Zeit + Verb.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q76",
      "type": "word_order",
      "prompt": "Arrange the 'was' relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "was",
        "er",
        "gesagt",
        "hat"
      ],
      "correctOrder": "was er gesagt hat",
      "explanationDe": "'was' + Subjekt + Partizip II + 'hat'.",
      "explanationEn": "'was' + Subjekt + Partizip II + 'hat'.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q77",
      "type": "word_order",
      "prompt": "Arrange the 'vor' relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "vor",
        "dem",
        "wir",
        "Respekt",
        "haben"
      ],
      "correctOrder": "vor dem wir Respekt haben",
      "explanationDe": "'vor dem' + Subjekt + Nomen + Verb.",
      "explanationEn": "'vor dem' + Subjekt + Nomen + Verb.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q78",
      "type": "word_order",
      "prompt": "Arrange the 'nach' relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "nach",
        "der",
        "wir",
        "gesucht",
        "haben"
      ],
      "correctOrder": "nach der wir gesucht haben",
      "explanationDe": "'nach der' + Subjekt + Partizip II + 'haben'.",
      "explanationEn": "'nach der' + Subjekt + Partizip II + 'haben'.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q79",
      "type": "word_order",
      "prompt": "Arrange the separable relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "der",
        "um",
        "acht",
        "Uhr",
        "abfährt"
      ],
      "correctOrder": "der um acht Uhr abfährt",
      "explanationDe": "'der' + Zeit + zusammenhängendes Verb 'abfährt'.",
      "explanationEn": "'der' + Zeit + zusammenhängendes Verb 'abfährt'.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q80",
      "type": "word_order",
      "prompt": "Arrange the passive relative clause:",
      "sub": "Bringe die Wörter in die korrekte Reihenfolge",
      "scrambled": [
        "das",
        "letztes",
        "Jahr",
        "gebaut",
        "wurde"
      ],
      "correctOrder": "das letztes Jahr gebaut wurde",
      "explanationDe": "'das' + Zeit + Partizip II + 'wurde'.",
      "explanationEn": "'das' + Zeit + Partizip II + 'wurde'.",
      "rule": "Satzbau im Relativsatz"
    },
    {
      "id": "rel_q81",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Der Mann, [wer] [gestern da war], [ist mein Onkel].",
      "segments": [
        {
          "text": "wer",
          "isError": true,
          "correction": "der"
        },
        {
          "text": "gestern da war, ist mein Onkel.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Relativpronomen für Personen im Maskulinum ist 'der' (nicht 'wer').",
      "explanationEn": "Relativpronomen für Personen im Maskulinum ist 'der' (nicht 'wer').",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q82",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Die Nachbarn, [mit den] [wir sprachen], [sind nett].",
      "segments": [
        {
          "text": "mit den",
          "isError": true,
          "correction": "mit denen"
        },
        {
          "text": "wir sprachen, sind nett.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Plural Dativ lautet 'denen'.",
      "explanationEn": "Plural Dativ lautet 'denen'.",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q83",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Das ist die Frau, [den] [ich kenne].",
      "segments": [
        {
          "text": "den",
          "isError": true,
          "correction": "die"
        },
        {
          "text": "ich kenne.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Feminin Akkusativ ist 'die'.",
      "explanationEn": "Feminin Akkusativ ist 'die'.",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q84",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Die Schülerin, [dessen Tasche] [weg ist], [weint].",
      "segments": [
        {
          "text": "dessen Tasche",
          "isError": true,
          "correction": "deren Tasche"
        },
        {
          "text": "weg ist, weint.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Feminin Genitiv ist 'deren'.",
      "explanationEn": "Feminin Genitiv ist 'deren'.",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q85",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Das Buch, [das ich habe gelesen], [war gut].",
      "segments": [
        {
          "text": "das ich habe gelesen,",
          "isError": true,
          "correction": "das ich gelesen habe,"
        },
        {
          "text": "war gut.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Hilfsverb 'habe' gehört ans Ende.",
      "explanationEn": "Hilfsverb 'habe' gehört ans Ende.",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q86",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Der Kollege, [dessen Auto ist kaputt], [kam zu Fuß].",
      "segments": [
        {
          "text": "dessen Auto ist kaputt,",
          "isError": true,
          "correction": "dessen Auto kaputt ist,"
        },
        {
          "text": "kam zu Fuß.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Verb 'ist' ans Satzende.",
      "explanationEn": "Verb 'ist' ans Satzende.",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q87",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Die Freunde, [die ich geholfen habe], [dankten mir].",
      "segments": [
        {
          "text": "die",
          "isError": true,
          "correction": "denen"
        },
        {
          "text": "ich geholfen habe, dankten mir.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'helfen' verlangt Dativ ('denen').",
      "explanationEn": "'helfen' verlangt Dativ ('denen').",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q88",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Das ist alles, [das] [ich weiß].",
      "segments": [
        {
          "text": "das",
          "isError": true,
          "correction": "was"
        },
        {
          "text": "ich weiß.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Nach 'alles' steht 'was'.",
      "explanationEn": "Nach 'alles' steht 'was'.",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q89",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Der Film, [über dem] [alle reden], [ist toll].",
      "segments": [
        {
          "text": "über dem",
          "isError": true,
          "correction": "über den"
        },
        {
          "text": "alle reden, ist toll.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'reden über' verlangt Akkusativ ('über den').",
      "explanationEn": "'reden über' verlangt Akkusativ ('über den').",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q90",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Die Stadt, [in die wir wohnen], [ist schön].",
      "segments": [
        {
          "text": "in die wir wohnen,",
          "isError": true,
          "correction": "in der wir wohnen,"
        },
        {
          "text": "ist schön.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Wo? -> Dativ 'in der'.",
      "explanationEn": "Wo? -> Dativ 'in der'.",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q91",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Der Arzt, [zu den] [ich gehe], [ist nett].",
      "segments": [
        {
          "text": "zu den",
          "isError": true,
          "correction": "zu dem"
        },
        {
          "text": "ich gehe, ist nett.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'zu' verlangt Dativ ('zu dem').",
      "explanationEn": "'zu' verlangt Dativ ('zu dem').",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q92",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Das Mädchen, [deren Hund weglief], [suchte ihn].",
      "segments": [
        {
          "text": "deren Hund",
          "isError": true,
          "correction": "dessen Hund"
        },
        {
          "text": "weglief, suchte ihn.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'das Mädchen' ist Neutrum -> Genitiv 'dessen'.",
      "explanationEn": "'das Mädchen' ist Neutrum -> Genitiv 'dessen'.",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q93",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Der Bus, [mit dem er fährt zur Arbeit], [ist voll].",
      "segments": [
        {
          "text": "mit dem er fährt zur Arbeit,",
          "isError": true,
          "correction": "mit dem er zur Arbeit fährt,"
        },
        {
          "text": "ist voll.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Verb 'fährt' gehört ans Satzende.",
      "explanationEn": "Verb 'fährt' gehört ans Satzende.",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q94",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Die Leute, [für denen] [wir kochen], [haben Hunger].",
      "segments": [
        {
          "text": "für denen",
          "isError": true,
          "correction": "für die"
        },
        {
          "text": "wir kochen, haben Hunger.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'für' verlangt Akkusativ ('für die').",
      "explanationEn": "'für' verlangt Akkusativ ('für die').",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q95",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Der Schlüssel, [den liegt auf dem Tisch], [gehört mir].",
      "segments": [
        {
          "text": "den liegt auf dem Tisch,",
          "isError": true,
          "correction": "der auf dem Tisch liegt,"
        },
        {
          "text": "gehört mir.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Nominativ Subjekt 'der' + Verb am Ende.",
      "explanationEn": "Nominativ Subjekt 'der' + Verb am Ende.",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q96",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Das Restaurant, [wohin wir gegessen haben], [war gut].",
      "segments": [
        {
          "text": "wohin wir gegessen haben,",
          "isError": true,
          "correction": "in dem wir gegessen haben,"
        },
        {
          "text": "war gut.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Ort (Wo?) -> 'in dem'.",
      "explanationEn": "Ort (Wo?) -> 'in dem'.",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q97",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Die Kollegen, [mit wer ich arbeite], [sind nett].",
      "segments": [
        {
          "text": "mit wer ich arbeite,",
          "isError": true,
          "correction": "mit denen ich arbeite,"
        },
        {
          "text": "sind nett.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Präposition + Plural Dativ -> 'mit denen'.",
      "explanationEn": "Präposition + Plural Dativ -> 'mit denen'.",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q98",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Die Kollegin, [deren ich gratuliert habe], [freute sich].",
      "segments": [
        {
          "text": "deren",
          "isError": true,
          "correction": "der"
        },
        {
          "text": "ich gratuliert habe, freute sich.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "'gratulieren' verlangt Dativ ('der').",
      "explanationEn": "'gratulieren' verlangt Dativ ('der').",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q99",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Das Haus, [welche] [an der Ecke steht], [ist alt].",
      "segments": [
        {
          "text": "welche",
          "isError": true,
          "correction": "das"
        },
        {
          "text": "an der Ecke steht, ist alt.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Neutrum -> 'das'.",
      "explanationEn": "Neutrum -> 'das'.",
      "rule": "Fehlersuche Relativsatz"
    },
    {
      "id": "rel_q100",
      "type": "error_correction",
      "prompt": "Finde den Fehler im Relativsatz:",
      "sentence": "Der Zug, [in dem wir einsteigen], [fährt gleich].",
      "segments": [
        {
          "text": "in dem wir einsteigen,",
          "isError": true,
          "correction": "in den wir einsteigen,"
        },
        {
          "text": "fährt gleich.",
          "isError": false,
          "correction": ""
        }
      ],
      "sub": "Klicke auf das fehlerhafte Segment",
      "explanationDe": "Wohin? -> Akkusativ 'in den'.",
      "explanationEn": "Wohin? -> Akkusativ 'in den'.",
      "rule": "Fehlersuche Relativsatz"
    }
  ]
};
