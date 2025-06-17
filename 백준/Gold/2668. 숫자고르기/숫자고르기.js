const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let N = Number(input.shift());
let numbers = input.map(Number);
let answer = [];

let visited = new Array(N + 1).fill(false);

function dfs(curr, path, visited) {
  visited[curr] = true;
  let next = numbers[curr - 1];

  if (!visited[next]) {
    dfs(next, [...path, next], visited);
  } else {
    // 사이클 발생, 사이클 내에 start 포함 시만 결과에 추가
    const cycleStart = path.indexOf(next);
    if (cycleStart !== -1) {
      answer.push(...path.slice(cycleStart));
    }
  }
}

for (let i = 1; i <= N; i++) {
  dfs(i, [i], new Array(N+1).fill(false));
}

answer = Array.from(new Set(answer)).sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join('\n'));