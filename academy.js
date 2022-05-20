// Make your changes to store and update game state in this file

let board =[
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
let gameOver = false
let noughtsTurn = true
console.log("Noughts Turn")

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

    const horizontalWinner = checkHorizontalWinner()
    const verticalWinner = checkVerticalWinner()
    const diagonalWinner = checkDiagonalWinner()
    
    if(horizontalWinner) {
    return horizontalWinner
    }
    else if(verticalWinner) {
    return verticalWinner
    }
    else if(diagonalWinner) {
        return diagonalWinner
    }
    else{
        return nobody
}
}

const checkHorizontalWinner = () => {
    for(row =0; row < 3;  row++){

        if (checkMatchingRow(row)) {
            console.log('check row equals ', checkMatchingRow(row))
            if(noughtsTurn === false) {
                return "noughts"
            } else {
                return "crosses"
            }
        }
    }
}

const checkMatchingRow = (row) => {
    const firstColumn = board[row][0]
    const secondColumn = board[row][1]
    const thirdColumn = board[row][2]
    
    return firstColumn === secondColumn && firstColumn === thirdColumn && firstColumn !==null
}
const checkVerticalWinner = () => {
    for(column =0; column < 3;  column++){

        if (checkMatchingColumn(column)) {
            console.log('check column equals ', checkMatchingColumn(column))
            if(noughtsTurn === false) {
                return "noughts"
            } else {
                return "crosses"
            }
        }
    }
}

const checkMatchingColumn = (column) => {
    const firstRow = board[0][column]
    const secondRow = board[1][column]
    const thirdRow = board[2][column]
    
    return firstRow === secondRow && firstRow === thirdRow && firstRow !==null
}

const checkDiagonalWinner = () => {

    if (checkMatchingDiagonal()) {
        if(noughtsTurn === false) {
          return "noughts"
     } else {
         return "crosses"
         }
        }
    }
    
    const checkMatchingDiagonal = () => {
    const firstRow = board[0][0]
    const secondRow = board[1][1]
    const thirdRow = board[2][2]
    
    return firstRow === secondRow && firstRow === thirdRow && firstRow !==null
    
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
