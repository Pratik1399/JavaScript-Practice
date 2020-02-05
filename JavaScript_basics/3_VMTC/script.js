/*Variable Mutation and Type Coercion*/

var firstName = "Pratik";

var age = 27;

//Type Coercion
console.log(firstName + " " + age);

var job, isMarried;

job = "Programmer";

isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    " .Is he married? " +
    isMarried
);

//Variable Mutation
age = "twenty eight";

job = "driver";

alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    " .Is he married? " +
    isMarried
);

var lastName = prompt("What is his last Name?");

console.log(firstName + " " + lastName);
