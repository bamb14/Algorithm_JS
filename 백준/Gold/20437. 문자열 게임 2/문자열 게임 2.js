const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const T = Number(input[0]);
let idx = 1;

for (let t = 0; t < T; t++) {
  const s = input[idx++];
  const k = Number(input[idx++]);
  console.log(solve(s, k));
}

function solve(s, k) {
  const n = s.length;
  let minLen = Infinity;
  let maxLen = -1;

  // 각 문자별 인덱스 리스트 준비
  const positions = Array.from({ length: 26 }, () => []);
  for (let i = 0; i < n; i++) {
    positions[s.charCodeAt(i) - 97].push(i);
  }

  for (let charIdx = 0; charIdx < 26; charIdx++) {
    const pos = positions[charIdx];
    if (pos.length < k) continue;

    // 슬라이딩 윈도우
    for (let i = 0; i <= pos.length - k; i++) {
      const start = pos[i];
      const end = pos[i + k - 1];

      // 3번 조건: 최소 길이
      minLen = Math.min(minLen, end - start + 1);

      // 4번 조건: 좌우 확장
      let l = start;
      let r = end;
      let cnt = k;

      // 왼쪽 확장
      while (l > 0) {
        if (s[l - 1] === s[start]) {
          if (cnt + 1 > k) break;
          cnt++;
        }
        l--;
      }

      // 오른쪽 확장
      while (r < n - 1) {
        if (s[r + 1] === s[start]) {
          if (cnt + 1 > k) break;
          cnt++;
        }
        r++;
      }

      // s[start]로 시작하고 끝나는 가장 긴 구간은 무조건 l~r 내의 가장 왼쪽 s[start]부터 가장 오른쪽 s[start]까지
      let first = -1;
      let last = -1;
      for (let j = l; j <= r; j++) {
        if (s[j] === s[start]) {
          if (first === -1) first = j;
          last = j;
        }
      }

      if (first !== -1 && last !== -1) {
        maxLen = Math.max(maxLen, last - first + 1);
      }
    }
  }

  if (minLen === Infinity) return -1;
  return `${minLen} ${maxLen}`;
}
