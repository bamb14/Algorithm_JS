const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n=Number(input.shift());
const m=Number(input.shift());
const list=input[0].split(' ').map(Number);

const visited=new Array(n).fill(false);
let answer=0;

for(let i=0; i<n-1; i++){
  if(visited[i]) continue;
  for(let j=i+1; j<n; j++){
    if(visited[j]) continue;
    
    if(list[i]+list[j]==m){
      visited[i]=true;
      visited[j]=true;
      answer++;
      break;
    }
  }
}

console.log(answer);