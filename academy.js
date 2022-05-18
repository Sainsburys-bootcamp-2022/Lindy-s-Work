// Make your changes to store and update game state in this file

let board =[
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
let gameOver = false
let noughtsTurn = true
console.log("Noughts Turn")

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
function takeTurn(row, column) {

    if (!gameOver) {
    console.log("takeTurn was called with row: " + row + ", column:" + column);
    console.log(`takeTurn was called with row: ${row}, column: ${column}`);

    if (board[row][column] === null && noughtsTurn) {
        board[row][column] = "nought"
        noughtsTurn = false
        console.log(board)
        console.log("Crosses Turn")
    } else if (board[row][column] === null){
        board[row][column] = "cross"
        noughtsTurn = true
        console.log("Noughts Turn")
    } else {
        console.log("Space already taken")
        console.log(board)
    }
}
}
// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    // if checkWinner === winningConditions ()
//         console.log("winner")
    
// }
    // let roundWon = false;                 
    //   for (let i = 0; i <= 7; i++) {
    //      const winner = winningConditions[i];
    //       let a = board[winner[0]];
    //       let b = board[winner[1]];
    //       let c = board[winner[2]];
    //       if (a === '' || b === '' || c === '') {
    //            continue;
    //        }
    //        if (a === b && b === c) {
    //           roundWon = true;
    //            break
    //        }
    //    }
    console.log("checkWinner was called");
    return null;
}

// Set the game state back to its original state to play another game.
function resetGame(clearBoard) {
      console.log("resetGame was called");   
      board = 
      [[null, null, null],
      [null, null, null],
      [null, null, null]]
}


// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
