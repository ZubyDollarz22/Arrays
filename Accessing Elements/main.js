//Creating arrays

const hobbies = ['ZubyDollarz', 'Legit gee', 'Dollarz Shoehub'];
console.log(hobbies);

//Accessing Elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

//Updating arrays
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

//Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils)

//Length property
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);