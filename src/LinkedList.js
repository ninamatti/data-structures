console.log("Hi");

class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}
//let myNode = new Node(5);
//console.log('Hii!',  myNode.value);

class LinkedList {
  constructor(headValue) {
    if (headValue !== undefined) {
      this.head = new Node(headValue);
      this.tail = this.head;
    }
  }

  appendToTail(value) {
    let nodeToAppend = new Node(value);
    if (!this.head) {
      this.head = nodeToAppend;
      this.tail = this.head;
    }
    this.tail.next = nodeToAppend;
    this.tail = nodeToAppend;
    return this.tail;
  }

  removeHead() {
    let currentHead = this.head;
    this.head = this.head.next;
    return currentHead;
  }

  findNode(value) {}

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.
*/

  forEach(callback) {}

  print() {}

  insertHead(value) {}

  insertAfter(refNode, value) {}

  removeAfter(refNode) {}
}

module.exports = LinkedList;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
