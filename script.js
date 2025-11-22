function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
    if (choice == 0) 
        return 'rock'
    else if (choice ==1)
        return 'paper'
    else return 'scissor'
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissor?")
    return choice
}

function playRound(humanChoice, computerChoice){
    console.log(humanChoice+' '+computerChoice)
    if(humanChoice==computerChoice){
        console.log('Draw!');
    }else if(humanChoice=='rock'&&computerChoice=='scissor'){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }else if(humanChoice=='paper'&&computerChoice=='rock'){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }else if(humanChoice=='scissor'&&computerChoice=='paper'){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }else{
        computerScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame(){
    for(let i=0; i<5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(humanScore>computerScore){
        alert('You win!');
    }else{
        alert('You lose!');
    }
}

playGame();