const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');

const move=[[-1,0],[0,1],[1,0],[0,-1],
[1,1],[1,-1],[-1,1],[-1,-1]];

const answer=[];

let index=0;
while(1){
  const [h,w]=input[index].split(' ').map(Number);
  if(w===0 && h===0) break;
  
  const map=input.slice(index+1,index+1+w).map(str=>str.split(' ').map(Number));
  solution(w,h,map);
  index+=w+1;
}
console.log(answer.join('\n'));

function solution(w,h,map){
  const visited=Array.from(Array(w), ()=>Array(h).fill(false));
  let count=0;
  
  for(let i=0; i<w; i++){
    for(let j=0; j<h; j++){
      if(!visited[i][j] && map[i][j]===1){
        count++;
        bfs(i,j, visited, w, h, map);
      }
    }
  }
  answer.push(count);
}

function bfs(i,j,visited,w, h, map){
  const queue=[[i,j]];
  visited[i][j]=true;
  
  while(queue.length){
    const [x,y]=queue.shift();
    
    for(let [dx,dy] of move){
      let cx=x+dx, cy=y+dy;
      if(cx<0 || cy<0 || cx>=w || cy>=h) continue;
      if(!visited[cx][cy] && map[cx][cy]===1){
        visited[cx][cy]=true;
        queue.push([cx,cy]);
      }
    }
  }
}