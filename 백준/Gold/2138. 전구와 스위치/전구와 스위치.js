const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = input[0];
let init=input[1].split('').map(Number);
const target=input[2].split('').map(Number);

const answer=Math.min(solution(true), solution(false));

console.log(answer===Infinity?-1:answer);

function solution(bool){
  let copy=[...init];
  let count=0;
  
  if(bool){ // 0번을 누른다
    count++;
    onOff(0, copy);
  }
  
  for(let i=1; i<n; i++){
    if(target[i-1]!==copy[i-1]){
      // i번째를 눌러야 함
      count++;
      onOff(i, copy);
    }
  }
  if(copy.join('')===target.join('')) return count;
  else return Infinity;
}

function onOff(index, str){
  str[index]=check(str[index]);
  
  if(index===0){
    str[index+1]=check(str[index+1]);
  }
  else if(index===n-1){
    str[index-1]=check(str[index-1]);
  }
  else{
    str[index+1]=check(str[index+1]);
    str[index-1]=check(str[index-1]);
  }
}

function check(number){
  if(number===0) return 1;
  else return 0;
}