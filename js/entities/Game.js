const Game = {
  tick: function () {
    console.log("tick!");
    Player.tick();
  },
  render: function (ctx) {
    Player.render(ctx);
  },
  update: function (ctx) {
    this.tick();
    this.render(ctx);
  },
};
