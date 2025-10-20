const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n,m]=input.shift().split(' ').map(Number);
input=input.map(str=>str.split(' ').map(Number));

const arr=Array.from(Array(n+1), ()=>[]);
for(const [x,y] of input){
  arr[x].push(y);
  arr[y].push(x);
}

const visited=new Array(n+1).fill(false);
let answer=0;
for(let i=1; i<=n; i++){
  if(!visited[i]){
    visited[i]=true;
    answer++;
    bfs(i);
  }
}
console.log(answer);

function bfs(start){
  const queue=[start];
  
  while(queue.length>0){
    const curr=queue.shift();
    
    for(let neighbor of arr[curr]){
      if(!visited[neighbor]){
        visited[neighbor]=true;
        queue.push(neighbor);
      }
    }
  }
}