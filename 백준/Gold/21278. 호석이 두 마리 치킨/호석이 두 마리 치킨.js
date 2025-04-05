const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = input.shift().split(' ').map(Number);
let visited = new Array(n+1).fill(0);
const graph=Array.from(Array(n+1), ()=>[]);
const distInfo=Array.from(Array(n+1), ()=>[]);
let min=Infinity;

let chicken=[];
let answer=[];

for(let i=0; i<m; i++){
  const [a,b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
for(let i=1; i<=n; i++){
  const list=bfs(i);
  distInfo[i].push(...list);
}

backtracking(0, 1);
console.log(answer.join(' '), min);
function backtracking(depth,idx){
  if(depth===2){
    solution();
    return;
  }
  for(let i=idx; i<n; i++){
    if(!visited[i]){
      chicken.push(i);
      visited[i]=1;
      backtracking(depth+1, i);
      visited[i]=0;
      chicken.pop();
    }
  }
}

function solution(){
  let total=0;
  let [chick1, chick2]=chicken;
  for(let i=1; i<=n; i++){
    if(!visited[i]){
      const minChick=Math.min(distInfo[i][chick1], distInfo[i][chick2]);
      total+=minChick*2;
    }
  }
  if(min>total){
    min=total;
    answer=[...chicken];
  }
}

function bfs(i){
  let bool = new Array(n+1).fill(0);
  let dist=Array(n + 1).fill(0);
  let queue=[i];
  while(queue.length){
    const x=queue.shift();
    bool[x]=1;
  
    for(const link of graph[x]){
      if(!bool[link]){
        bool[link]=0;
        dist[link]=dist[x]+1;
        queue.push(link);
      }
    }
  }
  return dist;
}