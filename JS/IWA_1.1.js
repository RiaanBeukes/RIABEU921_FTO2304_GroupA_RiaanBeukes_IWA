console.log('Hello World')

const MAX_NUMBER = 15
const MIN_NUMBER = -5
const STEP_AMOUNT = 1;

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-keys="subtract"]')
const add = document.querySelector('[data-key="add"]')

//  subtract.addEventListener('click', )
//  add.addEventListener('click', )

//   console.log(typeof 123, typeoff "123", typeoff true)

const subtractHandler = () => {
    //const newValue = parseInt(number.value) - STEP_AMOUNT
    const newValue = parseInt(number.value) - 1
    number.value = newValue

    // * v THIS is called an "Operator" v *
    //if (add.disabled === true) {
    //    add.disabled = false}

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
    
        if (subtract.disabled === true) {
        subtract.disabled = false
    }
}