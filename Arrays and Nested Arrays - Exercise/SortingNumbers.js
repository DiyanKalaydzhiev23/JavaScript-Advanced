function smallBigSort(numbers) {
    const smallSort = [...numbers].sort((a, b) => a - b);
    const bigSort = [...smallSort].reverse();
    const combinedSort = [];

    for (i = 0; i < numbers.length; i++) {
        if (smallSort.length > 0) {
            combinedSort.push(smallSort.shift());
        }
        if (bigSort.length > 0) {
            combinedSort.push(bigSort.shift());
        }
    }

    return combinedSort.slice(0, combinedSort.length / 2);
}

console.log(smallBigSort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 78]));
