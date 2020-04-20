/*
Boolean Logic
*/

/*
Goals
*/

//Understand Comparison

//Write Conditionals

//Work with Boolean Operators

//greater than

console.log(">" + " greater than");

//less than

console.log("<" + " less than");

//greater than or equal to

console.log(">=" + " greater than or equal to");

//less than or equal to

console.log("<=" + " less than or equal to");

//equality

console.log("==" + " equality");

//not equal

console.log("!=" + " not equal");

//strict equality

console.log("===" + " strict equality");

//strict non-equality

console.log("!==" + " strict non-equality");

/*
Comparisons
*/

//Notice theses all return booleans

//Though it's uncommon,you can compare strings.Just be careful,things get dicey when dealing with case,special characters,and accents!

console.log(">" + " greater than");

//less than

console.log("<" + " less than");

//greater than or equal to

console.log(">=" + " greater than or equal to");

//less than or equal to

console.log("<=" + " less than or equal to");

/*
Some Examples
*/

console.log(10 > 1);

//true

console.log(0.2 > 0.3);

//false

console.log(-10 < 0);

//true

console.log(50.5 < 5);

//false

console.log(0.5 <= 0.5);

//true

console.log(99 >= 4);

//true

console.log(99 >= 99);

//true

console.log("a" < "b");

//true

console.log("A" > "a");

//false

//== vs ===

/*
==(double equals)
*/

//Checks for equality of value,but not equality of type.

//It coerces both values to the some type and then compares them.

//This can lead to some unexpected results!

console.log(5 == 5);

//true

console.log("b" == "c");

//false

console.log(7 == "7");

//true

console.log(0 == "");

//true

console.log(true == false);

//false

console.log(0 == false);

//true

console.log(null == undefined);

//true

/*
=== (triple equals)
*/

//Checks for equality of value AND type

console.log(5 === 5);

//true

console.log(1 === 2);

//false

console.log(2 === "2");

//false

console.log(false === 0);

//false

//Sample applies for != and !==

console.log(10 != "10");

//false

console.log(10 !== "10");

//false

/*
Go with triple equals
*/

console.log();

//prints arguments to the console

//we need this if start working with the files
