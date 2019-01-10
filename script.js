const playerRock = document.getElementById('playerRock')
const playerScissors = document.getElementById('playerScissors')
const playerPaper = document.getElementById('playerPaper')
const resetButton = document.getElementById('reset')

let playerChoice;
let computerChoice;

let numWin = 0;
let numLose = 0;
let numTie = 0;

document.getElementById('select').addEventListener('click', function () {
    document.getElementById('startGame').style.display = "none"
    document.getElementsByClassName('wrapper')[0].style.display = "flex"
})

let computer = () => {
    let randomNum = Math.floor(Math.random() * 3 + 1)

    if (randomNum == 1) {
        computerChoice = "rock"
        document.getElementById('computerRock').style.borderColor = "black"
        document.getElementById('computerRock').style.backgroundColor = "white"

        document.getElementById('computerPaper').style.borderColor = "transparent"
        document.getElementById('computerPaper').style.backgroundColor = "transparent"

        document.getElementById('computerScissors').style.borderColor = "transparent"
        document.getElementById('computerScissors').style.backgroundColor = "transparent"
    } else if (randomNum == 2) {
        computerChoice = "scissors"
        document.getElementById('computerScissors').style.borderColor = "black"
        document.getElementById('computerScissors').style.backgroundColor = "white"

        document.getElementById('computerPaper').style.borderColor = "transparent"
        document.getElementById('computerPaper').style.backgroundColor = "transparent"

        document.getElementById('computerRock').style.borderColor = "transparent"
        document.getElementById('computerRock').style.backgroundColor = "transparent"

    } else if (randomNum == 3) {
        computerChoice = "paper"
        document.getElementById('computerPaper').style.borderColor = "black"
        document.getElementById('computerPaper').style.backgroundColor = "white"

        document.getElementById('computerScissors').style.borderColor = "transparent"
        document.getElementById('computerScissors').style.backgroundColor = "transparent"

        document.getElementById('computerRock').style.borderColor = "transparent"
        document.getElementById('computerRock').style.backgroundColor = "transparent"
    }
    console.log(computerChoice)
    console.log(playerChoice)
}

let updateScore = () => {
    document.getElementById('win').innerHTML = `Win: ${numWin}`
    document.getElementById('lose').innerHTML = `Lose: ${numLose}`
    document.getElementById('tie').innerHTML = `Tie: ${numTie}`

    console.log(numWin)
    console.log(numLose)
    console.log(numTie)
}

let checkWinner = () => {
    let win = false;
    let lose = false;
    let tie = false;

    if (computerChoice == playerChoice) {
        tie = true
        numTie += 1
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        win = true;
        numWin += 1
    } else if (computerChoice == "rock" && playerChoice == "scissors") {
        lose = true;
        numLose += 1
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        lose = true;
        numLose += 1
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        win = true;
        numWin += 1
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        lose = true;
        numLose += 1
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        lose = true;
        numLose += 1
    }

    if (tie === true) {
        document.getElementById('playerOutcome').innerHTML = "Tie!"
        document.getElementById('computerOutcome').innerHTML = "Tie!"
    } else if (lose === true) {
        document.getElementById('playerOutcome').innerHTML = "Lose!"
        document.getElementById('computerOutcome').innerHTML = "Winner!"
    } else if (win === true) {
        document.getElementById('playerOutcome').innerHTML = "Winner!"
        document.getElementById('computerOutcome').innerHTML = "Lose!"
    }

    updateScore()
}

playerRock.addEventListener('click', function () {
    playerChoice = "rock"
    document.getElementById('playerRock').style.borderColor = "black"
    document.getElementById('playerRock').style.backgroundColor = "white"

    document.getElementById('playerScissors').style.borderColor = "transparent"
    document.getElementById('playerScissors').style.backgroundColor = "transparent"

    document.getElementById('playerPaper').style.borderColor = "transparent"
    document.getElementById('playerPaper').style.backgroundColor = "transparent"

    computer()
    checkWinner()
})

playerPaper.addEventListener('click', function () {
    playerChoice = "paper"
    document.getElementById('playerPaper').style.borderColor = "black"
    document.getElementById('playerPaper').style.backgroundColor = "white"

    document.getElementById('playerRock').style.borderColor = "transparent"
    document.getElementById('playerRock').style.backgroundColor = "transparent"

    document.getElementById('playerScissors').style.borderColor = "transparent"
    document.getElementById('playerScissors').style.backgroundColor = "transparent"

    computer()
    checkWinner()
})

playerScissors.addEventListener('click', function () {
    playerChoice = "scissors"
    document.getElementById('playerScissors').style.borderColor = "black"
    document.getElementById('playerScissors').style.backgroundColor = "white"

    document.getElementById('playerPaper').style.borderColor = "transparent"
    document.getElementById('playerPaper').style.backgroundColor = "transparent"

    document.getElementById('computerRock').style.borderColor = "transparent"
    document.getElementById('computerRock').style.backgroundColor = "transparent"

    computer()
    checkWinner()
})

resetButton.addEventListener('click', function () {
    document.getElementById('playerOutcome').innerHTML = ""
    document.getElementById('computerOutcome').innerHTML = ""

    document.getElementById('playerScissors').style.borderColor = "transparent"
    document.getElementById('playerScissors').style.backgroundColor = "transparent"

    document.getElementById('playerPaper').style.borderColor = "transparent"
    document.getElementById('playerPaper').style.backgroundColor = "transparent"

    document.getElementById('playerRock').style.borderColor = "transparent"
    document.getElementById('playerRock').style.backgroundColor = "transparent"

    document.getElementById('computerPaper').style.borderColor = "transparent"
    document.getElementById('computerPaper').style.backgroundColor = "transparent"

    document.getElementById('computerScissors').style.borderColor = "transparent"
    document.getElementById('computerScissors').style.backgroundColor = "transparent"

    document.getElementById('computerRock').style.borderColor = "transparent"
    document.getElementById('computerRock').style.backgroundColor = "transparent"

    document.getElementById('win').innerHTML = 'Win: 0'
    document.getElementById('lose').innerHTML = 'Lose: 0'
    document.getElementById('tie').innerHTML = 'Tie: 0'
})