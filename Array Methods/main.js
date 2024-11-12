//Push method
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('Wash cars', 'Eat breakfast');
console.log(chores);

//pop method
const chore = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chore.pop(4);
console.log(chore);

//more array methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift(0);
// console.log(groceryList);

groceryList.unshift('popcorn');
// console.log(groceryList);
// console.log(groceryList.slice(1, 4));
// console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex)