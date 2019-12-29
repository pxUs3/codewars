const expect = require('chai').expect;
const nextBigger = require('../src/next-bigger-number-with-the-same-digits.js');

describe("Next bigger number with the same digits", function () {
    it("12", function () {
        expect(nextBigger(12)).to.equal(21);
    });
    it("513", function () {
        expect(nextBigger(513)).to.equal(531);
    });
    it("2017", function () {
        expect(nextBigger(2017)).to.equal(2071);
    });
    it("414", function () {
        expect(nextBigger(414)).to.equal(441);
    });
    it("144", function () {
        expect(nextBigger(144)).to.equal(414);
    });
});