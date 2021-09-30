const { expect } = require('chai');
const { lookupChar } = require('./charLookup');

describe('test for lookupChar', () => {
    it("should't take non strings and non number params", () => {
        expect(lookupChar(5, '5')).to.be.undefined;
    });

    it('should take index out of the length of the str', () => {
        expect(lookupChar('text', 4)).to.be.equal('Incorrect index');
        expect(lookupChar('text', -1)).to.be.equal('Incorrect index');
    });

    it('should work', () => {
        expect(lookupChar('text', 3)).to.be.equal('t');
    });

    it('should not take floating point numbers', () => {
        expect(lookupChar('text', 5.6)).to.be.undefined;
    });
    
    it('should return "l" on lookupChar("hello", 3)', () => {
        expect(lookupChar("hello", 3)).to.equal('l');
    });

    it('should return undefined on lookupChar(2, 2)', () => {
        expect(lookupChar(2, 2)).to.equal(undefined);
    });
});
