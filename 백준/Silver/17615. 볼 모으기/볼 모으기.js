const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const balls = input[1].split('');

// 왼쪽으로 빨간색 볼을 모을 때 필요한 이동 횟수 계산
function countRedMoves(balls) {
  let count = 0;
  let redCount = 0;

  // 왼쪽에서 오른쪽으로 순회하면서 빨간색 볼을 세고, 파란색 볼을 넘어설 때 이동 횟수 증가
  for (let i = 0; i < balls.length; i++) {
    if (balls[i] === 'R') {
      redCount++;
    } else {
      count = Math.min(count + 1, redCount); // 빨간색 볼을 넘어설 때마다 이동 횟수 증가
    }
  }
  return count;
}

// 오른쪽으로 빨간색 볼을 모을 때 필요한 이동 횟수 계산
function countBlueMoves(balls) {
  let count = 0;
  let blueCount = 0;

  // 왼쪽에서 오른쪽으로 순회하면서 파란색 볼을 세고, 빨간색 볼을 넘어설 때 이동 횟수 증가
  for (let i = 0; i < balls.length; i++) {
    if (balls[i] === 'B') {
      blueCount++;
    } else {
      count = Math.min(count + 1, blueCount); // 파란색 볼을 넘어설 때마다 이동 횟수 증가
    }
  }
  return count;
}

// 빨간색 볼을 왼쪽으로 모을 때의 최소 이동 횟수와 파란색 볼을 오른쪽으로 모을 때의 이동횟수를 구한다.
const minMoves = Math.min(countRedMoves(balls), countBlueMoves(balls));

console.log(minMoves);
