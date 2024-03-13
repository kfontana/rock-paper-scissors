function getComputerChoice(){
    let computerChoice;
    let numberChoice = parseInt(Math.random()*3);
    if(numberChoice === 0){
        computerChoice = "Rock";
    }else if (numberChoice === 1){
        computerChoice = "Paper";
    }else{
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function playGame(){
    let score = 0;

    function playRound(playerSelection, computerSelection){
        computerSelection = getComputerChoice();
        if (playerSelection === "Rock" && computerSelection === "Rock" || playerSelection === "Paper" && computerSelection === "Paper" || playerSelection === "Scissors" && computerSelection === "Scissors"){
        }else if(playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock"){
            score += 1;
        }else{
            score -= 1;
        }

        const scoreDiv = document.querySelector('#score');
        scoreDiv.textContent = "Score: " + score + " (wins who reach to 5 first.)";

        if(score === 5){
            scoreDiv.textContent = "You won the game! Congrats! Your score was " + score;
            score = 0;
        }else if(score === -5){
            scoreDiv.textContent = "You lose. Better luck next time. Your score was " + score;
            score = 0;
        }
    
        return score;
    }

    const rockButton = document.querySelector('#rock');

    rockButton.addEventListener('click', () => {
        playRound('Rock');
    });   

    const paperButton = document.querySelector('#paper');

    paperButton.addEventListener('click', () => {
        playRound('Paper');
    });   

    const scissorsButton = document.querySelector('#scissors');

    scissorsButton.addEventListener('click', () => {
        playRound('Scissors');
    });   
}

playGame();