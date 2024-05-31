var gameSignUpMain = document.querySelector(".game_sign_up");
var gameSignUpForm = document.querySelector(".game_sign_up_form");
var formError = document.querySelector(".form_error");

var game = document.querySelector(".game");
var gameBody = document.querySelector(".game_body");
var gameHit = document.querySelector("#game_hit");
var gameTimer = document.querySelector("#game_timer");
var gameScore = document.querySelector("#game_score");
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

function gameSignUpHide() {
  gameSignUpMain.style.transition = "all 0.3s linear";
  gameSignUpMain.style.visibility = "hidden";
  gameSignUpMain.style.opacity = "0";
  gameSignUpMain.style.zIndex = "-1111";
}
function gameSignUpShow() {
  gameSignUpMain.style.transition = "all 0.3s linear";
  gameSignUpMain.style.visibility = "visible";
  gameSignUpMain.style.opacity = "1";
  gameSignUpMain.style.zIndex = "1111";
}

function gameShow() {
  game.style.display = "block";
}
function gameHide() {
  game.style.display = "none";
}

var userExist = false;
function signUp() {
  var gameSignUpFormData = new FormData(gameSignUpForm);
  var signUpUserInfo = {
    name: gameSignUpFormData.get("name"),
    email: gameSignUpFormData.get("email"),
    password: gameSignUpFormData.get("password"),
    score: gameScore.textContent,
  };

  if (
    !signUpUserInfo.name ||
    !signUpUserInfo.email ||
    !signUpUserInfo.password
  ) {
    formError.textContent = "Fill All Field Please";
    formError.style.color = "red";
  } else if (gameSignUpFormData.get("password").length < 8) {
    formError.textContent = "Password Must Be 8 Least";
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

      if (
        signUpUserInfo.email == newUser ||
        signUpUserInfo.password == newUser
      ) {
        formError.textContent = "User Already Exist";
        formError.style.color = "red";
      } else {
        gameSignUpForm.reset();
        formError.textContent = " Sign Up SuccessFully";
        formError.style.color = "#486848";
        setInterval(function () {
          gameSignUpHide();
        }, 2000);
        setInterval(function () {
          gameShow();
        }, 3000);
        game()
      }
    } else {
      userExist = false;
    }
  }
}
if (gameSignUpForm) {
  gameSignUpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    signUp();
  });
}

function game() {
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
}
