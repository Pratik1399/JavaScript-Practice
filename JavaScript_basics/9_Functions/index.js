/*Functions*/

function calculateAge(birthYear) {
	return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);

var ageMike = calculateAge(1948);

var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearUntilRetirement(year, firstName) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	console.log(firstName + " retires in " + retirement + " years.");
}

yearUntilRetirement(1990, "John");

yearUntilRetirement(1948, "Mike");

yearUntilRetirement(1969, "Jane");

function yearUntilRetirement(year, firstName) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	if (retirement > 0) {
		console.log(firstName + " retires in " + retirement + " years.");
	} else {
		console.log(firstName + " is already retired.");
	}
}

yearUntilRetirement(1990, "John");

yearUntilRetirement(1948, "Mike");

yearUntilRetirement(1969, "Jane");
