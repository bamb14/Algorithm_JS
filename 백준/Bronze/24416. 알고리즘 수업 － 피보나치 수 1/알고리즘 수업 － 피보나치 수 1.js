const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();

function code1(n){
    if(n===1||n===2) return 1;
    else{
        let array=[1,1];
        for(let i=2; i<n; i++){
            array.push(array[i-2]+array[i-1]);
        }
        return array[array.length-1];
    }
}

console.log(code1(a), a-2);