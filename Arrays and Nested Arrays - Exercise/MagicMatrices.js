function magicalCheck(matrix) {
    const sum = matrix[0].reduce((a, b) => a + b);

    for (row = 0; row < matrix.length; row++) {
        let currentRowSum = matrix[row].reduce((a, b) => a + b);
        let currentColSum = 0;

        for (col = 0; col < matrix.length; col++) {
            currentColSum += matrix[row][col];
        }

        if (currentRowSum != sum || currentColSum != sum) {
            return false;
        }
    }

    return true;
}


console.log(magicalCheck([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));

console.log(magicalCheck([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));
