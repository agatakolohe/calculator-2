
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

$(document).ready(function() {
	$("form#calculator").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("input#num1").val());
		const number2 = parseInt($("input#num2").val());
		const operator = $("input:radio[name=operator]:checked").val();
		let result;
		if (operator === "add") {
			result = add(number1, number2);
		} else if (operator === "subtract") {
			result = subtract(number1, number2);
		} else if (operator === "multiply") {
			result = multiply(number1, number2);
		} else if (operator === "divide") {
			result = divide(number1, number2);
		}
		$("#output").text(result);
	});
});