

import "./GameCompleteOverlay.css";

export default function GameCompleteOverlay({ onRestartGame, onBackToMenu }) {
  return (
    <div className="gamecomplete-overlay">
      <div className="gamecomplete-window">

        <h1>CONGRATULATIONS, <br />
        SUPERSTAR!</h1>

        <div className="gamecomplete-text">
            Freddy Fazbear is proud of youuuu <br />
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