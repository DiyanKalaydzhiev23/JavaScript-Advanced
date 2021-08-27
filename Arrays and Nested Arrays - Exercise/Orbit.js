function orbitMatrix(data) {
    let [rows, cols, startRow, startCol] = data;
    let matrix = [];

    for (row=0; row < rows; row++) {
        matrix.push([]);
    }

    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - startRow), Math.abs(col - startCol)) + 1;
        }
    }
 
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}


orbitMatrix([4, 4, 0, 0]);
