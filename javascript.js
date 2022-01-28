const grid = document.getElementById("grid");
const gridSizeSlider = document.getElementById("gridSizeSlider");
const currentGridSize = document.getElementById("currentGridSize");

gridSizeSlider.oninput = function() {
    currentGridSize.innerHTML = `${this.value} x ${this.value}`;
    createGrid(this.value);
}

let gridWidth = 720;
grid.style.width = `${gridWidth}px`;

createGrid(50); // Default grid on launch

function createGrid(gridSize) {
    clearGrid();
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.width = `${gridWidth / gridSize}px` // Sets the square width and height based on gridWidth
        square.style.height = `${gridWidth / gridSize}px`
        grid.appendChild(square);
        square.addEventListener("mouseover", changeColorOnHover);
    }
}

function clearGrid() {
    grid.innerHTML = ''
}

function getRandomColor() {
    var options = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += options[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColorOnHover() {
    this.style.background = getRandomColor();
}