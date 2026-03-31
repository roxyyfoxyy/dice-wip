//********************** F: PUNKTE- & HP-SYSTEM **********************//
//********************************************************************//


//****************** FUNKTION: ANZEIGE-UPDATE *****************//
//************* Punkte, HP, Gegner-Counter updaten ************//
//************************************************************//

    function updatePunkte() {
        const p = document.getElementById("punkte");
        if (p) {
            p.textContent = gameState.punkte;
        }
    }

    function updateHP() {
        const h = document.getElementById("hp");
        if (h) {
            h.textContent = gameState.hp;
        }
    }

    function updateGegnerCounter() {
        const g = document.getElementById("gegnerCounter");
        if (g) {
            g.textContent = gameState.gegnerCounter;
        }
    }



//******************* FUNKTION: PUNKTE-LOGIK ******************//
//******************** Punkte+ je nach Gegner *****************//
//************************************************************//

    function plusPunkte(anzahl) {
        gameState.punkte += anzahl;

        updatePunkte();
        saveGameState();
    }

    // ANIMATION
    function showPunktePopup(text) {
        const popup = document.querySelector(".punkte-popup");

        if (!popup) return;

        // Hier Punkte
        popup.textContent = text;

        // Reset der Animation
        popup.classList.remove("animation");
        void popup.offsetWidth;     // Reflow-Trick

        // Animation starten
        popup.classList.add("animation");
    }



//********************* FUNKTION: HP-LOGIK ********************//
//******** HP- Passen mit Gameover-Trigger & HP+ Heal ********//
//************************************************************//

    function minusHP(anzahl) {

        // Wenn GameOver, dann HP=0 und somit ABBRUCH
        // kein Abzug mehr
        if (gameState.gameOver) return;

        gameState.hp -= anzahl;

        if (gameState.hp < 0) {
            gameState.hp = 0;
        }

        updateHP();
        saveGameState();

        // HP-Popup Animation
        showHPPopup(`-${anzahl} HP`);
        


        if (gameState.hp == 0) {
            triggerGameOver();
        }
    }


    // ANIMATION
        function showHPPopup(text) {
        const popup = document.querySelector(".hp-popup");
        if (!popup) return;

        popup.textContent = text;

        // Reset Animation
        popup.classList.remove("animation");
        void popup.offsetWidth; // Reflow trick

        // Animation starten
        popup.classList.add("animation");
    }


    function healHP(anzahl) {

        // Wenn GameOver, dann HP=0 und somit ABBRUCH
        // kein Heilen mehr
        if (gameState.gameOver) return;

        gameState.hp += anzahl;

        updateHP();
        saveGameState();
    }


//***************** FUNKTION: GEGNER-COUNTER *****************//
//****************** Gegner-, wenn Treffer ******************//
//***********************************************************//

    function minusGegnerCounter(anzahl) {

        if (gameState.gameOver) return;

        gameState.gegnerCounter -= anzahl;

        if (gameState.gegnerCounter < 0) {
            gameState.gegnerCounter = 0;
        }

        updateGegnerCounter();
        saveGameState();

        // Alle Gegner besiegt
        if (gameState.gegnerCounter == 0) {
            triggerGameComplete();
        }
        
    }
