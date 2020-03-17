const expect = require('chai').expect;
const solution = require('../src/reverse-it-quickly.js');
describe("reverse-it-quickly", function () {
    it("weirdReverse([1,2,3,4,5])", function () {
        var arr = weirdReverse([1,2,3,4,5]);
        console.log(arr.join(','));
        expect(arr.join(',')).to.equal([5, 4, 3, 2, 1].join(','));
    });
});
weirdReverse=a=>{const r = [];a.forEach(i => {r.splice(0, 0, i)});return r};