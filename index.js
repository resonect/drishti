let currentPlayer = "x";


let gameStatus = "Game On";


const boxes = document.getElementsByClassName("box");

var modal = document.getElementById("myModal");
var modalcontent = document.getElementsByClassName("modal-content")[0];
var modalheader = document.getElementsByClassName("modal-header")[0];
var modalbody = document.getElementsByClassName("modal-body")[0];
var modalfooter = document.getElementsByClassName("modal-footer")[0];

function showModal() {
  modal.style.display = "block";
  modalcontent.style.display = "block";
  modalheader.style.display = "block";
  modalbody.style.display = "block";
  modalfooter.style.display = "block";
}


for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function() {

    if (boxes[i].innerHTML.trim() == "" && gameStatus == "Game On") {

      boxes[i].innerHTML = currentPlayer;


      currentPlayer = currentPlayer == "x" ? "o" : "x";


      document.getElementById(
        "player"
      ).innerHTML = currentPlayer.toUpperCase();


      if (
        boxes[0].innerHTML == boxes[1].innerHTML &&
        boxes[1].innerHTML == boxes[2].innerHTML &&
        boxes[0].innerHTML.trim() != ""
      ) {
        showWinner(0, 1, 2);
      } else if (
        boxes[3].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[5].innerHTML &&
        boxes[3].innerHTML.trim() != ""
      ) {
        showWinner(3, 4, 5);
      } else if (
        boxes[6].innerHTML == boxes[7].innerHTML &&
        boxes[7].innerHTML == boxes[8].innerHTML &&
        boxes[6].innerHTML.trim() != ""
      ) {
        showWinner(6, 7, 8);
      } else if (
        boxes[0].innerHTML == boxes[3].innerHTML &&
        boxes[3].innerHTML == boxes[6].innerHTML &&
        boxes[0].innerHTML.trim() != ""
      ) {
        showWinner(0, 3, 6);
      } else if (
        boxes[1].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[7].innerHTML &&
        boxes[1].innerHTML.trim() != ""
      ) {
        showWinner(1, 4, 7);
      } else if (
        boxes[2].innerHTML == boxes[5].innerHTML &&
        boxes[5].innerHTML == boxes[8].innerHTML &&
        boxes[2].innerHTML.trim() != ""
      ) {
        showWinner(2, 5, 8);
      } else if (
        boxes[0].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[8].innerHTML &&
        boxes[0].innerHTML.trim() != ""
      ) {
        showWinner(0, 4, 8);
      } else if (
        boxes[2].innerHTML == boxes[4].innerHTML &&
        boxes[4].innerHTML == boxes[6].innerHTML &&
        boxes[2].innerHTML.trim() != ""
      ) {
        showWinner(2, 4, 6);
      }
    }
  });
}

//resets the game
document.getElementById("reset").addEventListener("click", function() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].style.backgroundColor = "#f5f5f5";
    boxes[i].style.color = "black";
  }
  currentPlayer = "x";
  document.getElementById("message").style.display = "none";
  document.getElementById("player").innerHTML = "X";
  gameStatus = "Game On";
});

//displays the winner
function showWinner(x, y, z) {
  boxes[x].style.background = "#dbc6eb";
  boxes[x].style.color = "white";
  boxes[y].style.background = "#dbc6eb";
  boxes[y].style.color = "white";
  boxes[z].style.background = "#dbc6eb";
  boxes[z].style.color = "white";
  document.getElementById("winner").innerHTML =
    currentPlayer == "x" ? "O" : "X";
  document.getElementById("message").style.display = "block";
  gameStatus = "Game Over";
  showModal();
}
