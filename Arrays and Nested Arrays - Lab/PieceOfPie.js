function TakePiece(pieces, startPiece, endPiece) {
    const start = pieces.indexOf(startPiece);
    const end = pieces.indexOf(endPiece) + 1;
    return pieces.slice(start, end);
}

console.log(TakePiece(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));