const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input.shift());
const map = input.map(str=>str.split(' ').map(Number));

let max=0;
const list=[[1,0],[-1,0],[0,1],[0,-1]]

const bfs=(i,j,h)=>{
  let queue=[[i,j]]
  while(queue.length){
    const [x,y]=queue.shift();
    visited[x][y]=0;
    
    for(let [dx,dy] of list){
      let cx=x+dx;
      let cy=y+dy;
      if(cx<0 || cx>=n || cy<0 ||cy>=n) continue;
      if(visited[cx][cy] && map[cx][cy]>h){
        queue.push([cx,cy])
        visited[cx][cy]=0
      }
    }
  }
}

for(let h=0; h<=100; h++){
  let count=0;
  var visited=Array.from(Array(n), ()=>Array(n).fill(1))
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(visited[i][j] && map[i][j]>h){
        count++;
        bfs(i,j,h)
      }
    }
  }
  max=Math.max(max, count)
}

// console.log(max===0? 1: max)
console.log(max)