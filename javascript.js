let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
    let things = ['rock', 'paper', 'scissors'];
    let computerSelection = things[Math.floor(Math.random()*things.length)];
    return computerSelection;
}

function game(){
    function playRound(playerSelection, computerSelection){
        if (playerSelection == 'rock' && computerSelection == 'paper'){
            computerScore += 1;
            return 'You Lose! Paper beats Rock!';
        } 
        else if (playerSelection == 'rock' && computerSelection == 'scissors'){
            playerScore +=1;
            return 'You Win! Rock beats Scissors!';
        }
        
        else if (playerSelection == 'paper' && computerSelection == 'scissors'){
            computerScore +=1;
            return 'You lose! Scissors beats Paper!'
        }
        else if (playerSelection == 'paper' && computerSelection == 'rock'){
            playerScore +=1;
            return 'You win! Paper beats Rock!';
        }
    
        else if (playerSelection == 'scissors' && computerSelection == 'rock'){
            computerScore +=1;
            return 'You lose! Rock beats Scissors!';
        }
        else if (playerSelection == 'scissors' && computerSelection == 'paper'){
            playerScore +=1;
            return 'You win! Scissors beats Paper!';
        }
        else if (playerSelection == computerSelection){
            return 'Tie! Results inconclusive uWu';
        }
        else{
            return "Error! Please put a correct value in!";
        }
    }
    for (let i = 0; i < 5; i++) {
          const playerSelection = prompt("Rock, Paper, or Scissors?");
          const computerSelection = getComputerChoice();
          console.log(playRound(playerSelection.toLowerCase(), computerSelection));
     }

     if (playerScore > computerScore){
        console.log (playerScore + " to " + computerScore + ": Player wins!");
        computerScore *= 0;
        playerScore *= 0;
     }
     else if (computerScore > playerScore){
        console.log(computerScore + " to " + playerScore + ": Computer wins!");
        computerScore *= 0;
        playerScore *= 0;
     }
     else {
        console.log("Tied game! Run it back!!!");
     }
}