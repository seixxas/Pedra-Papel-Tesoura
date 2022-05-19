const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let rColor

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 // ou voce pode usar possibleChoises.length
    console.log(randomNumber)

    if(randomNumber === 1 ){
        computerChoice = 'pedra'
    }
    if(randomNumber === 2 ){
        computerChoice = 'papel'
    }
    if(randomNumber === 3 ){
        computerChoice = 'tesoura'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice){
        result = 'Houve um empate'
        resultDisplay.style.color = 'black'
    }
    if (computerChoice === 'pedra' && userChoice === 'papel'){
        result = 'Você ganhou'
        resultDisplay.style.color = 'green'
    }
    if (computerChoice === 'pedra' && userChoice === 'tesoura'){
        result = 'Você perdeu'
        resultDisplay.style.color = 'red'
    }
    if (computerChoice === 'papel' && userChoice === 'tesoura'){
        result = 'Você ganhou'
        resultDisplay.style.color = 'green'
    }
    if (computerChoice === 'papel' && userChoice === 'pedra'){
        result = 'Você perdeu'
        resultDisplay.style.color = 'red'
    }
    if (computerChoice === 'tesoura' && userChoice === 'pedra'){
        result = 'Você ganhou'
        resultDisplay.style.color = 'green'
    }
    if (computerChoice === 'tesoura' && userChoice === 'papel'){
        result = 'Você perdeu'
        resultDisplay.style.color = 'red'
        
    }

    resultDisplay.innerHTML = result
}



