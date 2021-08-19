function arrayManipolator(array) {
    let numbers = array.map(Number)

    let sum = numbers.reduce((previos, current)=>previos + current);

    let inversion = 0;
    let concatenation = '';
    for (i = 0; i < numbers.length; i++) {
        inversion += 1 / numbers[i];
        concatenation += String(numbers[i]);
    }

    console.log(sum);
    console.log(inversion);
    console.log(concatenation);
}

arrayManipolator([1, 2, 3])