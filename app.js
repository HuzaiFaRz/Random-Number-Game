var game = document.querySelector(".game");
var gameBody = document.querySelector(".game_body");
var gameHit = document.querySelector("#game_hit");
var gameTimer = document.querySelector("#game_timer");
var gameScore = document.querySelector("#game_score");

function makeBubble() {
  var bubbles = "";
  for (var i = 1; i <= 170; i++) {
    var bubbleNumber = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${bubbleNumber}</div>`;
  }
  gameBody.innerHTML = bubbles;
}
makeBubble();
var timerValue = 60;

function timerRunner() {
  var timerInt = setInterval(function () {
    if (timerValue >= 0) {
      timerValue--;
      gameTimer.textContent = timerValue;
    } else {
      timerInt = clearInterval();
    }
  }, 1000);
}
timerRunner();

function hitsChanger() {
  var hitRandom = Math.floor(Math.random() * 10);
  gameHit.textContent = hitRandom;
}
hitsChanger();
