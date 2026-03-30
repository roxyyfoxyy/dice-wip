//*************** H: SPECIAL ***************//
//********** Spielerfähigkeiten ***********//
//*****************************************//


// ***************** SPECIAL: HEALING ***************** //

function checkHeal() {
    //einmal pro Runde
    if (!gameState.healUsed) {
        const summe = werte.reduce((acc, val) => acc + (val ?? 0), 0);

        // Nach jedem Wurf prüfen, ob Summe >= 25 - einmal pro Runde
        if (summe >= 25 && gameState.hp < 10) {      // maxHP 10
            healHP(1);
            gameState.healUsed = true;               // für nur einmal pro Runde
            saveGameState();                         // direkt speichern


            // ANIMATION: +1HP
            const popup = document.querySelector(".popup-text");
            if (popup) {
                popup.textContent = "+1 HP"; 

                // Animation-Reset (für wenn vorher schon aktiviert)
                popup.classList.remove("animation");
                void popup.offsetWidth;              // Reflow Trick (damit Browser remove auch wirklich erkennt!)
                
                // Animation-Start
                popup.classList.add("animation");   
            }


        }



        
    }
}