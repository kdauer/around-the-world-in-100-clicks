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
// declare the second hin box
let hintDirection = document.querySelector(".direction-hint");
// declare the next round button
let nxtBtn = document.querySelector(".next-btn");
// declare info-box
let infoBox = document.querySelector(".country-info");

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
// render everything
function renderGame() {
  CalculateScore();
  CalculateGuessesLeft();
  CalculateRounds();
}

// deploy the result page
function finalResult() {
  const results = `
      <div class="container">
        <h1>
          Well done! You got a final score of <span id="final-score">&nbsp;0</span>&nbsp;points!
        </h1>

        <div class="end">
          <p>Play often and get better</p>
          <div class="final-image">
          </div>
        </div>
        <a href="quiz.html" class="Start">
          Try again?!
        </a>
        <div class="footer-results">
          <p>
            Made by
            <a href="https://www.linkedin.com/in/konstantindauer/" target="_blank">
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
  messageBox.innerHTML = randomizeWrongTag();
  messageBox.style.display = "block";
  messageBox.classList.add("animated", "wobble", "slow");
  setTimeout(function() {
    messageBox.classList.remove("animated", "wobble", "slow");
    messageBox.style.display = "none";
  }, 2000);
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
  messageBox.innerHTML = randomizeRightTag();
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
  }, 3500);
}

// show the image on map of europe
function displaySolution() {
  document.querySelector("#europe").src = chosenCountry.solution;
  let europeBox = document.querySelector(".image-europe-box");
  europeBox.style.display = "block";
}

// get content for info box and display it
function displayInfoBox() {
  document.getElementById("capital").innerHTML = chosenCountry.capital;
  document.getElementById("population").innerHTML = chosenCountry.population;
  document.getElementById("fact").innerHTML = chosenCountry.funFact;
  infoBox.classList.add("animated", "slideInLeft", "slow");
  infoBox.style.display = "block";
}

// show the "Next Round" button
function showNxtBtn() {
  nxtBtn.classList.add("animated", "fadeIn");
  nxtBtn.style.display = "block";
}

// click "Next Round" button
function clickNext() {
  renderGame();
  displayCountry();
  document.getElementById("input-field").disabled = false;
  document.getElementById("input-field").focus();
  infoBox.style.display = "none";
  document.querySelector(".image-europe-box").style.display = "none";
  nxtBtn.style.display = "none";
  hintDirection.style.display = "none";
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
    CalculateScore();
    displaySolution();
    hintDirection.style.display = "none";
    document.getElementById("input-field").disabled = true; // disable input field
    displayInfoBox();
    showNxtBtn();
    if (status.roundsCount >= 10) {
      // after last round
      displaySolution();
      nxtBtn.style.display = "none";
      setTimeout(function() {
        finalResult();
      }, 3500);
      return;
    }
    status.roundsCount += 1;
    CalculateRounds();
    document.getElementById("input-field").value = "";
    status.guessesLeft = guesses;
  } else {
    // answer is wrong
    if (status.guessesLeft <= 1) {
      // and no guesses left
      CalculateGuessesLeft();
      console.log("less than 1 guess left", status.guessesLeft);
      hintDirection.style.display = "none";
      displayRightName();
      displaySolution();
      displayInfoBox();
      hintDirection.style.display = "none";
      document.getElementById("input-field").disabled = true; // diable input-field
      showNxtBtn();
      status.roundsCount += 1;
      CalculateRounds();
      if (status.roundsCount >= 10) {
        // and also after last round
        displaySolution();
        nxtBtn.style.display = "none";
        setTimeout(function() {
          finalResult();
        }, 3500);
        return;
      }
      status.guessesLeft = guesses;
      document.getElementById("input-field").value = "";
      return;
    }
    status.guessesLeft -= 1;
    CalculateGuessesLeft();
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

// create click event
nxtBtn.onclick = function() {
  clickNext();
};
