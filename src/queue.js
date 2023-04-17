const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    // добавить элемент
    const newNode = new ListNode(value);
    if (this.tail) {
      // если элемент не первый, добавить новый
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      // добавить первый элемент
      this.head = newNode;
      this.tail = newNode;
    }
  }
  dequeue() {
    // извлекает значение из головы очереди и удаляет его
    if (!this.head) {
      // если очередь пуста
      return null;
    }
    let dequeuedValue = this.head.value;
    this.head = this.head.next;
    return dequeuedValue;
  }
  getUnderlyingList() {
    // возвращает нижележащий связанный список
    console.log(this.head);
    return this.head;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

module.exports = {
  Queue,
};
