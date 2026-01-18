const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const map=input.map(str=>str.split(' '));

let blue=0, white=0;
slice(0,0,n);

function slice(x,y,len){
  const half=len/2;

  if(len==1){
    if(map[x][y]==1) blue++;
    else white++;
    return;
  }
  
  if(half<1) return;
  
  if(check(x,y,len)){
    if(map[x][y]==1) blue++;
    else white++;
  }
  else{
    slice(x,y,half);
    slice(x+half,y,half);
    slice(x,y+half,half);
    slice(x+half,y+half,half);
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

console.log(white);
console.log(blue);