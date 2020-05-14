/*18)Loops and Iterations*/

//a)for loop

for (var i = 0; i < 10; i++) {
	console.log(i);
}

// i=0,0<10 true,log i to console,i++
// i=1,1<10 true,log i to console,i++
// i=2,2<10 true,log i to console,i++
// i=3,3<10 true,log i to console,i++
// i=4,4<10 true,log i to console,i++
// i=5,5<10 true,log i to console,i++
// i=6,6<10 true,log i to console,i++
// i=7,7<10 true,log i to console,i++
// i=8,8<10 true,log i to console,i++
// i=9,9<10 true,log i to console,i++
// i=10,10<10 false,exit the loop!

for (var i = 0; i < 20; i++) {
	console.log(i);
}

for (var i = 1; i < 20; i++) {
	console.log(i);
}

for (var i = 1; i < 20; i += 2) {
	console.log(i);
}

var john = ["john", "Smith", 1990, "designer", false];

for (var i = 0; i < john.length; i++) {
	console.log(john[i]);
}

//b)while loop

var john = ["john", "Smith", 1990, "designer", false, "blue"];

var i = 0;

while (i < john.length) {
	console.log(john[i]);
	i++;
}

//c)continue and break statements

var john = ["john", "Smith", 1990, "designer", false, "blue"];

for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== "string") {
		continue;
	}
	console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== "string") {
		break;
	}
	console.log(john[i]);
}

//d)Looping backwards

var john = ["john", "Smith", 1990, "designer", false, "blue"];

for (var i = john.length - 1; i >= 0; i--) {
	console.log(john[i]);
}
