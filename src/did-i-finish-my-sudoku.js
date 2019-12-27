const SQUARE_SIZE = 3;
const TARGET = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function doneOrNot(board) {
    const squares = extractSquares(board);
    try {
        validateSquares(squares);
        validateVertical(board);
    } catch (e) {
        return 'Try again!';
    }
    return 'Finished!';
}

function validateVertical(board) {
    for (let i = 0; i < 9; i++) {
        const TARGETC = JSON.parse(JSON.stringify(TARGET));
        for (let j = 0; j < 9; j++) {
            let index = TARGETC.indexOf(board[j][i]);
            if (index != -1) {
                TARGETC.splice(index, 1);
            } else {
                throw Error();
            }
        }
        if (TARGETC.length != 0)
            throw Error();
    }
}

function validateSquares(squares) {
    squares.forEach(s => {
        TARGET.forEach(t => {
            if (!s.includes(t)) {
                throw Error();
            }
        });
    });
}

function extractSquares(board) {
    const squares = [];

    for (let hsi = 0; hsi < 8; hsi += SQUARE_SIZE) {
        for (let vsi = 0; vsi < 8; vsi += SQUARE_SIZE) {
            let square = [];
            for (let j = vsi; j < vsi + SQUARE_SIZE; j++) {
                for (let i = hsi; i < hsi + SQUARE_SIZE; i++) {
                    square.push(board[i][j]);
                }
            }
            squares.push(square);
            square = [];
        }
    }
    return squares;
}

module.exports = doneOrNot;
