const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, newScore, p] = input[0].split(' ').map(Number);
if(n===0){
  console.log(1);
  return;
}
let list=input[1].split(' ').map(Number);

if(n===p && list[n-1]>=newScore){
  console.log(-1);
  return;
}

if(list[0]<=newScore) {
  console.log(1);
  return;
}

let rank=0;
for(let i=0; i<n; i++){
  rank++;
  
  let curr=0;
  while(list[i+curr]===list[i+1+curr]){
    curr++;
  }
  rank+=curr;
  i+=curr;
  
  if(list[i]>newScore && list[i+1]<=newScore) {
    break;
  }
}
console.log(rank+1);