// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const noun1Display = document.getElementById("choosenNoun1");
const verbDisplay = document.getElementById("choosenVerb");
const adjectiveDisplay = document.getElementById("choosenAdjective");
const noun2Display = document.getElementById("choosenNoun2");
const settingDisplay = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyDisplay = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1 = ["The cat", "A dragon", "My friend", "The astronaut", "An elephant"];
const verbs = ["jumps", "eats", "flies", "dances", "sings"];
const adjectives = ["happy", "furious", "bright", "mysterious", "gigantic"];
const nouns2 = ["a ball", "a spaceship", "a cake", "a tree", "a book"];
const settings = ["in the park", "on the moon", "under the ocean", "inside a cave", "at the zoo"];

// vriables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* functions
-------------------------------------------------- */
function noun1_on_click() {
    noun1Display.textContent = nouns1[noun1Count];
    noun1Count = (noun1Count + 1) % nouns1.length; // Cycle through array
}

function verb_on_click() {
    verbDisplay.textContent = verbs[verbCount];
    verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
    adjectiveDisplay.textContent = adjectives[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
    noun2Display.textContent = nouns2[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2.length;
}

function setting_on_click() {
    settingDisplay.textContent = settings[settingCount];
    settingCount = (settingCount + 1) % settings.length;
}

// Concatenate the user story and display
function playback_on_click() {
    let story = `${noun1Display.textContent} ${verbDisplay.textContent} a ${adjectiveDisplay.textContent} ${noun2Display.textContent} ${settingDisplay.textContent}.`;
    storyDisplay.textContent = story;
}

// Grabbing random element from arrays, concatenate and display
function random_on_click() {
    let story = `${getRandomWord(nouns1)} ${getRandomWord(verbs)} a ${getRandomWord(adjectives)} ${getRandomWord(nouns2)} ${getRandomWord(settings)}.`;
    storyDisplay.textContent = story;
}

// Function to get a random word from an array
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);

playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);

// Dynamically add student ID
document.getElementById("studentId").textContent = "Student ID: 200597837";
