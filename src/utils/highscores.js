
//*************'***************** HIGHSCORE ******************************//
//****************** Speichern + Sortieren + max. 10 ********************//
//***********************************************************************//


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

// DATUM + UHRZEIT
export function formatDate(timestamp) {
  const d = new Date(timestamp);

  // Tag, Monat, Jahr basteln -> mit führender 0!!, ZWEIgliedrig für day/month
  const day = String(d.getDate()).padStart(2, '0'); 
  const month = String(d.getMonth() + 1).padStart(2, '0');  
  const year = d.getFullYear(); 

  const date = `${day}.${month}.${year}`;  

  // Uhrzeit  -> auch zweigliedrig
  const time = d.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit"
  });

  return `${date} ${time}`;
}