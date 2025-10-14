const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

let [a,b]=input[0].split(' ').map(Number);

const queue=[[a,1]];
let answer=-1;
// const visited=new Array(b+1).fill(false);

while(queue.length>0){
  const [curr, cnt]=queue.shift();
  
  if(curr===b) {
    answer=cnt;
    break;
  }
  
  let add=curr*10+1;
  if(add<=b){
    // visited[add]=true;
    queue.push([add, cnt+1]);
  }
  
  let multi=curr*2;
  if(multi<=b){
    // visited[multi]=true;
    queue.push([multi, cnt+1]);
  }
}

console.log(answer);