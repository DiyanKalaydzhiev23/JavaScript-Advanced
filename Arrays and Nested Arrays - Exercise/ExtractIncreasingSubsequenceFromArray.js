function extractIncreasingNumbers(numbers) {
    const increasingNumbers = [numbers.shift()];

    for (let n of numbers) {
        if (n >= increasingNumbers[increasingNumbers.length-1]) {
            increasingNumbers.push(n);
        }
    }

    return increasingNumbers;
}

console.log(extractIncreasingNumbers([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));
