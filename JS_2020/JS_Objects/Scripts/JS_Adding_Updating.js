/*
Updating & Adding Properties
*/

const fitBitData = {
	totalSteps: 308727,
	totalMiles: 211.7,
	avgCalorieBurn: 5755,
	workoutsThisWeek: "5 of 7",
	avgGoodSleep: "2:13",
};

//Updating Properties

fitBitData.workoutsThisWeek = "6 to 7";

fitBitData.totalMiles += 7.5;

//Adding a new property

fitBitData.heartStillBeating = true;

console.log(fitBitData);

const userReviews = {};

//Adding a new property:

userReviews["queenBee49"] = 4.0;

userReviews.mrSmith78 = 3.5;

//Updating existing properties

userReviews["queenBee49"] += 2;

userReviews.mrSmith78++;

console.log(userReviews);
