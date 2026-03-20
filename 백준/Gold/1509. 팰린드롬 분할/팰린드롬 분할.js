const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const list=input[0].split('');
const n=list.length;
const isPalindrome=Array.from(Array(n), ()=>Array(n).fill(false));

for(let i=0; i<n; i++){
  for(let j=i; j<n; j++){
    if(i==j){
      isPalindrome[i][j]=true;
      // continue;
    }
    else {
      let left=i, right=j;
      let flag=true;
      while(left<right){
        if(list[left]!==list[right]){
          flag=false;
          break;
        }
        left++;
        right--;
      }
      if(flag) isPalindrome[i][j]=true;
    }
  }
}

const dp=Array(n);
// 0 ~ i까지 문자열을 팰린드롬으로 나눌 때 최소 개수

for (let i = 0; i < n; i++) {
  dp[i] = Infinity;

  for (let j = 0; j <= i; j++) {
    if (isPalindrome[j][i]) {
      if (j === 0) dp[i] = 1;
      else dp[i] = Math.min(dp[i], dp[j - 1] + 1);
    }
  }
}
console.log(dp[n-1]);