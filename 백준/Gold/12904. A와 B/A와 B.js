const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const s=input[0];
const t=input[1];

let answer=false;

solution(t);
console.log(answer?1:0);

function solution(string){
  if(string===s || answer){
    answer=true;
    return;
  }
  
  const len=string.length;
  if(string[len-1]==='A'){
    solution(string.slice(0,len-1));
  }
  if(string[len-1]==='B'){
    const reverse=string.split('').reverse().join('');
    solution(reverse.slice(1,));
  }
}