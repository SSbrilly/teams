const team = [
  {
    name: "Jonna",
    surname: "Geronimo",
    age: 26,
    city: "Milan",
    hobby: "Drawing",
    favoriteFood: "Coffee",
    favoriteVideoGame: "Legend of Zelda",
    favoriteFilm: "Parasite",
    favoriteBook: "Pride and Prejudice",
    petName: "",
  },

  {
    name: "Nicola",
    surname: "Pisani",
    age: 24,
    city: "Potenza",
    hobby: "Make music",
    favoriteFood: "Sushi",
    favoriteVideoGame: "Call of duty",
    favoriteFilm: "American Psycho",
    favoriteBook: "American Psycho",
    petName: "Sasha",
  },

  {
    name: "Antonino",
    surname: "Alampi",
    age: 23,
    city: "Reggio di Calabria",
    hobby: "",
    favoriteFood: "Sushi",
    favoriteVideoGame: "Dark Souls",
    favoriteFilm: "Harry Potter",
    favoriteBook: "",
    petName: "",
  },

  {
    name: "Simone",
    surname: "Sbrilli",
    age: 31,
    city: "Roma",
    hobby: "Bass player",
    favoriteFood: "Pizza",
    favoriteVideoGame: "Genshin Impact",
    favoriteFilm: "Neon Genesis Evangelion",
    favoriteBook: "Game OF Thrones",
    petName: "Dylan, Black, Lucky",
  },

  {
    name: "Mirka",
    surname: "Medaglini",
    age: 25,
    city: "Lucca",
    hobby: "Music",
    favoriteFood: "Pizza",
    favoriteVideoGame: "Super Mario Odyssey",
    favoriteFilm: "Eternal sunshine of the spotless mind",
    favoriteBook: "Il maestro e Margherita",
    petName: "Nikita",
  },
];

function sendName() {
  for (let i = 0; i < team.length; i++) {
    for (let j = i + 1; j < team.length; j++) {
      if (team[i].name === team[j].name) {
        console.log(team[i].name);
        break;
      } else {
        console.log("Same name not found");
        break;
      }
    }
    break;
  }
}
sendName();

function ageList() {
  team.sort((a, b) => a.age.toString().localeCompare(b.age.toString()));
  for (let i = 0; i < team.length; i++) {
    console.log(team[i].age);
  }
}
ageList();

team.sort((a, b) => a.name.localeCompare(b.name));
for (let i = 0; i < team.length; i++) {
  console.log(team[i].name);
}

function petNames (arr) {
    for (let i=0; i < arr.length; i++){
        if(arr[i].petName !== ""){
            console.log(arr[i].name +":", arr[i].petName)
        }
    }
}

petNames(team);