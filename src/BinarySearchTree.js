class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(valueToInsert) {
    let cursor = (node) => {
      // base case (root is same as insert value)
      if (node.value === valueToInsert) {
        return;
      }
      if (valueToInsert < node.value) {
        if (node.left === null) {
          node.left = new BinarySearchTree(valueToInsert);
          return;
        } else {
          cursor(node.left);
        }
      } else {
        if (node.right === null) {
          node.right = new BinarySearchTree(valueToInsert);
          return;
        } else {
          cursor(node.right);
        }
      }
    };
    cursor(this);
    return this;
  }

  contains(value) {
    // similar to insert just do not make new nodes
    let found = false;

    let cursor = (node) => {
      // base case (root is same as insert value)
      if (node.value === value) {
        found = true;
        return;
      }
      if (value < node.value) {
        if (node.left === null) {
          return;
        } else {
          cursor(node.left);
        }
      } else {
        if (node.right === null) {
          return;
        } else {
          cursor(node.right);
        }
      }
    };
    cursor(this);
    return found; //
  }

  traverseDepthFirstInOrder(callBack) {
    // go all the way the left if you hit leftnull then print value
    // if left is null print current value
    // if parent has right child walk right
  }
}

module.exports = BinarySearchTree;

module.exports = BinarySearchTree;

module.exports = BinarySearchTree;

module.exports = BinarySearchTree;

module.exports = BinarySearchTree;

module.exports = BinarySearchTree;

module.exports = BinarySearchTree;

module.exports = BinarySearchTree;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
