class MinHeap {
  constructor() {
    this.heap = [null];
  }

  swap(a, b) {
    const heap=this.heap;
    [heap[a], heap[b]] = [heap[b], heap[a]];
  }

  size() {
    return this.heap.length - 1;
  }

  push(value) {
    const heap=this.heap;
    heap.push(value);
    let cur = heap.length - 1;
    let par = Math.floor(cur / 2);

    while (par > 0 && heap[par] > heap[cur]) {
      this.swap(cur, par);
      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    const heap=this.heap;
    if (this.size() === 0) return 0;
    if (this.size() === 1) return heap.pop();

    let returnValue = heap[1];
    heap[1] = heap.pop();

    let cur = 1;
    let left = cur * 2; //왼쪽 자식
    let right = cur * 2 + 1; //오른쪽 자식

    while (left < heap.length) {
      let smaller = left; //왼쪽 자식이 더 작다고 가정
      if (right < heap.length && heap[right] < heap[left]) {
        smaller = right; //오른쪽 자식이 작다면 교체
      }

      if (heap[cur] <= heap[smaller]) break;

      this.swap(cur, smaller);
      cur = smaller;
      left = cur * 2;
      right = cur * 2 + 1;
    }

    return returnValue;
  }
  
  top(){
    const heap=this.heap;
    return heap[1]
  }
}
const fs=require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const list=input.map(str=>str.split(' ').map(Number));
const link=Array.from(Array(n+1), ()=>[]);
const indegree = Array(n + 1).fill(0);
const minHeap=new MinHeap();

for(const [prev, next] of list){
  link[prev].push(next);
  indegree[next]++;
}
for(let i=1; i<=n; i++){
  if(indegree[i]===0) minHeap.push(i);
}
const answer=[];

while(minHeap.size()>0){
  const curr=minHeap.pop();
  answer.push(curr);
  
  for(const next of link[curr]){
    indegree[next]--;
    if(indegree[next]===0) minHeap.push(next);
  }
}

console.log(answer.join(' '));
