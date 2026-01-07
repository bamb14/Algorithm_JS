const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n=Number(input.shift());
const m=Number(input.shift());

const link=Array.from(Array(n+1), ()=>Array(n+1).fill(Infinity));
let index=0;

while(index<m){
  const [from, to, cost]=input[index++].split(' ').map(Number);
  link[from][to]=Math.min(link[from][to], cost);
}
const [start, end]=input[index].split(' ').map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(item) {
    this.heap.push(item);
    this._bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this._bubbleDown();
    }
    return min;
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

      if (leftIdx < length && this.heap[leftIdx][0] < element[0]) {
        swap = leftIdx;
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

  isEmpty() {
    return this.heap.length === 0;
  }
}

const dist = Array(n + 1).fill(Infinity);
dist[start] = 0;

const pq = new MinHeap();
pq.push([0, start]);

while (!pq.isEmpty()) {
  const [currDist, u] = pq.pop();

  if (currDist > dist[u]) continue;

  for (let i=1; i<=n; i++) {
    if(i==u) continue;
    const cost = link[u][i];
    const newDist = currDist + cost;
    if (newDist < dist[i]) {
      dist[i] = newDist;
      pq.push([newDist, i]);
    }
  }
}

console.log(dist[end]);