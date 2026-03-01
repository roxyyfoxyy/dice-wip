

import "./GameOverOverlay.css";

export default function GameOverOverlay({ onRestartGame, onBackToMenu }) {
  return (
    <div className="gameover-overlay">
      <div className="gameover-window">

        <h1>GAME OVER</h1>

        <div className="gameover-text">
            Du hast verloreeeeeen trololol. <br />
            All deine Punkte wurden verschlungen. Versuche es erneut!
        </div>

        <div className="gameover-button-wrap">
            <button onClick={onRestartGame}>NEUSTART</button>
            <button>HIGHSCORES</button>
            <button onClick={onBackToMenu}>ZURÜCK ZUM MENÜ</button>
        </div>
      </div>
    </div>
  );
}