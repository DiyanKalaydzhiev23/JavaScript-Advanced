class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;
        this.creditCard = creditCard;
        this.wishList = [];
        this.idNumber = this.generateIDNumber();
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(name) {
        if (name.length !== 3) {
            throw new Error('Name must include first name, middle name and last name');
        }
        for (let n of name) {
            let matched = n.match(/[A-Z][a-z]+/gm);
            if (matched[0].length != n.length) throw new Error('Invalid full name');
        }
        this._fullName = {firstName: name[0], middleName: name[1], lastName: name[2]};
    }

    get creditCard() {
        return this._creditCard;
    }

    set creditCard(value) {
        if (value == undefined) {
            this._creditCard = {cardNumber: 1111, expirationDate: '', securityNumber: 111};
        } else {
            if (value.length !== 3) throw new Error('Missing credit card information');
            if (typeof value[0] != 'number' || typeof value[2] != 'number') throw new Error('Invalid credit card details');
            this._creditCard = {cardNumber: value[0], expirationDate: value[1], securityNumber: value[2]};
        }
    }

    generateIDNumber() {
        let result = String(231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length);
        const lastIndex = this.fullName.lastName.length - 1;
        if (['a', 'e', 'o', 'i', 'u'].includes(this.fullName.lastName.charAt(lastIndex))) {
            result += 8;
        } else {
            result += 7;
        }
        return result;
    }

    addCreditCardInfo(input) {
        this.creditCard = input;
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) throw new Error('Destination already exists in wishlist');
        this.wishList.push(destination);
        this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo() {
        const listWish = this.wishList.length === 0 ? 'empty' : this.wishList.join(', ');
        
        return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\n` +
        `ID Number: ${this.idNumber}\n` +
        `Wishlist:\n` + 
        `${listWish}\n` +
        `Credit Card:\n` +
        `Card Number: ${this.creditCard.cardNumber}\n` +
        `Expiration Date: ${this.creditCard.expirationDate}\n` +
        `Security Number: ${this.creditCard.securityNumber}`;
    }
}

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
[123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());

