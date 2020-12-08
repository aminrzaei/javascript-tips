export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  prepend(value) {
    const newNode = LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
    return this;
  }
  delete(value) {
    let deletedNode = null;

    if (!this.head) return null;
    if (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
      if (this.tail.value === value) this.tail = currentNode;
      return deletedNode;
    }
    return deletedNode;
  }
  find(value) {
    if (!this.head) return null;
    if (this.head === value) return this.head;

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) return currentNode.next;
      else currentNode.next = currentNode.next.next;
    }
    return currentNode;
  }

  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      // There is only one node in linked list.
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    // If there are many nodes in linked list...

    // Rewind to the last node and delete "next" link for the node before the last one.
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }
}

class LinkedListNode {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);

// console.log(myList.find(2));
myList.delete(2);

console.log(myList);
