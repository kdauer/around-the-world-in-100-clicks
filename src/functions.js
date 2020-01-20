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
  document.querySelector(".img-border img").src = chosenCountry.path;
  setCountryHint();
}

//get the hint
function setCountryHint() {
  document.querySelector(".hint p span").innerText = chosenCountry.name.length;
}

displayCountry();

//get only ten countries