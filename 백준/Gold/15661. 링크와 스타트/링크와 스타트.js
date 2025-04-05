const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const map=input.map(str=>str.split(' ').map(Number));
let visited = new Array(n).fill(0);

let min=Infinity;
for(let i=2; i<=Math.floor(n/2); i++){
  backtracking(0, i, 0);
}
console.log(min);
function backtracking(depth, cnt, idx){
  if(depth===cnt){
    solution();
    return;
  }
  for(let i=idx; i<n; i++){
    if(!visited[i]){
      visited[i]=1;
      backtracking(depth+1, cnt, i);
      visited[i]=0;
    }
  }
}

function solution(){
  let team1=0;
  let team2=0;
  
  for(let i=0; i<n-1; i++){
    for(let j=i+1; j<n; j++){
      if(visited[i] && visited[j]) team1+=map[i][j]+map[j][i];
      else if(!visited[i] && !visited[j]) team2+=map[i][j]+map[j][i];
    }
  }
  
  const diff=Math.abs(team1-team2);
  min=Math.min(min, diff);
}