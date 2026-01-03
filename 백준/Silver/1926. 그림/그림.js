const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n,m]=input.shift().split(' ').map(Number);
const map=input.map(str=>str.split(' ').map(Number));
const move=[[0,1],[0,-1],[1,0],[-1,0]];

let cnt=0;
let max=0;
const visited=Array.from(Array(n), ()=>Array(m).fill(false));

for(let i=0; i<n; i++){
  for(let j=0; j<m; j++){
    if(map[i][j]==1 && !visited[i][j]){
      cnt++;
      max=Math.max(max, bfs(i,j));
    }
  }
}
console.log(cnt);
console.log(max);

function bfs(i,j){
  visited[i][j]=true;
  const queue=[[i,j]];
  let cnt=1;
  
  while(queue.length){
    const [x,y]=queue.shift();
    
    for(const [dx,dy] of move){
      let cx=x+dx, cy=y+dy;
      
      if(cx<0 || cy<0 || cx>=n || cy>=m) continue;
      if(!visited[cx][cy] && map[cx][cy]){
        visited[cx][cy]=true;
        cnt++;
        queue.push([cx,cy]);
      }
    }
  }
  return cnt;
}