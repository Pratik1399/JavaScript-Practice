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

/*12)Function Statements and Expressions*/

//a)Function Declaration

//function whatDoYouDo(job,firstName);

//b)Function Expression
// var whatDoYouDo = function(job, firstName) {
//   switch (job) {
//     case "teacher":
//       return firstName + " teaches kids how to code";
//     case "driver":
//       return firstName + " drives a cab in Lisbon";
//     case "designer":
//       return firstName + " design beautiful websites";
//     default:
//       return firstName + " does something else";
//   }
// };

// console.log(whatDoYouDo("teacher", "John"));

// console.log(whatDoYouDo("designer", "Jane"));

// console.log(whatDoYouDo("retired", "Mark"));

//c)Chrome Console
// 2 + 3;

// whatDoYouDo("teacher", "John");

// typeof 23;

// if (true) {
//   console.log(23);
// }

/*13)Arrays*/
//a)Initiliaze Array

// var names=['John','Mark','Jane'];

// var years= new Array(1990,1969,1948);

// console.log(names[0]);

// console.log(names);

// console.log(names.length);

// console.log(names[2]);

//b)Mutate Array

// names[1]="Ben";

// names[5]="Mary";

// names[names.length]="Max";

// console.log(names);

//c)Different Data Types

// var john = ["John","Smith",1990,"teacher",false];

// john.push("blue");

// john.unshift("Mr.");

// console.log(john);

// john.pop();

// john.pop();

// john.shift();

// console.log(john);

// console.log(john.indexOf(1990));

// console.log(john.indexOf(23));

// var isDesigner= john.indexOf('designer')===-1 ? "John is NOT a designer":"John is a designer";

// console.log(isDesigner);

/*14)Coding Challenge*/
//John and his family went on a holiday and went to 3 different restaurants.
//The billss were $124.
//$48 and $268
//To tip the waiter a fair amount.
//John created a simple tip calculator (as a function).
//He likes to tip 20% of the bill when the bill is less than $50,15% when the bill is between $50 and $200,and 10% if the bill is more than $200.
//In the end,John would like to have 2 Arrays.
//1)Containing all three tips (one for each bill).
//2)Containing all three final paid amounts (bill tip).
//(NOTE:To calculate 20% of a value,simply multiple if with 20/100-0.2).

//Coding Solution

// function tipCalculator(bill) {
//   var percentage;
//   if (bill < 50) {
//     percentage = 0.2;
//   } else if (bill >= 50 && bill < 200) {
//     percentage = 0.15;
//   } else {
//     percentage = 0.1;
//   }
//   return percentage * bill;
// }

// console.log(tipCalculator(100));

// console.log(tipCalculator(300));

// console.log(tipCalculator(10));

// var bills = [124, 48, 268];

// var tips = [
//   tipCalculator(bills[0]),
//   tipCalculator(bills[1]),
//   tipCalculator(bills[2])
// ];

// console.log(tips);

// var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(finalValues);

// console.log(tips, finalValues);

/*15)Objects and Properties*/

//a)Object Literal
// var john={
//     firstName:'John',
//     lastName:'Smith',
//     birthYear:1990,
//     family:["Jane","Mark","Bob","Emily"],
//     job:"teacher",
//     isMarried:false
// };

// console.log(john);

// console.log(john.firstName);

// var x ='birthYear';

// console.log(john[x]);

// john.job = 'designer';

// john['isMarried']=true;

// console.log(john);

//b)New Object
// var jane=new Object();

// jane.firstName = 'Jane';

// jane.birthYear = 1969;

// jane["lastName"]="Smith";

// console.log(jane);

/*16)Objects and Methods*/

// var john={
//     firstName:'John',
//     lastName:'Smith',
//     birthYear:1990,
//     family:["Jane","Mark","Bob","Emily"],
//     job:"teacher",
//     isMarried:false,
//     calcAge:function(birthYear){
//         return 2018 - birthYear;
//     },
//     calcAge1:function(){
//         return 2018 - this.birthYear;
//     },
//     calcAge2:function(){
//         this.age = 2018 - this.birthYear;
//     }
// };

// console.log(john.calcAge(1990));

// console.log(john.calcAge1());

// john.calcAge2();

// console.log(john);

/*17)Coding Challenge*/
//Let's remember the first coding challenge where Mark and John compared their BMIs.
//Lets now implement the same functionality with objects and methods.
//1)For each of them,create an object with properties for their full name,mass,and height.
//2)In the end,log to the console who has the highest BMI,together with the full name and respective BMI.
//Don't forget they might have the same BMI.
//Remember BMI = mass /height^2 =mass/(height * height).(mass in kg and height in meter).

//Coding Solution

// var john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// var mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// console.log(john);

// console.log(mark);

// john.calcBMI();

// console.log(john);

// mark.calcBMI();

// console.log(mark);

// console.log(john, mark);

// if (john.bmi > mark.bmi) {
//   console.log(john.fullName + " has a higher BMI of " + john.bmi);
// } else if (john.bmi < mark.bmi) {
//   console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
// } else {
//   console.log("They have same BMI");
// }

// if (john.calcBMI() > mark.calcBMI()) {
//   console.log(john.fullName + " has a higher BMI of " + john.bmi);
// } else if (john.bmi < mark.bmi) {
//   console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
// } else {
//   console.log("They have same BMI");
// }

/*18)Loops and Iterations*/

//a)for loop

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

//i=0,0<10 true,log i to console,i++
//i=1,1<10 true,log i to console,i++
//i=2,2<10 true,log i to console,i++
//i=3,3<10 true,log i to console,i++
//i=4,4<10 true,log i to console,i++
//i=5,5<10 true,log i to console,i++
//i=6,6<10 true,log i to console,i++
//i=7,7<10 true,log i to console,i++
//i=8,8<10 true,log i to console,i++
//i=9,9<10 true,log i to console,i++
//i=10,10<10 false,exit the loop!

// for (var i = 0; i < 20; i++) {
//   console.log(i);
// }

// for (var i = 1; i < 20; i++) {
//   console.log(i);
// }

// for (var i = 1; i < 20; i += 2) {
//   console.log(i);
// }

// var john = ["john", "Smith", 1990, "designer", false];

// for(var i=0;i<john.length;i++){
//     console.log(john[i]);
// }

//b)while loop
//var john = ["john", "Smith", 1990, "designer", false,"blue"];

// var i = 0;

// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

//c)continue and break statements
// var john = ["john", "Smith", 1990, "designer", false,'blue'];

// for(var i =0;i<john.length;i++){
//     if(typeof john[i] !== 'string'){
//         continue;
//     }
//     console.log(john[i]);
// }

// for(var i =0 ;i<john.length;i++){
//     if(typeof john[i] !== 'string'){
//         break;
//     }
//     console.log(john[i]);
// }

//d)Looping backwards

// var john = ["john", "Smith", 1990, "designer", false, "blue"];

// for (var i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }

/*19)Coding Challenge*/
//Remember the tip calculator challenge? let's create a more advanced version using everything we learned!
//This time,John and his family went to 5 different restaurants.
//The bills were $124,$48,$268,$280 and $42.
//John likes to tip 20% of the bill when the bill is less than $50,15% when the bill is between $50 and $200,and 10% if the bill is more than $200.

//Implement a tip calculator using objects and loops:
//1)Create an object with an array for the bill values.
//2)Add a method to calculate the tip.
//3)This method should include a loop to iterate over all the paid bills and do the tip calculations.
//4)As an output,create
//1)A new array containing all tips, and
//2)An array containing final paid amounts (bill + tip).
//HINT:Start with two empty arrays [] as properties and then fill them up in the loop
//EXTRA AFTER FINISHING:Mark's family also went on a holiday,going to 4 different restaurants.
//The bills were $77,$375,$110,and $45.
//Mark likes to tip 20% of the bill when the bill is less than $100,10% when the bill is between $100 and $300,and 25% if the bill is more than $300.(different than john).
//5)Implement the same functionality as before,this time using Mark's tipping rules.
//6)Create a function(not a method) to calculate the average of a given array of tips.
//HINT:Loop over the array,and in each iteration store the current sum in a variable (starting from 0).
//After you have the sum of the array,divide it by the number of elements in it (that's how you calculate the average).
//7)Calculate the average tip for each family
//8)Log to the console which family paid the highest tips on average.

//Coding Solution
// var john = {
//   fullName: "John Smith",
//   bills: [124, 48, 268, 180, 42],
//   calcTips: function() {
//     this.tips = [];
//     this.finalValues = [];
//     for (var i = 0; i < this.bills.length; i++) {
//       //Determine percentage based on tipping rules
//       var percentage;
//       var bill = this.bills[i];
//       if (bill < 50) {
//         percentage = 0.2;
//       } else if (bill >= 50 && bill < 200) {
//         percentage = 0.15;
//       } else {
//         percentage = 0.1;
//       }
//       //Add results to the corresponding arrays
//       this.tips[i] = bill * percentage;
//       this.finalValues[i] = bill + bill * percentage;
//     }
//   }
// };
// john.calcTips();

// console.log(john);

// var mark = {
//   fullName: "Mark Miller",
//   bills: [77, 475, 110, 45],
//   calcTips: function() {
//     this.tips = [];
//     this.finalValues = [];
//     for (var i = 0; i < this.bills.length; i++) {
//       //Determine percentage based on tipping rules
//       var percentage;
//       var bill = this.bills[i];
//       if (bill < 50) {
//         percentage = 0.2;
//       } else if (bill >= 100 && bill < 300) {
//         percentage = 0.1;
//       } else {
//         percentage = 0.25;
//       }
//       //Add results to the corresponding arrays
//       this.tips[i] = bill * percentage;
//       this.finalValues[i] = bill + bill * percentage;
//     }
//   }
// };

// mark.calcTips();
// console.log(mark);

// function calcAverage(tips) {
//   var sum = 0;
//   for (var i = 0; i < tips.length; i++) {
//     sum = sum + tips[i];
//   }
//   return sum / tips.length;
// }

//[2,6,4] => 0/2/8/12

// john.average = calcAverage(john.tips);

// mark.average = calcAverage(mark.tips);

// console.log(john);

// console.log(mark);

// if (john.average > mark.average) {
//   console.log(
//     john.fullName +
//       "'s family pays higher tips,with an average of $" +
//       john.average
//   );
// } else if (mark.average > john.average) {
//   console.log(
//     mark.fullName +
//       "'s family pays higher tips,with an average of $" +
//       mark.average
//   );
// }
