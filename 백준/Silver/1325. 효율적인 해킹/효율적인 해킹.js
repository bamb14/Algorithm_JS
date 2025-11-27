const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

// 그래프: b가 a를 신뢰하면 (a b), b를 해킹하면 a도 해킹 가능
// => "b에서 시작해서 갈 수 있는 노드들"을 세고 싶으면 link[b].push(a)
const link = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  const [aStr, bStr] = input[i].split(" ");
  const a = +aStr;
  const b = +bStr;
  link[b].push(a);
}

const visited = Array(n + 1);
let visitId = 0;

const queue = Array(n + 1);

function bfs(start) {
  visitId++;
  let head = 0;
  let tail = 0;

  queue[tail++] = start;
  visited[start] = visitId;

  let count = 1;

  while (head < tail) {
    const node = queue[head++];
    const adj = link[node];

    for (let i = 0; i < adj.length; i++) {
      const next = adj[i];
      if (visited[next] !== visitId) {
        visited[next] = visitId;
        queue[tail++] = next;
        count++;
      }
    }
  }

  return count;
}

let maxCount = 0;
const result = [];

for (let i = 1; i <= n; i++) {
  const cnt = bfs(i);

  if (cnt > maxCount) {
    maxCount = cnt;
    result.length = 0;
    result.push(i);
  } else if (cnt === maxCount) {
    result.push(i);
  }
}

result.sort((a, b) => a - b);
console.log(result.join(" "));
