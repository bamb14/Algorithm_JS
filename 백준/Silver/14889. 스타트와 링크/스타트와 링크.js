const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n=Number(input.shift());
const info=input.map(str=>str.split(' ').map(Number));

const half=n/2;
const team=Array(n).fill(0); // 0: start, 1: link
let answer=Infinity;

bt([],0);
console.log(answer);

function bt(arr, idx){
  if(arr.length>=half){
    answer=Math.min(answer, check());
    return;
  }
  for(let i=idx; i<n; i++){
    arr.push(i);
    team[i]=1;
    bt(arr, i+1);
    arr.pop();
    team[i]=0;
  }
}

function check(){
  let sum=0;
  
  for(let i=0; i<n-1; i++){
    if(team[i]!==0) continue;
    for(let j=i+1; j<n; j++){
      if(team[j]!==0) continue;

      sum+=info[i][j]+info[j][i];
    }
  }
  
  for(let i=0; i<n-1; i++){
    if(team[i]!==1) continue;
    for(let j=i+1; j<n; j++){
      if(team[j]!==1) continue;
      
      sum-=info[i][j]+info[j][i];
    }
  }
  
  return Math.abs(sum);
}