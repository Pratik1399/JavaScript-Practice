/*
Truthy and Falsy Values
*/

//All values have an inherent truthy values or falsy boolean value

//Falsy values:

//false

//0

//""(empty string)

//null

//undefined

//NaN

//Everything else is truthy!

// FALSY:

let loggedInUser = null;

// TRUTHY:

// let loggedInUser = 'Thomas123';

if (loggedInUser) {
	console.log("YOU ARE LOGGED IN!");
} else {
	console.log("PLEASE LOG IN!");
}
