/*Truthy and Falsy values and Equality Operator*/

//1)Truthy values:NOT falsy values.

//2)Falsy values:undefined,null,0,'',NaN;

//var height;

//var height = 23;

//var height = 0;

//var height = 233;

//var height = "twenty";

//var height = "";

var height = 23;

if (height || height === 0) {
	console.log("Variable is defined");
} else {
	console.log("Variable has NOT been defined");
}

//Equality Operator

if (height == "23") {
	console.log("The == operator does type coercion!");
}
