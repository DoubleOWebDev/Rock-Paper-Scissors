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
// 12/07/22 1:16AM End Time

/* I first declared the scores. Then created the game function. After, i created a do while loop to do my playRound function while the player and compScore is less than 5. The conditions within my do loop SHOULD be added increments of 1 to the player and comp score until it equals 5.*/

/****    My problem is occurring because I have an infinite loop going on as well as getting an error statement of 'Cannot read properties of null (reading'toUpperCase)' in which case I am also lost on why that is       ******/
let playerScore = 0;
let compScore = 0;

const game = () => {
do {
playRound()

if (playerScore === 'YOU WIN!!! YOU\'RE A WEINER!'){
 playerScore += 1;
}else if (compScore === 'YOU LOSE! BETTER LUCK NEXT TIME!!'){
 compScore +=1;
}else {
 'IT\'s A DRAW... What are you doing?!';
}
}
while (playerScore <= 5 && compScore <= 5)
console.log(playerScore)
console.log(compScore)
//Have prompt take a playRound parameter***ALREADY INSIDE ORIGINAL ROUND FUNCTION***
//Loop through a single playRound

//Keep score each 1 round

//Declare the winner or loser after 5 loops
}

