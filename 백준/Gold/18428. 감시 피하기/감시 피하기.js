const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

let n=Number(input.shift());
let map=input.map(str=>str.split(' '));
let teachers=[];
for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(map[i][j]==='T') teachers.push([i,j]);
  }
}

let list=[[-1,0],[1,0],[0,-1],[0,1]];
let answer=false;

bt(0);

console.log(answer? 'YES':'NO');

function bfs(){
  for(let i=0; i<teachers.length; i++){
    let [cx, cy]=teachers[i];
    for(const [dx,dy] of list){
      let mx=cx+dx;
      let my=cy+dy;
      while(mx>=0 && mx<n && my>=0 && my<n){
        if(map[mx][my]==='O') break;
        if(map[mx][my]==='S') return false;
        mx+=dx;
        my+=dy;
      }
    }
  }
  return true;
}

function bt(depth){
  if(answer) return;
  if(depth===3){
    if(bfs()) answer=true;
    return;
  }
  for(let x=0; x<n; x++){
    for(let y=0; y<n; y++){
      if(map[x][y]==='X'){
        map[x][y]='O';
        bt(depth+1);
        map[x][y]='X';
      }
    }
  }
}
