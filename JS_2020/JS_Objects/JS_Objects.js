/*
Objects
*/

//Objects are collections of properties.

//Properties are a key-value pair

//Rather than accessing data using an index,we use custom keys.

//How would you store this?

/*
An Objects
*/

// ARRAYS ARE NOT IDEAL FOR STORING ALL TYPES OF DATA.

// We could use an array if we made sure we always follow the same pattern:

//index 0: total steps

//index 1: total floors

const fitBitData_1 = [308756, 1814, 211];

console.log(fitBitData_1);

//We have no insight into WHAT we are storing at each index

//And we could mess things up super easily if we're not careful

const lucyFitBitData = [12344, 1814, 211];

console.log(lucyFitBitData);

// OBJECTS TO THE RESCUE!

const fitBitData = {
	totalSteps: 308727,
	totalMiles: 211.7,
	avgCalorieBurn: 5755,
	workoutsThisWeek: "5 of 7",
	avgGoodSleep: "2:13",
};

console.log(fitBitData);

//Property = Key + Value

//Key - Value Pairs

//username:"crazyCatLover"
//up_votes:7
//text:"great post!"

/*
Dictionary
*/

//clarion:brilliantly clear

//fecund:fruitful in offspring

//donnybrook:uproots & disorder

//pursy:having a puckered appearance

//fantod:emotional outburst

//remonstrate:argue in protest

/*
All Types Welcome
*/

let comment = {
	username: "sillyGoose420",
	downVotes: 19,
	upVotes: 214,
	netScore: 195,
	commentText: "Tastes like chicken lol",
	tags: ["#hilarious", "#funny", "#silly"],
	isGilded: false,
};

console.log(comment);

/*
Valid Keys
*/

//All keys are converted to strings

//Except for Symbols,which we haven't covered yet
