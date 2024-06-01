var game = document.querySelector(".game");
var gameBody = document.querySelector(".game_body");
var gameHit = document.querySelector("#game_hit");
var gameTimer = document.querySelector("#game_timer");
var gameScore = document.querySelector("#game_score");
var againPlay = document.querySelector(".again-play");

againPlay.addEventListener("click", function () {
  location.reload();
});

function makeBubble() {
  var bubbles = "";
  // var gameBodyWidth = Math.floor(gameBody.clientWidth / bubbles);
  for (var i = 1; i <= 100; i++) {
    var bubbleNumber = Math.floor(Math.random() * 20);
    bubbles += `<div class="bubble">${bubbleNumber}</div>`;
    gameBody.innerHTML = bubbles;
  }

  console.log(Math.floor(gameBody.clientWidth / bubbles));
}

makeBubble();

var timerValue = 60;

function timerRunner() {
  var timerInt = setInterval(function () {
    if (timerValue > 0) {
      if (timerValue <= 6) {
        gameTimer.style.color = "red";
      }
      timerValue--;
      gameTimer.textContent = timerValue;
    } else {
      clearInterval(timerInt);
      gameBody.innerHTML = `<h1 class='game-over'>Game Over</h1>
      <span class='final-score'>Final Score: ${gameScoreVal}</span>`;
      gameHit.textContent = 0;
      againPlay.style.display = "block";
    }
  }, 1000);
}
timerRunner();

var hitRandom = 0;

function hitsChanger() {
  hitRandom = Math.floor(Math.random() * 20);
  gameHit.textContent = hitRandom;
}
hitsChanger();

var gameScoreVal = 0;

function scoreIncrease() {
  gameScore.textContent = gameScoreVal += 10;
  gameScore.style.color = "rgb(155, 184, 155)";
}
function scoreDecrase() {
  gameScore.textContent = gameScoreVal -= 10;
  gameScore.style.color = "red";
}

gameBody.addEventListener("click", function (t) {
  var clickedNum = Number(t.target.textContent);
  if (clickedNum === hitRandom) {
    scoreIncrease();
    hitsChanger();
    makeBubble();
  } else {
    scoreDecrase();
    hitsChanger();
    makeBubble();
  }
});

var randomColorCode = Math.floor(Math.random() * 100000);
// console.log(randomColorCode);
