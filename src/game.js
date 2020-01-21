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
            <img class="globe" src="assets/result/globe.svg" alt="globe" />
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
    }, 1000);
    status.score += 100;
    if (status.roundsCount >= 3) {
      finalResult();
      return;
    }
    status.roundsCount += 1;
    document.getElementById("input-field").value = "";
    CalculateScore();
    CalculateRounds();
    displayCountry();
  } else {
    status.guessesLeft -= 1;
    document.querySelector(".message-box ").style.color = "red";
    document.querySelector(".message-box ").innerHTML = "Nope";
    messageBox.style.display = "block";
    setTimeout(function() {
      messageBox.style.display = "none";
    }, 1000);
    console.log("user input does not match");
    CalculateGuessesLeft();
    if (status.guessesLeft < 1) {
      document.querySelector(".message-box ").innerHTML = chosenCountry.name;
      status.roundsCount += 1;
      CalculateRounds();
      status.guessesLeft = guesses;
      CalculateGuessesLeft();

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

displayMessageBox = result => {
  console.log(result);
  const images = result ? successImages : failureImages;
  console.log(images);
  const messageBox = document.querySelector(".message-box");
  messageBox.style.backgroundImage = `url(./assets/${
    images[Math.floor(Math.random() * images.length)]
  })`;
  messageBox.style.display = "block";
  setTimeout(() => {
    messageBox.style.display = "none";
  }, durationMessageBox);
};
