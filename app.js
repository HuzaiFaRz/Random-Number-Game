var main = document.querySelector(".main");
var game = document.querySelector(".game");
var gameBody = document.querySelector(".game_body");
var gameHit = document.querySelector("#game_hit");
var gameTimer = document.querySelector("#game_timer");
var gameScore = document.querySelector("#game_score");
var againPlay = document.querySelector(".again-play");
var gameEndContent = document.querySelector(".game-content");
var gameScoreFinal = document.querySelector(".final-score");

var gameScoreVal = 0;
var hitRandom = 0;
var timerValue = 100;

function scoreIncrease() {
  gameScore.textContent = gameScoreVal += 10;
  gameScore.style.color = "rgb(155, 184, 155)";
}
function scoreDecrase() {
  gameScore.textContent = gameScoreVal -= 10;
  gameScore.style.color = "red";
}

againPlay.addEventListener("click", function () {
  location.reload();
});

function makeBubble() {
  var bubbles = "";
  for (var i = 1; i <= 341; i++) {
    var bubbleNumber;
    if (gameScoreVal > 150) {
      bubbleNumber = Math.floor(Math.random() * 80);
    } else if (gameScoreVal > 100) {
      bubbleNumber = Math.floor(Math.random() * 50);
    } else if (gameScoreVal > 50) {
      bubbleNumber = Math.floor(Math.random() * 20);
    } else if (gameScoreVal <= 50) {
      bubbleNumber = Math.floor(Math.random() * 10);
    }
    bubbles += `<div class="bubble">${bubbleNumber}</div>`;
  }

  if (gameBody) {
    gameBody.innerHTML = bubbles;
    gameStart();
  }
}
function gameStart() {
  var bubbledivs = document.querySelectorAll(".bubble");
  bubbledivs.forEach(function (t) {
    t.addEventListener("click", function (m) {
      var clickedNum = Number(m.target.textContent);
      if (clickedNum === hitRandom) {
        scoreIncrease();
        hitsChanger();
        makeBubble();
        gameScore.style.color = "rgb(155, 184, 155)";
        mainChangeColor();
      } else {
        gameScore.style.color = "red";
      }
    });
  });
}
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
      gameHit.textContent = 0;
      gameBody.innerHTML = "";
      gameEndContent.style.display = "flex";
      gameScoreFinal.textContent = `Final Score: ${gameScoreVal}`;
    }
  }, 1000);
}

function hitsChanger() {
  if (gameScoreVal > 150) {
    hitRandom = Math.floor(Math.random() * 80);
  } else if (gameScoreVal > 100) {
    hitRandom = Math.floor(Math.random() * 50);
  } else if (gameScoreVal > 50) {
    hitRandom = Math.floor(Math.random() * 20);
  } else if (gameScoreVal <= 50) {
    hitRandom = Math.floor(Math.random() * 10);
  }
  gameHit.textContent = hitRandom;
}

function mainChangeColor() {
  var randomColorCode = "#" + Math.floor(Math.random() * 1000000);
  main.style.transition = "background-color 0.3s linear";
  main.style.backgroundColor = randomColorCode;
}
makeBubble();
timerRunner();
hitsChanger();
