let rounds = 0;
let guesses = 3;

let status = {
  score: 0,
  guessesLeft: guesses,
  roundsCount: rounds
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
  document.querySelector("#rounds span").innerHTML = status.roundsCount;
}

function nextRoundButton() {
  if (status.guessesLeft === 0 && status.roundsCount < 10) {
    document.querySelector(".next").style.display = "block";
  }
}

function finalResult() {}

let userInput = document.querySelector("#input-field").value.toLowerCase();

function checkCountry(userInput) {
  if (userInput === chosenCountry.answers[""]) {
    score += 100;
    displayCountry();
    console.log(score);
  } else if (rounds === 10) {
    finalResult();
  } else {
    guesses -= 1;
    console.log(guesses);
    if (guesses === 0) {
      rounds += 1;
      console.log(rounds);
      displayCountry();
    }
  }
  console.log(userInput);
  document.getElementById("input-field").value = "";
  renderGame();
}

document.getElementById("input-field").onkeypress = function(key) {
  if (key.keyCode === 13) {
    checkCountry(userInput);
  }
};
