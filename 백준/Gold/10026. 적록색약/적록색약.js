const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input.shift());
const map = input.map(str=>str.split(''));
let visited=Array.from(Array(n), ()=>Array(n).fill(1))
let visited_blind=Array.from(Array(n), ()=>Array(n).fill(1))
let count=0;
let count_blind=0;
const list=[[1,0],[-1,0],[0,1],[0,-1]]

const bfs=(i,j,char, blind)=>{
  if(blind) count_blind++
  else count++;
  let queue=[[i,j]]
  while(queue.length){
    const [x,y]=queue.shift();
    if(blind) visited_blind[x][y]=0;
    else visited[x][y]=0;
    
    for(let [dx,dy] of list){
      let cx=x+dx;
      let cy=y+dy;
      if(cx<0 || cx>=n || cy<0 ||cy>=n) continue;
      if(!blind &&visited[cx][cy] && map[cx][cy]===char){
        queue.push([cx,cy])
        visited[cx][cy]=0
      }
      else if(blind &&visited_blind[cx][cy]){
        if(map[cx][cy]===char || (char==='R' && map[cx][cy]==='G') || (char==='G' && map[cx][cy]==='R')){
          queue.push([cx,cy])
          visited_blind[cx][cy]=0
        }
      }
    }
  }
}

for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(visited[i][j]) bfs(i,j, map[i][j],false)
    if(visited_blind[i][j]) bfs(i,j, map[i][j],true)
  }
}
console.log(count, count_blind)