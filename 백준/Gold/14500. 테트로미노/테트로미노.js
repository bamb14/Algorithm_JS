const fs=require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
let map=input.map(str=>str.split(' ').map(Number));

let move=[[-1,0],[1,0],[0,-1],[0,1]];

let link=Array.from(Array(n), ()=>Array(m));

for(let i=0; i<n; i++){
  for(let j=0; j<m; j++){
    let list=[];
    for(const[dx, dy] of move){
      let mx=i+dx, my=j+dy;
      if(mx<0||my<0||mx>=n||my>=m) continue;
      list.push([mx,my]);
    }
    link[i][j]=list;
  }
}

let visited=Array.from(Array(n), ()=>Array(m).fill(false));
let answer=0;

for(let i=0; i<n; i++){
  for(let j=0; j<m; j++){
    visited[i][j]=true;
    bt(i,j,1,map[i][j]);
    visited[i][j]=false;
    checkT(i, j);
  }
}

console.log(answer);

function bt(i,j,depth, sum){
  if(depth===4){
    answer=Math.max(answer, sum);
    return;
  }
  for(let [x,y] of link[i][j]){
    if(!visited[x][y]){
      visited[x][y]=true;
      bt(x,y, depth+1, sum+map[x][y]);
      visited[x][y]=false;
    }
  }
}

function checkT(i, j) {
  const center = map[i][j];
  for (let d = 0; d < 4; d++) {
    let temp = center;
    let valid = true;
    for (let k = 0; k < 3; k++) {
      const nd = (d + k) % 4;
      const ni = i + move[nd][0];
      const nj = j + move[nd][1];
      if (ni < 0 || nj < 0 || ni >= n || nj >= m) {
        valid = false;
        break;
      }
      temp += map[ni][nj];
    }
    if (valid) answer = Math.max(answer, temp);
  }
}