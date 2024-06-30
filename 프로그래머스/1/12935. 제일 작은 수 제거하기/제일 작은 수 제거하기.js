function solution(arr) {
    const min=[...arr].sort((a,b)=>a-b)[0];
    return arr.length===1? [-1]: arr.filter(a=>a!==min);
}