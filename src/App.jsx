import { useState, useEffect } from "react";
import GameWindow from "./ui/GameWindow";
import MainMenu from "./scenes/MainMenu";
import GameOverOverlay from "./ui/GameOverOverlay";

export default function App() {
  const [scene, setScene] = useState("menu");
  const [gameOver, setGameOver] = useState(false);
  const [restartKey, setRestartKey] = useState(0);

  // GAMEOVER-MESSAGE
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === "GAME_OVER") {
        setGameOver(true);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);




  return (
    <GameWindow>
      {scene === "menu" && (
        <MainMenu onStart={() => setScene("game")} />
      )}

      {scene === "game" && (
        <>
          <iframe
            key={restartKey}
            src="./game/index.html"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />

          {gameOver && (
            <GameOverOverlay
            onRestartGame={() => {
              setGameOver(false);
              setRestartKey(prev => prev + 1); // iframe neu mounten
            }}
            
            onBackToMenu={() => {
                setGameOver(false);
                setScene("menu");
              }}
            />
          )}
        </>
      )}
    </GameWindow>
  );
}

