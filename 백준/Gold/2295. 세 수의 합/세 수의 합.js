const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const n = input.shift();
const list = input.sort((a, b) => a - b);

// sum_list를 Set으로 저장하여 빠른 탐색 가능
let sumSet = new Set();
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    sumSet.add(list[i] + list[j]); // 가능한 모든 두 수의 합을 저장
  }
}

console.log(solution());

function solution() {
  for (let i = n - 1; i >= 0; i--) { // 큰 값부터 탐색
    for (let j = i - 1; j >= 0; j--) {
      let target = list[i] - list[j];

      // sumSet을 활용하여 O(1)로 탐색
      if (sumSet.has(target)) {
        return list[i];
      }
    }
  }
  return -1; // 찾지 못한 경우
}
