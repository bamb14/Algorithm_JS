const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const [n,m]=input.shift().split(' ').map(Number);
const arr=input.slice(0,n).map(str=>str.split(' ').map(Number));
const k=Number(input[n]);

const sum=Array.from(Array(n+1), ()=>Array(m+1).fill(0));

let prev=0;
for(let i=1; i<=n; i++){
  for(let j=1; j<=m; j++){
    sum[i][j]=arr[i-1][j-1]+sum[i-1][j]+sum[i][j-1]-sum[i-1][j-1];
  }
}

const answer=[];

for(let idx=1; idx<=k; idx++){
  let [i,j,x,y]=input[idx+n].split(' ').map(Number);

  const result=sum[x][y]-sum[i-1][y]-sum[x][j-1]+sum[i-1][j-1];
  answer.push(result);
}

console.log(answer.join('\n'));