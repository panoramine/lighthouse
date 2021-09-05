const generateBoard = function (whiteQ, blackQ) {
  let board = [];
  let rank = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      rank.push(0);
    }
    board.push(rank);
    rank = []
  }
  board[whiteQ[0]][whiteQ[1]] = 1;
  board[blackQ[0]][blackQ[1]] = 1;
  return board;
}



const queenThreat = function (board) {
  let whiteQ = [];
  let blackQ = [];
  let threat = false;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[j][i] == 1){
        if (whiteQ.length == 0) {
          whiteQ.push(j);
          whiteQ.push(i);
        } else {
          blackQ.push(j);
          blackQ.push(i);
        }
      }
    }
  }
  if (whiteQ[0] == blackQ[0] || whiteQ[1] == blackQ[1]) {
    threat = true;
  }
  if (whiteQ[0] !== blackQ[0] && whiteQ[1] !== blackQ[1]) {
    if (Math.abs(blackQ[0] - whiteQ[0]) == Math.abs(blackQ[1] - whiteQ[1])) {
      threat = true;
      
    }
  }
  return threat;
}



let whiteQueen = [1, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.table(generatedBoard);
console.log(queenThreat(generatedBoard));


