// Write your tests here!

const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("ploybius", () => {
    it("Should encode a message and then decode it correctly.", () => {
        let actual = polybius("message", true);
        actual = polybius(actual, false);
        const expected = "message";
        expect(actual).to.eql(expected);
    });
    it("Should properly denote the placement of 'I' and 'J' characters when decoding.", () => {
        let actual = polybius("4231425542", false);
        const expected = "(i/j)c(i/j)z(i/j)";
        expect(actual).to.eql(expected);
    });
    it("Should ignore capitalizations.", () => {
        let actual = polybius("ThInKfUl", true);
        actual = polybius(actual, false);
        const expected = "th(i/j)nkful";
        expect(actual).to.eql(expected);
    });
    it("Should space the resulting encoded and decoded strings correctly.", () => {
        let actual = polybius("Hello world", true);
        actual = polybius(actual, false);
        const expected = "hello world";
        expect(actual).to.eql(expected);
    });
    it("Should ignore numbers and other non-encodable characters.", () => {
        let actual = polybius("1l2o3n4g5e6r7 8m9e0s-s_a=g+e[", true);
        actual = polybius(actual, false);
        expected = "longer message"
        expect(actual).to.eql(expected);
    })
});