import { useState, useEffect } from "react";
import "./GameCompleteOverlay.css";

// Highscore-Speicherung
import { saveHighscore } from "../utils/highscores";


// JAVASCRIPT-LOGIK FÜR ANIMATIONEN
export default function GameCompleteOverlay({ punkte, hp, onRestartGame, onBackToMenu, onShowHighscores }) {
  
  const HP_SCORE = 3; // +5? oder +3?

  const [displayScore, setDisplayScore] = useState(0);
  const [displayHP, setDisplayHP] = useState(hp);
  const [phase, setPhase] = useState("countScore");
  const [finalGlow, setFinalGlow] = useState(false);
  const [bonusPopup, setBonusPopup] = useState(null);


  useEffect(() => {

    // 1️. PUNKTE HOCHZÄHLEN
    if (phase === "countScore") {

      let current = 0;

      const interval = setInterval(() => {
        current++;

        setDisplayScore(current);

        if (current >= punkte) {
          clearInterval(interval);
          setTimeout(() => setPhase("convertHP"), 800);
        }

      }, 100);  // oder langsamer? 150?

      return () => clearInterval(interval);
    }


    // 2️. HP-BONUS
    if (phase === "convertHP") {

      let hpLeft = displayHP;

      const interval = setInterval(() => {

        if (hpLeft <= 0) {
          clearInterval(interval);
          setPhase("final");
          return;
        }

        hpLeft--;

        // HP DRAUF -> HP DEKREMENTIEREN + AUF PUNKTE 
        setDisplayHP(hpLeft);
        setDisplayScore(prev => prev + HP_SCORE);

        // HP DRAUF -> ANIMATION
        setBonusPopup("+" + HP_SCORE);

        setTimeout(() => {
          setBonusPopup(null);
        }, 600);

      }, 700);

      return () => clearInterval(interval);
    }


    // 3. FINALER PUNKTESTAND -> EFFEKT
    // 3. Finalen Punktstand als Hoghscore speichern
    if (phase === "final") {
      setFinalGlow(true);

      saveHighscore(displayScore);
    }

  }, [phase]);
  
  
  
  
  return (
    <div className="gamecomplete-overlay">
      <div className="gamecomplete-window">

        <h1>MISSION<br />
        ABGESCHLOSSEN!</h1>

        <div className="gamecomplete-text">
            <br />
            Gefahr neutralisiert. 
            Stabilitätswert steigend.<br />
            Deine Leistung wird der Systemanalyse übergeben:<br />
            <br />
            Punkte: <span className={finalGlow ? "final-score" : ""}>
              {displayScore}
            </span>
            <br />
            <div className="hp-wrap">
              <span>HP-Bonus: {displayHP}</span>
              
              {bonusPopup && (
                <span className="bonus-popup">{bonusPopup}</span>
              )}
            </div>


        </div>

        <div className="gamecomplete-button-wrap">
            <button onClick={onRestartGame}>NEUSTART</button>
            <button onClick={onShowHighscores}>HIGHSCORES</button>
            <button onClick={onBackToMenu}>ZURÜCK ZUM MENÜ</button>
        </div>
      </div>
    </div>
  );
}