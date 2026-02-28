const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n').map(Number);

const n=input.shift();
const k=input.shift();
let answer=0;
const set = new Set();
const visited=new Array(n).fill(false);

bt([], 0);

console.log(answer);

function bt(arr){
  if(arr.length>=k){
    const number=arr.join('');
    if(!set.has(number)){
      answer++;
      set.add(number);
    }
    return;
  }
  
  for(let i=0; i<n; i++){
    if(visited[i]) continue;
    
    visited[i]=true;
    arr.push(input[i]);
    bt(arr, i+1);
    arr.pop();
    visited[i]=false;
  }
}