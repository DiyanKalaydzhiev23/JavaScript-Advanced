const { dealership } = require('./dealerShip');
const { expect } = require('chai');

describe('tests for dealership', () => {
    
    describe('tests for newCarCost()', () => {
        it('should give discount for all the cars in the object', () => {
            let discountForOldCar = {
                'Audi A4 B8': 15000,
                'Audi A6 4K': 20000,
                'Audi A8 D5': 25000,
                'Audi TT 8J': 14000,
            }

            expect(dealership.newCarCost('Audi A4 B8', 15000)).to.be.equal(0);
            expect(dealership.newCarCost('Audi A6 4K', 20000)).to.be.equal(0);
            expect(dealership.newCarCost('Audi A8 D5', 25000)).to.be.equal(0);
            expect(dealership.newCarCost('Audi TT 8J', 14000)).to.be.equal(0);
        });

        it('should return new price for new car', () => {
            expect(dealership.newCarCost('Nissan GT-R', 150000)).to.be.equal(150000);
        });
    });

    describe('tests for carEquipment()', () => {
        it('should add extras', () => {
            const extras = ['heated seats', 'Brembo brakes', 'carbon fiber'];
            const wanted = [1, 2]
            expect(JSON.stringify(dealership.carEquipment(extras, wanted))).to.be.equal(JSON.stringify(['Brembo brakes', 'carbon fiber']));
        });
    });

    describe('tests for euroCategory', () => {
        it('should add discount', () => {
            expect(dealership.euroCategory(4)).to.be.equal('We have added 5% discount to the final price: 14250.');
        });

        it('should not get a discount', () => {
            expect(dealership.euroCategory(3)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
        });
    });
});