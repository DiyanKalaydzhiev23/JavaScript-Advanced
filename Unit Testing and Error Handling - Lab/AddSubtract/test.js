const { expect } = require('chai');
const { createCalculator } = require('./addSubtract');

describe('tests for createCalculator', () => {
    it('should return object with 3 functions', () => {
        const result = createCalculator(5);
        expect(typeof(result)).to.be.equal('object');
        expect(typeof(result['add'])).to.be.equal('function');
        expect(typeof(result['subtract'])).to.be.equal('function');
        expect(typeof(result['get'])).to.be.equal('function');
    });

    it('should have only functions', () => {
        const result = createCalculator(5);
        Object.values(result).forEach(v => {
            expect(typeof(v)).to.be.equal('function');
        });
    });

    it('should get initial value = 0', () => {
        const result = createCalculator(5);
        expect(result.get()).to.be.equal(0);
    });

    it('should test add function', () => {
        const result = createCalculator(5);
        result.add('5');
        expect(result.get()).to.be.equal(5);
    });

    it('should test subtract function', () => {
        const result = createCalculator(5);
        result.subtract(1);
        expect(result.get()).to.be.equal(-1);
    });
});
