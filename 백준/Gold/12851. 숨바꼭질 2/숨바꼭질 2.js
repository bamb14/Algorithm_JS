const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);

if(n===m){
  console.log(0);
  console.log(1);
  return;
}

const MAX=100000;
const dist=Array(MAX+1).fill(-1);
const ways=Array(MAX+1).fill(0);

dist[n]=0;
ways[n]=1;
const queue=[n];
let index=0;
while(index<queue.length){
  const position=queue[index++];

  for(const next of [position*2, position+1, position-1]){
    if(next<0 || next>MAX) continue;
    
    if(dist[next]===-1){
      dist[next]=dist[position]+1;
      ways[next]=ways[position];
      queue.push(next);
    } 
    else if(dist[next]===dist[position]+1){
      ways[next]+=ways[position];
    }
  }
}

console.log(dist[m]);
console.log(ways[m]);