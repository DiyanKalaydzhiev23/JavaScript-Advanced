class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length >= this.capacity) { 
            throw new Error('Not enough parking space.');
        }
        this.vehicles.push({carModel, carNumber, payed: false});
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        for (let c of this.vehicles) {
            if (c.carNumber === carNumber) {
                if (c.payed == false) {
                    throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
                }
                return `${carNumber} left the parking lot.`;
            } 

            throw new Error("The car, you're looking for, is not found.");
        }
    }

    pay(carNumber) {
        for (let c of this.vehicles) {
            if (c.carNumber === carNumber) {
                if (c.payed == true) {
                    throw new Error(`${carNumber}'s driver has already payed his ticket.`);
                }
                c.payed = true;
                return `${carNumber}'s driver successfully payed for his stay.`;
            }
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
    }

    getStatistics(carNumber) {
        if (carNumber === undefined) {
            const sorted = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            const result = [`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`];
            
            sorted.forEach(c => result.push(`${c.carModel} == ${c.carNumber} - ${c.payed ? 'Has payed' : 'Not payed'}`));

            return result.join('\n');
        } else {
            for (let c of this.vehicles) {
                if (c.carNumber === carNumber) {
                    return `${c.carModel} == ${c.carNumber} - ${c.payed ? 'Has payed' : 'Not payed'}`;
                }
            }
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));