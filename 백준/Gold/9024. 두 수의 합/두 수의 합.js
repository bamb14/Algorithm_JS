const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input.shift());

const solution = (list, k) => {
  let start = 0;
  let end = list.length - 1;
  
  let count = 0;  // k와 가장 가까운 합을 만드는 경우의 개수
  let minDiff = Infinity;  // 최소 차이를 저장하는 변수

  while (start < end) {
    let sum = list[start] + list[end];
    let diff = Math.abs(sum - k);
    
    if (diff < minDiff) {
      minDiff = diff;
      count = 1;  // 새로운 최소 차이가 등장했으므로 count 초기화
    } else if (diff === minDiff) {
      count++;
    }

    if (sum === k) {
      start++;
      end--;
    } else if (sum < k) {
      start++;
    } else {
      end--;
    }
  }
  return count;
};

for (let i = 0; i < n; i++) {
  const [s, k] = input[i * 2].split(" ").map(Number);
  const list = input[i * 2 + 1].split(" ").map(Number).sort((a, b) => a - b);

  console.log(solution(list, k));
}
