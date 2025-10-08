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

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin, 

  output: process.stdout,
});

const input=[];
let n=null;
const heap=new MinHeap();

rl.on("line", function (line) {
  if (n === null) {
    n = Number(line.trim());
    return;
  }
  
  let start = 0;
  const s = line;
  for (let i = 0; i <= s.length; i++) {
    if (i === s.length || s[i] === ' ') {
      if (i > start) {
        const num = Number(s.slice(start, i));
        if (heap.size() < n) {
          heap.push(num);
        } else if (num > heap.top()) {
          heap.pop();
          heap.push(num);
        }
      }
      start = i + 1;
    }
  }
});

rl.on("close", function () {
  console.log(heap.top());
});