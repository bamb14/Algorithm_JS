const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let idx=0;
const [N, M]=input[idx++].split(' ').map(Number);

const A=[];
for (let i=0; i<N; i++) {
  A.push(input[idx++].split(' ').map(Number));
}

const [_, K]=input[idx++].split(' ').map(Number);
const B=[];
for (let i=0; i<M; i++) {
  B.push(input[idx++].split(' ').map(Number));
}

const result = Array.from({length:N}, () => Array(K).fill(0));

for (let i=0; i < N; i++) {
  for (let j = 0; j < K; j++) {
    for (let k = 0; k < M; k++) {
      result[i][j] += A[i][k] * B[k][j];
    }
  }
}

console.log(result.map(row => row.join(' ')).join('\n'));