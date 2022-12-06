//12/05/22 03:16PM Start Time
// 12/05/22 04:15PM End Time

function getComputerChoice() {
    let choices = ['ROCK' , 'PAPER' , 'SCISSORS'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

console.log(getComputerChoice());

function playGame(playerSelection , computerSelection){ 
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
