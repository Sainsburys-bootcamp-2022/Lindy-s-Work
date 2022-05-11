// Make your changes to store and update game state in this file

let board = [[null, null, null][null, null, null][null, null, null]]

function getNewBoard() {
    return[null, null, null][null, null, null][null, null, null]
}
// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
function takeTurn(row, column) {
        console.log(board[row][column])
        const currentsquare = board[row][column]
        for (const rowIndex in board) {
            for (const columnIndex in rowIndex) {
                if (board [rowIndex][columnIndex] === null) {
            }
        }
    }
}
    console.log("takeTurn was called with row: " + row + ", column:" + column);
    console.log(`takeTurn was called with row: ${row}, column: ${column}`);
    function positionClick() {
        console.log("drawBoard was called");
        return (board)
    }

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    return null;
}

// Set the game state back to its original state to play another game.
function resetGame() {
    function getNewBoard()
    //function clearBoard() {
        //for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
            //for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
                //document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerHTML = ""
            //}
       // }
    //}    
    console.log(board);
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return [[null, null, null], [null, null, null], [null, null, null]];
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
