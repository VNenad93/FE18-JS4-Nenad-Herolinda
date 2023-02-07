let circle = document.getElementById('circle')
let text = document.getElementById('text')

circle.addEventListener('mouseenter', () => {
    text.textContent = 'Mouse entered'

    circle.addEventListener('mouseleave', () => {
        text.textContent = 'Mouse left'
    })

    circle.addEventListener('click', () => {
        circle.style.background = 'gray'
    })

    circle.addEventListener('dblclick', () => {
        circle.style.background = 'blue'
    })
})

// circle.addEventListener('mouseleave', () => {
//     text.textContent = 'Mouse left'
// })