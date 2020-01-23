const countries = [
  {
    path: "assets/images/Albania.jpg",
    solution: "assets/europe-images/europe-albania.png",
    answers: ["Albania"],
    name: "Albania",
    direction: "South",
    capital: "Tirana",
    population: "2.900.000",
    funFact: "Here you nod for 'no' and shake your head for 'yes'."
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
    population: "3.300.000",
    funFact:
      "The country is nicknamed the 'Heart Shaped Land' due to the country’s slight heart shape."
  },
  {
    path: "assets/images/Estonia.jpg",
    solution: "assets/europe-images/europe-estonia.png",
    answers: ["Estonia"],
    name: "Estonia",
    direction: "North",
    capital: "Tallinn",
    population: "1.300.000",
    funFact:
      "Estonia has the most meteorite craters in the world, measured by land mass. One of the most spectacular is the one on the island of Saarema. About 7500 years ago, a meteorite shattered there at an altitude of about five to ten kilometres, raining many small pieces of it down on the earth. The largest one left a 20 meter deep hole, the Kaali Crater"
  },
  {
    path: "assets/images/Hungary.jpg",
    solution: "assets/europe-images/europe-hungary.png",
    answers: ["Hungary"],
    name: "Hungary",
    direction: "East",
    capital: "Budapest",
    population: "9.600.000",
    funFact:
      "Notable inventions include the Rubik's Cube (by sculptor and professor Erno Rubik, 1974), the krypton electric bulb (by physicist Imre Brody in 1937), and the biro, patented in 1938 by journalist László Bíró."
  },
  {
    path: "assets/images/Luxembourg.jpg",
    solution: "assets/europe-images/europe-luxembourg.png",
    answers: ["Luxembourg", "Luxemburg"],
    name: "Luxembourg",
    direction: "West",
    capital: "Luxembourg",
    population: "600.000",
    funFact:
      "Luxembourg is the only Grand Duchy in the world. So instead of a King and Queen, they have a Grand-Duke and Grand-Duchess."
  },
  {
    path: "assets/images/Poland.jpg",
    solution: "assets/europe-images/europe-poland.png",
    answers: ["Poland"],
    name: "Poland",
    direction: "East",
    capital: "Warsaw",
    population: "37.800.000",
    funFact:
      "College in Poland is free. If you’re a Polish citizen, you can attend a state-run university without paying tuition."
  },
  {
    path: "assets/images/Spain.jpg",
    solution: "assets/europe-images/europe-spain.png",
    answers: ["Spain"],
    name: "Spain",
    direction: "South-West",
    capital: "Madrid",
    population: "46.700.000",
    funFact:
      "The Plaza de la Puerta del Sol is not only supposed to be located exactly in the centre of Spain's capital Madrid - it is even considered as the centre of the whole country. On the square is the so-called Kilometro Cero, which is the traditional starting point of all six national roads"
  },
  {
    path: "assets/images/Armenia.jpg",
    solution: "assets/europe-images/europe-armenia.png",
    answers: ["Armenia"],
    name: "Armenia",
    direction: "East",
    capital: "Yerevan",
    population: "2.900.000",
    funFact:
      "Chess is a compulsory subject in schools. Interesting huh? All students have to take chess as a compulsory subject in school and there are even exams for it!"
  },
  {
    path: "assets/images/Bulgaria.jpg",
    solution: "assets/europe-images/europe-bulgaria.png",
    answers: ["Bulgaria"],
    name: "Bulgaria",
    direction: "South-East",
    capital: "Sofia",
    population: "6.900.000",
    funFact:
      "Lactobacillus Bulgaricus, the bacterium that is responsible for giving Bulgarian yoghurt its unique flavour and consistency, can be found only in Bulgarian air."
  },
  {
    path: "assets/images/Finland.jpg",
    solution: "assets/europe-images/europe-finland.png",
    answers: ["Finland", "Finnland"],
    name: "Finland",
    direction: "North-East",
    capital: "Helsinki",
    population: "5.500.00",
    funFact:
      "The amount of the speeding ticket depends on the driver's income. This can result in five-figure amounts. There is also something else interesting in Finland: a heavy metal band for children, the Hevisaurus."
  },
  {
    path: "assets/images/Iceland.jpg",
    solution: "assets/europe-images/europe-iceland.png",
    answers: ["Iceland", "Island"],
    name: "Iceland",
    direction: "North-West",
    capital: "Reykjavik",
    population: "300.000",
    funFact:
      "In Iceland there is an 'Elf Commissioner' who checks that no cultural property - for example an Elven home - is destroyed in the process. Very respectful!"
  },
  {
    path: "assets/images/Macedonia.jpg",
    solution: "assets/europe-images/europe-macedonia.png",
    answers: ["Macedonia", "Mazedonia", "North Macedonia"],
    name: "North Macedonia",
    direction: "South-East",
    capital: "Skopje",
    population: "2.000.000",
    funFact:
      "In 2006, it became the first country in the world to have full access to a wireless broadband connection, after being a part of a high-tech project."
  },
  {
    path: "assets/images/Portugal.jpg",
    solution: "assets/europe-images/europe-portugal.png",
    answers: ["Portugal"],
    name: "Portugal",
    direction: "South-West",
    capital: "Lisbon",
    population: "10.200.000",
    funFact:
      "The people of Porto have an old saying about the biggest cities in Portugal: 'Porto works, Coimbra studies, Braga prays and Lisbon plays'."
  },
  {
    path: "assets/images/Sweden.jpg",
    solution: "assets/europe-images/europe-sweden.png",
    answers: ["Sweden"],
    name: "Sweden",
    direction: "North",
    capital: "Stockholm",
    population: "10.000.000",
    funFact:
      "In terms of population, more caravans are registered in Sweden than in the Netherlands."
  },
  {
    path: "assets/images/Austria.jpg",
    solution: "assets/europe-images/europe-austria.png",
    answers: ["Austria"],
    name: "Austria",
    direction: "West",
    capital: "Vienna",
    population: "8.900.000",
    funFact:
      "In Vienna there is the Klink Academy. Aha. And what is that? A school that teaches people about sex. I mean, there's got to be some kind of a way to learn..."
  },
  {
    path: "assets/images/Croatia.jpg",
    solution: "assets/europe-images/europe-croatia.png",
    answers: ["Croatia", "Kroatia"],
    name: "Croatia",
    direction: "South-West",
    capital: "Zagreb",
    population: "4.100.000",
    funFact:
      "In Hvar the weather is so constant and good that some hotel owners offer free accommodation when it snows."
  },
  {
    path: "assets/images/France.jpg",
    solution: "assets/europe-images/europe-france.png",
    answers: ["France"],
    name: "France",
    direction: "West",
    capital: "Paris",
    population: "65.200.000",
    funFact:
      "In Paris there is only a stop sign, but there is also a Statue of Liberty and you can marry dead people and also the Eiffel Tower. Therefore you cannot call your pig Napoleon by law."
  },
  {
    path: "assets/images/Ireland.jpg",
    solution: "assets/europe-images/europe-ireland.png",
    answers: ["Ireland"],
    name: "Ireland",
    direction: "North-West",
    capital: "Dublin",
    population: "4.900.000",
    funFact:
      "Windmills always turn counterclockwise - except in Ireland. Why? Nobody knows"
  },
  {
    path: "assets/images/Moldava.jpg",
    solution: "assets/europe-images/europe-moldava.png",
    answers: ["Moldava", "Moldavia"],
    name: "Moldava",
    direction: "East",
    capital: "Chisinau",
    population: "4.000.000",
    funFact:
      "It went nearly three years without a president. In 2012, after nearly three years of political deadlock, Moldova elected the veteran judge, Nicolae Timofti, as president – for the first time in 917 days, the country had a leader. "
  },
  {
    path: "assets/images/Romania.jpg",
    solution: "assets/europe-images/europe-romania.png",
    answers: ["Romania"],
    name: "Romania",
    direction: "East",
    capital: "Bucharest",
    population: "19.200.000",
    funFact:
      "Here are officially the most beautiful waterfalls in the world: The Cascada Bigar Falls. In addition, you can also find the probably most colourful cemetery in this country."
  },
  {
    path: "assets/images/Switzerland.jpg",
    solution: "assets/europe-images/europe-switzerland.png",
    answers: ["Switzerland", "Swiss"],
    name: "Switzerland",
    direction: "West",
    capital: "Bern",
    population: "8.600.000",
    funFact:
      "In Switzerland there is a 500-year-old statue that eats children: the Kindlifresserbrunnen."
  },
  {
    path: "assets/images/Azerbaijan.jpg",
    solution: "assets/europe-images/europe-azerbaijan.png",
    answers: ["Azerbaijan", "Azerbaidjan", "Aserbaijan"],
    name: "Azerbaijan",
    direction: "East",
    capital: "Baku",
    population: "10.100.000",
    funFact:
      "Azerbaijan has more mud volcanoes than any other country on Earth – more than 400. When its volcanoes erupt, the flames shoot up to a kilometre in the air, and when dormant they bubble and pop with noxious gases."
  },
  {
    path: "assets/images/Cyprus.jpg",
    solution: "assets/europe-images/europe-cyprus.png",
    answers: ["Cyprus", "Zyprus"],
    name: "Cyprus",
    direction: "South-East",
    capital: "Nicosia",
    population: "1.100.000",
    funFact:
      "The island country is divided into two parts.  36,2% of the sovereign territory of Cyprus is still under illegal military occupation by Turkey."
  },
  {
    path: "assets/images/Georgia.jpg",
    solution: "assets/europe-images/europe-georgia.png",
    answers: ["Georgia"],
    name: "Georgia",
    direction: "East",
    capital: "Tbilisi",
    population: "",
    funFact:
      "Tbilisi – the capital of Georgia, got its name from the Old Georgian word ‘Tpili’ which means ‘warm’. The city also has one of the longest and steepest funiculars in the world to enjoy the breathtaking views of the city from the top of the hill."
  },
  {
    path: "assets/images/Italy.jpg",
    solution: "assets/europe-images/europe-italy.png",
    answers: ["Italy"],
    name: "Italy",
    direction: "South-West",
    capital: "Rome",
    population: "60.500.000",
    funFact: "Italy is the country with the most Unesco World Heritage Sites."
  },
  {
    path: "assets/images/Montenegro.jpg",
    solution: "assets/europe-images/europe-montenegro.png",
    answers: ["Montenegro"],
    name: "Montenegro",
    direction: "South",
    capital: "Podgorica",
    population: "600.000",
    funFact:
      " Montenegro did not have its own currency, but initially the German Mark. When the euro was introduced, they had simply adopted the currency, even though they did not belong to the EU. Somehow nobody cared about that at that time."
  },
  {
    path: "assets/images/Russia.jpg",
    solution: "assets/europe-images/europe-russia.png",
    answers: ["Russia"],
    name: "Russia",
    direction: "North-East",
    capital: "Moscow",
    population: "146.000.000",
    funFact:
      "In Russia, until it was strangely banned in 2012, there was a sex doll swimming race - the Bubble Baba Challenge: Up to 800 participants tried to cross the river on a floating sex doll. The only rule: to be at least 16 years old and to pass an - how could it be otherwise - alcohol test."
  },
  {
    path: "assets/images/Ukraine.jpg",
    solution: "assets/europe-images/europe-ukraine.png",
    answers: ["Ukraine", "Ucraine"],
    name: "Ukraine",
    direction: "East",
    capital: "Kiev",
    population: "43.800.000",
    funFact: "There are 40 vodka producers in Ukraine."
  },
  {
    path: "assets/images/Belarus.jpg",
    solution: "assets/europe-images/europe-belarus.png",
    answers: ["Belarus"],
    name: "Belarus",
    direction: "North-East",
    capital: "Minsk",
    population: "9.400.000",
    funFact:
      "Many Belarusian recipes contain vodka: if you gargle with it, you won't get a raw neck, if you wash your hair with it, no dandruff - and it's also good for earaches."
  },
  {
    path: "assets/images/Czech Republic.jpg",
    solution: "assets/europe-images/europe-czech republic.png",
    answers: ["Czech Republic", "Czech"],
    name: "Czech Republic",
    direction: "West",
    capital: "Prague",
    population: "10.700.000",
    funFact: "Czechs consume the most beer per capita in the world. "
  },
  {
    path: "assets/images/Germany.jpg",
    solution: "assets/europe-images/europe-germany.png",
    answers: ["Germany"],
    name: "Germany",
    direction: "North-West",
    capital: "Berlin",
    population: "83.700.000",
    funFact:
      "The longest German word published is - now please read it carefully: Donaudampfschifffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft."
  },
  {
    path: "assets/images/Latvia.jpg",
    solution: "assets/europe-images/europe-latvia.png",
    answers: ["Latvia"],
    name: "Latvia",
    direction: "North-East",
    capital: "Riga",
    population: "1.900.000",
    funFact:
      "There is a very special hotel in Latvia. With 'be a prisoner for one day’ the Karosta 'Prison Hotel' advertises and treats its guests in the same way. Before you enter the cell you sign that you agree to be treated like a prisoner."
  },
  {
    path: "assets/images/Netherlands.jpg",
    solution: "assets/europe-images/europe-netherlands.png",
    answers: ["Netherlands", "Holland"],
    name: "Netherlands",
    direction: "North-West",
    capital: "Amsterdam",
    population: "17.100.000",
    funFact:
      "20 percent of the entire Netherlands is under water and another 20 percent below sea level."
  },
  {
    path: "assets/images/Slovakia.jpg",
    solution: "assets/europe-images/europe-slovakia.png",
    answers: ["Slovakia"],
    name: "Slovakia",
    direction: "West",
    capital: "Bratislava",
    population: "5.400.000",
    funFact:
      "More than 6,000 caves have been discovered in Slovakia so far! Most spectacular caves can be found in the national parks of Low Tatras, Slovak Paradise and Slovak Karst."
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
    population: "67.700.000",
    funFact:
      " In London's 'Café Ziferblat' the food and drinks are on the house. Guests pay for the time they spend there: About 2.20 euros for an hour. Beside coffee and tea as also some simple little things as toast and pastries, also the things brought along can be consumed"
  },
  {
    path: "assets/images/Belgium.jpg",
    solution: "assets/europe-images/europe-belgium.png",
    answers: ["Belgium"],
    name: "Belgium",
    direction: "West",
    capital: "Brussels",
    population: "11.500.000",
    funFact:
      "Antwerp the diamond capital of the world has been a major focus of the diamond trade since the 15th century, and today, 84% of the world’s rough diamonds pass through Antwerp to be polished and shaped before hitting the stores."
  },
  {
    path: "assets/images/Denmark.jpg",
    solution: "assets/europe-images/europe-denmark.png",
    answers: ["Denmark"],
    name: "Denmark",
    direction: "North",
    capital: "Copenhagen",
    population: "5.700.000",
    funFact: "There are 18 different shark species living in the Danish waters"
  },
  {
    path: "assets/images/Greece.jpg",
    solution: "assets/europe-images/europe-Greece.png",
    answers: ["Greece"],
    name: "Greece",
    direction: "South-East",
    capital: "Athens",
    population: "10.400.000",
    funFact:
      "Greeks are superstitious: If you get a compliment, you think the 'evil eye' is looking at you. To ward it off, one spits three times (supposedly at the one being congratulated). Thanks!"
  },
  {
    path: "assets/images/Lithuana.jpg",
    solution: "assets/europe-images/europe-Lithuana.png",
    answers: ["Lithuana", "Lituana", "Lithuania"],
    name: "Lithuana",
    direction: "North-East",
    capital: "Vilnius",
    population: "1.900.000",
    funFact:
      "Vilnius has an anonymous swing foundation. It’s a group of people who install swings all around the city, often changing their locations."
  },
  {
    path: "assets/images/Norway.jpg",
    solution: "assets/europe-images/europe-norway.png",
    answers: ["Norway"],
    name: "Norway",
    direction: "North",
    capital: "Oslo",
    population: "5.400.000",
    funFact:
      "Norwegians invented skiing some 4000 years ago. They have won more medals in the Winter Olympics than any other country, with 332 to date since the first Winter Olympic Games were held in 1924."
  },
  {
    path: "assets/images/Slovenia.jpg",
    solution: "assets/europe-images/europe-slovenia.png",
    answers: ["Slovenia"],
    name: "Slovenia",
    direction: "South",
    capital: "Ljubljana",
    population: "2.000.000",
    funFact:
      "Planica is an epic place for ski-lovers, especially if you like heights. The Ski Jump here is legendary and many world records have been set here. For example, the world record by Bjoern Einar Romoeren of 239 meters."
  }
];
