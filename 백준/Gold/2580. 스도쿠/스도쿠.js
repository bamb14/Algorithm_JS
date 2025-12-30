const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const map=input.map(str=>str.split(' ').map(Number));
const list=[];
for(let i=0; i<9; i++){
  for(let j=0; j<9; j++){
    if(map[i][j]===0) list.push([i,j]);
  }
}
const n=list.length;
let flag=false;
const answer=[];
bt([]);

for(let i=0; i<n; i++){
  const [x,y]=list[i];
  map[x][y]=answer[i];
}

console.log(map.map(list=>list.join(' ')).join('\n'));

function bt(arr){
  if(flag) return;
  
  if(arr.length>=n){
    flag=true;
    answer.push(...arr);
    return;
  }

  for(let i=1; i<=9; i++){
    const [x,y]=list[arr.length];
    if(check(x,y,i)){
      arr.push(i);
      map[x][y]=i;
      bt(arr);
      map[x][y]=0;
      arr.pop();
    }
  }
}

function check(x,y,num){
  for(let i=0; i<9; i++){
    if(map[x][i]==num) return false;
  }
  for(let i=0; i<9; i++){
    if(map[i][y]==num) return false;
  }
  const startX=Math.floor(x/3)*3;
  const startY=Math.floor(y/3)*3;
  for(let i=startX; i<startX+3; i++){
    for(let j=startY; j<startY+3; j++){
      if(map[i][j]==num) return false;
    }
  }
  return true;
}