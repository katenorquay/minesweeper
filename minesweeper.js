document.addEventListener('DOMContentLoaded', startGame)

var board = {
  cells: [],
};

function cellConstructor(row, col, isMine, isMarked, hidden) {
  this.row = row;
  this.col = col;
  this.isMine = isMine;
  this.isMarked = isMarked;
  this.hidden = hidden
}

var setBoard = prompt("What size board do you want? Choose a number between 3 and 6" )

createBoard(setBoard, setBoard);

function createBoard(width, height) {
  var row = 0;
  for (i = 0; i < height; i++) {
    var col = 0;
  for (j = 0; j < width; j++) {
    var newCell = new cellConstructor(row, col, createMines(), false, true);
    console.log(newCell)
    board.cells.push(newCell);
    col++;
  }
  row++;
}
};

function createMines(randomMine) {
  var randomMine = Math.floor(Math.random() * 20);
  if (randomMine < 4) {
    return true;
  } else {
    return false;
  }
}





function startGame () {

for (var i = 0; i < board.cells.length; i++) {
  var countSM = countSurroundingMines(board.cells[i])
board.cells[i].surroundingMines = countSM;
}

document.addEventListener("click", checkForWin);

document.addEventListener("contextmenu", checkForWin);

  lib.initBoard()
}

function checkForWin () {

   for (var i = 0; i < board.cells.length; i++) {
     if (board.cells[i].isMine === true && board.cells[i].isMarked === false) {
       return;
     }
   }
 for (var i = 0; i < board.cells.length; i++) {
     if (board.cells[i].isMine === false && board.cells[i].hidden === true) {
       return;
  }
}
lib.displayMessage('You win!');
var audioWin = document.getElementById('win');
audioWin.play();
var playAgain = prompt("You Win!!! Play Again?").toUpperCase();
switch(playAgain) {
  case 'YES':
  location.reload ();
}

}

//   lib.displayMessage('You win!');
//   var winner = prompt("Play again?")
//   }
// }

function countSurroundingMines (cell) {
  var surround = lib.getSurroundingCells(cell.row, cell.col);
var count = 0;
  for (var i = 0; i < surround.length; i++) {
    if (surround[i].isMine === true) {
      count += 1;
    }
  }
  return count;
}
