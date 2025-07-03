const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const [person1, person2]=input.shift().split(' ').map(Number);
const m=Number(input.shift());
const list=input.map(str=>str.split(' ').map(Number));
const link=Array.from(Array(n+1), ()=>[]);

for(const [from, to] of list){
  link[from].push(to);
  link[to].push(from);
}

let visited=new Array(n+1).fill(false);
visited[person1]=true;
let queue=[[person1, 0]];
let answer=-1;

while(queue.length>0){
  const [curr, cnt]=queue.shift();
  
  if(curr===person2){
    answer=cnt;
    break;
  }
  
  for(const neighbor of link[curr]){
    if(!visited[neighbor]){
      visited[neighbor]=true;
      queue.push([neighbor, cnt+1]);
    }
  }
}

console.log(answer);