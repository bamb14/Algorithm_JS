const fs = require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n')[0];

const parts = input.split('-');
const sum = (str) => str.split('+').reduce((acc, v) => acc + Number(v), 0);

let ans = sum(parts[0]);
for (let i = 1; i < parts.length; i++) ans -= sum(parts[i]);

console.log(ans);