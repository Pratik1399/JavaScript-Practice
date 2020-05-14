/*Array Callback Methods*/

//Arrays come with many built-in methods that accept callback functions

//Now that we've covered callbacks,we can learn these methods!

//Super Useful!

/*Goals*/

//Use the new arrow function syntax

//Understand and use these methods:

//forEach

//map

//filter

//find

//reduce

//some

//every

/*Foreach*/

//Accepts a callback function.

//Calls the function once per element in the array.

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];

numbers.forEach(function (n) {
	console.log(n * n);
	//prints:81,64,49,36,25,16,9,4,1
});

numbers.forEach(function (el) {
	if (el % 2 === 0) {
		console.log(el);
	}
});

/*Map*/

//Created a new array with the results of calling a callback on every element in the array

const texts = ["rofl", "lol", "omg", "ttyl"];

const caps = texts.map(function (t) {
	return t.toUpperCase();
});

texts;

//["rofl","lol","omg","ttyl"]

caps;

//["ROFL","LOL","OMG","TTYL"]

/*Arrow Functions*/

//"syntactically compact alternative" to a regular function expression

const square = (x) => {
	return x * x;
};

const sum = (x, y) => {
	return x + y;
};

//parens are optional if there's only one parameter:

const square = (x) => {
	return x * x;
};

//Use empty parens for functions w/ no parameters:

const singASong = () => {
	return "LA LA LA LA LA LA";
};

/*Implicit Return*/

//All these functions do the same thing:

const isEven = function (num) {
	//regular function expression
	return num % 2 === 0;
};
const isEven = (num) => {
	//arrow function with parens around param
	return num % 2 === 0;
};
const isEven = (num) => {
	//no parens around param
	return num % 2 === 0;
};
const isEven = (num) => {
	//implicit return
	num % 2 === 0;
};

const isEven = (num) => num % 2 === 0; //one-liner implicit return

/*Find*/

//Returns the value of the first element in the array that satisfies the provided testing function.

let movies = [
	"The Fantastic Mr.Fox",
	"Mr. and Mrs. Smith",
	"Mrs. Doubtfire",
	"Mr. Deeds",
];

let movie = movies.find((movie) => {
	return movie.includes("Mrs.");
});

//"Mr. and Mrs. Smith"

let movie2 = movies.find((m) => m.indexOf.length("Mrs") === 0);

//"Mrs. Doubtfire"

/*Filter*/

//Create a new array with all elements that pass the test implemented by the provided function

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const odds = numbers.filter((n) => {
	//if it returns true, n is added to the filtered array
	return n % 2 === 1;
	//our callback returns true or false
});

//[9,7,5,3,1]

const smallNumbers = numbers.filter((n) => n < 5);

//[4,3,2,1]

/*Every*/

//tests whether all elements in the array pass the provided function.It returns a Boolean value.

const words = ["dog", "dig", "log", "bag", "wag"];

words.every((word) => {
	return word.length === 3;
});

words.every((word) => word[0] === "d");

//false

words.every((w) => {
	let last_letter = w[w.length - 1];
	return last_letter === "g";
});

//true

/*Some*/

//Similar to every,but returns true if ANY of the array elements pass the test function

const words = ["dog", "jello", "log", "cupcake", "bag", "wag"];

//Are there any words longer than 4 characters ?

words.some((word) => {
	return word.length > 4;
});

//true

//Do any words start with "Z"?

words.some((word) => word[0] === "Z");

//false

//Do any words contain "cake"?

words.some((w) => includes("cake"));

//true

/*Reduce*/

//Executes a reducer function on each element of the array,resulting in a single value.

/*Summing an Array*/

[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
});

/*Finding Max Val*/

let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73];

const topScore = grades.reduce((max, currVal) => {
	if (currVal > max) return currVal;
	return max;
});

topScore;

//99

//A shorter option w/ Math.max & implicit return

const topScore = grades.reduce((max, currVal) => {
	Math.max(max, currVal);
});

[4, 5, 6, 7, 8].reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
});

//Returns:30

[4, 5, 6, 7, 8].reduce((accumulator, currValue) => {
	return accumulator + currValue;
}, 100);

//Returns:130

/*Tallying*/

const votes = ["y", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"];

const tally = votes.reduce((tally, note) => {
	tally[vote] = (tally[vote] || 0) + 1;
	return tally;
}, {});

//Initial Value:{}

tally;

//{y:7,n:6}

/*Sort Point.2*/

//arr.sort(compareFunc(a,b))

//If compareFunc(a,b) returns less than 0

//Sort a before b

//If compareFunc(a,b) returns 0

//Leave a and b unchanged with respect to each other

//If compareFunc(a,b) returns greater than 0

//Sort b before a

/*Sort*/

const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];

prices.sort();

prices.sort((a, b) => a - b);

prices.sort((a, b) => b - a);
