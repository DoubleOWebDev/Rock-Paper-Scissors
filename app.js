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

/*   ************************  ************** */
let rock = '🪨';
let scissors = '✂️';
let paper = '🧻';
const choices = [rock, paper, scissors];


function getComputerChoice() {
 let choice = choices[Math.floor(Math.random()*choices.length)];document.querySelector('.imageChoiceContainerComputer').textContent = choice;
  
  if(choice === rock) {
    return rock
  }else if (choice === paper){
    return paper
  }else {
    return scissors
  }
  return choice;
}

let playerScore = 0
let computerScore = 0

const  playRoundPaper = (playerSelection , computerSelection) =>{ 
  playerSelection = paper
  computerSelection = getComputerChoice();
  
  if (playerSelection === paper && computerSelection === rock){
      document.querySelector('#playerOne').textContent =playerScore++ ;
      return 'YOU WIN!!! YOU\'RE A WEINER!';
      }else if (playerSelection === paper && computerSelection === paper){
      return 'IT\'s A DRAW... What are you doing?!';        
      
  }else{
      document.querySelector('#comp').textContent =computerScore++ ;
      return 'YOU LOSE! BETTER LUCK NEXT TIME!!';
  }
}

const  playRoundRock = (playerSelection , computerSelection) =>{ 
  playerSelection = rock
  computerSelection = getComputerChoice();
  
  if (playerSelection === rock && computerSelection === scissors){
     document.querySelector('#playerOne').textContent =playerScore++ ;
      return 'YOU WIN!!! YOU\'RE A WEINER!';
      }else if (playerSelection === rock && computerSelection === rock){
      return 'IT\'s A DRAW... What are you doing?!';        
      
  }else{
      document.querySelector('#comp').textContent =computerScore++ ;
      return 'YOU LOSE! BETTER LUCK NEXT TIME!!';
  }
}

const  playRoundScissors = (playerSelection , computerSelection) =>{ 
  playerSelection = scissors
  computerSelection = getComputerChoice();
  
  if (playerSelection === scissors && computerSelection === paper){
      document.querySelector('#playerOne').textContent =playerScore++ ;
      return 'YOU WIN!!! YOU\'RE A WEINER!';
      }else if (playerSelection === scissors && computerSelection === scissors){
      return 'IT\'s A DRAW... What are you doing?!';        
      
  }else{
        document.querySelector('#comp').textContent =computerScore++ ;
      ;
      return 'YOU LOSE! BETTER LUCK NEXT TIME!!';
  }
}

const btnPlayerRock = document.querySelector('.btnRock').addEventListener('click', () =>{
  document.querySelector('.imageChoiceContainerPlayer').textContent = '🪨';
   console.log(playRoundRock())
});

const btnPlayerPaper = document.querySelector('.btnPaper').addEventListener('click', () =>{
  document.querySelector('.imageChoiceContainerPlayer').textContent = '🧻'; 
  console.log(playRoundPaper())
});

const btnPlayerScissors = document.querySelector('.btnScissors').addEventListener('click', () =>{
  document.querySelector('.imageChoiceContainerPlayer').textContent = '✂️';             
  console.log(playRoundScissors())
});



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
/*Display the running score, and announce a winner of the game once one player reaches 5 points.
You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.*/