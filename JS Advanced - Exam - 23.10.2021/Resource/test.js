const { expect } = require('chai');
const { library } = require('./library');

describe('tests for library', () => {

    describe('tests for calPriceOfBook()', () => {
        it('should be invalid with non string name', () => {
            expect(() => library.calcPriceOfBook(5, 1945)).to.throw('Invalid input');
        });

        it('should be invalid with non integer year', () => {
            expect(() => library.calcPriceOfBook('book', '1945')).to.throw('Invalid input');
        });

        it('should be invalid with non string name and non integer year', () => {
            expect(() => library.calcPriceOfBook(5, '1945')).to.throw('Invalid input');
        });

        it('should be invalid with float year', () => {
            expect(() => library.calcPriceOfBook('book', 1945.6)).to.throw('Invalid input');
        });

        it('should gve discount for 1980', () => {
            expect(library.calcPriceOfBook('book', 1980)).to.be.equal('Price of book is 10.00');
        });

        it('should gve discount for older then 1980', () => {
            expect(library.calcPriceOfBook('book', 1970)).to.be.equal('Price of book is 10.00');
        });

        it('should not give discount', () => {
            expect(library.calcPriceOfBook('book', 2021)).to.be.equal('Price of book is 20.00');
        });
    });

    describe('tests for findBook()', () => {
        it('should throw an error for no books', () => {
            expect(() => library.findBook([], 'some book')).to.throw('No books currently available');
        });

        it('should find the book', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Life Style')).to.be.equal('We found the book you want.');
        });

        it('should not find the book', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Not a book')).to.be.equal('The book you are looking for is not here!');
        });
    });

    describe('tests for arrangeTheBooks()', () => {
        it('should throw an error for float number', () => {
            expect(() => library.arrangeTheBooks(5.6)).to.throw('Invalid input');
        });

        it('should throw an error for negative number', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        });

        it('should throw an error for non integer number', () => {
            expect(() => library.arrangeTheBooks('5')).to.throw('Invalid input');
        });

        it('should work with 0', () => {
            expect(library.arrangeTheBooks(0)).to.be.equal('Great job, the books are arranged.');
        });

        it('should work with 40', () => {
            expect(library.arrangeTheBooks(40)).to.be.equal('Great job, the books are arranged.');
        });

        it('should not work with 41', () => {
            expect(library.arrangeTheBooks(41)).to.be.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});