import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./CreditsOverlay.css";

export default function CreditsOverlay({ onClose }) {

  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 250);
  };

  return (
    <div
      className={`credits-overlay ${closing ? "overlay-exit" : "overlay-enter"}`}
      onClick={handleClose}
    >
      <div
        className={`credits-window ${closing ? "window-exit" : "window-enter"}`}
        onClick={(e) => e.stopPropagation()}
      >

        <h1>CREDITS</h1>

        <div className="credits-grid">

          <div className="credits-card">
            <h2>Project</h2>
            <p>
              ROLL & CONQUER<br/>
              Created for the university module<br/>
              <i>Software Design</i>
            </p>
          </div>

          <div className="credits-card">
            <h2>Developers</h2>
            <p>
              Niklas Eichstädt<br/>
              Roksana Strzelecki
            </p>
          </div>

          <div className="credits-card">
            <h2>Assets</h2>
            <p>
              xxxx<br/>
              xxxx
            </p>
          </div>

          <div className="credits-card">
            <h2>Ressources</h2>
            <p>
              React & Vite<br/>
              JavaScript<br/>
              HTML / CSS
            </p>
          </div>

        </div>

        <h3>Thanks for playing!</h3>

        <div className="credits-footer">

          <a
            href="https://github.com/roxyyfoxyy/dice-wip.git"
            target="_blank"
            rel="noreferrer"
            className="credits-github"
          >
            <FaGithub />
            View on GitHub
          </a>

          <small>Version 1.0 – 2026</small>

          
          

        </div>

        <button className="credits-close" onClick={handleClose}>
          CLOSE
        </button>

      </div>
    </div>
  );
}