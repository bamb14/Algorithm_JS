const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input[0]);

if(n<2){
  console.log(0);
  return;
}

const sieve = new Uint8Array(n + 1).fill(1);
sieve[0] = sieve[1] = 0;
for (let i = 2; i * i <= n; i++) {
  if (sieve[i]) {
    for (let j = i * i; j <= n; j += i) sieve[j] = 0;
  }
}
const list = [];
for (let i = 2; i <= n; i++) if (sieve[i]) list.push(i);

let left = 0, right = 0, sum = 0, answer = 0;
while (true) {
  if (sum >= n) {
    if (sum === n) answer++;
    sum -= list[left++];
  } else {
    if (right === list.length) break;
    sum += list[right++];
  }
}

console.log(answer);