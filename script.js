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