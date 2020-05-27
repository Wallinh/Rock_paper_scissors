function computerPlay(){
    const options = ['rock', 'paper', 'scissors'];
    const choice = options[Math.floor(Math.random()*3)]
    console.log(choice)

    return choice;
}

function playRound(playerSelection, computerSelection){


    if (playerSelection === computerSelection){
        console.log('The game is  tie!')
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        console.log(`You win!${playerSelection} beats ${computerSelection}`)}
        
    else{
        console.log("you lose")
    }
    

}
let playerSelection = prompt("enter rock paper or scissors").toLowerCase()
playRound(playerSelection, computerPlay())
