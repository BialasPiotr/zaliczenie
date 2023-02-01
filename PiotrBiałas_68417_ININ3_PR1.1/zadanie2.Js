class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
      return;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (key < currentNode.key) {
        if (!currentNode.left) {
          currentNode.left = new Node(key);
          break;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = new Node(key);
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }
}
