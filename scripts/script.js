let playerScore = 0;
let computerScore = 0;

const player = document.querySelector("#player-score");
player.textContent = playerScore;
const computer = document.querySelector("#computer-score");
computer.textContent = computerScore;
const roundText = document.querySelector("#winner-announcement");
const reset = document.querySelector(".reset-button");
reset.addEventListener("click", () => {
    weapons.forEach((weapon) => {
        weapon.disabled = false;
    });
    playerScore = 0;
    player.textContent = playerScore;
    computerScore = 0;
    computer.textContent = computerScore;
    roundText.textContent = "";
    reset.disabled = true;
});

const weapons = document.querySelectorAll(".weapon-choice");
weapons.forEach((weapon) =>
    weapon.addEventListener("click", () => {
        playRound(weapon.textContent);

        player.textContent = playerScore;
        computer.textContent = computerScore;
        if (playerScore === 5 || computerScore === 5) {
            playWinner();
        }
    })
);

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        roundText.textContent = "Tie!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        playerScore++;
        if (playerScore < 5) {
            roundText.textContent = `Player Wins Round! ${playerChoice} beats ${computerChoice}`;
        }
    } else {
        computerScore++;
        if (computerScore < 5) {
            roundText.textContent = `Computer Wins Round! ${computerChoice} beats ${playerChoice}`;
        }
    }
}

function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playWinner() {
    const winner = playerScore === 5 ? "Player" : "Computer";
    roundText.textContent = `${winner} Wins`;
    weapons.forEach((weapon) => {
        weapon.disabled = true;
    });
    reset.disabled = false;
}
