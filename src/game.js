// declare rounds and guesses
let rounds = 1;
let guesses = 3;

// declare status of the game
let status = {
  score: 0,
  guessesLeft: guesses,
  roundsCount: rounds
};

// declare the messagebox
let messageBox = document.querySelector(".message-box");
let hintDirection = document.querySelector(".direction-hint");

function renderGame() {
  CalculateScore();
  CalculateGuessesLeft();
  CalculateRounds();
}

// render the score
function CalculateScore() {
  document.querySelector("#score").innerText = status.score;
}
// render the guesses
function CalculateGuessesLeft() {
  document.querySelector("#guesses span").innerText = status.guessesLeft;
}

// render the rounds
function CalculateRounds() {
  document.querySelector("#round span").innerText = status.roundsCount;
}

// deploy the result page
function finalResult() {
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

// show message for the wrong answer
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

//give second hint after one wrong guess
function secondHint() {
  hintDirection.classList.add("animated", "fadeIn", "slow");
  hintDirection.innerHTML =
    "it's more in the direction of " + chosenCountry.direction;
  hintDirection.style.display = "block";
}

// show message for the right answer
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

// show the right name of the country
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

// show the image on map of europe
function displaySolution() {
  document.querySelector("#europe").src = chosenCountry.solution;
  let europeBox = document.querySelector(".image-europe-box");
  europeBox.style.display = "block";
  setTimeout(function() {
    europeBox.style.display = "none";
  }, 3000);
}

// check if input matches the country
function checkCountry(userInput) {
  let countryAnswer = chosenCountry.answers.map(function(element) {
    return element.toLowerCase();
  });
  if (countryAnswer.includes(userInput)) {
    // answer is right
    rightAnswer();
    status.score += 100;
    displaySolution();
    if (status.roundsCount >= 10) {
      // after last round
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
    // answer is wrong
    if (status.guessesLeft <= 1) {
      // and no guesses left
      console.log("less than 1 guess left", status.guessesLeft);
      hintDirection.style.display = "none";
      displayRightName();
      displaySolution();
      status.roundsCount += 1;
      if (status.roundsCount >= 10) {
        // and also after last round
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
    if (status.guessesLeft == 2) {
      // get the second hint
      secondHint();
    }
    CalculateGuessesLeft();
    document.getElementById("input-field").value = "";
  }
}

// press enter for input
document.getElementById("input-field").onkeypress = function(key) {
  if (key.keyCode === 13) {
    let userInput = document.getElementById("input-field").value.toLowerCase();
    checkCountry(userInput);
  }
};
