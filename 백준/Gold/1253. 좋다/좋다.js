const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');

const n=Number(a[0])
const numbers=a[1].split(' ').map(Number).sort((a,b)=>a-b)

const length=numbers.length
let count=0;

const binarySearch=(target)=>{
    let start=0;
    let end=length-1;
    
    while(start<end){
        if (start === target) {
          start++;
          continue;
        } else if (end === target) {
          end--;
          continue;
        }
        
        const sum = numbers[start] + numbers[end];
        
        if(sum===numbers[target]) return true;
        else if(sum<numbers[target]) start++;
        else end--;
    }
    return false
    
}

for(let i=0; i<length; i++){
    if(binarySearch(i)) count++
}

console.log(count)
