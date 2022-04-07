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

    let lastKey = Object.keys(Keyboard)
      .slice(0, -1)
      .filter((e) => Keyboard[e])[0];

    const leftCondition = e.which === vkLeft && lastKey !== "right";
    const rightCondition = e.which === vkRight && lastKey !== "left";
    const upCondition = e.which === vkUp && lastKey !== "down";
    const downCondition = e.which === vkDown && lastKey !== "up";

    if (
      ![leftCondition, rightCondition, upCondition, downCondition].filter(
        (boolean) => boolean === true
      ).length > 0
    ) {
      return;
    }

    Keyboard.left = leftCondition;
    Keyboard.right = rightCondition;
    Keyboard.up = upCondition;
    Keyboard.down = downCondition;
  },
};
