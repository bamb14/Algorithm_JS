const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const MOD=1000000000;

// dp[length][lastNum][bitmask]
const dp=Array.from(Array(n+1), ()=>Array.from(Array(10), ()=>Array(1024).fill(0)));

for(let i=1; i<=9; i++){
  dp[1][i][1<<i]=1;
}

for(let len=1; len<n; len++){
  for(let last=0; last<=9; last++){
    for(let mask=0; mask<1024; mask++){
      const curr=dp[len][last][mask];
      
      if(curr==0) continue;
      
      if(last>0){
        const next=last-1;
        const newMask=mask | (1<<next);
        dp[len+1][next][newMask]+=curr;
        dp[len+1][next][newMask]%=MOD;
      }
      
      if(last<9){
        const next=last+1;
        const newMask=mask | (1<<next);
        dp[len+1][next][newMask]+=curr;
        dp[len+1][next][newMask]%=MOD;
      }
    }
  }
}

let answer=0;
for(let i=0; i<=9; i++){
  answer=(answer+dp[n][i][1023])%MOD;
}

console.log(answer%MOD);
