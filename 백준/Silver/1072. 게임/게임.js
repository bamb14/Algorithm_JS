const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [x,y]=input[0].split(' ').map(Number);
let z = Math.floor(y*100/x);

if(z>=99) console.log(-1);
else{
  let left=1, right=x;
  
  let answer=x;
  
  while(left<=right){
    const mid=Math.floor((left+right)/2);
    
    let newZ=Math.floor((y+mid)*100/(x+mid));
    if(z<newZ){
      right=mid-1;
      answer=Math.min(answer, mid);
    }
    else left=mid+1;
  }
  
  console.log(answer);
}