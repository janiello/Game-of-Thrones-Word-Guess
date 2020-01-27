// First I need a list of words.
var wordList = ["westeros", "stark", "dragons", "bravos", "targaryen", "wildlings", "khaleesi", "lannister", "winterfell", "baratheon"];

// Generate a random word from the array of available words on the keypress event. If this is called in the global scope, it will only work once on page load and the event will simply reveal the already generated word.
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

// Hide the word with "_ _ _ _ _" until the corect letters are guessed.
var blanks = " _ "
var hiddenWord = randomWord.replace(/[a-z]/g, blanks);

// Assign the HTML elements where I want certain things to appear (or disappear) to different variables.
var word = document.getElementById("word");
var winsText = document.getElementById("wins");
var guessesText = document.getElementById("guesses");
var lettersText = document.getElementById("letters");
var directions = document.getElementById("main-menu");

// Assign the variables to the number of wins the user has and guesses left
var wins = 0;
var guesses = 10;

// Create an empty array which will ultimately contain incorrectly guessed letters
var lettersGuessed = [];

// Create a keypress event for the "start game" functionlity
document.onkeyup = function(event) {
    // Make the event work only when a specific key is pressed
    if (event.code == "Space") {
        word.textContent = hiddenWord;
        // Hide the main menu, display wins, number of guesses, and letters guessed info, and log the actual word in the console
        directions.textContent = "";
        winsText.textContent = "Wins: " + wins;
        guessesText.textContent = "Number of Guesses Left: " + guesses;
        lettersText.textContent = "Letters Already Guessed: " + lettersGuessed;
        console.log(randomWord);
    } else if (event.code != "Space") {
        // I need a variable that takes in whatever letter the user guesses
        var userGuess = event.key;
        // console.log(userGuess);
        // If the user guesses correctly, change the corresponding blank space to the correctly geussed letter
        for (var i = 0; i < randomWord.length; i++) {
            if (userGuess === randomWord[i]) {
                
            } else {
                console.log("Try again");
            };
        }
        // This currently logs to the console for each letter (up to 10 times per guess)
        // If the user guesses incorrectly, push the guessed letter to the lettersGuessed array

        // And reduce the number of guesses by 1 using a for loop and counter variables
    };
};

// Alternate code for keypress event
    /*
    document.addEventListener("keyup", newGame);

    function newGame() {
        var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        word.textContent = randomWord;
    };
    */

// Keep a count for number of guesses remaining.

// Keep a record of which letters have been guessed.

// Once a letter has been guessed, correctly or not, typing that letter again should stop an iteration or function.

// If the user guesses all letters correctly, show a message that with the word and an image related to it.

// If the user does not solve the puzzle and uses all their guesses, display a message like "Bring me their head!" and an image of Ned Stark or Joffrey.

// Press space to start a new round.