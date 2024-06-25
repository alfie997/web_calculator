const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
// const numbers = document.querySelector(".numbers");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equal = document.querySelector(".equal");

const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

let firstOperand = 0;
let secondOperand = 0;
let operator = "";

let displayValue = "";

function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    return a / b;
}

function operate(a, b, o) {
    if (o === "+") {
        return addNumbers(a, b);
    } else if (o === "-") {
        return subtractNumbers(a, b);
    } else if (o === "x") {
        return multiplyNumbers(a, b);
    } else if (o === "/") {
        return divideNumbers(a, b);
    }
}

function clickNumber(o) {
    if (firstOperand !== 0) {
        secondOperand = parseInt(displayValue);
        display.textContent = operate(firstOperand, secondOperand, operator);
        firstOperand = operate(firstOperand, secondOperand, operator);
    } else {
        firstOperand = parseInt(displayValue);
        operator = o;
        display.textContent += o;
        displayValue = "";
    }
}

// firstOperand = 5;
// secondOperand = 6;
// operator = "x";

zero.addEventListener("click", (e) => {
    display.textContent += "0";
    displayValue += "0";
    console.log(displayValue);
});
one.addEventListener("click", (e) => {
    display.textContent += "1";
    displayValue += "1";
    console.log(displayValue);
});
two.addEventListener("click", (e) => {
    display.textContent += "2";
    displayValue += "2";
    console.log(displayValue);
});
three.addEventListener("click", (e) => {
    display.textContent += "3";
    displayValue += "3";
    console.log(displayValue);
});
four.addEventListener("click", (e) => {
    display.textContent += "4";
    displayValue += "4";
    console.log(displayValue);
});
five.addEventListener("click", (e) => {
    display.textContent += "5";
    displayValue += "5";
    console.log(displayValue);
});
six.addEventListener("click", (e) => {
    display.textContent += "6";
    displayValue += "6";
    console.log(displayValue);
});
seven.addEventListener("click", (e) => {
    display.textContent += "7";
    displayValue += "7";
    console.log(displayValue);
});
eight.addEventListener("click", (e) => {
    display.textContent += "8";
    displayValue += "8";
    console.log(displayValue);
});
nine.addEventListener("click", (e) => {
    display.textContent += "9";
    displayValue += "9";
    console.log(displayValue);
});

add.addEventListener("click", (e) => {
    clickNumber("+");
});

subtract.addEventListener("click", (e) => {
    clickNumber("-");
});

multiply.addEventListener("click", (e) => {
    clickNumber("x");
});

divide.addEventListener("click", (e) => {
    clickNumber("/");
});

equal.addEventListener("click", (e) => {
    secondOperand = parseInt(displayValue);
    display.textContent = operate(firstOperand, secondOperand, operator);
});

clear.addEventListener("click", (e) => {
    display.textContent = "";
    firstOperand = 0;
    secondOperand = 0;
    operator = "";
    displayValue = "";
});
