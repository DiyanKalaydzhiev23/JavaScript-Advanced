const { expect, closeTo} = require('chai');
const { mathEnforcer } = require('./mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return correct result with a non-number', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });

        it('should return 0 with -5', () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });

        it('should return 7.1 with 2.1', () => {
            expect(mathEnforcer.addFive(2.1)).to.be.closeTo(7.1, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('should return correct result with a non-number', () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        });

        it('should return -30 with -20', () => {
            expect(mathEnforcer.subtractTen(-20)).to.be.equal(-30);
        });

        it('should return 7.1 with 17.1', () => {
            expect(mathEnforcer.subtractTen(17.1)).to.be.closeTo(7.1, 0.01);
        });
    });

    describe('sum', () => {
        it('should return correct result with a non-number', () => {
            expect(mathEnforcer.sum('5', 1)).to.be.undefined;
            expect(mathEnforcer.sum(5, '1')).to.be.undefined;
        });

        it('should return -0.3 with -0.2 and -0.1', () => {
            expect(mathEnforcer.sum(-0.1, -0.2)).to.be.closeTo(-0.3, 0.01);
        });

        it('should return 30 with 20 and 10', () => {
            expect(mathEnforcer.sum(10, 20)).to.be.equal(30);
        });
    });
});
