"use strict";
// we use . to select the class and we use # to select the id
// of any element of the html file.
// we are selecting the class message and we are changing the text content of

/*console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Pawari ho ri";
console.log(document.querySelector(".message").textContent);
// Now another property of queryselector is VAlUE
// Ye hm use krte hai INPUT TYPE VALI properties pe HTML ki
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

//*********************************************************** */

// Now here we are stating the functionality of this GAME
// addEventListener takes teo arg first - event then second functionality
// using trunc to truncate the decimal number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
console.log(secretNumber);
// document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // NOTE -- query selector returns us the value os a string therefore we are coverting that string to a NUMBERaslkdas
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "💥 No Number !!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "✔ Correct Number";
    // Here we are changing the css style og background and width of the Number field
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😫 A little lesser";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You lost the GAME BRUhh!!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🥱 A little higher !!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You lost the GAME BRUhh!!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".message").textContent = "Start guessing ...";
  console.log(secretNumber);
  document.querySelector(".number").textContent = "?";

  document.querySelector(".score").value = score;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
