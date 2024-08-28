// <!-- Course: SENG 513 -->
// <!-- Date: NOV 13, 2023 -->
// <!-- Assignment 3 -->
// <!-- Name: Eric Mao -->
// <!-- UCID: 30120909 -->
import Bishop from "./Bishop.js";
import Knight from "./Knight.js";
import King from "./King.js";
import Pawn from "./Pawn.js";
import Queen from "./Queen.js";
import Rook from "./Rook.js";
import ChessboardObservable from "./ChessboardObservable.js";

export default class Chessboard extends ChessboardObservable {
  board;
  currentPlayer;
  selectedTile = null;
  selectedPiece = null;
  constructor() {
    super();
    this.board = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null));
  }

  findPieceAt(row, col) {
    return this.board[row][col];
  }

  handleSquareClick(row, col) {
    const clickedTile = document.getElementById(
      `${String.fromCharCode(97 + col)}${8 - row}`
    );
    if (
      this.selectedTile &&
      this.selectedTile.row === row &&
      this.selectedTile.col === col
    ) {
      clickedTile.classList.toggle("highlighted");
      this.selectedPiece = null;
      this.selectedTile = null;
      return; // Return early to avoid further processing
    }

    // check if the piece is already selected
    if (this.selectedPiece) {
      console.log(
        `Piece is already selected. Valid move? ${this.selectedPiece.isValidMove(
          { row, col }
        )} pos: ${row}, ${col}`
      );
      if (this.selectedPiece.isValidMove({ row, col })) {
        // notify gamelogic to move the piece to the tile
        this.notify(this.selectedTile, { row, col });

        // clear selection if showcasing them
        if (this.selectedTile) {
          const prevSelectedTile = document.getElementById(
            `${String.fromCharCode(97 + this.selectedTile.col)}${
              8 - this.selectedTile.row
            }`
          );
          prevSelectedTile.classList.remove("highlighted");
        }
      }
      this.selectedPiece = null;
      this.selectedTile = null;
    } else {
      // no piece selected, so select one

      const piece = this.findPieceAt(row, col);

      if (piece) {
        this.selectedPiece = piece;
        this.selectedTile = { row, col };

        // highlight tiles
        clickedTile.classList.add("highlighted");
      }
    }
  }

  initializeBoard() {
    // Initialize pawns
    for (let i = 0; i < 8; i++) {
      this.board[1][i] = new Pawn("white", { row: 1, col: i });
      this.board[6][i] = new Pawn("black", { row: 6, col: i });
    }

    // Initialize other white pieces
    this.board[0][0] = new Rook("white", { row: 0, col: 0 });
    this.board[0][7] = new Rook("white", { row: 0, col: 7 });
    this.board[0][1] = new Knight("white", { row: 0, col: 1 });
    this.board[0][6] = new Knight("white", { row: 0, col: 6 });
    this.board[0][2] = new Bishop("white", { row: 0, col: 2 });
    this.board[0][5] = new Bishop("white", { row: 0, col: 5 });
    this.board[0][3] = new Queen("white", { row: 0, col: 3 });
    this.board[0][4] = new King("white", { row: 0, col: 4 });

    // Initialize other black pieces
    this.board[7][0] = new Rook("black", { row: 7, col: 0 });
    this.board[7][7] = new Rook("black", { row: 7, col: 7 });
    this.board[7][1] = new Knight("black", { row: 7, col: 1 });
    this.board[7][6] = new Knight("black", { row: 7, col: 6 });
    this.board[7][2] = new Bishop("black", { row: 7, col: 2 });
    this.board[7][5] = new Bishop("black", { row: 7, col: 5 });
    this.board[7][3] = new Queen("black", { row: 7, col: 3 });
    this.board[7][4] = new King("black", { row: 7, col: 4 });
  }

  removePiece(position) {
    // set position to null
  }

  renderBoard() {
    let boardHTML = document.getElementById("chessboard");

    // clear existing HTML

    boardHTML.innerHTML = "";

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        let square = document.createElement("div");
        square.className = "square";
        square.id = `${String.fromCharCode(97 + col)}${8 - row}`; // a8, b8, ..., h1

        square.addEventListener("click", () => {
          this.handleSquareClick(row, col);
        });

        let piece = this.board[row][col];
        if (piece) {
          let pieceImg = document.createElement("img");
          pieceImg.src = piece.displayedImage;
          square.appendChild(pieceImg);
        }
        boardHTML.appendChild(square);
      }
    }
  }
}
