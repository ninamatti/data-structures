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
    this.nodes[value] = value;
  }
  //removeNode(value) removes a node from graph and returns undefined.
  removeNode(value) {
    // delete this.nodes[value];
  }
  contains(value) {
    if (value in this.nodes) {
      return true;
    }
    return false;
  }
  /* .removeNode(value) removes a node from graph and returns undefined.
 .contains(value) returns boolean. Returns true if value is found in graph, false otherwise
 .addEdge(value1, value2) returns undefined. Create connection between two nodes if they're both present in the graph
 .removeEdge(value1, value2) returns undefined. Remove connection between two nodes
 .hasEdge(value1, value2) returns boolean. Returns true if edge exists, false otherwise
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
