const FOOD_SIZE = 10;
const PRIMO_SIZE = 30;
const primo = document.getElementById("primo");

const Food = {
  x: 0,
  y: 0,
  w: FOOD_SIZE,
  h: FOOD_SIZE,
  super: false,

  render: function (ctx) {
    if (this.super) {
      ctx.drawImage(primo, this.x, this.y, this.w, this.h);
    } else {
      ctx.fillStyle = "green";
      ctx.fillRect(this.x, this.y, this.w, this.h);
    }
  },

  restart: function () {
    ctx.fillStyle = "burlywood";
    ctx.fillRect(this.x, this.y, this.w, this.h);

    this.x = getRandomInt(0, 79) * 10;
    this.y = getRandomInt(0, 49) * 10;
    this.super = getRandomInt(0, 100) < 40;

    if (this.super) {
      this.w = PRIMO_SIZE;
      this.h = PRIMO_SIZE;
    } else {
      this.w = FOOD_SIZE;
      this.h = FOOD_SIZE;
    }
  },
};
