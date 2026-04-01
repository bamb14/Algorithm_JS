const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,m]=input.shift().split(' ').map(Number);
const map=input.map(str=>str.split(''));
let start;

for(let i=0; i<n; i++){
  for(let j=0; j<m; j++){
    if(map[i][j]=='I') start=[i,j];
  }
}
const move=[[0,1],[0,-1],[1,0],[-1,0]];
const visited=Array.from(Array(n), ()=>Array(m).fill(false));
let answer=0;
const queue=[start];

while(queue.length){
  const [x,y]=queue.shift();
  
  if(map[x][y]=='P'){
    answer++;
  }
  
  for(const [dx, dy] of move){
    let cx=x+dx, cy=y+dy;
    if(cx<0 || cy<0 || cx>=n || cy>=m) continue;
    
    if(!visited[cx][cy] && map[cx][cy]!=='X'){
      visited[cx][cy]=true;
      queue.push([cx,cy]);
    }
  }
}

console.log(answer==0 ? 'TT' : answer);