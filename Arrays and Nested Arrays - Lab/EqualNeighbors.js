function equalPairs(matrix) {
    let pairs = 0;
    let el;

    for (r = 0; r < matrix.length; r++) {
        for (c = 0; c < matrix[r].length; c++) {
            el = matrix[r][c];
            if (r < matrix.length - 1) {
                if (matrix[r][c] === matrix[r+1][c]) {
                    pairs += 1;
                }
            } 
            if (matrix[r][c] === matrix[r][c+1]) {
                pairs += 1;
            }
        }
    }

    return pairs;
}


console.log(equalPairs([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]));
