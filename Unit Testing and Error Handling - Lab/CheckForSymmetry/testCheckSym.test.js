const { expect } = require('chai');
const { isSymmetric } = require('./checkForSymmetry');

describe('test', () => {
    it('not Array test', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it('test symmetric array', () => {
        expect(isSymmetric([3, 1, 3])).to.be.true;
    });

    it('test not symmetric array', () => {
        expect(isSymmetric([3, 1, 2])).to.be.false;
    });

    it('test different types valid array', function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true);
    });
});