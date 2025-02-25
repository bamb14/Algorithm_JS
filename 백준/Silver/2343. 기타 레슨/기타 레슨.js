const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
const list = input[1].split(' ').map(Number);

let left=Math.max(...list);
let right=10000*m

while(left<=right){
  let mid=~~((left+right)/2)
  
  let blueNum=1; // mid크기일 시 블루레이 개수
  let oneBlue=0; // 각 블루레이크기 확인 변수
  
  for(const n of list){
     // 현재 플루레이의 크기에 더해도 mid 이하일 때
    if(oneBlue+n <= mid) oneBlue +=n
    else{
      // 새로 블루레이 크키를 현재 강의 시간으로 초기화
      oneBlue= n
      blueNum++ // 블루레이 개수 추가
    }
  }
  
  if(blueNum <= m) right=mid-1
  else left=mid+1
}

console.log(left)