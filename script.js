const result = document.querySelector('.result');
const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const restartBtn = document.querySelector('.restartBtn');

let number = Math.floor(Math.random() * (100 - 1)) + 1;
result.textContent = `Guess Number 😉`;

function handleClick () {
    console.log('worked')
    if (number > input.value) {
        result.textContent = 'Number is greater';
    }
    else if (number < input.value) {
        result.textContent = 'Number is lower';
    }
    if (number == input.value) {
        result.textContent = `You Won! Number was ${number} 😜`;
        button.style.display = 'none';
        restartBtn.style.display = 'inline';
    }
}

function handleRestart () {
    number = Math.floor(Math.random() * (100 - 1)) + 1;
    result.textContent = `Guess Number 😉`;
    restartBtn.style.display = 'none';
    button.style.display = 'block';
    input.value = 0;
}