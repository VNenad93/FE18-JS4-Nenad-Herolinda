let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')

let dice1 = document.getElementById('dice1')
let dice2 = document.getElementById('dice2')
let result = document.getElementById('result')

dice1.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 8)
    player1.textContent = random;
})

dice2.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 8)
    player2.textContent = random;
    decide()
})

function decide() {
    if(player1.textContent > player2.textContent) {
        result.textContent = 'Player 1 Won'
    } else if(player1.textContent < player2.textContent) {
        result.textContent = 'Player 2 Won' 
    } else (
        result.textContent = 'Draw'
    )
}