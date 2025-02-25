const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
const list = input[1].split(' ').map(Number);

let left=Math.max(...list);
let right=list.reduce((a,b)=> a+b,0)

while(left<=right){
  let mid=~~((left+right)/2)
  
  let blueNum=1; // mid크기일 시 블루레이 개수
  let oneBlue=0; // 각 블루레이크기 확인 변수
  for(const n of list){
    if(oneBlue+n <= mid) oneBlue +=n
    else{
      oneBlue= n
      blueNum++
    }
  }
  if(blueNum <=m) right=mid-1
  else left=mid+1
}

console.log(left)