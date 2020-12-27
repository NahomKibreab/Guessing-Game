let maximumNumber = parseInt(prompt('Enter the maximum number!'));
while (!maximumNumber) {
  maximumNumber = parseInt(prompt('Enter a valid Number'));
}

let randomNumber = Math.floor(Math.random() * maximumNumber) + 1;
let guessNumber = parseInt(prompt('Guess the number'));
let attempts = 1;

while (parseInt(guessNumber) !== randomNumber) {
  attempts++;
  if (guessNumber > randomNumber) {
    guessNumber = prompt('Too high! Enter a new guess:');
  } else {
    guessNumber = prompt('Too low! Enter a new guess');
  }
  if (guessNumber === 'q') break;
}

if (guessNumber === 'q') {
  console.log(`You quit the game. The random number was ${randomNumber}`);
} else {
  console.log(
    `Congrats! You won on ${attempts} attempts. The random number was ${randomNumber}`
  );
}
