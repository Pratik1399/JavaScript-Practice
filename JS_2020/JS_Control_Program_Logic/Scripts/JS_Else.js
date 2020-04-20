/*
ELSE
*/

// Performance Review

// 3 - superstar

// 2 - meets expectations

// 1 - needs improvement

// anything else - wtf?

let highScore = 1430;

let userScore = 1600;

if (userScore >= highScore) {
	console.log(`Congrats, you have the new high score of ${userScore}`);
	highScore = userScore;
} else {
	console.log(
		`Good Game.  Your score of ${userScore} did not beat the high score of ${highScore}`
	);
}
