const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=input.map(Number);
const queue=[list[0]];

for(let i=1; i<n; i++){
  if(queue[queue.length-1] < list[i]){
    queue.push(list[i]);
  }

  let position=binarySearch(list[i]);
  queue[position]=list[i];
  
}
console.log(n-queue.length);

function binarySearch(target){
  let left=0, right=queue.length;
  
  while(left<right){
    const mid=Math.floor((left+right)/2);
    
    if(queue[mid]===target) return mid;
    
    if(queue[mid]<target) left=mid+1;
    else right=mid;
  }
  return left;
}