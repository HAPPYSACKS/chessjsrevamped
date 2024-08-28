// <!-- Course: SENG 513 -->
// <!-- Date: NOV 13, 2023 -->
// <!-- Assignment 3 -->
// <!-- Name: Eric Mao -->
// <!-- UCID: 30120909 -->
import chessPiece from "./ChessPiece.js";

export default class Queen extends chessPiece {
  whiteImage = "./img/white_queen.svg";
  blackImage = "./img/black_queen.svg";
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
      { row: -1, col: -1 }, // Up-left
      { row: -1, col: 1 }, // Up-right
      { row: 1, col: -1 }, // Down-left
      { row: 1, col: 1 }, // Down-right
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
