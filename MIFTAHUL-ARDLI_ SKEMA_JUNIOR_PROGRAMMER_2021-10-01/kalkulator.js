// choose all element numbers
const numbers= document.querySelectorAll(".number")
// visualisize numbers in screen
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}

// input number in calculator
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

// input number for each number without 0
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number       
    }
}
// visualize number update by screen
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

// visualisize operators 
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}
const equalSign = document.querySelector('.equal-sign')
// calculating the number
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        case '%':
            result = parseFloat(prevNumber) / parseFloat(100)
        default:
            return

    }
    currentNumber = result
    calculationOperator = ''
}
equalSign.addEventListener('click', () => {
    calculate ()
    updateScreen(currentNumber)
})
const clearBtn = document.querySelector('.all-clear')
// clear button for removing all numbers in screen

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
    
})
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

// decimal adding to operation in calculator
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

// returning value dot in decimal operations
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
