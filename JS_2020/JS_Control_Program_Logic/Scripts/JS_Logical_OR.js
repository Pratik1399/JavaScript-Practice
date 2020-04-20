/*
OR (||)
*/

//pipe character above enter key

//If one side is true,the whole thing is true

//only one side needs to be true

console.log(1 !== 1 || 10 === 10);

//true

console.log(10 / 2 === 5 || null);

//true

console.log(0 || undefined);

//false

let age1 = 76;

if (age1 < 6 || age1 >= 65) {
	console.log("You get in for free!");
} else {
	console.log("That will be $10 please");
}

//Example 1
let age2 = 77;

if (age2 < 6 || age2 >= 65) {
	console.log("YOU GET IN FOR FREE");
} else {
	console.log("YOU MUST PAY!");
}

// EXAMPLE 2
// WE CAN USE MULTIPLE OR's:
let color = "violet";
if (color === "purple" || color === "lilac" || color === "violet") {
	console.log("GREAT CHOICE!");
}
