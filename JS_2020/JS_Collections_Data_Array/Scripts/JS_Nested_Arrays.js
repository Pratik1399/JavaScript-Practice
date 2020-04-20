/*
Nested Arrays
*/

const animalPairs = [
	["doe", ["buck", "stag"]],
	["ewe", "ram"],
	["peahen", "peacock"],
];

console.log(animalPairs);

//To access 'ewe'

animalPairs[1][0];

console.log(animalPairs);

//To access 'buck'

animalPairs[0][1][0];

console.log(animalPairs);

//Updating a sub-array:

animalPairs[0][1].push("hart");

console.log(animalPairs);

//apparently some people call male deer 'harts'.  idk.
