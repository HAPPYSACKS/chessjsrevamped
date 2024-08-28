// <!-- Course: SENG 513 -->
// <!-- Date: NOV 13, 2023 -->
// <!-- Assignment 3 -->
// <!-- Name: Eric Mao -->
// <!-- UCID: 30120909 -->
import ChessUtils from "./ChessUtils.js";

export default class MoveValidator {
  static isValidMove(piece, targetPiece, currentPosition, newPosition, board) {
    if (!piece.isValidMove(newPosition)) {
      return false;
    }

    if (piece instanceof Pawn) {
      return this.isValidPawnMove(
        piece,
        targetPiece,
        currentPosition,
        newPosition,
        board
      );
    }

    if (this.isAllyPiece(targetPiece, piece)) {
      console.error("Cannot capture your own piece!");
      return false;
    }

    if (
      !(piece instanceof Knight) &&
      ChessUtils.hasInterveningPieces(board, currentPosition, newPosition)
    ) {
      console.error("Cannot move through other pieces!");
      return false;
    }

    return true;
  }

  static isValidPawnMove(
    pawn,
    targetPiece,
    currentPosition,
    newPosition,
    board
  ) {
    // Pawn-specific move validation logic
    // ...
  }

  static isAllyPiece(targetPiece, piece) {
    return targetPiece && piece.color === targetPiece.color;
  }

  // ... (other methods such as filterLegalMoves and simulateMove)
}
