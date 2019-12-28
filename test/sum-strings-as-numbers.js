const expect = require('chai').expect;
const sumStrings = require('../src/sum-strings-as-numbers.js');
describe("Sum Strings as Numbers", function () {
    it("sum 1", function () {
        expect(sumStrings('123', '456')).to.equal('579');
    });
    it("sum 2", function () {
        expect(sumStrings('712569312664357328695151392', '8100824045303269669937')).to.equal('712577413488402631964821329');
    });
    it("sum 3", function () {
        expect(sumStrings('800', '9567')).to.equal('10367');
    });
    it("sum 4", function () {
        expect(sumStrings('99', '1')).to.equal('100');
    });
    it("sum 5", function () {
        expect(sumStrings('50095301248058391139327916261', '81055900096023504197206408605')).to.equal('131151201344081895336534324866');
    });
    it("sum 6", function () {
        expect(sumStrings('00103', '08567')).to.equal('8670');
    });
});
