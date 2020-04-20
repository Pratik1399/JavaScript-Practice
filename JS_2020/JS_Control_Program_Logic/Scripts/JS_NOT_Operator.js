/*
NOT(!)
*/

//!expressions returns true if the expression is false

console.log(!null);

//true

console.log(!(0 === 0));

//false

console.log(!(3 <= 4));

//false

// ==================
// EXAMPLE 1
// ==================
let loggedInUser1;

// If there isn't a logged in user...
if (!loggedInUser1) {
	console.log("GET OUT OF HERE!");
}

// ==================
// EXAMPLE 2
// ==================
// WE ONLY HAVE GRAPE AND CHERRY FLAVORS!
let flavor = "watermelon";

//ONE WAY OF WRITING THIS:
if (flavor !== "grape" && flavor !== "cherry") {
	console.log("WE DONT HAVE THAT FLAVOR!");
}
// ANOTHER WAY:
if (!(flavor === "grape" || flavor === "cherry")) {
	console.log("WE ONLY HAVE GRAPE AND CHERRY!");
}
