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

  removeNode(value) {
    // check if contains node
    if (this.contains(value)) {
      //loop through object check each array and remove instances of value
      let nodeList = this.nodes;
      for (let nodeVal in nodeList) {
        if (nodeList[nodeVal].includes(value)) {
          this.nodes[nodeVal] = this.nodes[nodeVal].filter(
            (val) => val !== value
          );
        }
      }
      delete this.nodes[value];
    }
  }

  removeEdge(value1, value2) {
    if (this.hasEdge(value1, value2)) {
      this.nodes[value1] = this.nodes[value1].filter((val) => val !== value2);
      this.nodes[value2] = this.nodes[value2].filter((val) => val !== value1);
    }
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
