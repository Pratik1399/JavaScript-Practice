/*Variables and data types*/
/*
var firstName='Pratik';
console.log(firstName);

var lastName='Ghadge';
var age=28;

var fullAge=true;
console.log(fullAge);

var job;
console.log(job);

//Variable naming rules
var _3years=3;
var johnMark='John and Mark';
var if=23;
*/

/*Variable mutation and type coercion*/
/*var firstName='John';
var age=28;

//Type coercion
console.log(firstName+' '+age);

var job,isMarried;
job='teacher';
isMarried=false;

console.log(firstName+' is a '+job+'.Is he Married? '+isMarried);

//Variable Mutation
age='twenty eight';
job='driver';

alert(firstName+' is a '+job+'.Is he Married? '+isMarried);

var lastName=prompt(firstName+' is a '+job+'.Is he Married? '+isMarried);
*/

/*Basic Operators*/
/*
var year,yearPratik,yearMark;
now=2018;
agePratik=28;
ageMark=33;

//Math Operators
yearPratik=now-agePratik;
yearMark=now-ageMark;

console.log(yearPratik);
console.log(now+2);
console.log(now*2);
console.log(now/10);

//Logical Operators
var pratikOlder=agePratik<ageMark;
console.log(pratikOlder);

//typeof Operator
console.log(typeof pratikOlder);
console.log(typeof agePratik);
console.log(typeof 'Mark is older than Pratik');
var x;
console.log(typeof x);
*/
/*Operator precedence*/

// var now=2018;
// var yearJohn=1989;
// var fullAge=18;

// //Multiple Operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// //Grouping
// var ageJohn=now - yearJohn;
// var ageMark=35;
// var average=(ageJohn+ageMark)/2;
// console.log(average);

// //Multiple assignments
// var x,y
// x=y=(3+5)* 4-6;
// console.log(x,y);

// //More Operators
// x*=2;
// console.log(x);
// x+=2;
// console.log(x);
// x--;
// console.log(x);

/*Coding Chanllenge 1*/
// var massMark=78; //kg
// var heightMark=1.69;

// var massJohn=92;
// var heightJohn=1.95;

// var BMIJohn=massJohn/(heightJohn * heightJohn);
// var BMIMark=massMark/(heightMark * heightMark);
// console.log(BMIJohn,BMIMark);
// var markHigherBMI=BMIMark>BMIJohn;
// console.log('Is Mark\'s BMI higher than John\'s' + markHigherBMI);

/*if/else statement*/
// var firstName = "John";
// var civilStatus = "Single";

// if (civilStatus == "Married") {
//   console.log(firstName + " is married!");
// } else {
//   console.log(firstName + " will hopefully marry soon:)");
// }

// var isMarried = true;
// if (isMarried) {
//   console.log(firstName + " is married!");
// } else {
//   console.log(firstName + " will hopefully marry soon:)");
// }

// var massMark = 78; //kg
// var heightMark = 1.69;

// var massJohn = 92;
// var heightJohn = 1.95;

// var BMIJohn = massJohn / (heightJohn * heightJohn);
// var BMIMark = massMark / (heightMark * heightMark);

// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is higher than John's BMI.");
// } else {
//   console.log("John's BMI is higher than Mark's BMI.");
// }

/*Boolean Logic*/
// var age = 20;
// var firstName = "John";

// if (age < 13) {
//   console.log(firstName + " is a boy.");
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + " is a teenager boy.");
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + " is a young man.");
// } else {
//   console.log(firstName + " is a man.");
// }

/*Ternary Operator and Switch Statements*/
var firstName = "John";
var age = 14;

age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

// if (age >= 18) {
//   var drink = "beer";
// } else {
//   var drink = "juice";
// }

//Switch Statement
// var job = "instructor";
// switch (job) {
//   case "teacher":
//   case "instructor":
//     console.log(firstName + " teaches kids how to code.");
//     break;
//   case "driver":
//     console.log(firstName + " drives an Uber in Lisbon.");
//     break;
//   case "designer":
//     console.log(firstName + " designs beautiful websites.");
//     break;
//   default:
//     console.log(firstName + " does something else.");
//     break;
// }

// age=17;
// switch (true) {
//   case age < 13:
//     console.log(firstName + " is a boy.");
//     break;
//   case age >= 13 && age < 28:
//     console.log(firstName + " is a teenager.");
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + " is a young man.");
//     break;
//   default:
//     console.log(firstName + " is a man.");
//     break;
// }

/*Truthy and Falsy values and equality operator*/
//Falsy Values:undefined,null,0,'',NaN
//Truthy Values:NOT Falsy Values
var height;
height = 23;

if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable has NOT been defined");
}

//Equality Operator
if (height == "23") {
  console.log("The == operator does type coercion!");
}
