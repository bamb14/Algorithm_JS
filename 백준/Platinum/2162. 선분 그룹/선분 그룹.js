const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const lines = input.slice(1).map(line => line.split(" ").map(Number));

// Union-Find
const parent = Array.from({ length: N }, (_, i) => i);
const size = Array(N).fill(1);

function find(x) {
  if (parent[x] === x) return x;
  return parent[x] = find(parent[x]);
}

function union(a, b) {
  a = find(a);
  b = find(b);

  if (a === b) return;

  parent[b] = a;
  size[a] += size[b];
}

// CCW
function ccw(x1, y1, x2, y2, x3, y3) {
  const res = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);
  if (res > 0) return 1;
  if (res < 0) return -1;
  return 0;
}

// 두 선분이 교차하는지 확인
function isIntersect(l1, l2) {
  const [x1, y1, x2, y2] = l1;
  const [x3, y3, x4, y4] = l2;

  const ab = ccw(x1, y1, x2, y2, x3, y3) * ccw(x1, y1, x2, y2, x4, y4);
  const cd = ccw(x3, y3, x4, y4, x1, y1) * ccw(x3, y3, x4, y4, x2, y2);

  // 일직선인 경우 (겹치는지 확인 필요)
  if (ab === 0 && cd === 0) {
    // 정렬해서 범위 겹치는지 확인
    if (Math.min(x1, x2) <= Math.max(x3, x4) &&
        Math.min(x3, x4) <= Math.max(x1, x2) &&
        Math.min(y1, y2) <= Math.max(y3, y4) &&
        Math.min(y3, y4) <= Math.max(y1, y2)) {
      return true;
    }
    return false;
  }

  return ab <= 0 && cd <= 0;
}

// 모든 쌍 검사
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (isIntersect(lines[i], lines[j])) {
      union(i, j);
    }
  }
}

// 그룹 개수 + 최대 크기 계산
const groupCount = new Set();
let maxSize = 0;

for (let i = 0; i < N; i++) {
  const root = find(i);
  groupCount.add(root);
  maxSize = Math.max(maxSize, size[root]);
}

console.log(groupCount.size);
console.log(maxSize);