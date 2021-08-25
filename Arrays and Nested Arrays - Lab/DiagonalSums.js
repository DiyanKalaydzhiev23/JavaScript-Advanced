function DiagonalsSums(matrix) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (i = 0; i < matrix.length; i++) {
        firstDiagonal += matrix[i][i];
        secondDiagonal += matrix[i][matrix.length - i - 1];
    }

    console.log(firstDiagonal, secondDiagonal);
}

DiagonalsSums(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);
