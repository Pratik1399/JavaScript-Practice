/*
Modifying Arrays
*/

let colors_2 = ["red", "orange", "green", "yellow"];

console.log((colors_2[0] = "red"));

console.log((colors_2[2] = "yellow"));

console.log((colors_2[3] = "green"));

console.log(colors_2[4]);

//undefined

console.log((colors_2[4] = "blue"));

let shoppingList_1 = ["Cheddar Cheese", "2% Milk"];

//To change 2% Milk to Whole Milk

shoppingList_1[1] = "Whole Milk";

console.log((shoppingList_1[1] = "Whole Milk"));

//To add Ice Cream to the end

//Only works if array is 2 items long...

shoppingList_1[2] = "Ice Cream";

console.log((shoppingList_1[2] = "Ice Cream"));

//To make sure you add to the end, no matter the length of the array:

shoppingList_1[shoppingList_1.length] = "Tomatoes";

console.log((shoppingList_1[shoppingList_1.length] = "Tomatoes"));

shoppingList_1[shoppingList_1.length] = "Potatoes";

console.log((shoppingList_1[shoppingList_1.length] = "Potatoes"));

/*
Array Methods
*/

//Push - add to end

//Pop - remove from end

//Shift - remove from start

//Unshift - add to start

//You might mix up shift and unshift for a while.I still do...

/*
More Methods
*/

//concat - merge arrays

//includes - look for a value

//indexOF - just like str.indexOf()

//join - creates a string from arr

//reverse - reverses an array!

//slice - copy portion of an arr

//splice - remove/replace elements

//sort - sorts an array
