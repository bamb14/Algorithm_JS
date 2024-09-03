function solution(a, b, n) {
    let result=0;
    while(n>=a){
        const x=Math.floor(n/a);
        n %= a;
        n += (x * b);
        result +=(x*b);
    }
    return result;
}
