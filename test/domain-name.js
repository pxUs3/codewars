const expect = require('chai').expect;
const domainName = require('../src/domain-name.js');

describe("domain name", function () {
    it("google", function () {
        expect(domainName("http://google.com")).to.equal("google");
    });
    it("google 2", function () {
        expect(domainName("http://google.co.jp")).to.equal("google");
    });
    it("xakep", function () {
        expect(domainName("www.xakep.ru")).to.equal("xakep");
    });
    it("youtube", function () {
        expect(domainName("https://youtube.com")).to.equal("youtube");
    });
});