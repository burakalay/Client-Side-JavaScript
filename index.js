// Arrays for random selection
const nouns1 = ["The cat", "A dragon", "My friend", "The astronaut", "An elephant"];
const verbs = ["jumps", "eats", "flies", "dances", "sings"];
const adjectives = ["happy", "furious", "bright", "mysterious", "gigantic"];
const nouns2 = ["a ball", "a spaceship", "a cake", "a tree", "a book"];
const settings = ["in the park", "on the moon", "under the ocean", "inside a cave", "at the zoo"];

// Function to get a random word from an array
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Event listeners for buttons
document.getElementById("noun1").addEventListener("click", function() {
    document.getElementById("choosenNoun1").textContent = getRandomWord(nouns1);
});

document.getElementById("verb").addEventListener("click", function() {
    document.getElementById("choosenVerb").textContent = getRandomWord(verbs);
});

document.getElementById("adjective").addEventListener("click", function() {
    document.getElementById("choosenAdjective").textContent = getRandomWord(adjectives);
});

document.getElementById("noun2").addEventListener("click", function() {
    document.getElementById("choosenNoun2").textContent = getRandomWord(nouns2);
});

document.getElementById("setting").addEventListener("click", function() {
    document.getElementById("choosenSetting").textContent = getRandomWord(settings);
});

// Show story button
document.getElementById("playback").addEventListener("click", function() {
    let story = `${document.getElementById("choosenNoun1").textContent} ${document.getElementById("choosenVerb").textContent} a ${document.getElementById("choosenAdjective").textContent} ${document.getElementById("choosenNoun2").textContent} ${document.getElementById("choosenSetting").textContent}.`;
    document.getElementById("story").textContent = story;
});

// Random story button
document.getElementById("random").addEventListener("click", function() {
    let story = `${getRandomWord(nouns1)} ${getRandomWord(verbs)} a ${getRandomWord(adjectives)} ${getRandomWord(nouns2)} ${getRandomWord(settings)}.`;
    document.getElementById("story").textContent = story;
});

// Function to add student ID
document.getElementById("studentId").textContent = "Student ID: 200597837";
