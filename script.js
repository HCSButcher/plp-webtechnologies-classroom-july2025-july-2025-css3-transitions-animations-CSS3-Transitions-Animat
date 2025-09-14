// GLOBAL variable for the box
const box = document.getElementById("magicBox");

// Function with a parameter & return value
function changeBoxColor(color) {
  box.style.backgroundColor = color;
  return `Box color changed to ${color}`; // return value for debugging
}

// Function to trigger animation
function animateBox() {
  box.classList.add("animate");

  // Remove animation class after it finishes so it can be triggered again
  setTimeout(() => {
    box.classList.remove("animate");
  }, 800); // matches animation duration
}

// Example of local vs global scope
function temporaryChange() {
  let localColor = "purple"; // Local scope variable
  changeBoxColor(localColor); // Use parameter
}
