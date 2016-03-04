// var a = prompt('Enter number');
// var b = prompt('Enter degree');

isNumeric = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

module.exports = function(a, b) {

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
};

// var involution = pow(a,b);

// alert('Итого: ' + a + ' в степени ' + b + ' = ' + involution);
