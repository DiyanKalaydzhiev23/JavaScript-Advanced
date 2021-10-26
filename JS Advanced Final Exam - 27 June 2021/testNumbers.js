describe('tests for testNumbers', () => {

    describe('tests for sumNumbers()', () => {
        it('should return undefined for not number first param', () => {
            expect(testNumbers.sumNumbers('a', 5)).to.be.undefined;
        });

        it('should return undefined for not number second param', () => {
            expect(testNumbers.sumNumbers(5, 'b')).to.be.undefined;
        });

        it('should return undefined for not number both params', () => {
            expect(testNumbers.sumNumbers('b', 'b')).to.be.undefined;
        });

        it('should return 8 for 3 + 5', () => {
            expect(testNumbers.sumNumbers(3, 5)).to.be.equal('8.00');
        });

        it('should return 0.3 for 0.1 + 0.2', () => {
            expect(testNumbers.sumNumbers(0.1, 0.2)).to.be.equal('0.30');
        });
    });

    describe('tests for numberChecker()', () => {
        it('should throw an error for NaN', () => {
            const errorMsg = 'The input is not a number!';
            expect(() => testNumbers.numberChecker('a')).to.throw(errorMsg);
        });

        it('should return that the number is even', () => {
            expect(testNumbers.numberChecker('6')).to.be.equal('The number is even!');
        });

        it('should return that the number is odd', () => {
            expect(testNumbers.numberChecker('5')).to.be.equal('The number is odd!');
        });
    });

    describe('tests for averageSumArray()', () => {
        it('should return the average sum', () => {
            const list = [1, 2, 3, 4];
            expect(testNumbers.averageSumArray(list)).to.be.equal(2.5);
        });
    });
});