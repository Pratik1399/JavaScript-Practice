//Goals
/*
-Work with primitive types
-Understand let & const
-Use String Template Literals
-Work with common operators/methods
*/

//Primitive Types
/*
-Number
-String
-Boolean
-Null
-Undefined
-Technically there are two others:Symbol and BigInt
*/

//Running code in the console
/*
-We'll start by using the chrome console to quickly run code without any setup.(just for this section).
*/

//Numbers in JS

console.log("JS has One Number type", 50, 7, 3.874, 0.99);

console.log("Positive numbers!", 50, 7);

console.log("Negative numbers!", -45, -777.23444);

console.log("Whole number(integers)!", 50, 7);

console.log("Decimal numbers!", 3.874, 0.99, -777.23444);

//Simple Operations
/*
-We have all the basic math operations you would expect...
-//creates a comment,which JS will ignore 
*/

console.log("Addition =", 50 + 5);

console.log("Subtraction =", 90 - 1);

console.log("Multiplication =", 11111 * 7);

console.log("Division =", 400 / 25);

console.log("Modulo =", 27 % 2);

//NaN (Not A Number)
/* 
-NaN is a numeric value that represents something that is not...a number
*/

console.log("NaN", 0 / 0);

console.log("NaN", 1 + NaN);

//What Does This Evaluate To??

console.log("1.5 + 1.5 * 2 =", 1.5 + 1.5 * 2);

console.log("(10 % 6) **2 =", (10 % 6) ** 2);

console.log("200 + 0/0 =", 200 + 0 / 0);

//Variables
/* 
-Variables are like "labeled jars" for a value in JavaScript.
-We can store a value and give it a name, so that we can...
-recall it
-use it
-or change it later on.
*/

//Basic Syntax
/*
Make me a variable called "age" and give it the value of 55
*/

let someName = "value";

console.log(someName);

let age = 55;

console.log(age);

//Recall Variables,Update Values
/*
-This does not change the value stored stored in hens
-This does!
*/
let hens = 4;

console.log("A raccoon killed a hen :(", hens - 1);

console.log("Still", hens);

hens = hens - 1;

console.log("To actually change hens:", hens);

let roosters = 2;

console.log("hens + roosters =", hens + roosters);

//Const
/*
-const works just like let, except you CANNOT change the value
-NOT ALLOWED!
-YOU'RE IN TROUBLE!!
-I'M TELLING MOM!!!
*/

//const hens = 4;

// hens = 20;

console.log("Remove // gives Error", hens);

// const age = 17;

// age = age + 1;

console.log("Remove // gives Error", age);

//Why use const?
/*
-Once we cover Arrays & Objects,we'll see other situations where const makes sense over let. 
*/

const pi = 3.14159;

console.log("pi =", pi);

const daysInWeek = 7;

console.log("daysInWeek =", daysInWeek);

const minHeightForRide = 60;

console.log("minHeightForRide =", minHeightForRide);

//VAR
/*
-Before let & const, var was the only way of declaring variables.These days,there isn't really a reason to use it.
*/

var tripDistance = 7.4;

console.log("tripDistance =", tripDistance);

//What is the value of eggCount?
let eggCount = 42;

eggCount + 2;

console.log("eggCount", eggCount);

//What is the value of rating after this code runs?
const rating = 7.5;

// rating = 8;

console.log("Remove // gives Error", rating);

//What's the value of wind_speed?
//What's the minor issue with this code?
let wind_speed = 76;

wind_speed += 5;

wind_speed--;

console.log("wind_speed =", wind_speed);
