// get a random country
function getRandomCountry() {
  let random = Math.floor(Math.random() * countries.length);
  let randomCountry = countries[random];
  countries.splice(random, 1);

  return randomCountry;
}

let chosenCountry;

//show the image
function displayCountry() {
  chosenCountry = getRandomCountry();
  console.log(chosenCountry);
  document.querySelector(".img-border img").src = chosenCountry.path;
  setCountryHint();
}

//display the hint
function setCountryHint() {
  document.querySelector(".hint p span").innerText = chosenCountry.name.length;
}

// display first country when starting
displayCountry();
