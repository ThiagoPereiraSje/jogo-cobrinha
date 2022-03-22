const Food = {
  x: getRandomInt(0, 79) * 10,
  y: getRandomInt(0, 79) * 10,
  w: 10,
  h: 10,

  tick: function () {},

  render: function (ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  },

  restart: function () {
    ctx.fillStyle = "burlywood";
    ctx.fillRect(this.x, this.y, this.w, this.h);

    this.x = getRandomInt(0, 79) * 10;
    this.y = getRandomInt(0, 79) * 10;
  },
};
