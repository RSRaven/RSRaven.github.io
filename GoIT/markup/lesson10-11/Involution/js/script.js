// функция на выходе имеет результат возведения
// числа "a" в степень "b"

// эта функция работает только для b >= 0

function calcInvolution(a, b) {
	var a = prompt('Enter number');
	var b = prompt('Enter degree');
	var c = a;

// так как функция не сработает при возведении
// в нулевую степень вводим проверку

	if (b == 0) {
		return 1;
// если проверка пройдена, считаем степень
	} else {
		for (var i = 1; i < b; i++) {
		c = c * a;
		};
	}

	return c;
}

var result = calcInvolution();

console.log(result);
