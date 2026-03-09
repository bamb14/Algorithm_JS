const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,r,c]=input[0].split(' ').map(Number);

let answer=0;
solution(n,r,c);

function solution(N, r, c){
  if(N==0) return;
  
  const half=2**(N-1);
  answer+=position(half, r, c)*(half**2);
  
  const newR=r%half;
  const newC=c%half;
  solution(N-1, newR, newC);
}

console.log(answer);

function position(half, r, c){
  const x=Math.floor(r/half);
  const y=Math.floor(c/half);
  
  if(x==0 && y==0) return 0;
  if(x==0 && y==1) return 1;
  if(x==1 && y==0) return 2;
  if(x==1 && y==1) return 3;
}