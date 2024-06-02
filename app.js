var main = document.querySelector(".main");
var game = document.querySelector(".game");
var gameBody = document.querySelector(".game_body");
var gameHit = document.querySelector("#game_hit");
var gameTimer = document.querySelector("#game_timer");
var gameScore = document.querySelector("#game_score");
var againPlay = document.querySelector(".again-play");

var gameScoreVal = 0;
var bubbleNumber;
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
    if (gameBody) {
      gameBody.innerHTML = bubbles;
    }
  }
}

makeBubble();
var bubbledivs = document.querySelectorAll(".bubble");
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
hitsChanger();

function mainChangeColor() {
  var randomColorCode = "#" + Math.floor(Math.random() * 580000);
  main.style.backgroundColor = randomColorCode;
}

gameBody.addEventListener("click", function (m) {
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

// function gameStart() {
//   Array.from(bubbledivs).forEach(function (t) {
//     t.addEventListener("click", function (m) {
//       var clickedNum = Number(m.target.textContent);
//       if (clickedNum === hitRandom) {
//         scoreIncrease();
//         hitsChanger();
//         makeBubble();
//         gameScore.style.color = "rgb(155, 184, 155)";
//         mainChangeColor();
//       } else {
//         gameScore.style.color = "red";
//       }
//     });
//   });
// }
// gameStart();
