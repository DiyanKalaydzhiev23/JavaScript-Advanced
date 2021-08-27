function setDiagonals(matrix) {
    for (i=0; i < matrix.length; i++) {
        matrix[i] = matrix[i].split(' ').map(Number);
    }
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (i = 0; i < matrix.length; i++) {
        firstDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[i][matrix.length - i - 1];
    }

    if (firstDiagonalSum == secondDiagonalSum) {
        for (i = 0; i < matrix.length; i++) {
            for (j=0; j < matrix.length; j++) {
                if (j != i && j != matrix.length - i - 1) {
                    matrix[i][j] = firstDiagonalSum;
                    matrix[i][matrix.length - j - 1] = firstDiagonalSum;
                }
            }
            console.log(matrix[i].join(' '));
        }
    } else {
        for (i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    }
}


// setDiagonals(['1 1 1',
//     	     '1 1 1',
//           '1 1 0']);


setDiagonals(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);
