// Arrays & Hashing

/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board) {
    const items = board.length;

    for(let i = 0; i < items; i++) {
        const rowSet = new Set();
        const colSet = new Set();
        const sqrSet = new Set();

        for(let j = 0; j < items; j++) {
            const row = board[i][j];
            const col = board[j][i];
            const sqr = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

            if(row !== '.') {
                if(rowSet.has(row)) return false;
                rowSet.add(row);
            }

            if(col !== '.') {
                if(colSet.has(col)) return false;
                colSet.add(col);
            }

            if(sqr !== '.') {
                if(sqrSet.has(sqr)) return false;
                sqrSet.add(sqr);
            }
        }
    }

    return true;
};

// Test cases
console.log(isValidSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]));
console.log(isValidSudoku([
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]));

// Submitted 20 April 2024 15:44
// Runtime 52ms - beats 98.25%;
// Memory 51.00MB - beats 95.97%