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

var signUpPasswordEye = document.querySelector(".sign_up_password_eye_hide");
var signUpPassword = document.querySelector("#sign_up_password");
function formPasswordShow() {
  try {
    if (signUpPasswordEye) {
      signUpPasswordEye.addEventListener("click", function () {
        signUpPasswordEye.classList.toggle("sign_up_password_eye_show");
        if (signUpPasswordEye.classList.contains("sign_up_password_eye_show")) {
          signUpPassword.setAttribute("type", "text");
        } else {
          signUpPassword.setAttribute("type", "password");
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
}
formPasswordShow();

var signUpForm = document.querySelector(".game_sign_up_form");
var formError = document.querySelector(".form_error");
var userExist = false;

function signUp() {
  var signUpFormData = new FormData(signUpForm);
  var signUpUserInfo = {
    name: signUpFormData.get("name"),
    email: signUpFormData.get("email"),
    password: signUpFormData.get("password"),
  };

  if (
    !signUpUserInfo.name ||
    !signUpUserInfo.email ||
    !signUpUserInfo.password
  ) {
    formError.innerHTML = "Fill All Field Please";
  } else if (signUpPassword.value.lenght < 8) {
    formError.innerHTML = "Password Must Be 8 Least";
  } else {
    var existingUsers = JSON.parse(localStorage.getItem("Logged")) || [];
    existingUsers.push(signUpUserInfo);
    userExist = true;
    if (userExist) {
      localStorage.setItem("Logged", JSON.stringify(existingUsers));
      signUpForm.reset();
      formError.innerHTML = " Sign Up SuccessFully";
      formError.style.color = "#486848";
    } else {
      userExist = false;
      formError.innerHTML = " ";
    }

    formError.innerHTML = " ";
  }
}
if (signUpForm) {
  signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    signUp();
  });
}
