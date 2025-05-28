const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input.shift().split(' ').map(Number);
const edges = input.map(str => str.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => []);
for (const [from, to, cost] of edges) {
  graph[from].push([to, cost]);
  graph[to].push([from, cost]); // 양방향
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(item) {
    this.heap.push(item);
    this._bubbleUp();
  }

  pop() {
    if (this.size() === 0) return null;
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = end;
      this._bubbleDown();
    }
    return min;
  }

  size() {
    return this.heap.length;
  }

  _bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];
      if (element[0] >= parent[0]) break;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
    this.heap[idx] = element;
  }

  _bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swap = null;

      if (leftIdx < length) {
        if (this.heap[leftIdx][0] < element[0]) {
          swap = leftIdx;
        }
      }

      if (rightIdx < length) {
        if (
          (swap === null && this.heap[rightIdx][0] < element[0]) ||
          (swap !== null && this.heap[rightIdx][0] < this.heap[leftIdx][0])
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;
      this.heap[idx] = this.heap[swap];
      idx = swap;
    }

    this.heap[idx] = element;
  }
}

const dist = Array(n + 1).fill(Infinity);
dist[1] = 0;

const pq = new MinHeap();
pq.push([0, 1]); // [비용, 노드]

while (pq.size() > 0) {
  const [currCost, currNode] = pq.pop();

  if (dist[currNode] < currCost) continue;

  for (const [nextNode, cost] of graph[currNode]) {
    const newCost = currCost + cost;
    if (newCost < dist[nextNode]) {
      dist[nextNode] = newCost;
      pq.push([newCost, nextNode]);
    }
  }
}

console.log(dist[n]);