const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n=Number(input.shift());
const list=input;

let answer=0;
let word1;
let word2;
for(let i=0; i<n-1; i++){
  for(let j=i+1; j<n; j++){
    const cnt=solution(list[i], list[j])
    if(answer<cnt){
      answer=cnt;
      word1=list[i];
      word2=list[j];
    }
  }
}
console.log(word1);
console.log(word2);

function solution(str1, str2){
  let cnt=0;
  let index=0;
  while(str1[index]===str2[index]){
    cnt++;
    index++;
  }
  return cnt;
}