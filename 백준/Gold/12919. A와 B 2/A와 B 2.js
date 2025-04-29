const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let target=input[0];
let word1=input[1];
let answer=0;

dfs(word1);
console.log(answer);

function dfs(word){
  if(answer) return;
  if(word.length<=target.length){
    if(word===target) answer=1;
    return;
  }
  
  if(word[word.length-1]==='A') dfs(word.slice(0, word.length-1));
  if(word[0]==='B') dfs(word.split('').reverse().join('').slice(0, word.length-1));

}