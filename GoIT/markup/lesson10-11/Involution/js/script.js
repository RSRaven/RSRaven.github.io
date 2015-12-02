// функция на выходе имеет результат возведения
// числа "a" в степень "b"

var a = prompt('Enter number');
var b = prompt('Enter degree');

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function pow(a, b) {

	if (a === 0) {
		return 0;
	}

	if (!isNumeric(a)) {
		alert('This is not a number!');
		return;
	}

	if (!isNumeric(b)) {
		alert('This is not a number!');
		return;
	}

	var result = 1;

	if (b === 0) {

		return 1;

	} else {

		if (b < 0) {
			b = -1 * b;
			for (var i = 0; i < b; i++) {
				result = result * a;
			}
			result = 1 / result;

		} else {

			for (var i = 0; i < b; i++) {
				result = result * a;
			}
		}
	}

	return result;
}

var involution = pow(a,b);

console.log('Итого: ',involution);
