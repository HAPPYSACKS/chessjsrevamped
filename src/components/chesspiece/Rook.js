// <!-- Course: SENG 513 -->
// <!-- Date: NOV 13, 2023 -->
// <!-- Assignment 3 -->
// <!-- Name: Eric Mao -->
// <!-- UCID: 30120909 -->
import chessPiece from "./ChessPiece.js";

export default class Rook extends chessPiece {
  canCastle = true;
  whiteImage = "./img/white_rook.svg";
  blackImage = "./img/black_rook.svg";
  constructor(color, position) {
    super(color, position);
    this.setDisplayedImage();
  }
  returnPossibleMoves() {
    let possibleMoves = [];
    const directions = [
      { row: -1, col: 0 }, // Up
      { row: 1, col: 0 }, // Down
      { row: 0, col: -1 }, // Left
      { row: 0, col: 1 }, // Right
    ];

    for (let direction of directions) {
      let newRow = this.position.row + direction.row;
      let newCol = this.position.col + direction.col;

      while (this.isInBounds(newRow, newCol)) {
        possibleMoves.push({ row: newRow, col: newCol });
        newRow += direction.row;
        newCol += direction.col;
      }
    }

    return possibleMoves;
  }
}
