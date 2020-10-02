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
  }

  // contains(value) returns boolean. Returns true if value is found in graph, false otherwise
  contains(value) {
    if (value in this.nodes) {
      return true;
    }
    return false;
  }

  hasEdge(value1, value2) {
    if (this.contains(value1) && this.contains(value2)) {
      if (
        this.nodes[value1].includes(value2) ||
        this.nodes[value2].includes(value1)
      ) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  addEdge(value1, value2) {
    if (this.hasEdge(value1, value2)) {
      return "Invalid node value";
    } else if (this.contains(value1) && this.contains(value2)) {
      this.nodes[value1].push(value2);
      this.nodes[value2].push(value1);
    } else {
      return "Invalid node value";
    }
  }

  // removeNode(value) removes a node from graph and returns undefined.
  removeNode(value) {
    // delete this.nodes[value];
  }

  removeEdge(value1, value2) {
    if (this.hasEdge(value1, value2)) {
      this.nodes[value1] = this.nodes[value1].filter((val) => val !== value2);
      this.nodes[value2] = this.nodes[value2].filter((val) => val !== value1);
    }
  }

  /* 
 .removeEdge(value1, value2) returns undefined. Remove connection between two nodes
 What are the time complexities? */
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
