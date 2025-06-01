const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input.shift().split(' ').map(Number);
let map=input.map(str=>str.split(' ').map(Number));
const move=[[-1,0],[1,0],[0,-1],[0,1]];

let dp = Array.from(Array(n), () => Array(m).fill(-1));
let visited=Array.from(Array(n), ()=>Array(m).fill(false));
let queue=[];
for(let i=0; i<n; i++){
  for(let j=0; j<m; j++){
    if(map[i][j]===2){
      dp[i][j]=0;
      visited[i][j]=true;
      queue.push([i,j,0]);
    }
    if (map[i][j] === 0) {
      dp[i][j] = 0;
      visited[i][j] = true;  // 아예 방문 처리해버림
    }
  }
}

while(queue.length>0){
  let [x,y,cnt]=queue.shift();
  
  for(const [dx, dy] of move){
    let cx=x+dx;
    let cy=y+dy;
    if(cx<0 || cy<0 || cx>=n || cy>=m) continue;
    
    if(!visited[cx][cy]){
      if(map[cx][cy]===1){
        dp[cx][cy]=cnt+1;
        visited[cx][cy]=true;
        queue.push([cx,cy,dp[cx][cy]]);
      }
    }
  }
}

for(let i=0; i<n; i++){
  console.log(dp[i].join(' '));
}