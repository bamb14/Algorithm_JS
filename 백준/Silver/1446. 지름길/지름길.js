const fs=require("fs")
let input=fs.readFileSync(0).toString().trim().split('\n')

const [n,d]=input.shift().split(' ').map(Number)
const list=input.map(str=>str.split(' ').map(Number))

let dp=new Array(d+1).fill(Infinity)
dp[0]=0

for (let i = 0; i <= d; i++) {
  if (i > 0) dp[i] = Math.min(dp[i], dp[i - 1] + 1);

  for (const [start, end, dist] of list) {
    if (start === i && end <= d) {
      dp[end] = Math.min(dp[end], dp[start] + dist);
    }
  }
}

console.log(dp[d])