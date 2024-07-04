let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let new_btn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
    checkDraw();
  });
});

const checkWinner = () => {
  for (let pattern of winPattern) {
    let p1 = boxes[pattern[0]].innerHTML;
    let p2 = boxes[pattern[1]].innerHTML;
    let p3 = boxes[pattern[2]].innerHTML;

    if (p1 !== "" && p2 !== "" && p3 !== "") {
      if (p1 === p2 && p2 === p3) {
        showWinner(p1);
        return;
      }
    }
  }
};

const checkDraw = () => {
  for (let box of boxes) {
    if (box.innerHTML === "") {
      return; //  
    }
  }
  showDraw();
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, the winner is ${winner}`;
  msgContainer.classList.remove('hide');
  disableBoxes();
};

const showDraw = () => {
  msg.innerText = "It's a draw!";
  msgContainer.classList.remove('hide');
  disableBoxes();
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
  });
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

reset_btn.addEventListener("click", resetGame);
new_btn.addEventListener("click", resetGame);
