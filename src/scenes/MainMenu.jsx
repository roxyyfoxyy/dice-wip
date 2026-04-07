export default function MainMenu({ onStart, onShowHighscores, onShowGuide, onShowCredits }) {
  return (
    <>

      {/* TITLE BOX */}
      <div className="box">
        <div className="box-container">
          <div className="box-pic" />
          <div className="box-linien" />
          <div className="box-text">
            <h1 className="box-title">ROLL &<br/>CONQUER</h1>
            <p className="box-subtitle">
              master the dice, defeat the odds //
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

            <button className="menu-button" onClick={onShowCredits}>
              <span className="menu-text">CREDITS</span>
            </button>

          </div>
        </div>
      </div>

    </>
  );
}