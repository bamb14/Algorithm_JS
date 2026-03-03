const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const dist=input[1].split(' ').map(v => BigInt(v));
const list=input[2].split(' ').map(v => BigInt(v));

let min=list[0];
let answer=0n;

for(let i=0; i<n-1; i++){
  if(list[i]<min){
    min=list[i];
  }
  answer+= min*dist[i];
}

console.log(answer.toString());