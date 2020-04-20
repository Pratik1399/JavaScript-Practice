/*
Slice
*/

let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

console.log(animals);

let swimmers = animals.slice(0, 3);

console.log(swimmers);

let mammals = animals.slice(2, 4);

console.log(mammals);

//One option:

// let reptiles = animals.slice(4, 6);

// Another option:

let reptiles = animals.slice(4);

console.log(reptiles);

let quadruped = animals.slice(-3);

console.log(quadruped);
