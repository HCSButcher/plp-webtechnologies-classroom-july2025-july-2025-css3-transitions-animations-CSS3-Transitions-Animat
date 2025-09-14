const box = document.getElementById("magicBox");

function changeBoxColor(color) {
  box.style.backgroundColor = color;
  return `Box color changed to ${color}`;
}

function animateBox() {
  box.classList.add("animate");

  setTimeout(() => {
    box.classList.remove("animate");
  }, 800);
}

function temporaryChange() {
  let localColor = "purple";
  changeBoxColor(localColor);
}
