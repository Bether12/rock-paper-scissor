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
    if(humanChoice==computerChoice){
        return 'Draw!'
    }else if(humanChoice=='rock'&&computerChoice=='scissor'){
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }else if(humanChoice=='paper'&&computerChoice=='rock'){
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }else if(humanChoice=='scissor'&&computerChoice=='paper'){
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }else{
        computerScore++;
        return `You lose! ${humanChoice} beats ${computerChoice}`;
    }
}

let humanScore = 0;
let computerScore = 0;