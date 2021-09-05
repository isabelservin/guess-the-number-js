alert("Welcome to Guess That Number!")

let userName = prompt("What is your name?")
let userNum = parseInt(prompt("Please choose a number."))

while (!Number.isInteger(userNum)){
    userNum = parseInt(prompt("UH OH! Please enter a valid number"))
}

//generate a random number
const genRandNum = (min, max) => {
    let range = Math.round(Math.random() * (max + min - 1) + min)
    return range
}

let randomNum = genRandNum(1,100)

if(userNum === randomNum) {
    alert(`YAY! ${userName} YOU WON! You guessed correctly`)
} else{
    alert(`Sorry ${userName}, you guessed incorrectly.`)
}