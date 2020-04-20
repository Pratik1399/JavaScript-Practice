//Booleans True or False
/*
Booleans
*/
//Booleans are simple True or False values Yes or No.1 or 0.

let isLoggedIn = true;

console.log(isLoggedIn);

let gameOver = false;

console.log(gameOver);

const isWaterWet = true;

console.log(isWaterWet);

/*
Variables Can Change Type
*/
//You probably wouldn't change a number to a boolean,but you can!

let numDonuts = 12;

console.log(numDonuts);

numDonuts = false;

console.log(numDonuts);

numDonuts = 129873872;

console.log(numDonuts);

/*
Strings
*/
//In JS,Strings are pieces of text,or strings of characters.
//We wrap them in quotes.
//whether you use single or double quotes,just make sure you are consistent.

//Double quotes work

let firstName = "Ziggy";

console.log(firstName);

let msg = "Please do not feed the chimps!";

console.log(msg);

//So do single quotes

let animal = "Dumbo Octopus";

console.log(animal);

//This Does Not Work

let bad = "this is wrong";

console.log(bad);

/*
Strings are indexed
*/
//Each character has a corresponding index (a positional number)
//C H I C K E N
//0 1 2 3 4 5 6

//Strings have a length property

console.log(firstName.length);

//Access individual characters using index:

console.log(firstName[0]);

console.log(firstName[3]);

//Even though length is 5

console.log(firstName[5]);

/*
String Methods
*/
//String came with a set of built-in methods,which are actions that can be performed on or with that particular string.
//We can do things like...
//Searching within a string
//Replacing parts of a string
//Changing case (upper/lowercase)
//thing.method()

/*
Changing Case
*/

let msg1 = "I am king";

console.log(msg1);

//"I AM KING"

let yellMsg = msg.toUpperCase();

console.log(yellMsg);

let angry = "LeAvE mE aLoNe!";

//"Leave me alone!"

angry.toUpperCase();

//The value in angry is unchanged

angry;

//"LeAvE mE aLoNe!"

console.log(angry);

/*
trim
*/

let greeting = "  leave me alone plz   ";

//"leave me alone plz"

greeting.trim();

console.log(greeting);

/* 
thing.method(arg)
*/
//Some methods accept arguments that modify their behavior.
//We pass these arguments inside of the parentheses.

/*
indexOf
*/

let tvShow = "catdog";

//0

tvShow.indexOf("cat");

console.log(tvShow.indexOf("cat"));

//3

tvShow.indexOf("dog");

console.log(tvShow.indexOf("dog"));

//-1 (not found)

tvShow.indexOf("z");

console.log(tvShow.indexOf("z"));

/*
Slice
*/

let str = "supercalifragilisticexpialidocious";

str.slice(0, 5);

//super

console.log(str.slice(0, 5));

str.slice(5);

//califragilisticexpialidocious

console.log(str.slice(5));

/*
Replace
*/

let annoyingLaugh = "teehee so funny! teehee!";

annoyingLaugh.replace("teehee", "haha");

//haha so funny! teehee!

console.log(annoyingLaugh.replace("teehee", "haha"));

//What is the value of age?

const age = "5" + "4";

console.log(age);

//What does this evaluate to?

"pecan pie"[7];

console.log("pecan pie"[7]);

"PUP"[3];

console.log("PUP"[3]);

"GARBAGE!".slice(2).replace("B", "");

console.log("GARBAGE!".slice(2).replace("B", ""));

//What is the value of song?

let song = "london calling";

song.toUpperCase();

console.log(song.toUpperCase());

//What is the value of cleanedInput?

let userInput = " TODD@gmail.com";

let cleanedInput = userInput.trim().toLowerCase();

console.log(cleanedInput);

//What is the value of index?

let park = "Yellowstone";

const index = park.indexOf("Stone");

console.log(index);

let yell = "GO AWAY!!";

const index1 = yell.indexOf("!");

console.log(index1);

/*
String Escape
*/

//\n-newline

//\'-single quote

//\"-double quote

//\\-backslash

/*
String Template Literals
*/
//Template literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string.
//We use Back-Ticks
//Not Single Quotes
//`I am a template literal`
//The back-tick key is usually above the tab key

`I counted ${3 + 4} sheep`;

//"I counted 7 sheep"

console.log(`I counted ${3 + 4} sheep`);

let username = "Ziggy31";

//"Welcome back,Ziggy31"

`Welcome back,${username}`;

console.log(`Welcome back,${username}`);

let username1 = "Ziggy31";

//"GAME OVER ZIGGY31"

`GAME OVER ${username1.toUpperCase()}`;

console.log(`GAME OVER ${username1.toUpperCase()}`);

let item = "cucumbers";

let price = 1.99;

let quantity = 4;

`You bought ${quantity} ${item},total price:$${price * quantity}`;

console.log(`You bought ${quantity} ${item},total price:$${price * quantity}`);

/*
NULL & UNDEFINED
*/

//Null
//"Intentional absence of any value"
//Must be assigned

//Undefined
//Variables that do not have an assigned value are undefined

//No one is logged in yet;

let loggedInUser = null;

//value is explicitly nothing

//A user logs in

loggedInUser = "Alan Rickman";

console.log(loggedInUser);

//We didn't assign a value

let pickles;

//undefined,

pickles = "are very gross";

console.log(pickles);

//Undefined also comes up in other situations:

let food = "tacos";

//undefined

food[7];

console.log(food[7]);
