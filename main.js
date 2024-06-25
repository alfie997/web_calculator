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

// console.log(addNumbers(1, 2));
// console.log(subtractNumbers(4, 2));
// console.log(multiplyNumbers(3, 3));
// console.log(divideNumbers(6, 2));

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

let firstOperand = 0;
let secondOperand = 0;
let operator = "";

firstOperand = 5;
secondOperand = 6;
operator = "x";

console.log(operate(firstOperand, secondOperand, operator));