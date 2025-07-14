'use strict';

// console.log(document.querySelector('.message').textContent);
// // document.querySelector('.message').textContent =
// //   '🎉congragulations, correct number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 5;

// document.querySelector('.guess').value = 29;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // no input at all
  if (!guess) {
    document.querySelector('.message').textContent =
      '🚫 No number entered, please enter a number!';
    // wins the game
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // guess too high
  } else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 too high' : '📉 too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❌ game over';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
