const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n,m]=input.shift().split(' ').map(Number);
const link=Array.from(Array(n), ()=>[]);

for(let i=0; i<m; i++){
  const [a,b]=input[i].split(' ').map(Number);
  
  link[a].push(b);
  link[b].push(a);
}

let flag=false;
const visited=new Array(n).fill(false);

for(let i=0; i<n; i++){
  if(flag) break;
  visited[i]=true;
  dfs(i, 1);
  visited[i]=false;
}

console.log(flag? 1: 0);

function dfs(curr, depth){
  if(flag) return;
  
  if(depth==5){
    flag=true;
    return;
  }
  
  for(const f of link[curr]){
    if(!visited[f]){
      visited[f]=true;
      dfs(f, depth+1);
      visited[f]=false;
      if(flag) return;
    }
  }
}