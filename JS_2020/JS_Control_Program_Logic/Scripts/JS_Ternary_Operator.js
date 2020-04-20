/*
Ternary Operator
*/

//condition?expIfTrue:expIfFalse

let num2 = 7;

// Without Ternary Operator...

// if (num === 7) {
// 	console.log('lucky!');
// }
// else {
// 	console.log('BAD!');
// }

// Same thing written with Ternary Operator...

num2 === 7 ? console.log("lucky!") : console.log("BAD!");

let status = "offline";

// Without ternary operator

// let color;
// if (status === 'offline') {
// 	color = 'red';
// }
// else {
// 	color = 'green';
// }

// One-liner using Ternary Operator...

let color1 = status === "offline" ? "red" : "green";

console.log(color1);
