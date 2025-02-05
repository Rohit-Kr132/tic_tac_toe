let checker = true;
const ticArray = ["", "", "", "", "", "", "", "", ""];

const boxes = document.querySelectorAll(".inner__box");
const turnBox = document.querySelector(".turn__indicator");
const turn = document.querySelector("span");

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWin(board, player) {
  // Check if any winning pattern is fully occupied by the player
  return winPatterns.some((pattern) =>
    pattern.every((index) => board[index] === player)
  );
}

boxes.forEach((box) => {
  box.addEventListener("click", function (e) {
    if (!box.classList.contains("clicked")) {
      const index = this.dataset.index;
      const player = checker ? "X" : "O";
      ticArray[index] = player;

      // Update the box with the player's mark
      box.innerHTML = `<img src="img/img--${
        checker ? 1 : 0
      }.png" alt="${player} mark" />`;
      turn.textContent = `${checker ? "O" : "X"}`;
      checker = !checker;
      box.classList.add("clicked");

      // Check if the player has won
      if (checkWin(ticArray, player)) {
        turnBox.innerHTML = `<span>${player}</span> wins!`;
        boxes.forEach((box) => box.classList.add("clicked"));
      } else if (!ticArray.includes("")) {
        turnBox.innerHTML = "It's a <span>draw</span>!";
      }
    }
  });
});
