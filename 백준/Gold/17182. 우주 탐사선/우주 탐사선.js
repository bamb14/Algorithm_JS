const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let [n, k] = input.shift().split(' ').map(Number);
let dist=input.map(str=>str.split(' ').map(Number));

// 1. Floyd-Warshall
// i->j 보다 i->m->j가 더 빠르면 업데이트
for (let m = 0; m < n; m++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dist[i][j] > dist[i][m] + dist[m][j]) {
        // dist[i][j]: i에서 j로 가는 최단 거리
        dist[i][j] = dist[i][m] + dist[m][j];
      }
    }
  }
}


let answer=Infinity;
let visited = new Array(n).fill(false);
visited[k] = true;
dfs(k, 1, 0);

console.log(answer);

function dfs(current, count, total) {
  if (count === n) {
    answer = Math.min(answer, total);
    return;
  }

  for (let next = 0; next < n; next++) {
    if (!visited[next]) {
      visited[next] = true;
      dfs(next, count + 1, total + dist[current][next]);
      visited[next] = false;
    }
  }
}