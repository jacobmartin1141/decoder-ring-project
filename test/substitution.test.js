const expect = require("chai").expect;

const substitution = require("../src/substitution").substitution;
const findRepeatLetters = require("../src/substitution").findRepeatLetters;

describe("findRepeatLetters", () => {
    it("Should return true is there are repeating letters in the input", () => {
        const actual = findRepeatLetters("poiuytrewqlkjhgfdsamnbvcxp");
        expect(actual).to.be.true;
    });
    it("Should return false if the input doesn't include repeating letters", () => {
        const actual = findRepeatLetters("poiuytrewqlkjhgfdsamnbvcxz");
        expect(actual).to.be.false;
    });
});

describe("substitution", () => {
    const realAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const testCodex = "poiuytrewqlkjhgfdsamnbvcxz";

    it("Should return false if the alphabet parameter is less than 26 letters long.", () => {
        const actual = substitution("Message", "poiuytrewqlkjhgfdsamnbvcx");
        expect(actual).to.be.false;
    });
    it("Should return false if the alphabet parameter is more than 26 letters long", () => {
        const actual = substitution("Message", "poiuytrewqlkjhgfdsamnbvcxz1");
        expect(actual).to.be.false;
    });
    it("Should return false if there are repeated letters in the alphabet parameter.", () => {
        const actual = substitution("Message", "poiuytrewqlkjhgfdsamnbvcxp");
        expect(actual).to.be.false;
    });
    it("Should encode the message, using the cypher parameter.", () => {
        const actual = substitution(realAlphabet, testCodex);
        expect(actual).to.eql(testCodex);
    });
    it("Should decode messages that have been previously been encoded.", () => {
        const actual = substitution(testCodex, testCodex, false);
        expect(actual).to.eql(realAlphabet);
    });
    it("Should encode the message, using the cypher parameter, and then decode it back to readable form.", () => {
        let actual = substitution(realAlphabet, testCodex, true);
        actual = substitution(actual, testCodex, false);
        expect(actual).to.eql(realAlphabet);
    });
});
