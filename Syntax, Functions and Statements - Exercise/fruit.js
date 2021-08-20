function order(fruit, grams, pricePerKilo) {
    let kilograms = grams / 1000;
    let totalPrice = pricePerKilo * kilograms;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}


order('orange', 2500, 1.80)
