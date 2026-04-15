const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const cost=input.map(str=>str.split(' ').map(Number));

const dp=Array.from(Array(n), ()=>Array(1<<n).fill(-1));

console.log(dfs(0, 1<<0));

function dfs(curr, visited){
  if(visited == (1<<n)-1){
    if(cost[curr][0] !== 0) return cost[curr][0];
    else return Infinity;
  }
  
  if(dp[curr][visited]!==-1) return dp[curr][visited];
  
  let min=Infinity;
  
  for(let next=0; next<n; next++){
    if(visited & (1<<next)) continue;
    if(cost[curr][next]==0) continue;
    
    const nextVisited=visited | (1<<next);
    
    const value=cost[curr][next] + dfs(next, nextVisited);
    min=Math.min(min, value);
  }
  
  dp[curr][visited]=min;
  return min;
}