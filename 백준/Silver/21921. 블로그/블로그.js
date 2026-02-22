const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const [n,m]=input.shift().split(' ').map(Number);
const list=input[0].split(' ').map(Number);

let max=list.slice(0,m).reduce((a,b)=>a+b,0);
let sum=max;
let cnt=1;

for(let i=1; i<=n-m; i++){
  sum-=list[i-1];
  sum+=list[i+m-1];
  if(max==sum) cnt++;
  else if(max<sum){
    max=sum;
    cnt=1;
  }
}
if(max==0) console.log('SAD');
else{
  console.log(max);
  console.log(cnt);
}