const container = document.querySelector(".container");
let gridSize = 16;

resizeCanvas();
createGrid(gridSize);

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

function createGrid(size) {
  for (i = 0; i < gridSize; i++) {
    let newRow = document.createElement("div");
    newRow.className = "grid-row";
    container.appendChild(newRow);

    for (j = 0; j < gridSize; j++) {
      let newPixel = document.createElement("div");
      newPixel.className = "grid-pixel";
      newRow.appendChild(newPixel);
    }
  }
}
