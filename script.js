const gridContainer = document.querySelector(".gridContainer");
let gridSize = 16;
const gridButton = document.querySelector("#gridButton");

gridButton.addEventListener("click", (gridButton) => {
  const squareNumber = prompt("Choose the dimension of your new grid:");
  if (squareNumber && !isNaN(squareNumber)) {
    gridSize = parseInt(squareNumber, 10);
    gridFunction();
  }
});

/*το grid χαλαει οταν αλλαζει το squareNumber, επισης πρεπει να γινεται ρισετ στον πινακα καθε φορα που παταει ο χρηστης το κουμπι*/

gridButton.addEventListener("mouseover", () => {
  gridButton.style.cursor = "pointer";
});

gridButton.addEventListener("mouseout", () => {
  gridButton.style.cursor = "default";
});

const gridFunction = () => {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridContainer.appendChild(gridSquare);

    gridSquare.style.width = `${500 / gridSize}px`;
    gridSquare.style.height = `${500 / gridSize}px`;

    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.backgroundColor = "blue";
    });
  }
};
