const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const board = input.map(str => str.split(' ').map(Number));

const black = [];
const white = [];

// 색 분리
for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(board[i][j] === 1){
      if((i + j) % 2 === 0) black.push([i,j]);
      else white.push([i,j]);
    }
  }
}

const move = [[1,1], [-1,-1], [-1,1], [1,-1]];

// visited 기반 백트래킹
function solve(list){
  const visited = Array.from(Array(n), ()=>Array(n).fill(0));
  let max = 0;

  function bt(idx, cnt){
    if(idx === list.length){
      max = Math.max(max, cnt);
      return;
    }

    const [x, y] = list[idx];

    // 놓는 경우
    if(visited[x][y] === 0){
      // 자기 자신 포함
      visited[x][y] += 1;

      for(const [dx, dy] of move){
        let cx = x;
        let cy = y;
        while(true){
          cx += dx;
          cy += dy;
          if(cx<0 || cy<0 || cx>=n || cy>=n) break;
          visited[cx][cy] += 1;
        }
      }

      bt(idx + 1, cnt + 1);

      // 복구
      visited[x][y] -= 1;

      for(const [dx, dy] of move){
        let cx = x;
        let cy = y;
        while(true){
          cx += dx;
          cy += dy;
          if(cx<0 || cy<0 || cx>=n || cy>=n) break;
          visited[cx][cy] -= 1;
        }
      }
    }

    // 안 놓는 경우
    bt(idx + 1, cnt);
  }

  bt(0, 0);
  return max;
}

const answer = solve(black) + solve(white);
console.log(answer);