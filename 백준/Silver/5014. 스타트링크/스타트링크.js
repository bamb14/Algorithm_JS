const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');

const [n,start, target, up, down]=input[0].split(' ').map(Number);

const visited = new Array(n+1).fill(false);
const move=[up, -1*down];

let answer=-1;

let queue=[[start,0]];
visited[start]=true;

while(queue.length>0){
  const [curr, cnt] = queue.shift();
  
  if(curr===target){
    answer=cnt;
    break;
  }
  
  for(const m of move){
    let next=curr+m;
    if(next<1 || next>n) continue;
    
    if(!visited[next]){
      queue.push([next, cnt+1]);
      visited[next]=true;
    }
  }
}

console.log(answer===-1? 'use the stairs' : answer);