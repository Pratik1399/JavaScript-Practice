/*
Arrays & Objects
*/

//Collections of Data

/*
Goals
*/

//Work with Arrays

//Write Object Literals

//Understand Reference Types

//Use common Array/Object methods

/*
Arrays
*/

//Ordered collections of values.

//List of comments on IG post.

//Collection of levels in a game.

//Songs in a playlist.

/*
Const and Arrays
*/

//You'll often see people use const with arrays.

/*
Values can change
*/

//As long as the reference remains the same

const myEggs = ["brown", "brown"];

console.log(myEggs);

myEggs.push("purple");

console.log(myEggs);

myEggs[0] = "green";

console.log(myEggs);

//myEggs = ["blue","pink"];

//NO!

/*
Nested Arrays
*/

//We can store arrays inside other arrays!

const colors_2 = [
	["red", "crimson"],
	["orange", "dark orange"],
	["yellow", "golden rod"],
	["green", "olive"],
	["blue", "navy blue"],
	["purple", "orchid"],
];

console.log(colors_2);

const board = [
	["0", null, "X"],
	[null, "X", "0"],
	["X", "0", null],
];

console.log(board);
