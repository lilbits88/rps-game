let playerScore = 0;
let computerScore = 0;


const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    return "ROCK";
  } else if (randomNum === 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
};

const updateScore = () => {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

const playRound = (humanChoice) => {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    document.getElementById('prompt').textContent = "It's a tie, try again"
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    playerScore++;
    document.getElementById('prompt').textContent = "You win this round"

  } else {
    computerScore++;
    document.getElementById('prompt').textContent = "You lose this round"
  }
  updateScore();
  if (playerScore === 5){
    document.getElementById('prompt').textContent = "You win the Game!"
  }
  if (computerScore === 5) {
    document.getElementById('prompt').textContent = "You lost to the Computer"
  }
};

document.getElementById("rock").addEventListener("click", () => playRound("ROCK"));
document.getElementById("paper").addEventListener("click", () => playRound("PAPER"));
document.getElementById("scissors").addEventListener("click", () => playRound("SCISSORS"));


