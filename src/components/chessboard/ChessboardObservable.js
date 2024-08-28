// <!-- Course: SENG 513 -->
// <!-- Date: NOV 13, 2023 -->
// <!-- Assignment 3 -->
// <!-- Name: Eric Mao -->
// <!-- UCID: 30120909 -->
import Observable from "./Observerable.js";
export default class ChessboardObservable extends Observable {
  observers;
  constructor() {
    super();
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers.filter((obs) => obs !== observer);
  }

  notify(currentPosition, targetPosition) {
    this.observers.forEach((observer) =>
      observer.update(currentPosition, targetPosition)
    );
  }
}
