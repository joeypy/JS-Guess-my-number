"use strict";

let guess = document.querySelector(".guess");
let highScore = document.querySelector(".highscore");
let score = document.querySelector(".score");
let number = document.querySelector(".number");

let secretNumber = Math.round(Math.random() * 20) + 1;

let state = 20;
let high_score = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  //   When there is not input
  if (!guess) {
    displayMessage("⛔ No Number!");

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 That's the Number! 🥳");
    score.textContent = state;
    number.textContent = secretNumber;
    document.body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    if (state > high_score) {
      highScore.textContent = state;
      high_score = state;
    }

    // When the number is not the secret Number
  } else if (guess !== secretNumber) {
    if (state > 1) {
      displayMessage(guess < secretNumber ? "📉 To Low!" : "📈 To High!");
      state--;
      score.textContent = state;
    } else {
      // When the player lose the game
      displayMessage("💥 You lost the game haha! 😜");
      state = 0;
      score.textContent = state;
    }
  }
});

// Again button is pressed
document.querySelector(".again").addEventListener("click", function () {
  displayMessage("Start guessing...");
  score.textContent = 20;
  guess.value = 1;
  state = 20;
  number.textContent = "?";
  secretNumber = Math.round(Math.random() * 20) + 1;
  document.body.style.backgroundColor = "#222";
  number.style.width = "15rem";
});
