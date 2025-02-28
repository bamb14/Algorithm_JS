const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m]=input.shift().split(' ').map(Number)
const list=input.map(Number).sort((a,b)=>a-b)

let start=1;
let end=~~(Math.max(...list))

while(start<=end){
  let mid=~~((start+end)/2)
  // console.log('mid',mid)
  
  let count=1; // 첫번째 집은 무조건
  let prev=list[0];
  for(let i=1; i<list.length; i++){
    // console.log(prev)
    if(list[i]-prev>=mid) {
      // console.log(list[i]-prev)
      count++
      prev=list[i]
    }
  }
  // console.log('count',count)
  if(count>=m) start=mid+1;
  else end=mid-1
}

console.log(end)