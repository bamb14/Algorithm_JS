const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const n = input.shift();
const numbers = input;

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

class MaxHeap {
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

    while (par > 0 && heap[par] < heap[cur]) {
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
      let larger = left; //왼쪽 자식이 더 작다고 가정
      if (right < heap.length && heap[right] > heap[left]) {
        larger = right; //오른쪽 자식이 작다면 교체
      }

      if (heap[cur] >= heap[larger]) break;

      this.swap(cur, larger);
      cur = larger;
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

const minHeap = new MinHeap(); // 큰 애들 넣기
const maxHeap = new MaxHeap(); // 작은 애들 넣기
maxHeap.push(numbers[0])
const answer=[numbers[0]]

for (let i = 1; i < numbers.length; i++) {
  if(minHeap.size()===maxHeap.size()) maxHeap.push(numbers[i])
  else minHeap.push(numbers[i])
  
  if(minHeap.top() < maxHeap.top()){
    let min=minHeap.pop();
    let max=maxHeap.pop();
    minHeap.push(max);
    maxHeap.push(min);
    
    answer.push(maxHeap.top())
  }
  else answer.push(maxHeap.top())
}
console.log(answer.join('\n'))
