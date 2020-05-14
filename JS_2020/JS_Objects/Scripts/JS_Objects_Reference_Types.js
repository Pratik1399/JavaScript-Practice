const palette1 = {
	red: "#eb4d4b",
	yellow: "#f9ca24",
	blue: "#30336b",
};

console.log(palette1);

//Objects & Arrays are reference types

const palette2 = palette1;

console.log(palette2);

//If we change one value...

palette2.green = "#ebf876";

//Both variables reflect that change...

palette1.green;

console.log(palette1.green);

//"#ebf876"

palette2.green;

console.log(palette2.green);

//"#ebf876"
