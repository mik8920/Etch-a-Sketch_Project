const gridContainer = document.querySelector(".gridContainer");
let gridSize = 16;
const gridButton = document.querySelector("#gridButton");
let isMouseDown = false; /*tracks if the button is pressed*/
let backgroundColor = "white";
let gridWidth = 1250;
let gridHeight = 625;

/*shows a prompt when gridButton is clicked*/
gridButton.addEventListener("click", (gridButton) => {
  const squareNumber = prompt(
    "Choose the dimension of your new grid (up to 100):"
  );

  /*converts user's input into a integer value*/
  const parseIntNumber = parseInt(squareNumber, 10);
  /*checks if user's input is between 0-100 and resets the grid*/
  if (!isNaN(parseIntNumber) && parseIntNumber > 0 && parseIntNumber <= 100) {
    gridSize = parseIntNumber;
    gridFunction();
    backgroundColor = "white";
  } else {
    alert("Please enter a valid number betweer 1 and 100");
  }
});

/*cursor style when hovering over and leaving the grid button*/
gridButton.addEventListener("mouseover", () => {
  gridButton.style.cursor = "pointer";
});

gridButton.addEventListener("mouseout", () => {
  gridButton.style.cursor = "default";
});

/*generates a random color*/
const getRandomColor = () => {
  const randomRGB = () => Math.floor(Math.random() * 256);
  return `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
};

/*sets the background color*/
function selectColor(color) {
  backgroundColor = color;
  console.log(`background color: ${color}`);
}

const gridFunction = () => {
  gridContainer.textContent = ""; /*removes the content of gridContainer*/
  /*removes all child nodes from gridContainer in order to recreate the grid*/
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  /*creates div squares*/
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridContainer.appendChild(gridSquare);

    /*sets width, height and color for grid squares*/
    gridSquare.style.width = `${gridWidth / gridSize}px`;
    gridSquare.style.height = `${gridHeight / gridSize}px`;
    gridSquare.style.backgroundColor = backgroundColor;

    /*change color if the mouse is held down*/
    gridSquare.addEventListener("mouseover", () => {
      if (isMouseDown) {
        gridSquare.style.backgroundColor = getRandomColor();
      }
    });

    /*set isMouseDown to false when the mouse is released*/
    gridSquare.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    /*set to true and change color when the mouse is held down*/
    gridSquare.addEventListener("mousedown", () => {
      isMouseDown = true;
      gridSquare.style.backgroundColor = getRandomColor();
    });
  }
};

gridFunction();
