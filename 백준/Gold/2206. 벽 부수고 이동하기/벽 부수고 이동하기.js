const fs=require("fs")
let input=fs.readFileSync(0).toString().trim().split('\n')

const [n,m]=input.shift().split(' ').map(Number)
const map=input.map(str=>str.split('').map(Number))

// index 0: 벽 부숨, index 1: 벽 안 부숨
const visited = Array.from(Array(n), () => Array.from(Array(m), () => [1, 1]));
const list=[[-1,0],[1,0],[0,1],[0,-1]]

const bfs = () => {
  let queue = [[0, 0, 0, 1]];
  visited[0][0][1] = 0; // 시작점 방문 체크 (벽 안 부순 상태)
  let index=0
  while (index<queue.length) {
    let [x, y, cnt, bool] = queue[index];
    cnt++
    index++

    if (x === n - 1 && y === m - 1) return cnt;

    for (const [dx, dy] of list) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (map[nx][ny] === 0 && visited[nx][ny][bool]) {
        visited[nx][ny][bool] = 0;
        queue.push([nx, ny, cnt, bool]);
      } else if (bool && map[nx][ny] === 1 && visited[nx][ny][0]) {
        // 벽이 있고, 아직 벽을 부순 적이 없는 경우
        visited[nx][ny][0] = 0;
        queue.push([nx, ny, cnt, 0]);
      }
    }
  }

  return -1;
};


console.log(bfs())