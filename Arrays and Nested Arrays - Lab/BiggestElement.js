function findBiggestNumber(matrix) {
    let biggestNumber = Number.NEGATIVE_INFINITY;

    for (i = 0; i < matrix.length; i++) {
        let biggestFound = Math.max(...matrix[i]);

        if (biggestFound > biggestNumber) {
            biggestNumber = biggestFound;
        }
    }
    return biggestNumber;
}

console.log(findBiggestNumber(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
))
