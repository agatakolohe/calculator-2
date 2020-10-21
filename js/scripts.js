
// Addition
function add(number1, number2) {
	return number1 + number2;
}

// Subtract
function subtract(number1, number2) {
	return number1 - number2;
}

// Divide
function divide(number1, number2) {
	return number1 / number2;
}

// Multiply
function multiply(number1, number2) {
	return number1 * number2;
}


const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = add(number1, number2)

alert(result);
