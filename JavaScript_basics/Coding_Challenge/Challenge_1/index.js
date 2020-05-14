/*Coding Challenge*/
//1)Mark and John are trying to compare their BMI(Body Mass Index),which is calculated using formula:(mass in kg and height in meter)
//a)Store Mark's and John's mass and height in variables.
//b)Calculate both their BMI's
//c)Create a boolean variable containing information about whether Mark has a Higher BMI than John
//d)Print a string to the console containing the variable from step 3(Something like "Is Mark's BMI higher than John's?true")

var massMark = 78;

var heightMark = 1.69;

var massJohn = 92;

var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);

var BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;

console.log("Is Mark's BMI higher than John's?" + markHigherBMI);
