const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');

const [n,m,l,k]=input.shift().split(' ').map(Number);
const stars = input.map(str => str.split(' ').map(Number));

let max=0;
for (const [y1, x1] of stars) {
  for (const [y2, x2] of stars) {
    // 시작점 (x1, y2)
    const startX = x1;
    const startY = y2;

    let cnt = 0;

    for (const [sy, sx] of stars) {
      if (
        sx >= startX && sx <= startX + l &&
        sy >= startY && sy <= startY + l
      ) {
        cnt++;
      }
    }

    max = Math.max(max, cnt);
  }
}

console.log(k-max);
