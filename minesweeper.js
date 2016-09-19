document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [ {
    col:  0,
    row: 0,
    isMine: true,
    hidden: true
  }, {
    col: 0,
    row: 1,
    isMine: false,
    hidden: true
  }, {
    col: 0,
    row: 2,
    isMine: false,
    hidden: true
  }, {
    col: 1,
    row: 0,
    isMine: false,
    hidden: true
  }, {
    col: 1,
    row: 1,
    isMine: true,
    hidden: true
  }, {
    col: 1,
    row: 2,
    isMine: false,
    hidden: true
  }, {
    col: 2,
    row: 0,
    isMine: false,
    hidden: true
  }, {
    col: 2,
    row: 1,
    isMine: true,
    hidden: true
  }, {
    col: 2,
    row: 2,
    isMine: true,
    hidden: true
  } ]
}


function startGame () {
  for (i = 0; i < board.cells.length; i++) {
    board.cells[i]["surroundingMines"] = countSurroundingMines(board.cells[i]);
  };
  console.log(board.cells);
  lib.initBoard();
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for (j = 0; j < surrounding.length; j++) {
    console.log(surrounding[j])
    if(surrounding[j]["isMine"] === true) {
      count++;
    }
  }
  return count;
}
