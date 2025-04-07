const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

const [n,m]=input.shift().split(' ').map(Number);
const [r,c,d]=input.shift().split(' ').map(Number);
const map=input.map(str=>str.split(' ').map(Number));

const list=[[-1,0], [0,1],[1,0],[0,-1]];

let queue=[[r,c]];
let D=d;
let cnt=0;
while(queue.length){
  let [x,y]=queue.shift();
  if(map[x][y]===0){
    cnt++;
    map[x][y]=-1; // 청소한 칸
  }
  
  let bool=false;
  let idx=D;
  for(let i=0; i<4; i++){
    idx=(idx+3)%4;
    cx=x+list[idx][0];
    cy=y+list[idx][1];
    if(cx<0||cx>=n||cy<0||cy>=m) continue;
    // 주변 중 청소되지 않은 빈칸이 있는 경우
    if(map[cx][cy]===0){
      bool=true;
      D=idx;
      queue.push([cx,cy]);
      break;
    }
  }
  
  // 주변 중 청소되지 않은 빈칸이 없는 경우
  if(!bool){
    let cx=x-list[D][0];
    let cy=y-list[D][1];
    if(cx<0||cx>=n||cy<0||cy>=m||map[cx][cy]===1) {
      break;
    }
    else queue.push([cx,cy]);
  }
}
console.log(cnt);
