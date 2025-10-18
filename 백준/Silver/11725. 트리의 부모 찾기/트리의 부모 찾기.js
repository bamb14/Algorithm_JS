const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=input.map(str=>str.split(' ').map(Number).sort((a,b)=>a-b));
const graph=Array.from(Array(n+1), ()=>[]);
for(const [a,b] of list){
  graph[a].push(b);
  if(a!==1) graph[b].push(a);
}

const answer=new Array(n+1);
const visited=new Array(n+1).fill(false);
const queue=[1];
while(queue.length>0){
  const par=queue.shift();
  
  for(const neighbor of graph[par]){
    if(!visited[neighbor]){
      visited[neighbor]=true;
      queue.push(neighbor);
      answer[neighbor]=par;
    }
  }
}
console.log(answer.slice(2,).join('\n'));