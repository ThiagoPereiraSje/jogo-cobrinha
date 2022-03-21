const banner = document.getElementById("banner");
let timer = undefined;

function start() {
  banner.style.display = "none";

  if (!timer) {
    // Game Loop a cada 60ms
    timer = setInterval(gameLoop, 60);
  }
}

function gameLoop() {
  console.log("Game Loop!");
  Game.update();
}
