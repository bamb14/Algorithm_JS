const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());

let answer='666';
let cnt=0;
while(1){
  if(answer.includes('666')) cnt++;
  if(cnt>=n) break;
  answer=String(Number(answer)+1);
}

console.log(answer);