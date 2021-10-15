const { expect } = require('chai');
const { Repository } = require("./solution.js");

describe("Tests for Repository", () => {
    let r;
    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };;

    beforeEach(() => {

        r = new Repository({
            name: "string",
            age: "number",
            birthday: "object"
        });
    });

    describe('tests for constructor', () => {
        it('should return props', () => {
            expect(JSON.stringify(r.props)).to.be.equal('{"name":"string","age":"number","birthday":"object"}');
        });

        it('should return map', () => {
            expect(Object.getPrototypeOf(r.data)).to.be.equal(Map.prototype);
        });

        it('should have a function nextId', () => {
            expect(typeof r.nextId).to.be.equal('function');
        });

        it('should change id from 0 to 1', () => {
            r.nextId();
            expect(r.nextId()).to.be.equal(1);
        });
    });

    describe('tests for count', () => {
        it('should return the size of the map', () => {
            expect(r.count).to.be.equal(0);
        });
    });

    describe('tests for add()', () => {
        it('should set id and entity', () => {
            r.add(entity);
            expect(r.count).to.be.equal(1);
        })

        it('should return id equal to 0 and inxrease to 1', () => {
            expect(r.add(entity)).to.be.equal(0);
            expect(r.add(entity)).to.be.equal(1);
        })
    });
    
    describe('tests for getId()', () => {
        it('should throw error for non existing id', () => {
            const errorMsg = 'Entity with id: 5 does not exist!';
            expect(() => {r.getId(5);}).to.throw(errorMsg);
        });

        it('should return the data with id 0', () => {
            r.add(entity);
            expect(JSON.stringify(r.getId(0))).to.be.equal('{"name":"Pesho","age":22,"birthday":"1998-01-06T22:00:00.000Z"}');
        });
    });

    describe(`testing .update()`, () => {
		it(
			`input ID which is not present in the data collection -> throw`,
			() => {
				expect(() => r.update(0, {},)).to
					.throw(`Entity with id: 0 does not exist!`)
			}
		)
		it(`any property is missing from input object -> throw Error`, () => {
			r.add({ name: '', age: 0, birthday: {}, })
			expect(() => r.update(
				0,
				{ age: 1, birthday: { date: 0 } }
			)).to.throw
		})
		it(`typeof input[name] !== string -> throw TypeError`, () => {
			r.add({ name: '', age: 0, birthday: {}, })
			expect(() => r.update(
				0,
				{ name: 0, age: 1, birthday: { date: 0 } }
			)).to.throw(TypeError)
		})
	})

    describe('tests for del()', () => {
        it('should throw an error for non existing id', () => {
            const errorMsg = 'Entity with id: 5 does not exist!';
            expect(() => {r.del(5);}).to.throw(errorMsg);
        });

        it('should delete object with id 0', () => {
            r.add(entity);
            r.add(entity);
            r.add(entity);
            r.del(1)
            expect(r.data.has(1)).to.be.false;
        });
    });

    describe('tests for _validate()', () => {
        it('should thorw error for non existing property', () => {
            delete entity.birthday;
            const errorMsg = 'Property birthday is missing from the entity!';
            expect(() => {r._validate(entity);}).to.throw(errorMsg);
        });

        it('should throw error for wrong type', () => {
            entity.birthday = 5;
            const errorMsg = 'Property birthday is not of correct type!';
            expect(() => {r._validate(entity);}).to.throw(errorMsg);
        })
    });
});
