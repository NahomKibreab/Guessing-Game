let maximumNumber = parseInt(prompt('Enter the maximum number!'));
let randomNumber = Math.floor(Math.random() * maximumNumber) + 1;
let guessNumber = parseInt(prompt('Guess the number'));
let attempts = 1;

while (!guessNumber) {
  guessNumber = parseInt(prompt('Invalid Number'));
}

while (parseInt(guessNumber) !== randomNumber) {
  attempts++;
  guessNumber = prompt('Guess the number');
  if (guessNumber === 'q') break;
}

if (guessNumber === 'q') {
  console.log(`You quit the game. The random number was ${randomNumber}`);
} else {
  console.log(
    `Congrats! You won on ${attempts} attempts. The random number was ${randomNumber}`
  );
}
