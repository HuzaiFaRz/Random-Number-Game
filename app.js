// var gamebody = document.querySelector(".game_body");

// var gametimer = document.querySelector("#game_timer");
// var timerValue = 60;
// var gamehit = document.querySelector("#game_hit");

// function makeBubble() {
//   var bubbles = "";
//   for (var i = 1; i <= 200; i++) {
//     var bubbleNumber = Math.floor(Math.random() * 10);
//     bubbles += `<div class="bubble">${bubbleNumber}</div>`;
//   }
//   gamebody.innerHTML = bubbles;
// }
// makeBubble();

// function timerRunner() {
//   var timerInt = setInterval(function () {
//     if (timerValue >= 0) {
//       timerValue--;
//       gametimer.textContent = timerValue;
//     } else {
//       timerInt = clearInterval();
//     }
//   }, 1000);
// }
// timerRunner();
// function hitsChanger() {
//   var hitRandom = Math.floor(Math.random() * 10);
//   gamehit.textContent = hitRandom;
// }
// hitsChanger();
