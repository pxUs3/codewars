const expect = require('chai').expect;
const nested = require('../src/nesting-structure-comparison.js');

describe("Nesting Structure Comparison", function () {
    it("true", function () {
        expect([[[], []]].sameStructureAs([[[], []]])).to.equal(true);
        expect([1, 1, 1].sameStructureAs([2, 2, 2])).to.equal(true);
        expect([1, [1, 1]].sameStructureAs([2, [2, 2]])).to.equal(true);
    });
    it("false", function () {
        expect([1, [1, 1]].sameStructureAs([[2, 2], 2])).to.equal(false);
        expect([1, [1, 1]].sameStructureAs([[2], 2])).to.equal(false);
    });
});