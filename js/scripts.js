
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
	$("form#add").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("input#add1").val());
		const number2 = parseInt($("input#add2").val());
		const result = add(number1, number2);
		$("#output").text(result);
	});
	$("form#subtract").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("input#subtract1").val());
		const number2 = parseInt($("input#subtract2").val());
		const result = subtract(number1, number2);
		$("#output").text(result);
	});
});