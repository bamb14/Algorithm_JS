const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const list=input.map(Number);

let answer=0;
for(let i=n-2; i>=0; i--){
  if(list[i+1]<=list[i]){
    answer+=list[i]-(list[i+1]-1);
    list[i]=list[i+1]-1;
  }
}

console.log(answer);