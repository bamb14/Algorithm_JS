const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');

let map=input.map(str=>str.split(''));

let bottom=11;
let width=5;
const move=[[-1,0],[1,0],[0,-1],[0,1]];

let answer=0;

while(true){
  let plag=false;
  let visited=Array.from(Array(12), ()=>Array(6).fill(false));
  let removeList = [];
  
  for(let i=bottom; i>=0; i--){
    for(let j=0; j<width+1; j++){
      if(!visited[i][j] && map[i][j]!=='.'){
        let group=bfs(i,j, visited);
        if(group.length>=4){
          removeList.push(...group);
          plag=true;
        }
      }
    }
  }
  if(!plag) break;
  removeList.sort((a,b)=>a[0]-b[0]);
  for(let [x,y] of removeList){
    for(let i=x; i>0; i--){
      map[i][y]=map[i-1][y];
    }
    map[0][y]='.';
  }
  answer++;
}
console.log(answer);

function bfs(i, j, visited){
  let queue = [[i, j]];
  let link = [[i, j]];
  visited[i][j] = true;

  while (queue.length > 0) {
    let [x, y] = queue.shift();

    for (const [dx, dy] of move) {
      let cx = x + dx;
      let cy = y + dy;
      if (cx < 0 || cy < 0 || cx > bottom || cy > width) continue;

      if (!visited[cx][cy] && map[x][y] === map[cx][cy]) {
        visited[cx][cy] = true;
        queue.push([cx, cy]);
        link.push([cx, cy]);
      }
    }
  }
  
  return link;
}