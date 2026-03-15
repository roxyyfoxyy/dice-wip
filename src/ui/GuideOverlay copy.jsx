import "./GuideOverlay.css";

export default function GuideOverlay({ onClose }) {
  return (
    <div className="guide-overlay">
      <div className="guide-window">

        <h1>GUIDE</h1>

        <div className="guide-text">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="guide-button-wrap">
          <button onClick={onClose}>SCHLIESSEN</button>
        </div>

      </div>
    </div>
  );
}