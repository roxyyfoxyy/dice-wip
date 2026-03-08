


import { useEffect, useState } from "react";
import { getHighscores, formatDate } from "../utils/highscores";
import "./HighscoreOverlay.css";

export default function HighscoreOverlay({ onClose }) {

  const [scores, setScores] = useState([]);

  useEffect(() => {
    setScores(getHighscores());
  }, []);

  return (
    <div className="highscore-overlay">
      <div className="highscore-window">

        <h1>HIGHSCORES</h1>

        <ol>
          {scores.map((s, i) => (
            <li key={i}>
                <span>{s.score}</span>
                <span>{formatDate(s.date)}</span>
            </li>
          ))}
        </ol>

        <button onClick={onClose}>
          SCHLIESSEN
        </button>

      </div>
    </div>
  );
}