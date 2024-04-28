'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Answer!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';
// document.querySelector('.guess').value = '23';
// console.log(document.querySelector('.guess').value);

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let rndInt = randomIntFromInterval(1, 20);
console.log(rndInt);

let score = 20;
let highscore = 0;

const storeScoreValue = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  storeScoreValue('20');
  score = 20;
  rndInt = randomIntFromInterval(1, 20);
  //document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🎃 No Value');
    //document.querySelector('.message').textContent = '🎃 No Value';
  }

  if (guess > 20) {
    displayMessage('😈 Number Not in Range');
    //document.querySelector('.message').textContent = '😈 Number Not in Range';
  }

  if (guess < 0) {
    displayMessage('😈 Number Not in Range');
    //document.querySelector('.message').textContent = '😈 Number Not in Range';
  }

  if (score < 1) {
    displayMessage('You Loose');
    //document.querySelector('.message').textContent = 'You Loose';
  }

  if (guess > rndInt) {
    displayMessage('👆High');
    // document.querySelector('.message').textContent = '👆High';
    score--;
    storeScoreValue(score);
    //document.querySelector('.score').textContent = score;
  }

  if (guess < rndInt) {
    displayMessage('👇Low');
    //document.querySelector('.message').textContent = '👇Low';
    score--;
    storeScoreValue(score);
    //document.querySelector('.score').textContent = score;
  }

  if (guess == rndInt) {
    displayMessage('Correct Number');
    // document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = rndInt;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});
