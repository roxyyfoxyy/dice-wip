


import { useEffect, useState } from "react";
import { getHighscores, formatDate } from "../utils/highscores";
import "./HighscoreOverlay.css";

export default function HighscoreOverlay({ onClose }) {

  const [scores, setScores] = useState([]);

  useEffect(() => {
    setScores(getHighscores());
  }, []);


  /* Transition */
  const [closing, setClosing] = useState(false);
  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      onClose();
    }, 250);
  };



  return (
    /* Öffnen/Schließen + Außerhalb-Klick  */
    <div
      className={`highscore-overlay ${closing ? "overlay-exit" : "overlay-enter"}`}
      onClick={handleClose}
    >
      <div
        className={`highscore-window ${closing ? "window-exit" : "window-enter"}`}
        onClick={(e) => e.stopPropagation()}
      >

        <h1>HIGHSCORES</h1>

        <ol>
          {scores.map((s, i) => (
            <li key={i}>
                <span>{s.score}</span>
                <span>{formatDate(s.date)}</span>
            </li>
          ))}
        </ol>

        <button onClick={handleClose}>
          CLOSE
        </button>

      </div>
    </div>
  );
}