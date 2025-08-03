const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, l, r]= input.shift().split(' ').map(Number);
const map=input.map(str=>str.split(' ').map(Number));

const move=[[-1,0],[1,0],[0,-1],[0,1]];

let flag=true;
let answer=0;
while(flag){
  const visited=Array.from(Array(n), ()=>Array(n).fill(false));
  const unions=[];
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(!visited[i][j]) bfs(i,j, visited, unions);
    }
  }
  if(unions.length===0) break;
  population(unions);
  answer++;
}

console.log(answer);

function bfs(i,j, visited, unions){
  const queue=[[i,j]];
  visited[i][j]=true;
  const union=[[i,j]];
  while(queue.length>0){
    const [x,y]=queue.shift();
    
    for(const [dx, dy] of move){
      let mx=x+dx, my=y+dy;
      
      if(mx<0 || my<0|| mx>=n || my>=n) continue;
      if(visited[mx][my]) continue;
      
      const diff=Math.abs(map[x][y]-map[mx][my]);
      if(diff>=l && diff<=r){
        visited[mx][my]=true;
        union.push([mx,my]);
        queue.push([mx,my]);
      }
    }
  }
  if(union.length>1) unions.push([...union]);
}

function population(unions){
  while(unions.length>0){
    const union=unions.shift();
    let total=0;
    for(const [i,j] of union){
      total+=map[i][j];
    }
    const people=Math.floor(total/union.length);
    for(const [i,j] of union){
      map[i][j]=people;
    }
  }
  
}

