class MaxHeap {
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
      if (element[1] <= parent[1]) break;
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

      if (leftIdx < length && this.heap[leftIdx][1] > element[1]) {
        swap = leftIdx;
      }

      if (rightIdx < length) {
        if (
          (swap === null && this.heap[rightIdx][1] > element[1]) ||
          (swap !== null && this.heap[rightIdx][1] > this.heap[leftIdx][1])
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

const [n,k]=input.shift().split(' ').map(Number);
const list=input.slice(0,n).map(str=>str.split(' ').map(Number)).sort((a,b)=>a[0]-b[0]);
const bags=input.slice(n).map(Number).sort((a,b)=>a-b);

const pq=new MaxHeap();

let index=0;
let answer=0;
for(const max of bags){
  while(index<n && list[index][0]<=max){
    pq.push(list[index++]);
  }
  
  if(!pq.isEmpty()){
    const [w,v]=pq.pop();
    answer+=v;
  }
}

console.log(answer);