//*************************** C: GEGNER-POOL ***************************//
//**** vers. Gegnertypen, Häufigkeit, zufällig ziehen, generieren *****//
//********************************************************************//



//************************ GEGNERTYPEN ************************//
//*************** dynamischer Gegner-Generator ***************//
//************************************************************//

	// Platzhalter: Leeres Array, das später mit addGegner gefüllt wird
	let gegnerPool = [];


	// Easy-A (hier NAME): Zwillinge (2-2, 4-4, ...)
	function createEasyA() {
		const x = Math.floor(Math.random() * 6) + 1;
		return [x, x];
	}


	// Easy-B (hier NAME): Stepper (2-3, 4-5, ...) */
	function createEasyB() {
		const x = Math.floor(Math.random() * 5) + 1;		// max. 5 sonst x+1=7
		return [x, x + 1];
	}


	// Medium-A (hier NAME): 3er-Pasch (3-3-3, ...)
	function createMediumA() {
		const x = Math.floor(Math.random() * 6) + 1;
		return [x, x, x];
	}


	// Medium-B (hier NAME): Gasse (1-2-3, 2-3-4, ...)
	function createMediumB() {
		const x = Math.floor(Math.random() * 4) + 1;		// max 4 sonst x+2=7
		return [x, x + 1, x + 2];
	}
	

	// Difficult-A (hier NAME): 4er-Pasch (1-1-1-1, ...)
	function createDifficultA() {
		const x = Math.floor(Math.random() * 6) + 1;
		return [x, x, x, x];
	}


	// Difficult-B (hier NAME): Doppel-Zwillinge (1-1-2-2, 3-3-6-6, ...)
	function createDifficultB() {
		const x = Math.floor(Math.random() * 6) + 1;
		let y = Math.floor(Math.random() * 6) + 1;

		// Solange wie y auch zufällig == x, nehme nächsten Wert
		while (y === x) y = Math.floor(Math.random() * 6) + 1;
		return [x, x, y, y];
	}


	// Difficult-C (hier NAME): Kleine-Straße (1-2-3-4, 2-3-4-5, ...)
	function createDifficultC() {
		const x = Math.floor(Math.random() * 3) + 1;		// max 3 sonst x+3=7
		return [x, x + 1, x + 2, x + 3];
	}





//******************** FUNKTION: addGegner() *******************//
//***** Gegnerpool generieren aus GegnerPool mit Häufigkeit ***//
//************************************************************//


	// Funktion für Gegnergenerierung 
	// mit Zuteilung von Typ, Häufigkeit, jeweilige Kombi-Fkt aus gegnerPool()
	function addGegner(typ, haeufigkeit, create) {

		for (let i = 0; i < haeufigkeit; i++) {
			gegnerPool.push({						// pushed/hängt das neue Element hinten an das Array
				typ,										// mit Typ
				kombi: create()						// & Kombination (aus dem jeweiligen create() -> zsmgefasst als kombi)
			});										// --> { type: "EasyA", kombi [2,2] } { type: "...", kombi [...] }, usw.
		}
	}
	

	// Erstelle mit addGegner-Logik vom Typ "..." x-viele Gegner
	// der Wert/die Kombi soll aus create...() kommen (return [...])
	addGegner("EasyA", 6, createEasyA);
	addGegner("EasyB", 6, createEasyB);

	addGegner("MediumA", 5, createMediumA);
	addGegner("MediumB", 5, createMediumB);

	addGegner("DifficultA", 2, createDifficultA);
	addGegner("DifficultB", 4, createDifficultB);
	addGegner("DifficultC", 3, createDifficultC);





//****************** FUNKTION: randomGegner() ******************//
//**** Logik für Gegner zufällig auswählen aus Pool-Array  ****//
//************************************************************//

	// Platzhalter: Leeres Array, in das wir random picked Gegner aus dem Pool reinpushen
	let aktiveGegner = [];
	

	function randomGegner() {

		// Wenn Pool noch 0 / kein Gegnerpool generiert, dann mache nix
		if (gegnerPool.length === 0) {
			return null;
		}

		// 1. Zufällige Position aus Array gegnerPool
		const index = Math.floor(Math.random() * gegnerPool.length);		// random Position von 0 bis Anzahl aller Gegner im Pool, die dank addGegner created wurden
																								// wobei  0 ≤ x < Anzahl, sodass 0, 1, 2, ..., anzahl-1 weil ja Positionen-Indizes != Anzahl-Elemente

		// 2. Gibt Element der gewählten Positionen zurück && entfernt (so KEINE DOPPLUNG)
		const [gegner] = gegnerPool.splice(index, 1);					// .splice = entfernt im Array ab Pos. "index" GENAU 1 ELEMENT (also genau das random auserwählte)
		return gegner;																// so return nicht als Array sondern OBJEKT
																								
	}






//**************** FUNKTION: generiereGegner() ****************//
//*********** 4x randomGegner() + ins Array speichern *********//
//************************************************************//

	function generiereGegner() {

		// Keine Gegner (bevor Seite nicht geladen)
		aktiveGegner = [];

		for (let i = 1; i <= 4; i++) {

			// 1. Neuer Gegner aus randomGegner() (unser "return gegner") und push in aktiveGegner
			const neu = randomGegner();
			aktiveGegner.push(neu);

			// 2. Kombi des neuen Gegners
			let kombi;
				if (neu) {
					kombi = neu.kombi;		//nimm kombi von neu & setz als aktuelle kombi
				} else {
					kombi = [];					//wenn kein neuer Gegner, dann leer
				}

			// 3. Jeweilige Karte mit kombi an updateDesign weitergeben
			updateGegnerDesign(i, kombi);
		}
	}






//************** FUNKTION: updateGegnerDesign() **************//
//****************** Gegnerwürfel setzen/set  ****************//
//************************************************************//

	function updateGegnerDesign(slot, kombination) {

		// 1. Hole gw-container der entsprechenden Karte an Position i/slot (1-4)
		// slot/gegnerX + das nächste dahinter liegende .gw-container
		// DAFÜR MUSS DIE HTML SO BLEIBEN, TRUST !!! DORT NICHTS MEHR ÄNDERN IN DER REIHENFOLGE
		// AUCH KEIN LEERES DIV ODER SOOO
		const container = document.querySelector(`#gegner${slot} + .gw-container`);
	
	
		// 2. Hole ALLE Würfel-divs dieses Containers (in Reihenfolge)
		// die ganzen gwXY (immer jeweils 4 pro slot/Gegner)
		const gwXY = Array.from(container.querySelectorAll('.gegner-wuerfel'));
	
		
		// 3. Erstmal alle Gegnerwürfel leeren, damit nicht die festes Default gwXYs (alle 4 Stück)
		gwXY.forEach(gw_augen => {

			gw_augen.innerHTML = "";				//Inhalt/Text/Augen löschen
			gw_augen.style.display = "none";		//Gar nicht erst anzeigen
	
		});

	
		// 4. Nur so viele Würfel anzeigen wie auch in kombination vorhanden !!!
		// für i < Anzahl kombi-Elemente (z.B. [2,2]) AND i < verfügbare Würfel (hier 4 pro Gegner)
		// da bei 0 Beginn --> immer -1 --> dann passend
		for (let i = 0; i < kombination.length && i < gwXY.length; i++) {

			// Hole den entsprechenden slot (0, 1, 2 oder 3)
			const gw_augen = gwXY[i];

			// Aktiviere nur die notwendigen
			gw_augen.style.display = "flex";

			// schreibe Würfelwert rein (z.B. bei [3, 3] dann 3 und 3 in den ersten beiden Slots
			gw_augen.textContent = kombination[i];
		}

	}

	//HIER SPÄTER: STATT WERT --> WÜRFELAUGEN!!!



/* BEISPIEL
	updateGegnerDesign(2, [4, 5, 5])
	--> Gegner 2 bekommt drei sichtbare Würfel: 4, 5, 5.
*/







