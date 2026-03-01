
//******************** SCREEN-SKALIERUNG ********************//
//***********************************************************//


/* first try
function scaleBoard(){
  const board = document.getElementById("game-board");

  const scale = Math.min(
    window.innerWidth / 1600,
    window.innerHeight / 900
  );

  board.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", scaleBoard);
scaleBoard();

*/

/* für v15
const wrapper = document.getElementById("game-wrapper");
const board = document.getElementById("game-board");

function scaleBoard() {
  const scale = Math.min(
    wrapper.clientWidth / 1600,
    wrapper.clientHeight / 900
  );

  board.style.transform = `scale(${scale})`;
}

new ResizeObserver(scaleBoard).observe(wrapper);
document.addEventListener("fullscreenchange", scaleBoard);

scaleBoard();

*/

/*
const wrapper = document.getElementById("game-wrapper");
const board = document.getElementById("game-board");

function scaleBoard() {
  const rect = board.getBoundingClientRect();

  const scale = Math.min(
    wrapper.clientWidth / rect.width,
    wrapper.clientHeight / rect.height
  );

  board.style.transform = `scale(${scale})`;
}
  */



const wrapper = document.getElementById("game-wrapper");
const board = document.getElementById("game-board");

function scaleBoard() {
  const availableWidth = wrapper.clientWidth;
  const scale = Math.min(1, availableWidth / 1600);

  board.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", scaleBoard);
scaleBoard();


/*

const wrapper = document.getElementById("game-wrapper");
const board = document.getElementById("game-board");

function scaleBoard() {
  const availableWidth = wrapper.clientWidth;
  const availableHeight = wrapper.clientHeight;

  const scaleX = availableWidth / 1600;
  const scaleY = availableHeight / board.offsetHeight;

  const scale = Math.min(1, scaleX, scaleY);

  board.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", scaleBoard);
scaleBoard();

*/

