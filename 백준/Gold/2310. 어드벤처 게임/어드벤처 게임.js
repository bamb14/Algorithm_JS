const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let index=0;
let n = Number(input[index]);
let money=0;
let answer=[];
while(n!==0){
  index++;
  let copy=input.slice(index, index+n);
  answer.push(bfs(n, copy));
  index+=n;
  n=Number(input[index]);
  money=0;
}
console.log(answer.join('\n'));

function bfs(n, copy){
  let queue = [[0, 0]];
  let visited = Array.from(Array(n), () => new Array(501).fill(false)); // 최대 돈 500 기준
  
  while(queue.length>0){
    const [curr, money] = queue.shift();
    let list=copy[curr].split(' ');
    const [canPass, updatedMoney] = check(list[0], Number(list[1]), money);
    if (!canPass) continue;
    if(curr===n-1) return 'Yes';
      
    for(let i=2; i<list.length-1; i++){
      if(!visited[list[i]-1][updatedMoney]) {
        visited[list[i]-1][updatedMoney]=true;
        queue.push([list[i]-1, updatedMoney]);
      }
    }
  }
  return 'No';
}

function check(char, num, currMoney){
  if (char === 'E') return [true, currMoney];
  if (char === 'L') {
    const updatedMoney = Math.max(currMoney, num);
    return [true, updatedMoney];
  }
  if (char === 'T') {
    if (currMoney < num) return [false, currMoney];
    return [true, currMoney - num];
  }
  return [false, currMoney];
}