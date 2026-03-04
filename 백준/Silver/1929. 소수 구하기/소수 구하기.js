const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m,n] = input[0].split(' ').map(Number);

const sieve = Array(n + 1).fill(1);
sieve[0] = sieve[1] = 0;

for (let i=2; i*i <= n; i++) {
  if (sieve[i]) {
    for (let j=i*i; j<=n; j+=i) sieve[j] = 0;
  }
}

const primes = [];
for (let i=m; i<=n; i++){
  if (sieve[i]) primes.push(i);
}

console.log(primes.join('\n'));