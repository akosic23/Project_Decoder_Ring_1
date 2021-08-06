const expect = require("chai").expect;
const caesar = require("../src/caesar")

describe("caesar", () => {
    it("should return false if shift is 0", () => {
        const expected = false;
     const actual = caesar.caesar("Thinkful", 0);
    expect(actual).to.equal(expected);
    });
    it("should return false if shift is greater than 25", () => {
        const expected = false;
       const actual = caesar.caesar("Thinkful", 60);
        expect(actual).to.equal(expected);
   });
     it("should return false if shift is less than -25", () => {
        const expected = false;
        const actual = caesar.caesar("Thinkful", -60);
        expect(actual).to.equal(expected);
    });  
    it("should encode a message by shifting letters", () => {
        const expected = "wklqnixo";
        const actual = caesar.caesar("thinkful", 3);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const expected = "wklqnixo";
        const actual = caesar.caesar("Thinkful", 3);
        expect(actual).to.equal(expected);
    });
    it("should handle letters at end of alphabet", () => {
        const expected = "ahqrprusk";
        const actual = caesar.caesar("xenomorph", 3);
        expect(actual).to.equal(expected);
    });
    it("should handle negative shifts", () => {
        const expected = "qefkhcri";
        const actual = caesar.caesar("Thinkful", -3);
        expect(actual).to.equal(expected);
    });
});