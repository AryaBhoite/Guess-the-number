const secretNumber = Math.floor(Math.random()*100) + 1;
console.log(`The secret number is: ${secretNumber}`);

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

guessButton.addEventListener('click',function(){
    const userGuess = parseInt(guessInput.value);

    if(userGuess === secretNumber) {
        message.textContent = '🎉 Congratulations! You guessed it!!';
        message.style.color = 'green';
    } else if (userGuess > secretNumber) {
        message.textContent = 'Too high! Try Again.';
        message.style.color = 'orange';
    } else if (userGuess < secretNumber) {
        message.textContent = 'Too low! Try Again';
        message.style.color = 'orange';
    } else {
        message.textContent = 'Please enter a valid number.';
        message.style.color = 'red';
    }
     guessInput.value = '';
    guessInput.focus();

});