const { sum } = require('./SumOfNumbers');
const { expect } = require('chai');

describe('Sum function', () => {
    it('works', () => {
        expect(sum([1], 1));
    });
});