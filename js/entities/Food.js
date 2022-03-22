const FOOD_SIZE = 10;

const Food = {
  x: 0,
  y: 0,
  w: FOOD_SIZE,
  h: FOOD_SIZE,

  render: function (ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  },

  restart: function () {
    ctx.fillStyle = "burlywood";
    ctx.fillRect(this.x, this.y, this.w, this.h);

    this.x = getRandomInt(0, 79) * 10;
    this.y = getRandomInt(0, 49) * 10;
  },
};
