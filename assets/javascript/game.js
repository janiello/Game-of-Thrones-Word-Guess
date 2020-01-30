// First I need a list of words
var wordList = ["WESTEROS", "STARK", "DRAGONS", "BRAVOS", "TARGARYEN", "WILDLINGS", "KHALEESI", "LANNISTER", "WINTERFELL", "BARATHEON"];

// Assign the HTML elements where I want certain things to appear to different variables
var word = document.getElementById("word");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesText = document.getElementById("guesses");
var lettersText = document.getElementById("letters");

// Assign the variables to the number of wins the user has and guesses left
var wins = 0;
var losses = 0;
var guesses = 10;

// Create an empty array which will ultimately contain incorrectly guessed letters
var wrongGuesses = [];

// Generate a random word from the array of available words on page load
/*function randomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)]
};*/
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
word.textContent = randomWord;

// Hide the word with "_ _ _ _ _" until the corect letters are guessed.
/*var blanks = " _ "
var hiddenWord = randomWord.replace(/[a-z]/g, blanks);*/


// Create a function that can be called to display a new word to the right html element
function newWord() {
    word.textContent = wordList[Math.floor(Math.random() * wordList.length)];
};

// Create a function to update wins if the user guesses the word correctly
function updateWins() {
    winsText.textContent = "Wins: " + wins
};

// Create a function that updates the number of losses if enough letters are guessed incorrectly
function updateLosses() {
    lossesText.textContent = "Losses: " + losses
};

// Create a function that updates the number of guesses whenever the user guesses incorrectly
function updateGuesses() {
    guessesText.textContent = "Number of Guesses Left: " + guesses
};

// Function that updates which letters have been incorrectly guessed
function wrongLetters() {
    lettersText.textContent = "Letters Already Guessed: " + wrongGuesses
};

// Call the above functions so everything is displayed when the page is loaded
updateWins();
updateLosses();
updateGuesses();
wrongLetters();

// Create a keypress event for the "start game" and letter guessing functionlity
document.onkeyup = function(event) {
    // I need a variable that takes in whatever letter the user guesses
    var userGuess = event.key.toUpperCase();
    // If the user guesses correctly, change the corresponding blank space to the correctly geussed letter
    
    // If the user guesses incorrectly, push the guessed letter to the lettersGuessed array and render them to the page (second part to an if/else statement, should begin with "} else {")
    wrongGuesses.push(userGuess);
    wrongLetters();
    // Decrement the amount of guesses remaining and render them to the page
    guesses--;
    updateGuesses();
    
    // If enough letters are guessed incorrectly...
    if (guesses === 0) {
        // Increment losses by 1
        losses++;
        // Amount of remaining guesses reset
        guesses = 10;
        // Incorrectly guessed letters array empties
        wrongGuesses = [];
        // Functions are called to render info to the page and start a new game
        updateLosses();
        updateGuesses();
        wrongLetters();
        newWord();
    };
};

// Alternate code for keypress event
/*document.addEventListener("keyup", newGame);

function newGame() {
    var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    word.textContent = randomWord;
};*/