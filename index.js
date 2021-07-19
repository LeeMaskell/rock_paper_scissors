//confirm user input
let userChoice;

let rock = document.getElementById("icon1");

function userChoiceRock() {
    userChoice = 'rock';
    //getComputerChoice();
    playGame();
}
rock.onclick = userChoiceRock; //event handler

let paper = document.getElementById("icon2");

function userChoicePaper() {
    userChoice = 'paper';
    //getComputerChoice();
    playGame();
}
paper.onclick = userChoicePaper; //event handler

let scissor = document.getElementById("icon3");

function userChoiceScissors() {
    userChoice = 'scissors';
    playGame();
}
scissor.onclick = userChoiceScissors; //event handler

//generate random computer choice
const getComputerChoice = () => {
    const randomNumber = Math.floor((Math.random()) * 3);
    if (randomNumber == 0) {
        return 'rock';
    } else if (randomNumber == 1) {
        return 'paper';
    } else if (randomNumber == 2) {
        return 'scissors';
    }
};

//game logic
const determineWinner = (userChoice, computerChoice) => {
    document.getElementById("container2").innerHTML = `<h3>You chose ${userChoice}!</h3>`
    document.getElementById("container3").innerHTML = `<h3>The computer chose ${computerChoice}!</h3>`;
    if (userChoice === computerChoice) {
        console.log('Tie! play again?')
        document.getElementById("container4").innerHTML = "<h1>Tie! play again?</h1>"
        document.getElementById("refresh").style.visibility = 'visible';
        return;
    };
    if ((userChoice === 'paper' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'rock')
        || (userChoice === 'rock' && computerChoice === 'paper')){
        console.log('The computer won!');
        document.getElementById("container4").innerHTML = "<h1>The Computer Won!</h1>"
        document.getElementById("refresh").style.visibility = 'visible';
    } else {
        console.log('You won!');
        document.getElementById("container4").innerHTML = "<h1>You Won!</h1>";
        document.getElementById("refresh").style.visibility = 'visible';
    }
};

//run game
const playGame = () => {
    //let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    console.log(`You chose ${userChoice}`);
    console.log(`The computer chose ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};


