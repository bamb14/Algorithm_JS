const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const t=Number(input.shift());
const answer=[];
const move=[
  [-1, 2], [-1, -2], [1, 2], [1, -2],
  [-2, 1], [-2, -1], [2, 1], [2, -1]
]

for(let i=0; i<t; i++){
  const L=input[3*i];
  const [startX, startY]=input[3*i+1].split(' ').map(Number);
  const [endX, endY]=input[3*i+2].split(' ').map(Number);
  
  const visited = Array.from(Array(300), ()=>Array(300).fill(false));
  
  const queue=[[startX, startY, 0]];
  
  while(queue.length){
    const [x,y,cnt] = queue.shift();
    if(x==endX && y==endY){
      answer.push(cnt);
      break;
    }
    
    for(let [dx, dy] of move){
      let cx=x+dx, cy=y+dy;
      
      if(cx<0 || cy<0 || cx>=L || cy>=L) continue;
      
      if(!visited[cx][cy]){
        visited[cx][cy]=true;
        queue.push([cx,cy,cnt+1]);
      }
    }
  }
}

console.log(answer.join('\n'));