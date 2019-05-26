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

/*6)If/else Statement*/
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

/*7)Boolean Logic*/
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

/*8)The Ternary Operator and Switch Statements*/

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

/*9)Truthy and Falsy values and Equality Operator*/

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

/*10)Coding Challenge*/
//John and Mike both play basketball in different teams.
//In the latest 3 games,John's team scored 89,120 and 103 points while Mike's team scored 116,94 and 123 points.
//1)Calculate the average score for each team.
//2)Decide which teams wins in average (highest average score),and print thee winner to the console.
//3)Then change the scores to show different winners.
//4)Don't forget to take into account there might be a draw(the same average score).
//5)EXTRA:Mary also plays basketball,and her team scored 97,134 and 105 points.
//6)Like before,log the average winner to the console.
//7)HINT:You will need the && operator to take the decision.
//8)If you can't solve this one,just watch the solution,it's no problem :)
//9)Like before,change the scores to generate different winners,keeping in mind there might be draws.

//Solution

// var scoreJohn = (89 + 120 + 103) / 3;

// var scoreMike = (116 + 94 + 123) / 3;

// var scoreMary = (97 + 134 + 105) / 3;

// console.log(scoreJohn, scoreMike, scoreMary);

// if (scoreJohn > scoreMike) {
//     console.log("John\'s team wins with " + scoreJohn + " points");
// } else if (scoreMike > scoreJohn) {
//     console.log("Mike\'s team wins with " + scoreMike + " points");
// } else {
//     console.log("There is a draw");
// }

// if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
//   console.log("John's team wins with " + scoreJohn + " points");
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//   console.log("Mike's team wins with " + scoreMike + " points");
// } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//   console.log("Mary's team wins with " + scoreMary + " points");
// } else {
//   console.log("There is a draw");
// }

/*11)Functions*/

// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);

// var ageMike = calculateAge(1948);

// var ageJane = calculateAge(1969);

// console.log(ageJohn, ageMike, ageJane);

// function yearUntilRetirement(year,firstName){
//   var age = calculateAge(year);
//   var retirement= 65 - age;
//   console.log(firstName + ' retires in ' + retirement + ' years.');
// }

// yearUntilRetirement(1990,'John');

// yearUntilRetirement(1948,'Mike');

// yearUntilRetirement(1969,'Jane');

// function yearUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(firstName + " retires in " + retirement + " years.");
//   } else {
//     console.log(firstName + " is already retired.");
//   }
// }

// yearUntilRetirement(1990, "John");

// yearUntilRetirement(1948, "Mike");

// yearUntilRetirement(1969, "Jane");
