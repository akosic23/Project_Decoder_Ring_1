const expect = require("chai").expect;
const substitution = require("../src/substitution")

describe("substitution", () => {
    it("should return input message writen with new alphabet", () => {
        const expected = "jrufscpw";
        const actual = substitution.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.eql(expected);
    });
    it("should work with spaces", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.eql(expected);
    });
    it("should be able to decode encoded messages", () => {
        const expected = "thinkful";
        const actual = substitution.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.eql(expected);
    });
    it("should work with special characters", () => {
        const expected = "y&ii$r&";
        const actual = substitution.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.eql(expected);
    });
    it("should be able to decode with special characters", () => {
        const expected = "message";
        const actual = substitution.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.eql(expected);
    });
    it("should return false if full _NEW_ alphabet is too short", () => {
        const actual = substitution.substitution("thinkful", "short");
        expect(actual).to.be.false;
    });
    it("should return false if repeat characters are used in new alphabet", () => {
        const  actual = substitution.substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false;
    });
});