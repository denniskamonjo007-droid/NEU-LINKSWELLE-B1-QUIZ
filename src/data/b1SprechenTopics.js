// Goethe-Zertifikat B1 Sprechen Teil 2: Authentic Exam Presentation Topics & Scripts
// Extracted and curated directly from authentic Goethe B1 Prüfung Sprechen Themen

import { B1_PDF_PRESENTATIONS, convertPdfToB1Topic } from './b1PdfPresentations.js';

export const GOETHE_B1_SPRECHEN_REDEMITTEL = [
  {
    id: "folie1",
    phase: "Folie 1: Einleitung & Struktur",
    phaseEn: "Slide 1: Intro & Structure",
    icon: "🎯",
    badge: "Folie 1",
    phrases: [
      { de: "Das Thema meiner Präsentation lautet: ...", en: "The topic of my presentation is: ..." },
      { de: "In meiner heutigen Präsentation geht es um die Frage: ...", en: "My presentation today deals with the question: ..." },
      { de: "Ich habe dieses Thema gewählt, weil es mich persönlich sehr interessiert.", en: "I chose this topic because I am personally very interested in it." },
      { de: "Mein Vortrag gliedert sich in folgende vier Teile:", en: "My talk is structured into the following four parts:" },
      { de: "Zuerst möchte ich von meinen persönlichen Erfahrungen erzählen.", en: "First, I would like to share my personal experiences." },
      { de: "Danach beschreibe ich die Situation in meinem Heimatland.", en: "Next, I will describe the situation in my home country." },
      { de: "Dann möchte ich über Vor- und Nachteile sprechen und Beispiele nennen.", en: "Then I would like to talk about pros and cons and give examples." },
      { de: "Zum Schluss werde ich meine persönliche Meinung äußern.", en: "Finally, I will express my personal opinion." }
    ]
  },
  {
    id: "folie2",
    phase: "Folie 2: Eigene Erfahrungen",
    phaseEn: "Slide 2: Personal Experience",
    icon: "👤",
    badge: "Folie 2",
    phrases: [
      { de: "Was meine persönlichen Erfahrungen angeht, so...", en: "As far as my personal experiences go, ..." },
      { de: "Ich habe schon oft die Erfahrung gemacht, dass...", en: "I have frequently experienced that..." },
      { de: "In meinem Alltag spielt dieses Thema eine wichtige Rolle, weil...", en: "In my daily life, this topic plays an important role because..." },
      { de: "Ich selbst nutze / mache das sehr oft / eher selten.", en: "I personally use / do this very often / rather rarely." },
      { de: "Als ich ein Kind / jünger war, habe ich...", en: "When I was a child / younger, I..." },
      { de: "Aus eigener Erfahrung kann ich bestätigen, dass...", en: "From my own experience, I can confirm that..." }
    ]
  },
  {
    id: "folie3",
    phase: "Folie 3: Situation im Heimatland",
    phaseEn: "Slide 3: Situation in Home Country",
    icon: "🌍",
    badge: "Folie 3",
    phrases: [
      { de: "Jetzt möchte ich über die Situation in meinem Heimatland sprechen.", en: "Now I would like to talk about the situation in my home country." },
      { de: "In meiner Heimat ist die Situation etwas anders als in Deutschland.", en: "In my homeland, the situation is somewhat different from Germany." },
      { de: "Bei uns ist es üblich, dass die meisten Menschen...", en: "Where I come from, it is customary that most people..." },
      { de: "Besonders die jüngere Generation bevorzugt...", en: "Especially the younger generation prefers..." },
      { de: "Im Vergleich zu Deutschland gibt es bei uns...", en: "Compared to Germany, in our country there are..." },
      { de: "Viele Menschen in meinem Heimatland haben keine Möglichkeit...", en: "Many people in my home country don't have the opportunity..." }
    ]
  },
  {
    id: "folie4",
    phase: "Folie 4: Vor- und Nachteile mit Beispielen",
    phaseEn: "Slide 4: Pros & Cons with Examples",
    icon: "⚖️",
    badge: "Folie 4",
    phrases: [
      { de: "Nun komme ich zu den Vor- und Nachteilen.", en: "Now I come to the advantages and disadvantages." },
      { de: "Ein großer Vorteil ist sicherlich, dass...", en: "A major advantage is certainly that..." },
      { de: "Positiv ist auch zu erwähnen, dass man dadurch...", en: "Another positive aspect is that it allows one to..." },
      { de: "Einerseits spart man Zeit, andererseits...", en: "On one hand you save time, on the other hand..." },
      { de: "Auf der anderen Seite gibt es natürlich auch Nachteile.", en: "On the other hand, there are of course disadvantages as well." },
      { de: "Ein bedeutender Nachteil ist die Tatsache, dass...", en: "A significant drawback is the fact that..." },
      { de: "Als konkretes Beispiel möchte ich anführen, dass...", en: "As a concrete example, I would like to mention that..." }
    ]
  },
  {
    id: "folie5",
    phase: "Folie 5: Eigene Meinung & Abschluss",
    phaseEn: "Slide 5: Personal Opinion & Conclusion",
    icon: "💡",
    badge: "Folie 5",
    phrases: [
      { de: "Meiner Meinung nach sollte man...", en: "In my opinion, one should..." },
      { de: "Ich bin persönlich fest davon überzeugt, dass...", en: "I am personally firmly convinced that..." },
      { de: "Zusammenfassend lässt sich sagen, dass ein Mittelweg der beste ist.", en: "In conclusion, it can be said that a middle ground is best." },
      { de: "Das war meine Präsentation. Vielen Dank für Ihre Aufmerksamkeit!", en: "That concludes my presentation. Thank you very much for your attention!" },
      { de: "Haben Sie noch Fragen? Ich beantworte sie gerne.", en: "Do you have any questions? I would be glad to answer them." }
    ]
  },
  {
    id: "teil3",
    phase: "Teil 3: Feedback, Rückfragen & Antworten",
    phaseEn: "Part 3: Feedback, Questions & Answers",
    icon: "💬",
    badge: "Teil 3",
    phrases: [
      { de: "Vielen Dank für deinen interessanten Vortrag. Du hast sehr deutlich gesprochen.", en: "Thank you for your interesting presentation. You spoke very clearly." },
      { de: "Besonders spannend fand ich den Vergleich mit deiner Heimat.", en: "I found the comparison with your home country especially interesting." },
      { de: "Ich fand dein Beispiel zum Thema sehr anschaulich und gut gewählt.", en: "I found your example on the topic very vivid and well chosen." },
      { de: "Ich hätte dazu noch eine Frage an dich: ...", en: "I have one more question for you about that: ..." },
      { de: "Mich würde noch interessieren: Würdest du das persönlich auch so machen?", en: "I'd also be interested to know: Would you personally do that too?" },
      { de: "Danke für diese Frage. Dazu möchte ich sagen, dass...", en: "Thank you for this question. Regarding that, I'd like to say that..." },
      { de: "Das ist ein interessanter Punkt. Meiner Erfahrung nach...", en: "That's an interesting point. In my experience..." },
      { de: "Könnten Sie die Frage bitte noch einmal wiederholen?", en: "Could you please repeat the question once more?" }
    ]
  }
];

export { B1_PDF_PRESENTATIONS };
export const B1_SPRECHEN_TOPICS = B1_PDF_PRESENTATIONS.map(convertPdfToB1Topic);
