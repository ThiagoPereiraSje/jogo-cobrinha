const Game = {
  x: 1,
  tick: function () {
    console.log("tick!");
  },
  render: function (ctx) {
    console.log("ctx: ", ctx);
  },
  update: function (ctx) {
    this.tick();
    this.render(ctx);
  },
};
