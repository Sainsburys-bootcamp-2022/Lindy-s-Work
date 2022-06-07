//Submit names
function bothPlayer() {
    let redplayer = getPlayer1()
    let yellowplayer = getPlayer2()
    console.log(redplayer, yellowplayer);
}

function getPlayer1() {
    const player1 = document.getElementById('player1Name').value;
    console.log(player1);
    return player1
  }

  function getPlayer2() {
    const player2 = document.getElementById('player2Name').value;
    console.log(player2);
    return player2
  }

// Validate academite functions are available
const functions = ["takeTurn", "getBoard", "checkWinner", "resetGame"];
for (f of functions) {
    const functionObject = window[f];
    if (typeof functionObject !== "function") {
        throw `Looks like expected function '${f}' is missing. Double check the function signatures from academy.js are still present and unaltered.`;
    }
}

// Clear down the elements drawn on the board.
function clearBoard() {
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerHTML = ""
        }
    }
}

// Populate the grid with images based on the board state.
function drawBoard(board) {
    clearBoard();
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            if (!board[rowIndex][columnIndex]) {
                continue;
            }
            const cellText = board[rowIndex][columnIndex] === 'player1Name' ? "🐶" : "🐱";
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerText = cellText;
        }
    }
}

function isValidRowOrColumn(array) {
    return Array.isArray(array) && array.length === 7;
}

function isValidColumn(columnArray) {
    return isValidRowOrColumn(columnArray) && columnArray.every(function (item) { return [player1Name, player2Name, null].includes(item); });
}

// A grid position was clicked call the game's turn function, redraw and then check for a winner.
function positionClick(rowIndex, columnIndex, event) {
    takeTurn(rowIndex, columnIndex);
    const board = getBoard();
    // if (!isValidRowOrColumn(board) || !board.every(isValidColumn)) {
    //     throw "Expecting 'getBoard' to return a 2d array where all values match are null or one of the strings 'red' or 'yellow'. Actually received: " + JSON.stringify(board);
    // }
    drawBoard(board);
    const winner = checkWinner();
    if (winner) {
        // if (typeof winner !== "string" || ![player1Name, player2Name, 'nobody'].includes(winner)) {
        //     throw "Expecting 'checkWinner' to return null or one of the strings 'player1Name', 'player2Name' or 'nobody'. Actually received: " + winner;
        // }
        const winnerName = document.getElementById("winner-name");
        winnerName.innerText = winner;
        const winnerDisplay = document.getElementById("winner-display");
        winnerDisplay.style.display = "block";
    }
}

// The reset button was clicked, call the game's reset function then reset the DOM.
function resetClick(event) {
    resetGame();
    const winnerName = document.getElementById("winner-name");
    winnerName.innerText = "";
    const winnerDisplay = document.getElementById("winner-display");
    winnerDisplay.style.display = "None";
    clearBoard();
}

// Bind the click events for the grid.
for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
        const gridPosition = document.getElementById(`row-${rowIndex}-column-${columnIndex}`);
        gridPosition.addEventListener("click", positionClick.bind(null, rowIndex, columnIndex));
    }
}

// Bind the click event for the reset button.
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetClick);

const submitbtn = document.getElementById("submitbtn");
submitbtn.addEventListener("click", bothPlayer);

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        clearBoard,
        drawBoard,
        isValidRowOrColumn,
        isValidColumn,
        positionClick,
        resetClick,
    }
} else {
    console.log("Running in Browser")
}
