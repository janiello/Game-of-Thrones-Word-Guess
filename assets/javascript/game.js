// Show the directions before starting the game. 

// First I need a list of words.
var wordList = ["WESTEROS", "STARK", "DRAGONS", "BRAVOS", "TARGARYEN", "WILDLINGS", "KHALEESI", "LANNISTER", "WINTERFELL", "BARATHEON"];

// Then I "grab" the element in the html to which I want the word to go.
var newWord = document.getElementById("random-word");

// Provide a function to take a random word from the list.
function randomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
};

// Hide the word with "_ _ _ _ _" until the corect letters are guessed.
function makeBlanks() {
    for (var w = 0; w < randomWord().length; w++) {
        newWord.textContent += (" __ ")
    };
}
// Generate a new word with a key event instead of reloading the page to get a new word.
document.onkeypress = function(event) {
    makeBlanks() = event.key;
}
    // This key event now generates a new, unknown word each time a key is pressed, but adds it to the word that is already there instead of replacing it.

// Keep a count for number of guesses remaining.

// Keep a record of which letters have been guessed.

// Every time the user guesses a letter, the computer determines if the key pressed is in the word (true) or not (false or else).

    // If the user guesses correctly, change the corresponding blank space to the correctly geussed letter.

    // If the user guesses incorrectly, reduce the number of guesses by 1 using a for loop and counter variables.
    
    // Add the guessed letter to the "letters guessed" list. This might take a push function.

        // Once a letter has been guessed, correctly or not, typing that letter again should stop an iteration or function.

    // If the user guesses all letters correctly, show a message that with the word and an image related to it.

    // If the user does not solve the puzzle and uses all their guesses, display a message like "Bring me their head!" and an image of Ned Stark or Joffrey.

    // Press space to start a new round.
