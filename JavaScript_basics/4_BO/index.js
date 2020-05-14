/*Operator Precedence*/
var now = 2018;

var yearPratik = 1989;

var fullAge = 18;

//Multiple Operators

var isFullAge = now - yearPratik >= fullAge;

console.log(isFullAge);

//true

//Group
var agePratik = now - yearJohn;

var ageAjit = 35;

var average = (agePratik + ageAjit) / 2;

console.log(average);

//Multiple Assignments
var x, y;

x = y = (3 + 5) * 4 - 6;

console.log(x, y);

x *= 2;

console.log(x);

x += 10;

console.log(x);

x--;

console.log(x);
