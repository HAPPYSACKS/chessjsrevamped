// <!-- Course: SENG 513 -->
// <!-- Date: NOV 13, 2023 -->
// <!-- Assignment 3 -->
// <!-- Name: Eric Mao -->
// <!-- UCID: 30120909 -->
import Observer from "./Observer.js";
export default class ChessboardObserver extends Observer {
  constructor(name) {
    super();
    this.name = name;
  }

  update(currentPosition, newPosition) {
    // console.log(`${this.name} received data:`, data);
    // Overrided and implemented in gameLogic
  }
}
