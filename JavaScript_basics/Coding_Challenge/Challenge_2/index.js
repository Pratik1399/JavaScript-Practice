/*10)Coding Challenge*/
//John and Mike both play basketball in different teams.
//In the latest 3 games,John's team scored 89,120 and 103 points while Mike's team scored 116,94 and 123 points.
//1)Calculate the average score for each team.
//2)Decide which teams wins in average (highest average score),and print thee winner to the console.
//3)Then change the scores to show different winners.
//4)Don't forget to take into account there might be a draw(the same average score).
//5)EXTRA:Mary also plays basketball,and her team scored 97,134 and 105 points.
//6)Like before,log the average winner to the console.
//7)HINT:You will need the && operator to take the decision.
//8)If you can't solve this one,just watch the solution,it's no problem :)
//9)Like before,change the scores to generate different winners,keeping in mind there might be draws.

//Solution

var scoreJohn = (89 + 120 + 103) / 3;

var scoreMike = (116 + 94 + 123) / 3;

var scoreMary = (97 + 134 + 105) / 3;

console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike) {
	console.log("John's team wins with " + scoreJohn + " points");
} else if (scoreMike > scoreJohn) {
	console.log("Mike's team wins with " + scoreMike + " points");
} else {
	console.log("There is a draw");
}

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
	console.log("John's team wins with " + scoreJohn + " points");
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
	console.log("Mike's team wins with " + scoreMike + " points");
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
	console.log("Mary's team wins with " + scoreMary + " points");
} else {
	console.log("There is a draw");
}
