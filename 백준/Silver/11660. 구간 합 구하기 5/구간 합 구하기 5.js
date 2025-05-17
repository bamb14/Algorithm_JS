const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m]=input.shift().split(' ').map(Number);
let map=new Array(n);
let dp=new Array(n);

for(let i=0; i<n; i++){
  map[i]=(input[i].split(' ').map(Number));
  let list=[map[i][0]];
  for(let j=1; j<n; j++){
    list.push(list[j-1]+map[i][j]);
  }
  dp[i]=list;
}
let answer=[];

for(let i=0; i<m; i++){
  const [x1, y1, x2, y2]=input[n+i].split(' ').map(Number);
  solution(x1, y1, x2, y2);
}
console.log(answer.join('\n'));
function solution(x1, y1, x2, y2){
  let sum=0;
  for(let i=x1; i<=x2; i++){
    if(y1>1) sum+=dp[i-1][y2-1]-dp[i-1][y1-2];
    else sum+=dp[i-1][y2-1];
  }
  answer.push(sum);
}