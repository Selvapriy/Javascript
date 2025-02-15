function playGame(playerChoice) {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's a Tie! 🤝";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You Win! 🎉 ${playerChoice} beats ${computerChoice}`;
    } else {
        result = `You Lose! 😢 ${computerChoice} beats ${playerChoice}`;
    }

    document.getElementById("result").textContent = result;
}
