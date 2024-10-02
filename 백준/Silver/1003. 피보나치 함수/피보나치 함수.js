const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');

function solution_0(n) {
    if (n === 0) return 1; // F(0) = 1
    if (n === 1) return 0; // F(1) = 0
    else {
        let array_0 = [1, 0]; // F(0) = 1, F(1) = 0
        for (let i = 2; i <= n; i++) { // n까지 반복
            array_0.push(array_0[i - 2] + array_0[i - 1]);
        }
        return array_0[n]; // n번째 항을 반환
    }
}

function solution_1(n) {
    if (n === 0) return 0; // F(0) = 0
    if (n === 1) return 1; // F(1) = 1
    else {
        let array_1 = [0, 1]; // F(0) = 0, F(1) = 1
        for (let i = 2; i <= n; i++) { // n까지 반복
            array_1.push(array_1[i - 2] + array_1[i - 1]);
        }
        return array_1[n]; // n번째 항을 반환
    }
}

for (let i = 1; i <= parseInt(a[0]); i++) { // 1부터 a[0]까지 반복
    console.log(solution_0(parseInt(a[i])), solution_1(parseInt(a[i])));
}
