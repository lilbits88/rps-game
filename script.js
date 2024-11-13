/*const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1){
    return "ROCK"
  }
  else if (randomNum === 2) {
    return "PAPER"
  }
  else {
    return "SCISSORS"
  }
}


const getHumanChoice = () => {
  let choice = prompt("Choose Rock, Paper, or Scissors")
  choice = choice.toUpperCase()
  return choice 
}

let humanScore = 0;
let computerScore = 0;

const playGame = () => {

  for(i = 0; i < 5; i++){
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

const playRound = (humanChoice, computerChoice) => {

  if (humanChoice === computerChoice) {
    console.log("It's a tie, try your luck again!")
    console.log(`Human Score:${humanScore} Computer Score ${computerScore}`)
    
  }
 else if ((humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
         (humanChoice === "PAPER" && computerChoice === "ROCK") ||
         (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
          console.log(`You win, ${humanChoice} beats ${computerChoice}`);
          humanScore++;
          console.log(`Human Score:${humanScore} Computer Score ${computerScore}`)
         }
        else {
          console.log(`You lose, ${computerChoice} beats ${humanChoice}, computer wins`);
          computerScore++;
          console.log(`Human Score:${humanScore} Computer Score ${computerScore}`)

        }
};

playRound(humanChoice, computerChoice)
  }
}

playGame()
*/




