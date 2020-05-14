/*Functions*/

//The last "big" topic

//Write valid functions

//Write functions with arguments

//Compare function expressions & function statements

//Write a bunch of functions!

/*Functions*/

//Functions allow us to write reusable,modular code

//We define a "chunk" of code that we can then execute at a later point.

//We use them ALL THE TIME

//2 Step Process

//Define-->Run

/*Define*/

//Syntax:function funcName(){//do something}

function grumpUs() {
	console.log("ugh...you again...");
	console.log("for the last time");
	console.log("LEAVE ME ALONE!!!");
}

/*Run*/

//funcName(); //run once

//funcName(); //run again!

grumpUs();
//ugh...you again...
//for the last time...
//LEAVE ME ALONE!!!

grumpUs();
//ugh...you again...
//for the last time...
//LEAVE ME ALONE!!!

/*Arguments*/

/*Inputs*/

//Right now,our simple functions accept zero inputs.They behave the same way every time.

/*No Inputs*/

// grumpUs();

// grumpUs();

// greet(); --> "Hi!"

// greet(); --> "Hi!"

/*Arguments*/

//We can also write functions that accept inputs,called arguments

// function greet("Tim"){
//   console.log("Hi Tim!");
// }

// function greet("Anya"){
//   console.log("Hi Anya!")
// }

/*One More*/

// avg(20, 25);

// avg(3, 2, 5, 6);

//We've seen this before

//No Inputs

"hello".toUpperCase();

//Arguments!

//Different inputs...

"hello".indexOf("h");

//Different outputs...

"hello".indexOf("o");

/*Greet Take 2*/

function greet(person) {
	console.log(`Hi,${person}!`);
}

greet("Arya");

greet("Ned");

/*2 Arguments!*/

function findLargest(x, y) {
	if (x > y) {
		console.log(`${x} is larger!`);
	} else if (x < y) {
		console.log(`${y} is larger!`);
	} else {
		console.log(`${x} and ${y} are equal!`);
	}
}

findLargest(-2, 77);

findLargest(33, 33);

/*Return*/

//Built-in methods return values when we call them.We can store those values:

const yell = "I will end you".toUpperCase();

yell;

//"I WILL END YOU"

const idx = ["a", "b", "c"].indexOf("c");

idx;

//2

/*No Return!*/

//Our functions print values out, but do NOT return anything

function add(x, y) {
	console.log(x + y);
}

const sum = add(10, 16);

sum;

//undefined

/*First Return!*/

//Now we can capture a return value in a variable!

function add(x, y) {
	return x + y;
	//Return !
}

const sum = add(10, 16);

sum;

//26

const answer = add(100, 200);

answer;

//300

/*Return*/

//The return statement ends function execution AND specifies the value to be returned by that function
