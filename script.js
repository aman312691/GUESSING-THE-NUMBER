const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    attempts++;

    let message = document.getElementById('message');

    if (guess === secretNumber) {
        message.textContent = `Congratulations! You guessed the correct number (${secretNumber}) in ${attempts} attempts.`;
    } else if (Math.abs(guess - secretNumber) <= 5) {
        message.textContent = "You're very close! Try again.";
    } else if (Math.abs(guess - secretNumber) <= 20) {
        message.textContent = "You're getting closer. Try again.";
    } else {
        message.textContent = "You're far from the correct number. Try again.";
    }
}
