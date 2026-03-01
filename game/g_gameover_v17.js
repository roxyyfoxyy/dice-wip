//**************************** G: GameOver ****************************//
//****************** Anzeige + Storage clear/refresh ******************//
//********************************************************************//


function triggerGameOver() {

    //NÖTIG?
    //const wuerfelnButton = document.getElementById("wuerfeln");
    //const passenButton = document.getElementById("passen");

    gameState.gameOver = true;


    // GAMEOVER-VISUAL (derzeit noch Popup, später Window!!!)
    const popup = document.querySelector(".popup-text");
    popup.textContent = "GAME OVER";

    // Animation-Reset (für wenn vorher schon aktiviert)
    popup.classList.remove("animation");
    void popup.offsetWidth; // Reflow Trick (damit Browser remove auch wirklich erkennt!)

    // Animation-Start
    popup.classList.add("animation");


    // Buttons deaktivieren
    wuerfelnButton.disabled = true; // BAUSTELL: disabled net!! disabled nur Passen!! UNBEDINGT FIXEN
    passenButton.disabled = true;

}
