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

        if (gameState.hp == 0) {
            triggerGameOver();
        }
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

        // OPTIONAL: Wenn alle Gegner besiegt -> Sieg
        if (gameState.gegnerCounter === 0) {
            triggerWin(); // kannst du später bauen
        }
        
    }
