const { cinema } = require('./cinema');
const { expect } = require('chai');

describe('tests for cinema', () => {

    describe('tests for showMovies()', () => {
        it ('should return that there are no movies', () => {
            const message = 'There are currently no movies to show.';
            expect(cinema.showMovies([])).to.be.equal(message);
        });

        it('should return movies separated by space and comma', () => {
            const result = 'King Kong, 8 mile';
            expect(cinema.showMovies(['King Kong', '8 mile'])).to.be.equal(result);
        });

        it('should return the movie', () => {
            expect(cinema.showMovies(['8 mile'])).to.be.equal('8 mile');
        });
    });

    describe('tests for ticketPrice()', () => {
        it('should throw error that the projection is invalid', () => {
            const errorMsg = 'Invalid projection type.';
            expect(() => cinema.ticketPrice('test')).to.throw(errorMsg);
        });

        it('should return 12.00 price for Premiere', () => {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
        });

        it('should return 7.50 price for Normal', () => {
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
        });

        it('should return 5.50 price for Discount', () => {
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
        });
    });

    describe('tests for swapSeatsInHall()', () => {
        it('should be unsuccessful', () => {
            expect(cinema.swapSeatsInHall(21, 0)).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('should be unsuccessful', () => {
            expect(cinema.swapSeatsInHall(0, 21)).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('should be unsuccessful', () => {
            expect(cinema.swapSeatsInHall(22, 21)).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('should be unsuccessful', () => {
            expect(cinema.swapSeatsInHall(5.5, 3.5)).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('should be unsuccessful', () => {
            expect(cinema.swapSeatsInHall(-1, -2)).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('should be unsuccessful', () => {
            expect(cinema.swapSeatsInHall(5.5, 1)).to.be.equal("Unsuccessful change of seats in the hall.");
            
        });

        it('should be unsuccessful', () => {
            expect(cinema.swapSeatsInHall(2, 1.3)).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('should be unsuccessful', () => {
            expect(cinema.swapSeatsInHall('5', '6')).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('should be unsuccessful', () => {
            expect(cinema.swapSeatsInHall('5', 5)).to.be.equal("Unsuccessful change of seats in the hall.");   
        });

        it('should be unsuccessful', () => {
            expect(cinema.swapSeatsInHall(5, '5')).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        // it('should be unsuccessful', () => {
        //     expect(cinema.swapSeatsInHall(5, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        // });

        it('should be successful', () => {
            expect(cinema.swapSeatsInHall(5, 4)).to.be.equal("Successful change of seats in the hall.");
        }); 

        it('should be successful', () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.be.equal("Successful change of seats in the hall.");
        }); 

        it('should be unsuccessful', () => {
            expect(cinema.swapSeatsInHall({A: 5}, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('should be unsuccessful', () => {
            expect(cinema.swapSeatsInHall([4], 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        });

        it('should be unsuccessful', () => {
            expect(cinema.swapSeatsInHall()).to.be.equal("Unsuccessful change of seats in the hall.");
        });
    });
});