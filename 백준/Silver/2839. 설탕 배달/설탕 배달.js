const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');

function solution(n){
  if(n%5==0){
    return n/5
  }else {
    let p=0
    while(n>0){
      n=n-3
      p++
      if(n%5==0){
        p+=Math.floor(n/5)
        return p
      }else if(n===0){
        return p
      }
      if(n===1||n===2){
        return -1
      }
    }
  }
}

console.log(solution(a))