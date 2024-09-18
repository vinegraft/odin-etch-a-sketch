const container = document.querySelector(".container");
const button = document.querySelector(".button-new-grid");
let gridSize = 16;

resizeCanvas();
createGrid(gridSize);
addGridDraw();

window.addEventListener("resize", resizeCanvas);
button.addEventListener("click", createNewGrid);

// Make canvas a square constrained by smallest window dimension
function resizeCanvas() {
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;

  if (windowHeight >= windowWidth) {
    container.setAttribute(
      "style",
      `width: ${windowWidth * 0.9}px; height: ${windowWidth * 0.9}px;`
    );
  } else {
    container.setAttribute(
      "style",
      `width: ${windowHeight * 0.9}px; height: ${windowHeight * 0.9}px;`
    );
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

function createNewGrid() {
  function getGridSize() {
    let size = prompt(
      "Select new resolution by entering a number between 1 and 100."
    );
    size = Number(size);
    return size;
  }

  gridSize = getGridSize();
  while (!(1 <= gridSize <= 100) || isNaN(gridSize)) {
    alert("Invalid input!");
    gridSize = getGridSize();
  }

  let rowList = document.querySelectorAll(".grid-row");
  rowList.forEach((row) => {
    row.parentNode.removeChild(row);
  });
  createGrid(gridSize);
  addGridDraw();
}

function addGridDraw() {
  let allPixels = document.querySelectorAll(".grid-pixel");

  allPixels.forEach((pixel) => {
    let opacity = 0;
    pixel.addEventListener("mouseover", () => {
      opacity += 0.1;
      pixel.setAttribute(
        "style",
        `background-color: var(--foreground-color); opacity: ${opacity}`
      );
    });
  });
}
