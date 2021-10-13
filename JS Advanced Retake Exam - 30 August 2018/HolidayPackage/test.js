const { expect, assert} = require('chai');
const { HolidayPackage } = require('./holidayPackage');


describe('tests for HolidayPackage', () => {
    let pack;

    beforeEach(() => {

        h = new HolidayPackage('Sofia', 'Summer');

    });

    describe('test constructor', () => {

        it('should be instantiated with 2 params', () => {
            expect(h.destination).to.be.equal('Sofia');
            expect(h.season).to.be.equal('Summer');
        });

        it('should have prop vacationers equal to []', () => {
            expect(JSON.stringify(h.vacationers)).to.be.equal(JSON.stringify([]));
        });

        it('should have prop insuranceIncluded equal to false', () => {
            expect(h.insuranceIncluded).to.be.false;
        });
    });

    describe('tests for showVacationers()', () => {

        it('should return all vacationers with new line', () => {
            const result = 'Vacationers:\nIvan Petrov\nVanesa Ivanova';
            h.addVacationer('Ivan Petrov');
            h.addVacationer('Vanesa Ivanova');
            expect(h.showVacationers()).to.be.equal(result);
        });

        it('should return "No vacationers are added yet"', () => {
            expect(h.showVacationers()).to.be.equal('No vacationers are added yet');
        });
    });

    describe('tests for addVacationer()', () => {
        it('should throw error with non string', () => {
            const result = "Vacationer name must be a non-empty string";
            expect(() => { h.addVacationer(5); }).to.throw(result);
        });

        it('should throw error with empty string', () => {
            const result = "Vacationer name must be a non-empty string";
            expect(() => { h.addVacationer(' ') }).to.throw(result);
        });

        it('should throw an error with empty name', () => {
            expect(() => { h.addVacationer(''); }).to.throw("Name must consist of first name and last name");
        });

        it('should throw an error for first and last name with 1 name', () => {
            expect(() => {h.addVacationer('Ivan')}).to.throw("Name must consist of first name and last name");
    
        });

        it('should throw an error for first and last name with 3 names', () => {
            expect(() => { h.addVacationer('Ivan Petrov Ivanov') }).to.throw("Name must consist of first name and last name");
        });

        it('should add valid vacantioner', () => {
            h.addVacationer('Ivan Petrov');
            expect(JSON.stringify(h.vacationers)).to.be.equal(JSON.stringify(['Ivan Petrov']));
        });
    });

    describe('tests for insuranceIncluded() get and set', () => {
        
        it('should return false', () => {
            expect(h.insuranceIncluded).to.be.false;
        });

        it('should throw error with not boolean', () => {
            const result = "Insurance status must be a boolean";
            try {
                h.insuranceIncluded = 'true';
            } catch(err) {
                expect(err.message).to.be.equal(result);
            }
        });

        it('should switch insurance to true', () => {
            h.insuranceIncluded = true;
            expect(h.insuranceIncluded).to.be.true;
        });
    });

    describe('tests for generateHolidayPackage()', () => {

        it('should throw an error with no vacationers', () => {
            const result = 'There must be at least 1 vacationer added';
            expect(() => { h.generateHolidayPackage(); }).to.throw(result);
        });

        it('should add extra money for Summer', () => {
            h.addVacationer('Ivan Petrov');
            h.addVacationer('Mia Petrova');
            const result = h.generateHolidayPackage();
            const expected =  "Holiday Package Generated\n" +
            "Destination: " + h.destination + "\n" +
            h.showVacationers() + "\n" +
            "Price: " + "1000";
            expect(result).to.be.equal(expected);
        });

        it('should add extra money for winter', () => {
            h.season = 'Winter';
            h.addVacationer('Ivan Petrov');
            h.addVacationer('Mia Petrova');
            const result = h.generateHolidayPackage();
            const expected =  "Holiday Package Generated\n" +
            "Destination: " + h.destination + "\n" +
            h.showVacationers() + "\n" +
            "Price: " + "1000";
            expect(result).to.be.equal(expected);
        });

        it('should add for insurance', () => {
            h.season = 'Spring';
            h.addVacationer('Ivan Petrov');
            h.addVacationer('Mia Petrova');
            h.insuranceIncluded = true;
            const result = h.generateHolidayPackage();
            const expected =  "Holiday Package Generated\n" +
            "Destination: " + h.destination + "\n" +
            h.showVacationers() + "\n" +
            "Price: " + "900";
            expect(result).to.be.equal(expected);
        });

        it("shouldn't charge extra money", () => {
            h.season = 'Autumn';
            h.addVacationer('Ivan Petrov');
            h.addVacationer('Mia Petrova');
            const result = h.generateHolidayPackage();
            const expected =  "Holiday Package Generated\n" +
            "Destination: " + h.destination + "\n" +
            h.showVacationers() + "\n" +
            "Price: " + "800";
            expect(result).to.be.equal(expected);
        });
    });
});

//https://pastebin.com/upU06q2i