// index.js

/* Declare and initialize global variables
-------------------------------------------------- */
var pageBg = document.querySelector("html");
var sliders = document.getElementsByTagName("input");
var rgb = [0, 0, 0];

/* Event handlers for range sliders
-------------------------------------------------- */
for (var i = 0; i < sliders.length; i++) {
    // Loop through the three range inputs and for each one, add an onchange event listener
    sliders[i].onchange = function () {
        // If an input range slider is moved, grab its id attribute value
        var whichSlider = this.getAttribute("id");
        // …also, grab the numerical value that it is set to
        var sliderValue = this.value;
        // Declare a new variable to hold the new RGB value that calls a function that updates the global rgb variable, passing in what slider was moved (whichSlider), and its value (sliderValue)
        newRgb = changeRgb(whichSlider, sliderValue);
        // Call a function that builds a new CSS background-color property (as a string), passing it the updated RGB array (newRgb)
        var newCSS = writeCSS(newRgb);
        // Directly change the background-color of the page using the new CSS rgb value
        pageBg.style.backgroundColor = newCSS;
    };
}

/* Functions
-------------------------------------------------- */
// STEP 1: Write a function called changeRgb that accepts two
//parameters, channel and value
function changeRgb(channel, value) {
    // STEP 2: Build a switch based on the value of the channel
    switch (channel) {
        case "red":
            rgb[0] = value; // Update the red channel
            break;
        case "green":
            rgb[1] = value; // Update the green channel
            break;
        case "blue":
            rgb[2] = value; // Update the blue channel
            break;
    }
    // STEP 4: Return the updated rgb array back to the event handler
    return rgb;
}

// STEP 5: Write a new function called writeCSS that accepts one parameter, the updated rgb array
function writeCSS(newRgb) {
    // STEP 6: Declare a new local variable called newColor
    var newColor = "rgb(";
    var i = 0;

    // STEP 7: Create a while loop that iterates through the array passed into this function
    while (i < newRgb.length) {
        newColor += newRgb[i]; // Add each color value to the newColor string
        if (i < newRgb.length - 1) {
            newColor += ","; // Add a comma after each color value, except for the last one
        }
        i++;
    }

    // STEP 9: Slice off the last comma from the string
    newColor = newColor + ")"; // Finish the string

    // STEP 11: Return the string newColor back to the event handler
    return newColor;
}
