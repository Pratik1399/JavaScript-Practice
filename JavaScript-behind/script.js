/*1)Hoisting*/

//a)Functions

// function calculateAge(year){
//     console.log(2016-year);
// }

// calculateAge(1990);

//a)Actual Hoisting
// calculateAge(1965);

// function calculateAge(year) {
//   console.log(2016 - year);
// }

//retirement(1956);

// var retirement = function(year) {
//   console.log(65 - (2016 - year));
// };

// retirement(1956);

//b)Variables

// console.log(age);

// var age = 23;

// console.log(age);

// function foo() {
//   console.log(age);
//   var age = 65;
//   console.log(age);
// }

// foo();

// console.log(age);

/*2)Scope and Scope Chain*/

//1)First Example
// var a = "Hello!";
// first();

// function first() {
//   var b = "Hi!";
//   second();
//   function second() {
//     var c = "Hey!";
//     console.log(a + b + c);
//   }
// }

//2)Second Example
// var a = "Hello!";
// first();

// function first() {
//   var b = "Hi!";
//   second();
//   function second() {
//     var c = "Hey!";
//     third();
//   }
// }

// function third() {
  // var d = "John!";
  //1)Right
  // console.log(a);

  // console.log(d);

  // console.log(a + d);

  //2)Wrong

  // console.log(a + b + c + d);

  // console.log(b);

  // console.log(c);

  // console.log(a+b);

  // console.log(a+c);

  // console.log(a+b+c);

  // console.log(a+b+d);

  // console.log(a+c+d);

  // console.log(b+c+d);
// }

// 3)"this" keyword
// console.log(this);

// calculateAge(1985);

// function calculateAge(year){
//   console.log(2018-year);
//   console.log(this);
// }

var john={
  name:"John",
  yearOfBirth:1989,
  calculateAge:function(){
    console.log(this);
    console.log(2016-this.yearOfBirth);
  //   function innerFunction(){
  //     console.log(this);
  //   }
  //   innerFunction();
  }
}

john.calculateAge();

var mike={
  name:'Mike',
  yearOfBirth:1984
}

mike.calculateAge=john.calculateAge;
mike.calculateAge();