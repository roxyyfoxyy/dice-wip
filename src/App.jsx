import { useState, useEffect } from "react";
import GameWindow from "./ui/GameWindow";
import MainMenu from "./scenes/MainMenu";
import GameOverOverlay from "./ui/GameOverOverlay";
import GameCompleteOverlay from "./ui/GameCompleteOverlay";

export default function App() {
  const [scene, setScene] = useState("menu");
  const [gameOver, setGameOver] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [restartKey, setRestartKey] = useState(0);


  // GAMEOVER & GAMECOMPLETE MESSAGE
  useEffect(() => {
    const handleMessage = (event) => {

      // DECISION: GAMEOVER
      if (event.data?.type === "GAME_OVER") {
        setGameOver(true);
      }

      // DECISION: GAMECOMPLETE
      if (event.data?.type === "GAME_COMPLETE") {
        setGameComplete(true);
      }
    };

    // GIB AUS
    window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    
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

        {gameComplete && (
          <GameCompleteOverlay
            onRestartGame={() => { 
              setGameComplete(false);
              setRestartKey(prev => prev + 1); 
            }}

            onBackToMenu={() => {
              setGameComplete(false);
              setScene("menu");
            }}
          />
        )}
        </>


      )}




    </GameWindow>
  );
}

