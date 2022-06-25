const cardArray = [
    {
        name: 'fries',
        img:  'assets/images/mindgame/fries.png'
    },
    {
        name: 'cheeseburger',
        img:  'assets/images/mindgame/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img:  'assets/images/mindgame/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:  'assets/images/mindgame/ice-cream.png'
    },
    {
        name: 'milkshake',
        img:  'assets/images/mindgame/milkshake.png'
    },
    {
        name: 'pizza',
        img:  'assets/images/mindgame/pizza.png'
    },
    {
        name: 'fries',
        img:  'assets/images/mindgame/fries.png'
    },
    {
        name: 'cheeseburger',
        img:  'assets/images/mindgame/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img:  'assets/images/mindgame/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:  'assets/images/mindgame/ice-cream.png'
    },
    {
        name: 'milkshake',
        img:  'assets/images/mindgame/milkshake.png'
    },
    {
        name: 'pizza',
        img:  'assets/images/mindgame/pizza.png'
    },
]


// first
cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.querySelector('#grid')
const resultDisplayss = document.querySelector('#mindgame-result')
let cardsChosen = []
let cardChosenIds = []
const cardsWon = []



// second
function createBoard(){

    for(i = 0; i < cardArray.length ; i++){
      const card = document.createElement('img')
      card.setAttribute('src', 'assets/images/mindgame/blank.png')
      card.setAttribute('data-id', i )
      card.addEventListener('click', flipcard)
      gridDisplay.append(card)
    }
}
createBoard()




//forth
function checkMatch(){
  const cards = document.querySelectorAll('img')
  const optionOneId = cardChosenIds[0]
  const optionTwoId = cardChosenIds[1]
  console.log("check for match")
  if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'assets/images/mindgame/blank.png')
    cards[optionTwoId].setAttribute('src', 'assets/images/mindgame/blank.png')
      alert('You have clicked the same image!')
  }

  if (cardsChosen[0] == cardsChosen[1]){
      alert("YOU FOUND A MATCH")
      cards[optionOneId].setAttribute('src', 'assets/images/mindgame/white.png')
      cards[optionTwoId].setAttribute('src', 'assets/images/mindgame/white.png')
      cards[optionOneId].removeEventListener('click', flipcard) 
      cards[optionTwoId].removeEventListener('click', flipcard) 
      cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'assets/images/mindgame/blank.png')
        cards[optionTwoId].setAttribute('src', 'assets/images/mindgame/blank.png')
        alert('Sorry Try Again')
    }

    resultDisplayss.textContent = cardsWon.length
    cardsChosen = []
    cardChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplayss.textContent = "CONGRATULATIONS you found them all"
        }
    
}


// third 

function flipcard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500) 
            
    }
}









