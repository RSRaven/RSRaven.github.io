var chai = require('chai');
var pow = require('../js/script');

describe("pow testing", function() {

  describe("возводит x в степень n, n > 0", function() {

    function testPowMore(x) {
      var expected = x * x * x * x;
      it("при возведении " + x + " в степень 3 результат: " + expected, function() {
        chai.assert.equal(pow(x, 4), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      testPowMore(x);
    }

  });

  describe("возводит x в степень n, n = 0", function() {

    function testPowZero(x) {
      var expected = 1;
      it("при возведении " + x + " в степень 0 результат: " + expected, function() {
        chai.assert.equal(pow(x, 0), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      testPowZero(x);
    }

  });

  describe("возводит x в степень n, n < 0", function() {

    function testPowLess(x) {
      var expected = 1 / ( x * x *x );
      it("при возведении " + x + " в степень -3 результат: " + expected, function() {
        chai.assert.equal(pow(x, -3), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      testPowLess(x);
    }

  });

});
