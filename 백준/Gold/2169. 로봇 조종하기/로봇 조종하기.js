const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input.shift().split(' ').map(Number);
let map = input.map(str => str.split(' ').map(Number));
const L_INF = Number.MIN_VALUE;

let dp = Array.from(Array(n), () => new Array(m).fill(null)); // DP 테이블 (null은 방문하지 않음을 의미)

dp[0][0]=map[0][0];

for (let j=1; j<m; j++) dp[0][j] = dp[0][j-1] + map[0][j];

for (let i=1; i<n; i++) {
    let move2right = Array(m).fill(L_INF);	// 오른쪽으로 이동할 때의 최대 가치
    let move2left = Array(m).fill(L_INF);	// 왼쪽으로 이동할 때의 최대 가치
  
  	// 시작 칸 초기화
    move2right[0] = dp[i-1][0] + map[i][0];
    move2left[m-1] = dp[i-1][m-1] + map[i][m-1];

    for (let j=1; j<m; j++) move2right[j] = Math.max(dp[i-1][j], move2right[j-1]) + map[i][j];		// 위에서 아래로 이동했을 때와 오른쪽으로 이동했을 때의 가치 비교
    for (let j=m-2; j>=0; j--) move2left[j] = Math.max(dp[i-1][j], move2left[j+1]) + map[i][j];	// 위에서 아래로 이동했을 때와 왼쪽으로 이동했을 때의 가치 비교
    for (let j=0; j<m; j++) dp[i][j] = Math.max(move2right[j], move2left[j]);
}

console.log(dp[n-1][m-1]);