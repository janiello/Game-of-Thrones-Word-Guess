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

// I need a random word as a variable, but to choose a word on page load or make it a function would not allow the app to generate a new word each time a game ends (or allow for user input to be checked against the word), so I need to assign an empty string to a placeholder variable that will eventually contain a random word from the list
var randomWord = "";

// In order to access each letter in the random word individually, they each need a specific index value
var lettersInWord = [];
    // If using a for loop on a randomly generated word itself, guesses would be checked for every letter in the word at once (ex. - up to 10 times simultaneously), rather than as singular events, which is what I need to happen

// I need an empty array that will ultimately hold what the user will see as the "hidden word" on the page (blanks to start and letters as they are guessed correctly)
var blanksAndSuccesses = [];

// I need a variable that holds the number of blanks for each randomWord generated. Since it will be different for each word, it will start by equaling 0 and change based on the word and as letters are guessed correctly.
var numBlanks = 0;

// I also need another place holder variable for the key press event so as to allow for the user's guess to be checked against the letters in the random word
var letterGuessed = "";

// Hide the word with "_ _ _ _ _" until the corect letters are guessed.
/*var blanks = " _ "
var hiddenWord = randomWord.replace(/[a-z]/g, blanks);*/


// Create a function that can be called to display a new word as blanks to the right html element
function newWord() {
    // Set our randomWord string to a random word from our wordList array and log it to the console for developer reference
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(randomWord);
    // Break the word into individual letters that will be assigned an individual value and set the number of blanks to the number of letters in the word
    lettersInWord = randomWord.split("");
    numBlanks = lettersInWord.length;
    // Reset the blanks and successful guesses array anytime this function is called
    blanksAndSuccesses = [];
    // Loop through the numBlanks variable and push them as strings set to blanks to the blanksAndSuccesses array
    for (var b = 0; b < numBlanks; b++) {
        blanksAndSuccesses.push("_");
    };
    // Separate each blank with a space so it doesn't appear as one long blank line and set the textContent in the right element to show the "hidden word"
    word.textContent = blanksAndSuccesses.join(" ");
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
    lettersText.textContent = "Incorrect Letters Guessed: " + wrongGuesses.join(" ")
};

// Call the above functions so everything is displayed when the page is loaded
newWord();
updateWins();
updateLosses();
updateGuesses();
wrongLetters();

// Create a keypress event for the "start game" and letter guessing functionlity
document.onkeyup = function(event) {
    // I need a variable that takes in whatever letter the user guesses
    var userGuess = event.key.toUpperCase();

    // A boolean defaulted to false will be used to check whether or not the user's guess is a letter in the random word
    var letter = false;

    // Then we need to loop through the word to check if the user's guess is in the word
    for (var b = 0; b < numBlanks; b++) {
        if (randomWord[b] === userGuess) {
            letter = true;
        }
    }

    // If the user guesses correctly, change the corresponding blank space to the correctly geussed letter
    if (letter) {
        for (var i = 0; i < numBlanks; i++) {
            if (randomWord[i] === userGuess) {
                blanksAndSuccesses[i] = userGuess;
            }
        }
        // Log out the userGuess for reference
        console.log(userGuess)
    } else {
        // If the user guesses incorrectly, push the guessed letter to the wrongGuesses array and render them to the page (second part to an if/else statement, should begin with "} else {")
        wrongGuesses.push(userGuess);
        wrongLetters();
        // Decrement the amount of guesses remaining and render them to the page
        guesses--;
        updateGuesses();
    }
    
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