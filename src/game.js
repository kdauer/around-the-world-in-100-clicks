let rounds = 1;
let guesses = 3;

let status = {
  score: 0,
  guessesLeft: guesses,
  roundsCount: rounds
};

let messageBox = document.querySelector(".message-box");

function renderGame() {
  CalculateScore();
  CalculateGuessesLeft();
  CalculateRounds();
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
function finalResult() {
  // <body class="start">
  const results = `
      <div class="container">
        <h1>
          Well done! You got a final score of <span id="final-score">&nbsp;0</span>&nbsp;points!
        </h1>

        <div class="end">
          <p>Play often and join the Country Club</p>
          <div class="final-image">
          </div>
        </div>
        <a href="quiz.html" class="Start">
          Try again?!
        </a>
        <div class="footer-results">
          <p>
            Made by
            <a href="https://www.linkedin.com/in/konstantindauer/">
              Konstantin Dauer
            </a>
            during Ironhack Bootcamp January 2020
          </p>
        </div>
      </div>
      `;

  const resultNode = document.createElement("div");
  resultNode.innerHTML = results;
  document.querySelector(".game-site").replaceWith(resultNode);
  document.querySelector("#final-score").innerText = status.score;
}

function wrongAnswer() {
  messageBox.style.color = "red";
  messageBox.innerHTML = "Not Exactly";
  messageBox.style.display = "block";
  messageBox.classList.add("animated", "wobble", "slow");
  setTimeout(function() {
    messageBox.classList.remove("animated", "wobble", "slow");
    messageBox.style.display = "none";
  }, 2000);
  console.log("user input does not match");
}

function rightAnswer() {
  messageBox.style.color = "green";
  messageBox.innerHTML = "Awesome";
  messageBox.style.display = "block";
  messageBox.classList.add("animated", "heartBeat", "slow");
  setTimeout(function() {
    messageBox.classList.remove("animated", "heartBeat", "slow");
    messageBox.style.display = "none";
  }, 2000);
}

function displayRightName() {
  messageBox.classList.add("animated", "tada");
  messageBox.style.color = "blue";
  messageBox.innerHTML = "It was " + chosenCountry.name;
  messageBox.style.display = "block";
  setTimeout(function() {
    messageBox.classList.remove("animated", "tada");
    messageBox.style.display = "none";
  }, 2000);
}

function displaySolution() {
  document.querySelector("#europe").src = chosenCountry.solution;
  let europeBox = document.querySelector(".image-europe-box");
  europeBox.style.display = "block";
  setTimeout(function() {
    europeBox.style.display = "none";
  }, 3000);
}

function checkCountry(userInput) {
  let countryAnswer = chosenCountry.answers.map(function(element) {
    return element.toLowerCase();
  });
  if (countryAnswer.includes(userInput)) {
    rightAnswer();
    status.score += 100;
    displaySolution();
    if (status.roundsCount >= 10) {
      //   messageBox.style.display = "block";
      //   setTimeout(function() {
      //     messageBox.style.display = "none";
      //   }, 500);
      displaySolution();
      setTimeout(function() {
        finalResult();
      }, 1000);
      return;
    }
    status.roundsCount += 1;
    document.getElementById("input-field").value = "";
    status.guessesLeft = guesses;
    CalculateGuessesLeft();
    CalculateScore();
    CalculateRounds();
    displayCountry();
  } else {
    if (status.guessesLeft <= 1) {
      console.log("less than 1 guess left", status.guessesLeft);
      displayRightName();
      displaySolution();
      status.roundsCount += 1;
      if (status.roundsCount >= 10) {
        displaySolution();
        setTimeout(function() {
          finalResult();
        }, 3500);
        return;
      }
      status.guessesLeft = guesses;
      document.getElementById("input-field").value = "";
      CalculateRounds();
      CalculateGuessesLeft();
      displayCountry();
      return;
    }
    status.guessesLeft -= 1;
    wrongAnswer();
    CalculateGuessesLeft();
    document.getElementById("input-field").value = "";
  }
  console.log(userInput);
}

// press enter for input
document.getElementById("input-field").onkeypress = function(key) {
  if (key.keyCode === 13) {
    let userInput = document.getElementById("input-field").value.toLowerCase();
    checkCountry(userInput);
  }
};
