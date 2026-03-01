const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const answer=[];

let cnt=0;
for(let i=0; i<n; i++){
  cnt=0;
  let [testcase, ...list] = input[i].split(' ').map(Number);
  for(let i=1; i<list.length; i++) solution(list, i);
  answer.push([i+1, cnt]);
}

console.log(answer.map(item=>item.join(' ')).join('\n'));

function solution(list, idx){
  const target=list[idx];

  let bigger=-1;
  for(let i=0; i<idx; i++){
    if(list[i]>target){
      bigger=i;
      break;
    }
  }
  
  if(bigger!==-1){
    cnt += idx - bigger;
    list.splice(idx, 1);
    list.splice(bigger, 0, target);
  }
}