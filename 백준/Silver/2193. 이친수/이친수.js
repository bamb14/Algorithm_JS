const fs = require("fs");

// 입력 받기
let a = fs.readFileSync(0).toString().trim();

// BigInt로 변환
let bitInt = BigInt(a);

// 피보나치 수열 계산
let list = [];
list[1] = 1n;
list[2] = 1n;

function solution_dfs(n) {
  // 피보나치 수열을 1부터 n까지 계산
  for (let i = 3; i <= n; i++) {
    list[i] = list[i - 1] + list[i - 2];
  }
  // n번째 피보나치 수 출력
  console.log(list[n].toString());
}

// 피보나치 수열 계산 실행
solution_dfs(bitInt);
