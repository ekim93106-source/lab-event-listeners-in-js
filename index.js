// Change background color
function changeBackgroundColor() {
  document.body.style.backgroundColor = "rgb(173, 216, 230)";
}

// Reset background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Display key pressed
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById("keyPressDisplay");
  if (keyPressDisplay) {
    keyPressDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

// Display user input
function displayUserInput(event) {
  const textInput = document.getElementById('textInput');
  const textInputDisplay = document.getElementById('textInputDisplay');

  if (!textInputDisplay || !textInput) return;

  // If called from an event
  if (event && event.target) {
    textInputDisplay.textContent = `You typed: ${event.target.value}`;
  } 
  // If called directly (no event)
  else {
    textInputDisplay.textContent = `You typed: ${textInput.value}`;
  }
}

// Attach event listeners
function setupEventListeners() {
  const changeColorButton = document.getElementById("changeColorButton");
  const resetColorButton = document.getElementById("resetColorButton");
  const textInput = document.getElementById("textInput");

  if (changeColorButton) {
    changeColorButton.addEventListener("click", changeBackgroundColor);
  }

  if (resetColorButton) {
    resetColorButton.addEventListener("dblclick", resetBackgroundColor);
  }

  document.addEventListener("keydown", displayKeyPress);

  if (textInput) {
    textInput.addEventListener("input", displayUserInput);
  }
}

// Export for tests (VERY IMPORTANT)
if (typeof module !== "undefined") {
  module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
  };
}