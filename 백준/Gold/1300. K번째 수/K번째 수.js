const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input[0]);
const k=Number(input[1]);

let left=1, right=n**2;

while(left<right){
  let mid=Math.floor((left+right)/2);
  let cnt=0;
  
  for(let i=1; i<=n; i++){
    cnt+=Math.min(Math.floor(mid/i), n);
  }
  
  if(cnt<k) left=mid+1;
  else right=mid;
}

console.log(left);