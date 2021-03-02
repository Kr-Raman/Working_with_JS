"use strict";

//Selecting Elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
//we can select element using the ID also by the getElementID method too.
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Starting conditions for the game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
const switchPlayer = function () {
  //Switch the Player
  // Here we are making the score of the player who did not holded and due to dice ==1 he will loose his all the points
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  //toggle first sees whether the following class is possessed by the Element or not if yes then it will remove it and if NOT then it will apply that class to that element.
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//Rolling Dice Functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2.Display Dice image
    console.log("hello world");
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    //3. check for rolled 1: if true then switch to next player
    if (dice !== 1) {
      //add the dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
      //current0El.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // add the current score the global score array
    scores[activePlayer] += currentScore;
    // Score--0/1 is being chossen dynamically
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //score if >= 100 then he wins
    if (scores[activePlayer] >= 20) {
      //Finish the game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("active-player");
    } else {
      //switch the player
      switchPlayer();
    }
  }
});
