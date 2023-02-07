let cont = document.querySelectorAll('img')


function remove() {

    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

}

// remove()

cont.forEach(e => {
    e.addEventListener('click', () => {
        e.style.visibility = 'hidden'
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        document.body.style.background = `RGB(${r}, ${g}, ${b})`
    })
})