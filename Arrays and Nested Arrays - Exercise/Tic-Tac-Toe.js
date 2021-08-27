function play(moves) {
    let positionsUsed = 0;
    let win = false;
    const turns = ['X', 'O'];
    const board = [[false, false, false],
                       [false, false, false],
                       [false, false, false]];

    for (let move of moves) {
        let [row, col] = move.split(' ').map(Number);

        if (board[row][col]) {
            console.log('This place is already taken. Please choose another!')
            continue;
        }

        board[row][col] = turns[0];
        turns.push(turns.shift());
        positionsUsed += 1;

        function checkWin(a, b, c) {
            if (a && b && c) {
                if (a == b && b == c) {
                    win = true;
                }
            }
        }
        
        // check row win
        // check column win
        for (i=0; i < 3; i++) {
            checkWin(board[i][0], board[i][1], board[i][2]);
            checkWin(board[0][i], board[1][i], board[2][i]);
        }

        // check first diagonal
        checkWin(board[0][0], board[1][1], board[2][2]);
        
        //check second diagonal
        checkWin(board[0][2], board[1][1], board[2][0]);
        
        if (win) {
            console.log(`Player ${turns.pop()} wins!`);
            break;
        }
        if (positionsUsed == 9) {
            console.log('The game ended! Nobody wins :(')
            break;
        }
    }
    for (let r of board) {
        console.log(r.join('\t'));
    }
}


play(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);


play(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
);

play(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);
