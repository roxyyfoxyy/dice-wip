import { useState, useEffect } from "react";
import "./GameCompleteOverlay.css";


// JAVASCRIPT-LOGIK FÜR ANIMATIONEN
export default function GameCompleteOverlay({ punkte, hp, onRestartGame, onBackToMenu }) {
  
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
    if (phase === "final") {
      setFinalGlow(true);
    }

  }, [phase]);
  
  
  
  
  return (
    <div className="gamecomplete-overlay">
      <div className="gamecomplete-window">

        <h1>CONGRATULATIONS, <br />
        SUPERSTAR!</h1>

        <div className="gamecomplete-text">
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
            <button>HIGHSCORES</button>
            <button onClick={onBackToMenu}>ZURÜCK ZUM MENÜ</button>
        </div>
      </div>
    </div>
  );
}