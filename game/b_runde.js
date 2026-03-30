//******************* B1: ALLES RUND UM RUNDENLOGIK ******************//
//*********** Würfeln mit max-Würfe, Passen, Angriff, reset **********//
//********************************************************************//




//***************** KONSTANTEN: WURF & BUTTON *****************//
//************************************************************//

	//gameState.wurfZaehler = 0; 				// Wurfzähler pro Runde (Runde = Angegriffen oder gepasst)
	//weg - ist jz in loadGameState() - savegamestate.js
	
	const MAX_WURF = 3;

	//Button-ID holen aus index
	const passenButton = document.getElementById("passen");
	const wuerfelnButton = document.getElementById("wuerfeln");




//**************** FUNKTION: WURFANZAHL UPDATE ****************//
//************ Anzeige wie viele Würfe verbleibend ***********//
//************************************************************//

	function updateWurf() {
		const anzeige = document.getElementById("wurfZaehler");
		const verbleibend = MAX_WURF - gameState.wurfZaehler;

		if (verbleibend <= 0) {
			anzeige.textContent = "KEINE WÜRFE MEHR";
		} else {
			anzeige.textContent = verbleibend + " Würfe verbleibend";
		}
	}




//****************** EVENT: WÜRFELBUTTON-LOGIK *****************//
//******* max. 3 Würfe + blockiere wenn Grenze erreicht *******//
//************************************************************//

	// Sobald wuerfelnButton (Button mit ID "wuerfeln") Klick wahrnimmt:
	wuerfelnButton.addEventListener("click", () => {

		// Prüfen, wie oft schon angeklickt
		if (gameState.wurfZaehler < MAX_WURF) {					//wenn unter 3x

			wuerfeln();											//führe aus
			gameState.wurfZaehler++;							//& inkrementiere Wurf-/Klickanzahl

			// Wurfanzahl updaten & speichern für Refresh
			updateWurf();
			saveGameState();


		} else { 												//wenn MAX erreicht -> wurfZaehler >= MAX_WURF
				wuerfelnButton.disabled = true;					//Button-Rolle in index deaktivieren
		}
	});






//**************** EVENT: PASSENBUTTON-LOGIK ******************//
//********************* HP-Abzug + reset *********************//
//************************************************************//

	// Sobald passenButton (Button mit ID "passen") Klick wahrnimmt:
	passenButton.addEventListener("click", () => {

		// Wenn nach Passen GameOver, dann HP=0 und somit ABBRUCH
		if (gameState.gameOver) return;

		// Wenn diese Runde noch nicht angegriffen wurde -> -HP
		if (!gameState.schonAngegriffen) {
			minusHP(1);
		}

		// Würfel resetten
		resetRunde();
	});






//****************** FUNKTION: resetRunde() ******************//
//*********** clean alle locks, Wurfanzahl & Augen ***********//
//************************************************************//

	function resetRunde() {

		// 1. Wurfanzahl wieder 0 & schonAngegriffen-reset
		gameState.wurfZaehler = 0;
		gameState.schonAngegriffen = false;
		gameState.healUsed = false;
		gameState.strasseActive = false;
		updateWurf();		// Wurfanzahl updaten

		// 2. Gehe alle Würfel durch
		for (let i = 0; i < 5; i++) {

			// 3. Entferne locks (alle außer freeze-lock durch Gegner)
			if (i !== frozenIndex) {
				locked[i] = false;
			}

			// Würfelaufgen-Werte leeren (damit bei Refresh nicht last-saved wieder angezeigt wird!!)
			if (i === frozenIndex && freezeAktiv) {
				werte[i] = frozenValue; // Wert behalten!
			} else {
				werte[i] = null;
			}

			// 4. Hole entsprechenden Würfel
			const w = document.getElementById("wuerfel" + (i + 1))

			// 5. Entferne lock-Klasse (und somit Design)
			w.classList.remove("locked");

			// 6. Entferne Inhalt/Augen
			w.innerHTML = "";

		}

		updateWuerfelAnzeige();

    // 7. Button-Rolle in index wieder aktivieren
    wuerfelnButton.disabled = false;

	// Für noDesign-Würfel & Wurfanzahl verbleibt wie bei Passen nach Refresh
	saveGameState();
}





//******************* B2: ALLES RUND UM ANGRIFFSLOGIK *****************//
//*************** Karten anklicken, Erfolg/Failure-Check **************//
//********************************************************************//

	//Alles, was .karten ist, auswählen
	const karten = document.querySelectorAll('.karten');



//*************** EVENT: ANGREIFEN/GEGNER WÄHLEN ***************//
//******* klick erkennen + angreifen, wenn mind. 1 Wurf *******//
//************************************************************//

	// 1. Gehe alle .karten durch und wenn karten Klick wahrnimmt:
	karten.forEach(kartenElement => {
		kartenElement.addEventListener('click', () => {

			// 2. Prüfung, ob überhaupt schon gewürfelt
			// denn: erst dann Angriff erlauben
			if (gameState.wurfZaehler > 0) { 

				// 3. Mit der Karte ab zu: Treffer vs. Ungültig-Aktion
				angreifen(kartenElement);
			}
		});
	});





//******************** FUNKTION: ANGREIFEN ********************//
//*************** Treffer- & Ungültig-Aktionen ***************//
//************************************************************//

	// kartenElement aus EVENT: ANGREIFEN/GEGNER WÄHLEN
	function angreifen(gegnerKarte) {
		console.log(`Angriff auf ${gegnerKarte.id}`);

		const result = checkGegnerTreffer(gegnerKarte.id);		//aus matching.js
		const popup = document.querySelector(".popup-text"); 


		// TREFFER
		if (result.success) {
			console.log("Treffer - Gegner wird besiegt");

			//Gegner erkennen/kategorisieren für jeweilige Punkte
			const gegnerIndex = parseInt(gegnerKarte.id.replace("gegner", "")) - 1;
			const gegner = aktiveGegner[gegnerIndex];


			// ZWISCHEN: für Special-Gegner-FREEZE
			if (gegner.typ === "Freeze") {
				freezeAktiv = false;
				frozenIndex = null;
				freezeEnemyId = null;
				frozenValue = null;

				updateWuerfelAnzeige();
			}

			// Punkte inkrementieren - je nach Gegner
			// GegnerCounter dekrementieren
			// & Mindest-Angriff pro Runde CHECK (so kein -HP beim nächsten Passen)
			plusPunkte(gegner.punkte);
			minusGegnerCounter(1); 
			gameState.schonAngegriffen = true
			
			

			// ANIMATION: GEGNER TREFFER-ANIMATION
			const slot = result.slot;
			gegnerKarte.classList.add("beat");

			setTimeout(() => {
				gegnerKarte.classList.remove("beat");
				nachruecken(slot);
				saveGameState();	// für Refresh-Save -> HIERHIN! 
				 					// Sonst nachruecken() mit neuem Gegner nicht in Save-GameState, sondern alter Gegner-Status
				gegnerKarte.classList.add("spawn");
			}, 500);

			

			
			
			// ANIMATION: POPUP-TEXT TREFFER
			popup.textContent = "TREFFER!"; 

			// Animation-Reset (für wenn vorher schon aktiviert)
			popup.classList.remove("animation");
			void popup.offsetWidth; // Reflow Trick (damit Browser remove auch wirklich erkennt!)
			
			// Animation-Start
			popup.classList.add("animation");

			
			//resetRunde();	// v1: Würfel zurücksetzen -> v2: weiteres Würfeln & somit Angreifen erlauben
			return; 		// dann Gegner nachruecken(true)
	
		}

		// ANIMATION: POPUP-TEXT UNGÜLTIG
		console.log("Falsche Würfelkombo - Gegner bleibt");
		popup.textContent = "Falsche Würfelkombination!";

		// Animation-Reset (für wenn vorher schon aktiviert)
		popup.classList.remove("animation");
		void popup.offsetWidth; // Reflow Trick (damit Browser remove auch wirklich erkennt!)

		// Animation-Start
		popup.classList.add("animation");

}
