function sort(data) {
    let products = {};
    let firstChar;

    for (info of data) {
        let [product, price] = info.split(' : ');
        products[product] = Number(price);
    }

    products = Object.keys(products).sort().reduce((r, k) => (r[k] = products[k], r), {});
    for (let [product, price] of Object.entries(products)) {
        if (product.charAt(0) != firstChar) {
            firstChar = product.charAt(0);
            console.log(firstChar);
        }
        console.log(`  ${product}: ${price}`);
    }
}



sort([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);
