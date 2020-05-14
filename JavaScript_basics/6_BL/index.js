/*7)Boolean Logic*/

var firstName = "John";

var age = 16;

if (age < 13) {
	console.log(firstName + " is a boy.");
} else {
	console.log(firstName + " is a man.");
}

// var firstName = "John";

var age = 16;

// var age = 20;

if (age < 13) {
	console.log(firstName + " is a boy.");
} else if (age >= 30 && age < 20) {
	console.log(firstName + " is a teenager.");
} else if (age > 20 && age < 30) {
	console.log(firstName + " is a young man.");
} else {
	console.log(firstName + " is a man.");
}
