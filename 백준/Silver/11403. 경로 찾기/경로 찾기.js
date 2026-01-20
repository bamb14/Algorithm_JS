const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const map=input.map(str=>str.split(' ').map(Number));

for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(map[i][j]==0) map[i][j]=Infinity;
  }
}

for(let m=0; m<n; m++){
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      map[i][j]=Math.min(map[i][m]+map[m][j], map[i][j]);
      if(isFinite(map[i][j])) map[i][j]=1;
    }
  }
}

for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(isFinite(map[i][j])) map[i][j]=1;
    else map[i][j]=0;
  }
}

console.log(map.map(list=>list.join(' ')).join('\n'));