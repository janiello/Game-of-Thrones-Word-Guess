// Show the directions before starting the game. Press the space bar to start. Once the user presses the space bar, the directions disappear and blank spaces for each letter in a random word will appear.
var gameStart = "space";
document.onkeyup = function(event) {
    gameStart = event.key;
}

// Have the computer choose a random word for the user to guess, but hide the word with "_ _ _ _ _" until the corect letters are guessed.
var computerChoices = ["LANNISTER", "DRAGONS", "WESTEROS", "STARK", "WHITE WALKERS", "THE MOUNTAIN", "BARATHEON", "KHALEESI", "NIGHT'S WATCH", "TARGARYEN"];

// Tell the user to type in the guesses for each letter they think will be in the word.
document.onkeyup = function(event) {
    var userGuess = event.key;
}

// Keep a count for number of guesses remaining, and a record of which letters have been guessed.

// Every time the user guesses a letter, the computer determines if the key pressed is in the word (true) or not (false or else).

    // If the user guesses correctly, change the corresponding blank space to the correctly geussed letter.

    // If the user guesses incorrectly, reduce the number of guesses by 1 and add that letter to the "letters guessed" list.

        // Once a letter has been guessed, correctly or not, typing that letter again will do nothing.

    // If the user guesses all letters correctly, show a message that with the word and an image related to it.

    // If the user does not solve the puzzle and uses all their guess, display a message like "Bring me their head!" and an image of Ned Stark. Then give the user an option to try again or quit.
