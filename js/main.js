const ctx = document.getElementById("mCanvas").getContext("2d");

const Main = {
  timer: undefined,
  banner: document.getElementById("banner"),

  hideBanner: function () {
    this.banner.classList.add("hide");
  },

  showBanner: function () {
    this.banner.classList.remove("hide");
  },

  showGameOver: function () {
    this.showBanner();
  },

  loop: function () {
    Game.update(ctx);
  },
};

function start() {
  Main.hideBanner();
  document.addEventListener("keydown", Keyboard.keydown);
  Game.restart();

  if (!Main.timer) {
    // Game Loop a cada 250ms
    Main.timer = setInterval(Main.loop, 250);
  }
}

function clearCanvas() {
  ctx.fillStyle = "burlywood";
  ctx.fillRect(0, 0, 800, 500);
}

function gameOver() {
  clearInterval(Main.timer);
  Main.timer = undefined;
  document.removeEventListener("keydown", Keyboard.keydown);
  Main.showGameOver();
}
