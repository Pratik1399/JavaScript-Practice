/*
Includes and IndexOf
*/

let ingredients = [
	"water",
	"corn starch",
	"flour",
	"cheese",
	"brown sugar",
	"shrimp",
	"eel",
	"butter",
];

console.log(ingredients);

//includes returns true or false

if (ingredients.includes("flour")) {
	console.log("I AM GLUTEN FREE, I CANNOT EAT THAT!");
}

//indexOf returns an index (or -1 if not found)

if (ingredients.indexOf("shrimp") !== -1) {
	console.log("Sorry, I hate shrimp.");
}
