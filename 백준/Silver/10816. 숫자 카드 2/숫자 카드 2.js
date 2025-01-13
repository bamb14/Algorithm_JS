const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');

const card=a[1].split(' ')
const numbers=a[3].split(' ')

const frequency = {};

for (let i = 0; i < card.length; i++) {
  if (frequency[card[i]]) {
    frequency[card[i]]++;
  } else {
    frequency[card[i]] = 1;
  }
}

let results = [];

for (let i = 0; i < numbers.length; i++) {
  results.push(frequency[numbers[i]] || 0);
}

console.log(results.join('\n'));