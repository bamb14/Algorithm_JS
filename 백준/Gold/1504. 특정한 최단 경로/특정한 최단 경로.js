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

function dijkstra(start, link, n) {
  const dist=Array(n+1).fill(Infinity);
  dist[start]=0;
  const pq = new MinHeap();
  pq.push([0, start]);

  while(!pq.isEmpty()){ 
      const [currDist, curr]=pq.pop();
      if(currDist>dist[curr]) continue;
      
      for(const [next, cost] of link[curr]){
          const newDist=currDist + cost;
          if(newDist<dist[next]){
              dist[next]=newDist;
              pq.push([newDist, next]);
          }
      }
  }
  return dist;
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n,e]=input.shift().split(' ').map(Number);
const link=Array.from(Array(n+1), ()=>[]);
for(let i=0; i<e; i++){
  const [from, to, dist]=input[i].split(' ').map(Number);
  link[from].push([to, dist]);
  link[to].push([from, dist]);
}
const [v1, v2]=input[e].split(' ').map(Number);

const dist = dijkstra(1, link, n);
const dist2 = dijkstra(v1, link, n);
const dist3 = dijkstra(v2, link, n);

const answer=Math.min(dist[v1]+dist2[v2]+dist3[n], dist[v2]+dist3[v1]+dist2[n]);
console.log(answer===Infinity? -1: answer);