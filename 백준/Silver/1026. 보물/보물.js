const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

const n = input[0];
const A=input[1].split(' ').map(Number);
const B=input[2].split(' ').map(Number);
A.sort((a,b)=>a-b);
B.sort((a,b)=>b-a);

let answer=0;
for(let i=0; i<n; i++){
  answer+=A[i]*B[i];
}

console.log(answer);