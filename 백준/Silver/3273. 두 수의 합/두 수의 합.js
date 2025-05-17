const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
let numbers=input[1].split(' ').map(Number);
let x = Number(input[2]);

numbers.sort((a,b)=>a-b);
let left=0;
let right=n-1;
let answer=0;
while(left<right){
  let sum=numbers[left]+numbers[right];
  if(sum===x){
    answer++;
    left++;
    right--;
  }
  else if(sum<x) left++;
  else if(sum>x) right--;
}
console.log(answer);
