/*
Checking for Array & Object Equality
*/

let numbers = [1, 2, 3];

console.log(numbers);

let mystery = [1, 2, 3];

console.log(mystery);

let moreNumbers = numbers;

//They 'look' the same, but refer to different arrays

numbers === mystery;

console.log(numbers === mystery);

// false

//These two arrays reference the exact same array, so we get true:

numbers === moreNumbers;

console.log(numbers === moreNumbers);

//true

const user = {
	username: "CherryGarcia8",
	email: "garcia@gmail.com",
	notifications: ["message", "alert"],
};

console.log(user);

//THIS WILL NOT WORK!

if (user.notifications === []) {
	console.log("NO NEW NOTIFICATIONS!");
}

// THIS VERSION DOES WORK!

if (!user.notifications.length) {
	console.log("NO NEW NOTIFICATIONS!");
}
