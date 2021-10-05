const { expect } = require('chai');
const { StringBuilder } = require('./stringBuilder');

describe('tests for StringBuilder', () => {
    describe('test constructor', () => {
        it('should make array from "test"', () => {
            const str = new StringBuilder('test');
            expect(JSON.stringify(str._stringArray)).to.be.equal(JSON.stringify(Array.from('test')));
        });

        it('should return empty list with undefined string', () => {
            const str = new StringBuilder();
            expect(str._stringArray.length).to.be.equal(0);
        });
    });

    describe('test append func', () => {
        it('should append "it" to test', () => {
            const str = new StringBuilder('test');
            str.append('it');
            expect(str._stringArray.length).to.be.equal(6);
            expect(str._stringArray[5]).to.be.equal('t');
            expect(str._stringArray[4]).to.be.equal('i');
        });
    });

    describe('test prepend func', () => {
        it('should prepend "it"', () => {
            const str = new StringBuilder('test');
            str.prepend('it');
            expect(str._stringArray.length).to.be.equal(6);
            expect(str._stringArray[0]).to.be.equal('i');
            expect(str._stringArray[1]).to.be.equal('t');
        });
    });

    describe('test insertAt func', () => {
        it('should insert "it" and index 2', () => {
            const str = new StringBuilder('test');
            str.insertAt('it', 2);
            const result = JSON.stringify(["t","e","i","t","s","t"]);
            expect(JSON.stringify(str._stringArray)).to.be.equal(result);
        });
    });

    describe('test for remove func', () => {
        it('should remove first two elements', () => {
            const str = new StringBuilder('test');
            str.remove(0, 2);
            const result = JSON.stringify(["s","t"]);
            expect(JSON.stringify(str._stringArray)).to.be.equal(result);
        });
    });

    describe('test for _vrfyParam', () => {
        it('should throw an error', () => {
            expect(() => StringBuilder._vrfyParam(5)).to.throw('Argument must be a string');
        });

        it('should not throw error', () => {
            expect(StringBuilder._vrfyParam('test')).to.not.throw;
        });
    });

    describe('test toString func', () => {
        it('should return test with test', () => {
            const str = new StringBuilder('test');
            expect(str.toString()).to.be.equal('test');
        }); 
    });
});