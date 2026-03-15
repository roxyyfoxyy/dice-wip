export default function MainMenu({ onStart, onShowHighscores, onShowGuide }) {
  return (
    <>

      {/* TITLE BOX */}
      <div className="box">
        <div className="box-container">
          <div className="box-pic" />
          <div className="box-linien" />
          <div className="box-text">
            <h1 className="box-title">GAME<br />NAME</h1>
            <p className="box-subtitle">
              lorem ipsum logikgatter blabla // the game
            </p>
          </div>
        </div>
      </div>

      {/* MENU */}
      <div className="menu">
        <div className="menu-container">
          <div className="menu-struktur">

            <button className="menu-button" onClick={onStart}>
              <span className="menu-text">START</span>
            </button>

            <button className="menu-button" onClick={onShowGuide}>
              <span className="menu-text">GUIDE</span>
            </button>

            <button className="menu-button" onClick={onShowHighscores}>
              <span className="menu-text">HIGHSCORES</span>
            </button>

            <button className="menu-button">
              <span className="menu-text">CREDITS</span>
            </button>

          </div>
        </div>
      </div>

    </>
  );
}