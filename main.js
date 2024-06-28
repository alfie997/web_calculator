const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equal = document.querySelector(".equal");
const backspace = document.querySelector(".backspace");

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

display.textContent = "0";

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

function clearOperation() {
    display.textContent = "0";
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

function clickOperator(o) {
    if (operator !== "" && result === 0 && secondOperand !== 0 && firstOperand !== 0) {
        console.log("oONE");
        secondOperand = parseInt(displayValue);
        result = operate(firstOperand, secondOperand, operator);
        display.textContent = `${result}${o}`;
        displayValue = result;
        secondOperand = result;

    } else if (firstOperand === 0 && secondOperand === 0) {
        console.log("oTWO");
        operator = o;
        display.textContent = `0${o}`;
        displayValue = "0";

    } else if (firstOperand !== 0 && operator !== "" && secondOperand === 0) {
        console.log("oTHREE");
        operator = o;
        display.textContent = `${firstOperand}${o}`;
        displayValue = firstOperand;

    } else if (secondOperand !== 0) {
        console.log("oFOUR");
        operator = o;
        display.textContent = `${secondOperand}${o}`;
        displayValue = secondOperand;

    } else {
        console.log("oFIVE");
        if (operator === "") {
            display.textContent += o;
        } else if (operator !== o && displayValue !== "") {
            display.textContent = "";
            display.textContent = `${displayValue}${o}`;
        }

        operator = o;
        displayValue = "";
    }
    
    if (result !== 0) {
        display.textContent = `${result}${o}`;
        firstOperand = result;
        secondOperand = 0;
        result = 0;
    }

    log();
}

function clickNumber(a) {
    if (displayValue === "" && operator === "") {
        console.log("nONE");
        display.textContent = "";

    } else if (displayValue === "0" && operator === "") {
        console.log("nTWO");
        display.textContent = "";
        displayValue = "";

    } else if (firstOperand !== 0 && operator !== "" && secondOperand === 0) {
        console.log("nTHREE");
        display.textContent = "";
        displayValue = "";

    } else if (firstOperand === 0 && operator !== "" && secondOperand === 0) {
        console.log("nFOUR");
        display.textContent = "";
        displayValue = "";

    } else if (firstOperand === 0 && operator !== "" && secondOperand !== 0) {
        console.log("nFIVE");
        display.textContent = "";
        displayValue = "";
        firstOperand = secondOperand;
        secondOperand = 0;

    } else if (displayValue === "" && result !== 0) {
        console.log("nSIX");
        display.textContent = "";
        firstOperand = 0;
        secondOperand = 0;
        operator = "";
        displayValue = "";
        result = 0;
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
    if (displayValue !== "" && operator !== "") {
        secondOperand = parseInt(displayValue);
        result = operate(firstOperand, secondOperand, operator);

        if (result === undefined) {
            clearOperation();
            display.textContent = "error";
        } else {
            display.textContent = result;
            displayValue = "";
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

backspace.addEventListener("click", (e) => {
    let index = displayValue.length-1;
    console.log(index);
    
    if (displayValue !== "" && displayValue !== "0") {
        displayValue = displayValue.slice(0, index);
        display.textContent = displayValue;

        if (secondOperand === 0) {
            firstOperand = displayValue;
            if (displayValue === "") {
                display.textContent = "0";
                firstOperand = 0;
            }
        } else {
            secondOperand = displayValue;
            if (displayValue === "") {
                display.textContent = "0";
                secondOperand = 0;
            }
        }
        
    }

    log();
});