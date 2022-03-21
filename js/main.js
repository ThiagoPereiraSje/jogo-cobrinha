const Main = {
  timer: undefined,
  banner: document.getElementById("banner"),

  hideBanner: function () {
    this.banner.style.display = "none";
  },

  loop: function () {
    console.log("Game Loop!");
    Game.update();
  },
};

function start() {
  Main.hideBanner();

  if (!Main.timer) {
    // Game Loop a cada 60ms
    Main.timer = setInterval(Main.loop, 60);
  }
}
