const anime = require("animejs").default;
const { Howl } = require("howler");
const { notes } = require("./assets/notes");
const { createKeyboardRow, createRowOfKeys, getRandomInt } = require("./util");

document.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM content has been loaded.");
  // Standard QWERTY keyboard--one array for each row
  const topRowKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middleRowKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const bottomRowKeys = ["Z", "X", "C", "V", "B", "N", "M"];

  // Grab the keyboard section element
  const keyboard = document.getElementById("keyboard");

  // Create a container for each row of keys and append it to the keyboard
  const topKeyboardRow = createKeyboardRow("top-keyboard-row", keyboard);
  const middleKeyboardRow = createKeyboardRow("middle-keyboard-row", keyboard);
  const bottomKeyboardRow = createKeyboardRow("bottom-keyboard-row", keyboard);

  // Populate each keyboard row with its corresponding keys
  createRowOfKeys(topRowKeys, topKeyboardRow);
  createRowOfKeys(middleRowKeys, middleKeyboardRow);
  createRowOfKeys(bottomRowKeys, bottomKeyboardRow);

  document.addEventListener("keydown", (event) => {
    if (event.code.startsWith("Key")) {
      const keyboardCharacter = event.code.slice(-1);
      const keyId = `string-key-${keyboardCharacter}`;

      // Play the note associated w/ the keyboard character
      // that was pressed.
      const noteIndex = keyboardCharacter.charCodeAt(0) % (notes.length - 1);
      const audio = new Howl({
        src: [`/assets/sounds/${notes[noteIndex]}.mp3`],
        volume: 1,
      });
      audio.play();

      anime({
        targets: "#" + keyId,
        // translateY: {
        //   value: -50,
        // },
        scale: {
          value: 0.6,
        },
        direction: "alternate",
        duration: 200,
        easing: "easeInOutSine",
        complete: () => {
          const key = document.getElementById(keyId);
          key.style = "";
        },
      });
    }
  });
});
