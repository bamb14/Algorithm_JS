const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n=Number(input[0]);

const col=Array(n).fill(false); // 해당 열에 이미 퀸이 있는가
const diag1=Array(2*n-1).fill(false); // ↘ 대각선(좌상→우하)
const diag2=Array(2*n-1).fill(false); // ↗ 대각선(좌하→우상)

let answer=0;

bt(0);

console.log(answer);

function bt(r) {
  if (r === n) {
    answer++;
    return;
  }

  for (let c = 0; c < n; c++) {
    const d1 = r - c + (n - 1);
    const d2 = r + c;

    if (col[c] || diag1[d1] || diag2[d2]) continue;
    
    // r행 c열에 퀸을 놓음
    col[c] = diag1[d1] = diag2[d2] = true;
    bt(r + 1);
    col[c] = diag1[d1] = diag2[d2] = false;
  }
}
