let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = choices[(Math.floor(Math.random() * (choices.length)))];
    return(randomChoice);
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", playRound)
    });

const results = document.querySelector("#results");
const divStyle = document.querySelector("div").style;
divStyle.border = "2px solid black";
divStyle.margin = "15px";
divStyle.padding = "10px";

const points = document.createElement("div");
points.classList.add("content");
points.setAttribute("style", "white-space: pre-wrap")

const finalResult = document.createElement("div");
finalResult.classList.add("content");

results.appendChild(points);
results.appendChild(finalResult);


function playRound() {
    var playerSelection = this.id;
    var computerSelection = getComputerChoice();

    if ((playerPoints != 5) && (computerPoints != 5)) {
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

        points.textContent = `P: ${playerSelection} \nC: ${computerSelection} \n${(game())}`;

        if ((playerPoints == 5) || (computerPoints == 5)) {
            if (playerPoints > computerPoints) {
                finalResult.textContent = ("You win the tournament!");
            }
            else if (computerPoints > playerPoints) {
                finalResult.textContent = ("You lose the tournament.");
            }
            else if (computerPoints = playerPoints) {
                finalResult.textContent = ("The tournament is a tie!");
            }
            else {
                finalResult.textContent = ("There is no tournament winner.")
            }
        }
    } else {
        return;
    }
}