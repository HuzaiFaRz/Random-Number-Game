var panelBottom = document.querySelector("#pbottom");
var timer = document.querySelector(".timer");
var timerValue = 60;
var hits = document.querySelector(".hit");
function makeBubble() {
  var bubbles = "";
  for (var i = 1; i <= 200; i++) {
    var bubbleNumber = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${bubbleNumber}</div>`;
  }
  panelBottom.innerHTML = bubbles;
}
makeBubble();

function timerRunner() {
  var timerInt = setInterval(function () {
    if (timerValue >= 0) {
      timerValue--;
      timer.textContent = timerValue;
    } else {
      timerInt = clearInterval();
    }
  }, 1000);
}
timerRunner();
function hitsChanger() {
  var hitRandom = Math.floor(Math.random() * 10);
  hits.textContent = hitRandom;
}
hitsChanger();
