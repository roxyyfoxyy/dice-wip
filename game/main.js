
//******************** GEGNER-GENERIERUNG ********************//
//************************************************************//

	document.addEventListener("DOMContentLoaded", () => {

    loadGameState();

		const saved = localStorage.getItem("gameState");

    if (!saved) {

        generiereGegner();
        saveGameState();

    } else {

        // Gegner aus gespeicherten Daten wieder anzeigen
        aktiveGegner.forEach((gegner, index) => {

            if (gegner) {
                updateGegnerDesign(index + 1, gegner.kombi);
            }

        });
    }

	});

// Sobald Seite fertig geladen ist, werden die Gegnerkarten erstmals gesetzt.
// ÄNDERN? -> zu wenn Start gedrückt wurde?






//************************ DO THE LOCK ************************//
//************************************************************//

// Gehe jeden Würfel durch - wenn Würfel angeklickt wurde, dann entsprechend toggleLock()
    for (let i = 0; i < 5; i++) {
      document.getElementById("wuerfel" + (i + 1))
        .addEventListener("click", () => toggleLock(i));
    }


    
//************* WURFANZAHL IMMER INITIALISIEREN ***************//
//************************************************************//
// Damit beim Start/Refresh keine falsche Wurfelanzahl
updateWurf();








