const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

let n=Number(input[0]);

console.log(n%2!==0? 'SK':'CY');