import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./GuideOverlay.css";

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
      className={`guide-overlay ${closing ? "overlay-exit" : "overlay-enter"}`}
      onClick={handleClose}
    >
      <div
        className={`guide-window ${closing ? "window-exit" : "window-enter"}`}
        onClick={(e) => e.stopPropagation()}
      >

        <h1>CREDITS</h1>

        <div className="guide-content">

          <div className="guide-section">
            <p>
              <b><i>ROLL & CONQUER</i></b> was created as part of the university module
              <b> "Software Design"</b>.
            </p>
          </div>

          <div className="guide-section">
            <p>
              <b>Developers</b><br/>
              Niklas Eichstädt & Roksana Strzelecki <br/>
              Game Design • Programming • UI
            </p>
          </div>

          <div className="guide-section">
            <p>
              <b>Assets</b><br/>
              Kenney.nl – Game assets <br/>
              Freesound.org – Sound effects
            </p>
          </div>

          <div className="guide-section">
            <p>
              <b>Technology</b><br/>
              React <br/>
              JavaScript <br/>
              HTML / CSS
            </p>
          </div>

          <div className="guide-section">
            <p>
              <b>Source Code</b><br/>
              github.com/DEINNAME/PROJECT
            </p>

            <p>
              <b>Source Code</b><br/>
              <FaGithub /> github.com/deinname/project
            </p>

          </div>

          <div className="guide-section">
            <small>
              Version 1.0 – 2026
            </small>
          </div>

        </div>

        <button className="guide-close" onClick={handleClose}>
          CLOSE
        </button>

      </div>
    </div>
  );
}