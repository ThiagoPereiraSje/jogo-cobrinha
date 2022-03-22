const Player = {
  x: 400,
  y: 250,
  w: 10,
  h: 10,
  length: 10,
  coordinates: [],

  tick: function () {
    if (Keyboard.right) {
      this.x += this.w;
    } else if (Keyboard.left) {
      this.x -= this.w;
    }

    if (Keyboard.down) {
      this.y += this.h;
    } else if (Keyboard.up) {
      this.y -= this.h;
    }

    if (this.coordinates.find((el) => el.x === this.x && el.y === this.y)) {
      this.restart();
      return;
    }

    if (this.x < 0 || this.x >= 800) {
      this.restart();
      return;
    }

    if (this.y < 0 || this.y >= 500) {
      this.restart();
      return;
    }
  },

  render: function (ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.w, this.h);

    if (this.coordinates.length === this.length) {
      const cd = this.coordinates.shift();

      ctx.fillStyle = "burlywood";
      ctx.fillRect(cd.x, cd.y, this.w, this.h);
    }

    this.coordinates.push({ x: this.x, y: this.y });
  },

  restart: function () {
    this.x = 400;
    this.y = 250;
    this.length = 10;
    this.coordinates = [];

    clearCanvas();
  },
};
