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
        playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        computerSelection = getComputerChoice();
        if (playerSelection === "rock" && computerSelection === "Rock" || playerSelection === "paper" && computerSelection === "Paper" || playerSelection === "scissors" && computerSelection === "Scissors"){
            console.log("It's a tie! Your choice was: " + playerSelection + " and the computer choice was: " + computerSelection );
        }else if(playerSelection === "rock" && computerSelection === "Scissors" || playerSelection === "paper" && computerSelection === "Rock"){
            score += 1;
            console.log("You won! Your choice was: " + playerSelection + " and the computer choice was: " + computerSelection );
        }else{
            score -= 1;
            console.log("You lose! Your choice was: " + playerSelection + " and the computer choice was: " + computerSelection)
        }
        return score;
    }
    
    playRound();  
    playRound(); 
    playRound(); 
    playRound(); 
    playRound();   

    if(score > 0){
        document.write("You won the game! Congrats! Your score was " + score);
    }else if(score = 0){
        document.write("It's a tie! Keep trying. Your score was " + score);
    }else{
        document.write("You lose. Better luck next time. Your score was " + score);
    }

    /* Check negative numbers in a lose round. */
}

playGame();
