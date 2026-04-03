const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str=input[0];
const n=str.length;
let min=(n==2 && str[0]==str[1])? 2 :(n-1)*2+1;


for(let i=n-1; i>=0; i--){
  let left=i, right=i;
  
  while(left>=0 && right<n){
    if(str[left]!==str[right]) break;
    
    if(right==n-1){
      let len=n+(n-(right-left+1));
      min=Math.min(min, len);
      break;
    }
    left--;
    right++;
  }

  let l=i-1, r=i;
  while(l>=0 && r<n){
    if(str[l]!==str[r]) break;
    
    if(r==n-1){
      let len=n+(n-(r-l+1));
      min=Math.min(min, len);
      break;
    }
    l--;
    r++;
  }
}

console.log(min);