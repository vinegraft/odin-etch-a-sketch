let container = document.querySelector(".container");

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;

  // Make canvas a square constrained by smallest window dimension
  if (windowHeight >= windowWidth) {
    container.style.width = `${windowWidth * 0.9}px`;
    container.style.height = `${windowWidth * 0.9}px`;
  } else {
    container.style.width = `${windowHeight * 0.9}px`;
    container.style.height = `${windowHeight * 0.9}px`;
  }
}
