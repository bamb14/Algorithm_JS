const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n=Number(input.shift());
const answer=[];
let index=0;
while(index<input.length){
  const [v,e]=input[index++].split(' ').map(Number);
  const link=Array.from(Array(v+1), ()=>[]);
  for(let i=0; i<e; i++){
    const [from, to]=input[i+index].split(' ').map(Number);
    link[from].push(to);
    link[to].push(from);
  }
  
  answer.push(solution(v, link));
  
  index+=e;
}

console.log(answer.join('\n'));

function solution(n, link){
  const color=Array(n+1).fill(0);
  // 0: 미방문, 1/-1
  
  for(let start=1; start<=n; start++){
    if(color[start] !==0) continue;
    
    color[start]=1;
    const queue=[start];
    
    while(queue.length){
      const curr=queue.shift();
      
      for(const next of link[curr]){
        if(color[next]==0){ // 방문 안함
          color[next] = -color[curr];
          queue.push(next);
        }
        else if(color[next]==color[curr]){
          return "NO";
        }
      }
    }
  }

  return "YES";
}