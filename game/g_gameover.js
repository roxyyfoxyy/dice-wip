//**************************** G: GameOver ****************************//
//****************** Anzeige + Storage clear/refresh ******************//
//********************************************************************//


function triggerGameOver() {

    //NÖTIG?
    //const wuerfelnButton = document.getElementById("wuerfeln");
    //const passenButton = document.getElementById("passen");

    gameState.gameOver = true;


    // GAMEOVER-WINDOW
    window.parent.postMessage(
        { type: "GAME_OVER" },
        "*"
    );


    // Buttons deaktivieren
    wuerfelnButton.disabled = true; // BAUSTELL: disabled net!! disabled nur Passen!! UNBEDINGT FIXEN
    passenButton.disabled = true;

}
