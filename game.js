let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;

while (true) {
    // Prompt the user to enter a guess or type '999' to exit
    userGuess = prompt("Guess a number between 1 and 10 (or type '999' to exit):");

    // Check if the user wants to exit
    if (userGuess === '999') {
        alert("You've exited the game.");
        break;
    }

    // Convert the user's input to a number
    userGuess = Number(userGuess);

    // Check if the input is a valid number
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        alert("Please enter a valid number between 1 and 10.");
        continue; // Re-start the loop if invalid input
    }

    // Increment the attempts counter
    attempts++;

    // Check if the guess is correct, too high, or too low
    if (userGuess === randomNumber) {
        alert(`Congratulations, you've guessed it in ${attempts} tries!`);
        break; // Exit the loop if the guess is correct
    } else if (userGuess < randomNumber) {
        alert("Too low! Guess again.");
    } else if (userGuess > randomNumber) {
        alert("Too high! Guess again.");
    }
}
