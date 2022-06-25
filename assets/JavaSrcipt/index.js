
const possibleChoices = document.querySelectorAll(".buttons")
const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplays = document.getElementById('result')

let computerChoice
let resultDisplay

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    yourChoiceDisplay.textContent = userChoice 
    generateComputerChoice()
    result()
}))


function generateComputerChoice(){
const randomNumber = Math.floor(Math.random() * 3) + 1


if(randomNumber === 1) {
    computerChoice = "Rock"
}

if(randomNumber === 2) {
    computerChoice = "Paper"
}

if(randomNumber === 3) {
    computerChoice = "Scissors"
}

computerChoiceDisplay.textContent =  computerChoice
}


function result(){

    if(userChoice === computerChoice){
        resultDisplay = "It's a draw"
    }

    if(userChoice === "Rock" && computerChoice === "Paper"){
        resultDisplay = "You Lose"
    }
    if(userChoice === "Rock" && computerChoice === "Scissors"){
        resultDisplay = "You Win"
    }

    if(userChoice === "Paper" && computerChoice === "Scissors"){
        resultDisplay = "You Lose"
    }
    if(userChoice === "Paper" && computerChoice === "Rock"){
        resultDisplay = "You Win"
    }

    if(userChoice === "Scissors" && computerChoice === "Rock"){
        resultDisplay = "You Lose"
    }
    if(userChoice === "Scissors" && computerChoice === "Paper"){
        resultDisplay = "You Win"
    }

 resultDisplays.textContent = resultDisplay
}