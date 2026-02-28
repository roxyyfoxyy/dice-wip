//********************** F: PUNKTE- & HP-SYSTEM **********************//
//********************************************************************//


//****************** FUNKTION: ANZEIGE-UPDATE *****************//
//******************** Punkte & HP updaten *******************//
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

