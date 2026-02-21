const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const [n,m]=input.shift().split(' ').map(Number);
const list=input.map(str=>str.split(''));

let answer=64;

for(let i=0; i<=n-8; i++){
  for(let j=0; j<=m-8; j++){
    answer=Math.min(answer, solution(i,j));
  }
}

console.log(answer);

function solution(startX,startY){
  let min=64;

  let cntW=0, cntB=0;
  for(let i=startX; i<startX+8; i++){
    for(let j=startY; j<startY+8; j++){
      if((i%2==0 && j%2==0)||(i%2!==0 && j%2!==0)){
        if(list[i][j]!=='W') cntW++;
        if(list[i][j]!=='B') cntB++;
      }
      else{
        if(list[i][j]!=='B') cntW++;
        if(list[i][j]!=='W') cntB++;
      }
    }
  }
  return Math.min(min, cntW, cntB);
}