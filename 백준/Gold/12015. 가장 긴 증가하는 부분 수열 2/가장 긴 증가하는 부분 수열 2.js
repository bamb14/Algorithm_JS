const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n=Number(input.shift());
const arr=input[0].split(' ').map(Number);

let answer=1;
const queue=[arr[0]];

for(let i=1; i<n; i++){
  if(queue[queue.length-1]<arr[i]) queue.push(arr[i]);
  else{
    let position=binarySearch(arr[i]);
    queue[position]=arr[i];
  }
  answer=Math.max(answer, queue.length);
}

console.log(answer);

function binarySearch(target){
  let left=0; right=queue.length-1;
  
  while(left<right){
    const mid=Math.floor((left+right)/2);
    
    if(queue[mid]===target) return mid;
    
    if(queue[mid]<target) left=mid+1;
    else right=mid;
  }
  
  return left;
}