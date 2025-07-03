const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const map=input.map(str=>str.split('').map(Number));
const visited=Array.from(Array(n), ()=>Array(n).fill(false));
const move=[[-1,0], [1,0], [0,-1], [0,1]];
let cnt=0;
let list=[];

for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(map[i][j]===1 && !visited[i][j]){
      cnt++;
      list.push(bfs(i,j));
    }
  }
}
console.log(cnt);
console.log(list.sort((a,b)=>a-b).join('\n'));

function bfs(i, j){
  let queue=[[i,j]];
  let count=0;
  visited[i][j]=true;
  
  while(queue.length>0){
    const [x, y] = queue.shift();
    count++;
    
    for(const [dx, dy] of move){
      let mx=x+dx, my=y+dy;
      if(mx<0 || my<0 || mx>=n || my>=n) continue;
      
      if(map[mx][my]===1 && !visited[mx][my]){
        queue.push([mx,my]);
        visited[mx][my]=true;
      }
    }
  }
  return count;
}