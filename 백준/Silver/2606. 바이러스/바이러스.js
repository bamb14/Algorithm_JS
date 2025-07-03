const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const pair=Number(input.shift());
const list=input.map(str=>str.split(' ').map(Number));
const link=Array.from(Array(n+1), ()=>[]);

for(const [from, to] of list){
  link[from].push(to);
  link[to].push(from);
}

let visited=new Array(n+1).fill(false);
visited[1]=true;
let cnt=0;
let queue=[1];

while(queue.length>0){
  const curr=queue.shift();
  cnt++;
  
  for(const neighbor of link[curr]){
    if(!visited[neighbor]){
      visited[neighbor]=true;
      queue.push(neighbor);
    }
  }
}

console.log(cnt-1);