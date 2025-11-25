let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
    if (choice == 0) 
        return 'rock'
    else if (choice ==1)
        return 'paper'
    else return 'scissor'
}

const results = document.querySelector('.results');
const human_score = document.querySelector('#human-score');
const computer_score = document.querySelector('#computer-score');
const text = document.createElement('p');
results.appendChild(text);

function playRound(humanChoice, computerChoice){
    if(humanChoice==computerChoice){
        human_score.textContent = `Your score: ${humanScore}`;
        computer_score.textContent = `Computer's score: ${computerScore}`;
        text.textContent = 'Draw!';
    }else if(humanChoice=='rock'&&computerChoice=='scissor'){
        humanScore++;
        human_score.textContent = `Your score: ${humanScore}`;
        computer_score.textContent = `Computer's score: ${computerScore}`;
        text.textContent = `You win! ${humanChoice} beats ${computerChoice}`;

        if(humanScore==5){
            alert('You win the game!');
            humanScore = 0;
            computerScore = 0;
        }else if(computerScore==5){
            alert('You lose the game!');
            humanScore = 0;
            computerScore = 0;
        }

    }else if(humanChoice=='paper'&&computerChoice=='rock'){
        humanScore++;
        human_score.textContent = `Your score: ${humanScore}`;
        computer_score.textContent = `Computer's score: ${computerScore}`;
        text.textContent = `You win! ${humanChoice} beats ${computerChoice}`;

        if(humanScore==5){
            alert('You win the game!');
            humanScore = 0;
            computerScore = 0;
        }else if(computerScore==5){
            alert('You lose the game!');
            humanScore = 0;
            computerScore = 0;
        }

    }else if(humanChoice=='scissor'&&computerChoice=='paper'){
        humanScore++;
        human_score.textContent = `Your score: ${humanScore}`;
        computer_score.textContent = `Computer's score: ${computerScore}`;
        text.textContent = `You win! ${humanChoice} beats ${computerChoice}`;

        if(humanScore==5){
            alert('You win the game!');
            humanScore = 0;
            computerScore = 0;
        }else if(computerScore==5){
            alert('You lose the game!');
            humanScore = 0;
            computerScore = 0;
        }

    }else{
        computerScore++;
        human_score.textContent = `Your score: ${humanScore}`;
        computer_score.textContent = `Computer's score: ${computerScore}`;
        text.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;

        if(humanScore==5){
            alert('You win the game!');
            humanScore = 0;
            computerScore = 0;
        }else if(computerScore==5){
            alert('You lose the game!');
            humanScore = 0;
            computerScore = 0;
        }

    }
}



const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (e)=>{
    switch(e.target.id){
        case 'rock':
            playRound(e.target.id, getComputerChoice());
            break;
        case 'paper':
            playRound(e.target.id, getComputerChoice());
            break;
        case 'scissor':
            playRound(e.target.id, getComputerChoice());
            break;
    }
})
