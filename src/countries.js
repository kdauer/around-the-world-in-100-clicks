const countries = [
  {
    path: "assets/images/Albania.jpg",
    solution: "assets/europe-images/europe-albania.png",
    answers: ["Albania"],
    name: "Albania",
    direction: "South",
    capital: "Tirana",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Bosnia Herzegovina.jpg",
    solution: "assets/europe-images/europe-bosnia herzegovina.png",
    answers: [
      "Bosnia Herzegovina",
      "Bosnia",
      "Bosnia and Herzegovina",
      "Herzegovina"
    ],
    name: "Bosnia Herzegovina",
    direction: "South",
    capital: "Sarajevo",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Estonia.jpg",
    solution: "assets/europe-images/europe-estonia.png",
    answers: ["Estonia"],
    name: "Estonia",
    direction: "North",
    capital: "Tallinn",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Hungary.jpg",
    solution: "assets/europe-images/europe-hungary.png",
    answers: ["Hungary"],
    name: "Hungary",
    direction: "East",
    capital: "Budapest",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Luxembourg.jpg",
    solution: "assets/europe-images/europe-luxembourg.png",
    answers: ["Luxembourg", "Luxemburg"],
    name: "Luxembourg",
    direction: "West",
    capital: "Luxembourg",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Poland.jpg",
    solution: "assets/europe-images/europe-poland.png",
    answers: ["Poland"],
    name: "Poland",
    direction: "East",
    capital: "Warsaw",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Spain.jpg",
    solution: "assets/europe-images/europe-spain.png",
    answers: ["Spain"],
    name: "Spain",
    direction: "South-West",
    capital: "Madrid",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Armenia.jpg",
    solution: "assets/europe-images/europe-armenia.png",
    answers: ["Armenia"],
    name: "Armenia",
    direction: "East",
    capital: "Yerevan",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Bulgaria.jpg",
    solution: "assets/europe-images/europe-bulgaria.png",
    answers: ["Bulgaria"],
    name: "Bulgaria",
    direction: "South-East",
    capital: "Sofia",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Finland.jpg",
    solution: "assets/europe-images/europe-finland.png",
    answers: ["Finland", "Finnland"],
    name: "Finland",
    direction: "North-East",
    capital: "Helsinki",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Iceland.jpg",
    solution: "assets/europe-images/europe-iceland.png",
    answers: ["Iceland", "Island"],
    name: "Iceland",
    direction: "North-West",
    capital: "Reykjavik",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Macedonia.jpg",
    solution: "assets/europe-images/europe-macedonia.png",
    answers: ["Macedonia", "Mazedonia", "North Macedonia"],
    name: "North Macedonia",
    direction: "South-East",
    capital: "Skopje",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Portugal.jpg",
    solution: "assets/europe-images/europe-portugal.png",
    answers: ["Portugal"],
    name: "Portugal",
    direction: "South-West",
    capital: "Lisbon",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Sweden.jpg",
    solution: "assets/europe-images/europe-sweden.png",
    answers: ["Sweden"],
    name: "Sweden",
    direction: "North",
    capital: "Stockholm",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Austria.jpg",
    solution: "assets/europe-images/europe-austria.png",
    answers: ["Austria"],
    name: "Austria",
    direction: "West",
    capital: "Vienna",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Croatia.jpg",
    solution: "assets/europe-images/europe-croatia.png",
    answers: ["Croatia", "Kroatia"],
    name: "Croatia",
    direction: "South-West",
    capital: "Zagreb",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/France.jpg",
    solution: "assets/europe-images/europe-france.png",
    answers: ["France"],
    name: "France",
    direction: "West",
    capital: "Paris",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Ireland.jpg",
    solution: "assets/europe-images/europe-ireland.png",
    answers: ["Ireland"],
    name: "Ireland",
    direction: "North-West",
    capital: "Dublin",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Moldava.jpg",
    solution: "assets/europe-images/europe-moldava.png",
    answers: ["Moldava", "Moldavia"],
    name: "Moldava",
    direction: "East",
    capital: "Chisinau",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Romania.jpg",
    solution: "assets/europe-images/europe-romania.png",
    answers: ["Romania"],
    name: "Romania",
    direction: "East",
    capital: "Bucharest",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Switzerland.jpg",
    solution: "assets/europe-images/europe-switzerland.png",
    answers: ["Switzerland", "Swiss"],
    name: "Switzerland",
    direction: "West",
    capital: "Bern",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Azerbaijan.jpg",
    solution: "assets/europe-images/europe-azerbaijan.png",
    answers: ["Azerbaijan", "Azerbaidjan", "Aserbaijan"],
    name: "Azerbaijan",
    direction: "East",
    capital: "Baku",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Cyprus.jpg",
    solution: "assets/europe-images/europe-cyprus.png",
    answers: ["Cyprus", "Zyprus"],
    name: "Cyprus",
    direction: "South-East",
    capital: "Nicosia",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Georgia.jpg",
    solution: "assets/europe-images/europe-georgia.png",
    answers: ["Georgia"],
    name: "Georgia",
    direction: "East",
    capital: "Tbilisi",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Italy.jpg",
    solution: "assets/europe-images/europe-italy.png",
    answers: ["Italy"],
    name: "Italy",
    direction: "South-West",
    capital: "Rome",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Montenegro.jpg",
    solution: "assets/europe-images/europe-montenegro.png",
    answers: ["Montenegro"],
    name: "Montenegro",
    direction: "South",
    capital: "Podgorica",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Russia.jpg",
    solution: "assets/europe-images/europe-russia.png",
    answers: ["Russia"],
    name: "Russia",
    direction: "North-East",
    capital: "Moscow",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Ukraine.jpg",
    solution: "assets/europe-images/europe-ukraine.png",
    answers: ["Ukraine", "Ucraine"],
    name: "Ukraine",
    direction: "East",
    capital: "Kiev",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Belarus.jpg",
    solution: "assets/europe-images/europe-belarus.png",
    answers: ["Belarus"],
    name: "Belarus",
    direction: "North-East",
    capital: "Minsk",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Czech Republic.jpg",
    solution: "assets/europe-images/europe-czech republic.png",
    answers: ["Czech Republic", "Czech"],
    name: "Czech Republic",
    direction: "West",
    capital: "Prague",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Germany.jpg",
    solution: "assets/europe-images/europe-germany.png",
    answers: ["Germany"],
    name: "Germany",
    direction: "North-West",
    capital: "Berlin",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Latvia.jpg",
    solution: "assets/europe-images/europe-latvia.png",
    answers: ["Latvia"],
    name: "Latvia",
    direction: "North-East",
    capital: "Riga",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Netherlands.jpg",
    solution: "assets/europe-images/europe-netherlands.png",
    answers: ["Netherlands", "Holland"],
    name: "Netherlands",
    direction: "North-West",
    capital: "Amsterdam",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Slovakia.jpg",
    solution: "assets/europe-images/europe-slovakia.png",
    answers: ["Slovakia"],
    name: "Slovakia",
    direction: "West",
    capital: "Bratislava",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/United Kingdom.jpg",
    solution: "assets/europe-images/europe-united kingdom.png",
    answers: [
      "United Kingdom",
      "UK",
      "United Kingdoms",
      "Great Britain",
      "England"
    ],
    name: "United Kingdom",
    direction: "North-West",
    capital: "London",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Belgium.jpg",
    solution: "assets/europe-images/europe-belgium.png",
    answers: ["Belgium"],
    name: "Belgium",
    direction: "West",
    capital: "Brussels",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Denmark.jpg",
    solution: "assets/europe-images/europe-denmark.png",
    answers: ["Denmark"],
    name: "Denmark",
    direction: "North",
    capital: "Copenhagen",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Greece.jpg",
    solution: "assets/europe-images/europe-Greece.png",
    answers: ["Greece"],
    name: "Greece",
    direction: "South-East",
    capital: "Athens",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Lithuana.jpg",
    solution: "assets/europe-images/europe-Lithuana.png",
    answers: ["Lithuana", "Lituana", "Lithuania"],
    name: "Lithuana",
    direction: "North-East",
    capital: "Vilnius",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Norway.jpg",
    solution: "assets/europe-images/europe-norway.png",
    answers: ["Norway"],
    name: "Norway",
    direction: "North",
    capital: "Oslo",
    population: "",
    funFact: ""
  },
  {
    path: "assets/images/Slovenia.jpg",
    solution: "assets/europe-images/europe-slovenia.png",
    answers: ["Slovenia"],
    name: "Slovenia",
    direction: "South",
    capital: "Ljubljana",
    population: "",
    funFact: ""
  }
];
