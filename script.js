let spanUserScore = document.getElementById("user-score");
let spanComputerScore = document.getElementById("computer-score"); 
let para = document.getElementById("round-message");
let resetBtn = document.querySelector("#reset")
let btnChoices = document.querySelectorAll(".choice")
let computerChoices = document.querySelectorAll(".computer-choice")

let userScore = 0;
let computerScore = 0;
let options = ["rock", "paper", "scissors"];
let randomIndex = Math.floor(Math.random() * 3);
function computerPlay() {
    return options[Math.floor(Math.random() * 3)];
}
function playRound(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase();
    if (userChoice == "rock" && computerChoice == "scissors" ||
        userChoice == "paper" && computerChoice == "rock" ||
        userChoice == "scissors" && computerChoice == "paper") {
            userScore++;
            return `You win this round, ${userChoice} beats ${computerChoice}`;
    }
    else if (userChoice == computerChoice) {
        return `It's a tie`;
    }
    else {
        computerScore++;
        return `You lose this round, ${userChoice} is beaten by ${computerChoice}`; 
    }     
}

function game(clicked) {   
    let computer = computerPlay();
    selectBtn(computerChoices, computer)
    para.textContent = playRound(clicked, computer);
    spanUserScore.textContent = "Your Score: " + userScore;
    spanComputerScore.textContent = "Computer Score: " + computerScore; 
    if (userScore == 5 || computerScore == 5 ) {
        document.getElementById("reset").disabled = false; 
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        let winner = document.getElementById("winner");
        if (userScore > computerScore) {
            winner.textContent = "You Won, The Computer Lost";
            document.querySelector('body').style.backgroundColor = "#99ff33";
        } else if (userScore < computerScore) {
            winner.textContent = "You Lost, he Computer Won";
            document.querySelector('body').style.backgroundColor = "#ff471a";
        }
    }
}
function reset() {
    userScore = 0;
    computerScore = 0;
    spanUserScore.textContent = "Your Score: 0";
    spanComputerScore.textContent = "Computer Score: 0"; 
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    winner.textContent = "";
    para.textContent = "Let's start!";
    document.getElementById("reset").disabled = true; 
    document.querySelector("body").style.backgroundColor = "#b8b894";
    selectBtn(computerChoices, "")
    selectBtn(btnChoices, "")
}

function selectBtn(choices, selected) {
    choices.forEach(btn => {
        if (btn.classList.length == 2) {
            btn.classList.remove("selected")
        }
        if (btn.value == selected) {
            btn.classList.add("selected")
        }
    })
}

btnChoices.forEach( btn => {
    btn.addEventListener("click", () => {
        game(btn.value)
        selectBtn(btnChoices, btn.value)
    })
})

