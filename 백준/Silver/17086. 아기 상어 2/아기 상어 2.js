const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m]=input.shift().split(' ').map(Number);
const map=input.map(str=>str.split(' ').map(Number));

const move=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
let answer=0;

for(let i=0; i<n; i++){
  for(let j=0; j<m; j++){
    if(map[i][j]===0) solution(i,j);
  }
}
console.log(answer);

function solution(i,j){
  let queue=[[i,j,0]];
  let visited=Array.from(Array(n), ()=>Array(m).fill(false));
  visited[i][j]=true;
  
  while(queue.length>0){
    const [x,y,cnt]=queue.shift();
    if(map[x][y]===1) {
      answer=Math.max(answer, cnt);
      return;
    }
    
    for(let [dx,dy] of move){
      let cx=x+dx;
      let cy=y+dy;
      if(cx<0||cy<0||cx>=n||cy>=m) continue;
      
      if(!visited[cx][cy]){
        visited[cx][cy]=true;
        queue.push([cx,cy,cnt+1]);
      }
    }
  }
  return;
}