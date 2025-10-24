const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,m]=input.shift().split(' ').map(Number);
const map=input.map(str=>str.split(' ').map(Number));

const virus=[];
for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(map[i][j]===2) virus.push([i,j]);
  }
}
const move=[[-1,0],[1,0],[0,1],[0,-1]];
const visited=new Array(virus.length).fill(false);

let answer=Infinity;

backtracking([],0);
console.log(answer===Infinity? -1: answer);

function backtracking(arr,idx){
  if(arr.length===m){
    bfs(arr);
    return;
  }
  
  for(let i=idx; i<virus.length; i++){
    if(!visited[i]){
      visited[i]=true;
      arr.push(i);
      backtracking(arr,i+1);
      arr.pop();
      visited[i]=false;
    }
  }
}

function bfs(arr){
  const visited=Array.from(Array(n), ()=>Array(n).fill(false));
  const copy=JSON.parse(JSON.stringify(map));
  const queue=[];
  for(const i of arr) {
    const [x,y]=virus[i];
    queue.push([x,y,0]);
    visited[x][y]=true;
    copy[x][y]=3;
  }
  let count=Infinity;
  while(queue.length>0){
    const [x,y,time]=queue.shift();
    
    count=time;
    
    for(const [dx, dy] of move){
      let cx=x+dx, cy=y+dy;
      if(cx<0||cy<0||cx>=n||cy>=n) continue;
      
      if(!visited[cx][cy] && copy[cx][cy]!==1){
        visited[cx][cy]=true;
        queue.push([cx,cy,time+1]);
        copy[cx][cy]=3;
      }
    }
  }
  
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(copy[i][j]!==1 && copy[i][j]!==3) count=Infinity;
    }
  }
  
  answer=Math.min(answer, count);
}