//********************** FUNKTION: SAVE GAME-WERTE *******************//
//************ alle aktuellen Zustände merken bei Refresh ************//
//********************************************************************//

    // Speichern
    function saveGameState() {

        // Für Gegner-Speicherung
        gameState.aktiveGegner = aktiveGegner;
        gameState.gegnerPool = gegnerPool;

        // Für Würfel-Speicherung
        gameState.werte = werte;
        gameState.locked = locked;

        // SPECIAL: FREEZE
        gameState.freezeAktiv = freezeAktiv;
        gameState.frozenIndex = frozenIndex;
        gameState.frozenValue = frozenValue;

        // SPECIAL: STEAL
        gameState.stealAktiv = stealAktiv;
        gameState.stolenIndex = stolenIndex;

        // Objekt umwandeln in String
        // z.B. \"punkte\":5,\"hp\":8,\"gameOver\":false
        localStorage.setItem("gameState", JSON.stringify(gameState));
    }



    // Werte/String laden
    function loadGameState() {

        const saved = localStorage.getItem("gameState");    // unser String


        if (saved) {

            // String wieder umwandeln in Objekt
            const parsed = JSON.parse(saved);

            // Wenn Gameover, dann Abbruch
            if (parsed.gameOver) {
                localStorage.removeItem("gameState");
                return;         // abbrechen -> alias "new Game"
            }

            // Ins gameState.js schreiben
            // wenn parsed.xx undefiniert o. null, dann Wert rechts nehmen stattdessen
            gameState.punkte = parsed.punkte ?? 0;
            gameState.hp = parsed.hp ?? 10;
            gameState.gameOver = parsed.gameOver ?? false;

            gameState.wurfZaehler = parsed.wurfZaehler ?? 0;
            gameState.schonAngegriffen = parsed.schonAngegriffen ?? false;

            gameState.gegnerCounter = parsed.gegnerCounter ?? 3; // Default: 25 - Test: 3

            aktiveGegner = parsed.aktiveGegner ?? [];
            gegnerPool = parsed.gegnerPool ?? [];
            
            werte = parsed.werte ?? [1,1,1,1,1];
            locked = parsed.locked ?? [false,false,false,false,false];

            // SPECIAL: FREEZE
            freezeAktiv = parsed.freezeAktiv ?? false;
            frozenIndex = parsed.frozenIndex ?? null;
            frozenValue = parsed.frozenValue ?? null;

            // SPECIAL: STEAL
            stealAktiv = parsed.stealAktiv ?? false;
            stolenIndex = parsed.stolenIndex ?? null;

        } else {        

            gameState.punkte = 0;
            gameState.hp = 10;
            gameState.wurfZaehler = 0;
            gameState.schonAngegriffen = false;
            gameState.gameOver = false;

            gameState.gegnerCounter = 3; // Default: 25 - Test: 3 - SPÄTER gameState.gegnerCounter = gegnerPool.length;

            aktiveGegner = [];
            //gegnerPool = [];  //weg, sonst Gegner-Würfel clear

            werte = [1,1,1,1,1];
            locked = [false,false,false,false,false];

        }

        // Anzeige updaten
        updatePunkte();
        updateHP();
        updateGegnerCounter();
        updateWurf();

        // Würfel-Design Anzeige updaten / neu zeichnen
        for (let i = 0; i < 5; i++) {
            const w = document.getElementById("wuerfel" + (i + 1));

            // Lock & Freeze & Steal wieder korrekt setzen
            w.classList.toggle("locked", locked[i]);
            w.classList.toggle("frozen", i === frozenIndex && freezeAktiv);
            w.classList.toggle("stolen", i === stolenIndex && stealAktiv);

            if (werte[i] == null) {
                w.innerHTML = "";
            } else {
                designWuerfel(w, werte[i]);
            }
   
        }

        aktiveGegner.forEach((gegner, index) => {
            if (gegner) {
                updateGegnerDesign(index + 1, gegner.kombi);
            }
        });

    }

    // INITIALISIERUNG/Aufruf von Game-Zustand/Stats
    // loadGameState();
    // jz in main!!!