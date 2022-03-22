const ctx = document.getElementById("mCanvas").getContext("2d");

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

  if (!Main.timer) {
    // Game Loop a cada 500ms
    Main.timer = setInterval(Main.loop, 500);
  }
}
