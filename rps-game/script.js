function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "fire") {
    if (computerMove === "fire") {
      result = "Tie.";
    } else if (computerMove === "water") {
      result = "You Lose.";
    } else {
      result = "You Win.";
    }
  } else if (playerMove === "water") {
    if (computerMove === "fire") {
      result = "You Win.";
    } else if (computerMove === "water") {
      result = "Tie.";
    } else {
      result = "You Lose.";
    }
  } else {
    if (computerMove === "fire") {
      result = "You Lose.";
    } else if (computerMove === "water") {
      result = "You Win.";
    } else {
      result = "Tie.";
    }
  }

  alert(`You picked ${playerMove}. Enemy picked ${computerMove}. ${result}`);
}

function pickComputerMove() {
  const rng = Math.random();
  let computerMove;

  if (rng >= 0 && rng < 1 / 3) {
    computerMove = "fire";
  } else if (rng >= 1 / 3 && rng < 2 / 3) {
    computerMove = "water";
  } else {
    computerMove = "wood";
  }
  return computerMove;
}
