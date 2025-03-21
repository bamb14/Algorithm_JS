const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, v] = input.shift().split(' ').map(Number);
let link=Array.from(Array(n+1), ()=>[]);

for(let i=0; i<m; i++){
  const [a,b]=input[i].split(' ').map(Number);
  link[a].push(b);
  link[b].push(a);
}

for(let i=1; i<=n; i++){
  link[i].sort((a,b)=>a-b);
}

let result=[v];
let visited= new Array(n+1).fill(1);
visited[v]=0;
console.log(dfs(v,1).join(' '));
function dfs(node, cnt){
  if(cnt===n) return;
  for(let i=0; i<link[node].length; i++){
    const node2=link[node][i];
    if(visited[node2]){
      visited[node2]=0;
      result.push(node2);
      dfs(node2, cnt+1);
    }
  }
  return result;
}

console.log(bfs());

function bfs(){
  let result=[];
  let visited= new Array(n+1).fill(1);
  let queue=[v];

  while(queue.length){
    const node=queue.shift();
    result.push(node);
    visited[node]=0;
    for(let i=0; i<link[node].length; i++){
      const node2=link[node][i];
      if(visited[node2]){
        queue.push(node2);
        visited[node2]=0;
      }
    }
  }
  return result.join(' ');
}