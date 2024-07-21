function solution(a, b) {
    const sum=a.map((a,index)=>a*b[index]);
    return sum.reduce((a,b)=>a+b);
}