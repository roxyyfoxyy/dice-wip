
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
  
