let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')

let dice1 = document.getElementById('dice1')
let dice2 = document.getElementById('dice2')
let result = document.getElementById('result')

let name1 = document.getElementById('name1')
let name2 = document.getElementById('name2')

let first = name1.innerText += prompt('Player One name:');
let second = name2.innerText += prompt('Player Two name:');
let reset = document.getElementById('reset')
reset.style.visibility = 'hidden'

dice1.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 8)
    player1.textContent = random;
})

dice2.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 8)
    player2.textContent = random;
    decide()
    reset.style.visibility = 'visible';
    
    dice1.disabled = true;
    dice2.disabled = true;

})

reset.addEventListener('click', () => {
    player1.textContent = '';
    player2.textContent = '';

    result.textContent = '';

    dice1.disabled = false;
    dice2.disabled = false;

    reset.style.visibility = 'hidden'
})

function decide() {
    if(player1.textContent > player2.textContent) {
        result.textContent = `${first} Won`
    } else if(player1.textContent < player2.textContent) {
        result.textContent = `${second} Won`
    } else {
        result.textContent = 'Draw'
    }   
}