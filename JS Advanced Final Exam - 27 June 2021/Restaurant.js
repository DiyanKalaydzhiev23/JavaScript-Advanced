class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        products.forEach(p => {
            let [name, quantity, price] = p.split(' ');

            if (this.budgetMoney > Number(price)) {
                if (this.stockProducts.hasOwnProperty(name) === false) {
                    this.stockProducts[name] = {quantity: 0, price: Number(price)};
                } 
                this.budgetMoney -= Number(price);
                this.stockProducts[name].quantity += Number(quantity);
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
        });

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        const products = {};

        neededProducts.forEach(p => {
            let [name, quantity] = p.split(' ');
            products[name] = Number(quantity);
        });

        if (this.menu.hasOwnProperty(meal) === false) {
            this.menu[meal] = {products: products, price: price};
            if (Object.keys(this.menu).length === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            }
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        }

        return `The ${meal} is already in the our menu, try something different.`;
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0)  {
            return `Our menu is not ready yet, please come later...`;
        }

        const menuInfo = [];

        Object.keys(this.menu).forEach(k => {
            menuInfo.push(`${k} - $ ${this.menu[k].price}`);
        });

        return menuInfo.join('\n');
    }

    makeTheOrder(meal) {
        if (this.menu.hasOwnProperty(meal)) {
            const neededProducts = this.menu[meal].products;
            const failed = false;

            for (let p of Object.keys(neededProducts)) {
                if (this.stockProducts.hasOwnProperty(p) === false) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                } else if (this.stockProducts[p].quantity < neededProducts[p].quantity) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }
            }

            Object.keys(neededProducts).forEach(p => {
                this.stockProducts[p].quantity -= neededProducts[p].quantity;
            });

            this.budgetMoney += this.menu[meal].price;

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }

        return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

