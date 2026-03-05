const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
let answer=0;

for(let i=0; i<n; i++){
  const word=input[i];
  const set=new Set();
  set.add(word[0]);
  let flag=true;
  
  for(let i=1; i<word.length; i++){
    if(word[i-1]!==word[i]){
      if(set.has(word[i])){
        flag=false;
        break;
      }
      else set.add(word[i]);
    }
  }
  
  if(flag) answer++;
}

console.log(answer);