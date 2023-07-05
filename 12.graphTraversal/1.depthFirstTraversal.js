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

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }

  depthFirstIterative(start) {
    let stack = [];
    let results = [];
    let visited = {};

    stack.push(start);
    while (stack.length) {
      let item = stack.pop();
      if (!visited[item]) {
        visited[item] = true;
        results.push(item);
        stack.push(...this.adjacencyList[item]);
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
console.log(graph.depthFirstRecursive("A"));
console.log(graph.depthFirstIterative("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
