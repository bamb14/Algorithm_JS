const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');

let [n, k, p, x] = input[0].split(' ').map(Number);

const numberOn=[
  '1111110', '0110000', '1101101',
  '1111001', '0110011', '1011011',
  '1011111', '1110000', '1111111', '1111011'
  ].map(x => parseInt(x, 2)); 
  // 비트마스크로 변환

const change=Array.from(Array(11), ()=>new Array(11));

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const diff = numberOn[i] ^ numberOn[j];
    change[i][j] = diff.toString(2).split('1').length - 1;
  }
}

// 현재 층수 X의 K자리 표현
// X를 K자리 문자열로 만들기 (padStart)
const currentDigits = x.toString().padStart(k, '0').split('').map(Number);

let result = 0;

for (let i = 1; i <= n; i++) {
  if (i === x) continue;

  const candidateDigits = i.toString().padStart(k, '0').split('').map(Number);

  let totalChange = 0;
  for (let j = 0; j < k; j++) {
    totalChange += change[currentDigits[j]][candidateDigits[j]];
    if (totalChange > p) break;
  }

  if (totalChange <= p) result++;
}

console.log(result);