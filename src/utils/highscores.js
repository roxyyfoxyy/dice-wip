
//*************'************** HIGHSCORE ***************************//
//***** Gegnerwürfel mit Userwürfeö vergleichen, Erfolg- & Misserfolg ******//
//**************************************************************************//





const STORAGE_KEY = "highscores";

export function getHighscores() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveHighscore(score) {

  const scores = getHighscores();

  scores.push({
    score: score,
    date: Date.now()
  });

  // Soriteren (höchster ganz oben)
  scores.sort((a, b) => b.score - a.score);

  // Nur 10 Highscores anzeigeeeen
  const topScores = scores.slice(0, 10);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(topScores));
}


// Datum + Uhrzeit formatieren
export function formatDate(timestamp) {

  const d = new Date(timestamp);

  return d.toLocaleDateString("de-DE") + 
         " " + 
         d.toLocaleTimeString("de-DE", {
            hour: "2-digit",
            minute: "2-digit"
         });
}