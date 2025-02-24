const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
const map=input.map(str=>str.split(' ').map(Number));

const list=[[-1,0],[1,0],[0,-1],[0,1]]

let max=0;
const bfs=()=>{
  let visited= Array.from(Array(n), ()=>Array(m).fill(1))
  let queue=[]
  let copy_map=JSON.parse(JSON.stringify(map));
  for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
      if(copy_map[i][j]===2) queue.push([i,j])
    }
  }
  while(queue.length){
    const [x,y]=queue.shift();
    visited[x][y]=0
    if(copy_map[x][y]===2){
      for(const [dx,dy] of list){
        let cx=x+dx;
        let cy=y+dy;
        if(cx<0 || cx>=n || cy<0 ||cy>=m) continue;
        
        if(visited[cx][cy] && copy_map[cx][cy]===0){
          visited[cx][cy]=0;
          copy_map[cx][cy]=2;
          queue.push([cx,cy])
        }
        
      }
    }
  }
  let count=0;
  for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
      if(copy_map[i][j]===0) count++
    }
  }
  max=Math.max(max, count)
}

const backtracking=(wall)=>{
  if(wall===3){
    bfs();
    return
  }
  for(let x=0; x<n; x++){
    for(let y=0; y<m; y++){
      if(map[x][y]===0){
            map[x][y]=1
            backtracking(wall+1);
            map[x][y]=0
        }
    }
  }
}

backtracking(0)

console.log(max)