const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=input[0].split(' ').map(Number);
let answer=0;
const visited=Array(n).fill(false);

solution([]);
console.log(answer);

function solution(arr){
  if(arr.length>=n){
    answer=Math.max(answer, calculate(arr));
    return;
  }
  for(let i=0; i<n; i++){
    if(!visited[i]){
      arr.push(list[i]);
      visited[i]=true;
      solution(arr);
      arr.pop();
      visited[i]=false;
    }
  }
}

function calculate(list){
  let sum=0;
  for(let i=1; i<n; i++){
    sum+=Math.abs(list[i]-list[i-1]);
  }
  return sum;
}