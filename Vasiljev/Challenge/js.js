let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')

let dice1 = document.getElementById('dice1')
let dice2 = document.getElementById('dice2')


dice1.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 8)
    player1.innerText = random
})


dice2.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 8)
    player2.innerText = random
})