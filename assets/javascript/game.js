// First I need a list of words
var wordList = ["WETSEROS", "STARK", "DRAGONS", "BRAVOS", "TARGARYEN", "WILDLINGS", "KHALEESI", "LANNISTER", "WINTERFELL", "BARATHEON"];

// Assign the HTML elements where I want certain things to appear (or disappear) to different variables
var word = document.getElementById("word");
var winsText = document.getElementById("wins");
var guessesText = document.getElementById("guesses");
var lettersText = document.getElementById("letters");

// Assign the variables to the number of wins the user has and guesses left
var wins = 0;
var guesses = 10;

// Generate a random word from the array of available words on page load
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

// Display that random word in the correct HTML element, along with wins, number of guesses, and letters guessed info, and log the actual word in the console
word.textContent = randomWord;
winsText.textContent = "Wins: " + wins;
guessesText.textContent = "Number of Guesses Left: " + guesses;
lettersText.textContent = "Letters Already Guessed: ";
console.log(randomWord);

// Hide the word with "_ _ _ _ _" until the corect letters are guessed.
/*var blanks = " _ "
var hiddenWord = randomWord.replace(/[a-z]/g, blanks);*/


// Create an empty array which will ultimately contain incorrectly guessed letters
var lettersGuessed = [];

// Create a keypress event for the "start game" and letter guessing functionlity
document.onkeyup = function(event) {
    // I need a variable that takes in whatever letter the user guesses
    var userGuess = event.key.toUpperCase();
    console.log(userGuess)
    // Loop through the random word to check against the userGuess
    for (var i = 0; i < randomWord.length; i++) {
        // If the user guesses correctly, change the corresponding blank space to the correctly geussed letter
        if (userGuess === randomWord[i]) {
            console.log("correct");
        } else {
        // If the user guesses incorrectly, push the guessed letter to the lettersGuessed array
            console.log("try again");
        // And reduce the number of guesses by 1 using a for loop and counter variables
        }
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