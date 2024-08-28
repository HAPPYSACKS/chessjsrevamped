// <!-- Course: SENG 513 -->
// <!-- Date: NOV 13, 2023 -->
// <!-- Assignment 3 -->
// <!-- Name: Eric Mao -->
// <!-- UCID: 30120909 -->
import chessPiece from "./ChessPiece.js";

export default class King extends chessPiece {
  canCastle = true;
  whiteImage = "./img/white_king.svg";
  blackImage = "./img/black_king.svg";
  constructor(color, position) {
    super(color, position);
    this.setDisplayedImage();
  }
  canCapture() {}

  returnPossibleMoves() {
    let possibleMoves = [];
    const directions = [
      { row: -1, col: -1 }, // Up-left
      { row: -1, col: 0 }, // Up
      { row: -1, col: 1 }, // Up-right
      { row: 0, col: -1 }, // Left
      { row: 0, col: 1 }, // Right
      { row: 1, col: -1 }, // Down-left
      { row: 1, col: 0 }, // Down
      { row: 1, col: 1 }, // Down-right
    ];

    for (let direction of directions) {
      const newRow = this.position.row + direction.row;
      const newCol = this.position.col + direction.col;

      if (this.isInBounds(newRow, newCol)) {
        possibleMoves.push({ row: newRow, col: newCol });
      }
    }

    return possibleMoves;
  }
}
