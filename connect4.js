let board =[
    [null, null, null, null, null, null,null],
    [null, null, null, null, null, null,null],
    [null, null, null, null, null, null,null],
    [null, null, null, null, null, null,null],
    [null, null, null, null, null, null,null],
    [null, null, null, null, null, null,null],
]
let gameOver = false
let redsTurn = true
console.log("Reds Turn")

// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
function takeTurn(row, column) {
    if (!gameOver) {
    console.log("takeTurn was called with row: " + row + ", column:" + column);
    console.log(`takeTurn was called with row: ${row}, column: ${column}`);

    for (let i = 5; i >= 0; i--) {
console.log("loop start")
    if (board[i][column] === null && redsTurn) {
        board[i][column] = "red"
        redsTurn = false
        console.log(board)
        console.log("Yellows Turn")
        break
    } else if (board[i][column] === null){
        board[i][column] = "yellow"
        redsTurn = true
        console.log("Reds Turn")
        break
    } else {
        console.log("Space already taken")
        console.log(board)
    }
    }
}
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {


    const horizontalWinner = checkHorizontalWinner()
    const verticalWinner = checkVerticalWinner()
    // const diagonalWinner = checkDiagonalWinner()
    
    if(horizontalWinner) {
    return horizontalWinner
    }
    else if(verticalWinner) {
    return verticalWinner
    }
    // else if(diagonalWinner) {
    //     return diagonalWinner
    // }
    else{
        return null
}
}

const checkHorizontalWinner = () => {
    for(row =0; row < 6;  row++){

        if (checkMatchingRow(row)) {
            console.log('check row equals ', checkMatchingRow(row))
            if(redsTurn === false) {
                return "red"
            } else {
                return "yellow"
            }
        }
    }
}

const checkMatchingRow = (row) => {
    const firstColumn = board[row][0]
    const secondColumn = board[row][1]
    const thirdColumn = board[row][2]
    const fourthColumn = board[row][3]
    const fifthColumn = board[row][4]
    const sixthColumn = board[row][5]
    const seventhColumn = board[row][6]
    
    return firstColumn === secondColumn && firstColumn === thirdColumn && firstColumn === fourthColumn && firstColumn !==null ||
    secondColumn === thirdColumn && secondColumn === fourthColumn && secondColumn === fifthColumn && secondColumn !==null ||
    thirdColumn === fourthColumn && thirdColumn === fifthColumn && thirdColumn === sixthColumn && thirdColumn !== null ||
    fourthColumn === fifthColumn && fourthColumn === sixthColumn && fourthColumn === seventhColumn && fourthColumn != null
}
const checkVerticalWinner = () => {
    for(column =0; column < 7;  column++){

        if (checkMatchingColumn(column)) {
            console.log('check column equals ', checkMatchingColumn(column))
            if(redsTurn === false) {
                return "red"
            } else {
                return "yellow"
            }
        }
    }
}

const checkMatchingColumn = (column) => {
    const firstRow = board[0][column]
    const secondRow = board[1][column]
    const thirdRow = board[2][column]
    const fourthRow = board[3][column]
    const fifthRow = board[4][column]
    const sixthRow = board[5][column]
    
    return firstRow === secondRow && firstRow === thirdRow && firstRow === fourthRow && firstRow !==null ||
    secondRow === thirdRow && secondRow === fourthRow && secondRow === fifthRow && secondRow !== null ||
    thirdRow === fourthRow && thirdRow === fifthRow && thirdRow === sixthRow && thirdRow !== null
}

// const checkDiagonalWinner = () => {

//     if (checkMatchingDiagonal()) {
//         if(redsTurn === false) {
//           return "red"
//      } else {
//          return "yellow"
//          }
//         }
//     }
    
//     const checkMatchingDiagonal = () => {
//     const nought = board[0][0]
//     const one = board[0][1]
//     const two = board[0][2]
//     const three = board[0][3]
//     const four = board[0][4]
//     const five = board[0][5]
//     const six = board[0][6]
//     const ten = board[1][0]
//     const eleven = board[1][1]
//     const twelve = board[1][2]
//     const thirteen = board[1][3]
//     const fourteen = board[1][4]
//     const fifteen = board[1][5]
//     const sixteen = board[1][6]
//     const twenty = board[2][0]
//     const twentyone = board[2][1]
//     const twentytwo = board[2][2]
//     const twentythree = board[2][3]
//     const twentyfour = board[2][4]
//     const twentyfive = board[2][5]
//     const twentysix = board[2][6]
//     const thirty = board[3][0]
//     const thirtyone = board[3][1]
//     const thirtytwo = board[3][2]
//     const thirtythree = board[3][3]
//     const thirtyfour = board[3][4]
//     const thirtyfive = board[3][5]
//     const thirtysix = board[3][6]
//     const fourty = board[4][0]
//     const fourtyone = board[4][1]
//     const fourtytwo = board[4][2]
//     const fourtythree = board[4][3]
//     const fourtyfour = board[4][4]
//     const fourtyfive = board[4][5]
//     const fourtysix = board[4][6]
//     const fifty = board[5][0]
//     const fiftyone = board[5][1]
//     const fiftytwo = board[5][2]
//     const fiftythree = board[5][3]
//     const fiftyfour = board[5][4]
//     const fiftyfive = board[5][5]
//     const fiftysix = board[5][6]
//     const sixty = board[6][0]
//     const sixtyone = board[6][1]
//     const sixtytwo = board[6][2]
//     const sixtythree = board[6][3]
//     const sixtyfour = board[6][4]
//     const sixtyfive = board[6][5]
//     const sixtysix = board[6][6]
    
//     return thirty === fourtyone && thirty === fiftytwo && thirty === sixtythree && thirty !==null || 
//     twenty === thirtyone && twenty === fourtytwo && twenty === fiftythree && twenty !==null || 
//     thirtyone === fourtytwo && thirtyone === fiftythree && thirtyone === sixtyfour && thirtyone !==null || 
//     ten === twentyone && ten === thirtytwo && ten === fourtythree && ten !==null || 
//     twentyone === thirtytwo && twentyone === fourtythree && twentyone === fiftyfour && twentyone !==null ||
//     thirtytwo === fourtythree && thirtytwo === fiftyfour && thirtytwo === sixtyfive && thirtytwo !==null ||
//     eleven === twentytwo && eleven === thirtythree && eleven === fourtyfour && eleven !==null ||
//     twentytwo === thirtythree && twentytwo === fourtyfour && twentytwo === fiftyfive && twentytwo !==null ||
//     thirtythree === fourtyfour && thirtythree === fiftyfive && thirtythree === sixtysix && thirtythree !==null ||
//     twelve === twentythree && twelve === thirtyfour && twelve === fourtyfive && twelve !==null ||
//     twentythree === thirtyfour && twentythree === fourtyfive && twentythree === fiftysix && twentythree !==null ||
//     thirteen === twentyfour && thirteen === thirtyfive && thirteen === fourtysix && thirteen !==null ||
//     nought === eleven && nought === twentytwo && nought === thirtythree && nought !==null ||
//     eleven === twentytwo && eleven === thirtythree && eleven === fourtyfour && eleven !==null ||
//     twentytwo === thirtythree && twentytwo === fourtyfour && twentytwo === fiftyfive && twentytwo !==null ||
//     thirtythree === fourtyfour && thirtythree === fiftyfive && thirtythree === sixtysix && thirtythree !==null ||
//     one === twelve && one === twentythree && one === thirtyfour && one !==null ||
//     twelve === twentythree && twelve === thirtyfour && twelve === fourtyfive && twelve !==null ||
//     two === thirteen && two === twentyfour && two === thirtyfive && two !==null ||
//     three === fourteen && three === twentyfive && three === thirtysix && three !==null 
   
// }


// Set the game state back to its original state to play another game.
function resetGame(clearBoard) {
      console.log("resetGame was called");   
      board = 
      [[null, null, null, null, null, null,null],
      [null, null, null, null, null, null,null],
      [null, null, null, null, null, null,null],
      [null, null, null, null, null, null,null],
      [null, null, null, null, null, null,null],
      [null, null, null, null, null, null,null]]
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
