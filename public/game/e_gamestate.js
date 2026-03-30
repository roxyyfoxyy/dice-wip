//*************** E: GAMEZUSTAND ***************//
//********* Struktur für Zwischenstats *********//
//**********************************************//


window.gameState = {
    
    punkte: 0,
    hp: 10,
    wurfZaehler: 0,
    schonAngegriffen: false,
    gameOver: false,

    gegnerCounter: 3,   //Default: 25, Test: 3

    aktiveGegner: [],
    gegnerPool: [],

    werte: [1,1,1,1,1],
    locked: [false,false,false,false,false],


    // SPECIAL: FREEZE & STEAL
    freezeAktiv: false,
    frozenIndex: null,
    frozenValue: null,

    stealAktiv: false,
    stolenIndex: null,

    // SPECIAL: HEAL
    healUsed: false,

};