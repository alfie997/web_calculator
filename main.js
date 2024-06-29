const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equal = document.querySelector(".equal");
const backspace = document.querySelector(".backspace");

const zeroZero = document.querySelector(".zero-zero");
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
const dot = document.querySelector(".dot");

let firstOperand = 0;
let secondOperand = 0;
let operator = "";

let displayValue = "0";

let result = 0;
// let postResult = "";

let floating = "";

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

function trimNumber(number) {
    let trimmed = String(number);
    if (trimmed.length >= 12) {
            trimmed = trimmed.slice(0, 12);
    }
    return trimmed;
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
        secondOperand = parseFloat(displayValue);
        result = operate(firstOperand, secondOperand, operator);
        // display.textContent = `${result}${o}`;
        display.textContent = trimNumber(result) + o;
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
        // display.textContent = `${firstOperand}${o}`;
        display.textContent = trimNumber(firstOperand) + o;
        displayValue = firstOperand;

    } else if (secondOperand !== 0) {
        console.log("oFOUR");
        operator = o;
        // display.textContent = `${secondOperand}${o}`;
        display.textContent = trimNumber(secondOperand) + o;
        displayValue = secondOperand;

    } else {
        console.log("oFIVE");
        if (operator === "") {
            display.textContent += o;
        } else if (operator !== o && displayValue !== "") {
            display.textContent = "";
            // display.textContent = `${displayValue}${o}`;
            display.textContent = trimNumber(displayValue) + o;
        }

        operator = o;
        displayValue = "";
    }
    
    if (result !== 0) {
        // postResult = String(result);
        // console.log(postResult);

        // if (postResult.length >= 12) {
        //     postResult = postResult.slice(0, 12);
        // }

        // display.textContent = `${result}${o}`;
        display.textContent = trimNumber(result) + o;
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

    } else if (displayValue === "0" && operator === "" && a !== "00") {
        console.log("nTWO");
        display.textContent = "";
        displayValue = "";

    } else if (firstOperand !== 0 && operator !== "" && secondOperand === 0 && !Number.isInteger(secondOperand)) {
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
        clearOperation();
        display.textContent = "";
        // firstOperand = 0;
        // secondOperand = 0;
        // operator = "";
        // displayValue = "";
        // result = 0;
    }

    // console.log(parseInt(displayValue) < 12);
    if (displayValue === "" || displayValue.length < 12 && firstOperand !== 0) {
        displayValue += a;
        display.textContent = displayValue;
    // } else if (displayValue.length < 12) {
    //     displayValue += a;
    //     display.textContent = displayValue;
    } else if (a === "00") {
        displayValue = "0";
        display.textContent = displayValue;
    }

    if (operator === "") {
        firstOperand = parseFloat(displayValue);
    } else if (operator !== "") {
        secondOperand = parseFloat(displayValue);
    }

    log();
}

zeroZero.addEventListener("click", (e) => {
    clickNumber("00");
});
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

dot.addEventListener("click", (e) => {
    if (Number.isInteger(firstOperand) && operator === "") {
        floating = firstOperand;
        floating += ".";
        console.log(floating);
        firstOperand = parseFloat(floating);
        displayValue = floating;
        display.textContent = trimNumber(displayValue);
        floating = "";
    } else if (Number.isInteger(secondOperand) && operator !== "") {
        floating = secondOperand;
        floating += ".";
        secondOperand = parseFloat(floating);
        displayValue = floating;
        display.textContent = trimNumber(displayValue);
        floating = "";
    }
    
    log();
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
        secondOperand = parseFloat(displayValue);
        result = operate(firstOperand, secondOperand, operator);
        // let postResult = String(result);
        // console.log(postResult);

        // if (postResult.length >= 12) {
        //     postResult = postResult.slice(0, 12);
        // }

        // if (result === undefined) {
        //     clearOperation();
        //     display.textContent = "error";
        // } else {
        //     display.textContent = postResult;
        //     displayValue = "";
        // }


    } else if (displayValue === "" && firstOperand !== 0 && secondOperand !== 0) {
        result = operate(result, secondOperand, operator);
        // display.textContent = result;
    }

    // postResult = String(result);
    // console.log(postResult);

    // if (postResult.length >= 12) {
    //     postResult = postResult.slice(0, 12);
    // }

    if (result === undefined) {
        clearOperation();
        display.textContent = "error";
    } else {
        display.textContent = trimNumber(result);
        displayValue = "";
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
        display.textContent = trimNumber(displayValue);

        if (secondOperand === 0) {
            firstOperand = parseFloat(displayValue);
            if (displayValue === "") {
                display.textContent = "0";
                firstOperand = 0;
            }
        } else {
            secondOperand = parseFloat(displayValue);
            if (displayValue === "") {
                display.textContent = "0";
                secondOperand = 0;
            }
        }
        
    }

    log();
});