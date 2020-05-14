/*Other Useful Things*/

//A JS Assortment

/*New-ISH Features*/

//Arrow Functions

//String Template Literals

//Let & Const

//For...of

//For...in

//Exponent Operator

//String.includes()

//Array.includes()

//Object.values()

//Rest And Spread

//Destructuring

//Default Function Params

//Object Enhancements

//Classes

//Async Functions

/*Goals*/

//Work with rest and spread

//Add default function parameters

//Understand destructuring

/*Default Params*/

//The Old Way

function multiply(a, b) {
	b = typeof b !== "undefined" ? b : 1;
	return a * b;
}

multiply(7);

console.log(multiply(7));

multiply(7, 3);

console.log(multiply(7, 3));

//The new way

function multiply_1(a, b = 1) {
	return a * b;
}

multiply_1(4);

console.log(multiply_1(4));

multiply_1(4, 5);

console.log(multiply_1(4, 5));

/*Spread*/

//Spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

//For Function Calls

//Expands on iterable(array,string,etc.)into a list of arguments

const numbers = [9, 3, 2, 8];

Math.max(numbers);

console.log(Math.max(numbers));

Math.max(...numbers);

console.log(Math.max(...numbers));

//In Array Literals

//Create a new array using an existing array.Spreads the elements from one array into a new array.

const numbers1 = [1, 2, 3];

const numbers2 = [4, 5, 6];

[...numbers1, ...numbers2];

console.log([...numbers1, ...numbers2]);

["a", "b", ...numbers2];

console.log(["a", "b", ...numbers2]);

[...numbers1, ...numbers2, 7, 8, 9];

console.log([...numbers1, ...numbers2, 7, 8, 9]);

//In Object Literals

//Copies properties from one object into another object literal.

const feline = { legs: 4, family: "Felidae" };

const canine = { family: "Caninae", furry: true };

const dog = { ...canine, isPet: true };

console.log(dog);

const lion = { ...feline, genius: "Panthera" };

console.log(lion);

const catDog = { ...feline, ...canine };

console.log(catDog);

/*REST*/

//It looks like spread but it's not!

//The Arguments Object

//Available inside every function.

//It's an array-like object

//a)Has a length property

//b)Does not have array methods like push/pop

//Contains all the arguments passed to the function

//Not available inside of arrow functions!

function sumAll() {
	let total = 0;
	for (let i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}

sumAll(8, 4, 3, 2);

console.log(sumAll(8, 4, 3, 2));

sumAll(2, 3);

console.log(sumAll(2, 3));

/*Rest Params*/

//Collects all remaining arguments into an actual array

function sumAll_1(...numbers3) {
	let total = 0;
	for (let n of numbers3) total += n;
	return total;
}

sumAll_1(1, 2);

console.log(sumAll_1(1, 2));

sumAll_1(1, 2, 3, 4, 5);

console.log(sumAll_1(1, 2, 3, 4, 5));

/*Destructuring*/

//A short,clean syntax to "unpack":

//Values from arrays

//Properties from objects

//Into distinct variables

//Array Destructuring

const raceResults = ["Eluid Kipchoge", "Feyisa Lelisa", "Galen Rupp"];

const [gold, silver, bronze] = raceResults;

gold;

console.log(gold);

silver;

console.log(silver);

bronze;

console.log(bronze);

const [fastest, ...everyoneElse] = raceResults;

console.log(fastest);

console.log(everyoneElse);

//Object Destructuring

const runner = {
	first: "Eliud",
	last: "Kipchoge",
	country: "Kenya",
	title: "Elder of the Order of the Golden Heart of Kenya",
};

const { first, last, country } = runner;

first;

console.log(first);

last;

console.log(last);

country;

console.log(country);

//Param Destructuring

const fullName = ({ first, last }) => {
	return `${first} ${last}`;
};

const runner_1 = {
	first: "Eluid",
	last: "Kipchoge",
	country: "Kenya",
};

console.log(fullName(runner_1));
