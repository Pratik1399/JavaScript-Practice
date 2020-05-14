/*Coding Challenge*/
//Let's remember the first coding challenge where Mark and John compared their BMIs.
//Lets now implement the same functionality with objects and methods.
//1)For each of them,create an object with properties for their full name,mass,and height.
//2)In the end,log to the console who has the highest BMI,together with the full name and respective BMI.
//Don't forget they might have the same BMI.
//Remember BMI = mass /height^2 =mass/(height * height).(mass in kg and height in meter).

//Coding Solution

var john = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	},
};

var mark = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	},
};

console.log(john);

console.log(mark);

john.calcBMI();

console.log(john);

mark.calcBMI();

console.log(mark);

console.log(john, mark);

if (john.bmi > mark.bmi) {
	console.log(john.fullName + " has a higher BMI of " + john.bmi);
} else if (john.bmi < mark.bmi) {
	console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
} else {
	console.log("They have same BMI");
}

if (john.calcBMI() > mark.calcBMI()) {
	console.log(john.fullName + " has a higher BMI of " + john.bmi);
} else if (john.bmi < mark.bmi) {
	console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
} else {
	console.log("They have same BMI");
}
