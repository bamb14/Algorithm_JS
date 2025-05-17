const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let [n,m] = input[0].split(' ').map(Number);
let list=input[1].split(' ').map(Number).sort((a,b)=>a-b);

let answer=0;
let left=0;
let right=n-1;
while(left<right){
  let sum=list[left]+list[right];
  if(sum>=m){
    answer++;
    left++;
    right--;
  }
  else left++;
}
console.log(answer);