//variables
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

//checking keyboard press
$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//checking the clicks

$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length);
});

//creating the next sequence
function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

//sound playing function

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//animations

function animatePress(currentColour) {
  var button = "#" + currentColour;
  $(button).addClass("pressed");
  setTimeout(function () {
    $(button).removeClass("pressed");
  }, 100);
}

//checking answers

function checkAnswer(currentLevel) {
  currentLevel -= 1;
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
      userClickedPattern = [];
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

//reset the game

function startOver() {
  level = 0;
  userClickedPattern = [];
  gamePattern = [];
  started = false;
}
