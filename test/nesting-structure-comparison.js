const expect = require('chai').expect;
require('../src/nesting-structure-comparison.js');

describe("Nesting Structure Comparison", function () {
    it("true1", function () {
        expect([[[], []]].sameStructureAs([[[], []]])).to.equal(true);
    });
    it("true2", function () {
        expect([1, 1, 1].sameStructureAs([2, 2, 2])).to.equal(true);
    });
    it("true3", function () {
        expect([1, [1, 1]].sameStructureAs([2, [2, 2]])).to.equal(true);
    });
    it("false1", function () {
        expect([1, [1, 1]].sameStructureAs([[2], 2])).to.equal(false);
    });
    it("false2", function () {
        expect([1, [1, 1]].sameStructureAs([[2, 2], 2])).to.equal(false);
    });
    it("false3", function () {
        expect([].sameStructureAs(1)).to.equal(false);
    });
    it("false4", function () {
        expect([].sameStructureAs({})).to.equal(false);
    });
    it("false5", function () {
        expect([1, [1, 1]].sameStructureAs([2, [2]])).to.equal(false);
    });
});