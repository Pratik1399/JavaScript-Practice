/*
Reference Types
*/

// VALUE TYPES

//Value Types - the variable stores the actual value:

let x = 100;

console.log(x);

let y = x;

console.log(y);

//If we change x

x = 99;

console.log(x);

//y is unchanged

y;

console.log(y);

//100

// REFERENCE TYPES

// Array variables do not hold the actual array

//Instead, they store a REFERENCE to the array

let number = [2, 4, 6, 8];

console.log(number);

let myNumber = number;

console.log(myNumber);

//myNumber references the same array

// If we change number

number.push("BOO!");

console.log(number);

//My number is also changed:

myNumber;

console.log(myNumber);

//[2, 4, 6, 8, "BOO!"]
