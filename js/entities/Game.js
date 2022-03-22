const Game = {
  tick: function () {
    Player.tick();
  },
  render: function (ctx) {
    Player.render(ctx);
    Food.render(ctx);
  },
  update: function (ctx) {
    this.tick();
    this.render(ctx);
  },
};
