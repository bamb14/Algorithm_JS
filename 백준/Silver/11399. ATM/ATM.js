const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const sorted=input[0].split(' ').map(Number).sort((a,b)=>a-b);

let answer=0;
for(let i=0; i<n; i++){
  for(let j=0; j<=i; j++){
    answer+=sorted[j];
  }
}

console.log(answer);