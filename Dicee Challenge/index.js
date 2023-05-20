var player_1 = Math.floor(Math.random() * 6) + 1;
var player_2 = Math.floor(Math.random() * 6) + 1;
var img1Path = "images/dice" + player_1 + ".png";
var img2Path = "images/dice" + player_2 + ".png";
document.querySelector(".img1").setAttribute("src", img1Path);
document.querySelector(".img2").setAttribute("src", img2Path);

if (player_1 === player_2) {
  document.querySelector("h1").innerHTML = "It's a Draw!";
} else if (player_1 > player_2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", function () {
  location.reload();
});
