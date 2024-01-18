// const random = parseInt(Math.random() * 100 + 1)

// console.log(random);

// const form = document.querySelector('.form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const num = document.querySelector('.guessField').value;
    
//     if (num ==='' || num < 1 || isNaN(num)) {
//         alert(`Please enter a valid input`)
//         document.querySelector('.guessField').innerHTML = ``;
//     }
//     else if(num < random) {
//         document.querySelector('.lowOrHi').innerHTML = `${num} is tooo low`;
//     }
//     else if (num > random) {
//         document.querySelector('.lowOrHi').innerHTML = `${num} is too high`;
//     }else {
//         document.querySelector('.lowOrHi').innerHTML = `you are right`
//     }
// })


let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(guess === '' || isNaN(guess)){
        userInput.value = '';
        alert(`Please enter a valid Number`)
    }else if(guess < 1){
        userInput.value = '';
        alert(`Please enter a Number greater than 0`);
    }else if(guess > 100){
        userInput.value = '';
        alert(`Please enter a Number less than 101`);
    }else {
        prevGuess.push(guess);
        if(numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over . Random Number was ${randomNumber}`);
            endGame();
        }else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber) {
        displayMessage(`You guessed it Right`);
        endGame();
    }
    else if(guess < randomNumber) {
        displayMessage(`Number is Tooo Low`);
    }
    else if(guess > randomNumber) {
        displayMessage(`Number is Tooo High`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`; 
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() *100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.innerHTML = '';
        playGame = true;
    })

}

