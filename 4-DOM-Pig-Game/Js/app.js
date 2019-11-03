//Math.random();

// Math.random() * 6;

// Math.floor(4.6);

// Math.floor(Math.random()*6);

// Math.floor(Math.random()*6)+1;

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6) + 1;

document.querySelector("#current-" + activePlayer).textContent = dice;

var x = document.querySelector("#score-0").textContent;
console.log(x);

document.querySelector(".dice").style.display = "none";
