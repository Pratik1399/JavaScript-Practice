/*If/else Statement*/

var firstName = "John";

var civilStatus = "Single";

if (civilStatus === "married") {
	console.log(firstName + " is married!");
} else {
	console.log(firstName + " will hopefully marry soon :)");
}

var isMarried = true;

if (isMarried) {
	console.log(firstName + " is Married!");
} else {
	console.log(firstName + " will hopefully marry soon:)");
}

var massJohn = 78;

var heightMark = 1.69; //meters

var massMark = 92;

var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);

var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
	console.log("Mark's BMI is higher than John's");
} else {
	console.log("John's BMI is higher than Mark's");
}
