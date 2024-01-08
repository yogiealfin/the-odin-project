function getComputerChoice() {
  rng = Math.random();
  let computerMove;

  if (rng >= 0 && rng < 1 / 3) {
    computerMove = "rock";
  } else if (rng >= 1 / 3 && rng < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissor";
  }
  return computerMove;
}
