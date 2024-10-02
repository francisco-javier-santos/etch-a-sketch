// Create grid
function createGrid(x) {
    if (x > 100) {
        x = 100;
    }
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        }
    }
    $(".grid").width(960 / x);
    $(".grid").height(960 / x);
}

// Clear grid
function clearGrid() {
    $(".grid").remove();
}

// Read from prompt number of boxes in a new grid. Calls the create grid once number assigned.
function refreshGrid() {
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
    addHoverEffect();
}

// Function to generate random RGB color
function randomRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// Add hover effect to grid elements
function addHoverEffect() {
    document.querySelectorAll(".grid").forEach(function (gridElement) {
        gridElement.addEventListener("mouseover", function () {
            let currentOpacity = parseFloat(this.style.opacity) || 0;
            if (currentOpacity < 1) {
                // If square hasn't reached full opacity, darken it by 10%
                this.style.opacity = currentOpacity + 0.1;
            }
            if (!this.style.backgroundColor || currentOpacity === 0) {
                // Only change color if it's not set yet (first interaction)
                this.style.backgroundColor = randomRGB();
            }
        });
    });
}

// When loading, create 16x16 grid, with hover effect
document.addEventListener("DOMContentLoaded", function () {
    createGrid(16);
    addHoverEffect();

    // Button to create a new grid
    document.querySelector(".newGrid").addEventListener("click", function () {
        refreshGrid();
    });
});
