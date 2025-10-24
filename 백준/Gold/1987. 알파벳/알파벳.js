const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input.shift().split(' ').map(Number);

const board = new Array(R);
for (let i = 0; i < R; i++) {
  const row = input[i];
  const arr = new Array(C);
  for (let j = 0; j < C; j++) arr[j] = row.charCodeAt(j) - 65; // 'A'->0
  board[i] = arr;
}

const moves = [[-1,0],[1,0],[0,1],[0,-1]];
let ans = 1;

function dfs(x, y, mask, depth) {
  if (depth > ans) ans = depth;
  if (ans === 26) return; // 더 볼 필요 없음 (최대)

  for (let k = 0; k < 4; k++) {
    const nx = x + moves[k][0];
    const ny = y + moves[k][1];
    if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;

    const ch = board[nx][ny];
    const bit = 1 << ch;            // 26비트 내에서 안전
    if ((mask & bit) === 0) {       // 아직 사용하지 않은 알파벳
      dfs(nx, ny, mask | bit, depth + 1);
    }
  }
}

const startBit = 1 << board[0][0];
dfs(0, 0, startBit, 1);
console.log(ans);