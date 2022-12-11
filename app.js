function getComputerChoice() {
    let choices = ['ROCK' , 'PAPER' , 'SCISSORS'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}
let playerScore = 0
let computerScore = 0

let  playRound = (playerSelection , computerSelection) =>{ 
    let weaponChoice = prompt('Choose your Weapon!!!');
    computerSelection = getComputerChoice();
    playerSelection = weaponChoice.trim().toUpperCase();
  
    if (playerSelection === computerSelection){
        return 'IT\'s A DRAW... What are you doing?!';        

    }else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER' || playerSelection === 'PAPER' && computerSelection === 'ROCK' || playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        playerScore++;
        return 'YOU WIN!!! YOU\'RE A WEINER!';
        
    }else{
        computerScore++;
        return 'YOU LOSE! BETTER LUCK NEXT TIME!!';
    }
}


const game = (round) =>{
  for (let i = 0; i < round; i++){
    playRound()
  }
  if (playerScore > computerScore){
   console.log(playerScore , computerScore );
   return 'Congrats you WINNN'
  }
  else if (computerScore > playerScore) {
    console.log(playerScore , computerScore );
    return 'TRY NEXT TIME! YOU LOOOOOSE!!!!!'
  }
  else {
    console.log(playerScore , computerScore );
    return 'IT IS A DRAW'
  }
}
