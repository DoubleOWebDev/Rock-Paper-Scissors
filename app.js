//12/05/22 03:16PM Start Time
// 12/05/22 04:15PM End Time

function getComputerChoice() {
    let choices = ['ROCK' , 'PAPER' , 'SCISSORS'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}


const playRound = (playerSelection , computerSelection)=>{ 
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === computerSelection){
        return 'IT\'s A DRAW... What are you doing?!';

    }else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER' || playerSelection === 'PAPER' && computerSelection === 'ROCK' || playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        return 'YOU WIN!!! YOU\'RE A WEINER!';

    }else{
        return 'YOU LOSE! BETTER LUCK NEXT TIME!!';
    }
}

//12/06/22 10:02PM Start Time
// 12/06/22 ---- End Time


//Set playRound to loop 5 times
let userScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win"
let lose = "You lose"
let tie = "It is a tie"

const game = () =>{
    for(var i=0;i<5;i++){
        let playerSelection = prompt("Pick a move");
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
        console.log("your score = " + userScore);
        console.log("Computer's score = " + computerScore);
      }      
}