// <!-- Course: SENG 513 -->
// <!-- Date: NOV 13, 2023 -->
// <!-- Assignment 3 -->
// <!-- Name: Eric Mao -->
// <!-- UCID: 30120909 -->
export default class Observable {
  observers;
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}
