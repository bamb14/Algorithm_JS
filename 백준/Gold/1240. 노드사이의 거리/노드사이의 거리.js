const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,m]=input.shift().split(' ').map(Number);
const link=Array.from(Array(n+1),()=> []);

for(let i=0; i<n-1; i++){
  const [from, to, dist]=input[i].split(' ').map(Number);
  link[from].push([to,dist]);
  link[to].push([from,dist]);
}

const answer=[];

for(let i=n-1; i<n+m-1; i++){
  const [from, to]=input[i].split(' ').map(Number);
  
  const visited=Array(n+1).fill(false);
  visited[from]=true;
  const queue=[[from, 0]];
  
  while(queue.length){
    const [curr, acc]=queue.shift();
    
    if(curr==to){
      answer.push(acc);
      break;
    }
    for(const [next, dist] of link[curr]){
      if(!visited[next]){
        visited[next]=true;
        queue.push([next, acc+dist]);
      }
    }
  }
}

console.log(answer.join('\n'));