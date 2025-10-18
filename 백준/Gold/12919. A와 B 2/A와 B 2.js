const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

let target=input[0];
let start=input[1];

let answer=0;

solution(start);

function solution(str){
  if(answer===1) return;
  
  if(str===target){
    answer=1;
    return;
  }
  
  if(str[str.length-1]==='A'){
    solution(str.slice(0, str.length-1));
  }
  
  if(str[0]==='B'){
    const reverse=str.slice(1,).split('').reverse();
    solution(reverse.join(''));
  }
}

console.log(answer);