function getComputerChoice() {
    let choices = ['ROCK' , 'PAPER' , 'SCISSORS'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}
let playerScore = 0
let computerScore = 0

let  playRound = (playerSelection , computerSelection) =>{ 

    let weaponChoice = playerSelection;
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


/*ROCK PAPER SCISSORS PSUEDO CODE
    Creating UI:
       Create title header
        Create h2 space for results
        {Create space to display results of both   players choices}
        Display score
        Box of images to put game choices 
    
    Connecting JS to DOM:
        Add eventlistener to each picture
        Make click equal a round
        Create redo game function
        Create redo
          Display result in h2 when clicked
          Display score in h2 when clicked
*/
//Add eventlistener to each picture
const btnRock = document.querySelector('.btnRock').addEventListener('click', () =>{
  alert('rock');
});



const btnPaper = document.querySelector('.btnPaper').addEventListener('click', () =>{
  alert('paper');
});



const btnScissors = document.querySelector('.btnScissors').addEventListener('click', () =>{
  alert('Scissors');
});

//Add eventlistener to each picture
/*In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
For now, remove the logic that plays exactly five rounds.
Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
Add a div for displaying results and change all of your console.logs into DOM methods.
Display the running score, and announce a winner of the game once one player reaches 5 points.
You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.*/