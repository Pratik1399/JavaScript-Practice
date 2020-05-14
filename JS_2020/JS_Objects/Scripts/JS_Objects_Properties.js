/*
Accessing Data
*/

const palette = {
	red: "#eb4d4b",
	yellow: "#f9ca24",
	blue: "#30336b",
};

console.log(palette);

//DOT NOTATION

palette.red;

console.log(palette.red);

//'#eb4d4b'

//SQUARE BRACKET NOTATION

palette["yellow"];

console.log(palette["yellow"]);

//'#f9ca24'

palette["blue"];

console.log(palette["blue"]);

//"#30336b"

//With square brackets, we can also use dynamic key names:

let mysteryColor = "blue";

console.log(mysteryColor);

//"blue"

palette[mysteryColor];

console.log(palette[mysteryColor]);

//'#30336b'

let color = "yellow";

palette[color];

console.log(palette[color]);

//"#f9ca24"
