//****************** A: ALLES RUND UM PLAYER-WÜRFEL  ******************//
//*************** Würfel designen, randomizing, locken ***************//
//********************************************************************//


//**************** KONSTANTEN: ZUSTAND WÜRFEL ****************//
//************************************************************//

	// true = gelocked, false = frei
	let locked = [false, false, false, false, false];

	// Platzhalter zur Speicherung des aktuellen gewürfelten Werts
	//let werte = [1, 1, 1, 1, 1];
	let werte = [null, null, null, null, null];


	let freezeAktiv = false;
	let frozenIndex = null;
	let freezeEnemyId = null;
	let firstRollDone = false;
	let frozenValue = null;





//**************** FUNKTION: designWuerfel() ****************//
//******* lösche/cleane + designe neu anhand von Zahl *******//
//***********************************************************//

	function designWuerfel(wuerfelElement, value) {
	
		// 1. Lösche vorigen Inhalt/Augen
		wuerfelElement.innerHTML = "";
	
		// wegen FREEZE??
		if (!value || value < 1 || value > 6) return;

		// 2. Wert zuordnen zu Position auge (a1, a2, Kombis etc.)
		// Wenn später Zahl, dann macht hier lookie-lookie, welche Augen dazugehören
		const augePosition = {
			1: ["a4"],
			2: ["a1", "a7"],
			3: ["a1", "a4", "a7"],
			4: ["a1", "a2", "a6", "a7"],
			5: ["a1", "a2", "a4", "a6", "a7"],
			6: ["a1", "a2", "a3", "a5", "a6", "a7"]
		};

	
		// 3. Generiere die benötigten Augen
		augePosition[value].forEach(pos => {					//je nachdem welche Zahl aus wuerfeln()-Math.random, rufe dazugehörige Augen auf
			const auge = document.createElement("div");			//erstelle neues div für Auge
			auge.classList.add("auge", pos);					//kreiiere zwei Klassen: auge für Aussehen, pos für Position
			wuerfelElement.appendChild(auge);					//platziere es in .wuerfel
		});
	}




//******************* FUNKTION: wuerfeln() *******************//
//********* random Wert von 1-6 für alle not-locked *********//
//***********************************************************//


	// Würfeln/randomizing nur für not-locked-ones
	function wuerfeln() {

		firstRollDone = true;
	
		for (let i = 0; i < 5; i++) {										//gehe alle Würfel 0-4 durch im Array locked
			
			if (i === frozenIndex && freezeAktiv) {
				frozenValue = werte[i];
			}
			else if (!locked[i]) {											//wenn bei locked nicht auf true, dann:
				werte[i] = Math.floor(Math.random() * 6) + 1;				//random Abrundwert zwischen 0...5 +1 -> 1...6
			}

		
			// hole entsprechenden Würfel
			const w = document.getElementById("wuerfel" + (i + 1));			//+1 wegen 1-6 für ID statt 0-5
													
			if (werte[i] !== null) {
				designWuerfel(w, werte[i]);									//Damit ab zu: Erstellung Design jeweiliger Würfel
			} 

			if (i === frozenIndex && firstRollDone) {
				w.classList.add("frozen");
			} else {
				w.classList.remove("frozen");
			}


		}
		
	}



//************* FUNKTION: updateWuerfelAnzeige() *************//
//*** direkt FREEZE wenn spawn bzw. UNFREEZE wenn besiegt ***//
//***********************************************************//

	function updateWuerfelAnzeige() {
		for (let i = 0; i < 5; i++) {
			const w = document.getElementById("wuerfel" + (i + 1));

			// Würfel neu zeichnen (falls Wert vorhanden)
			if (werte[i] !== null) {
				designWuerfel(w, werte[i]);
			}

			// Frozen-Status korrekt setzen
			if (i === frozenIndex && freezeAktiv) {
				w.classList.add("frozen");
			} else {
				w.classList.remove("frozen");
			}
		}
	}





//****************** FUNKTION: toggleLock() ******************//
//*** (un)lock via click - wechsel lock-Zustand per Klick ***//
//***********************************************************//

	function toggleLock(index) {											//index = welcher Würfel gerade angeklickt wurde

		// ZWISCHEN: für Special-Gegner-FREEZE
		if (index === frozenIndex) return;
	
		// 1. Invertieren: wenn dieser Angeklickte auf locked-true, dann jetzt false/frei 
		// und wenn auf locked-false/frei, dann jetzt true
		locked[index] = !locked[index];											

		// 2. Hole entsprechenden angeklickten Würfel
		const w = document.getElementById("wuerfel" + (index + 1));			// mit +1 weil nicht von 0-5, sondern 1-6 für ID

		// 3. Design anpassen / toggle zwischen Zuständen
		w.classList.toggle("locked", locked[index]);
	  
		// Um locks nach Refresh zu behalten
		saveGameState();
		
		/** ERKLÄRUNG toggle()
		kann Klasse adden oder entfernen
		hier: Klasse "locked", Bedingung locked[index]
		wenn locked[index] true -> Klasse "locked" wird hinzugefügt -> Add-Klick -> dann jz in index class="wuerfel.locked"
		wenn locked[index] false -> Klasse "locked" wird entfernt -> Remove-Klick -> dann jz in index class="wuerfel"
		Design = .wuerfel .locked
		**/
	}