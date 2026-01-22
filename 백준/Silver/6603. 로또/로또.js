const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

let index=0;
const answer=[];
while(input[index]!=='0'){
  const [k, ...list]=input[index++].split(' ').map(Number);
  bt([], 0, k);
  answer.push('');
  
  function bt(arr, idx, k){
    if(arr.length>=6){
      answer.push(arr.join(' '));
      return;
    }
    
    for(let i=idx; i<list.length; i++){
      arr.push(list[i]);
      bt(arr, i+1, k);
      arr.pop();
    }
  }
}
console.log(answer.join('\n'));