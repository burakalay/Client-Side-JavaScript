// Constants for selecting elements
const studentIdElement = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const imageElement = document.getElementById("images");

// Image array
const imageArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

// Function to determine background color based on number
function getColor(value) {
    if (value < 0 || value > 100) return "red";
    if (value <= 20) return "green";
    if (value <= 40) return "blue";
    if (value <= 60) return "orange";
    if (value <= 80) return "purple";
    return "yellow";
}

// Function to change background color from user input and display student ID
function changeCustomColor() {
    const inputValue = parseInt(customNumberInput.value);

    if (!isNaN(inputValue)) {
        document.body.style.backgroundColor = getColor(inputValue);
        studentIdElement.textContent = "StudtnID: 200597837";
    } else {
        alert("enter a number");
    }
}

// Function to change background color using a random number
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.body.style.backgroundColor = getColor(randomNumber);
}

// Function to generate options for select list
function addList() {
    if (imageSelect.options.length > 1) return; // Prevent duplicate options

    imageArray.forEach(image => {
        let option = document.createElement("option");
        option.value = image;
        option.textContent = image;
        imageSelect.appendChild(option);
    });
}

// Function to change image based on selection
function changeImage() {
    const selectedImage = imageSelect.value;
    if (selectedImage) {
        imageElement.src = `img/${selectedImage}`;
        imageElement.alt = selectedImage;
    }
}

// Event Listeners
customColorButton.addEventListener("click", changeCustomColor);
randomColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("click", addList); // Generate list on click
imageSelect.addEventListener("change", changeImage);
