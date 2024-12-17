// Create the container div
const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

// Style the container with Flexbox for grid layout
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "960px"; // Fixed total space for the grid
container.style.height = "960px"; // Fixed total height for the grid
container.style.border = "1px solid black";
container.style.boxSizing = "border-box";
container.style.marginTop = "20px";

// Function to create a grid
function createGrid(squaresPerSide) {
  // Clear existing grid
  container.innerHTML = "";

  // Calculate the size of each square
  const squareSize = 960 / squaresPerSide;

  // Generate the grid squares
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement("div");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.boxSizing = "border-box";
    square.style.border = "1px solid lightgray"; // Optional border for visibility
    square.style.backgroundColor = "lightblue"; // Optional color
    container.appendChild(square);
  }
}

// Create the initial grid (16x16)
createGrid(16);

// Create a button element
const resetButton = document.createElement("button");
resetButton.textContent = "New Grid";
resetButton.style.padding = "10px";
resetButton.style.margin = "10px";
resetButton.style.fontSize = "16px";

// Add event listener to the button
resetButton.addEventListener("click", () => {
  let userInput = prompt("Enter the number of squares per side (max 100):", 16);

  // Validate user input
  if (userInput !== null) {
    const squaresPerSide = parseInt(userInput);
    if (!isNaN(squaresPerSide) && squaresPerSide > 0 && squaresPerSide <= 100) {
      createGrid(squaresPerSide);
    } else {
      alert("Please enter a valid number between 1 and 100.");
    }
  }
});

// Add the button to the top of the page
document.body.insertBefore(resetButton, container);
