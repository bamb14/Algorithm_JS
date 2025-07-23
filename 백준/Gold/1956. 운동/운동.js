let fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');

const [v, e] =input.shift().split(' ').map(Number);
const list=input.map(str=>str.split(' ').map(Number));
const dist = Array.from({ length: v + 1 }, () => Array(v + 1).fill(Infinity));

list.forEach(([a,b,c])=>{
  dist[a][b]=c;
})

for(let k=1; k<=v; k++){
  for(let i=1; i<=v; i++){
    for(let j=1; j<=v; j++){
      if(dist[i][j]>dist[i][k]+dist[k][j]){
        dist[i][j]=dist[i][k]+dist[k][j];
      }
    }
  }
}

let answer=Infinity;
for(let i=1; i<=v; i++){
  answer=Math.min(answer, dist[i][i]);
}

console.log(answer===Infinity? -1: answer);