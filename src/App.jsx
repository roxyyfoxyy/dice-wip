/*********** GAME-WINDOW NUTZEN ***********/

import { useState } from "react";
import GameWindow from "./ui/GameWindow";
import MainMenu from "./scenes/MainMenu";

export default function App() {
  const [scene, setScene] = useState("menu");

  return (
    <GameWindow>
      {scene === "menu" && (
        <MainMenu onStart={() => setScene("game")} />
      )}

      {scene === "game" && (
        <iframe
          src="./game/index.html"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      )}
    </GameWindow>

  );
}