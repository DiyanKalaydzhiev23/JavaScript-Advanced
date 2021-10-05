function solve(data) {
    const storage = {};
    const bottles = {};

    data.forEach(d => {
        let [juice, quantity] = d.split(' => ');
        if (juice in storage == false) {
            storage[juice] = 0;
        }
        storage[juice] += Number(quantity);
        if (storage[juice] >= 1000) {
            if (juice in bottles == false) {
                bottles[juice] = 0 
            }
            bottles[juice] += Math.floor(storage[juice] / 1000);
            storage[juice] = storage[juice] % 1000;
        }
    });

    for (let [key, value] of Object.entries(bottles)) {
        console.log(`${key} => ${value}`);
    }
}

// solve(['Kiwi => 234',
// 'Pear => 2345',
// 'Watermelon => 3456',
// 'Kiwi => 4567',
// 'Pear => 5678',
// 'Watermelon => 6789']
// );

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);