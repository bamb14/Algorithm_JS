const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const list=input[1].split(' ').map(Number);

const listA=list.slice(0, Math.floor(n/2));
const listB=list.slice(Math.floor(n/2));

const sumA=[];
const sumB=[];

dfs(listA, sumA, 0, 0);
dfs(listB, sumB, 0, 0);

const map=new Map();
for(const num of sumB) map.set(num, (map.get(num)||0)+1);

let answer=0;

for(let i=0; i<sumA.length; i++){
  const num=sumA[i];
  
  if(map.has(s-num)) answer+=map.get(s-num);
}

if (s === 0) answer--;
console.log(answer);

function dfs(arr, targetArr, index, sum){
  if(index==arr.length){
    targetArr.push(sum);
    return;
  }
  dfs(arr, targetArr, index+1, sum);
  dfs(arr, targetArr, index+1, sum+arr[index])
}