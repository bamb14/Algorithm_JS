function solution(n) {
    return fibo(n);
}

function fibo(n){
    let first=1;
    let second=1;
    let result=0;
    for(let i=2; i<n; i++){
        result=(first+second)%1234567;
        first=second;
        second=result;
    }
    return result;
}