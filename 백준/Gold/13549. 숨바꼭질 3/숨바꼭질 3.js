const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
let visited = new Array(100001).fill(1); // 방문 여부 체크

const bfs = (start) => {
  let queue = [[start, 0]];
  visited[start] = true;

  while (queue.length) {
      const [x, sec] = queue.shift();

      if (x === k) return sec;

      // 순간 이동(x * 2)을 먼저 처리하여 우선 탐색
      if (x * 2 <= 100000 && visited[x * 2]) {
          visited[x * 2] = 0;
          queue.unshift([x * 2, sec]);
      }

      // 일반 이동(x - 1, x + 1)은 시간 증가
      for (const move of [x - 1, x + 1]) {
          if (move >= 0 && move <= 100000 && visited[move]) {
              visited[move] = 0;
              queue.push([move, sec + 1]);
          }
      }
  }
};

console.log(bfs(n));
