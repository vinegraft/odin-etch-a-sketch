const container = document.querySelector(".container");
let gridSize = 16;

resizeCanvas();
createGrid(gridSize);
addGridDraw();

window.addEventListener("resize", resizeCanvas);

// Make canvas a square constrained by smallest window dimension
function resizeCanvas() {
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;

  if (windowHeight >= windowWidth) {
    container.setAttribute("style", `width: ${windowWidth * 0.9}px; height: ${windowWidth * 0.9}px;`)
  } else {
    container.setAttribute("style", `width: ${windowHeight * 0.9}px; height: ${windowHeight * 0.9}px;`)
  }
}

function createGrid(gridSize) {
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

function addGridDraw() {
  let allPixels = document.querySelectorAll(".grid-pixel");

  allPixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.setAttribute("style", "background-color: var(--foreground-color);");
    });
  });
}
