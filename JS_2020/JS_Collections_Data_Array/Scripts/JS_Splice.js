/*
Splice
*/

let animals_1 = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

console.log(animals_1);

//splice(startIdx, deleteCount, itemsToInsert);

// INSERTING with SPLICE

// 'at index 1, delete 0 items and insert "octopus"'

animals_1.splice(1, 0, "octopus");

console.log(animals_1);

//["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// DELETING with SPLICE

//'at index 5, delete 2 items'

animals_1.splice(5, 2);

console.log(animals_1);

//["shark", "octopus", "salmon", "whale", "bear"]

// REPLACING with SPLICE

//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'

animals_1.splice(3, 2, "orca", "grizzly");

console.log(animals_1);

// ["shark", "octopus", "salmon", "orca", "grizzly"]
