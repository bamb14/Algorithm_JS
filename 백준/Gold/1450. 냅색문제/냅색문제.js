const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, c] = input[0].split(' ').map(Number);
const list=input[1].split(' ').map(Number);

const listA=list.slice(0, Math.floor(n/2));
const listB=list.slice(Math.floor(n/2));

const sumA=[];
const sumB=[];

dfs(listA, sumA, 0, 0);
dfs(listB, sumB, 0, 0);

sumB.sort((a,b)=>a-b);

let answer=0;

for(const num of sumA){
  if(num>c) continue;
  
  answer+= binarySearch(sumB, c-num);
}

console.log(answer);

function dfs(arr, targetArr, index, sum){
  if(index==arr.length){
    targetArr.push(sum);
    return;
  }
  dfs(arr, targetArr, index+1, sum);
  dfs(arr, targetArr, index+1, sum+arr[index])
}

function binarySearch(arr, target){
  let left=0, right=arr.length;
  
  while(left<right){
    const mid=Math.floor((left+right)/2);
    
    if(arr[mid]<=target){
      left=mid+1;
    }
    else right=mid;
  }
  
  return right;
}