let humanScore = 0;
let computerScore = 0;

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

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log("It's a tie, try your luck again!");
    console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`);
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    humanScore++;
  } else {
    computerScore++;
  }
};

getHumanChoice();


