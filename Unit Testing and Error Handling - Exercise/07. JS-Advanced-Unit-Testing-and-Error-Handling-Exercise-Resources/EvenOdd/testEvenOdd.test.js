const { expect } = require('chai');
const { isOddOrEven } = require('./evenOdd');

describe('tests for Even or Odd', () => {
    it('should test valid input', () => {
        expect(isOddOrEven(5)).to.be.undefined;
    });

    it('should test for even', () => {
        expect(isOddOrEven('ab')).to.be.equal('even');
    });

    it('should test for odd', () => {
        expect(isOddOrEven('abc')).to.be.equal('odd');
    });
});