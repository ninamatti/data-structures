class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    let childToAdd = new Tree(value);
    this.children.push(childToAdd);
    return childToAdd;
  }

  contains(value) {
    let result = false;
    let search = (root) => {
      if (root.value === value) {
        result = true;
        return;
      }
      if (root.children.length !== 0) {
        for (let child of root.children) {
          search(child);
        }
      }
    };
    search(this);
    return result;
  }

  remove(value) {
    let removedNode;
    let parentOfRemovedNode;

    let search = (root) => {
      if (root.value === value) {
        removedNode = root.value;
        parentOfRemovedNode.children = parentOfRemovedNode.children.filter(
          (x) => x.value !== value
        );
        return;
      }

      if (root.children.length !== 0) {
        parentOfRemovedNode = root;
        for (let i = 0; i < root.children.length; i++) {
          search(root.children[i]);
        }
      }
    };
    search(this);
    return removedNode;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  traverseDepthFirst(fn) {}

  traverseBreadthFirst(fn) {}
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = Tree;
