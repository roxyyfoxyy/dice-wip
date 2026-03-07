import { useState, useEffect } from "react";
import GameWindow from "./ui/GameWindow";
import MainMenu from "./scenes/MainMenu";
import GameOverOverlay from "./ui/GameOverOverlay";
import GameCompleteOverlay from "./ui/GameCompleteOverlay";

export default function App() {
  const [scene, setScene] = useState("menu");
  const [gameOver, setGameOver] = useState(false);

  const [gameComplete, setGameComplete] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [remainingHP, setRemainingHP] = useState(0);

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
        
        setFinalScore(event.data.punkte);
        setRemainingHP(event.data.hp);
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
              localStorage.removeItem("gameState");     //Daten löschen
              setGameOver(false);
              setRestartKey(prev => prev + 1);          // iframe neu mounten
            }}
          
            onBackToMenu={() => {
              localStorage.removeItem("gameState");    //Daten löschen
              setGameOver(false);
              setScene("menu");                        //switch zum Menü
            }}

          />
        )}

        {gameComplete && (
          <GameCompleteOverlay

            // Spielergebnisse
            punkte={finalScore}
            hp={remainingHP}

            onRestartGame={() => { 
              localStorage.removeItem("gameState");   //Daten löschen
              setGameComplete(false);
              setRestartKey(prev => prev + 1);        // iframe neu mounten
            }}

            onBackToMenu={() => {
              localStorage.removeItem("gameState");   //Daten löschen
              setGameComplete(false);
              setScene("menu");                       //switch zum Menü
            }}
          
          />
        )}
        </>


      )}





    </GameWindow>
  );
}

