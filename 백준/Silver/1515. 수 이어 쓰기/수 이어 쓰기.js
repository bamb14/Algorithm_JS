const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');

const S=input[0];

let i = 0;
let n = 0;

while (i < S.length) {
  n += 1;
  const digits = String(n);
  for (let d = 0; d < digits.length && i < S.length; d++) {
    if (digits[d] === S[i]) i += 1;
  }
}

console.log(n.toString());