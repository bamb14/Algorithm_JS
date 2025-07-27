const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,m]=input.shift().split(' ').map(Number);
const map=input.map(str=>str.split(''));

const move=[[-1,0],[1,0],[0,-1],[0,1]];

let max=0;

for(let i=0; i<n; i++){
  for(let j=0; j<m; j++){
    if(map[i][j]==='L'){
      // 탐색 대상
      const visited=Array.from(Array(n), ()=>Array(m).fill(false));
      max=Math.max(max, bfs(i, j, visited));
    }
  }
}

console.log(max);

function bfs(i, j, visited){
  let max=0;
  const queue=[[i,j, 0]];
  visited[i][j]=true;
  
  while(queue.length>0){
    const [x,y,cnt]=queue.shift();
    max=Math.max(max, cnt);
    
    for(const [dx,dy] of move){
      let cx=x+dx, cy=y+dy;
      if(cx<0 || cy<0|| cx>=n|| cy>=m) continue;
      
      if(!visited[cx][cy] && map[cx][cy]==='L'){
        queue.push([cx,cy,cnt+1]);
        visited[cx][cy]=true;
      }
    }
  }
  return max;
}