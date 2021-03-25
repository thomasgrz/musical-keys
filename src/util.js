function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 * @param {*} arrayOfKeyStrings array of letters on keyboard row
 * @param {*} keyboardRow a reference to a DOM node
 */
function createRowOfKeys(arrayOfKeyStrings, keyboardRow) {
  arrayOfKeyStrings.forEach((keyString) => {
    // Create a div to contain string
    const keyContainer = document.createElement("div");

    // Add the string as the innerText of the div
    keyContainer.innerText = keyString;

    // Give it a unique id to be ref'd when adding onkeydown functionality
    keyContainer.id = `string-key-${keyString}`;

    // Append that topRowContainer div's children-elements
    keyboardRow.appendChild(keyContainer);
  });
}

/**
 * @param {*} idString a unique id for the resulting div
 * @param {*} keyboardRef a reference to a DOM node
 */
function createKeyboardRow(idString, keyboardRef) {
  // Create a div to act as  the row
  const keyboardRowRef = document.createElement("div");

  keyboardRowRef.id = idString;
  keyboardRef.appendChild(keyboardRowRef);
  return keyboardRowRef;
}

module.exports = {
  getRandomInt,
  createKeyboardRow,
  createRowOfKeys,
};
