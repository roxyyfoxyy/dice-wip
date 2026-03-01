//*************** E: GAMEZUSTAND ***************//
//********* Struktur für Zwischenstats *********//
//**********************************************//


window.gameState = {
    
    punkte: 0,
    hp: 10,
    wurfZaehler: 0,
    schonAngegriffen: false,
    gameOver: false,

    aktiveGegner: [],
    gegnerPool: [],

    werte: [1,1,1,1,1],
    locked: [false,false,false,false,false]

};