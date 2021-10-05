function solve(data) {
    const cars = {};

    data.forEach(d => {
        let [brand, model, quantity] = d.split(' | ');
        if (brand  in cars == false) cars[brand] = {};
        if (model in cars[brand] == false) cars[brand][model] = 0;
        cars[brand][model] += Number(quantity);
    });

    for (let [brand, brandData] of Object.entries(cars)) {
        console.log(brand);
        for (let [model, quantity] of Object.entries(brandData)) {
            console.log(`###${model} -> ${quantity}`); 
        }
    }
}


solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);