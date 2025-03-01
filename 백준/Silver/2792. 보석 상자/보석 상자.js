const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m]=input.shift().split(' ').map(Number)
const list=input.map(Number)

let start=1;
let end=Math.max(...list)

const solution=()=>{
  while(start<=end){
    let mid=~~((start+end)/2)

    let count=0;
    for(const num of list){
      if(num%mid===0) count+=num/mid
      else count+=(~~(num/mid)+1)
    }

    if(count>n) start=mid+1;
    else {
      end=mid-1;
    }
  }
  return start
}

console.log(solution())
