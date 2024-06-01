var game = document.querySelector(".game");
var gameBody = document.querySelector(".game_body");
var gameHit = document.querySelector("#game_hit");
var gameTimer = document.querySelector("#game_timer");
var gameScore = document.querySelector("#game_score");
var bubblesss = document.querySelectorAll(".bubble");
function makeBubble() {
  var bubbles = "";
  for (var i = 1; i <= 310; i++) {
    var bubbleNumber = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${bubbleNumber}</div>`;
    gameBody.innerHTML = bubbles;
  }
}
makeBubble();
var timerValue = 60;

function timerRunner() {
  var timerInt = setInterval(function () {
    if (timerValue > 0) {
      timerValue--;
      gameTimer.textContent = timerValue;
    } else {
      clearInterval(timerInt);
      gameBody.innerHTML = "Game Over";
    }
  }, 1000);
}
timerRunner();

var hitRandom = 0;

function hitsChanger() {
  hitRandom = Math.floor(Math.random() * 10);
  gameHit.textContent = hitRandom;
}
hitsChanger();

var gameScoreVal = 0;

function scoreIncrease() {
  gameScore.textContent = gameScoreVal += 10;
}

// bubblesss.forEach(function (e) {
//   e.addEventListener("click", function (t) {

//     if (clickedNum === hitRandom) {
//       scoreIncrease();
//       hitsChanger();
//       makeBubble();
//     } else {
//       console.log("djkjf");
//     }
//   });
// });

gameBody.addEventListener("click", function (t) {
  var clickedNum = Number(t.target.textContent);
  if (clickedNum === hitRandom) {
    scoreIncrease();
    hitsChanger();
    makeBubble();
  } else {
    console.log("djkjf");
  }
});
