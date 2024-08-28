// <!-- Course: SENG 513 -->
// <!-- Date: NOV 13, 2023 -->
// <!-- Assignment 3 -->
// <!-- Name: Eric Mao -->
// <!-- UCID: 30120909 -->
import chessPiece from "./ChessPiece.js";

export default class Knight extends chessPiece {
  whiteImage = "./img/white_knight.svg";
  blackImage = "./img/black_knight.svg";
  constructor(color, position) {
    super(color, position);
    this.setDisplayedImage();
  }
  returnPossibleMoves() {
    let possibleMoves = [];
    const moves = [
      { row: -2, col: -1 },
      { row: -2, col: 1 },
      { row: -1, col: -2 },
      { row: -1, col: 2 },
      { row: 1, col: -2 },
      { row: 1, col: 2 },
      { row: 2, col: -1 },
      { row: 2, col: 1 },
    ];

    for (let move of moves) {
      let newRow = this.position.row + move.row;
      let newCol = this.position.col + move.col;

      if (this.isInBounds(newRow, newCol)) {
        possibleMoves.push({ row: newRow, col: newCol });
      }
    }

    return possibleMoves;
  }
}
