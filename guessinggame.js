let maximum = parseInt(prompt('Enter the maximum number'));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('enter your first guess'));
let attempts = 1;


while (praseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Too high, try again:')
    } else {
        guess = prompt('Too low, try again:')
    }
}
if (guess === 'q') {
    console.log('You quit!')
} else {
    console.log('congrats you win')
    console.log(`You got it! it took you ${attempts} guesses`)
}