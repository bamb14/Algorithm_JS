const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input.shift());
const list=input[0].split(' ').map(Number)

let start = 0;
let end = list.length - 1;

let minDiff = Infinity;
let answer=[]

while (start < end) {
  let sum = list[start] + list[end];
  let diff = Math.abs(sum);

  if (diff < minDiff) {
    minDiff = diff;
    answer=[]
    answer.push(list[start],list[end])
  } else if (diff === minDiff) {
    answer.push(list[start],list[end])
  }

  if (sum < 0) {
    start++;
  } else {
    end--;
  }
}

console.log(answer[0], answer[1])
  
