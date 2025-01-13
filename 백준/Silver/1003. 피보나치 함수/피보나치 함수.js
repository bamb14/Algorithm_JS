const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');

list_0=[1,0]
list_1=[0,1]

function solution(n){
  const list_0 = [1, 0];
  const list_1 = [0, 1];

  for (let i = 2; i <= n; i++) {
    list_0.push(list_0[i - 1] + list_0[i - 2]);
    list_1.push(list_1[i - 1] + list_1[i - 2]);
  }

  return [list_0[n], list_1[n]];
}

for(let i=1; i<=a[0]; i++){
  const [count_0, count_1] = solution(a[i]);
  console.log(count_0, count_1);
}