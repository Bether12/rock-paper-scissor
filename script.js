function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
    if (choice == 0) 
        return 'rock'
    else if (choice ==1)
        return 'paper'
    else return 'scissor'
}

/*function getHumanChoice(e){
    if(e.target==document.getElementById('rock')){
        return 'rock';
    }else if(e.target==document.getElementById('paper')){
        return 'paper';
    }else{
        return 'scissor';
    }
}*/

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
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

let humanScore = 0;
let computerScore = 0;

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
