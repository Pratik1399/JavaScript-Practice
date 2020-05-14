/*Function Statements and Expressions*/

//a)Function Declaration

//function whatDoYouDo(job,firstName);

//b)Function Expression
var whatDoYouDo = function (job, firstName) {
	switch (job) {
		case "teacher":
			return firstName + " teaches kids how to code";
		case "driver":
			return firstName + " drives a cab in Lisbon";
		case "designer":
			return firstName + " design beautiful websites";
		default:
			return firstName + " does something else";
	}
};

console.log(whatDoYouDo("teacher", "John"));

console.log(whatDoYouDo("designer", "Jane"));

console.log(whatDoYouDo("retired", "Mark"));

//c)Chrome Console
// 2 + 3;

// whatDoYouDo("teacher", "John");

// typeof 23;

if (true) {
	console.log(23);
}
