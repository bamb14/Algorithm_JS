const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
let answer=0;
for(let i=1; i<=n; i++){
  const strNum=String(i);
  if(strNum.length==1){
    answer++;
    continue;
  }
  const diff=strNum[1]-strNum[0];
  let flag=true;
  for(let j=2; j<strNum.length; j++){
    if(strNum[j]-strNum[j-1]!==diff){
      flag=false;
      break;
    }
  }
  if(flag) answer++;
}

console.log(answer);