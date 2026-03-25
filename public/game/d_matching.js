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

		// Neuer Gegner aus pool.js
		const neu = randomGegner();

		if (neu) {																	
			aktiveGegner[slotIndex] = neu;								// Wenn vorhanden, dann neuer aktiveGegner
			
			// ZWISCHEN: für Special-Gegner-FREEZE
			if (neu && neu.typ === "Freeze" && !freezeAktiv) {
				freezeAktiv = true;
				frozenIndex = Math.floor(Math.random() * 5);
				freezeEnemyId = neu;

				frozenValue = werte[frozenIndex]; // Wert merken von freezed Würfel

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

		// 3. Prüfe, ob User matched -> weil dann nachruecken
		if (match(gegner.kombi)) {
			return { success: true, slot: slot }; 				// Treffer -> Erfolg
		}

		return { success: false }; 					// kein Treffer -> Misserfolg
	};











