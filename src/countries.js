const countries = [
  {
    path: "assets/images/Albania.jpg",
    solution: "assets/europe-images/europe-albania.png",
    answers: ["Albania"],
    name: "Albania"
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
    name: "Bosnia Herzegovina"
  },
  {
    path: "assets/images/Estonia.jpg",
    solution: "assets/europe-images/europe-estonia.png",
    answers: ["Estonia"],
    name: "Estonia"
  },
  {
    path: "assets/images/Hungary.jpg",
    solution: "assets/europe-images/europe-hungary.png",
    answers: ["Hungary"],
    name: "Hungary"
  },
  {
    path: "assets/images/Luxembourg.jpg",
    solution: "assets/europe-images/europe-luxembourg.png",
    answers: ["Luxembourg", "Luxemburg"],
    name: "Luxembourg"
  },
  {
    path: "assets/images/Poland.jpg",
    solution: "assets/europe-images/europe-poland.png",
    answers: ["Poland"],
    name: "Poland"
  },
  {
    path: "assets/images/Spain.jpg",
    solution: "assets/europe-images/europe-spain.png",
    answers: ["Spain"],
    name: "Spain"
  },
  {
    path: "assets/images/Armenia.jpg",
    solution: "assets/europe-images/europe-armenia.png",
    answers: ["Armenia"],
    name: "Armenia"
  },
  {
    path: "assets/images/Bulgaria.jpg",
    solution: "assets/europe-images/europe-bulgaria.png",
    answers: ["Bulgaria"],
    name: "Bulgaria"
  },
  {
    path: "assets/images/Finland.jpg",
    solution: "assets/europe-images/europe-finland.png",
    answers: ["Finland", "Finnland"],
    name: "Finland"
  },
  {
    path: "assets/images/Iceland.jpg",
    solution: "assets/europe-images/europe-iceland.png",
    answers: ["Iceland", "Island"],
    name: "Iceland"
  },
  {
    path: "assets/images/Macedonia.jpg",
    solution: "assets/europe-images/europe-macedonia.png",
    answers: ["Macedonia", "Mazedonia"],
    name: "Macedonia"
  },
  {
    path: "assets/images/Portugal.jpg",
    solution: "assets/europe-images/europe-portugal.png",
    answers: ["Portugal"],
    name: "Portugal"
  },
  {
    path: "assets/images/Sweden.jpg",
    solution: "assets/europe-images/europe-sweden.png",
    answers: ["Sweden"],
    name: "Sweden"
  },
  {
    path: "assets/images/Austria.jpg",
    solution: "assets/europe-images/europe-austria.png",
    answers: ["Austria"],
    name: "Austria"
  },
  {
    path: "assets/images/Croatia.jpg",
    solution: "assets/europe-images/europe-croatia.png",
    answers: ["Croatia", "Kroatia"],
    name: "Croatia"
  },
  {
    path: "assets/images/France.jpg",
    solution: "assets/europe-images/europe-france.png",
    answers: ["France"],
    name: "France"
  },
  {
    path: "assets/images/Ireland.jpg",
    solution: "assets/europe-images/europe-ireland.png",
    answers: ["Ireland"],
    name: "Ireland"
  },
  {
    path: "assets/images/Moldava.jpg",
    solution: "assets/europe-images/europe-moldava.png",
    answers: ["Moldava", "Moldavia"],
    name: "Moldava"
  },
  {
    path: "assets/images/Romania.jpg",
    solution: "assets/europe-images/europe-romania.png",
    answers: ["Romania"],
    name: "Romania"
  },
  {
    path: "assets/images/Switzerland.jpg",
    solution: "assets/europe-images/europe-switzerland.png",
    answers: ["Switzerland", "Swiss"],
    name: "Switzerland"
  },
  {
    path: "assets/images/Azerbaijan.jpg",
    solution: "assets/europe-images/europe-azerbaijan.png",
    answers: ["Azerbaijan"],
    name: "Azerbaijan"
  },
  {
    path: "assets/images/Cyprus.jpg",
    solution: "assets/europe-images/europe-cyprus.png",
    answers: ["Cyprus", "Zyprus"],
    name: "Cyprus"
  },
  {
    path: "assets/images/Georgia.jpg",
    solution: "assets/europe-images/europe-georgia.png",
    answers: ["Georgia"],
    name: "Georgia"
  },
  {
    path: "assets/images/Italy.jpg",
    solution: "assets/europe-images/europe-italy.png",
    answers: ["Italy"],
    name: "Italy"
  },
  {
    path: "assets/images/Montenegro.jpg",
    solution: "assets/europe-images/europe-montenegro.png",
    answers: ["Montenegro"],
    name: "Montenegro"
  },
  {
    path: "assets/images/Russia.jpg",
    solution: "assets/europe-images/europe-russia.png",
    answers: ["Russia"],
    name: "Russia"
  },
  {
    path: "assets/images/Ukraine.jpg",
    solution: "assets/europe-images/europe-ukraine.png",
    answers: ["Ukraine", "Ucraine"],
    name: "Ukraine"
  },
  {
    path: "assets/images/Belarus.jpg",
    solution: "assets/europe-images/europe-belarus.png",
    answers: ["Belarus"],
    name: "Belarus"
  },
  {
    path: "assets/images/Czech Republic.jpg",
    solution: "assets/europe-images/europe-czech republic.png",
    answers: ["Czech Republic", "Czech"],
    name: "Czech Republic"
  },
  {
    path: "assets/images/Germany.jpg",
    solution: "assets/europe-images/europe-germany.png",
    answers: ["Germany"],
    name: "Germany"
  },
  {
    path: "assets/images/Latvia.jpg",
    solution: "assets/europe-images/europe-latvia.png",
    answers: ["Latvia"],
    name: "Latvia"
  },
  {
    path: "assets/images/Netherlands.jpg",
    solution: "assets/europe-images/europe-netherlands.png",
    answers: ["Netherlands", "Holland"],
    name: "Netherlands"
  },
  {
    path: "assets/images/Slovakia.jpg",
    solution: "assets/europe-images/europe-slovakia.png",
    answers: ["Slovakia"],
    name: "Slovakia"
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
    name: "United Kingdom"
  },
  {
    path: "assets/images/Belgium.jpg",
    solution: "assets/europe-images/europe-belgium.png",
    answers: ["Belgium"],
    name: "Belgium"
  },
  {
    path: "assets/images/Denmark.jpg",
    solution: "assets/europe-images/europe-denmark.png",
    answers: ["Denmark"],
    name: "Denmark"
  },
  {
    path: "assets/images/Greece.jpg",
    solution: "assets/europe-images/europe-Greece.png",
    answers: ["Greece"],
    name: "Greece"
  },
  {
    path: "assets/images/Lithuana.jpg",
    solution: "assets/europe-images/europe-Lithuana.png",
    answers: ["Lithuana", "Lituana", "Lithuania"],
    name: "Lithuana"
  },
  {
    path: "assets/images/Norway.jpg",
    solution: "assets/europe-images/europe-norway.png",
    answers: ["Norway"],
    name: "Norway"
  },
  {
    path: "assets/images/Slovenia.jpg",
    solution: "assets/europe-images/europe-slovenia.png",
    answers: ["Slovenia"],
    name: "Slovenia"
  }
];
