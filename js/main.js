const ctx = document.getElementById("mCanvas").getContext("2d");

function clearCanvas() {
  ctx.fillStyle = "burlywood";
  ctx.fillRect(0, 0, 800, 500);
}

const Main = {
  timer: undefined,
  banner: document.getElementById("banner"),

  hideBanner: function () {
    this.banner.style.display = "none";
  },

  loop: function () {
    Game.update(ctx);
  },
};

function start() {
  Main.hideBanner();
  document.addEventListener("keydown", Keyboard.keydown);

  if (!Main.timer) {
    // Game Loop a cada 500ms
    Main.timer = setInterval(Main.loop, 500);
  }
}
