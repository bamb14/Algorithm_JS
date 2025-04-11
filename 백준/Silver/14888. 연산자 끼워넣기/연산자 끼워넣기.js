const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input[0]);
const numbers=input[1].split(' ').map(Number);
const calculate=input[2].split(' ').map(Number);

const list=[];
for(let i=0; i<4; i++){
  if(calculate[i]>0){
    let copy=[...calculate];
    solution(numbers[0], 1, i, copy);
  }
}
const max=Math.max(...list)
const min=Math.min(...list)
console.log(max===-0 ? 0:max);
console.log(min===-0? 0:min);

function solution(num, index, cal, copy){
  if(cal===0){
    num+=numbers[index];
  }else if(cal===1){
    num-=numbers[index];
  }else if(cal===2){
    num*=numbers[index];
  }else if(cal===3){
    if(num < 0) {
      num = -Math.floor(-num / numbers[index]);
    } else {
      num = Math.floor(num / numbers[index]);
    }
  }
  index++;
  copy[cal]--;
  
  if(index===n) {
    list.push(num);
    return;
  }
  
  for(let i=0; i<4; i++){
    if(copy[i]>0) solution(num, index, i, [...copy]);
  }
}