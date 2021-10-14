const { expect } = require('chai');
const { ChristmasMovies } = require('./02. Christmas Movies_Resources');

describe('tests for ChristmasMovies', () => {
    let m;
    
    beforeEach(() => {
        m = new ChristmasMovies;
    });

    describe('test for constructor', () => {
        it('should return empty array for movieCollection', () => {
            expect(JSON.stringify(m.movieCollection)).to.be.equal("[]");
        });

        it('should return empty object for watched', () => {
            expect(JSON.stringify(m.watched)).to.be.equal("{}");
        });

        it('should return empty array for actors', () => {
            expect(JSON.stringify(m.actors)).to.be.equal("[]");
        });
    });

    describe('tests for buyMovie()', () => {
        it('should add the movie', () => {
            m.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Joe Pesci', 'Daniel Stern']);
            expect(m.movieCollection[0].name).to.be.equal('Home Alone');
            expect(m.movieCollection[0].actors.length).to.be.equal(3);
        });

        it('should throw an error for existing movie', () => {
            const errorMsg = 'You already own Home Alone in your collection!';
            m.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Joe Pesci', 'Daniel Stern']);
            expect(() => {m.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Joe Pesci', 'Daniel Stern']);}).to.throw(errorMsg);
        });
    });

    describe('tests for discardMovie()', () => {
        it('should throw an error for non-existing movie', () => {
            expect(() => {m.discardMovie('Home Alone');}).to.throw('Home Alone is not at your collection!');
        });

        it('should remove movie', () => {
            m.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Joe Pesci', 'Daniel Stern']);
            m.watched = {'Home Alone': 1};
            expect(m.discardMovie('Home Alone')).to.be.equal('You just threw away Home Alone!');
            expect(JSON.stringify(m.watched)).to.be.equal("{}");
        });

        it('should throw an error for non watched movie', () => {
            m.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Joe Pesci', 'Daniel Stern']);
            expect(() => {m.discardMovie('Home Alone')}).to.throw('Home Alone is not watched!')
        });
    });

    describe('tests for watchMovie()', () => {
        it('should watch a movie one time', () => {
            m.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Joe Pesci', 'Daniel Stern']);
            m.watchMovie('Home Alone');
            expect(m.watched['Home Alone']).to.be.equal(1);
        });

        it('should watch a movie several times', () => {
            m.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Joe Pesci', 'Daniel Stern']);
            m.watchMovie('Home Alone');
            m.watchMovie('Home Alone');
            m.watchMovie('Home Alone');
            expect(m.watched['Home Alone']).to.be.equal(3);
        });

        it('should throw an error for non existing movie', () => {
            const errorMsg = 'No such movie in your collection!';
            expect(() => {m.watchMovie('Home Alone');}).to.throw(errorMsg);
        }); 
    });

    describe('tests for favouriteMovie()', () => {
        it('should return Home Alone watched 2 times', () => {
            m.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Joe Pesci', 'Daniel Stern']);
            m.buyMovie('Not Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Joe Pesci', 'Daniel Stern']);
            m.watchMovie('Home Alone');
            m.watchMovie('Home Alone');
            m.watchMovie('Not Home Alone');
            expect(m.favouriteMovie()).to.be.equal('Your favourite movie is Home Alone and you have watched it 2 times!');
        });

        it('should throw error for no movies', () => {
            const errorMsg = 'You have not watched a movie yet this year!';
            expect(() => {m.favouriteMovie()}).to.throw(errorMsg);
        });
    });

    describe('tests for mostStarredActor()', () => {
        it('should return Joe Pesci', () => {
            m.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Joe Pesci', 'Daniel Stern']);
            m.buyMovie('Home Alone 2', ['Jim Stern', 'Joe Pesci', 'Joe Pesci', 'Mack Stern']);
            const expected = 'The most starred actor is Joe Pesci and starred in 2 movies!';
            expect(m.mostStarredActor()).to.be.equal(expected);
        });

        it('should throw an error for no movies', () => {
            const errorMsg = 'You have not watched a movie yet this year!';
            expect(() => {m.mostStarredActor();}).to.throw(errorMsg);
        });
    });
});