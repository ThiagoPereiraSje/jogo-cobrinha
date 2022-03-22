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
    if (![vkLeft, vkRight, vkDown, vkUp].includes(e.which)) {
      return;
    }

    Keyboard.left = e.which === vkLeft;
    Keyboard.right = e.which === vkRight;
    Keyboard.up = e.which === vkUp;
    Keyboard.down = e.which === vkDown;
  },
};
