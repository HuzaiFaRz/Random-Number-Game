// var gameBody = document.querySelector(".game_body");

// var gameTimer = document.querySelector("#game_timer");
// var timerValue = 60;
// var gameHit = document.querySelector("#game_hit");

// function makeBubble() {
//   var bubbles = "";
//   for (var i = 1; i <= 200; i++) {
//     var bubbleNumber = Math.floor(Math.random() * 10);
//     bubbles += `<div class="bubble">${bubbleNumber}</div>`;
//   }
//   gameBody.innerHTML = bubbles;
// }
// makeBubble();

// function timerRunner() {
//   var timerInt = setInterval(function () {
//     if (timerValue >= 0) {
//       timerValue--;
//       gameTimer.textContent = timerValue;
//     } else {
//       timerInt = clearInterval();
//     }
//   }, 1000);
// }
// timerRunner();
// function hitsChanger() {
//   var hitRandom = Math.floor(Math.random() * 10);
//   gameHit.textContent = hitRandom;
// }
// hitsChanger();

var signUpPassordCheckBox = document.querySelector(
  "#sign_up_password_checkbox"
);

var signUpPassword = document.querySelector("#sign_up_password");

if (signUpPassordCheckBox) {
  try {
    if (signUpPassordCheckBox.checked == true) {
      signUpPassword.setAttribute("type", "password");
    } else {
      signUpPassword.setAttribute("type", "text");
    }
  } catch (error) {
    console.log(error);
  }
}
