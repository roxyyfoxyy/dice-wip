import "./GameWindow.css";
import { useState } from "react";

import logoPic from "../assets/logo.jpg";

export default function GameWindow({ children, onOpenMenu, onOpenHighscores, onOpenGuide }) {
  
  
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };
    
  
  return (
    <div className="game-root">
      <div className="scaneffect" />

      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-innen">

          {/* DROPDOWN */}
          <div className="topbar-text">

            <img
              src={logoPic}
              className="logo-pic"
              onClick={onOpenMenu}
            />

            <span className="home">
              HOME
            </span>

            <div className="topbar-dropdown">

              <button
                className="dropdown-item"
                onClick={onOpenMenu}
              >
                STARTSEITE
              </button>


            <button
                className="dropdown-item"
                onClick={onOpenGuide}
              >
                GUIDE
              </button>

              <button
                className="dropdown-item"
                onClick={onOpenHighscores}
              >
                HIGHSCORES
              </button>


            </div>

          </div>
          {/* DROPDOWN ENDE */}



        </div>
      </div>
      {/* TOPBAR ENDE*/}

      {/* CONTENT */}
      <div className="container">
        <div className="content-center">
          <div className="backgroundbox">
            {children}
          </div>
        </div>
      </div>
      {/* CONTENT ENDE */}


      {/* BOTTOMBAR */}
      <div className="bottombar">
        <div className="bottombar-innen" />
      </div>
      {/* BOTTOMBAR ENDE */}

    </div>
  );
}