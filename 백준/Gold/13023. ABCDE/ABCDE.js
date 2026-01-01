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
for(let i=0; i<n; i++){
  if(flag) break;
  const set=new Set();
  set.add(i);
  
  const queue=[[i,1, set]];
  let index=0;
  while(queue.length>index){
    const [curr, cnt, visited]=queue[index++];
    for(const f of link[curr]){
      if(!visited.has(f)){
        if(cnt==4){
          flag=true;
          break;
        }
        const newVisited=new Set(visited);
        newVisited.add(f);
        queue.push([f, cnt+1, newVisited]);
        
      }
    }
  }
}
console.log(flag? 1: 0);