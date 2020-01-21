let rounds = 1;
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
  nextRoundButton();
}

function CalculateScore() {
  document.querySelector("#score").innerText = status.score;
}

function CalculateGuessesLeft() {
  document.querySelector("#guesses span").innerText = status.guessesLeft;
}
function CalculateRounds() {
  document.querySelector("#round span").innerText = status.roundsCount;
}
function finalResult() {}

function checkCountry(userInput) {
  let countryAnswer = chosenCountry.answers.map(function(element) {
    return element.toLowerCase();
  });
  if (countryAnswer.includes(userInput)) {
    //If answer matches
    console.log(countryAnswer);
    console.log(userInput);
    status.score += 100;
    status.roundsCount += 1;
    document.getElementById("input-field").value = "";
    CalculateScore();
    CalculateRounds();
    displayCountry();
  } else if (status.roundsCount === 10) {
    finalResult();
  } else {
    status.guessesLeft -= 1;
    console.log("user input does not match");
    if (status.guessesLeft === 0) {
      status.roundsCount += 1;
      status.guessesLeft = guesses;
      displayCountry();
    }
    document.getElementById("input-field").value = "";
  }
  console.log(userInput);

  renderGame();
}

// press enter for input
document.getElementById("input-field").onkeypress = function(key) {
  if (key.keyCode === 13) {
    let userInput = document.getElementById("input-field").value;
    checkCountry(userInput);
  }
};
