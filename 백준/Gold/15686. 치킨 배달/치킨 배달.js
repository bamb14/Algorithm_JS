const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

const [n,m]=input.shift().split(' ').map(Number);
const graph=input.map(str=>str.split(' ').map(Number));
const list=[[-1,0],[1,0],[0,1],[0,-1]];
const homes=[];
const chickenList=[];

for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(graph[i][j]===1) homes.push([i,j]);
    else if(graph[i][j]===2) chickenList.push([i,j]);
  }
}
const visited= new Array(chickenList.length).fill(0);
let answer=[];
let min=Infinity;

backtracking(0,0);
console.log(min);

function backtracking(depth, idx){
  if(depth===m){
      let total=0;
      for(const [hx,hy] of homes){
        let dist=Infinity;
        for(const [cx,cy] of answer){
          dist=Math.min(dist, Math.abs(hx-cx)+Math.abs(hy-cy));
        }
        total+=dist
      }
      min=Math.min(min, total);
      return;
  }
  
  for(let i=idx; i<chickenList.length; i++){
      if(!visited[i]){
          visited[i]=1;
          answer.push(chickenList[i])
          backtracking(depth+1, i);
          answer.pop();
          visited[i]=0;
      }
  }
}