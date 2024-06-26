const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
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

let result = 0;

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
    if (b === 0) {
        return undefined;
    } else {
        return a / b;
    }
}

function operate(a, b, o) {
    if (o === "+") {
        return addNumbers(a, b);
    } else if (o === "-") {
        return subtractNumbers(a, b);
    } else if (o === "x") {
        return multiplyNumbers(a, b);
    } else if (o === "/" && b !== 0) {
        return divideNumbers(a, b);
    }
}

function clickOperator(o) {
    if (operator !== "" && result === 0 && secondOperand !== 0) {
        secondOperand = parseInt(displayValue);
        result = operate(firstOperand, secondOperand, operator);
        display.textContent = `${result}${o}`;
        displayValue = result;
        // operator = "";
    } else if (firstOperand === 0) {
        operator = o;
        display.textContent = `0${o}`;
        displayValue = "0";
    } else {
        // firstOperand = parseInt(displayValue);
        if (operator === "") {
            display.textContent += o;
        } else if (operator !== o && displayValue !== "") {
            display.textContent = "";
            display.textContent = `${displayValue}${o}`;
        }
        operator = o;
        displayValue = "";
    }
    log();
}

function clickNumber(a) {
    if (displayValue === "" && operator === "") {
        display.textContent = "";
    } else if (displayValue === "0" && operator === "") {
        display.textContent = "";
        displayValue = "";
    } else if (displayValue === "" && result !== 0) {
        clearOperation();
    }
    display.textContent += a;
    displayValue += a;
    if (operator === "") {
        firstOperand = parseInt(displayValue);
    } else if (operator !== "") {
        secondOperand = parseInt(displayValue);
    }
    log();
}

function clearOperation() {
    display.textContent = "";
    firstOperand = 0;
    secondOperand = 0;
    operator = "";
    displayValue = "";
    result = 0;
}

function log() {
    console.log(`1st ${firstOperand}`);
    console.log(`2nd ${secondOperand}`);
    console.log(`op ${operator}`);
    console.log(`value ${displayValue}`);
    console.log(`result ${result}`);
}

zero.addEventListener("click", (e) => {
    clickNumber("0");
});
one.addEventListener("click", (e) => {
    clickNumber("1");
});
two.addEventListener("click", (e) => {
    clickNumber("2");
});
three.addEventListener("click", (e) => {
    clickNumber("3");
});
four.addEventListener("click", (e) => {
    clickNumber("4");
});
five.addEventListener("click", (e) => {
    clickNumber("5");
});
six.addEventListener("click", (e) => {
    clickNumber("6");
});
seven.addEventListener("click", (e) => {
    clickNumber("7");
});
eight.addEventListener("click", (e) => {
    clickNumber("8");
});
nine.addEventListener("click", (e) => {
    clickNumber("9");
});

add.addEventListener("click", (e) => {
    clickOperator("+");
});
subtract.addEventListener("click", (e) => {
    clickOperator("-");
});
multiply.addEventListener("click", (e) => {
    clickOperator("x");
});
divide.addEventListener("click", (e) => {
    clickOperator("/");
});

equal.addEventListener("click", (e) => {
    if (displayValue !== "") {
        secondOperand = parseInt(displayValue);
        result = operate(firstOperand, secondOperand, operator);
        if (result === undefined) {
            clearOperation();
            display.textContent = "cannot do that operation";
        } else {
            display.textContent = result;
            // firstOperand = 0;
            // secondOperand = 0;
            // operator = "";
            displayValue = "";
            // result = 0;
        }
    } else if (displayValue === "" && firstOperand !== 0 && secondOperand !== 0) {
        result = operate(result, secondOperand, operator);
        display.textContent = result;
    }
    log();
});

clear.addEventListener("click", (e) => {
    clearOperation();
    log();
});
