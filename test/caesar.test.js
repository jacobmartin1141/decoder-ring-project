// Write your tests here!

const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("Should return false if the shift parameter is GREATER than 25.", () => {
        const actual = caesar("Message", 26);
        expect(actual).to.be.false;
    });
    it("Should return false if the shift parameter is LESS than -25.", () => {
        const actual = caesar("Message", -26);
        expect(actual).to.be.false;
    });
    it("Should return false if the shift parameter is 0.", () => {
        const actual = caesar("Message", 0);
        expect(actual).to.be.false;
    });
    it("Should return false if the shift parameter is missing.", () => {
        const actual = caesar("Message");
        expect(actual).to.be.false;
    });
    it("Should retain the placement of spaces in the resulting code", () => {
        const actual = caesar("l o n g e r m e s s a g e", 3);
        const expected = "o r q j h u p h v v d j h";
        expect(actual).to.eql(expected);
    });
    it("Should ignore capital letters.", () => {
        const actual = caesar("MeSsAgE", 3);
        const expected = "phvvdjh";
        expect(actual).to.eql(expected);
    });
    it("Should wrap the alphabet so the last letters are coded properly", () => {
        const actual = caesar("wxyz", 4);
        const expected = "abcd";
        expect(actual).to.eql(expected);
    });
    it("Should encode messages, and then decode them back properly.", () => {
        let actual = caesar("Longer message", 5, true);
        actual = caesar(actual, 5, false);
        const expected = "longer message";
        expect(actual).to.eql(expected);
    });
})
