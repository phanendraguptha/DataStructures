// unweighted graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = [
      ...this.adjacencyList[vertex1].filter((v) => v !== vertex2),
    ];
    this.adjacencyList[vertex2] = [
      ...this.adjacencyList[vertex2].filter((v) => v !== vertex1),
    ];
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = [
      ...this.adjacencyList[vertex1].filter((v) => v !== vertex2),
    ];
    this.adjacencyList[vertex2] = [
      ...this.adjacencyList[vertex2].filter((v) => v !== vertex1),
    ];
  }

  removeVertex(vertex) {
    Object.keys(this.adjacencyList).map((v) => {
      this.removeEdge(vertex, v);
    });
    delete this.adjacencyList[vertex];
  }
}

let graph = new Graph();
graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
graph.addEdge("Dallas", "Tokyo");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Tokyo", "Aspen");
// graph.removeEdge("Dallas", "Tokyo");
graph.removeVertex("Dallas");
console.log(graph);
