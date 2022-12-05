//12/05/22 03:16PM Start Time
let choices = ['Rock' , 'Paper' , 'Scissors'];
function getComputerChoice() {
    
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

console.log(getComputerChoice())