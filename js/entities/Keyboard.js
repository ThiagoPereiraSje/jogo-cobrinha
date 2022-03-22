const vkLeft = 37;
const vkRight = 39;
const vkUp = 38;
const vkDown = 40;

const Keyboard = {
  left: false,
  right: true,
  up: false,
  down: false,

  keydown: function (e) {
    this.left = e.which === vkLeft;
    this.right = e.which === vkRight;
    this.up = e.which === vkUp;
    this.down = e.which === vkDown;
  },
};
