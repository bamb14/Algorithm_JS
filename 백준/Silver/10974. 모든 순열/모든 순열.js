const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input[0]);
// const list=Array(n).fill(0).map((v,i)=>i+1);
const visited=Array(n).fill(false);
const answer=[];

bt([]);
console.log(answer.join('\n'));

function bt(arr){
  if(arr.length>=n){
    answer.push(arr.join(' '));
    return;
  }
  for(let i=0; i<n; i++){
    if(!visited[i]){
      arr.push(i+1);
      visited[i]=true;
      bt(arr);
      arr.pop();
      visited[i]=false;
    }
  }
}