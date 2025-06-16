const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

let [n,k]=input[0].split(' ').map(Number);
let list=input[1].split(' ').map(Number);

let left=0;
let right=1;
let answer=1;
let count=new Array(100001).fill(0);
count[list[left]]++;
let temp=1;

while(right<n){
  if(count[list[right]]<k){
    count[list[right]]++;
    temp++;
    answer=Math.max(answer, temp);
    right++;
  }else{
    count[list[left]]--;
    left++;
    temp--;
  }
}

console.log(answer);