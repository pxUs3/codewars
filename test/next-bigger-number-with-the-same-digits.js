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
    it("53763", function () {
        expect(nextBigger(53763)).to.equal(56337);
    });
    it("451110", function () {
        expect(nextBigger(451110)).to.equal(501114);
    });
    it("407594", function () {
        expect(nextBigger(407594)).to.equal(407945);
    });
    it("1234567890", function () {
        expect(nextBigger(1234567890)).to.equal(1234567908);
    });
    it("59884848459853", function () {
        expect(nextBigger(59884848459853)).to.equal(59884848483559);
    });
    it("72366763940", function () {
        expect(nextBigger(72366763940)).to.equal(72366764039);
    });
    it("86763529832", function () {
        expect(nextBigger(86763529832)).to.equal(86763532289);
    });
    it("900586992798554", function () {
        expect(nextBigger(900586992798554)).to.equal(900586992845579);
    });
    it("450027592", function () {
        expect(nextBigger(450027592)).to.equal(450027925);
    });
});