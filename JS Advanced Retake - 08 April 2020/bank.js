class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        this.allCustomers.forEach(c => {
            if (c.personalId === customer.personalId) {
                throw new Error(`${c.firstName} ${c.lastName} is already our customer!`);
            }
        });
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        for (let c of this.allCustomers) {
            if (c.personalId === personalId) {
                if (c.hasOwnProperty('totalMoney')) {
                    c.totalMoney += amount;
                } else {
                    c.totalMoney = amount;
                } 
                if (c.hasOwnProperty('transactions')) {
                    const n = c.transactions.length + 1;
                    c.transactions.unshift(`${n}. ${c.firstName} ${c.lastName} made deposit of ${amount}$!`);
                } else {
                    c.transactions = [`1. ${c.firstName} ${c.lastName} made deposit of ${amount}$!`];
                }
                return `${c.totalMoney}$`;
            }
        }

        throw new Error('We have no customer with this ID!');
    }

    withdrawMoney(personalId, amount) {
        for (let c of this.allCustomers) {
            if (c.personalId === personalId) {
                if (c.totalMoney >= amount) {
                    c.totalMoney -= amount;
                } else {
                    throw new Error(`${c.firstName} ${c.lastName} does not have enough money to withdraw that amount!`)
                }
                if (c.hasOwnProperty('transactions')) {
                    const n = c.transactions.length + 1;
                    c.transactions.unshift(`${n}. ${c.firstName} ${c.lastName} withdrew ${amount}$!`);
                } else {
                    c.transactions = [`1. ${c.firstName} ${c.lastName} withdrew ${amount}$!`];
                }
                return `${c.totalMoney}$`;
            }
        }

        throw new Error('We have no customer with this ID!');
    }

    customerInfo(personalId) {
        for (let c of this.allCustomers) {
            if (c.personalId === personalId) {
                return `Bank name: ${this._bankName}\n` +
                `Customer name: ${c.firstName} ${c.lastName}\n` +
                `Customer ID: ${c.personalId}\n` +
                `Total Money: ${c.totalMoney}$\n` +
                `Transactions:\n` +
                c.transactions.join('\n');
            }
        }

        throw new Error('We have no customer with this ID!');
    }
}