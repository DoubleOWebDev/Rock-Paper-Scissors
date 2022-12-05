//12/05/22 03:16PM Start Time

function getComputerChoice() {
    let choices = ['Rock' , 'Paper' , 'Scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

console.log(getComputerChoice());

function playGame(playerSelection , computerSelection){ 
     computerSelection = getComputerChoice();

    if (playerSelection === 'Rock' && computerSelection === 'Rock' || playerSelection === 'Paper' && computerSelection === 'Paper' || playerSelection === 'Scissors' && computerSelection === 'Scissors'){
        return 'IT\'s A DRAW... What are you doing?!';

    }else if (playerSelection === 'Scissors' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Rock' && computerSelection === 'Rock') {
        return 'YOU WIN!!! YOU\'RE A WEINER!';

    }else{
        return 'YOU LOSE! BETTER LUCK NEXT TIME!!';
    }
}
console.log(playGame('Rock'))