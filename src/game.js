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
  const results = `
    <body class="start">
      <div class="container">
        <h1>
          Well done! You got a final score of <span id="final-score">0</span>points!
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
            <a href="https://www.linkedin.com/in/konstantin-dauer-12313a1a0/">
              Konstantin Dauer
            </a>
            during Ironhack Bootcamp January 2020
          </p>
        </div>
      </div>
    </body>`;
  const resultNode = document.createElement("div");
  resultNode.innerHTML = results;
  document.querySelector(".game-site").replaceWith(resultNode);
  document.querySelector("#final-score").innerText = status.score;
}

function displaySolution() {
  document.querySelector("#europe").src = chosenCountry.solution;
  let europeBox = document.querySelector(".image-europe-box");
  europeBox.style.display = "block";
  setTimeout(function() {
    europeBox.style.display = "none";
  }, 2500);
}

function checkCountry(userInput) {
  let countryAnswer = chosenCountry.answers.map(function(element) {
    return element.toLowerCase();
  });
  let messageBox = document.querySelector(".message-box");

  if (countryAnswer.includes(userInput)) {
    document.querySelector(".message-box ").style.color = "green";
    document.querySelector(".message-box ").innerHTML = "Awesome";
    messageBox.style.display = "block";
    setTimeout(function() {
      messageBox.style.display = "none";
    }, 500);
    status.score += 100;
    if (status.roundsCount >= 1) {
      finalResult();
      return;
    }
    status.roundsCount += 1;
    document.getElementById("input-field").value = "";
    CalculateScore();
    CalculateRounds();
    displaySolution();
    displayCountry();
  } else {
    status.guessesLeft -= 1;
    document.querySelector(".message-box ").style.color = "red";
    document.querySelector(".message-box ").innerHTML = "Nope";
    messageBox.style.display = "block";
    setTimeout(function() {
      messageBox.style.display = "none";
    }, 500);
    console.log("user input does not match");
    CalculateGuessesLeft();
    if (status.guessesLeft < 1) {
      document.querySelector(".message-box ").style.color = "black";
      document.querySelector(".message-box ").innerHTML =
        "It was " + chosenCountry.name;
      messageBox.style.display = "block";
      setTimeout(function() {
        messageBox.style.display = "none";
      }, 500);
      status.roundsCount += 1;
      if (status.roundsCount >= 1) {
        finalResult();
        return;
      }
      status.guessesLeft = guesses;
      CalculateRounds();
      CalculateGuessesLeft();
      displaySolution();
      displayCountry();
    }
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
