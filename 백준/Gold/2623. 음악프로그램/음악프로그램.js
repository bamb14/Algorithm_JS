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

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m]=input.shift().split(' ').map(Number);

const link=Array.from(Array(n+1), ()=>[]);
const indegree=Array(n+1).fill(0);
for(let i=0; i<m; i++){
  const [pd, ...order]=input[i].split(' ').map(Number);
  for(let j=0; j<pd-1; j++){
    indegree[order[j+1]]+=j+1;
    for(let k=j+1; k<pd; k++){
      link[order[j]].push(order[k]);
    }
  }
}

const pq = new MinHeap();
for(let i=1; i<=n; i++){
  if(indegree[i]==0) pq.push([indegree[i], i]);
}

const answer=[];

while(!pq.isEmpty()){
  const [n, node]=pq.pop();
  answer.push(node);
  for(const next of link[node]){
    indegree[next]--;
    if(indegree[next]==0) pq.push([indegree[next], next]);
  }
}

console.log(answer.length==n? answer.join('\n'):0);