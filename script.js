const boxes = document.querySelectorAll(".box");
let turnO = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.textContent = "O";
            turnO = false;
        } else {
            box.textContent = "X";
            turnO = true;
        }
        box.disabled = true;
        
        checkWinner();
    });
});

const clearBoxes = () => {
  boxes.forEach((box) => (box.textContent = ""));
  boxes.forEach((box) => (box.disabled = false));
  winDisplay.textContent = "";
};
const disbaleBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const winDisplay = document.querySelector(".win");

const showWinner = (player) => {
  winDisplay.textContent = `${player} WINNER!`;
  disbaleBoxes();
};
const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].textContent;
    let pos2Val = boxes[pattern[1]].textContent;
    let pos3Val = boxes[pattern[2]].textContent;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

const newGameButton = document.querySelector(".newBtn");
newGameButton.addEventListener("click", () => {
  clearBoxes();
});

const resetButton = document.querySelector(".resetBtn");
resetButton.addEventListener("click", () => {
  clearBoxes();
});
