let playerChoice = prompt("Rock, Paper, or Scissors?");

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[(Math.floor(Math.random() * (choices.length)))];
    return(randomChoice);
}

let playerCapital = (playerChoice.charAt(0)).toUpperCase();
let remainingPlayer = playerChoice.substring(1);
let playerLowercase = remainingPlayer.toLowerCase();
let playerCase = (playerCapital + playerLowercase);

let computerChoice = getComputerChoice();
let computerCapital = (computerChoice.charAt(0)).toUpperCase();
let remainingComputer = computerChoice.substring(1);
let computerLowercase = remainingComputer.toLowerCase();
let computerCase = (computerCapital + computerLowercase);

let playerSelection = playerCase;
let computerSelection = computerCase;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")) {
        return("You Win! " + playerSelection + " beats " + computerSelection + ".");
    }

    else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Scissors" && computerSelection == "Rock") ||
    (playerSelection == "Paper" && computerSelection == "Scissors")) {
        return("You Lose! " + computerSelection + " beats " + playerSelection + ".");
    }

    else if (playerSelection == computerSelection) {
        return("It's a Tie! Try again.");
    }
    
    else {
        return("Invalid");
    }
}
