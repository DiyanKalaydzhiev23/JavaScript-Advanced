function processOddPositions(numbers) {
    const processedArray = [];

    for (i = 1; i < numbers.length; i += 2) {
        processedArray.push(numbers[i] * 2);
    }

    return processedArray.reverse().join(' ');
}

console.log(processOddPositions([10, 15, 20, 25]));
