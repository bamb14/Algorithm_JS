const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,s]=input[0].split(' ').map(Number);
const list=input[1].split(' ').map(Number);

let answer=list.filter(num=>num===s).length;
if(n===1){
  console.log(answer);
  return;
}

const visited=new Array(n).fill(false);

for(let i=2; i<=n; i++){
  backtracking([], 0, i);
}

console.log(answer);

function backtracking(arr,idx,len){
  if(arr.length===len){
    let sum=0;
    for(const i of arr){
      sum+=list[i];
    }
    if(sum===s) answer++;
    return;
  }
  for(let i=idx; i<n; i++){
    if(!visited[i]){
      visited[i]=true;
      arr.push(i);
      backtracking(arr, i+1, len);
      arr.pop();
      visited[i]=false;
    }
  }
}