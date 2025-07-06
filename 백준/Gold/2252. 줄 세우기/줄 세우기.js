const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);

const graph = Array.from(Array(n+1), () => []);

for(let i=0; i<m; i++){
  const [from, to] = input[i].split(' ').map(Number);
  
  graph[from].push(to);
}

const visited=new Array(n+1).fill(false);
const answer=[];

for(let i=1; i<=n; i++){
  if(!visited[i]) dfs(i);
}

console.log(answer.reverse().join(' '));

function dfs(node){
  visited[node]=true;
  for(const neighbor of graph[node]){
    if(!visited[neighbor]) dfs(neighbor);
  }
  answer.push(node);
}