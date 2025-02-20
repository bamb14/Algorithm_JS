const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const n = input.shift();
const numbers = input;

class MaxHeap {
  constructor() {
    this.heap = [null]; // 1-based index
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  size() {
    return this.heap.length - 1;
  }

  push(value) {
    this.heap.push(value);
    let cur = this.heap.length - 1;
    let par = Math.floor(cur / 2);

    while (par > 0 && this.heap[par] < this.heap[cur]) {
      this.swap(cur, par);
      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    if (this.size() === 0) return 0;
    if (this.size() === 1) return this.heap.pop();

    let returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let cur = 1;
    let left = cur * 2;
    let right = cur * 2 + 1;

    while (left < this.heap.length) {
      let larger = left;
      if (right < this.heap.length && this.heap[right] > this.heap[left]) {
        larger = right;
      }

      if (this.heap[cur] >= this.heap[larger]) break;

      this.swap(cur, larger);
      cur = larger;
      left = cur * 2;
      right = cur * 2 + 1;
    }

    return returnValue;
  }
}

const heap = new MaxHeap();
const result = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) {
    result.push(heap.pop());
  } else {
    heap.push(numbers[i]);
  }
}

console.log(result.join("\n"));
