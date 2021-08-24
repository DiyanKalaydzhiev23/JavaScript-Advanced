function biggerHalf(numbers) {
    numbers.sort((a, b) => { return a - b; });
    return numbers.slice(numbers.length / 2);
}

console.log(biggerHalf([4, 7, 2, 5]));
