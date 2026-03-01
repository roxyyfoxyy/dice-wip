import "./GameWindow.css";

export default function GameWindow({ children }) {
  return (
    <div className="game-root">
      <div className="scaneffect" />

      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-innen">
          <div className="topbar-text">
            <img
              src="https://i.pinimg.com/736x/05/74/bd/0574bd46bf26c5c9933e6fa293695c93.jpg"
              className="logo-pic"
            />
            <span className="home">HOME</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container">
        <div className="content-center">
          <div className="backgroundbox">
            {children}
          </div>
        </div>
      </div>

      {/* BOTTOMBAR */}
      <div className="bottombar">
        <div className="bottombar-innen" />
      </div>
    </div>
  );
}