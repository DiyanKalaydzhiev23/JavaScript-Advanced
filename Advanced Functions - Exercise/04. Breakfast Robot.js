function solution() {
    const inStock = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};
    const recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, flavour: 3, fat: 7},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {carbohydrate: 10, protein: 10, fat: 10, flavour: 10}
    };

    return function(commandData) {
        const [command, product, quantity] = commandData.split(' ');
        if (command === 'restock') {
            inStock[product] += Number(quantity);
            return 'Success';
        } else if (command === 'prepare') {
            for (let [key, value] of Object.entries(recipes[product])) {
                if (inStock[key] < value * quantity) {
                    return `Error: not enough ${key} in stock`;
                } else {
                    inStock[key] -= value * quantity;
                }
            }
            return 'Success';
        } else {
            const info = [];
            for (let [key, value] of Object.entries(inStock)) {
                info.push(`${key}=${value}`);
            }
            return info.join(' ');
        }
    }
}

let manager = solution (); 
// console.log (manager ("restock flavour 50")); // Success 
// console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager('restock carbohydrate 10'), 'Success')
console.log(manager('restock flavour 10'), 'Success')
console.log(manager('prepare apple 1'), 'Success')
console.log(manager('restock fat 10'), 'Success')
console.log(manager('prepare burger 1'), 'Success')
console.log(manager('report'), 'protein=0 carbohydrate=4 fat=3 flavour=5')
