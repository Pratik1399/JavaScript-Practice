/*Objects and Properties*/

//a)Object Literal

var john = {
	firstName: "John",
	lastName: "Smith",
	birthYear: 1990,
	family: ["Jane", "Mark", "Bob", "Emily"],
	job: "teacher",
	isMarried: false,
};

console.log(john);

console.log(john.firstName);

var x = "birthYear";

console.log(john[x]);

john.job = "designer";

john["isMarried"] = true;

console.log(john);

//b)New Object

var jane = new Object();

jane.firstName = "Jane";

jane.birthYear = 1969;

jane["lastName"] = "Smith";

console.log(jane);
