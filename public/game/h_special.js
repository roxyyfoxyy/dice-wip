//*************** H: SPECIAL ***************//
//********** Spielerfähigkeiten ***********//
//*****************************************//


//******************* FUNKTION: checkHeal() *******************//
//***********************************************************//

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


//******************* FUNKTION: checkStrasse() *******************//
//***********************************************************//

function checkStrasse() {
    // Würfelwerte sortieren & nulls entfernen
    const gewuerfelt = werte.filter(v => v !== null).sort((a,b)=>a-b);

    // Große Straße: 1-2-3-4-5 oder 2-3-4-5-6
    const strasse1 = [1,2,3,4,5];
    const strasse2 = [2,3,4,5,6];

    // Prüfen, ob gewürfelt = Große Straße
    if (gewuerfelt.length === 5 &&
       (gewuerfelt.every((v,i) => v === strasse1[i]) || gewuerfelt.every((v,i) => v === strasse2[i]))) {
        gameState.strasseActive = true;

        // Optional: Animation/Popup
        const popup = document.querySelector(".popup-text");
        if (popup) {
            popup.textContent = "Große Straße! Wähle beliebigen Gegner!";
            popup.classList.remove("animation");
            void popup.offsetWidth;
            popup.classList.add("animation");
        }

        saveGameState();
    }
}