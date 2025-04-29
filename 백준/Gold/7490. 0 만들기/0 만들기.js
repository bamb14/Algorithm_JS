const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let T = Number(input.shift());
let cases = input.map(Number);
let result = [];

for (let n of cases) {
  let temp = [];
  dfs(1, '1', n, temp);
  result.push(temp.join('\n'));
}
console.log(result.join('\n\n'));

// expr: 현재 식 (예: '1+2 3')
// n: 마지막 숫자까지 확장할 숫자 (1~n)
// temp: 결과 저장소
function dfs(curr, expr, n, temp) {
  if (curr === n) {
    if (evaluate(expr) === 0) {
      temp.push(expr);
    }
    return;
  }

  let next = curr + 1;

  dfs(next, expr + ' ' + next, n, temp); // 공백: 이어붙이기
  dfs(next, expr + '+' + next, n, temp); // +
  dfs(next, expr + '-' + next, n, temp); // -
}

function evaluate(expr) {
  // 공백 제거 후 수식 평가
  return eval(expr.split(' ').join(''));
}
