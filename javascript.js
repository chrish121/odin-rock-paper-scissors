let playerPoints = 0;
let computerPoints = 0;

for (let i = 0; i < 5; i++) {

let playerChoice = prompt("Rock, Paper, or Scissors?");
if (playerChoice === null) {
    console.log("Invalid");
    break;
}

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
        return("It's a Tie!");
    }
    
    else {
        return("Invalid.");
    }
}

function game() {
    if (playRound(playerSelection, computerSelection) == ("You Win! " + playerSelection + " beats " + computerSelection + ".")) {
        let newPlayerPoints = (playerPoints += 1);
        return (playRound(playerSelection, computerSelection) + " You get one point." + "\n" + "Player: " + newPlayerPoints + " " + "Computer: " + computerPoints);
    }
    else if (playRound(playerSelection, computerSelection) == ("You Lose! " + computerSelection + " beats " + playerSelection + ".")) {
        let newComputerPoints = (computerPoints += 1);
        return (playRound(playerSelection, computerSelection) + " Your opponent gets one point." + "\n" + "Player: " + playerPoints + " " + "Computer: " + newComputerPoints);
    }
    else {
        return (playRound(playerSelection, computerSelection) + " No points." + "\n" + "Player: " + playerPoints + " " + "Computer: " + computerPoints);
    }
}

console.log(game());

}

function score() {
    if (playerPoints > computerPoints) {
        return ("You win the tournament!");
    }
    else if (computerPoints > playerPoints) {
        return("You lose the tournament.");
    }
    else if (computerPoints = playerPoints) {
        return("The tournament is a tie!");
    }
    else {
        return("There is no tournament winner.")
    }
}

console.log(score());