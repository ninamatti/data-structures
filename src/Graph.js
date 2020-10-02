//const { result } = require("underscore");

class Graph {
  constructor() {
    /**
     * There are many representations of Graph.
     * We can store Graph in many ways.
     * One way is by using Adjacency List.
     */
    this.nodes = {}; // Adjacency List
  }

  addNode(value) {
    this.nodes[value] = [];
    return undefined;
  }

  contains(value) {
    let result = false;
    if (this.nodes[value]) {
      result = true;
    }
    return result;
  }

  hasEdge(value1, value2) {
    let result = false;
    let value2WasFound = false;
    let value1WasFound = false;

    if (this.nodes[value1] && this.nodes[value2]) {
      for (let edge of this.nodes[value1]) {
        if (edge === value2);
        value2WasFound = true;
      }
      for (let edge of this.nodes[value2]) {
        if (edge === value1);
        value1WasFound = true;
      }
    }

    if (value2WasFound && value1WasFound) {
      result = true;
    }

    return result;
  }

  addEdge(value1, value2) {
    if (this.nodes[value1] && this.nodes[value2]) {
      if (!this.hasEdge(value1, value2)) {
        this.nodes[value1].push(value2);
      }
      if (!this.hasEdge(value2, value1)) {
        this.nodes[value2].push(value1);
      }
      return undefined;
    } else {
      return "Invalid node value";
    }
  }

  removeEdge(value1, value2) {
    if (this.hasEdge(value1, value2)) {
      for (let i = 0; i < this.nodes[value1]; i++) {
        if (this.nodes[value1][i] === value2) {
          this.nodes[value1].splice(i, 1);
        }
      }
    }
    return undefined;
  }

  removeNode(value) {
    // delete node form adjacency list
    delete this.nodes[value];
    // delete edges referencing removed node
    for (let key in this.nodes) {
      let edgeArray = this.nodes[key];
      for (let i = 0; i < edgeArray.length; i++) {
        if (edgeArray[i] === value) {
          edgeArray.splice(i, 1);
        }
      }
    }
    return undefined;
  }
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = Graph;
