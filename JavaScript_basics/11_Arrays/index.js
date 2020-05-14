/*13)Arrays*/

//a)Initiliaze Array

var names = ["John", "Mark", "Jane"];

var years = new Array(1990, 1969, 1948);

console.log(names[0]);

console.log(names);

console.log(names.length);

console.log(names[2]);

//b)Mutate Array

names[1] = "Ben";

names[5] = "Mary";

names[names.length] = "Max";

console.log(names);

//c)Different Data Types

var john = ["John", "Smith", 1990, "teacher", false];

john.push("blue");

john.unshift("Mr.");

console.log(john);

john.pop();

john.pop();

john.shift();

console.log(john);

console.log(john.indexOf(1990));

console.log(john.indexOf(23));

var isDesigner =
	john.indexOf("designer") === -1
		? "John is NOT a designer"
		: "John is a designer";

console.log(isDesigner);
