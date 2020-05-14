/*JS Loops*/
//Repeating code

/*Goals*/

//Write for loops

//Write for loops

//Avoid infinite loops!

//Iterate over arrays and objects

/*Loops*/

//Doing things repeatedly

//Loops allow us to repeat code

//a)Print "hello" 10 times

//b)Sum all numbers in an array

//There are multiple types:

//a)for loop

//b)while loop

//c)for...of loop

//d)for...in loop

/*For Loops*/

//Syntax:for([initialExpression];[condition];[incrementExpression])

for (let i = 1; i <= 10; i++) {
	//let i = 1; start at 1
	//i<=10 stop at 10
	//i++ add 1 each time
	console.log(i);
}

/*Another Example*/

for (let i = 50; i >= 0; i -= 10) {
	//let i = 50 Start i at 50
	//i >= 0 Subtract 10 each iteration
	//i -= 10 Keep going as long as i >= 0
	console.log(i);
}

//50
//40
//30
//20
//10
//0

/*Infinite Loops*/

//DO NOT RUN THIS CODE!

for (let i = 20; i >= 0; i++) {
	console.log(i);
}

//BAD!!!

/*For Loops + Arrays*/

//To loop over an array,start at 0 and continue to the last index(length-1)

const animals = ["lions", "tigers", "bears"];

for (let i = 0; i < animals.length; i++) {
	console.log(i, animals[i]);
}

//0 "lions"
//1 "tigers"
//2 "bears"

/*Nested Loops*/

let str = "LOL";

for (let i = 0; i <= 4; i++) {
	console.log("Outer:", i);
	for (let j = 0; j < str.length; j++) {
		console.log("Inner:", str[j]);
	}
}

/*While Loops*/

//A while loop continues to run as long as its test condition is true

let num = 0;

while (num < 10) {
	console.log(num);
	num++;
}

/*A Common Pattern*/

let targetNumber = Math.floor(Math.random() * 10);

let guess_1 = Math.floor(Math.random() * 10);

while (guess_1 !== targetNumber) {
	console.log(`Guessed ${guess_1}...Incorrect!`);
	guess_1 = Math.floor(Math.random() * 10);
}

console.log(`CORRECT! Guessed: ${guess_1} & target was: ${targetNumber}`);

/*Break Keyword*/
let targetNum = Math.floor(Math.random() * 10);

let guess = Math.floor(Math.random() * 10);

while (true) {
	guess = Math.floor(Math.random() * 10);
	if (guess === targetNum) {
		console.log(`CORRECT! Guessed: ${guess} & target was: ${targetNum}`);
		break;
	} else {
		console.log(`Guessed: ${guess}...Incorrect`);
	}
}

/*For...Of*/

//A nice and easy way of iterating over arrays(or other iterable objects)

//No Internet Explorer

//Syntax:for(variable of iterable){statement}

let subReddit = ["soccer", "popheads", "cringe", "books"];

for (let sub of subReddit) {
	//Do this for every item in subReddit array:
	console.log(`${sub}-www.reddit.com/r/${sub}`);
}

/*Nested*/

const magicSquare = [
	[2, 7, 6],
	[9, 5, 1],
	[4, 3, 8],
];

for (let row of magicSquare) {
	let sum = 0;
	for (let num of row) {
		sum += num;
	}
	console.log(`Row of ${row} sums to ${sum}`);
}

/*Objects!*/

//We can loop over the keys of an object,using Object.keys()

const movieReviews = {
	Amadeus: 10,
	Arrival: 9.5,
	Amelie: 8,
};

for (let movie of Object.keys(movieReviews)) {
	let score = movieReviews[movie];
	console.log(`I rated ${movie} ${score}/10`);
}

/*For...In*/

//Loop over the keys in an object

//Syntax:for(variable in object){statement}

/*For...In Example*/

const jeopardyWinnings = {
	regularPlay: 2522700,
	watsonChallenge: 300000,
	tournamentOfChampions: 500000,
	battleOfTheDecades: 100000,
};

let total = 0;

for (let key in jeopardyWinnings) {
	total += jeopardyWinnings[key];
}

console.log(`Ken Jenning's Total Winnings:$${total}`);

//Ken Jenning's Total Winnings : $3422700
