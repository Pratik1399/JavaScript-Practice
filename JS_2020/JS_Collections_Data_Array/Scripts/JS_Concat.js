/*
Concat
*/

let fruits = ["apple", "banana"];

console.log(fruits);

let veggies = ["asparagus", "brussels sprouts"];

console.log(veggies);

let meats = ["steak", "chicken breast"];

console.log(meats);

console.log(fruits.concat(veggies));

console.log(veggies.concat(fruits));

let allFoods = fruits.concat(veggies, meats);

console.log(allFoods);
