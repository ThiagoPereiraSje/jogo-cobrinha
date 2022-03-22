const Player = {
  x: 400,
  y: 250,
  w: 10,
  h: 10,
  length: 10,
  coordinates: [],

  tick: function () {
    console.log("up: ", Keyboard.up);

    if (Keyboard.right) {
      this.x += this.w;
      return;
    }

    if (Keyboard.left) {
      this.x -= this.w;
      return;
    }

    if (Keyboard.down) {
      this.y += this.h;
      return;
    }

    if (Keyboard.up) {
      this.y -= this.h;
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
};
