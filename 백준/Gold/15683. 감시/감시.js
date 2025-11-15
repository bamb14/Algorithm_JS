const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,m]=input.shift().split(' ').map(Number);
const map=input.map(str=>str.split(' ').map(Number));

let empty=0;
const cctvs=[];
for(let i=0; i<n; i++){
  for(let j=0; j<m; j++){
    if(map[i][j]===0) empty++;
    else if(map[i][j]!==6) cctvs.push([i,j,map[i][j]]);
  }
}

const dirc=[[-1,0],[0,-1],[1,0],[0,1]];
let answer=empty;

bt([]);

function bt(arr, idx){
  if(arr.length>=cctvs.length){
    answer=Math.min(answer,solution(arr));
    return;
  }
  for(let i=0; i<4; i++){
    arr.push(i);
    bt(arr);
    arr.pop();
  }
}
console.log(answer);

function solution(arr){
  // console.log(arr);
  let cnt=0;
  const visited=Array.from(Array(n), ()=>Array(m).fill(false));
  
  for(let i=0; i<arr.length; i++){
    const [x,y, cctv]=cctvs[i];
    const [dx,dy]=dirc[arr[i]];
    
    let cx=x+dx, cy=y+dy;
    while(cx>=0 && cy>=0 && cx<n && cy<m){
      if(map[cx][cy]!==6){
        if(!visited[cx][cy] && map[cx][cy]===0) cnt++;
        visited[cx][cy]=true;
        cx+=dx;
        cy+=dy;
      }
      else break;
    }
    
    if(cctv===1) continue;
    else if(cctv!==3){
        cx=x-dx;
        cy=y-dy;
        while(cx>=0 && cy>=0 && cx<n && cy<m){
          if(map[cx][cy]!==6){
            if(!visited[cx][cy] &&map[cx][cy]===0) cnt++;
            visited[cx][cy]=true;
            cx-=dx;
            cy-=dy;
          }
          else break;
        }
    }
    if(cctv===2) continue;
    
    cx=x-dirc[(arr[i]+1)%4][0];
    cy=y-dirc[(arr[i]+1)%4][1];
    while(cx>=0 && cy>=0 && cx<n && cy<m){
      if(map[cx][cy]!==6){
        if(!visited[cx][cy] && map[cx][cy]===0) cnt++;
        visited[cx][cy]=true;
        cx-=dirc[(arr[i]+1)%4][0];
        cy-=dirc[(arr[i]+1)%4][1];
      }
      else break;
    }
    if(cctv!=5) continue;
    cx=x+dirc[(arr[i]+1)%4][0];
    cy=y+dirc[(arr[i]+1)%4][1];
    while(cx>=0 && cy>=0 && cx<n && cy<m){
      if(map[cx][cy]!==6){
        if(!visited[cx][cy] && map[cx][cy]===0) cnt++;
        visited[cx][cy]=true;
        cx+=dirc[(arr[i]+1)%4][0];
        cy+=dirc[(arr[i]+1)%4][1];
      }
      else break;
    }
  }
  // console.log(cnt);
  return empty-cnt;
}