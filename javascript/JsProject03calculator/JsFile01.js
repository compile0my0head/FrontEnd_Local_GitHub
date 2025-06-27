let num1 = document.getElementById("num1-el").innerText = 8
let num2 = document.getElementById("num2-el").innerText = 2
let numSum

function add() {
numSum = num1 + num2
    resultDisplay()
}

function substract() {
numSum = num1 - num2
    resultDisplay()
}

function divide() {
    numSum = num1/num2
    resultDisplay()
}

function multiply() {
    numSum = num1*num2
    resultDisplay()
}
let result = document.getElementById("sum-el")

function resultDisplay() {
    result.textContent = "Sum: " + numSum
    console.log(numSum)
}