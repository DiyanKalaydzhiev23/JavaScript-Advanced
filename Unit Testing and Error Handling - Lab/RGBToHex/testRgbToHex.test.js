const { expect } = require('chai');
const { rgbToHexColor } = require('./rgbToHex');

describe('testRgbToHex', () => {
    it('test not valid red', () => {
        expect(rgbToHexColor(-5, 2, 3)).to.be.undefined;
        expect(rgbToHexColor(257, 2, 3)).to.be.undefined;
    });

    it('test not valid green', () => {
        expect(rgbToHexColor(5, -2, 3)).to.be.undefined;
        expect(rgbToHexColor(5, 257, 3)).to.be.undefined;
    });

    it('test not valid blue', () => {
        expect(rgbToHexColor(5, 2, -3)).to.be.undefined;
        expect(rgbToHexColor(5, 2, 300)).to.be.undefined;
    });

    it('test for valid return', () => {
        expect(rgbToHexColor(1, 1, 1)).to.be.equal('#010101');
    });

    it('test for valid input type', () => {
        expect(rgbToHexColor('-5', [-5], {a: -5})).to.be.undefined;
    });

    it("should return #FF9EAA for (255, 158, 170)", function () {
        expect(rgbToHexColor(255, 158, 170)).to.be.equal("#FF9EAA");
    });
    
    it("should return #0C0D0E for (12, 13, 14)", function () {
        expect(rgbToHexColor(12, 13, 14)).to.be.equal("#0C0D0E");
    });

    it("should return #000000 for (0, 0, 0)", function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
    });

    it("should return #FFFFFF for (255, 255, 255)", function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
    });
});
