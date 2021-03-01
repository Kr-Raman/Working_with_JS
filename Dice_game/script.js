"use strict";

//Selecting Elements

const score0El = document.querySelector("#score--0");
//we can select element using the ID also by the getElementID method too.
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

//Starting conditions for the game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
