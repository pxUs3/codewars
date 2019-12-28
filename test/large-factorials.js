const expect = require('chai').expect;
const factorial = require('../src/large-factorials.js');

describe("Large Factorials", function () {
    it("f1", function () {
        expect(factorial(1)).to.equal('1');
    });
    it("f5", function () {
        expect(factorial(5)).to.equal('120');
    });
    it("f9", function () {
        expect(factorial(9)).to.equal('362880');
    });
    it("f15", function () {
        expect(factorial(15)).to.equal('1307674368000');
    });
});