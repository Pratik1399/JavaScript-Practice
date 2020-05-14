/*Objects and Methods*/

var john = {
	firstName: "John",
	lastName: "Smith",
	birthYear: 1990,
	family: ["Jane", "Mark", "Bob", "Emily"],
	job: "teacher",
	isMarried: false,
	calcAge: function (birthYear) {
		return 2018 - birthYear;
	},
	calcAge1: function () {
		return 2018 - this.birthYear;
	},
	calcAge2: function () {
		this.age = 2018 - this.birthYear;
	},
};

console.log(john.calcAge(1990));

console.log(john.calcAge1());

john.calcAge2();

console.log(john);
