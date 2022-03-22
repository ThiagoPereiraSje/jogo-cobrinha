const Game = {
  tick: function () {
    Food.tick();
    Player.tick();
  },
  render: function (ctx) {
    Food.render(ctx);
    Player.render(ctx);
  },
  update: function (ctx) {
    this.tick();
    this.render(ctx);
  },
};
