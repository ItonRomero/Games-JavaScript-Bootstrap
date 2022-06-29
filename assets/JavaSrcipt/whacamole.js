const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const whacamoleScore = document.querySelector('#whac-a-mole-score')


let Result = 0
let hitPosition 
let currentTime = 60
let timerID = null

function randomSquare() {
 squares.forEach(square => {
     square.classList.remove('mole')
 })

let randomSquare = squares[Math.floor(Math.random() * 9)]
 randomSquare.classList.add('mole')

hitPosition = randomSquare.id

}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition){
            Result++
            whacamoleScore.textContent = Result
            hitPosition = null
        }
    })
})


function moveMole() {
 
 timerID = setInterval(randomSquare, 500)
}

moveMole()



function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerID)
        alert("GAME OVER! your final score is" + Result)
    }

}

let countDownTimerId = setInterval(countDown, 1000)