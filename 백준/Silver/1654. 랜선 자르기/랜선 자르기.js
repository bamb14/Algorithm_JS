const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [k, n] = input.shift().split(' ').map(Number);
const list = input.map(Number);

let start=1;
let end=Math.max(...list)

while(start<=end){
  let mid=~~((start+end)/2)
  let count=0;
  // console.log('mid', mid)
  for(const len of list){
    count+=~~(len/mid)
    // console.log(len, ~~(len/mid))
  }
  if(count>=n) start=mid+1
  else end=mid-1
}

console.log(end)