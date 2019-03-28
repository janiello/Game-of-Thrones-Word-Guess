// Show the directions before starting the game. 

// Press the space bar to start. First I need a list of words.
var wordList = ["WESTEROS", "STARK", "DRAGONS", "THE MOUNTAIN", "TARGARYEN", "NIGHT'S WATCH", "KHALEESI", "LANNISTER", "WHITE WALKERS", "BARATHEON"];

// Then I "grab" the element in the html to which I want the word to go.
var newWord = document.getElementById("random-word");

// Provide a function to take a random word from the list and put it into the "empty element" upon the keystroke.
function randomWord() {
    return Math.floor(Math.random() * wordList.length);
};

console.log(randomWord);

// Have the computer choose a random word for the user to guess. 

// Hide the word with "_ _ _ _ _" until the corect letters are guessed.

// Keep a count for number of guesses remaining. 

// Keep a record of which letters have been guessed.

// Every time the user guesses a letter, the computer determines if the key pressed is in the word (true) or not (false or else).

    // If the user guesses correctly, change the corresponding blank space to the correctly geussed letter.

    // If the user guesses incorrectly, reduce the number of guesses by 1.
    
    // Add the guessed letter to the "letters guessed" list.

        // Once a letter has been guessed, correctly or not, typing that letter again will do nothing.

    // If the user guesses all letters correctly, show a message that with the word and an image related to it.

    // If the user does not solve the puzzle and uses all their guesses, display a message like "Bring me their head!" and an image of Ned Stark or Joffrey.

    // Press space to start a new round.
