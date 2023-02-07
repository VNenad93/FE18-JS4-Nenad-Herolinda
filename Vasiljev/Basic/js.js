//ex1

// let btn = document.getElementById('btn')

// let text = document.getElementById('name')

// function print() {
//     let fname = document.getElementById('fname').value
//     let lname = document.getElementById('lname').value
//     let age = document.getElementById('age').value

//     console.log(fname, lname, age)

//     text.innerHTML = `${fname} ${lname} is  ${age} old.`
// }

// btn.addEventListener('click', print)


//ex2

let btn = document.getElementById('btn')
let text = document.getElementById('name')
let it = document.getElementById('it')
let medic = document.getElementById('medic')

function print() {
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let age = document.getElementById('age').value
    let cont = document.getElementById('cont')
    

    if (it.checked == true) {
        text.innerHTML = `${fname} ${lname} is  ${age} old and works in IT`
        cont.style.background = 'purple'
    } else if (medic.checked == true) {
        text.innerHTML = `${fname} ${lname} is  ${age} old and works in healtcare.`
        cont.style.background = 'yellow'
    }
}

btn.addEventListener('click', print)