/*
Logical Operators
*/

//&& AND

//|| OR

//! NOT

/*
AND(&&)
*/

//Both sides must be true in order for the whole thing to be true

console.log(1 <= 4 && "a" === "a");

//true

console.log(9 > 10 && 9 >= 9);

//false

console.log("abc".length === 3 && 1 + 1 === 4);

//false

let password1 = "taco tuesday";

if (password1.length >= 6 && password.indexOf("") === -1) {
	console.log("Valid Password!");
} else {
	console.log("Invalid Password!");
}

// EXAMPLE 1

let password2 = "chicken Gal";

if (password2.length >= 8 && password.indexOf(" ") === -1) {
	console.log("VALID PASSWORD");
} else {
	console.log("INVALID PASSWORD");
}

// EXAMPLE 2

// Number must be between 1 and  10

let num1 = 1;

if (num1 >= 1 && num1 <= 10) {
	console.log("Number is between 1 and 10");
} else {
	console.log("Please guess a number between 1 and 10");
}
