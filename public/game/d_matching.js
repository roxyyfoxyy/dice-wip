//*************'************** D: GEGNER-MATCHING ***************************//
//***** Gegnerwürfel mit Userwürfeö vergleichen, Erfolg- & Misserfolg ******//
//**************************************************************************//




//************************ FUNKTION: match() ************************//
//********** Vergleich von Spielerwürfel vs. Gegnerwürfel **********//
//******************************************************************//

	function match(gegnerKombi) {

		// 1. Hole Array aus wuerfel.js
		const player = [...werte];
		const enemy = [...gegnerKombi];		

		// 2. Sortierung des Arrayinhalts jeweils numerisch aufsteigend
		// andernfalls lexikografisch (als strings lol)
		// WICHTIG FÜR VERGLEICHEN
		player.sort((a,b)=>a-b);
		enemy.sort((a,b)=>a-b);


		// 3. Initialisiert Indizes (läuft über player und enemy)
		let pIndex = 0;
		let eIndex = 0;

		
		// 4. Vergleichen
		while (pIndex < player.length && eIndex < enemy.length) {		// Solange Element in jeweils Array enthalten...
		
			if (player[pIndex] === enemy[eIndex]) {						// wenn player-element = enemy-element...
				eIndex++;												// dann match und nächstes enemy-element
			}
		
		pIndex++;														// dann nächstes player-element
		}

		// Alle enemy-Elemente durch, dann Index = Länge --> true 
		return eIndex === enemy.length;			
	}



//******************* FUNKTION: nachruecken() *******************//
//********** sobald match, nächsten Gegner generieren ***********//
//***************************************************************//

	function nachruecken(slotIndex) {
		console.log("Gegner besiegt auf Slot:", slotIndex + 1);			// 0-3

		
		const gegner = aktiveGegner[slotIndex];
    	if (!gegner) return;
		
		
		// 1. STEAL rückgängig machen, falls der besiegte Gegner STEAL war
		if (gegner.typ === "Steal") {
			stealAktiv = false;

			// Würfel wieder sichtbar machen
			document.getElementById("wuerfel" + (stolenIndex + 1)).style.visibility = "visible";

			locked[stolenIndex] = false;
			werte[stolenIndex] = 1; // Defaultwert beim Wiedereintritt
			stolenIndex = null;

			updateWuerfelAnzeige();
		}
		
		
		
		
		
		
		
		
		
		
		
		// Neuer Gegner aus pool.js
		const neu = randomGegner();

		if (neu) {																	
			aktiveGegner[slotIndex] = neu;								// Wenn vorhanden, dann neuer aktiveGegner
			
			// SPECIAL: FREEZE-Gegner
			if (neu && neu.typ === "Freeze" && !freezeAktiv) {
				freezeAktiv = true;
				frozenIndex = Math.floor(Math.random() * 5);
				freezeEnemyId = neu;

				frozenValue = werte[frozenIndex]; // Wert merken von freezed Würfel

				updateWuerfelAnzeige();
			}

			// SPECIAL: STEAL-Gegner
			if (neu && neu.typ === "Steal" && !stealAktiv) {
				stealAktiv = true;

				// 1 zufälliger Würfel wird "geklaut"
				let availableIndices = [0,1,2,3,4];
				stolenIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];

				// Spielerwert ausblenden & locked setzen
				werte[stolenIndex] = null;
				locked[stolenIndex] = true;

				// HTML: Würfel verstecken
				document.getElementById("wuerfel" + (stolenIndex + 1)).style.visibility = "hidden";

				updateWuerfelAnzeige();
			}


			
			
			updateGegnerDesign(slotIndex + 1, neu.kombi);				// und Gegnerwürfel [später auch Karte) updaten
		} else {
			aktiveGegner[slotIndex] = null;								// ansonsten leer, kein Nachschub
			console.log("Keine Gegner mehr im Pool!");
		}
	}




//******************* HOOK: Erfolg & Misserfolg *******************//
//********** sobald match, nächsten Gegner generieren ***********//
//***************************************************************//


	// Hook: damit jede andere Datei darauf Zugriff (VOR ALLEM main!!!)
	window.checkGegnerTreffer = function (geklickteKarteId) {

		// 1. Hole den entsprechenden slot
		const slot = parseInt(geklickteKarteId.replace("gegner","")) - 1;

		// 2. Hole aktuellen Gegner aus Array
		const gegner = aktiveGegner[slot];

		// Wenn kein Gegner, dann abbrechen
		if (!gegner) return false;


		// SPECIAL: Große Straße aktiv? -> direkt Treffer
		if (gameState.strasseActive) {
			gameState.strasseActive = false; // nur für diesen Zug
			saveGameState();
			return { success: true, slot: slot };
		}


		// SPECIAL: 5er-Pasch aktiv? -> direkt Treffer + weiterer Gegner
		if (gameState.paschActive) {
			gameState.paschActive = false; // nur einmal pro Pasch

			// 1. Besiege Gegner der Wahl
			const popup = document.querySelector(".popup-text");
		

			// 2. Verzögerung für Zusatz-Gegner
			setTimeout(() => {

				// zufälligen anderen aktiven Gegner wählen
				const otherSlots = aktiveGegner
					.map((g, i) => i)
					.filter(i => i !== slot && aktiveGegner[i] != null);

				if (otherSlots.length > 0) {
					const randomSlot = otherSlots[Math.floor(Math.random() * otherSlots.length)];
					const gegnerKarte = document.getElementById("gegner" + (randomSlot + 1));

					// Animation + Nachrücken
					gegnerKarte.classList.add("beat");
					setTimeout(() => {

						gegnerKarte.classList.remove("beat");
						nachruecken(randomSlot);

						// ANIMATION: Kettenagriff
						if (popup) {
							popup.textContent = "Kettenagriff!";
							popup.classList.remove("animation");
							void popup.offsetWidth;
							popup.classList.add("animation");
						}

						saveGameState();

					}, 800);
				}
			}, 1000);

			return { success: true, slot: slot };
		}





		// 3. Prüfe, ob User matched -> weil dann nachruecken
		if (match(gegner.kombi)) {
			return { success: true, slot: slot }; 				// Treffer -> Erfolg
		}

		return { success: false }; 					// kein Treffer -> Misserfolg
	};











