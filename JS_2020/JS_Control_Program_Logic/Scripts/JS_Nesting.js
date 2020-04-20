/*
NESTING
*/

//We can nest conditionals inside conditionals

let password = "cat dog";

if (password.length >= 6) {
	if (password.indexOf("") !== -1) {
		console.log("Password cannot include spaces");
	} else {
		console.log("Valid password!!");
	}
} else {
	console.log("Password too short");
}

//We can nest conditionals!

let passwords = "hello  kitty";

if (passwords.length >= 6) {
	if (passwords.indexOf(" ") === -1) {
		console.log("Valid Password!");
	} else {
		console.log("Password is long enough, but cannot contain spaces");
	}
} else {
	console.log("Password must be longer!");
}
