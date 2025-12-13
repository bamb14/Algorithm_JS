const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');

const [n,m]=input.shift().split(' ').map(Number);
const map=input.map(str=>str.split(' ').map(Number));
const move=[[0,1],[0,-1],[1,0],[-1,0]];
const chickens=[];
const houses=[];
for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(map[i][j]==2){
      chickens.push([i,j]);
    }
    if(map[i][j]==1){
      houses.push([i,j]);
    }
  }
}

const result=[];

bt([], 0);

console.log(result.sort((a,b)=>a-b)[0]);

function bfs(i, j, arr){
  const queue=[[i,j,0]];
  const visited=Array.from(Array(n), ()=>Array(n).fill(false));
  visited[i][j]=true;
  while(queue.length>0){
    const [x,y,cnt]=queue.shift();
    
    for(const [dx,dy] of move){
      let cx=x+dx, cy=y+dy;
      if(cx<0 || cy<0 || cx>=n || cy>=n) continue;
      
      if(!visited[cx][cy]){
        if(map[cx][cy]==2 && arr.some(([a,b])=>a==cx&&b==cy))return cnt+1;
        visited[cx][cy]=true;
        queue.push([cx,cy,cnt+1]);
      }
    }
  }
}

function bt(arr, idx){
  if(arr.length>=m){
    let total=0;
    for(const [x,y] of houses){
      let dist=Infinity;
      for(let i=0; i<arr.length; i++){
        const [cx,cy]=chickens[arr[i]];
        dist=Math.min(dist, Math.abs(x-cx)+Math.abs(y-cy));
      }
      total+=dist;
    }
    result.push(total);
    return;
  }
  for(let i=idx; i<chickens.length; i++){
    arr.push(i);
    bt(arr, i+1);
    arr.pop();
  }
}