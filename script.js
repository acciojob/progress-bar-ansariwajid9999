const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const circles = document.querySelectorAll(".circle"); // Get all the circles
let currentActive = 0; // Index of the currently active circle (starts at 0 for the first circle)

// Function to update the button states and the active class on circles
function update() {
    // Add active class to the current circle and remove it from others
    circles.forEach((circle, index) => {
        if (index <= currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    // Disable the "Previous" button if we're at the first circle
    if (currentActive === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    // Disable the "Next" button if we're at the last circle
    if (currentActive === circles.length - 1) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

// "Next" button functionality
nextBtn.onclick = () => {
    if (currentActive < circles.length - 1) {
        currentActive++; // Move to the next circle
    }
    update(); // Update the UI and buttons
};

// "Previous" button functionality
prevBtn.onclick = () => {
    if (currentActive > 0) {
        currentActive--; // Move to the previous circle
    }
    update(); // Update the UI and buttons
};

// Initialize the state
update();
