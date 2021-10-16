const { expect } = require('chai');
const { pizzUni } = require('./pizzaPlace');

describe('tests for pizzaUni', () => {

    describe('tests for makeAnOrder()', () => {
        it('should throw error for no pizza', () => {
            const errorMsg = 'You must order at least 1 Pizza to finish the order.';
            const obj = {orderedDrink:  'the name of the drink'};
            expect(() => {pizzUni.makeAnOrder(obj)}).to.throw(errorMsg);
        });
    
        it('should make a pizza order', () => {
            const obj = {orderedPizza:  'the name of the pizza'};
            expect(pizzUni.makeAnOrder(obj)).to.be.equal('You just ordered the name of the pizza');
        });
    
        it('should make a full order', () => {
            const obj = {orderedPizza:  'the name of the pizza', orderedDrink:  'the name of the drink'};
            expect(pizzUni.makeAnOrder(obj)).to.be.equal('You just ordered the name of the pizza and the name of the drink.');
        });
    });

    describe('tests for getRemainingWork()', () => {
        it('should return the preparing pizzas', () => {
            let pizzas = [
                {pizzaName: '1', status: 'ready'},
                {pizzaName: '2', status: 'preparing'},
                {pizzaName: '3', status: 'preparing'}
            ];
            expect(pizzUni.getRemainingWork(pizzas)).to.be.equal('The following pizzas are still preparing: 2, 3.');
        });

        it('should return complete orders', () => {
            let pizzas = [
                {pizzaName: '1', status: 'ready'},
                {pizzaName: '2', status: 'ready'},
                {pizzaName: '3', status: 'ready'}
            ];
            expect(pizzUni.getRemainingWork(pizzas)).to.be.equal('All orders are complete!');
        });
    });

    describe('tests for orderType()', () => {
        it('should give discount for Carry Out', () => {
            expect(pizzUni.orderType(1, 'Carry Out')).to.be.equal(0.9);
        });

        it('should return the given totalSum', () => {
            expect(pizzUni.orderType(1, 'Delivery')).to.be.equal(1);
        });
    });
});
