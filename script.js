// console.log("Hello World!!!");

/*1)Variables and Data Types*/
// var firstName="John";
// console.log(firstName);

// var lastName="Smith";

// var age=28;

// var fullAge=true;
// console.log(fullAge);

// var job;
// console.log(job);

// job="Teacher";
// console.log(job);

//a)Variable Naming Rules

//Invalid
// var 3years=3;

// var &3years=3;

// var john/mark="John and Mark"

// var delete=23;

// var if=23;

//Valid
// var _3years=3;

// var $3years=3;

// var johnMark="John and Mark"

/*2)Variables Mutation and Type Coercion*/
// var firstName = "John";

// var age = 28;

//a)Type Coercion
// console.log(firstName + " " + age);

// var job, isMarried;

// job = "teacher";

//isMarried=false;

// isMarried = false;

// console.log(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     ".Is he Married? " +
//     isMarried
// );

//b)Variable Mutation
// age = "twenty eight";

// job = "driver";

// alert(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     ".Is he Married? " +
//     isMarried
// );

// var lastName = prompt(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     ".Is he Married? " +
//     isMarried
// );

// console.log(firstName + " " + lastName);

/*3)Basic Operators*/
//a)Math Operator

//1)First Way
// var yearJohn=2018-28;

// var yearMark=2018-33;

// console.log(yearJohn);

//2)Second Way
// var year=2018;

// var yearJohn=year-28;

// var yearMark=year-33;

//3)Third Way
// var year,yearJohn,yearMark,now;

// year=2020;

// now=2018;

// yearJohn=now-28;

// yearMark=now-33;

// console.log(yearJohn);

// console.log(now + 2);

// console.log(now * 2);

// console.log(now / 10);

//b)Logical Operator
// var now,ageJohn,ageMark,yearJohn,yearMark;

// now =2018;

// ageJohn=28;

// ageMark=33;

// yearJohn=now-28;

// yearMark=now-33;

// var johnOlder=ageJohn>ageMark;

// var johnOlder=ageJohn<ageMark;

// console.log(johnOlder);

//c)typeof Operator
// console.log(typeof johnOlder);

// console.log(typeof ageJohn);

// console.log(typeof 'Mark is Older than John');

// var x;

// console.log(typeof x);

/*4)Operator Precedence*/
// var now=2018;

// var yearJohn=1989;

// var fullAge=18;

//a)Multiple Operators
// var isFullAge=now-yearJohn>=fullAge;

// console.log(isFullAge);

//b)Grouping
// var ageJohn=now - yearJohn;

// var ageMark=35;

// var average=ageJohn+ageMark/2;

// var average=(ageJohn+ageMark)/2;

// console.log(average);

//c)Multiple Assignments
// var x,y;

// x=(3+5)*4-6;//8*4-6//32-6//26

// console.log(x);

// x=y=(3+5)*4-6;

// console.log(x,y);

//d)More Operators
// x=x*2;

// console.log(x);

// x*=2;

// console.log(x);

// x+=10;

// console.log(x);

// x=x+1;

// x+=1;

// x++;

// console.log(x);

// x--;

// console.log(x);

/*5)Coding Challenge*/
//Question
//1)Mark and John are trying to compare their BMI(Body Mass Index),which is calculated using formula:
//(mass in kg and height in meter)
//a)Store Mark's and John's mass and height in variables.
//b)Calculate both their BMI's
//c)Create a boolean variable containing information about whether Mark has a Higher BMI than John
//d)Print a string to the console containing the variable from step 3(Something like "Is Mark's BMI higher than John's?true")

//Solution
// var massMark = 78; //kg

// var heightMark = 1.69; //meters

// var massJohn = 92;

// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);

// var BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);

// var markHigherBMI = BMIMark > BMIJohn;

// console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

/*If/else Statement*/
// var firstName = "John";

// var civilStatus = "Single";

// if (civilStatus === "married") {
//  console.log(firstName + " is married!");
// } else {
// console.log(firstName + " will hopefully marry soon :)");
// }

// var isMarried = true;

// if (isMarried) {
//  console.log(firstName + " is Married!");
// } else {
// console.log(firstName + " will hopefully marry soon:)");
// }

// var massJohn = 78;

// var heightMark = 1.69; //meters

// var massMark = 92;

// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);

// var BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is higher than John's");
// } else {
//   console.log("John's BMI is higher than Mark's");
// }

/*Boolean Logic*/
// var firstName = "John";

// var age = 16;

// if (age < 13) {
//   console.log(firstName + " is a boy.");
// } else {
//   console.log(firstName + " is a man.");
// }

//1)And Operator

//var a   b

//a)true  true  true

//b)false false false

//c)false true  false

//d)true  false false

//2)OR Operator

//var a   b

//a)true  true  true

//b)false true  true

//c)true  false true

//d)false false false

//3)NOT Operator

//var a   !a

//a)true  false

//b)false  true

// var firstName = "John";

// var age = 16;

// var age = 20;

// if (age < 13) {
//   console.log(firstName + " is a boy.");
// } else if (age >= 30 && age < 20) {
//   console.log(firstName + " is a teenager.");
// } else if (age > 20 && age < 30) {
//   console.log(firstName + " is a young man.");
// } else {
//   console.log(firstName + " is a man.");
// }

/*The Ternary Operator and Switch Statements*/

//a)Ternary Operator
// var firstName = "John";

// var age = 22;

// age >= 18
//   ? console.log(firstName + " drinks beer.")
//   : console.log(firstName + " drinks juice");

// var drink = age >= 18 ? "beer" : "juice";

// console.log(drink);

// if (age >= 18) {
//   var drink = "beer";
// } else {
//   var juice = "juice";
// }

//b)Switch Statements

// var job = "teacher";

// var job = "instructor";

// switch (job) {
//   case "teacher":
//   case "instructor":
//     console.log(firstName + " teaches kids how to code.");
//     break;
//   case "driver":
//     console.log(firstName + " drives an uber in Lisbon.");
//     break;
//   case "designer":
//     console.log(firstName + " designs beautiful websites.");
//     break;
//   default:
//     console.log(firstName + " does something else.");
// }

// var age = 10;

// var age=56;

// switch (true) {
//   case age < 13:
//     console.log(firstName + " is a boy.");
//     break;
//   case age >= 30 && age < 20:
//     console.log(firstName + " is a teenager.");
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + " is a young man.");
//     break;
//   default:
//     console.log(firstName + " is a man.");
// }

/*Truthy and Falsy values and Equality Operator*/

//1)Truthy values:NOT falsy values.

//2)Falsy values:undefined,null,0,'',NaN;

//var height;

//var height=23;

//var height=0;

//var height = 233;

//var height='twenty';

//var height = '';

// var height = 23;

// if (height || height === 0) {
//   console.log("Variable is defined");
// } else {
//   console.log("Variable has NOT been defined");
// }

//b)Equality Operator
// if (height == "23") {
//   console.log("The == operator does type coercion!");
// }

//(23 == '23')
//true

//(23 === '23')
//false

// if (height === "23") {
//   console.log("The === operator does type coercion!");
// }
