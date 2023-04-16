let playerPoints = 0;
let computerPoints = 0;

/* for (let i = 0; i < 5; i++) {

let playerChoice = prompt("Rock, Paper, or Scissors?");
if (playerChoice === null) {
    console.log("Invalid");
    break;
} */

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = choices[(Math.floor(Math.random() * (choices.length)))];
    return(randomChoice);
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", playRound)
    });


function playRound() {
    var playerSelection = this.id;
    var computerSelection = getComputerChoice();

    if ((playerPoints != 5) && (computerPoints != 5)) {
        console.log("P: " + playerSelection);
        console.log("C: " + computerSelection);
        function playGame(playerSelection, computerSelection) {
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
            if (playGame(playerSelection, computerSelection) == ("You Win! " + playerSelection + " beats " + computerSelection + ".")) {
                let newPlayerPoints = (playerPoints += 1);
                return (playGame(playerSelection, computerSelection) + " You get one point." + "\n" + "Player: " + newPlayerPoints + " " + "Computer: " + computerPoints);
            }
            else if (playGame(playerSelection, computerSelection) == ("You Lose! " + computerSelection + " beats " + playerSelection + ".")) {
                let newComputerPoints = (computerPoints += 1);
                return (playGame(playerSelection, computerSelection) + " Your opponent gets one point." + "\n" + "Player: " + playerPoints + " " + "Computer: " + newComputerPoints);
            }
            else {
                return (playGame(playerSelection, computerSelection) + " No points." + "\n" + "Player: " + playerPoints + " " + "Computer: " + computerPoints);
            }
        }

        console.log(game());

        if ((playerPoints == 5) || (computerPoints == 5)) {
            if (playerPoints > computerPoints) {
                console.log("You win the tournament!");
            }
            else if (computerPoints > playerPoints) {
                console.log("You lose the tournament.");
            }
            else if (computerPoints = playerPoints) {
                console.log("The tournament is a tie!");
            }
            else {
                console.log("There is no tournament winner.")
            }
        }
    } else {
        return;
    }
}


/* function game() {
    var playerSelection = this.id;

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


function score() {

    if (playerPoints > computerPoints) {
        return (game() + "\nYou win the tournament!");
    }
    else if (computerPoints > playerPoints) {
        return(game() + "\nYou lose the tournament.");
    }
    else if (computerPoints = playerPoints) {
        return(game() + "\nThe tournament is a tie!");
    }
    else {
        return(game() + "\nThere is no tournament winner.")
    }
}

console.log(score()); */