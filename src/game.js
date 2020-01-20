let rounds = 0;
let guesses = 1;

let status = {
  score: 0,
  guessesLeft: guesses,
  roundsLeft: rounds
};

function renderGame() {
  CalculateScore();
  CalculateGuessesLeft();
  CalculateRounds();
}

function CalculateScore() {
  document.querySelector("#score").innerHTML = status.score;
}

function CalculateGuessesLeft() {
  document.querySelector("#guesses span").innerHTML = status.guessesLeft;
}
function CalculateRounds() {
  document.querySelector("#rounds span").innerHTML = status.roundsLeft;
}

function nextRound() {
  if (status.guessesLeft === 0 && status.roundsLeft > 0) {
    document.querySelector(".next").style.display = "block";
  }
}

let userInput = document.querySelector("#input-field").value.toLowerCase();

function checkCountry(userInput) {
  if (userInput === chosenCountry.answers) {
    score += 100;
    renderGame();
    displayCountry();
  } else if (rounds === 10) {
    renderGame();
    displayCountry();
  } else {
    guesses += 1;
    if (guesses === 3) {
      rounds += 1;
      renderGame();
      displayCountry();
    }
  }
  document.getElementById("input-field").value = "";
}

document.getElementById("input-field").onkeypress = function(key) {
  if (key.keyCode === 13) {
    checkCountry(userInput);
  }
};
