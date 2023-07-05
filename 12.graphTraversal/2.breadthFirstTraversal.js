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

  breadthFirstRecursive(start) {
    const results = [];
    const queue = [];
    const visited = {};

    queue.push(start);
    while (queue.length) {
      let item = queue.shift();
      if (!visited[item]) {
        visited[item] = true;
        results.push(item);
        queue.push(...this.adjacencyList[item]);
      }
    }

    return results;
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph);
console.log(graph.breadthFirstRecursive("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
