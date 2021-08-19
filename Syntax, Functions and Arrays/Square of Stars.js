function drawSquare(n=5) {
    let square = '';

    for (let i = 1; i <= n; i++) {
        square += '* '.repeat(n) + '\n';
    }
    console.log(square)
}

drawSquare()
