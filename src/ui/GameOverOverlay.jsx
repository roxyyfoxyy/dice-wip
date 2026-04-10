

import "./GameOverOverlay.css";

export default function GameOverOverlay({ onRestartGame, onBackToMenu, onShowHighscores}) {
  return (
    <div className="gameover-overlay">
      <div className="gameover-window">

        <h1>SYSTEMABBRUCH</h1>

        <div className="gameover-text">
            Deine Lebenssignale sind erloschen. <br />
            Die Kreaturen haben die Kontrolle übernommen. <br /><br />
            Alle gesammelten Daten wurden verworfen.
        </div>

        <div className="gameover-button-wrap">
            <button onClick={onRestartGame}>NEUSTART</button>
            <button onClick={onShowHighscores}>HIGHSCORES</button>
            <button onClick={onBackToMenu}>ZURÜCK ZUM MENÜ</button>
        </div>
      </div>
    </div>
  );
}