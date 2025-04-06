const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const broke = input.length > 2 ? input[2].split(' ') : [];

let min = Math.abs(100 - n); // 기본적으로 + / - 로만 이동

function canMove(num) {
  return num.toString().split('').every(digit => !broke.includes(digit));
}

for (let i = 0; i <= 1000000; i++) {
  if (canMove(i)) {
    let count = i.toString().length + Math.abs(n - i);
    min = Math.min(min, count);
  }
}

console.log(min);
