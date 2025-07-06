const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const degree=new Array(n+1).fill(0);
const graph = Array.from(Array(n+1), () => []);

for(let i=0; i<m; i++){
  const [from, to] = input[i].split(' ').map(Number);
  
  graph[from].push(to);
  degree[to]++;
}

const queue=[];
const answer=[];

for(let i=1; i<=n; i++){
  if(degree[i]===0) queue.push(i);
}

while(queue.length>0){
  const curr=queue.shift();
  answer.push(curr);
  
  for(const neighbor of graph[curr]){
    degree[neighbor]--;
    if(degree[neighbor]===0) queue.push(neighbor);
  }
}

console.log(answer.join(' '));