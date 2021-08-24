function splitNegativePositive(numbers) {
    const sortedNumbers = [];

    for (let n of numbers) {
        if (n < 0) {
            sortedNumbers.unshift(n);
        } else {
            sortedNumbers.push(n);
        }
    }

    console.log(sortedNumbers.join('\n'));
}


splitNegativePositive([3, -2, 0, -1]);
