const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const map=input.map(str=>str.split(' ').map(Number));
const move=[[-1,0], [1,0], [0,1], [0,-1]];

const answer=Array.from(Array(n), ()=>Array(m).fill(-1));

const queue=[];
for(let i=0; i<n; i++){
  for(let j=0; j<m; j++){
    if(map[i][j]===2) {
      queue.push([i,j,0]);
      answer[i][j]=0;
    }
    if(map[i][j]===0) answer[i][j]=0;
  }
}

while(queue.length>0){
  const [x,y,cnt]=queue.shift();
  
  for(const [dx,dy] of move){
    let cx=x+dx, cy=y+dy;
    if(cx<0 || cy<0 || cx>=n || cy>=m) continue;
    if(answer[cx][cy]===-1){
      if(map[cx][cy]===0) answer[cx][cy]=0;
      else{
        answer[cx][cy]=cnt+1;
        queue.push([cx,cy,cnt+1]);
      }
    }
  }
}

console.log(answer.map(str=>str.join(' ')).join('\n'));