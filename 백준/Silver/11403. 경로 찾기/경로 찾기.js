const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const map=input.map(str=>str.split(' '));

for(let m=0; m<n; m++){
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(map[i][m]==1 && map[m][j]==1) map[i][j]=1
    }
  }
}

console.log(map.map(list=>list.join(' ')).join('\n'));