const gridContainer = document.querySelector(".gridContainer");
let gridSize = 16;
const gridButton = document.querySelector("#gridButton");
let isMouseDown = false;
let selectedColor = "white";

gridButton.addEventListener("click", (gridButton) => {
  const squareNumber = prompt(
    "Choose the dimension of your new grid (up to 100):"
  );
  const parseIntNumber = parseInt(squareNumber, 10);
  if (!isNaN(parseIntNumber) && parseIntNumber > 0 && parseIntNumber <= 100) {
    gridSize = parseIntNumber;
    gridFunction();
    selectedColor = "white";
  } else {
    alert("Please enter a valid number betweer 1 and 100");
  }
});

gridButton.addEventListener("mouseover", () => {
  gridButton.style.cursor = "pointer";
});

gridButton.addEventListener("mouseout", () => {
  gridButton.style.cursor = "default";
});

/* const getRandomColor = () => {
  const randomRGB = () => Math.floor(Math.random() * 256);
  return `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
};
 */

function selectColor(color) {
  selectedColor = color;
  console.log(`Selected color: ${color}`);
}

const gridFunction = () => {
  gridContainer.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridContainer.appendChild(gridSquare);

    gridSquare.style.width = `${1500 / gridSize}px`;
    gridSquare.style.height = `${750 / gridSize}px`;
    gridSquare.style.backgroundColor = selectedColor;

    gridSquare.addEventListener("mouseover", () => {
      if (isMouseDown) {
        gridSquare.style.backgroundColor = selectedColor;
      }
    });

    gridSquare.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    gridSquare.addEventListener("mousedown", () => {
      isMouseDown = true;
      gridSquare.style.backgroundColor = selectedColor;
    });
  }
};

gridFunction();
