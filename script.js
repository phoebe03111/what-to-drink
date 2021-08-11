const drinks = document.querySelector('.drinks')
const button = document.querySelector('.button')

button.addEventListener('click', (e) => randomSelect())

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomDrink = pickRandomDrink()

        highlight(randomDrink)

        setTimeout(()=>{
            unhighlight(randomDrink)
        }, 100)
    }, 100)

    setTimeout(()=>{
        clearInterval(interval)

        setTimeout(() =>{
            const rangomDrink = pickRandomDrink()  
            highlight(rangomDrink)
        }, 100)
    }, times * 100)
}

function pickRandomDrink(){
    const drinks = document.querySelectorAll('.drinks')
    return drinks[Math.floor(Math.random() * drinks.length)]
}

function highlight(drink) {
    drink.classList.add('highlight')
}

function unhighlight(drink) {
    drink.classList.remove('highlight')
}