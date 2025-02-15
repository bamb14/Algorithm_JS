const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n, s] = input[0].split(" ").map(Number);
const list = input[1].split(" ").map(Number);

let left = 0, right = 0;
let sum = 0;
let answer = Infinity;

while (right < n) {
    sum += list[right];
    
    while (sum >= s) {
        answer = Math.min(answer, right - left + 1);
        sum -= list[left];
        left++;
    }

    right++;
}

console.log(answer === Infinity ? 0 : answer);
