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
    formError.textContent = "Fill All Field Please";
    formError.style.color = "red";
  } else if (signUpFormData.get("password").length < 8) {
    formError.textContent = "Password Must Be 8 Least";
    formError.style.color = "red";
  } else {
    if (
      signUpUserInfo.email == existingUsers ||
      signUpUserInfo.password == existingUsers
    ) {
      formError.textContent = "User Already Exist";
      formError.style.color = "red";
    } else {
      userExist = true;
      if (userExist) {
        var existingUsers = JSON.parse(localStorage.getItem("Logged")) || [];
        existingUsers.push(signUpUserInfo);
        var newUser = localStorage.setItem(
          "Logged",
          JSON.stringify(existingUsers)
        );
        signUpForm.reset();
        formError.textContent = " Sign Up SuccessFully";
        formError.style.color = "#486848";
      } else {
        userExist = false;
      }
    }
  }
}
if (signUpForm) {
  signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    signUp();
  });
}
