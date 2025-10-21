const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, N] = input.shift().split(' ').map(Number);
const board=input.map(str=>str.split(''));

if(N===1) {
  console.log(board.map(char=>char.join('')).join('\n'));
  return;
}
let queue=[];

if(N%2===0){
  console.log(Array(n).fill('O'.repeat(m)).join('\n'));
  return;
}
for(let i=0; i<=(N+2)%4; i++){
  if(i%2===0) step3();
  else step4();
}
console.log(board.map(char=>char.join('')).join('\n'));

// 폭탄 설치
function step3(){
  for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
      if(board[i][j]==='O') queue.push([i,j]);
      else board[i][j]='O';
    }
  }
}

function step4(){
  const move=[[-1,0], [1,0], [0,-1],[0,1]];
  
  for(let [i,j] of queue){
    board[i][j]='.';
    for(const [dx,dy] of move){
      let cx=i+dx, cy=j+dy;
      if(cx<0 || cy<0 || cx>=n || cy>=m) continue;
      if(!queue.some(([x,y])=>x===cx && y===cy)){
        board[cx][cy]='.';
      }
    }
  }
  queue=[];
}
