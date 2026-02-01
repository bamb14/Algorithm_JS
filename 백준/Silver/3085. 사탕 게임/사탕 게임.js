const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const map=input.map(str=>str.split(''));

let answer=0;

for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    const curr=map[i][j];
    if(i+1<n){
      if(curr!==map[i+1][j]){
        answer=Math.max(answer, solution(i,j,i+1, j));
      }
    }
    
    if(j+1<n){
      if(curr!==map[i][j+1]){
        answer=Math.max(answer, solution(i,j,i, j+1));
      }
    }
  }
}
console.log(answer);

function solution(i,j, nextI, nextJ){
  let temp=map[i][j];
  map[i][j]=map[nextI][nextJ];
  map[nextI][nextJ]=temp;
  
  let max=0;
  let cnt, prev;
  for(let i=0; i<n; i++){
    cnt=1;
    prev=map[i][0];
    for(let j=1; j<n; j++){
      if(prev!==map[i][j]){
        max=Math.max(cnt, max);
        cnt=1;
        prev=map[i][j];
      }
      else cnt++;
    }
    max=Math.max(cnt, max);
  }
  

  for(let j=0; j<n; j++){
    cnt=1;
    prev=map[0][j];
    for(let i=1; i<n; i++){
      if(prev!==map[i][j]){
        max=Math.max(cnt, max);
        cnt=1;
        prev=map[i][j];
      }
      else cnt++;
    }
    max=Math.max(cnt, max);
  }
  
  temp=map[i][j];
  map[i][j]=map[nextI][nextJ];
  map[nextI][nextJ]=temp;
  
  return max;
}