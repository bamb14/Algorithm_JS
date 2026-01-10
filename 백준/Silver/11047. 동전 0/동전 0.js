const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');

let [n,k]=input.shift().split(' ').map(Number);
const coins=input.map(Number);
let cnt=0;
for(let i=n-1; i>=0; i--){
  if(k>=coins[i]){
    const mox=Math.floor(k/coins[i]);
    k-=coins[i]*mox;
    cnt+=mox;
  }
}

console.log(cnt);