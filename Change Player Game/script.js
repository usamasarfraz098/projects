'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
score0El.innerHTML = 0;
score1El.innerHTML = 0;
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).innerHTML = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
console.log(player0El);
// console.log(score0El);
// dice.classList.add('hidden');
// console.log(dice);
let score, currentScore, activePlayer, play;
const inicialize = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  play = true;

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');

  score0El.innerHTML = 0;
  score1El.innerHTML = 0;
  current0El.innerHTML = 0;
  current1El.innerHTML = 0;
};
inicialize();

// console.log(randomDice);
btnRoll.addEventListener('click', function () {
  //   console.log('e');
  if (play) {
    let randomDice = Math.trunc(Math.random() * 6 + 1);
    dice.src = `img/dice-${randomDice}.png `;
    if (randomDice !== 1) {
      currentScore = currentScore + randomDice;
      document.querySelector(`#current--${activePlayer}`).innerHTML =
        currentScore;

      // current0El.innerHTML = currentScore;
    } else {
      switchPlayer();
    }
  }
  //   dice.classList.toggle('.hidden');
});
btnHold.addEventListener('click', function () {
  if (play) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).innerHTML =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      play = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', inicialize);
