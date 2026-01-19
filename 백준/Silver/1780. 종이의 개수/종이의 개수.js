const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const map=input.map(str=>str.split(' '));

let minus=0, zero=0, plus=0;
slice(0,0,n);

function slice(x,y,len){
  const half=len/3;
  
  if(len==1){
    if(map[x][y]==1) plus++
    else if(map[x][y]==0) zero++;
    else minus++;
    return;
  }
  
  if(half<1) return;
  
  if(check(x,y,len)){
    if(map[x][y]==1) plus++
    else if(map[x][y]==0) zero++;
    else minus++;
  }
  else{
    slice(x,y,half);
    slice(x+half,y,half);
    slice(x+half+half,y,half);
    slice(x,y+half,half);
    slice(x,y+half+half,half);
    slice(x+half,y+half,half);
    slice(x+half+half,y+half,half);
    slice(x+half,y+half+half,half);
    slice(x+half+half,y+half+half,half);
  }
}

function check(x,y, len){
  const color=map[x][y];
  for(let i=x; i<x+len; i++){
    for(let j=y; j<y+len; j++){
      if(map[i][j]!=color) return false;
    }
  }
  return true;
}
console.log(minus);
console.log(zero);
console.log(plus);