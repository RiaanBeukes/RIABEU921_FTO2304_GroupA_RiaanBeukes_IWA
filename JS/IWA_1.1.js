const MAX_NUMBER = 15
const MIN_NUMBER = -5
const STEP_AMOUNT = 5;

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-keys="subtract"]')
const add = document.querySelector('[data-key="add"]')

// (boolean=   console.log(typeof 123, typeoff "123")

const subtractHandler = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT
    number.value = newValue

    if (add.disabled === true) {
        add.disabled = false
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    }
}
    
const addHandler = () => {
        const newValue = parseInt(number.value) + 1
        number.value = newValue
    

    if (number.value <= MIN_NUMBER) {
        add.disabled = false
    }

    if (number.value >= MAX_NUMBER) {
        add.disabled = true
    }
}